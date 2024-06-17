// src/components/ProjectCard.tsx
"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectsInfo, { Project } from '../constants/ProjectsInfo';
import noImage from '../../assets/img/noImage.jpg'

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/projects/${id}`);
  };

  // project.previewPicture
  return (
    <div className="p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[400] min-h-[800]" >
      {/* onClick={() => handleCardClick(project.id)} <-- From above */}

      {/* <img src={project.previewPicture == '' || '#' ? '/noImage' : project.previewPicture} alt={project.previewPicture} /> */}
      <img src={project.previewPicture} alt='Project Preview' className='mx-auto mb-6 aspect-video min-w-[400]'/>
      <h2 className='size-1 text-blue-500 mb-6'>#{project.technologyTag}</h2>
      <h1 className='size-fit my-4 font-semibold'>{project.name}</h1>
      <p className='text-gray-700'>{project.description.length > 100 ? project.description.substring(0, 100) + '...' : project.description}</p>
    </div>
  );
};

export default ProjectCard;
