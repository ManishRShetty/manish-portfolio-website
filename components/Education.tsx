import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/education.json';

export const Education: React.FC = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    return (
        <motion.section
            id="education"
            className="py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            <div className="relative max-w-2xl mx-auto border-l-2 border-accent">
                {educationData.map((edu, index) => (
                    <div key={index} className="mb-12 pl-8 relative">
                         <div className="absolute -left-[11px] top-1 w-5 h-5 bg-accent rounded-full border-4 border-white dark:border-gray-900"></div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-sm font-medium text-accent">{edu.duration}</p>
                            <h3 className="text-xl font-bold mt-1">{edu.institution}</h3>
                            <p className="font-semibold text-gray-700 dark:text-gray-300">{edu.degree}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};
