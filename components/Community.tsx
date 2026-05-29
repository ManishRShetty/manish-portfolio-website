import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Calendar, ExternalLink } from 'lucide-react';

// --- Data (Included locally for stability) ---
const communityData = [
  {
    organization: "Nexus Clubs",
    role: "Vice-President",
    duration: "Aug 2024 - Present",
    description: "Leading a team of 60+ members to orchestrate tech talks, hackathons, and community service events for over 200 active members.",
    logoUrl: "/clubs/nexus.webp", // Placeholder matching theme
    website: "https://www.nexusclubs.in"
  },
  {
    organization: "UiPath Student Developer Champion Club",
    role: "Core Member (UI)",
    duration: "May 2026 - Present",
    description: "Core member of the college UiPath Student Developer Champion Club, contributing to community initiatives as part of the UI team.",
    logoUrl: "https://placehold.co/100x100/0EA5E9/FFFFFF?text=UiP"
  },
  // Added a second item to demonstrate the timeline layout
  // {
  //   organization: "OpenSource Collective",
  //   role: "Core Contributor",
  //   duration: "2023 - Present",
  //   description: "Maintaining core UI libraries and establishing accessibility standards for next-gen React components.",
  //   logoUrl: "https://placehold.co/100x100/10B981/FFFFFF?text=OS",
  //   website: "#"
  // }
];

// --- Physics Engine ---
const springPhysics = { type: "spring", stiffness: 100, damping: 20 } as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemBlurVariant: Variants = {
  hidden: { opacity: 0, x: -20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: springPhysics
  },
};

const lineVariant: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1, ease: "circOut" }
  }
};

export const Community: React.FC = () => {
  return (
    <section id="community" className="py-32 bg-black text-white px-6 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <motion.h2
            variants={itemBlurVariant}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6"
          >
            Community &amp; Leadership
          </motion.h2>
          <motion.p
            variants={itemBlurVariant}
            className="text-neutral-400 text-lg max-w-xl leading-relaxed"
          >
            Building ecosystems where developers thrive. It's not just about code; it's about culture.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* The Timeline Line: A subtle gradient instead of a hard border */}
          <motion.div
            variants={lineVariant}
            className="absolute left-0 top-2 bottom-0 w-[2px] bg-gradient-to-b from-white/20 via-white/5 to-transparent origin-top md:left-4"
          />

          <div className="space-y-16">
            {communityData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemBlurVariant}
                className="relative pl-8 md:pl-16 group"
              >
                {/* The "Dot" - Now a glowing beacon */}
                <div className="absolute left-[-5px] top-2 md:left-[11px] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)] ring-4 ring-black z-10 group-hover:scale-125 transition-transform duration-300" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 mb-4">
                  {/* Logo */}
                  <div className="relative w-16 h-16 flex-shrink-0 mb-4 sm:mb-0">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={item.logoUrl}
                      alt={`${item.organization} logo`}
                      className="relative z-10 w-full h-full rounded-2xl object-cover border border-white/10 group-hover:border-blue-500/30 transition-colors duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                        {item.organization}
                      </h3>
                      <span className="text-sm font-mono text-neutral-500 mt-1 sm:mt-0">
                        {item.duration}
                      </span>
                    </div>

                    <div className="mb-6">
                      <div className="text-lg text-blue-500 font-medium mb-1">
                        {item.role}
                      </div>
                      {item.website && (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-blue-400 transition-colors duration-300"
                        >
                          <ExternalLink size={14} />
                          <span className="underline underline-offset-2">Visit Website</span>
                        </a>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 text-base leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Community;