import Project from "components/Project";
import gsap from "gsap";
import { useEffect } from "react";
import projectsData from "../data/projects.json";

export default function ProjectsSection() {
  useEffect(() => {
    const timeline = gsap.timeline({ delay: 0.5 });
    timeline.fromTo(
      ".project",
      {
        scale: 0.9,
        ease: "power1.inOut",
        stagger: {
          amount: 1,
        },
      },
      {
        scale: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".projects",
          scrub: 1,
          start: "top center",
          end: "top center",
        },
        stagger: {
          amount: 1,
        },
      }
    );
    return () => {
      timeline.clear();
    };
  }, []);

  return (
    <div
      id="projects-section"
      className="mt-52 h-full flex flex-col justify-center items-center gap-10"
    >
      <h1 className="text-5xl font-bold z-0">Projects</h1>
      <div className="projects w-full flex flex-wrap justify-center gap-36">
        {projectsData.map((project, index) => (
          <Project
            key={project.title}
            {...project}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}
