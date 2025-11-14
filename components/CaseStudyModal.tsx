import React, { useState } from 'react';
// FIX: Import Variants type from framer-motion to explicitly type animation variants.
// AnimatePresence is added to handle the 'exit' animation.
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- Types (from '../types') ---
// Re-created for this self-contained example
interface CaseStudy {
  problem: string;
  solution: string;
  impact: string;
  screenshots: string[];
}

interface Project {
  title: string;
  stack: string[];
  caseStudy: CaseStudy;
}

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
    exit: { opacity: 0 }, // Added exit variant
  };

  // FIX: Explicitly type `modalVariants` with `Variants`
  const modalVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { scale: 0.9, opacity: 0, transition: { duration: 0.15 } }, // Added exit variant
  };

  return (
    <motion.div
      // Backdrop: Use semi-transparent black with the frosted-glass backdrop-blur
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit" // Use exit variant
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

// --- Main App Component (for demonstration) ---

// Mock Data
const mockProject: Project = {
  title: 'QuantumOS Interface',
  stack: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
  caseStudy: {
    problem: 'Traditional desktop operating systems feel static and uninspiring. User engagement drops during complex tasks due to cluttered interfaces and jarring transitions.',
    solution: 'We designed QuantumOS, a conceptual operating system focused on fluid motion and contextual awareness. By using a physics-based animation system and a minimalist, adaptive UI, the system anticipates user needs, reduces cognitive load, and makes interactions feel responsive and natural.',
    impact: 'Early prototypes showed a 30% reduction in time-on-task and a 50% increase in positive user feedback compared to baseline systems. The design principles are now being adapted for our next-generation product suite.',
    screenshots: [
      'https://placehold.co/600x400/0A84FF/000000?text=Dashboard+View',
      'https://placehold.co/600x400/1C1C1E/FFFFFF?text=File+Explorer',
    ],
  },
};

/**
 * Main App component to render and toggle the modal
 */
export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    // Set the pure black primary background
    <main className="bg-black text-white min-h-screen font-sans antialiased flex items-center justify-center">
      
      {/* Demo Button: Apple-like accent button */}
      <motion.button
        onClick={openModal}
        className="px-6 py-3 bg-[#0A84FF] text-white text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/30"
        whileHover={{ scale: 1.05, shadow: "0 0 25px rgba(10, 132, 255, 0.5)" }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        Open Case Study
      </motion.button>

      {/* AnimatePresence is required for 'exit' animations to work */}
      <AnimatePresence>
        {modalOpen && (
          <CaseStudyModal 
            project={mockProject} 
            onClose={closeModal} 
          />
        )}
      </AnimatePresence>
    </main>
  );
}