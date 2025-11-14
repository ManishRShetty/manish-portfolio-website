import React from 'react';
import { motion } from 'framer-motion';

// --- Mock Data (from '../data/workExperience.json') ---
// Mock data created to match the structure of the original component
const workExperienceData = [
  {
    duration: "2023 - Present",
    role: "Senior Product Designer",
    company: "Apple Inc.",
    tasks: [
      "Designing world-class user interfaces for flagship products.",
      "Leading design sprints for new features on macOS and iOS.",
      "Mentoring junior designers and shaping team design principles."
    ]
  },
  {
    duration: "2020 - 2023",
    role: "UX/UI Designer",
    company: "Quantum Studios",
    tasks: [
      "Developed high-fidelity prototypes for mobile and web applications.",
      "Conducted user research and usability testing sessions.",
      "Collaborated with developers to ensure pixel-perfect implementation."
    ]
  },
  {
    duration: "2018 - 2020",
    role: "Junior Designer",
    company: "Creative Solutions",
    tasks: [
      "Assisted senior designers with asset creation and wireframing.",
      "Learned and applied user-centric design principles."
    ]
  }
];

/**
 * Redesigned WorkExperience component with an Apple-like dark theme
 */
export const WorkExperience: React.FC = () => {
  // Original animation variants are preserved
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };
  
  return (
    <motion.section 
      id="experience" 
      // Use large padding for ample negative space
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
        Work Experience
      </h2>
      
      {/* Timeline Container:
        Use Divider color (#2C2C2E) for the vertical timeline bar.
      */}
      <div className="relative max-w-2xl mx-auto border-l-2 border-[#2C2C2E]">
        
        {workExperienceData.map((job, index) => (
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
              <p className="text-sm font-medium text-[#0A84FF]">{job.duration}</p>
              
              {/* Role: Use Primary Text color (#FFFFFF) and larger font for hierarchy */}
              <h3 className="text-2xl font-bold mt-1 text-white">{job.role}</h3>
              
              {/* Company: Use Secondary Text color (#8E8E93) */}
              <p className="font-semibold text-[#8E8E93]">{job.company}</p>
              
              {/* Tasks List:
                Use Secondary Text color (#8E8E93).
                Replace default list-disc with minimal-style hyphens for a cleaner,
                more Apple-like aesthetic.
              */}
              <ul className="mt-4 space-y-2 text-[#8E8E93]">
                {job.tasks.map((task, i) => (
                  <li key={i} className="flex gap-x-3">
                    <span className="text-[#8E8E93]">-</span>
                    <span className="flex-1">{task}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};