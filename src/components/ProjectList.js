import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const proObj = projects.map((project,index)=>{
    return <div id="project-list" key={project.id}><ProjectItem  name={project.name} about={project.about} technologies={project.technologies} /> {/* render ProjectItem components here */}</div>
  })
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      {proObj}
    </div>
  );
}

export default ProjectList;
