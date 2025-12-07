import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- Data (Included locally for stability) ---
const workExperienceData = [
  {
    duration: "Aug 2025 - Oct 2025",
    role: "Frontend Developer Intern",
    company: "MyDBLink",
    location: "Casablanca, Morocco (Remote)",
    tasks: [
      "Redesigned a production-level web application, enhancing visual consistency and reducing bounce rates.",
      "Engineered responsive UI components using React and Tailwind, ensuring 100% mobile compatibility.",
      "Refactored legacy codebases, achieving a ~20% reduction in page load times through asset optimization."
    ]
  },
  {
    duration: "Oct 2025 - Present",
    role: "Full Stack Developer",
    company: "Thaniya Technologies",
    location: "Mangalore, India",
    tasks: [
      "Architecting high-fidelity prototypes for enterprise mobile and web solutions.",
      "Leading user research and usability testing sessions to drive product decisions.",
      "Bridging the gap between design and engineering to ensure pixel-perfect implementation."
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
            Experience
          </motion.h2>
          <motion.p
            variants={itemBlurVariant}
            className="text-neutral-400 text-lg max-w-xl leading-relaxed"
          >
            A timeline of my professional trajectory and the impact I've delivered.
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

                <div className="mb-6">
                  <div className="text-lg text-neutral-300 font-medium mb-1">
                    {job.company}
                  </div>
                  <div className="text-sm text-neutral-500 font-light">
                    {job.location}
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