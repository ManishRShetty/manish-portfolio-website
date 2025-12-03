import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- Icons (from './Icons') ---
// Re-created as inline SVG components for this single-file example

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.8c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.201 2.397.098 2.65.64.7 1.03 1.595 1.03 2.688 0 3.85-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .267.18.577.688.48C19.135 20.165 22 16.418 22 12 22 6.477 17.523 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    />
  </svg>
);

// Using the modern 'X' logo for Twitter
const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    />
  </svg>
);

/**
 * Redesigned Contact component with an Apple-like dark theme
 */
export const Contact: React.FC = () => {
  // Original state logic is preserved
  const [status, setStatus] = useState('');

  // Original submit handler logic is preserved
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate API call
    setTimeout(() => {
      setStatus('Message sent successfully!');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  // Original animation variants are preserved
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <motion.section
      id="contact"
      // Use Secondary Surface color and large padding
      className="py-24 sm:py-32 px-6 lg:px-8 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="text-center max-w-2xl mx-auto">
        {/* Title: Apply Apple-like large, bold typography */}
        <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">
          Get in Touch
        </h2>
        {/* Subtitle: Use Secondary Text color and larger font size */}
        <p className="mt-6 text-lg text-[#8E8E93]">
          Have a project in mind or just want to connect? Feel free to reach out. I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="mt-16 max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Form Inputs: Styled per Apple's dark theme rules */}
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your Name"
              // Card Surface BG, Primary Text, Secondary placeholder, rounded-xl,
              // subtle inset shadow, and Accent focus ring
              className="w-full px-4 py-3 rounded-xl bg-[#1C1C1E] text-white
                                     placeholder:text-[#8E8E93] shadow-inner shadow-black/20
                                     focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0A84FF] transition-shadow"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-[#1C1C1E] text-white
                                     placeholder:text-[#8E8E93] shadow-inner shadow-black/20
                                     focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0A84FF] transition-shadow"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-[#1C1C1E] text-white
                                     placeholder:text-[#8E8E93] shadow-inner shadow-black/20
                                     focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0A84FF] transition-shadow"
            ></textarea>
          </div>

          {/* Submit Button: Styled with Accent color and glow hover effect */}
          <div className="text-center pt-4">
            <motion.button
              type="submit"
              className="px-10 py-3 text-base font-semibold text-white bg-[#0A84FF] rounded-xl 
                                     shadow-lg shadow-blue-500/30 focus:outline-none focus:ring-2 
                                     focus:ring-offset-2 focus:ring-offset-black focus:ring-[#0A84FF]"
              // Apple-like soft glow hover
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(10, 132, 255, 0.5)" }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              Send Message
            </motion.button>
          </div>

          {/* Status Message: Use Secondary Text color */}
          {status && (
            <p className="text-center pt-4 text-[#8E8E93]">{status}</p>
          )}
        </form>
      </div>

      {/* Social Links: Use Secondary Text, hover to Primary Text */}
      {/* <div className="mt-20 flex justify-center items-center gap-8">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8E8E93] hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8E8E93] hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8E8E93] hover:text-white transition-colors"
                  aria-label="Twitter Profile"
                >
                  <TwitterIcon />
                </a>
            </div> */}
    </motion.section>
  );
};

// --- Main App Component (for demonstration) ---

/**
 * Main App component to render the redesigned Contact section
 */
