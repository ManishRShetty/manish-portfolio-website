
import React from 'react';
import { motion } from 'framer-motion';
import { NextjsIcon, ReactIcon, TailwindIcon, FramerMotionIcon, NodejsIcon, FirebaseIcon, DockerIcon, AwsIcon, GithubActionsIcon, DownloadIcon } from './Icons';

const skills = [
    { name: 'Next.js', icon: <NextjsIcon /> },
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon /> },
    { name: 'Framer Motion', icon: <FramerMotionIcon /> },
    { name: 'Node.js', icon: <NodejsIcon /> },
    { name: 'Firebase', icon: <FirebaseIcon /> },
    { name: 'Docker', icon: <DockerIcon /> },
    { name: 'AWS', icon: <AwsIcon /> },
    { name: 'GitHub Actions', icon: <GithubActionsIcon /> }
];

export const About: React.FC = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, staggerChildren: 0.2 } }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.section 
            id="about" 
            className="py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-4xl mx-auto">
                <motion.div 
                    className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0"
                    variants={itemVariants}
                >
                    <img 
                        src="https://picsum.photos/seed/mrshetty/400/400" 
                        alt="Manish R Shetty" 
                        className="rounded-full w-full h-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
                    />
                </motion.div>
                <motion.div 
                    className="max-w-lg text-center md:text-left"
                    variants={itemVariants}
                >
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        I'm a passionate Full Stack Developer focused on creating performant and beautiful web applications. With a strong foundation in Next.js, UI/UX principles, and modern DevOps practices, I thrive in fast-paced startup environments where I can build, learn, and ship quickly. I am actively seeking remote opportunities to contribute to innovative projects.
                    </p>
                    <a 
                        href="/placeholder-cv.pdf" 
                        download
                        className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-accent rounded-xl shadow-md hover:bg-accent-hover transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                    >
                        <DownloadIcon />
                        Download CV
                    </a>
                </motion.div>
            </div>

            <div className="max-w-4xl mx-auto mt-20">
                <h3 className="text-xl font-semibold text-center mb-8">My Tech Stack</h3>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={skill.name}
                            className="flex flex-col items-center gap-2 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 p-3 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};