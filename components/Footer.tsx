import React from 'react';

// --- Icons (from './Icons') ---
// Re-created as inline SVG components for this single-file example
// These are consistent with the icons from Contact.jsx

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
 * Redesigned Footer component with an Apple-like dark theme
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      // Use the specified Divider color for the top border
      className="border-t border-[#2C2C2E]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex justify-center items-center gap-8 mb-6">
          {/* Social Links: Use Secondary Text, hover to Primary Text (white) */}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#8E8E93] hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#8E8E93] hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#8E8E93] hover:text-white transition-colors"
            aria-label="Twitter Profile"
          >
            <TwitterIcon />
          </a>
        </div>
        
        {/* Copyright Text: Use Secondary Text color and small font */}
        <p className="text-center text-sm text-[#8E8E93]">
          &copy; {currentYear} Manish R Shetty. All Rights Reserved.
        </p>
        <p className="mt-2 text-center text-xs text-[#8E8E93] opacity-75">
          Made with ❤️ using NextJS & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

