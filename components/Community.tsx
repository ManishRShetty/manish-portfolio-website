import React from 'react';
import { motion } from 'framer-motion';

// --- Mock Data (from '../data/community.json') ---
// Mock data created to match the structure of the original component
const communityData = [
  {
    organization: "React Conference 2024",
    role: "Speaker",
    duration: "March 2024",
    description: "Delivered a talk on 'State Management in Modern React' to an audience of over 500 developers.",
    logoUrl: "https://placehold.co/64x64/1C1C1E/0A84FF?text=RC&font=sans-serif&shape=circle"
  },
  {
    organization: "OpenSource Collective",
    role: "Core Contributor",
    duration: "2022 - Present",
    description: "Actively maintain and contribute to three major open-source UI libraries, focusing on accessibility and performance.",
    logoUrl: "https://placehold.co/64x64/1C1C1E/8E8E93?text=OSC&font=sans-serif&shape=circle"
  },
  {
    organization: "Design Meetup NYC",
    role: "Mentor",
    duration: "2021 - 2023",
    description: "Mentored aspiring designers, providing portfolio reviews and career guidance at monthly meetups.",
    logoUrl: "https://placehold.co/64x64/1C1C1E/8E8E93?text=DM&font=sans-serif&shape=circle"
  },
  {
    organization: "Tech for Good",
    role: "Volunteer Developer",
    duration: "Summer 2022",
    description: "Built a donation tracking application for a local non-profit organization, pro bono.",
    logoUrl: "https://placehold.co/64x64/1C1C1E/8E8E93?text=TFG&font=sans-serif&shape=circle"
  }
];

/**
 * Redesigned Community component with an Apple-like dark theme
 */
export const Community: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <motion.section
      id="community"
      // Use a Secondary Surface color to differentiate the section
      className="py-24 sm:py-32 px-6 lg:px-8 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Section Title: Apply Apple-like large, bold typography */}
      <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-center text-white mb-16 sm:mb-24">
        Community Involvement
      </h2>
      
      {/* Grid Container */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {communityData.map((item, index) => (
          <motion.div
            key={index}
            // Card: Use Card Surface, large rounding, and subtle shadow
            // Updated to a flex layout to accommodate the logo
            className="bg-[#1C1C1E] p-8 rounded-2xl shadow-xl shadow-black/25 flex gap-x-6 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <img
              src={item.logoUrl}
              alt={`${item.organization} logo`}
              // Use a fixed size for the logo, rounded
              className="w-16 h-16 rounded-full flex-shrink-0 bg-[#111111]"
              // Add a fallback placeholder
              onError={(e) => (e.currentTarget.src = 'https://placehold.co/64x64/1C1C1E/8E8E93?text=Logo&font=sans-serif&shape=circle')}
            />

            {/* Text Content */}
            <div className="flex-grow">
              {/* Organization: Primary Text color, strong hierarchy */}
              <h3 className="text-xl font-semibold text-white">{item.organization}</h3>
              
              {/* Role: Use Accent color for emphasis */}
              <p className="font-semibold text-[#0A84FF] my-1">{item.role}</p>

              {/* Duration: Use Secondary Text color */}
              <p className="text-sm text-[#8E8E93] mb-4">{item.duration}</p>
              
              {/* Description: Use Secondary Text color for body copy */}
              <p className="text-base text-[#8E8E93]">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// --- Main App Component (for demonstration) ---

/**
 * Main App component to render the redesigned Community section
 */
