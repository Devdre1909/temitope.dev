import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/project";

const Projects = () => {
  return (
    <div className="bg-brand-blue-dark">
      <div className="py-16">
        <div className="w-9/12 md:w-10/12 mx-auto container">
          <h2 className="text-brand-orange text-2xl md:text-3xl font-medium">
            Some Things I’ve Built
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-10">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                image={project.image}
                stack={project.stack}
                imageAlt={project.imageAlt}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
