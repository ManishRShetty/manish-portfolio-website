import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

// --- Physics Engine (Consistent with About Section) ---
const springPhysics = { type: "spring", stiffness: 100, damping: 20 };

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
        <motion.div variants={itemBlurVariant} className="flex justify-center mb-8">
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-neutral-300 tracking-wide uppercase">
            Available for new opportunities
          </div>
        </motion.div>

        {/* Heading 1: Massive, tight tracking, confident */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6"
          variants={itemBlurVariant}
        >
          Manish R Shetty
        </motion.h1>

        {/* Subheading: Gradient Text for subtle flair */}
        <motion.p
          className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 mb-8"
          variants={itemBlurVariant}
        >
          AI Product Engineer
        </motion.p>

        {/* Description: Clean, constrained width for readability */}
        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 leading-relaxed font-light mb-12"
          variants={itemBlurVariant}
        >
          I architect intelligent digital products. Bridging the gap between
          <span className="text-neutral-200 font-normal"> complex AI systems</span> and
          <span className="text-neutral-200 font-normal"> intuitive user experiences</span>.
        </motion.p>

        {/* Action Buttons: Simplified Hierarchy */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemBlurVariant}
        >
          {/* Primary Action - Solid White */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold text-base tracking-tight transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
          >
            View Projects
            <ArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 w-5 h-5" />
          </motion.a>

          {/* Secondary Action - Glass/Ghost */}
          <motion.a
            href="/Resume.pdf"
            download
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-sm text-white rounded-full font-medium text-base tracking-tight transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5 opacity-70" />
            Resume
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;