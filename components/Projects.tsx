import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import type { Project } from '@/types';

// --- Props Interface ---
interface ProjectsProps {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
}

// --- Physics Engine ---
const springPhysics = { type: "spring", stiffness: 100, damping: 20 } as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemBlurVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springPhysics
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    filter: 'blur(10px)',
    transition: { duration: 0.2 }
  }
};

// --- Project Card (Kept mostly the same, just optimized) ---
const ProjectCard: React.FC<{ project: Project; onClick?: (project: Project) => void }> = ({ project, onClick }) => {
  return (
    <motion.div
      layout // CRITICAL: Allows card to move smoothly when siblings are removed
      variants={itemBlurVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="group relative flex flex-col bg-[#080808] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors duration-500 cursor-pointer"
      onClick={() => onClick?.(project)}
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="relative z-10 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/1C1C1E/3A3A3C?text=Project+Preview')}
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex gap-3">
            {project.codeUrl && (
              <a href={project.codeUrl} onClick={(e) => e.stopPropagation()} className="text-neutral-500 hover:text-white transition-colors">
                <Github size={18} />
              </a>
            )}
            {project.liveDemoUrl && (
              <a href={project.liveDemoUrl} onClick={(e) => e.stopPropagation()} className="text-neutral-500 hover:text-white transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[11px] font-medium text-neutral-300 tracking-wide">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- Featured Product Card (Full Width) ---
const FeaturedProductCard: React.FC<{ project: Project; onClick?: (project: Project) => void }> = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      variants={itemBlurVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="group relative flex flex-col lg:flex-row bg-[#080808] border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/10 transition-colors duration-500 cursor-pointer w-full shadow-2xl"
      onClick={() => onClick?.(project)}
    >
      <div className="absolute top-6 right-6 z-30 flex gap-3">
        {project.codeUrl && (
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2.5 bg-black/60 hover:bg-black/80 rounded-full text-neutral-400 hover:text-white transition-colors backdrop-blur-md border border-white/10 shadow-lg">
            <Github size={18} />
          </a>
        )}
        {project.liveDemoUrl && (
          <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2.5 bg-black/60 hover:bg-black/80 rounded-full text-neutral-400 hover:text-white transition-colors backdrop-blur-md border border-white/10 shadow-lg">
            <ExternalLink size={18} />
          </a>
        )}
      </div>

      <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center relative z-20">
        
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 tracking-tight mb-3 leading-tight">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-6">
          {project.description}
        </p>
        
        {project.caseStudy && (
          <div className="grid grid-cols-1 gap-6 mb-6 hidden md:grid">
            <div>
              <h4 className="text-neutral-500 text-sm font-medium mb-1">
                The Problem
              </h4>
              <p className="text-white text-lg md:text-xl font-semibold leading-snug tracking-tight">
                {project.caseStudy.problem}
              </p>
            </div>
            <div>
              <h4 className="text-neutral-500 text-sm font-medium mb-1">
                The Solution
              </h4>
              <p className="text-white text-lg md:text-xl font-semibold leading-snug tracking-tight">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
          {project.stack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[11px] font-medium text-neutral-300 tracking-wide">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="w-full lg:w-[50%] xl:w-[55%] relative min-h-[300px] lg:min-h-full overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="relative z-10 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/1200x800/1C1C1E/3A3A3C?text=Featured+Project')}
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-[#080808]/30 to-[#080808] opacity-100 z-10 pointer-events-none" />
      </div>
    </motion.div>
  );
};

// --- Main Projects Section ---
export const Projects: React.FC<ProjectsProps> = ({ projects, onProjectClick }) => {
  const DEFAULT_VIEW_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(DEFAULT_VIEW_COUNT);

  // Ref for smooth scrolling back to top of grid when collapsing
  const gridTopRef = useRef<HTMLDivElement>(null);

  const isExpanded = visibleCount > DEFAULT_VIEW_COUNT;

  // Sort by priority (lowest number = highest priority), then split products and projects
  const sorted = [...projects].sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));
  const products = sorted.filter((p) => p.type === 'product');
  const projectItems = sorted.filter((p) => p.type !== 'product');

  const handleToggle = () => {
    if (isExpanded) {
      // Logic: Collapse
      setVisibleCount(DEFAULT_VIEW_COUNT);
      // UX Fix: Scroll back to the top of the grid so user isn't lost
      gridTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      // Logic: Expand
      setVisibleCount(projects.length);
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-black text-white px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <motion.h2 variants={itemBlurVariant} className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Engineering Siranta
          </motion.h2>
          <motion.p variants={itemBlurVariant} className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto mb-2">
            A deep dive into the architecture, context engines, and zero-trust memory systems driving autonomous agents.
          </motion.p>
        </div>

        {/* Scroll Anchor */}
        <div ref={gridTopRef} className="scroll-mt-32" />

        {/* Products (High Priority) */}
        {products.length > 0 && (
          <motion.div layout className="flex flex-col gap-10 mb-16">
            <AnimatePresence mode="popLayout">
              {products.map((product) => (
                <FeaturedProductCard key={product.id} project={product} onClick={onProjectClick} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Projects (Lower Priority) */}
        {projectItems.length > 0 && (
          <>
            <div className="mb-8 text-center">
              <motion.h3 variants={itemBlurVariant} className="text-2xl font-semibold mb-2">
                Projects
              </motion.h3>
              <motion.p variants={itemBlurVariant} className="text-neutral-400 max-w-xl mx-auto text-sm">
                Selected research and implementation projects — lower priority than current products.
              </motion.p>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <AnimatePresence mode="popLayout">
                {projectItems.slice(0, visibleCount).map((project) => (
                  <ProjectCard key={project.id} project={project} onClick={onProjectClick} />
                ))}
              </AnimatePresence>
            </motion.div>

            {projectItems.length > DEFAULT_VIEW_COUNT && (
              <motion.div variants={itemBlurVariant} className="flex justify-center">
                <button
                  onClick={handleToggle}
                  className="group flex items-center gap-2 px-6 py-3 bg-[#080808] hover:bg-[#121212] text-white rounded-full font-medium transition-all duration-300 border border-white/5 hover:border-white/10"
                >
                  <span>{isExpanded ? 'View Less' : 'View All Projects'}</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <ChevronDown size={16} className="opacity-60" />
                  </motion.div>
                </button>
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;