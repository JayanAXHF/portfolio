import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ReactLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef, useState } from "react";
import "@fontsource/space-grotesk";
import "@fontsource/jetbrains-mono";
import Project from "./project";
import BigName from "./big_name";
import MUN from "./muns";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Toaster, toast as sonnerToast } from "sonner";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, SplitText);

interface MUN {
  year: number;
  name: string;
  committee: string;
  portfolio: string;
  award: string;
}

const projects = [
  {
    title: "Filessh",
    description:
      "A terminal-based file browser written in rust that allows you to seamlessly interact with files on your remote servers",
    link: "https://github.com/jayanaxhf/filessh",
    image: "/filessh.avif",
  },
  {
    title: "gitv",

    description:
      "gitv is a terminal-based viewer for GitHub issues which allows you to view and manage issues directly from the terminal.",
    link: "https://github.com/jayanaxhf/gitv",
    image: "/gitv.avif",
  },
  {
    title: "Valtam",
    description:
      "An AI chatbot integrated with a model that understands the questions of CBSE students",
    link: "https://github.com/JayanAXHF/Vultam",
    image: "/valtam.avif",
  },
  {
    title: "homebrew-zathura",
    description: "A Homebrew formula for the zathura PDF viewer",
    link: "https://github.com/homebrew-zathura/homebrew-zathura",
    image: "/homebrew-zathura.avif",
  },
  {
    title: "modder-rs",
    description:
      "An expansive terminal UI application to make downloading, updating and managing minecraft mods easier.",
    link: "https://github.com/jayanaxhf/modder-rs",
    image: "/modder_tui.avif",
  },
];

const muns: MUN[] = [
  {
    name: "AIKYAM",
    year: 2024,
    committee: "WHO",
    portfolio: "India",
    award: "Best Delegate",
  },
  {
    name: "KEDMUN",
    year: 2024,
    committee: "UNEP",
    portfolio: "Pakistan",
    award: "Verbal Mention",
  },
  {
    name: "DPSI Aurelia",
    year: 2025,
    committee: "R&AW",
    portfolio: "Lt. Gen KJS Dhillon",
    award: "HM (5th)",
  },
  {
    name: "Lotus Sansad",
    year: 2025,
    committee: "RS 1",
    portfolio: "Minister of Minority Affairs",
    award: "N/A",
  },
  {
    name: "SHISMUN",
    year: 2025,
    committee: "UNODC",
    portfolio: "Canada",
    award: "Verbal Mention (6th)",
  },
  {
    name: "MOSMUN",
    year: 2025,
    committee: "R&AW",
    portfolio: "Minister of Home Affairs",
    award: "VB (5th)",
  },
  {
    name: "VIDMUN",
    year: 2025,
    committee: "Al Qaeda",
    portfolio: "Adam Gadahn",
    award: "High Commendation (2nd)",
  },
  {
    name: "BBIMUN",
    year: 2025,
    committee: "UNHRC",
    portfolio: "Maldives",
    award: "Special Mention 1 (4th)",
  },
  {
    name: "KEDMUN",
    year: 2025,
    committee: "UNGA",
    portfolio: "Rapporteur",
    award: "",
  },
  {
    name: "IUMUN",
    year: 2026,
    committee: "JCC (US)",
    portfolio: "Secretary of War",
    award: "High Commendation (2nd)",
  },
  {
    name: "SHISMUN",
    year: 2026,
    committee: "CCC",
    portfolio: "Minister of Home Affairs",
    award: "Best Delegate",
  },
];

