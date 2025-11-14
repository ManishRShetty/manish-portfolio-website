import React from 'react';
import { motion } from 'framer-motion';

// --- Inlined SVG Icons (Apple-inspired & Minimal) ---

// A minimal, plausible logo inspired by Apple's app icon design.
const ManishLogo = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="28" height="28" rx="6" fill="white" />
    <path
      d="M8 19V9.5L14 15.5L20 9.5V19"
      stroke="black"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Minimal Sun icon
const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// Minimal Moon icon
const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// --- Component Interface ---

interface HeaderProps {
}

// --- Redesigned Header Component ---

export const Header: React.FC<HeaderProps> = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    // Header: Sticky, Z-index 50, Apple frosted-glass effect (black base, 70% opacity, large blur)
    // Subtle bottom border uses the specified divider color (#2C2C2E -> neutral-800)
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-lg border-b border-neutral-800"
    >
      {/* Container: Constrains width with ample padding */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Layout: Flexbox, centered, fixed height for consistency */}
        <div className="flex items-center justify-between h-16">
          {/* Logo: Primary text color */}
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-bold text-white"
            aria-label="Homepage"
          >
            <ManishLogo />
          </a>

          {/* Navigation: Hidden on mobile, flex on desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // Links: Secondary text color (#8E8E93 -> neutral-400), transitions to white on hover
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle: Minimal button */}
          <div className="flex items-center">
          </div>
        </div>
      </div>
    </motion.header>
  );
};

// Default export
export default Header;