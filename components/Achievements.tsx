import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../data/achievements.json';

export const Achievements: React.FC = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    return (
        <motion.section
            id="achievements"
            className="py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
            <div className="max-w-3xl mx-auto">
                <ul className="space-y-4">
                    {achievementsData.map((achievement, index) => (
                         <motion.li
                            key={index}
                            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                         >
                            <span className="text-accent mr-4">🏆</span>
                            <div>
                                <h3 className="font-semibold">{achievement.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{achievement.issuer} - {achievement.date}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.section>
    );
};