const Home = () => {
  const containerRef = useRef(null);
  const nameSvgRef = useRef(null);
  const lightDarkRef = useRef([]);
  const projectsSectionRef = useRef(null);
  const munsSectionRef = useRef(null);
  const imgRef = useRef(null);
  const cursorRef = useRef(null);
  const contactRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const projectImageRef = useRef(null);
  const [currentImage, setCurrentImage] = useState("/filessh.avif");

  const lenisRef = useRef(null);

  useEffect(() => {
    function update(time: any) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  const onEnter = () => {
    console.debug("Enter");
    gsap.to(imgRef.current, { autoAlpha: 1, duration: 0.2 });
  };

  const onLeave = () => {
    gsap.to(imgRef.current, { autoAlpha: 0, duration: 0.2 });
  };

  const onMove = (e: any) => {
    gsap.set(imgRef.current, {
      x: e.pageX + 75,
      y: e.pageY + 125,
      duration: 1,
      ease: "power1.inOut",
    });
  };

  const onCursorMove = (e: any) => {
    gsap.set(cursorRef.current, {
      x: e.pageX,
      y: e.pageY,
    });
    gsap.set(projectImageRef.current, {
      x: e.pageX + 220,
      y: e.pageY,
    });
  };

  const onCursorEnter = () => {
    console.debug("Enter");
    gsap.to(projectImageRef.current, { autoAlpha: 1, duration: 0.2 });
    gsap.to(cursorRef.current, { autoAlpha: 1, duration: 0.2 });
  };

  const onCursorLeave = () => {
    gsap.to(cursorRef.current, { autoAlpha: 0, duration: 0.2 });
    gsap.to(projectImageRef.current, { autoAlpha: 0, duration: 0.2 });
  };

  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        backgroundColor: "var(--color-dark-primary)",
        scrollTrigger: {
          trigger: nameSvgRef.current,
          start: "bottom center",
          end: "bottom center",
          scrub: 0.5,
        },
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(lightDarkRef.current, {
        color: "var(--color-light-primary)",
        borderRightColor: "#fcfaf225",
        fill: "var(--color-light-primary)",
        scrollTrigger: {
          trigger: nameSvgRef.current,
          start: "bottom center",
          end: "bottom center",
          scrub: 0.5,
        },
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(containerRef.current, {
        backgroundColor: "var(--color-light-primary)",
        scrollTrigger: {
          trigger: projectsSectionRef.current,
          start: "bottom center",
          end: "bottom center",
          scrub: true,
        },
      });
      gsap.to(lightDarkRef.current, {
        color: "var(--color-dark-primary)",
        borderRightColor: "#16161625",
        fill: "var(--color-dark-primary)",
        scrollTrigger: {
          trigger: projectsSectionRef.current,
          start: "bottom center",
          end: "bottom center",
          scrub: true,
        },
        duration: 1,
      });
      gsap.to(ring1Ref.current, {
        rotation: 360,
        duration: 75,
        repeat: 1,
        ease: "none",
      });
      gsap.to(ring2Ref.current, {
        rotation: -360,
        duration: 75,
        repeat: 1,
        ease: "none",
      });
    },

    { scope: containerRef },
  );

  return (
    <div className="h-full">
      <Toaster />
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <img
        src="/jayan-photo.avif"
        alt="jayan"
        className="absolute w-[200px] h-[300px] object-cover -translate-x-2/4 -translate-y-2/4 z-[9] opacity-0 pointer-events-none"
        ref={imgRef}
      />
      <img
        src="/cursor.svg"
        alt="jayan"
        className="absolute object-cover -translate-x-2/4 -translate-y-2/4 z-[9] opacity-0 pointer-events-none"
        ref={cursorRef}
      />
      <img
        src={currentImage}
        alt="jayan"
        className="absolute object-cover w-[300px] -translate-x-2/4 -translate-y-2/4 z-[9] opacity-0 pointer-events-none"
        ref={projectImageRef}
      />
      <div className="fixed inset-0 flex justify-between pointer-events-none z-0 ">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-px h-full border-r border-dashed border-r-dark-primary/25"
            ref={(r) => {
              if (lightDarkRef?.current) {
                lightDarkRef.current.push(r);
              }
            }}
          />
        ))}
      </div>
      <main
        className="h-full w-dvw bg-light-primary min-w-dvw min-h-dvh font-body flex flex-col gap-y-10 md:px-0 px-5 overflow-x-hidden"
        ref={containerRef}
      >
        <div
          className="md:h-dvh md:w-dvw flex justify-between items-between flex-col-reverse md:flex-col"
          id="home"
        >
          <div className="flex md:flex-row flex-col justify-between px-5 font-body font-bold py-5 z-10">
            <p
              className="text-lg md:max-w-1/4"
              ref={(r) => {
                if (lightDarkRef?.current) {
                  lightDarkRef.current.push(r);
                }
              }}
            >
              I&apos;m Jayan, a Software Developer, MUNer, PCB development
              enthusiast and student based in Gurgaon India. I’m currently
              studying in Grade X.
            </p>
            <p
              className="text-lg flex flex-col text-center md:text-left pt-5 md:pt-0"
              ref={(r) => {
                if (lightDarkRef?.current) {
                  lightDarkRef.current.push(r);
                }
              }}
            >
              <span className="font-title underline">Metadata</span>
              <span>15 y/o</span>
              <span>Gurgaon, India</span>
              <a
                href="https://github.com/jayanaxhf"
                className="underline cursor-pointer"
              >
                github.com/jayanaxhf
              </a>
              <a
                href="mailto:sunil.chdry@gmail.com"
                className="underline cursor-pointer"
              >
                sunil.chdry@gmail.com
              </a>
            </p>
          </div>
          <div
            className="w-full"
            ref={(r) => {
              if (lightDarkRef?.current) {
                lightDarkRef.current.push(r);
              }
            }}
          >
            <div className="w-full text-lg flex flex-col gap-5  z-50">
              <div className="flex lg:flex-row flex-col justify-between px-5 font-body font-bold relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-light-primary before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-light-primary after:-left-[100vw] before:mix-blend-difference after:mix-blend-difference text-sm lg:text-base">
                <span className="text-center w-full">Next.js</span>
                <span className="text-center w-full">Typscript</span>
                <span className="text-center w-full">Rust</span>
                <span className="text-center w-full">Zig</span>
                <span className="text-center w-full">Python</span>
                <span className="text-center w-full">Figma</span>
                <span className="text-center w-full">Astro</span>
              </div>
              <span
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                onMouseMove={onMove}
                ref={nameSvgRef}
              >
                <BigName
                  className="max-w-dvw w-full px-20 py-5 h-auto z-50 fill-dark-primary cursor-none"
                  ref={(r) => {
                    if (lightDarkRef?.current) {
                      lightDarkRef.current.push(r);
                    }
                  }}
                />
              </span>
              <div className="flex flex-row justify-between px-5 font-body font-bold relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-light-primary before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-light-primary after:-left-[100vw] before:mix-blend-difference after:mix-blend-difference text-sm lg:text-base">
                <span>MUNer</span>
                <span>Software Developer</span>
                <span>Student</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full min-h-dvh z-0"
          ref={projectsSectionRef}
          id="projects"
        >
          <h1
            className="xl:text-[10rem] text-7xl font-title"
            ref={(r) => {
              if (lightDarkRef?.current) {
                lightDarkRef.current.push(r);
              }
            }}
          >
            Notable Projects
          </h1>
          <div
            className="flex lg:flex-row-reverse justify-between px-5 font-body font-bold py-5  w-full"
            ref={(r) => {
              if (lightDarkRef?.current) {
                lightDarkRef.current.push(r);
              }
            }}
          >
            <p className="text-lg lg:max-w-1/4">
              I develop and design websites and terminal-based CLI and TUI
              tools. I am also currently learning compiler design. I&apos;m a
              member of{" "}
              <a
                href="https://rust-lang.org/governance/teams/#team-triage"
                className="underline"
              >
                T-Triage
              </a>{" "}
              at{" "}
              <a href="https://rust-lang.org/" className="underline">
                rust-lang
              </a>
              .
            </p>
          </div>
          <div
            onMouseEnter={onCursorEnter}
            onMouseLeave={onCursorLeave}
            onMouseMove={onCursorMove}
            className="cursor-none"
          >
            {projects.map((project, index) => (
              <span
                ref={(r) => {
                  if (lightDarkRef?.current) {
                    lightDarkRef.current.push(r);
                  }
                }}
                key={index}
                onMouseEnter={() => setCurrentImage(project.image)}
              >
                <Project index={index + 1} {...project} />
              </span>
            ))}
          </div>
        </div>
        <div className="w-full min-h-dvh z-0" ref={munsSectionRef} id="muns">
          <h1
            className="xl:text-[10rem] text-5xl font-title"
            ref={(r) => {
              if (lightDarkRef?.current) {
                lightDarkRef.current.push(r);
              }
            }}
          >
            MUN Experience
          </h1>
          <div
            className="flex lg:flex-row-reverse justify-between px-5 font-body font-bold py-5  w-full"
            ref={(r) => {
              if (lightDarkRef?.current) {
                lightDarkRef.current.push(r);
              }
            }}
          >
            <p className="text-lg lg:max-w-1/4">
              I am an avid fanatic for Model UN Conferences. I started my MUN
              journey in Grade VIII, and I have been participating in Model UN
              Conferences since then.
            </p>
          </div>
          {muns.map((mun, index) => (
            <span
              ref={(r) => {
                if (lightDarkRef?.current) {
                  lightDarkRef.current.push(r);
                }
              }}
              key={index}
            >
              <MUN {...mun} />
            </span>
          ))}
          <button
            className="underline px-5 cursor-pointer"
            onClick={async () => {
              const text = muns.map(mun_to_text).join("\n");
              try {
                await navigator.clipboard.writeText(text);
                toast({
                  title: "Copied to Clipboard",
                });
              } catch (err) {
                toast({
                  title: `Error: ${err}`,
                });
              }
            }}
          >
            copy
          </button>
        </div>
        <div
          className="w-full min-h-dvh z-0 p-0 flex flex-col lg:flex-row py-10 lg:items-end items-center justify-between relative perspective-distant"
          ref={contactRef}
          id="contact"
        >
          <span
            className="size-[195dvh] rounded-full border border-dashed border-dark-primary/20 absolute border-2 top-0 bottom-0 -right-1/2 mx-auto my-auto pointer-events-none"
            ref={ring2Ref}
            pointer-events-none
          />{" "}
          <span
            pointer-events-none
            className="size-[165dvh] rounded-full border border-dashed border-dark-primary/15 absolute border-2 top-0 bottom-0 -right-1/2 mx-auto my-auto pointer-events-none"
            ref={ring1Ref}
          />
          <div className="lg:min-h-[40dvh] h-max flex flex-col justify-center lg:justify-start lg:items-start lg:px-5">
            <div>
              <h1
                className="lg:text-[11rem] text-5xl font-title"
                ref={(r) => {
                  if (lightDarkRef?.current) {
                    lightDarkRef.current.push(r);
                  }
                }}
              >
                Like what{" "}
              </h1>
              <div className="flex lg:flex-row flex-col gap-y-5 items-center">
                <h1
                  className="lg:text-[11rem] text-5xl font-title pb-5"
                  ref={(r) => {
                    if (lightDarkRef?.current) {
                      lightDarkRef.current.push(r);
                    }
                  }}
                >
                  you see?
                </h1>
                <a href="mailto:sunil.chdry@gmail.com">
                  <button
                    className="py-2 px-5 rounded-full border-dark-primary border cursor-pointer h-12  group"
                    ref={(r) => {
                      if (lightDarkRef?.current) {
                        lightDarkRef.current.push(r);
                      }
                    }}
                  >
                    <span className="flex flex-row items-center justify-center gap-2 relative after:absolute after:bottom-0 after:h-px after:scale-0 after:w-full after:bg-dark-primary group-hover:after:scale-100 after:transition-transform after:origin-bottom-left after:duration-250 after:left-0">
                      Contact <ArrowRight className="size-[16px]" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="px-10 max-w-1/2 grow py-5 flex flex-row lg:justify-start lg:items-start justify-center  lg:min-h-[40dvh]">
            <div>
              <p
                className="text-xl font-title"
                ref={(r) => {
                  if (lightDarkRef?.current) {
                    lightDarkRef.current.push(r);
                  }
                }}
              >
                SITEMAP
              </p>
              <div
                className="flex items-start justify-start px-5 font-body  w-full"
                ref={(r) => {
                  if (lightDarkRef?.current) {
                    lightDarkRef.current.push(r);
                  }
                }}
              >
                <div className="flex flex-col">
                  <a className="underline cursor-pointer" href="#home">
                    home
                  </a>
                  <a className="underline cursor-pointer" href="#projects">
                    projects
                  </a>
                  <a className="underline cursor-pointer" href="#muns">
                    MUNs
                  </a>
                  <a className="underline cursor-pointer" href="#contact">
                    contact
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p
                className="text-xl font-title"
                ref={(r) => {
                  if (lightDarkRef?.current) {
                    lightDarkRef.current.push(r);
                  }
                }}
              >
                CONNECT
              </p>
              <div
                className="flex items-start justify-start px-5 font-body  w-full"
                ref={(r) => {
                  if (lightDarkRef?.current) {
                    lightDarkRef.current.push(r);
                  }
                }}
              >
                <div className="flex flex-col">
                  <a
                    className="underline cursor-pointer flex flex-row items-center"
                    href="https://github.com/jayanaxhf"
                    target="_blank"
                  >
                    GitHub <ArrowUpRight className="size-[16px]" />
                  </a>
                  <a
                    className="underline cursor-pointer flex flex-row items-center"
                    href="https://x.com/frxgfa"
                    target="_blank"
                  >
                    X <ArrowUpRight className="size-[16px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

function mun_to_text(mun: MUN) {
  return `${mun.name} [${mun.year}] - ${mun.committee} - ${mun.portfolio} - ${mun.award}`;
}

export default Home;

function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => <Toast id={id} title={toast.title} />);
}

function Toast(props: ToastProps) {
  const { title } = props;

  return (
    <div className="flex ring-1 ring-black w-full md:max-w-[364px] items-center p-4">
      <div className="flex flex-1 items-center">
        <div className="w-full">
          <p className="text-sm font-medium text-gray-900">{title}</p>
        </div>
      </div>
    </div>
  );
}

interface ToastProps {
  title: string;
  id: string | number;
}
