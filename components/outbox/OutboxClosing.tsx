'use client';

import React from 'react';
import { Download, Github, Linkedin, Twitter, MapPin, Calendar, ArrowRight } from 'lucide-react';

interface ClosingProps {
  content: {
    availability: string;
    location: string;
    role: string;
    resumeHref: string;
    contactLinks: readonly {
      label: string;
      href: string;
      icon: 'github' | 'linkedin' | 'twitter';
    }[];
  };
}

export const OutboxClosing: React.FC<ClosingProps> = ({ content }) => {
  return (
    <section
      id="closing"
      aria-labelledby="closing-heading"
      className="py-20 md:py-32 bg-black text-white px-6 border-t border-neutral-900"
    >
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Availability & Location Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm font-mono text-neutral-300">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>{content.availability}</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm font-mono text-neutral-300">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{content.location}</span>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h2
            id="closing-heading"
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Ready to build backend systems for Outbox Labs.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
            Targeting the {content.role} position. Excited about cold email infrastructure,
            high-throughput queueing, and deliverability mechanics.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={content.resumeHref}
            download
            className="w-full sm:w-auto px-7 py-3.5 bg-white text-black hover:bg-neutral-200 rounded-full font-semibold text-sm tracking-tight transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            <Download className="w-4 h-4" />
            <span>Download Tailored Resume</span>
          </a>

          <a
            href="https://www.linkedin.com/in/manishrshetty/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-sm font-medium tracking-tight transition-all flex items-center justify-center gap-2"
          >
            <span>Connect on LinkedIn</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </a>
        </div>

        {/* Social channels */}
        <div className="pt-6 border-t border-white/5 flex items-center justify-center gap-4">
          {content.contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
            >
              {link.icon === 'github' && <Github className="w-4 h-4" />}
              {link.icon === 'linkedin' && <Linkedin className="w-4 h-4" />}
              {link.icon === 'twitter' && <Twitter className="w-4 h-4" />}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
