import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef } from "react";
import "@fontsource/space-grotesk";
import "@fontsource/jetbrains-mono";
import Project from "./project";
import BigName from "./big_name";
import MUN from "./muns";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

const projects = [
  {
    title: "Filessh",
    description:
      "A terminal-based file browser written in rust that allows you to seamlessly interact with files on your remote servers",
    link: "https://github.com/jayanaxhf/filessh",
  },
  {
    title: "Vultam",
    description:
      "An AI chatbot integrated with a model that understands the questions of CBSE students",
    link: "https://github.com/jayanaxhf/shiv-nadar",
  },
  {
    title: "modder-rs",
    description:
      "An expansive terminal UI application to make downloading, updating and managing minecraft mods easier.",
    link: "https://github.com/jayansunil/modder-rs",
  },
];

const muns = [
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
];

const Home = () => {
  const containerRef = useRef(null);
  const nameSvgRef = useRef(null);
  const lightDarkRef = useRef([]);
  const projectsSectionRef = useRef(null);
  const munsSectionRef = useRef(null);
  const imgRef = useRef(null);

  const onEnter = () => {
    console.debug("Enter");
    gsap.to(imgRef.current, { autoAlpha: 1, duration: 0.2 });
  };

  const onLeave = () => {
    gsap.to(imgRef.current, { autoAlpha: 0, duration: 0.2 });
  };

  const onMove = (e: any) => {
    gsap.set(imgRef.current, {
      x: e.pageX + 100,
      y: e.pageY + 150,
      duration: 1,
      ease: "power1.inOut",
    });
  };
  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        backgroundColor: "var(--color-dark-primary)",
        scrollTrigger: {
          trigger: nameSvgRef.current,
          start: "bottom center",
          end: "bottom center",
          scrub: true,
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
          scrub: true,
        },
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(containerRef.current, {
        backgroundColor: "var(--color-light-primary)",
        scrollTrigger: {
          trigger: projectsSectionRef.current,
          start: "bottom 20%",
          end: "bottom 20%",
          scrub: true,
        },
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(lightDarkRef.current, {
        color: "var(--color-dark-primary)",
        borderRightColor: "#16161625",
        fill: "var(--color-dark-primary)",
        scrollTrigger: {
          trigger: projectsSectionRef.current,
          start: "bottom 20%",
          end: "bottom 20%",
          scrub: true,
        },
        duration: 0.5,
        ease: "power1.inOut",
      });
    },

    { scope: containerRef },
  );

  return (
    <div className="h-full">
      <img
        src="/jayan-photo.png"
        alt="jayan"
        className="absolute w-[200px] h-[300px] object-cover -translate-x-2/4 -translate-y-2/4 z-[9] opacity-0 pointer-events-none"
        ref={imgRef}
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
      <div
        className="h-full w-dvw bg-light-primary min-w-dvw min-h-dvh font-body"
        ref={containerRef}
      >
        <div className="md:h-dvh md:w-dvw flex justify-between items-between flex-col">
          <div className="flex flex-row justify-between px-5 font-body font-bold py-5 z-10">
            <p
              className="text-lg max-w-1/4"
              ref={(r) => {
                if (lightDarkRef?.current) {
                  lightDarkRef.current.push(r);
                }
              }}
            >
              I&apos;m Jayan, a Software Developer, MUNer and student based in
              Gurgaon India. I’m currently studying in Grade IX.
            </p>
            <p
              className="text-lg flex flex-col "
              ref={(r) => {
                if (lightDarkRef?.current) {
                  lightDarkRef.current.push(r);
                }
              }}
            >
              <span>Metadata</span>
              <span>14 y/o</span>
              <span>Gurgaon, India</span>
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
              <div className="flex flex-row justify-between px-5 font-body font-bold relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-light-primary before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-light-primary after:-left-[100vw] before:mix-blend-difference after:mix-blend-difference">
                <span>MUNer</span>
                <span>Software Developer</span>
                <span>Student</span>
              </div>
              <span
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                onMouseMove={onMove}
                ref={nameSvgRef}
              >
                <BigName
                  className="max-w-dvw w-full px-20 py-5 h-auto z-50 fill-dark-primary"
                  ref={(r) => {
                    if (lightDarkRef?.current) {
                      lightDarkRef.current.push(r);
                    }
                  }}
                />
              </span>
              <div className="flex flex-row justify-between px-5 font-body font-bold relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-light-primary before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-light-primary after:-left-[100vw] before:mix-blend-difference after:mix-blend-difference">
                <span className="text-center w-full">Next.js</span>
                <span className="text-center w-full">Typscript</span>
                <span className="text-center w-full">Rust</span>
                <span className="text-center w-full">Zig</span>
                <span className="text-center w-full">Python</span>
                <span className="text-center w-full">Figma</span>
                <span className="text-center w-full">Astro</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-dvh z-0" ref={projectsSectionRef}>
          <h1
            className="text-[10rem] font-title"
            ref={(r) => {
              if (lightDarkRef?.current) {
                lightDarkRef.current.push(r);
              }
            }}
          >
            Notable Projects
          </h1>
          <div
            className="flex flex-row-reverse justify-between px-5 font-body font-bold py-5  w-full"
            ref={(r) => {
              if (lightDarkRef?.current) {
                lightDarkRef.current.push(r);
              }
            }}
          >
            <p className="text-lg max-w-1/4">
              I develop and design websites and terminal-based CLI and TUI
              tools. I am also currently learning compiler design. I&apos;m a
              member of T-Triage at rust-lang.
            </p>
          </div>
          {projects.map((project, index) => (
            <span
              ref={(r) => {
                if (lightDarkRef?.current) {
                  lightDarkRef.current.push(r);
                }
              }}
              key={index}
            >
              <Project index={index + 1} {...project} />
            </span>
          ))}
        </div>
        <div className="w-full min-h-dvh z-0" ref={munsSectionRef}>
          <h1
            className="text-[10rem] font-title"
            ref={(r) => {
              if (lightDarkRef?.current) {
                lightDarkRef.current.push(r);
              }
            }}
          >
            MUN Experience
          </h1>
          <div
            className="flex flex-row-reverse justify-between px-5 font-body font-bold py-5  w-full"
            ref={(r) => {
              if (lightDarkRef?.current) {
                lightDarkRef.current.push(r);
              }
            }}
          >
            <p className="text-lg max-w-1/4">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
