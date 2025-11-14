import React from 'react';
import { motion } from 'framer-motion';

// --- Types (from '../types') ---
// Assuming a Project type definition
interface Project {
  id: string;
  title: string;
  thumbnail: string;
  stack: string[];
  description: string;
  liveDemoUrl?: string;
  codeUrl?: string;
}

// --- Icons (from './Icons') ---
// Re-created as inline SVG components for this single-file example

/**
 * Simple inline SVG for the External Link icon
 */
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M6.19 5.19a.75.75 0 01.99-.16l.07.05L15 9.25l.04.06a.75.75 0 01.1 1.03l-.06.07-7.75 7.75a.75.75 0 11-1.06-1.06L13.44 10 6.19 6.25a.75.75 0 01.0-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * Simple inline SVG for the Code icon
 */
const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

// --- ProjectCard Component (from './ProjectCard') ---

interface ProjectCardProps {
  project: Project;
  onProjectClick: (project: Project) => void;
  index: number;
}

/**
 * Redesigned ProjectCard with an Apple-like dark theme
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project, onProjectClick, index }) => {
  return (
    <motion.div
      // Use the specified Card Surface color
      className="bg-[#1C1C1E] rounded-2xl overflow-hidden shadow-xl shadow-black/25 cursor-pointer flex flex-col group"
      onClick={() => onProjectClick(project)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      // Use a subtle scale for the premium hover effect
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      {/* Image: Use a subtle secondary surface BG as a loading fallback */}
      <div className="w-full h-56 bg-[#111111] overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
          onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/1C1C1E/8E8E93?text=Image+Not+Found')}
        />
      </div>
      
      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title: Primary Text color */}
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        
        {/* Description: Secondary Text color, with more negative space */}
        <p className="text-[#8E8E93] text-sm mb-5 flex-grow">{project.description}</p>
        
        {/* Tech Stack: Use subtle "pill" styling */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span 
              key={tech} 
              // Use Divider color for pill BG and Secondary Text for text
              className="px-2.5 py-1 bg-[#2C2C2E] text-[#8E8E93] text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links: Pushed to bottom. Use Divider color and Accent color */}
        <div className="mt-auto pt-5 border-t border-[#2C2C2E] flex justify-end items-center gap-5">
          {project.liveDemoUrl && (
            <a 
              href={project.liveDemoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()} 
              // Use Accent color for links, with a subtle hover
              className="flex items-center gap-1.5 text-sm font-medium text-[#0A84FF] hover:opacity-75 transition-opacity"
            >
              <ExternalLinkIcon /> Live Demo
            </a>
          )}
          {project.codeUrl && (
            <a 
              href={project.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={(e) => e.stopPropagation()}
              // Use Secondary text for non-primary link, hover to Accent
              className="flex items-center gap-1.5 text-sm font-medium text-[#8E8E93] hover:text-[#0A84FF] transition-colors"
            >
              <CodeIcon /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};


// --- Projects Component (from './Projects') ---

interface ProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

/**
 * Redesigned Projects section with Apple-like dark theme hero typography
 */
export const Projects: React.FC<ProjectsProps> = ({ projects, onProjectClick }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };
  
  return (
    <motion.section 
      id="projects" 
      // Use large padding for negative space
      className="py-24 sm:py-32 px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title: Apply Apple-like large, bold, tracking-tight typography */}
        <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-center text-white mb-16 sm:mb-24">
          Featured Projects
        </h2>
        
        {/* Grid: Kept the solid, responsive grid structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onProjectClick={onProjectClick} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// --- Main App Component (for demonstration) ---

// Mock Data
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'QuantumOS Interface',
    thumbnail: 'https://placehold.co/600x400/0A84FF/000000?text=QuantumOS',
    stack: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
    description: 'A futuristic OS interface built to explore advanced motion design principles and component-based architecture.',
    liveDemoUrl: '#',
    codeUrl: '#',
  },
  {
    id: '2',
    title: 'Echo-Sphere Analytics',
    thumbnail: 'https://placehold.co/600x400/1C1C1E/FFFFFF?text=Echo-Sphere',
    stack: ['Next.js', 'D3.js', 'PostgreSQL', 'Auth.js'],
    description: 'Real-time data visualization dashboard for global audio trends, featuring interactive charts and secure user authentication.',
    liveDemoUrl: '#',
    codeUrl: '#',
  },
  {
    id: '3',
    title: 'Carbon-Zero Planner',
    thumbnail: 'https://placehold.co/600x400/30D158/000000?text=Carbon-Zero',
    stack: ['SvelteKit', 'Firebase', 'Leaflet.js'],
    description: 'A progressive web app to help users track and minimize their carbon footprint through daily logging and smart suggestions.',
    liveDemoUrl: '#',
    codeUrl: '#',
  },
];

/**
 * Main App component to render the redesigned Projects section
 */
export default function App() {
  
  const handleProjectClick = (project: Project) => {
    console.log('Project clicked:', project.title);
    // In a real app, this would open a modal or navigate to a details page
  };

  return (
    // Set the pure black primary background and default text color
    <main className="bg-black text-white min-h-screen font-sans antialiased">
      <Projects 
        projects={mockProjects} 
        onProjectClick={handleProjectClick} 
      />
    </main>
  );
}