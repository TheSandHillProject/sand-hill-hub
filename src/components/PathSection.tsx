
import React, { useState } from "react";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import { AnimatePresence, motion } from "framer-motion";

interface PathSectionProps {
  title: string;
  description: string;
  projects: ProjectProps[];
  isActive: boolean;
  color: string;
}

const PathSection = ({
  title,
  description,
  projects,
  isActive,
  color
}: PathSectionProps) => {
  // Map color strings to TailwindCSS classes
  const getColorClasses = (colorName: string) => {
    switch(colorName) {
      case 'logo-red':
        return 'bg-[#FF5F5F]/20 border-[#FF5F5F]/20';
      case 'logo-orange':
        return 'bg-[#FFA63F]/20 border-[#FFA63F]/20';
      case 'logo-blue':
        return 'bg-[#6EC6E9]/20 border-[#6EC6E9]/20';
      default:
        return 'bg-gray-800/20 border-gray-800/20';
    }
  };

  return (
    <div className="mb-8 w-full">
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className={`mt-8 p-8 rounded-2xl ${getColorClasses(color)}`}>
              <h2 className="text-2xl font-medium mb-2">{title}</h2>
              <p className="text-gray-600 mb-8 max-w-3xl">{description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PathSection;
