import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon, NodeIcon, TailwindIcon, FramerIcon,  DockerIcon, AwsIcon, } from './Icons';
// --- Inlined SVG Icons (Apple-inspired & Minimal) ---
import { FaDocker, FaNodeJs, FaAws, FaPython } from "react-icons/fa";
import { SiFramer, SiFirebase, SiKubernetes, SiGooglecloud, SiN8N } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";
// A minimal, Apple-style Download icon
// const DownloadIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//     <polyline points="7 10 12 15 17 10" />
//     <line x1="12" y1="15" y2="3" />
//   </svg>
// );

// --- Inlined SVG Icons (Tech Stack) ---
// These are monochrome and will inherit the text color.

// const NextIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//     {/* Minimal Vercel/Next.js Triangle */}
//     <path d="M12 2.163l-9.9 17.147h19.8L12 2.163zM12 4.47l7.807 13.523H4.193L12 4.47z" />
//   </svg>
// );

const ReactIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5" // Thinner stroke for a lighter feel
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="12" rx="11" ry="4.2" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

// const TailwindIcon = () => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     {/* Minimal "wind" icon */}
//     <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 11 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
//   </svg>
// );

// const FramerIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//     {/* Simplified Framer logo */}
//     <path d="M12 6H6v6h6V6zM18 6h-6v6h6V6zM12 12H6v6h6v-6z" />
//   </svg>
// );

// const NodeIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//     {/* Simplified Node.js Hexagon */}
//     <path d="M12 2.16L3.17 7.08v9.84L12 21.84l8.83-4.92V7.08L12 2.16zm-1.04 15.11v-3.23H6.84v-1.59h4.12v-3.3l4.9 3.32-4.9 4.8z" />
//   </svg>
// );

// const FirebaseIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//     {/* Simplified Firebase logo */}

//     <path d="M4.168 21.36l6.392-14.736 3.264 3.024-6.32 14.592zM5.76 19.416l3.336 2.88 7.392-17.064-3.264-3.024z" />
//   </svg>
// );

// const DockerIcon = () => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     {/* "Package" icon as a proxy for "container" */}
//     <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
//     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
//     <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
//     <line x1="12" y1="22.08" x2="12" y2="12"></line>
//   </svg>
// );

// const AwsIcon = () => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     {/* Simple "cloud" icon */}
//     <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
//   </svg>
// );

// const GithubActionsIcon = () => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     {/* "Play in circle" icon for Actions/Workflows */}
//     <circle cx="12" cy="12" r="10" />
//     <polygon points="10 8 16 12 10 16 10 8" />
//   </svg>
// );

// --- Updated Skills Array ---
// Now includes an 'icon' property
const skills = [
  // { name: 'Next.js', icon: <NextIcon /> },
  { name: 'NextJS', icon: <RiNextjsFill /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill /> },
  { name: 'Python', icon: <FaPython /> },
  
  {name: 'Kubernetes', icon:<SiKubernetes />},
  
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'AWS', icon: <FaAws /> },
  {name: 'Google Cloud', icon:<SiGooglecloud />},
  { name: 'GitHub Actions', icon: <GithubIcon /> },
  { name: 'n8n', icon: <SiN8N /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Framer Motion', icon: <SiFramer /> },
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
            src="/Manish.png"
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
            I'm a dedicated Full Stack, AI, and Product Engineer with a strong foundation in Next.js, UI/UX design, and modern DevOps workflows. I build fast, elegant, and intelligent web applications that solve real user problems. I thrive in fast-paced startup environments where I can design, build, iterate, and ship impactful features quickly. I’m actively seeking remote opportunities to work on innovative, AI-driven products.
          </p>

          {/* CV Button: Styled as minimal, pill-shaped outline button */}
          <a
            href="/Resume.pdf"
            download
            className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-blue-500 bg-transparent border border-blue-500 rounded-full hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-black"
          >
            <MdOutlineFileDownload />
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
              className="flex items-center gap-2 py-3 px-6 bg-[#1C1C1E] rounded-full text-neutral-200 font-medium cursor-default transition-all duration-300 hover:bg-neutral-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Render the icon */}
              {skill.icon}
              {/* Render the name */}
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