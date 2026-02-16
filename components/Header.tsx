'use client';
import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Education', href: '/#education' },
    { name: 'Contact', href: '/#contact' },
    // { name: 'Blogs', href: '/blogs' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: shouldReduceMotion ? 'tween' : 'spring',
        stiffness: 260,
        damping: 20,
        duration: shouldReduceMotion ? 0.3 : undefined
      }}
      className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-neutral-800"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">

          {/* LOGO */}
          <a
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-white shrink-0"
            aria-label="Homepage"
          >
            <div className="relative w-24 h-24">
              <Image
                src="/logo.svg"
                alt="Manish Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* DESKTOP NAV - Animated with stagger and hover effects */}
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.1 + index * 0.05,
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 300,
                  damping: 24
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            className="md:hidden ml-auto p-2 text-neutral-400 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY - Enhanced with spring animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
              transition: {
                height: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                height: { type: 'spring', stiffness: 400, damping: 40 },
                opacity: { duration: 0.15 }
              }
            }}
            className="absolute top-16 left-0 w-full md:hidden border-b border-neutral-800 bg-black/95 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <motion.div
              className="px-4 py-6 space-y-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-medium text-neutral-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  variants={{
                    open: {
                      opacity: 1,
                      x: 0,
                      transition: { type: 'spring', stiffness: 300, damping: 24 }
                    },
                    closed: {
                      opacity: 0,
                      x: -20,
                      transition: { duration: 0.2 }
                    }
                  }}
                  whileHover={{ x: 5, color: '#ffffff' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;