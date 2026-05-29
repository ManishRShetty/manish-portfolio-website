'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon } from './Icons'; // Assuming this exists as per your snippet

// --- Icons ---
// Kept inline for portability, but standardized sizing via props
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/**
 * Social Button Component
 * Encapsulates the physics and hover states for individual links
 */
const SocialButton = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-gray-400 transition-colors hover:text-white hover:border-white/30 hover:bg-white/10"
    aria-label={label}
    whileHover={{ scale: 1.15, y: -2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    <Icon className="w-5 h-5" />
    {/* Subtle glow effect behind the icon on hover */}
    <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.a>
);

/**
 * Redesigned Footer component with Apple-grade physics
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 overflow-hidden">
      {/* Top Divider with subtle gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">

        {/* Social Links Container */}
        <motion.div
          className="flex gap-6 mb-8"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-style easing
        >
          <SocialButton
            href="https://github.com/ManishRShetty"
            label="GitHub Profile"
            icon={GithubIcon}
          />
          <SocialButton
            href="https://www.linkedin.com/in/manishrshetty/"
            label="LinkedIn Profile"
            icon={LinkedinIcon}
          />
          <SocialButton
            href="https://x.com/ManishShetty017"
            label="Twitter Profile"
            icon={TwitterIcon}
          />
        </motion.div>

        <motion.a
          href="https://siranta.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 hover:text-white hover:border-white/30 transition-colors"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/siranta/siranta-white.svg"
            alt=""
            aria-hidden="true"
            className="w-4 h-4 object-contain"
          />
          <span>Siranta AI</span>
        </motion.a>

        {/* Copyright & Info */}
        <motion.div
          className="flex flex-col items-center gap-3 text-center"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-medium text-gray-400 tracking-wide">
            &copy; {currentYear} Manish R Shetty. All Rights Reserved.
          </p>

          {/* Refined "Made with" badge */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
            <span className="text-xs text-gray-500 font-medium">
              Designed in Mangaluru
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span className="text-xs text-gray-500 font-medium">
              Next.js & Tailwind
            </span>
          </div>
        </motion.div>

      </div>

      {/* Background ambient glow (optional, adds depth at the bottom) */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />
    </footer>
  );
};