import React from 'react';
import { motion } from 'framer-motion';

// --- Mock Data (from '../data/achievements.json') ---
// Mock data created to match the structure of the original component
const achievementsData = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024"
  },
  {
    title: "Framer Motion Pro",
    issuer: "Framer",
    date: "2023"
  },
  {
    title: "Awwwards Site of the Day",
    issuer: "Awwwards",
    date: "2022"
  }
];

// --- Icons ---
// A custom SVG TrophyIcon to replace the emoji for a cleaner, premium look
const TrophyIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-8 h-8"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M12 12v-7"></path>
    <path d="M4 9l8 4 8-4"></path>
    <path d="M4 12l8 4 8-4"></path>
    <path d="M12 22v-6"></path>
    <path d="M8 19l-2 1.5"></path>
    <path d="M16 19l2 1.5"></path>
  </svg>
);


/**
 * Redesigned Achievements component with an Apple-like dark theme
 */
export const Achievements: React.FC = () => {
    // Original animation variants are preserved
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    return (
        <motion.section
            id="achievements"
            // Use large padding for ample negative space
            className="py-24 sm:py-32 px-6 lg:px-8 bg-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            {/* Section Title: Apply Apple-like large, bold typography */}
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-center text-white mb-16 sm:mb-24">
              Achievements
            </h2>
            
            <div className="max-w-3xl mx-auto">
                {/* List Container: Use ample spacing */}
                <ul className="space-y-6">
                    {achievementsData.map((achievement, index) => (
                        <motion.li
                            key={index}
                            // List Item / Card: Use Card Surface, large rounding, and subtle shadow
                            className="bg-[#1C1C1E] p-6 rounded-2xl shadow-xl shadow-black/25 flex items-center gap-x-5"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            {/* Icon: Use Accent color and ensure it doesn't shrink */}
                            <div className="text-[#0A84FF] flex-shrink-0">
                              <TrophyIcon />
                            </div>
                            
                            {/* Text Content */}
                            <div>
                                {/* Title: Primary Text color */}
                                <h3 className="font-semibold text-lg text-white">{achievement.title}</h3>
                                
                                {/* Issuer/Date: Secondary Text color */}
                                <p className="text-sm text-[#8E8E93] mt-1">
                                  {achievement.issuer} - {achievement.date}
                                </p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.section>
    );
};

