'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Rocket, Cpu, ArrowUpRight } from 'lucide-react';
import type { SideQuest } from '@/data/universeData';

interface SideQuestCardProps {
  quest: SideQuest;
  index: number;
}

export const SideQuestCard: React.FC<SideQuestCardProps> = ({ quest, index }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Generative Art':
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      case 'Experiment':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'Creative UI':
        return <Rocket className="w-4 h-4 text-pink-400" />;
      default:
        return <Terminal className="w-4 h-4 text-emerald-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Orbit':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Prototypes':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'Shipped':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      default:
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl bg-neutral-900/60 border border-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:bg-neutral-900/80 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] flex flex-col justify-between"
    >
      <div>
        {/* Header: Icon, Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
              {getCategoryIcon(quest.category)}
            </div>
            <span className="text-xs font-mono font-medium text-neutral-300">
              {quest.category}
            </span>
          </div>

          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${getStatusColor(quest.status)}`}>
            {quest.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-pink-300 transition-colors mb-2">
          {quest.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
          {quest.description}
        </p>
      </div>

      {/* Tech tags & Footer */}
      <div>
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
          {quest.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-neutral-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
