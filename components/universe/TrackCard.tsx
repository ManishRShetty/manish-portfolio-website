'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Disc3, ExternalLink, Sparkles } from 'lucide-react';
import type { Track } from '@/data/universeData';

interface TrackCardProps {
  track: Track;
  index: number;
}

export const TrackCard: React.FC<TrackCardProps> = ({ track, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl bg-neutral-900/60 border border-white/10 p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/50 hover:bg-neutral-900/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col justify-between overflow-hidden"
    >
      {/* Glow highlight on hover */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/30 transition-all duration-500" />

      <div>
        {/* Top bar: Vinyl disk animation + Album cover */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-neutral-950 border border-white/5">
          <img
            src={track.cover}
            alt={track.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Vinyl disc sliding out on hover */}
          <motion.div
            animate={{
              x: isHovered ? '28%' : '0%',
              rotate: isHovered ? 360 : 0,
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 4, ease: 'linear' },
              x: { duration: 0.4, ease: 'easeOut' },
            }}
            className="absolute top-2 right-2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-neutral-950 border-2 border-neutral-800 shadow-2xl flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              backgroundImage: 'radial-gradient(circle, #222 30%, #111 31%, #222 50%, #111 51%, #222 70%)',
            }}
          >
            <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-purple-400 flex items-center justify-center">
              <Disc3 className="w-3.5 h-3.5 text-purple-300 animate-spin" />
            </div>
          </motion.div>

          {/* Top Badge */}
          {track.isTopFavorite && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-purple-500/80 backdrop-blur-md text-[10px] font-semibold text-white uppercase tracking-wider flex items-center gap-1 shadow-lg">
              <Sparkles className="w-2.5 h-2.5" />
              Heavy Rotation
            </div>
          )}

          {/* Vibe badge on bottom of art */}
          <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs text-neutral-300 flex items-center justify-between">
            <span className="truncate text-[11px] font-medium text-purple-300">
              {track.genre}
            </span>
            <span className="text-[10px] text-neutral-400">
              {track.vibe}
            </span>
          </div>
        </div>

        {/* Title & Artist */}
        <div className="mb-3">
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors line-clamp-1">
            {track.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 font-medium">
            {track.artist} <span className="text-neutral-600">•</span> {track.album}
          </p>
        </div>

        {/* Quote / Context note */}
        {track.quote && (
          <p className="text-xs text-neutral-400/90 italic font-light line-clamp-2 mb-4 bg-white/5 rounded-lg p-2.5 border border-white/5">
            "{track.quote}"
          </p>
        )}
      </div>

      {/* Action footer */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between">
        <span className="text-[11px] text-neutral-500 font-mono flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Sonic Frequency
        </span>

        {track.link && (
          <a
            href={track.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
          >
            <span>Listen</span>
            <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-purple-300" />
          </a>
        )}
      </div>
    </motion.div>
  );
};
