'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Zap, Shield, ArrowRight } from 'lucide-react';

interface OutboxAngleProps {
  content: {
    sectionTitle: string;
    title: string;
    body: string;
  };
}

export const OutboxAngle: React.FC<OutboxAngleProps> = ({ content }) => {
  return (
    <section
      id="outbox-angle"
      aria-labelledby="angle-heading"
      className="py-20 md:py-32 bg-black text-white px-6 border-t border-neutral-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center md:text-left mb-10">
          <div className="inline-block">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Relevant Domain Thinking
            </span>
          </div>
          <h2
            id="angle-heading"
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-1"
          >
            {content.sectionTitle}
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-xl">
            A concrete technical design proposal on cold outreach infrastructure: deliverability,
            queueing, and automated bounce mitigation.
          </p>
        </div>

        {/* Feature Architecture Callout */}
        <div className="relative rounded-3xl border border-white/10 bg-[#09090B] p-6 sm:p-8 md:p-10 overflow-hidden shadow-2xl border-l-4 border-l-blue-500">
          {/* Subtle background glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {content.title}
              </h3>
            </div>

            {/* Design Note Text (Strictly under 150 words) */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              {content.body}
            </p>

            {/* Micro Flow Diagram */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono uppercase text-neutral-400 block mb-3">
                Pipeline Lifecycle Flow
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-black border border-white/5 text-center">
                  <span className="text-blue-400 font-semibold block mb-1">1. Ingest</span>
                  <span className="text-neutral-400 text-[11px]">Idempotent Key & Domain Tagging</span>
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/5 text-center">
                  <span className="text-emerald-400 font-semibold block mb-1">2. Rate Limit</span>
                  <span className="text-neutral-400 text-[11px]">Per-ESP BullMQ Token Buckets</span>
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/5 text-center">
                  <span className="text-amber-400 font-semibold block mb-1">3. Webhooks</span>
                  <span className="text-neutral-400 text-[11px]">Async Bounce & Spam Ingestion</span>
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/5 text-center">
                  <span className="text-purple-400 font-semibold block mb-1">4. Safeguard</span>
                  <span className="text-neutral-400 text-[11px]">Bloom Filter & Auto-Circuit Breakers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
