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
    headline: "Hi Outbox, I'm Manish.\nI build Node.js backends.",
    subline:
      'Shipped SentinelPAM’s relational audit pipeline, CandleCrush’s TypeScript trading server, and AtLast’s sub-second Redis trivia queue.',
    ctaPrimary: { label: 'See live APIs', href: '#api-playground' },
    ctaSecondary: { label: 'Download resume', href: '/ManishShettyResumeOBL.pdf' },
  },

  jdMatch: {
    sectionTitle: 'JD Requirements → Verifiable Proof',
    rows: [
      {
        requirement: 'Node.js',
        proof: 'SentinelPAM backend (Express + Node.js), CandleCrush trading server (Node.js runtime)',
        proofLink: 'https://github.com/Nexus-SIT/CandleCrush',
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
    ],
    badges: [
      {
        label: 'GitHub Activity',
        value: 'Active Committer',
        status: 'Active' as const,
      },
      {
        label: 'CI Status',
        value: 'TODO: Link GitHub Actions workflow badge',
        status: 'Pending' as const,
      },
      {
        label: 'Test Coverage',
        value: 'TODO: Link Codecov / Vitest coverage badge',
        status: 'Pending' as const,
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
      role: 'Founder & Lead Architect',
      company: 'Siranta AI',
      duration: '2026 – Present',
      impact: 'Architected distributed zero-trust memory and context aggregation infrastructure for autonomous AI systems.',
      link: 'https://siranta.vercel.app',
    },
    {
      role: 'Product Engineer Intern',
      company: 'Thaniya Technologies',
      duration: 'Oct 2025 – Jan 2026',
      impact: 'Architected enterprise web/mobile prototypes and iterated usability improvements under production deadlines.',
    },
    {
      role: 'Frontend Developer Intern',
      company: 'MyDBLink',
      duration: 'Aug 2025 – Oct 2025',
      impact: 'Optimized React dashboards and integrated REST APIs, contributing to a 35% improvement in API retrieval speeds.',
    },
  ],

  hackathons: [
    {
      name: "Dean's List for Academic Excellence",
      issuer: 'Visvesvaraya Technological University',
      date: '2023',
    },
    {
      name: '1st Place — Annual Hackathon',
      issuer: 'College Tech Society',
      date: '2022',
    },
    {
      name: 'Srinathon 2.0 Hackathon Platform',
      issuer: 'Nexus / SIT (Handled live 24-hr event traffic & schedules)',
      date: '2024',
      link: 'https://srinathon.nexusclubs.in/',
    },
  ],

  closing: {
    availability: 'Available starting Dec 2026 / Jan 2027',
    location: 'Bangalore / HSR Layout (Ready to work in-office)',
    role: 'Software Development Engineer Intern',
    resumeHref: '/ManishShettyResumeOBL.pdf',
    contactLinks: [
      { label: 'GitHub', href: 'https://github.com/ManishRShetty', icon: 'github' as const },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manishrshetty/', icon: 'linkedin' as const },
      { label: 'Twitter', href: 'https://x.com/ManishShetty017', icon: 'twitter' as const },
    ],
  },
} as const;
