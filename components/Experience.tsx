
import React from 'react';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };
  
  return (
    <motion.section 
      id="experience" 
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
      <div className="relative max-w-2xl mx-auto border-l-2 border-accent pl-8">
        <div className="absolute -left-[11px] top-1 w-5 h-5 bg-accent rounded-full border-4 border-white dark:border-gray-900"></div>
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <p className="text-sm font-medium text-accent">3 Months</p>
            <h3 className="text-xl font-bold mt-1">Frontend Developer Intern</h3>
            <p className="font-semibold text-gray-700 dark:text-gray-300">MyDbLink Casablanca</p>
            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Developed and optimized responsive React/Next.js components for client-facing dashboards, improving user experience.</li>
                <li>Collaborated with the backend team to integrate REST APIs, contributing to a 35% improvement in API performance and data retrieval times.</li>
                <li>Participated in agile ceremonies and code reviews, gaining valuable experience in professional software development workflows.</li>
            </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};
