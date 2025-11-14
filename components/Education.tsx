import React from 'react';
import { motion } from 'framer-motion';

// --- Mock Data (from '../data/education.json') ---
// Mock data created to match the structure of the original component
const educationData = [
  {
    duration: "2016 - 2018",
    institution: "Stanford University",
    degree: "M.S. in Human-Computer Interaction"
  },
  {
    duration: "2012 - 2016",
    institution: "University of Design",
    degree: "B.F.A. in Graphic Design"
  }
];

/**
 * Redesigned Education component with an Apple-like dark theme
 */
export const Education: React.FC = () => {
  // Original animation variants are preserved
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <motion.section
      id="education"
      // Use large padding for ample negative space, match other sections
      className="py-24 sm:py-32 px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Section Title: 
        Apply Apple-like large, bold, tracking-tight typography.
        Use Primary Text color (#FFFFFF).
      */}
      <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-center text-white mb-16 sm:mb-24">
        Education
      </h2>
      
      {/* Timeline Container:
        Use Divider color (#2C2C2E) for the vertical timeline bar.
      */}
      <div className="relative max-w-2xl mx-auto border-l-2 border-[#2C2C2E]">
        
        {educationData.map((edu, index) => (
          // Timeline Item: Increase margin for more negative space
          <div key={index} className="mb-16 pl-8 relative">
            
            {/* Timeline Dot:
              Use Accent color (#0A84FF) for the dot.
              Use Primary Background color (#000000) for the dot's border to "punch it out"
              from the timeline.
            */}
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-[#0A84FF] rounded-full border-4 border-black"></div>
            
            {/* Motion container for content fade-in */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Duration: Use Accent color (#0A84FF) for emphasis */}
              <p className="text-sm font-medium text-[#0A84FF]">{edu.duration}</p>
              
              {/* Institution: Use Primary Text color (#FFFFFF) and larger font for hierarchy */}
              <h3 className="text-2xl font-bold mt-1 text-white">{edu.institution}</h3>
              
              {/* Degree: Use Secondary Text color (#8E8E93) */}
              <p className="font-semibold text-[#8E8E93]">{edu.degree}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

// --- Main App Component (for demonstration) ---

/**
 * Main App component to render the redesigned Education section
 */
