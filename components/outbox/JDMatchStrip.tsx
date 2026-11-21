'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, CheckCircle2, Clock } from 'lucide-react';

const springPhysics = { type: 'spring', stiffness: 100, damping: 20 } as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
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

interface JDMatchRow {
  requirement: string;
  proof: string;
  proofLink?: string;
  status: 'Proven' | 'Learning';
}

interface JDMatchStripProps {
  content: {
    sectionTitle: string;
    rows: readonly JDMatchRow[];
  };
}

export const JDMatchStrip: React.FC<JDMatchStripProps> = ({ content }) => {
  return (
    <section
      id="jd-match"
      aria-labelledby="jd-match-heading"
      className="py-16 md:py-24 bg-black text-white px-6 border-t border-neutral-900"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <div className="text-center md:text-left mb-10">
          <motion.div variants={itemBlurVariant} className="inline-block">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Direct Role Alignment
            </span>
          </motion.div>
          <motion.h2
            id="jd-match-heading"
            variants={itemBlurVariant}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-1"
          >
            {content.sectionTitle}
          </motion.h2>
          <motion.p
            variants={itemBlurVariant}
            className="text-neutral-400 text-sm md:text-base mt-2 max-w-2xl"
          >
            Mapping Outbox Labs JD requirements against production code and architecture.
            No false claims: skills are marked either backed by repository evidence or strictly as learning.
          </motion.p>
        </div>

        {/* Desktop Table View */}
        <motion.div
          variants={itemBlurVariant}
          className="hidden md:block overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th scope="col" className="py-4 px-6 text-xs font-mono text-neutral-400 uppercase tracking-wider w-1/4">
                  JD Requirement
                </th>
                <th scope="col" className="py-4 px-6 text-xs font-mono text-neutral-400 uppercase tracking-wider w-7/12">
                  My Verifiable Proof
                </th>
                <th scope="col" className="py-4 px-6 text-xs font-mono text-neutral-400 uppercase tracking-wider text-right w-1/6">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-sans">
              {content.rows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-white/[0.02] transition-colors duration-150"
                >
                  <td className="py-3.5 px-6 font-mono text-sm text-neutral-200 font-medium">
                    {row.requirement}
                  </td>
                  <td className="py-3.5 px-6 text-sm text-neutral-300">
                    <div className="flex items-center gap-2">
                      <span>{row.proof}</span>
                      {row.proofLink && (
                        <a
                          href={row.proofLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-white transition-colors shrink-0"
                          aria-label={`Verify proof for ${row.requirement}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </td>
                  <td className="py-3.5 px-6 text-right">
                    {row.status === 'Proven' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Proven</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        <Clock className="w-3 h-3" />
                        <span>Learning</span>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards View */}
        <div className="md:hidden space-y-3">
          {content.rows.map((row, index) => (
            <motion.div
              key={index}
              variants={itemBlurVariant}
              className="p-4 rounded-xl border border-white/10 bg-[#0A0A0A] space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-white font-semibold">
                  {row.requirement}
                </span>
                {row.status === 'Proven' ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>Proven</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    <Clock className="w-2.5 h-2.5" />
                    <span>Learning</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {row.proof}
              </p>
              {row.proofLink && (
                <div className="pt-1">
                  <a
                    href={row.proofLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300"
                  >
                    <span>View repository / proof link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
