import React from 'react';
import { motion } from 'framer-motion';
import { communityData } from '../data/community.json';

export const Community: React.FC = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    return (
        <motion.section
            id="community"
            className="py-24 bg-gray-50 dark:bg-gray-900/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <h2 className="text-3xl font-bold text-center mb-12">Community Involvement</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {communityData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold">{item.organization}</h3>
                        <p className="font-semibold text-accent my-1">{item.role}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.duration}</p>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};
