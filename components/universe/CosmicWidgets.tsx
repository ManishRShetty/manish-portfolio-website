'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, RefreshCw, BookOpen, Coffee, Cpu, Heart } from 'lucide-react';
import { UNIVERSE_DATA, ArtifactItem, CosmicThought } from '@/data/universeData';

export const CosmicOracleWidget: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const rollQuote = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setQuoteIndex((prev) => (prev + 1) % UNIVERSE_DATA.spaceQuotes.length);
      setIsSpinning(false);
    }, 200);
  };

  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-purple-950/40 via-neutral-900/60 to-indigo-950/40 border border-purple-500/20 p-6 backdrop-blur-xl overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-purple-400 animate-spin-slow" />
          <span className="text-xs font-mono uppercase tracking-widest text-purple-300">
            Cosmic Oracle & Transmission
          </span>
        </div>

        <button
          onClick={rollQuote}
          disabled={isSpinning}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-neutral-300 hover:text-white transition-all focus:outline-none"
          aria-label="Draw new cosmic quote"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSpinning ? 'animate-spin' : ''}`} />
          <span>New Frequency</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={quoteIndex}
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          transition={{ duration: 0.3 }}
          className="py-2 text-lg sm:text-xl font-medium text-white/90 italic tracking-wide font-sans leading-relaxed"
        >
          {UNIVERSE_DATA.spaceQuotes[quoteIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const ArtifactCard: React.FC<{ item: ArtifactItem; index: number }> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl bg-neutral-900/60 border border-white/10 p-5 backdrop-blur-xl hover:border-amber-500/40 hover:bg-neutral-900/80 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl p-2 rounded-xl bg-white/5 border border-white/5">
            {item.icon}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300/80 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
            {item.category}
          </span>
        </div>

        <h4 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
          {item.title}
        </h4>
        <p className="text-xs text-neutral-400 mb-3 font-medium">
          {item.subtitle}
        </p>

        <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
          {item.description}
        </p>
      </div>

      {item.highlight && (
        <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-amber-400/90 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>{item.highlight}</span>
        </div>
      )}
    </motion.div>
  );
};

export const MusingCard: React.FC<{ thought: CosmicThought; index: number }> = ({ thought, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl bg-neutral-900/60 border border-white/10 p-6 backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-mono text-indigo-400">
          {thought.date}
        </span>
        <span className="text-xs font-medium text-neutral-400 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5">
          {thought.mood}
        </span>
      </div>

      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
        {thought.topic}
      </h4>

      <p className="text-sm text-neutral-300/90 font-light leading-relaxed">
        {thought.content}
      </p>
    </motion.div>
  );
};
