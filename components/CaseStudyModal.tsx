import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Project } from '@/types';
import { FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiFramer, SiTypescript, SiSvelte, SiVuedotjs, SiPostgresql, SiLeaflet, SiExpo, SiAstro, SiMdx } from 'react-icons/si';

// --- Assets ---
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

// --- Component ---

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const modalVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: 'spring', stiffness: 350, damping: 25, mass: 1 }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      filter: "blur(10px)",
      transition: { duration: 0.2, ease: "easeIn" }
    },
  };

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const getTechIcon = (techName: string) => {
    const lower = techName.toLowerCase();
    if (lower.includes('react native')) return <FaReact className="w-4 h-4 text-[#61DAFB]" />;
    if (lower.includes('react')) return <FaReact className="w-4 h-4 text-[#61DAFB]" />;
    if (lower.includes('next')) return <SiNextdotjs className="w-4 h-4 text-white" />;
    if (lower.includes('tailwind')) return <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />;
    if (lower.includes('node')) return <FaNodeJs className="w-4 h-4 text-[#339933]" />;
    if (lower.includes('firebase')) return <SiFirebase className="w-4 h-4 text-[#FFCA28]" />;
    if (lower.includes('docker')) return <FaDocker className="w-4 h-4 text-[#2496ED]" />;
    if (lower.includes('aws')) return <FaAws className="w-4 h-4 text-[#FF9900]" />;
    if (lower.includes('framer')) return <SiFramer className="w-4 h-4 text-white" />;
    if (lower.includes('typescript')) return <SiTypescript className="w-4 h-4 text-[#3178C6]" />;
    if (lower.includes('svelte')) return <SiSvelte className="w-4 h-4 text-[#FF3E00]" />;
    if (lower.includes('vue')) return <SiVuedotjs className="w-4 h-4 text-[#4FC08D]" />;
    if (lower.includes('postgres')) return <SiPostgresql className="w-4 h-4 text-[#4169E1]" />;
    if (lower.includes('leaflet')) return <SiLeaflet className="w-4 h-4 text-[#199900]" />;
    if (lower.includes('expo')) return <SiExpo className="w-4 h-4 text-white" />;
    if (lower.includes('astro')) return <SiAstro className="w-4 h-4 text-[#FF5D01]" />;
    if (lower.includes('mdx')) return <SiMdx className="w-4 h-4 text-[#F9AC00]" />;
    if (lower.includes('next')) return <SiNextdotjs className="w-4 h-4 text-white" />;
    if (lower.includes('tailwind')) return <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />;
    //if (lower.includes('express')) return <SiExpress className="w-4 h-4 text-[#FF5D01]" />;
    return null;
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        variants={backdropVariants}
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        // Added: [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto overflow-x-hidden 
                   bg-[#1C1C1E] rounded-3xl shadow-2xl ring-1 ring-white/10
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >

        {/* --- Header Image Area --- */}
        <div className="relative w-full aspect-video">
          <img
            src={project.thumbnail || project.caseStudy?.screenshots?.[0] || "https://placehold.co/1920x1080/1C1C1E/FFF?text=No+Image"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-transparent to-black/30" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 
                       text-white/70 hover:text-white hover:bg-black/60 transition-all duration-200"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        {/* --- Content Body --- */}
        <div className="px-6 py-8 sm:px-10 sm:py-10">

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                {project.logo && (
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-14 h-14 rounded-2xl border border-white/10 shadow-lg"
                  />
                )}
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  {project.title}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <div key={tech} className="flex items-center gap-1.5 px-3 py-1 bg-[#2C2C2E] border border-white/5 rounded-full">
                    {getTechIcon(tech)}
                    <span className="text-xs font-medium text-white/80">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-2 md:mt-0 shrink-0">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full transition-colors shadow-lg shadow-blue-900/20"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Site
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#2C2C2E] hover:bg-[#3A3A3C] text-white text-sm font-semibold rounded-full border border-white/10 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Source
                </a>
              )}
            </div>
          </div>

          <div className="h-px w-full bg-white/10 mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">The Problem</h3>
                <p className="text-[#A1A1A6] leading-relaxed text-[15px]">{project.caseStudy.problem}</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">The Solution</h3>
                <p className="text-[#A1A1A6] leading-relaxed text-[15px]">{project.caseStudy.solution}</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">Impact & Results</h3>
                <p className="text-[#A1A1A6] leading-relaxed text-[15px]">{project.caseStudy.impact}</p>
              </section>
            </div>

            <div className="lg:col-span-1 space-y-6">
              {project.caseStudy.role && (
                <div className="bg-[#2C2C2E]/50 p-5 rounded-2xl border border-white/5">
                  <h3 className="text-sm font-semibold text-white/90 mb-2 uppercase tracking-wider">My Role</h3>
                  <p className="text-[#A1A1A6] text-sm leading-relaxed">{project.caseStudy.role}</p>
                </div>
              )}
            </div>
          </div>

          {project.caseStudy.screenshots && project.caseStudy.screenshots.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6">Interface Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.caseStudy.screenshots.map((src, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="overflow-hidden rounded-xl border border-white/10 shadow-lg"
                  >
                    <img
                      src={src}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-auto object-cover bg-[#111]"
                      onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/1C1C1E/8E8E93?text=Preview')}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </motion.div>
  );
};