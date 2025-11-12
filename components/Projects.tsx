
import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onProjectClick }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };
  
  return (
    <motion.section 
        id="projects" 
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} onProjectClick={onProjectClick} index={index} />
        ))}
      </div>
    </motion.section>
  );
};
