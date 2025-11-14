import React from 'react';
import { motion } from 'framer-motion';

// --- Inlined SVG Icons (Apple-inspired & Minimal) ---

// A minimal, Apple-style Download icon
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

// The original skills array, logic unchanged.
const skills = [
  { name: 'Next.js' },
  { name: 'React' },
  { name: 'Tailwind CSS' },
  { name: 'Framer Motion' },
  { name: 'Node.js' },
  { name: 'Firebase' },
  { name: 'Docker' },
  { name: 'AWS' },
  { name: 'GitHub Actions' },
];

export const About: React.FC = () => {
  // Original animation variants - logic remains identical.
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    // Section: Pure black background, white text, increased padding for negative space
    <motion.section
      id="about"
      className="py-24 md:py-32 bg-black text-white font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Main Heading: Large, bold, tight tracking (Apple-style) */}
      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-16 md:mb-20">
        About Me
      </h2>

      {/* Profile Section: Centered, max-width, with generous gaps */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Image */}
        <motion.div
          className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0"
          variants={itemVariants}
        >
          <img
            // Using a professional, dark placeholder
            src="https://placehold.co/400x400/1C1C1E/FFFFFF?text=MR&font=sans-serif"
            alt="Manish R Shetty"
            className="rounded-full w-full h-full object-cover shadow-lg"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://placehold.co/400x400/1C1C1E/FFFFFF?text=MR&font=sans-serif';
            }}
          />
        </motion.div>

        {/* Profile Text Content */}
        <motion.div
          className="max-w-lg text-center md:text-left"
          variants={itemVariants}
        >
          {/* Description: Uses Apple secondary text color (neutral-400) */}
          <p className="text-lg text-neutral-400 leading-relaxed">
            I'm a passionate Full Stack Developer focused on creating performant
            and beautiful web applications. With a strong foundation in Next.js,
            UI/UX principles, and modern DevOps practices, I thrive in
            fast-paced startup environments where I can build, learn, and ship
            quickly. I am actively seeking remote opportunities to contribute to
            innovative projects.
          </p>

          {/* CV Button: Styled as minimal, pill-shaped outline button */}
          <a
            href="/placeholder-cv.pdf"
            download
            className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-blue-500 bg-transparent border border-blue-500 rounded-full hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-black"
          >
            <DownloadIcon />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Tech Stack Section: Increased top margin for separation */}
      <div className="max-w-4xl mx-auto mt-24 md:mt-32 px-4 sm:px-6 lg:px-8">
        {/* Tech Stack Heading: Secondary heading style */}
        <h3 className="text-3xl font-semibold text-center mb-12">
          My Tech Stack
        </h3>

        {/* Skills "Tags" Layout: 
          Replaced the icon grid with a minimal, clean flex-wrap layout.
          Each "tag" uses the Apple "Card Surface" color (#1C1C1E).
          This is cleaner and more elegant than a grid of logos.
        */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="py-3 px-6 bg-[#1C1C1E] rounded-full text-neutral-200 font-medium cursor-default transition-all duration-300 hover:bg-neutral-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Default export
export default About;