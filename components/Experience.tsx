import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- Leadership & Engineering data ---
const workExperienceData = [
  {
    duration: "2026 - Present",
    role: "Founder & Lead Architect",
    company: "Siranta AI",
    location: "Mangalore, India",
    logo: "/siranta/siranta-white.svg",
    tasks: [
      "Define platform architecture for zero-trust memory and context infrastructure for autonomous agents.",
      "Ship core primitives: Kord (context aggregator) and Siranta Gateway (embedded triplestore + vector graph).",
      "Lead a small, cross-functional engineering team; own roadmap, security posture, and production SLAs."
    ]
  },
  {
    duration: "May 2026 - Present",
    role: "Core Member (UI)",
    company: "UiPath Student Developer Champion Club",
    location: "College Team",
    tasks: [
      "Core member of the college UiPath Student Developer Champion Club community.",
      "Contribute to UI-focused initiatives and collaborative team efforts.",
      "Support community activities and internal coordination as needed."
    ]
  },
  {
    duration: "Aug 2025 - Oct 2025",
    role: "Frontend Developer Intern",
    company: "MyDBLink",
    location: "Casablanca, Morocco (Remote)",
    tasks: [
      "Redesigned production-level web interfaces to improve visual consistency and reduce bounce rates.",
      "Built responsive UI components with React and Tailwind to ensure mobile-first performance.",
      "Optimized assets and refactored legacy code, achieving measurable reductions in page load times."
    ]
  },
  {
    duration: "Oct 2025 - Jan 2026",
    role: "Product Engineer Intern",
    company: "Thaniya Technologies",
    location: "Mangalore, India",
    tasks: [
      "Architected high-fidelity prototypes for enterprise mobile and web solutions.",
      "Led usability testing and translated findings into prioritized product improvements.",
      "Collaborated across design and engineering to ship customer-facing releases under tight deadlines."
    ]
  }
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

export const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-black text-white px-6 overflow-hidden">
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
            Leadership & Engineering
          </motion.h2>
          <motion.p
            variants={itemBlurVariant}
            className="text-neutral-400 text-lg max-w-xl leading-relaxed"
          >
            Founding leadership and systems engineering: building and shipping infrastructure for agentic AI.
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
            {workExperienceData.map((job, index) => (
              <motion.div
                key={index}
                variants={itemBlurVariant}
                className="relative pl-8 md:pl-16 group"
              >
                {/* The "Dot" - Now a glowing beacon */}
                <div className="absolute left-[-5px] top-2 md:left-[11px] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)] ring-4 ring-black z-10 group-hover:scale-125 transition-transform duration-300" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    {job.role}
                  </h3>
                  <span className="text-sm font-mono text-neutral-500 mt-1 sm:mt-0">
                    {job.duration}
                  </span>
                </div>

                <div className="mb-6 flex items-center gap-4">
                  {job.logo && (
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="w-9 h-9 object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <div className="text-lg text-neutral-300 font-medium mb-1">
                      {job.company}
                    </div>
                    <div className="text-sm text-neutral-500 font-light">
                      {job.location}
                    </div>
                  </div>
                </div>

                {/* Tasks - Clean typography, no heavy bullets */}
                <ul className="space-y-3">
                  {job.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-400 text-base leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;