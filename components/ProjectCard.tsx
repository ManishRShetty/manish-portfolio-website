import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type { Project } from '../types';
import { CodeIcon, ExternalLinkIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onProjectClick: (project: Project) => void;
  index: number;
}

// Reusable physics config for consistency
const springConfig = { type: "spring", stiffness: 350, damping: 25 } as const;

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onProjectClick, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{
        ...springConfig,
        delay: index * 0.05 // Tighter stagger for a snappier feel
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      onClick={() => onProjectClick(project)}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gray-900/40 backdrop-blur-xl shadow-2xl shadow-black/50 cursor-pointer"
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-60" />
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }} // Smooth easing for the image looks more cinematic
        />
        {project.logo && (
          <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-center">
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="w-6 h-6 object-contain"
            />
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-grow flex-col p-6 z-20">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          {/* Subtle arrow that appears on hover could go here */}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase text-gray-400 bg-white/5 border border-white/5 rounded-full backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mb-6 text-sm leading-relaxed text-gray-400 line-clamp-3">
          {project.description}
        </p>

        {/* Footer / Actions */}
        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/5">
          {project.liveDemoUrl && (
            <ActionButton href={project.liveDemoUrl} icon={<ExternalLinkIcon />} label="Visit" />
          )}
          {project.codeUrl && (
            <ActionButton href={project.codeUrl} icon={<CodeIcon />} label="Source" />
          )}
        </div>
      </div>

      {/* Hover Glow Effect (Optional subtle gradient) */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent" />
    </motion.div>
  );
};

// Extracted Action Button for cleaner JSX and unified styling
const ActionButton = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors group/link"
  >
    <span className="group-hover/link:text-accent transition-colors">{icon}</span>
    {label}
  </a>
);