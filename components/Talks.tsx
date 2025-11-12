import React from 'react';
import { motion } from 'framer-motion';
import { talksData } from '../data/talks.json';
import { ExternalLinkIcon } from './Icons';

export const Talks: React.FC = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    return (
        <motion.section
            id="talks"
            className="py-24 bg-gray-50 dark:bg-gray-900/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <h2 className="text-3xl font-bold text-center mb-12">Talks and Workshops</h2>
            <div className="max-w-3xl mx-auto space-y-6">
                {talksData.map((talk, index) => (
                    <motion.div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex justify-between items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h3 className="text-lg font-bold">{talk.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{talk.event} - <span className="text-sm">{talk.date}</span></p>
                        </div>
                        {talk.url && (
                            <a href={talk.url} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 dark:text-gray-400 hover:text-accent rounded-full transition-colors">
                                <ExternalLinkIcon />
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};
