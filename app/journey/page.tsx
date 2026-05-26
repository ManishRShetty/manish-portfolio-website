import React from 'react';
import Link from 'next/link';

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      <main className="container mx-auto px-6 py-32 max-w-4xl space-y-24">
        
        {/* Intro */}
        <section className="space-y-6">
          <Link href="/" className="text-neutral-500 hover:text-white transition-colors mb-8 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white/90">
            My Journey.
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
            A deeper dive into where I started, what I bring to the table, and the things I am currently building.
          </p>
        </section>

        {/* Where I Started */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white/90">Where I Started</h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            My journey began with a profound curiosity for how systems work beneath the surface. From writing simple scripts to diving into the complexities of distributed computing and systems engineering, I have always been driven by the desire to build robust, scalable architecture. Over the years, I honed my skills in Go and deep-tech architecture, gradually shifting focus toward autonomous AI and production-ready intelligent systems.
          </p>
        </section>

        {/* What I'm Bringing */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white/90">What I Bring</h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            I bring a unique blend of low-level systems programming and modern AI infrastructure expertise. My focus is on creating reliable, auditable, and highly performant primitives that power agentic workflows. With a deep understanding of Go, bbolt, LangGraph, and high-performance frontend frameworks like Next.js, I bridge the gap between heavy backend logic and elegant user experiences.
          </p>
        </section>

        {/* What I Have Launched */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white/90">Things I Have Launched</h2>
          <div className="space-y-8">
            <div className="border border-white/10 rounded-2xl p-6 bg-[#1C1C1E]">
              <h3 className="text-xl font-medium text-white">Agentic AI Infrastructure</h3>
              <p className="mt-2 text-neutral-400">
                Production-ready systems utilizing LangGraph and Go to orchestrate autonomous agents, ensuring determinism and fast execution.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6 bg-[#1C1C1E]">
              <h3 className="text-xl font-medium text-white">High-Performance Platforms</h3>
              <p className="mt-2 text-neutral-400">
                Next.js applications backed by distributed databases (bbolt) to serve massive concurrent loads gracefully.
              </p>
            </div>
            <p className="text-neutral-500 italic mt-4">
              Explore my Projects section on the home page for a complete list of my latest launches and case studies.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
