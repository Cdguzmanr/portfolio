"use client";

import React from 'react';
import ProjectsInfo from './constants/ProjectsInfo'; // Import ProjectsInfo
import ProjectCard from './ui/ProjectCard';


const ProjectsSection: React.FC = () => {
  // Randomly select 4 projects from ProjectsInfo
  const randomProjects = ProjectsInfo.sort(() => Math.random() - 0.5).slice(0, 4);

  return (

    <div className='justify-center py-16'>
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>


       <div className="lg:flex gap-10 flex-1 justify-center content-evenly mx-20 min-h-96">
      {randomProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    </div>

   
  );
};

export default ProjectsSection;

