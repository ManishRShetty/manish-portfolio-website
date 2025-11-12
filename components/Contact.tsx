import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export const Contact: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        // This is where you would integrate with a service like Formspree or EmailJS
        // For this example, we'll just simulate a successful submission.
        setTimeout(() => {
            setStatus('Message sent successfully!');
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setStatus(''), 3000);
        }, 1000);
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };
    
    return (
        <motion.section 
            id="contact" 
            className="py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="text-center">
                <h2 className="text-3xl font-bold">Let's Build Something Together 🚀</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Have a project in mind or just want to connect? Feel free to reach out.</p>
            </div>
            <div className="mt-12 max-w-xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input type="text" name="name" id="name" required placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-accent"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" required placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-accent"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea name="message" id="message" required rows={5} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="px-8 py-3 text-base font-medium text-white bg-accent rounded-xl shadow-md hover:bg-accent-hover transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                            Send Message
                        </button>
                    </div>
                    {status && <p className="text-center mt-4">{status}</p>}
                </form>
            </div>
            <div className="mt-16 flex justify-center items-center gap-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"><GithubIcon /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"><LinkedinIcon /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors"><TwitterIcon /></a>
            </div>
        </motion.section>
    );
};