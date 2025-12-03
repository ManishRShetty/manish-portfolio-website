import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';

// UNCOMMENT THIS IN YOUR LOCAL ENVIRONMENT
import { projectsData } from '@/data/projects.json';

// --- Types ---
export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  stack: string[];
  description: string;
  liveDemoUrl?: string;
  codeUrl?: string;
}

// --- Physics Engine (Shared) ---
const springPhysics = { type: "spring", stiffness: 100, damping: 20 };

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// The "Apple Blur" Reveal
const itemBlurVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springPhysics
  },
};

// --- Project Card Component ---
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      variants={itemBlurVariant}
      className="group relative flex flex-col bg-[#1C1C1E] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors duration-500"
    >
      {/* Image Container - Aspect Ratio 16:9 */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-neutral-800 animate-pulse" /> {/* Loading Skeleton */}
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="relative z-10 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/1C1C1E/3A3A3C?text=Project+Preview')}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex gap-3">
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                className="text-neutral-500 hover:text-white transition-colors"
                title="View Code"
              >
                <Github size={18} />
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                className="text-neutral-500 hover:text-white transition-colors"
                title="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[11px] font-medium text-neutral-300 tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Projects Section ---
export const Projects: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  // Toggle Logic
  const handleShowMore = () => {
    setVisibleCount(prev => prev >= Projects.length ? 3 : Projects.length);
  };

  const isExpanded = visibleCount >= Projects.length;

  return (
    <section id="projects" className="py-32 bg-black text-white px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            variants={itemBlurVariant}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
          >
            Selected Works
          </motion.h2>
          <motion.p
            variants={itemBlurVariant}
            className="text-neutral-400 text-lg max-w-xl mx-auto"
          >
            A collection of robust applications focusing on AI integration, real-time data, and seamless user experiences.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {projectsData.slice(0, visibleCount).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Less Button */}
        {Projects.length > 3 && (
          <motion.div
            variants={itemBlurVariant}
            className="flex justify-center"
          >
            <button
              onClick={handleShowMore}
              className="group flex items-center gap-2 px-6 py-3 bg-[#1C1C1E] hover:bg-[#2C2C2E] text-white rounded-full font-medium transition-all duration-300 border border-white/5 hover:border-white/10"
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
      </motion.div>
    </section>
  );
};

// --- DATA: Included locally for preview. Replace with import in production. ---


export default Projects;