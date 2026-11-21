// ============================================================================
// /data/outbox-content.ts
// All text content for the /outboxlabs landing page.
// Content is separated from layout so copy can be edited cleanly.
// ============================================================================

export const outboxContent = {
  meta: {
    title: 'Manish R. Shetty — Software Development Engineer Intern Application | Outbox Labs',
    description:
      'Tailored portfolio for Outbox Labs (ReachInbox.ai, Zapmail.ai). Demonstrating Node.js, TypeScript, PostgreSQL, and scalable backend system design.',
  },

  hero: {
    badge: 'Prepared for Outbox Labs',
    headline: "Hi Outbox, I'm Manish.\nI build scalable backend systems.",
    subline:
      'Backend and full-stack engineer with a proven track record delivering for clients across India, international client execution (Oman), and remote global engineering (Morocco). Focused on Node.js, TypeScript, PostgreSQL, and high-throughput queues.',
    ctaPrimary: { label: 'See live APIs', href: '#api-playground' },
    ctaSecondary: { label: 'Download resume', href: '/ManishShettyResumeOBL.pdf' },
  },

  jdMatch: {
    sectionTitle: 'JD Requirements → Verifiable Proof',
    rows: [
      {
        requirement: 'Node.js',
        proof: 'SentinelPAM backend (Express + Node.js), CandleCrush trading server (Node.js runtime)',
        proofLink: 'https://github.com/ManishRShetty/FinSpark',
        status: 'Proven' as const,
      },
      {
        requirement: 'JavaScript',
        proof: 'Core language across all full-stack applications, async/await patterns, ES2022+',
        proofLink: 'https://github.com/ManishRShetty',
        status: 'Proven' as const,
      },
      {
        requirement: 'TypeScript',
        proof: 'CandleCrush server/client contracts, Arena engine, WebP Wizard, strict typing',
        proofLink: 'https://github.com/Nexus-SIT/CandleCrush',
        status: 'Proven' as const,
      },
      {
        requirement: 'MySQL',
        proof: 'SentinelPAM & AtLast use PostgreSQL. Relational schema design, indexes, and transactions are transferable to MySQL.',
        status: 'Learning' as const,
      },
      {
        requirement: 'Git / GitHub',
        proof: 'Linear commit histories, PR workflows, open-source repositories with documentation',
        proofLink: 'https://github.com/ManishRShetty',
        status: 'Proven' as const,
      },
      {
        requirement: 'API Design & Documentation',
        proof: 'REST API design for SentinelPAM, CandleCrush Express endpoints, and AtLast OpenAPI specs',
        proofLink: 'https://github.com/ManishRShetty/AtLast',
        status: 'Proven' as const,
      },
      {
        requirement: 'React / Next.js',
        proof: 'Portfolio website, AquaLedger PWA, Srinathon, Envision, CandleCrush frontend',
        proofLink: 'https://manishshetty.dev',
        status: 'Proven' as const,
      },
      {
        requirement: 'Tailwind CSS',
        proof: 'Mobile-first responsive styling across all modern web projects in production',
        proofLink: 'https://manishshetty.dev',
        status: 'Proven' as const,
      },
      {
        requirement: 'Scalable Server-Side Architecture',
        proof: 'SentinelPAM audit log partitioning; AtLast Redis predictive queueing decoupled from 3s async agent pipeline',
        proofLink: 'https://github.com/ManishRShetty/AtLast',
        status: 'Proven' as const,
      },
      {
        requirement: 'DB Design & Optimization',
        proof: 'PostgreSQL relational schemas, composite indexes (user_id, timestamp), and partitioned tables in SentinelPAM',
        proofLink: 'https://github.com/ManishRShetty/FinSpark',
        status: 'Proven' as const,
      },
      {
        requirement: 'Performance Work',
        proof: '35% REST API retrieval optimization at MyDBLink; sub-200ms Redis cache delivery in AtLast; code-splitting in Next.js',
        proofLink: 'https://aqualedger.manishshetty.dev',
        status: 'Proven' as const,
      },
      {
        requirement: 'Third-party API Integration',
        proof: 'LLM APIs in multi-agent workflows, Notion API client integration, browser speech APIs',
        proofLink: 'https://manishshetty.dev',
        status: 'Proven' as const,
      },
      {
        requirement: 'Unit & Integration Tests',
        proof: 'Adversarial evaluation gates in AtLast. Formalizing automated Jest/Supertest CI suites.',
        status: 'Learning' as const,
      },
      {
        requirement: 'Documentation & Architecture',
        proof: 'System architecture diagrams, contract specs, and clear README documentation on repos',
        proofLink: 'https://github.com/siranta-ai',
        status: 'Proven' as const,
      },
    ],
  },

  engineeringProof: {
    sectionTitle: 'Engineering Discipline & Proof',
    githubUsername: 'ManishRShetty',
    howIWork: [
      'Schema-first contract design: Define strict Zod / TypeScript interfaces before writing route handlers.',
      'Atomic Git workflow: Scoped feature branches, conventional commits, and self-reviewed diffs prior to merging.',
      'Defensive backend posture: Treat all external I/O as fallible with timeouts, exponential retries, and idempotency keys.',
      'Performance awareness: Monitor query plans, index composite lookup paths, and avoid unindexed table scans.',
      'Client management & international delivery: Proven track record delivering software for overseas clients (Oman) and remote engineering teams (Morocco), translating ambiguous requirements into rock-solid code.',
    ],
    badges: [
      {
        label: 'GitHub Activity',
        value: 'Active Committer',
        status: 'Active' as const,
      },
      {
        label: 'CI / CD Pipeline',
        value: 'GitHub Actions (Lint, Typecheck & Next.js Build)',
        status: 'Active' as const,
      },
      {
        label: 'Testing Strategy',
        value: 'Adversarial Quality Gates & Schema Validation',
        status: 'Active' as const,
      },
    ],
  },

  outboxAngle: {
    sectionTitle: 'Outbox Domain Design Note',
    title: 'High-Throughput Bulk Email Queueing & Deliverability Engine',
    body: `To handle high-volume cold outreach without reputation damage, I would design a distributed queueing pipeline using Redis-backed BullMQ workers partitioned by recipient domain (e.g., gmail.com, outlook.com). Each worker enforces per-domain rate limits to honor ESP throughput thresholds. Outbound dispatches are tagged with unique idempotency keys to prevent duplicate sends during transient retries. Webhooks from mail providers ingest bounce and complaint events asynchronously into an event bus: hard bounces immediately append the address to an in-memory Bloom filter and PostgreSQL suppression table, while soft bounces schedule delayed retries with exponential backoff and jitter. A real-time Prometheus/Grafana counter aggregates campaign bounce rates; if any sending IP exceeds a 2.5% bounce or 0.08% spam complaint threshold over a rolling 10-minute window, a circuit breaker halts that pool automatically to safeguard sender reputation.`,
  },

  experience: [
    {
      role: 'Founder & Systems Engineer',
      company: 'Siranta AI',
      duration: '2026 – Present',
      impact: 'Architected distributed zero-trust memory and context aggregation infrastructure. Bringing early-stage founder speed, ownership, and systems thinking to production email infrastructure.',
      link: 'https://siranta.vercel.app',
    },
    {
      role: 'Client Engineering & International Software Delivery',
      company: 'Global & Pan-India Clients (Oman & India)',
      duration: '2024 – 2026',
      impact: 'Delivered custom production platforms for international clients—including Bunts Oman’s live sports tournament auction and drafting engine—and domestic organizations across India. Handled client requirements, stress testing, and zero-downtime execution.',
      link: 'https://github.com/ManishRShetty/Oman-Bunts',
    },
    {
      role: 'Product Engineer Intern',
      company: 'Thaniya Technologies (India)',
      duration: 'Oct 2025 – Jan 2026',
      impact: 'Spearheaded client-facing prototypes and full-stack solutions for enterprise clients across India, translating complex business needs into high-fidelity web/mobile architectures.',
    },
    {
      role: 'Frontend & API Developer Intern (Casablanca, Morocco)',
      company: 'MyDBLink (Remote)',
      duration: 'Aug 2025 – Oct 2025',
      impact: 'Collaborated asynchronously across time zones in a remote Moroccan tech company. Built production React dashboards and integrated REST APIs, contributing to a 35% speedup in API data retrieval.',
    },
  ],

  hackathons: [
    {
      name: 'Vice-President & Tech Lead',
      issuer: 'Nexus Clubs, SIT — Led 60+ engineers and organized SRINATHON 2.0 (24-hr national hackathon, 1,000+ participants)',
      date: 'March 2025 – Present',
      link: 'https://srinathon.nexusclubs.in/',
    },
    {
      name: 'Winner — Coastal Innovation Hackathon',
      issuer: '1st Place across regional engineering teams in technical innovation',
      date: '2026',
    },
    {
      name: 'Winner — Code Sprint 2026',
      issuer: '1st Place in competitive algorithmic & full-stack development sprint',
      date: '2026',
    },
    {
      name: 'Winner — Pilikula Innovation Fair',
      issuer: 'Awarded Best Technical Innovation Showcase',
      date: '2025',
    },
    {
      name: 'Winner — QuizIT',
      issuer: '1st Place in Technical & Systems Knowledge Competition',
      date: '2024',
    },
    {
      name: 'Top 100 Finalist — Microsoft Bhasha Bandhu',
      issuer: 'National-level NLP & language systems challenge by Microsoft India',
      date: '2024',
    },
    {
      name: 'Shortlisted — SAP Hackfest',
      issuer: 'Selected among top collegiate engineering teams by SAP Labs India',
      date: '2025',
    },
    {
      name: "Dean's List for Academic Excellence [CGPA: 8.90 / 10.0]",
      issuer: 'Srinivas Institute of Technology / VTU (B.E. in CS & Business Systems)',
      date: '2023 – Present',
    },
  ],

  closing: {
    availability: 'Available starting Dec 2026 / Jan 2027',
    location: 'Bangalore / HSR Layout (Ready for in-office work)',
    role: 'Software Development Engineer Intern',
    founderNote: 'I don’t just write backend code in a vacuum; I have proven experience managing clients across India and internationally (Oman, Morocco). I take complete ownership of requirements, communicate clearly, and have a track record of building and shipping reliable software.',
    resumeHref: '/ManishShettyResumeOBL.pdf',
    contactLinks: [
      { label: 'GitHub', href: 'https://github.com/ManishRShetty', icon: 'github' as const },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manishrshetty/', icon: 'linkedin' as const },
      { label: 'Twitter', href: 'https://x.com/ManishShetty017', icon: 'twitter' as const },
    ],
  },
} as const;
