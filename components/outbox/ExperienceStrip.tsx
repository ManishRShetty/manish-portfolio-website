'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Briefcase, Award, ExternalLink } from 'lucide-react';

const springPhysics = { type: 'spring', stiffness: 100, damping: 20 } as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemBlurVariant: Variants = {
  hidden: { opacity: 0, y: 15, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springPhysics,
  },
};

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  impact: string;
  link?: string;
}

interface HackathonItem {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

interface ExperienceStripProps {
  experience: readonly ExperienceItem[];
  hackathons: readonly HackathonItem[];
}

export const ExperienceStrip: React.FC<ExperienceStripProps> = ({ experience, hackathons }) => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 md:py-32 bg-black text-white px-6 border-t border-neutral-900"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-block">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Track Record
            </span>
          </div>
          <h2
            id="experience-heading"
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-1"
          >
            Experience & Hackathons
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-xl">
            Selected professional roles and competitive engineering achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professional Experience */}
          <motion.div
            variants={itemBlurVariant}
            className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#09090B] space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <h3 className="font-semibold text-lg text-white">
                  Relevant Experience
                </h3>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                India • Oman • Morocco (Remote)
              </span>
            </div>

            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div key={idx} className="relative pl-5 border-l border-white/10 space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-sm font-semibold text-white">
                      {item.role}
                    </h4>
                    <span className="text-[11px] font-mono text-neutral-500 shrink-0">
                      {item.duration}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-400 font-medium flex items-center gap-1.5">
                    <span>{item.company}</span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                        aria-label={`Visit ${item.company}`}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed pt-1">
                    {item.impact}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hackathons & Recognition */}
          <motion.div
            variants={itemBlurVariant}
            className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#09090B] space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <h3 className="font-semibold text-lg text-white">
                  Hackathons & Honors
                </h3>
              </div>
              <span className="text-[11px] font-mono text-amber-400 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                6 Wins & National Recognitions
              </span>
            </div>

            <div className="space-y-4">
              {hackathons.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-white">
                      {item.name}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    {item.issuer}
                  </p>
                  {item.link && (
                    <div className="pt-1">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300"
                      >
                        <span>View live platform / certificate</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
