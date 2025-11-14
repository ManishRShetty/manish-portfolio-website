import React from 'react';
// Import Variants type from framer-motion to explicitly type animation variants.
import { motion, Variants } from 'framer-motion';

// A minimal, Apple-style Download icon to replace the external import.
// This is inspired by modern icon sets and keeps the component self-contained.
const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" y2="3" />
  </svg>
);

export const Hero: React.FC = () => {
  // Original animation variants - logic remains identical.
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Explicitly typed itemVariants.
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    // Section: Full-screen, pure black background, flex-centered.
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-black text-white font-sans py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Content Container: Centered text, increased max-width for better spacing */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading 1: Large, bold, tight tracking (Apple-style) */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-tight"
          variants={itemVariants}
        >
          Manish R Shetty
        </motion.h1>

        {/* Subheading (Title): Uses Apple Blue accent color */}
        <motion.p
          className="mt-4 text-2xl md:text-3xl font-medium text-blue-500"
          variants={itemVariants}
        >
          Full Stack Developer
        </motion.p>

        {/* Description: Uses Apple secondary text color (neutral-400) for soft contrast */}
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 leading-relaxed"
          variants={itemVariants}
        >
          Building fast, scalable, and user-centered web apps using Next.js &
          DevOps.
        </motion.p>

        {/* Button Container: Increased margin-top for negative space */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
          variants={itemVariants}
        >
          {/* Button 1 (Filled, Pill-shaped) */}
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 text-base font-medium text-white bg-blue-500 rounded-full shadow-lg shadow-blue-500/20 hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-black"
          >
            View Projects
          </a>

          {/* Button 2 (Outline, Pill-shaped) */}
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 text-base font-medium text-blue-500 bg-transparent border border-blue-500 rounded-full hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-black"
          >
            Contact Me
          </a>

          {/* Button 3 (Outline, Pill-shaped, with Icon) */}
          <a
            href="/placeholder-cv.pdf"
            download
            className="w-full sm:w-auto px-6 py-3 inline-flex items-center justify-center gap-2 text-base font-medium text-blue-500 bg-transparent border border-blue-500 rounded-full hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-black"
          >
            <DownloadIcon />
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Default export for lazy loading or other imports
export default Hero;