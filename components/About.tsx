import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaDocker, FaNodeJs, FaAws, FaPython, FaGithub } from "react-icons/fa";
import { SiFramer, SiFirebase, SiKubernetes, SiGooglecloud, SiN8N } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";

// --- Minimal React Icon ---
const ReactIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="12" rx="11" ry="4.2" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

// --- Enhanced Data Structure with URLs and Brand Colors ---
// If a color is too dark for your background, I've adjusted it to a visible shade.
const skills = [
  { name: 'NextJS', icon: <RiNextjsFill />, href: 'https://nextjs.org', color: '#FFFFFF' },
  { name: 'React', icon: <ReactIcon />, href: 'https://react.dev', color: '#61DAFB' },
  { name: 'Tailwind', icon: <RiTailwindCssFill />, href: 'https://tailwindcss.com', color: '#38B2AC' },
  { name: 'Python', icon: <FaPython />, href: 'https://www.python.org', color: '#3776AB' },
  { name: 'Kubernetes', icon: <SiKubernetes />, href: 'https://kubernetes.io', color: '#326CE5' },
  { name: 'Firebase', icon: <SiFirebase />, href: 'https://firebase.google.com', color: '#FFCA28' },
  { name: 'Docker', icon: <FaDocker />, href: 'https://www.docker.com', color: '#2496ED' },
  { name: 'AWS', icon: <FaAws />, href: 'https://aws.amazon.com', color: '#FF9900' },
  { name: 'GCP', icon: <SiGooglecloud />, href: 'https://cloud.google.com', color: '#4285F4' },
  { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com', color: '#FFFFFF' },
  { name: 'n8n', icon: <SiN8N />, href: 'https://n8n.io', color: '#FF6584' },
  { name: 'Node.js', icon: <FaNodeJs />, href: 'https://nodejs.org', color: '#339933' },
  { name: 'Framer', icon: <SiFramer />, href: 'https://www.framer.com/motion/', color: '#0055FF' },
];

// --- Physics & Variants ---
const springPhysics = { type: "spring" as const, stiffness: 100, damping: 20 };
const hoverPhysics = { type: "spring" as const, stiffness: 400, damping: 25 };

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemBlurVariant: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springPhysics
  },
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black text-white font-sans overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >

        {/* Header - Masked Reveal */}
        <motion.div variants={itemBlurVariant} className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white/90">
            About Me.
          </h2>
        </motion.div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-24">

          {/* Profile Image */}
          <motion.div
            variants={itemBlurVariant}
            className="w-full md:w-1/3 flex justify-center md:justify-start"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src="/Manish.webp"
                alt="Manish R Shetty"
                className="relative z-10 rounded-full w-full h-full object-cover  hover:grayscale-0 transition-all duration-500 ease-out border border-white/10"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://placehold.co/400x400/1C1C1E/FFFFFF?text=MR&font=sans-serif';
                }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div className="w-full md:w-2/3 space-y-8" variants={containerVariants}>
            <motion.p variants={itemBlurVariant} className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
              I'm a dedicated <span className="text-white font-medium">Full Stack & AI Engineer</span> building intelligent, elegant web applications.
              I thrive in high-velocity environments where design, performance, and engineering converge.
            </motion.p>

            <motion.p variants={itemBlurVariant} className="text-lg text-neutral-500 leading-relaxed">
              Currently focused on Next.js, Agentic AI, and scalable DevOps workflows. I don't just write code; I craft experiences that solve actual problems.
            </motion.p>

            {/* Buttons Row */}
            <motion.div variants={itemBlurVariant} className="pt-4 flex flex-wrap gap-4">
              <a
                href="/manishshetty-resume.pdf"
                download
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors duration-300"
              >
                <MdOutlineFileDownload className="text-lg" />
                <span>Resume</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack - "Floating Cloud" */}
        <motion.div
          className="mt-32 pt-16 border-t border-white/5"
          variants={containerVariants}
        >
          <motion.h3 variants={itemBlurVariant} className="text-2xl font-semibold text-center mb-10 text-neutral-200">
            Technical Arsenal
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <motion.a
                key={skill.name}
                href={skill.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemBlurVariant}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Slightly more transparent
                  borderColor: skill.color, // Border takes the brand color
                  color: skill.color,       // Text/Icon takes the brand color
                  boxShadow: `0 0 15px ${skill.color}20`, // Subtle glow of brand color
                  transition: hoverPhysics
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 px-5 py-3 bg-[#1C1C1E] border border-white/5 rounded-full text-neutral-400 cursor-pointer backdrop-blur-sm transition-colors"
              >
                <span className="text-lg opacity-80">{skill.icon}</span>
                <span className="text-sm font-medium tracking-wide">{skill.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;