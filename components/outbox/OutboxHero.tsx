'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Download, ArrowRight, Terminal } from 'lucide-react';

const springPhysics = { type: 'spring', stiffness: 100, damping: 20 } as const;

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

const itemBlurVariant: Variants = {
  hidden: { opacity: 0, y: 25, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springPhysics,
  },
};

interface OutboxHeroProps {
  content: {
    badge: string;
    headline: string;
    subline: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
}

export const OutboxHero: React.FC<OutboxHeroProps> = ({ content }) => {
  return (
    <section
      id="outbox-hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[85vh] flex items-center justify-center bg-black text-white px-6 pt-12 pb-20 overflow-hidden"
    >
      {/* Background Ambience Mesh */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Verification Pill */}
        <motion.div variants={itemBlurVariant} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-neutral-300 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{content.badge}</span>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-400">SDE Intern Application</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 whitespace-pre-line leading-[1.08]"
          variants={itemBlurVariant}
        >
          {content.headline}
        </motion.h1>

        {/* Subline */}
        <motion.p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal mb-10 text-balance"
          variants={itemBlurVariant}
        >
          {content.subline}
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemBlurVariant}
        >
          {/* Primary CTA: See Live APIs */}
          <a
            href={content.ctaPrimary.href}
            className="w-full sm:w-auto px-7 py-3.5 bg-white text-black hover:bg-neutral-200 rounded-full font-semibold text-base tracking-tight transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            <Terminal className="w-4 h-4" />
            <span>{content.ctaPrimary.label}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          {/* Secondary CTA: Download Resume */}
          <a
            href={content.ctaSecondary.href}
            download
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-base font-medium tracking-tight transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 opacity-80" />
            <span>{content.ctaSecondary.label}</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
