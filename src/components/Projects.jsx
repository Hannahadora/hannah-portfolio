import React, { useEffect, useRef, useState } from "react";
import { projects } from "../utils/data";
import CustomButton from "./Shared/CustomButton";
import Tilt from "react-parallax-tilt";
import Tabs from "./Shared/Tabs";
import { easeIn } from "../utils/GsapAnimations";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const projectRef = useRef(null)

  useEffect(() => {
    easeIn(projectRef)
  }, [activeTab])

  const getCurrentIndex = (tab) => {
    setActiveTab(tab);
  };

  const filteredProjects = () => {
    if(activeTab === "all") {
      return projects && projects
    } else {
      return projects?.filter(project => project?.type === activeTab)
    }
  }

  const projectsToRender = filteredProjects(); // Call the function to get the array

  const renderProjects = projectsToRender?.map((project, i) =>
      (
      <div ref={projectRef} className="uppercase mb-16 cursor-pointer" key={i}>
        <Tilt
          className="tilt"
          // tiltMaxAngleX={40}
          // tiltMaxAngleY={40}/
          // perspective={1000}
          transitionSpeed={1000}
          scale={1.0}
          gyroscope={false}
        >
          <a href={project.url} target={'_blank'}>
          <img
            className="w-full rounded-md"
            src={project.image}
            alt={project.title}
          />
          </a>
        </Tilt>
        <h1 className="font-bold pt-4 pb-2">{project.title}</h1>
        <div className="flex space-x-2 capitalize">
          {project.stacks.map((val) => (
            <span key={val} className="md:text-[14px] text-[12px]">
              {val}
            </span>
          ))}
        </div>
      </div>
    )
  );

  return (
    <section id="projects">
      <div className="page-wrapper mb-12">
        <div className="flex items-start justify-between pb-16 pt-12">
          <h1 className=" md:text-[80px] text-[32px] leading-none">Projects</h1>
          <a href="mailto:hannahadora97@gmail.com" target={"_blank"}>
            <CustomButton text={"Contact Me"} />
          </a>
        </div>

        <Tabs
          tabs={["all", "vue", "react"]}
          currentTab={(tab) => getCurrentIndex(tab)}
        />
        <div ref={projectRef} className="sm:grid block grid-cols-4 lg:grid-cols-3 md:grid-cols-2 auto-rows-auto gap-x-[40px]	 ">
          {renderProjects}
        </div>
      </div>
    </section>
  );
};

export default Projects;
