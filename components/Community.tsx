import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Users, Calendar, ArrowUpRight } from 'lucide-react';

// --- Data (Included locally for stability) ---
const communityData = [
  {
    organization: "Nexus Clubs",
    role: "Vice-President",
    duration: "Aug 2024 - Present",
    description: "Leading a team of 60+ members to orchestrate tech talks, hackathons, and community service events for over 200 active members.",
    logoUrl: "https://placehold.co/100x100/2563EB/FFFFFF?text=N", // Placeholder matching theme
    website: "#"
  },
  // Added a second item to demonstrate the grid layout
  {
    organization: "OpenSource Collective",
    role: "Core Contributor",
    duration: "2023 - Present",
    description: "Maintaining core UI libraries and establishing accessibility standards for next-gen React components.",
    logoUrl: "https://placehold.co/100x100/10B981/FFFFFF?text=OS",
    website: "#"
  }
];

// --- Physics Engine ---
const springPhysics = { type: "spring", stiffness: 100, damping: 20 };
const hoverPhysics = { type: "spring", stiffness: 400, damping: 25 };

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemBlurVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springPhysics
  },
};

export const Community: React.FC = () => {
  return (
    <section id="community" className="py-32 bg-black text-white px-6 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <div className="mb-24 text-center">
          <motion.h2
            variants={itemBlurVariant}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
          >
            Community & Leadership
          </motion.h2>
          <motion.p
            variants={itemBlurVariant}
            className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Building ecosystems where developers thrive. It's not just about code; it's about culture.
          </motion.p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communityData.map((item, index) => (
            <motion.a
              key={index}
              href={item.website}
              variants={itemBlurVariant}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                borderColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={hoverPhysics}
              className="group relative bg-[#1C1C1E] border border-white/5 p-8 rounded-3xl flex flex-col sm:flex-row gap-6 items-start transition-colors"
            >
              {/* Logo Container */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className="absolute inset-0 bg-white/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={item.logoUrl}
                  alt={`${item.organization} logo`}
                  className="relative z-10 w-full h-full rounded-2xl object-cover border border-white/10"
                />
              </div>

              {/* Content */}
              <div className="flex-grow space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.organization}
                    </h3>
                    <p className="text-sm font-medium text-blue-500 mt-0.5">
                      {item.role}
                    </p>
                  </div>

                  {/* Icon - fades in on hover */}
                  <ArrowUpRight className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={20} />
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-wide">
                  <Calendar size={12} />
                  <span>{item.duration}</span>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Community;