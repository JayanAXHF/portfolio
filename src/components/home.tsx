import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef } from "react";
import "@fontsource/space-grotesk";
import "@fontsource/jetbrains-mono";
import Project from "./project";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

const Projects = [
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

const Home = () => {
  const containerRef = useRef(null);
  const nameSvgRef = useRef(null);
  const lightDarkRef = useRef([]);
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
      duration: 0.5,
      ease: "power1.inOut",
    });
  };
  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        backgroundColor: "#111111",
        scrollTrigger: {
          trigger: nameSvgRef.current,
          start: "bottom top",
          end: "bottom top",
          scrub: 2,
          markers: true,
        },
      });
      gsap.to(lightDarkRef.current, {
        color: "#fcfaf2",
        scrollTrigger: {
          trigger: nameSvgRef.current,
          start: "bottom top",
          end: "bottom top",
          scrub: 2,
          markers: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div>
      <img
        src="/jayan-photo.png"
        alt="jayan"
        className="absolute w-[200px] h-[300px] object-cover -translate-x-2/4 -translate-y-2/4 z-[9] opacity-0 pointer-events-none"
        ref={imgRef}
      />
      <div className="absolute flex flex-row justify-between items-center top-0 left-0 w-full h-full pointer-events-none">
        <div className="w-[1px] h-full border-r border-dashed border-r-dark-primary"></div>
        <div className="w-[1px] h-full border-r border-dashed border-r-dark-primary"></div>
        <div className="w-[1px] h-full border-r border-dashed border-r-dark-primary"></div>
        <div className="w-[1px] h-full border-r border-dashed border-r-dark-primary"></div>
        <div className="w-[1px] h-full border-r border-dashed border-r-dark-primary"></div>
        <div className="w-[1px] h-full border-r border-dashed border-r-dark-primary"></div>
        <div className="w-[1px] h-full border-r border-dashed border-r-dark-primary"></div>
        <div className="w-[1px] h-full border-r border-dashed border-r-dark-primary"></div>
      </div>
      <div
        className="h-full w-dvw bg-light-primary min-w-dvw min-h-dvh font-body"
        ref={containerRef}
      >
        <div className="md:h-dvh md:w-dvw flex justify-between items-between flex-col">
          <div className="flex flex-row justify-between px-5 font-body font-bold py-5 z-10">
            <p className="text-lg max-w-1/4">
              I&apos;m Jayan, a Software Developer, MUNer and student based in
              Gurgaon India. I’m currently studying in Grade IX.
            </p>
            <p className="text-lg flex flex-col ">
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
          <div className="w-full">
            <div className="w-full text-lg flex flex-col gap-5">
              <div className="flex flex-row justify-between px-5 font-body font-bold relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-dark-primary before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-dark-primary after:-left-[100vw]">
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
                <img
                  src="/jayan-txt.svg"
                  style={{ pointerEvents: "auto" }}
                  alt="jayan"
                  className="max-w-dvw w-full px-20 py-5 h-auto z-50"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full min-h-dvh">
          <h1
            className="text-[10rem] font-title"
            ref={(r) => {
              if (lightDarkRef?.current) {
                lightDarkRef.current.push(r);
              }
            }}
          >
            Projects
          </h1>
          <div
            className="flex flex-row-reverse justify-between px-5 font-body font-bold py-5 z-10 w-full"
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
          {Projects.map((project, index) => (
            <span
              ref={(r) => {
                if (lightDarkRef?.current) {
                  lightDarkRef.current.push(r);
                }
              }}
            >
              <Project key={index} index={index + 1} {...project} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
