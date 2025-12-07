import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

// --- Data (Included locally for stability) ---
const educationData = [
  {
    duration: "2023 - 2027",
    institution: "Srinivas Institute of Technology",
    location: "Mangalore, India",
    degree: "B.E in Computer Science and Business Systems",
    description: "Specializing in the intersection of software engineering and business logic. Core coursework includes Algorithms, System Design, and Enterprise Architecture."
  },
  // You can add more entries here if needed
  // {
  //   duration: "2021 - 2023",
  //   institution: "Pre-University College",
  //   location: "Mangalore, India",
  //   degree: "Science (PCMC)",
  //   description: "Foundation in Physics, Chemistry, Mathematics, and Computer Science."
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

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 bg-black text-white px-6 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <motion.div variants={itemBlurVariant} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-mono mb-6">
            <GraduationCap size={14} />
            <span>ACADEMIC BACKGROUND</span>
          </motion.div>

          <motion.h2
            variants={itemBlurVariant}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6"
          >
            Education
          </motion.h2>
          <motion.p
            variants={itemBlurVariant}
            className="text-neutral-400 text-lg max-w-xl leading-relaxed"
          >
            The theoretical foundation that powers my engineering practice.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* The Timeline Line: Gradient Fade */}
          <motion.div
            variants={lineVariant}
            className="absolute left-0 top-2 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent origin-top md:left-4"
          />

          <div className="space-y-16">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemBlurVariant}
                className="relative pl-8 md:pl-16 group"
              >
                {/* The "Dot" - Glowing Beacon */}
                <div className="absolute left-[-5px] top-2 md:left-[11px] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] ring-4 ring-black z-10 group-hover:scale-125 transition-transform duration-300" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    {edu.institution}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-mono text-neutral-500 mt-1 sm:mt-0">
                    <Calendar size={12} />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-lg text-neutral-200 font-medium mb-1">
                    {edu.degree}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-neutral-500 font-light">
                    <MapPin size={12} />
                    {edu.location}
                  </div>
                </div>

                <p className="text-neutral-400 text-base leading-relaxed max-w-2xl">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;