'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github, FileText, CheckCircle, AlertTriangle } from 'lucide-react';
import type { OutboxProject } from '@/data/outbox-projects';

const springPhysics = { type: 'spring', stiffness: 100, damping: 20 } as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemBlurVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springPhysics,
  },
};

interface FeaturedProjectsProps {
  projects: OutboxProject[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  return (
    <section
      id="projects"
      aria-labelledby="featured-projects-heading"
      className="py-20 md:py-32 bg-black text-white px-6 border-t border-neutral-900"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <motion.div variants={itemBlurVariant} className="inline-block">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Backend Case Studies (Max 3)
            </span>
          </motion.div>
          <motion.h2
            id="featured-projects-heading"
            variants={itemBlurVariant}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-1"
          >
            Engineering Case Studies
          </motion.h2>
          <motion.p
            variants={itemBlurVariant}
            className="text-neutral-400 text-sm md:text-base mt-2 max-w-2xl"
          >
            Ordered strictly by relevance to Outbox Labs: relational schema & audit pipelines (SentinelPAM),
            Node.js/Express with TypeScript trade mechanics (CandleCrush), and Redis queue architecture (AtLast).
          </motion.p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-16">
          {projects.map((project, idx) => {
            const isTodoLink = (link?: string) => !link || link.startsWith('TODO');

            return (
              <motion.article
                key={project.id}
                variants={itemBlurVariant}
                className="relative rounded-3xl border border-white/10 bg-[#09090B] p-6 sm:p-8 md:p-10 overflow-hidden shadow-2xl"
              >
                {/* Index tag & Relevance pill */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-500 font-semibold px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                      0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Relevance summary */}
                <div className="mb-6 p-3.5 rounded-xl bg-blue-500/5 border border-blue-500/15 text-xs sm:text-sm text-blue-300 font-medium leading-relaxed">
                  <span className="font-semibold text-blue-200">Why it fits Outbox:</span> {project.relevance}
                </div>

                {/* Problem Statement */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Problem & Impact
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Architecture Diagram Box */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    System Architecture
                  </h4>
                  <div className="p-4 sm:p-5 rounded-2xl bg-black border border-white/5 font-mono text-xs sm:text-sm text-neutral-300 overflow-x-auto whitespace-pre leading-relaxed">
                    {project.architecture}
                  </div>
                </div>

                {/* Stack Tags */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Verified Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neutral-300"
                      >
                        <span className="text-white font-medium">{tech.name}</span>
                        {tech.version && (
                          <span className="text-[10px] text-neutral-500">{tech.version}</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hard Problem Solved */}
                <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-[#121215] border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <h4 className="text-sm font-semibold text-white tracking-wide">
                      Hard Backend Challenge: {project.hardProblem.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {project.hardProblem.description}
                  </p>
                </div>

                {/* Measurable Result */}
                <div className="mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                    Measurable Result
                  </span>
                  <p className="text-sm text-neutral-200 font-mono">
                    {project.measurableResult}
                  </p>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                  {/* Live Demo */}
                  {isTodoLink(project.links.live) ? (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-neutral-500 bg-white/[0.02] border border-white/5 cursor-not-allowed">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo (Pending deployment)</span>
                    </span>
                  ) : (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-black bg-white hover:bg-neutral-200 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {/* GitHub Repo */}
                  {isTodoLink(project.links.github) ? (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-neutral-500 bg-white/[0.02] border border-white/5 cursor-not-allowed">
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub (Private repo)</span>
                    </span>
                  ) : (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repo</span>
                    </a>
                  )}

                  {/* API Docs */}
                  {isTodoLink(project.links.apiDocs) ? (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-neutral-500 bg-white/[0.02] border border-white/5 cursor-not-allowed">
                      <FileText className="w-3.5 h-3.5" />
                      <span>API Docs (TODO)</span>
                    </span>
                  ) : (
                    <a
                      href={project.links.apiDocs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-white/5 border border-white/10 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>API Docs</span>
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
