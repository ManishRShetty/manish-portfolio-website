'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GitBranch, ShieldAlert, Cpu, Terminal, CheckCircle2, Clock } from 'lucide-react';

const springPhysics = { type: 'spring', stiffness: 100, damping: 20 } as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

interface EngineeringProofProps {
  content: {
    sectionTitle: string;
    githubUsername: string;
    howIWork: readonly string[];
    badges: readonly {
      label: string;
      value: string;
      status: 'Active' | 'Pending';
    }[];
  };
}

export const EngineeringProof: React.FC<EngineeringProofProps> = ({ content }) => {
  return (
    <section
      id="engineering-proof"
      aria-labelledby="engineering-heading"
      className="py-20 md:py-32 bg-black text-white px-6 border-t border-neutral-900"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
      >
        {/* Header */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-block">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Execution & Reliability
            </span>
          </div>
          <h2
            id="engineering-heading"
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-1"
          >
            {content.sectionTitle}
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-2xl">
            Clean git hygiene, strict TypeScript contracts, and honest tracking of testing infrastructure.
          </p>
        </div>

        {/* GitHub Activity Strip */}
        <motion.div
          variants={itemBlurVariant}
          className="mb-12 p-6 rounded-3xl border border-white/10 bg-[#09090B] space-y-4 shadow-xl"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-sm text-neutral-200 font-semibold">
                GitHub Commit Activity
              </span>
            </div>
            <a
              href={`https://github.com/${content.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-blue-400 hover:text-blue-300"
            >
              github.com/{content.githubUsername} &rarr;
            </a>
          </div>

          {/* Embedded Contribution Graph with responsive container */}
          <div className="w-full overflow-x-auto p-3 rounded-2xl bg-black border border-white/5 flex items-center justify-center">
            <img
              src={`https://ghchart.rshah.org/22c55e/${content.githubUsername}`}
              alt={`${content.githubUsername}'s GitHub Contribution Chart`}
              className="w-full min-w-[650px] max-w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Two-Column Grid: How I Work & Testing/CI Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* How I Work */}
          <motion.div
            variants={itemBlurVariant}
            className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#09090B] space-y-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <GitBranch className="w-4 h-4 text-blue-400" />
              <h3 className="font-semibold text-lg text-white">
                How I Work (Engineering Principles)
              </h3>
            </div>

            <ul className="space-y-4">
              {content.howIWork.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Badges & Quality Gates */}
          <motion.div
            variants={itemBlurVariant}
            className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#09090B] space-y-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-4 h-4 text-amber-400" />
                <h3 className="font-semibold text-lg text-white">
                  CI & Test Coverage Transparency
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Active quality gates across active repositories: strict TypeScript contracts,
                automated build validation, and adversarial evaluation pipelines.
              </p>

              <div className="space-y-3">
                {content.badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono"
                  >
                    <span className="text-neutral-400">{badge.label}</span>
                    {badge.status === 'Active' ? (
                      <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{badge.value}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-amber-300 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{badge.value}</span>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/15 text-xs text-amber-300/90 leading-relaxed flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Testing Discipline Note:</strong> Experienced in adversarial testing and test-driven contracts. Currently standardizing Vitest / Supertest pipelines across active codebases.
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
