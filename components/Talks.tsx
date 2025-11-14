import React from 'react';
import { motion } from 'framer-motion';

// --- Mock Data (from '../data/talks.json') ---
// Mock data created to match the structure of the original component
const talksData = [
  { 
    title: "State Management in Modern React", 
    event: "React Conference 2024", 
    date: "March 2024", 
    url: "#" 
  },
  { 
    title: "Designing for Accessibility: A Hands-On Workshop", 
    event: "A11y Workshop", 
    date: "Jan 2024", 
    url: "#" 
  },
  { 
    title: "The Future of Fluid Motion in UI", 
    event: "Design Meetup NYC", 
    date: "Sept 2023", 
    url: "#" 
  },
  { 
    title: "Introduction to SvelteKit", 
    event: "Frontend Masters", 
    date: "June 2023", 
    url: null // Example of a talk with no link
  }
];

// --- Icons (from './Icons') ---
// Re-created as an inline SVG component for this single-file example
// Using the "arrow-up-right-from-square" icon
const ExternalLinkIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className="w-5 h-5" 
    aria-hidden="true"
  >
    <path 
      fillRule="evenodd" 
      d="M8.25 3.75H4.5A2.25 2.25 0 002.25 6v9A2.25 2.25 0 004.5 17.25h9A2.25 2.25 0 0015.75 15V11.25a.75.75 0 00-1.5 0V15a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75V6a.75.75 0 01.75-.75h3.75a.75.75 0 000-1.5zM13.5 3.75a.75.75 0 000 1.5h1.69l-5.47 5.47a.75.75 0 101.06 1.06L16.25 6.31V8a.75.75 0 001.5 0V3.75h-4.25z" 
      clipRule="evenodd" 
    />
  </svg>
);

/**
 * Redesigned Talks component with an Apple-like dark theme
 */
export const Talks: React.FC = () => {
    // Original animation variants are preserved
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    return (
        <motion.section
            id="talks"
            // Use a Secondary Surface color to differentiate the section
            className="py-24 sm:py-32 px-6 lg:px-8 bg-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            {/* Section Title: Apply Apple-like large, bold typography */}
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-center text-white mb-16 sm:mb-24">
              Talks & Workshops
            </h2>
            
            {/* List Container: Use ample vertical spacing for a clean list */}
            <div className="max-w-3xl mx-auto space-y-4">
                {talksData.map((talk, index) => (
                    <motion.div
                        key={index}
                        // Card Item: Use Card Surface, large rounding, and minimal layout
                        className="bg-[#1C1C1E] p-6 rounded-2xl shadow-xl shadow-black/25 flex justify-between items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {/* Text Content */}
                        <div className="flex-1 min-w-0">
                            {/* Title: Primary Text color, truncates if too long */}
                            <h3 className="text-lg font-semibold text-white truncate pr-4">{talk.title}</h3>
                            
                            {/* Event/Date: Secondary Text color */}
                            <p className="text-[#8E8E93] mt-1 text-sm">
                              {talk.event} - <span className="opacity-75">{talk.date}</span>
                            </p>
                        </div>
                        
                        {/* Link Button */}
                        {talk.url && (
                            <a 
                              href={talk.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              // Button Style: Use Divider color for BG, Secondary Text for icon
                              className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#2C2C2E] text-[#8E8E93] 
                                         hover:text-[#0A84FF] transition-colors"
                              aria-label={`View details for ${talk.title}`}
                            >
                                <ExternalLinkIcon />
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};