'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Film, Quote } from 'lucide-react';
import type { Movie } from '@/data/universeData';

interface CinemaCardProps {
  movie: Movie;
  index: number;
}

export const CinemaCard: React.FC<CinemaCardProps> = ({ movie, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl bg-neutral-900/60 border border-white/10 overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)] flex flex-col"
    >
      {/* Poster Image with Gradient Overlay */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-950">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {movie.badge ? (
            <span className="px-2.5 py-1 rounded-full bg-cyan-500/90 backdrop-blur-md text-[10px] font-bold text-black uppercase tracking-wider shadow-lg">
              {movie.badge}
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-medium text-white border border-white/10">
              {movie.year}
            </span>
          )}

          {/* Rating */}
          <div className="flex items-center gap-0.5 px-2 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10">
            {Array.from({ length: movie.rating }).map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Title overlay on poster */}
        <div className="absolute bottom-3 left-4 right-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 mb-1">
            <Film className="w-3.5 h-3.5" />
            <span>{movie.genre}</span>
            <span className="text-neutral-500">•</span>
            <span>{movie.year}</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
            {movie.title}
          </h3>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Director */}
        <div className="text-xs text-neutral-400">
          Directed by <span className="font-semibold text-neutral-200">{movie.director}</span>
        </div>

        {/* Quote Block */}
        <div className="relative rounded-xl bg-white/[0.04] border border-white/5 p-3.5 text-xs text-neutral-300 italic">
          <Quote className="w-4 h-4 text-cyan-400/40 mb-1" />
          <p className="line-clamp-2">
            {movie.favoriteQuote}
          </p>
        </div>

        {/* Why I love it / Inspiration */}
        <div className="text-xs text-neutral-400 font-light leading-relaxed">
          <span className="text-cyan-400 font-medium font-mono text-[11px] block mb-1 uppercase tracking-wider">
            Why It Inspires Me:
          </span>
          {movie.whyILoveIt}
        </div>
      </div>
    </motion.div>
  );
};
