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

const skills = [
  { name: 'NextJS', icon: <RiNextjsFill /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Tailwind', icon: <RiTailwindCssFill /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'GCP', icon: <SiGooglecloud /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'n8n', icon: <SiN8N /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Framer', icon: <SiFramer /> },
];

// --- Physics & Variants ---
const springPhysics = { type: "spring", stiffness: 100, damping: 20 } as const;

// A tighter spring for hover interactions to make them feel responsive
const hoverPhysics = { type: "spring", stiffness: 400, damping: 25 };

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

          {/* Profile Image - Subtle Parallax Feel */}
          <motion.div
            variants={itemBlurVariant}
            className="w-full md:w-1/3 flex justify-center md:justify-start"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 group">
              {/* Subtle Glow behind image (Apple Dark Mode style) */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <img
                src="/Manish.png"
                alt="Manish R Shetty"
                className="relative z-10 rounded-full w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-out border border-white/10"
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
                href="/Resume.pdf"
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
              <motion.div
                key={skill.name}
                variants={itemBlurVariant}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  color: "#FFFFFF", // Brighten text/icon on hover
                  transition: hoverPhysics // Use snappy spring physics
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 px-5 py-3 bg-[#1C1C1E] border border-white/5 rounded-full text-neutral-400 cursor-default backdrop-blur-sm"
              >
                <span className="text-lg opacity-80">{skill.icon}</span>
                <span className="text-sm font-medium tracking-wide">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;