
import React from 'react';
// FIX: Import Variants type from framer-motion to explicitly type animation variants.
import { motion, Variants } from 'framer-motion';
import type { Project } from '../types';
import { CloseIcon } from './Icons';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // FIX: Explicitly type `modalVariants` with `Variants` to ensure type compatibility.
  // This resolves errors where TypeScript inferred string literals like 'spring' as a general `string`
  // instead of the specific literal type expected by framer-motion.
  const modalVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { scale: 0.9, opacity: 0 },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="relative bg-white dark:bg-gray-800 rounded-xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">The Problem</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.caseStudy.problem}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">The Solution</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.caseStudy.solution}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">The Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.caseStudy.impact}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.caseStudy.screenshots.map((src, index) => (
                <img key={index} src={src} alt={`Screenshot ${index + 1}`} className="rounded-lg shadow-md" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
