'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Music, Film, Rocket, Coffee, MessageSquare, Compass, Radio, FlaskConical } from 'lucide-react';
import Link from 'next/link';
import { UNIVERSE_DATA } from '@/data/universeData';
import { UniverseCanvas } from '@/components/universe/UniverseCanvas';
import { CosmicAudioPlayer } from '@/components/universe/CosmicAudioPlayer';
import { TrackCard } from '@/components/universe/TrackCard';
import { CinemaCard } from '@/components/universe/CinemaCard';
import { SideQuestCard } from '@/components/universe/SideQuestCard';
import { CosmicOracleWidget, ArtifactCard, MusingCard } from '@/components/universe/CosmicWidgets';

type ActiveTab = 'all' | 'music' | 'cinema' | 'quests' | 'artifacts' | 'musings';

export default function LabPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('all');

  const tabs: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Experiments', icon: <Compass className="w-4 h-4" /> },
    { id: 'music', label: 'Heavy Rotation', icon: <Music className="w-4 h-4" /> },
    { id: 'cinema', label: 'Cinema & Stories', icon: <Film className="w-4 h-4" /> },
    { id: 'quests', label: 'Side Quests', icon: <Rocket className="w-4 h-4" /> },
    { id: 'artifacts', label: 'Gear & Books', icon: <Coffee className="w-4 h-4" /> },
    { id: 'musings', label: 'Musings', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white overflow-hidden pb-24">
      {/* Interactive Cosmos Canvas Background */}
      <UniverseCanvas />

      {/* Cosmic ambient light orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        {/* Navigation & Audio Player Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold tracking-tight text-neutral-300 hover:text-white transition-all backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <CosmicAudioPlayer />
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 uppercase tracking-widest mb-6 backdrop-blur-md">
            <FlaskConical className="w-3.5 h-3.5 text-purple-400" />
            <span>Personal Creative Lab & Vault</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            The Lab
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed mb-8">
            {UNIVERSE_DATA.profile.bio}
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {UNIVERSE_DATA.profile.stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5 backdrop-blur-md"
              >
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-400 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Oracle transmission banner */}
        <div className="mb-14">
          <CosmicOracleWidget />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap focus:outline-none ${
                  isActive
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Grid */}
        <div className="space-y-16">
          {/* MUSIC SECTION */}
          {(activeTab === 'all' || activeTab === 'music') && (
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
                    <Radio className="w-4 h-4" />
                    <span>Sonic Frequencies</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Heavy Rotation & Soundtracks
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {UNIVERSE_DATA.tracks.map((track, idx) => (
                  <TrackCard key={track.id} track={track} index={idx} />
                ))}
              </div>
            </section>
          )}

          {/* CINEMA SECTION */}
          {(activeTab === 'all' || activeTab === 'cinema') && (
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    <Film className="w-4 h-4" />
                    <span>Visual Stories</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Cinema & Anime That Shaped My Mind
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {UNIVERSE_DATA.movies.map((movie, idx) => (
                  <CinemaCard key={movie.id} movie={movie} index={idx} />
                ))}
              </div>
            </section>
          )}

          {/* SIDE QUESTS / CREATIVE LABS */}
          {(activeTab === 'all' || activeTab === 'quests') && (
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-pink-400 uppercase tracking-wider mb-1">
                    <Rocket className="w-4 h-4" />
                    <span>Creative Lab</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Side Quests & Experimental Tech
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {UNIVERSE_DATA.sideQuests.map((quest, idx) => (
                  <SideQuestCard key={quest.id} quest={quest} index={idx} />
                ))}
              </div>
            </section>
          )}

          {/* ARTIFACTS, BOOKS & GEAR */}
          {(activeTab === 'all' || activeTab === 'artifacts') && (
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                    <Coffee className="w-4 h-4" />
                    <span>Fuel & Artifacts</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Gear, Books & Daily Rituals
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {UNIVERSE_DATA.artifacts.map((art, idx) => (
                  <ArtifactCard key={art.id} item={art} index={idx} />
                ))}
              </div>
            </section>
          )}

          {/* MUSINGS */}
          {(activeTab === 'all' || activeTab === 'musings') && (
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
                    <MessageSquare className="w-4 h-4" />
                    <span>Deep Space Notes</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Unfiltered Musings & Thoughts
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {UNIVERSE_DATA.musings.map((thought, idx) => (
                  <MusingCard key={thought.id} thought={thought} index={idx} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
