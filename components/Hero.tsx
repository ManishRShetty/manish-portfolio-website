'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Download, Github } from 'lucide-react';

// --- Physics Engine (Apple Style Spring) ---
const springPhysics = { type: "spring", stiffness: 100, damping: 20 } as const;

// Staggered Container for Page Load Entry
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// The "Apple Blur" Reveal Variant on Load
const itemBlurVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springPhysics,
  },
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // --- Scroll-driven transforms ---
  const nameY = useTransform(scrollYProgress, [0, 0.3, 0.8], [0, -40, -60]);
  const nameScale = useTransform(scrollYProgress, [0, 0.3, 0.8], [1.1, 1, 0.95]);

  const subheadOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.85], [0, 1, 1]);
  const subheadY = useTransform(scrollYProgress, [0.05, 0.25, 0.85], [40, 0, 0]);

  const descOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.85], [0, 1, 1]);
  const descY = useTransform(scrollYProgress, [0.25, 0.45, 0.85], [40, 0, 0]);

  const buttonsOpacity = useTransform(scrollYProgress, [0.45, 0.65, 0.85], [0, 1, 1]);
  const buttonsY = useTransform(scrollYProgress, [0.45, 0.65, 0.85], [30, 0, 0]);

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-black text-white font-sans">
      {/* Sticky Viewport Frame */}
      <section className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Background Ambience - Original Subtle "Aurora" Mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-[100%] blur-[120px] opacity-20 pointer-events-none" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 1. Name - Apple Blur Reveal on Load + Scroll Transform */}
          <motion.h1
            variants={itemBlurVariant}
            style={{ y: nameY, scale: nameScale }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6"
          >
            Manish R. Shetty
          </motion.h1>

          {/* 2. Subheading - Apple Blur Reveal on Load + Scroll Transform */}
          <motion.p
            variants={itemBlurVariant}
            style={{ opacity: subheadOpacity, y: subheadY }}
            className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 mb-8"
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

          {/* 3. Description - Apple Blur Reveal on Load + Scroll Transform */}
          <motion.p
            variants={itemBlurVariant}
            style={{ opacity: descOpacity, y: descY }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 leading-relaxed font-light mb-12"
          >
            Founder, systems engineer, and builder of infrastructure for autonomous AI. I design immutable, auditable memory systems and high-throughput context pipelines that power production-grade agents.
          </motion.p>

          {/* 4. Action Buttons - Apple Blur Reveal on Load + Scroll Transform */}
          <motion.div
            variants={itemBlurVariant}
            style={{ opacity: buttonsOpacity, y: buttonsY }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://github.com/siranta-ai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-sm text-white rounded-full font-medium text-base tracking-tight transition-all flex items-center justify-center gap-2"
            >
              <Github className="w-5 h-5 opacity-80" />
              View GitHub
            </motion.a>

            <motion.a
              href="/manishshetty-resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-white/15 bg-white/5 text-white/90 text-sm font-semibold tracking-tight transition-all hover:bg-white/10 hover:border-white/30 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 opacity-80" />
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;