
import React from 'react';
// FIX: Import Variants type from framer-motion to explicitly type animation variants.
import { motion, Variants } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // FIX: Explicitly type `itemVariants` with `Variants` to ensure type compatibility.
  // This resolves errors where TypeScript inferred string literals like 'easeOut' as a general `string`
  // instead of the specific literal type expected by framer-motion.
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
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          Manish R Shetty
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-accent"
          variants={itemVariants}
        >
          Full Stack Developer
        </motion.p>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300"
          variants={itemVariants}
        >
          Building fast, scalable, and user-centered web apps using Next.js & DevOps.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-accent rounded-xl shadow-md hover:bg-accent-hover transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 text-base font-medium text-accent bg-transparent border-2 border-accent rounded-xl hover:bg-accent/10 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
