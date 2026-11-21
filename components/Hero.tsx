import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Download, ArrowRight, Github } from 'lucide-react';

// --- Physics Engine (Consistent with About Section) ---
const springPhysics = { type: "spring", stiffness: 100, damping: 20 } as const;

// Staggered Container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// The "Apple Blur" Reveal
const itemBlurVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springPhysics
  },
};

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black text-white font-sans overflow-hidden px-6"
    >
      {/* Background Ambience - Subtle "Aurora" Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-[100%] blur-[120px] opacity-20 pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge / Pill */}
        {/* <motion.div variants={itemBlurVariant} className="flex justify-center mb-8">
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-neutral-300 tracking-wide uppercase">
            Available for new opportunities
          </div>
        </motion.div> */}

        {/* Heading 1: Massive, tight tracking, confident */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6"
          variants={itemBlurVariant}
        >
          Manish R. Shetty
        </motion.h1>

        {/* Subheading: Gradient Text for subtle flair */}
        <motion.p
          className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 mb-8"
          variants={itemBlurVariant}
        >
          Building{' '}
          <a
            href="https://siranta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center align-middle"
          >
            <img
              src="/siranta/siranta-white.svg"
              alt="Siranta AI"
              className="w-26 h-7 object-contain mb-3 mr-2"
            />
          </a>
          Engineering zero-trust memory and context infrastructure for autonomous agents.
        </motion.p>

        {/* Description: Clean, constrained width for readability */}
        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 leading-relaxed font-light mb-12"
          variants={itemBlurVariant}
        >
          Founder, systems engineer, and builder of infrastructure for autonomous AI. I design immutable, auditable memory systems and high-throughput context pipelines that power production-grade agents.
        </motion.p>

        {/* Action Buttons: Clean Minimal Hierarchy */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          variants={itemBlurVariant}
        >
          {/* Primary Action - GitHub */}
          <motion.a
            href="https://github.com/siranta-ai"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-7 py-3.5 bg-white text-black font-semibold rounded-full text-sm tracking-tight transition-all flex items-center justify-center gap-2 hover:bg-neutral-200"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub</span>
          </motion.a>

          {/* Secondary Action - Resume */}
          <motion.a
            href="/manishshetty-resume.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/15 bg-white/5 text-white text-sm font-medium tracking-tight transition-all hover:bg-white/10 hover:border-white/30 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 opacity-80" />
            <span>Resume</span>
          </motion.a>

          {/* 3rd Priority Action - Lab (Minimal & Clean) */}
          <motion.a
            href="/lab"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-white/10 bg-white/[0.03] text-neutral-400 text-sm font-medium tracking-tight transition-all hover:bg-white/5 hover:border-white/20 hover:text-white flex items-center justify-center gap-2"
          >
            <span>Lab</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-60" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Minimal */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div> */}
    </section>
  );
};

export default Hero;