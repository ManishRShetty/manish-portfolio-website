import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

/* ─────────────────────────────────────────────
   Metadata — noindex / nofollow
   ───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Manish R Shetty × Outbox Labs',
  description:
    'A targeted showcase of my engineering work, prepared specifically for Outbox Labs.',
  robots: { index: false, follow: false },
};

/* ─────────────────────────────────────────────
   Layout — Server Component (no framer-motion)
   Own header / footer that replaces root nav context.
   NOTE: The root layout (html/body + root Header/Footer)
   still wraps this. For a true "no root nav" experience,
   move root pages into a (main) route group. This layout
   is ready for that migration.
   ───────────────────────────────────────────── */
export default function OutboxLabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen flex flex-col bg-black">
      {/* ─── Custom Sticky Header ─── */}
      <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-neutral-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left — Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0"
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
            </Link>

            {/* Center / Right — "Prepared for" badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/5 rounded-full">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-400"
                aria-hidden="true"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-[11px] font-medium text-neutral-300">
                Prepared for Outbox Labs
              </span>
            </div>

            {/* Right — Actions */}
            <div className="flex items-center gap-3">
              <a
                href="/ManishShettyResumeOBL.pdf"
                download
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors"
                aria-label="Download Outbox Labs Tailored Resume"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-80"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Resume</span>
              </a>

              {/* Back to Portfolio */}
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                  aria-hidden="true"
                >
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Back to Portfolio</span>
                <span className="sm:hidden">Back</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Page Content ─── */}
      <div className="flex-1">{children}</div>

      {/* ─── Custom Footer ─── */}
      <footer className="relative w-full py-12 overflow-hidden">
        {/* Top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center gap-6">
          {/* Contact links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:manishshetty.dev@gmail.com"
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>manishshetty.dev@gmail.com</span>
            </a>

            <span className="w-1 h-1 rounded-full bg-neutral-700" />

            <a
              href="https://github.com/ManishRShetty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            <span className="w-1 h-1 rounded-full bg-neutral-700" />

            <a
              href="https://www.linkedin.com/in/manishrshetty/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-neutral-500">
            &copy; {currentYear} Manish R Shetty. All Rights Reserved.
          </p>

          {/* Confidentiality note */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
            <span className="text-xs text-neutral-500 font-medium">
              This page is not indexed
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-600" />
            <span className="text-xs text-neutral-500 font-medium">
              Prepared exclusively for Outbox Labs
            </span>
          </div>
        </div>

        {/* Background ambient glow */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />
      </footer>
    </div>
  );
}
