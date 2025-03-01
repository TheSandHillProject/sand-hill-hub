
import React from "react";
import { motion } from "framer-motion";

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="project-card"
    >
      <h3 className="text-lg font-medium mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-sm font-medium text-black inline-flex items-center hover:underline"
      >
        Learn more
        <svg 
          className="w-4 h-4 ml-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
