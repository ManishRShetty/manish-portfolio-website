import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Project } from '@/types';

// --- Icons (from './Icons') ---
// Re-created as inline SVG component
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
      clipRule="evenodd"
    />
  </svg>
);


// --- CaseStudyModal Component ---

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { scale: 0.9, opacity: 0, transition: { duration: 0.15 } },
  };

  return (
    <motion.div
      // Backdrop: Use semi-transparent black with the frosted-glass backdrop-blur
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        // Modal Body: Use Card Surface color, large rounding, and deep shadow
        className="relative bg-[#1C1C1E] rounded-2xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          // Close Button: Minimal style using Divider BG and Secondary Text
          className="absolute top-5 right-5 z-10 w-8 h-8 rounded-full flex items-center justify-center
                     bg-[#2C2C2E] text-[#8E8E93] hover:opacity-75 transition-opacity"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        {/* Content Area: Use ample padding for negative space */}
        <div className="p-8 sm:p-10 md:p-12">

          {/* Header */}
          {/* Title: Apple-like large, bold typography */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">{project.title}</h2>

          {/* Tech Stack: Use minimal pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-[#2C2C2E] text-[#8E8E93] text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#0A84FF] text-white text-sm font-medium rounded-lg hover:bg-[#007AFF] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#2C2C2E] text-white text-sm font-medium rounded-lg hover:bg-[#3A3A3C] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Code
              </a>
            )}
          </div>

          {/* Body Content: Increase spacing for cleaner layout */}
          <div className="space-y-8">
            <div>
              {/* Sub-headings: Primary Text color */}
              <h3 className="text-xl font-semibold text-white mb-3">The Problem</h3>
              {/* Body Text: Secondary Text color with relaxed leading */}
              <p className="text-[#8E8E93] leading-relaxed">{project.caseStudy.problem}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">The Solution</h3>
              <p className="text-[#8E8E93] leading-relaxed">{project.caseStudy.solution}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">The Impact</h3>
              <p className="text-[#8E8E93] leading-relaxed">{project.caseStudy.impact}</p>
            </div>
            {project.caseStudy.role && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">My Role</h3>
                <p className="text-[#8E8E93] leading-relaxed">{project.caseStudy.role}</p>
              </div>
            )}

          </div>

          {/* Screenshots: Add more top margin */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white mb-4">Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.caseStudy.screenshots.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  // Use secondary surface as BG placeholder
                  className="rounded-lg bg-[#111111]"
                  onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/1C1C1E/8E8E93?text=Image+Not+Found')}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};