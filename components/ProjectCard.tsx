
import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import { CodeIcon, ExternalLinkIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onProjectClick: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onProjectClick, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col"
      onClick={() => onProjectClick(project)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end items-center gap-4">
          {project.liveDemoUrl && (
             <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
              <ExternalLinkIcon /> Live Demo
            </a>
          )}
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
              <CodeIcon /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
