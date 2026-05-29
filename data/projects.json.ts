import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Kord",
    logo: "/siranta/siranta-white.svg",
    thumbnail: "/siranta/kord.png",
    description: "The open-source context aggregator.",
    type: 'product',
    stack: ["Go", "CLI", "XML", "RAG"],
    liveDemoUrl: "",
    codeUrl: "https://github.com/siranta-ai/kord",
    caseStudy: {
      problem: "Large repositories and datasets create context stuffing for LLMs, leading to degraded agent performance and hallucinations.",
      solution: "A pure Go CLI tool that flattens entire repositories into LLM-optimized XML in milliseconds. Built to eliminate context stuffing for Claude and Gemini.",
      impact: "Enables deterministic, compact context payloads for retrieval layers and reduces token usage while improving relevance in agent prompts.",
      screenshots: []
    }
  },
  {
    id: 2,
    title: "Siranta Gateway",
    logo: "/siranta/siranta-white.svg",
    thumbnail: "/siranta/gateway.png",
    description: "Zero-trust, bi-temporal agent memory.",
    type: 'product',
    stack: ["Go", "B-Tree", "Vector Graph", "Triplestore"],
    liveDemoUrl: "",
    // codeUrl: "https://github.com/siranta-ai/siranta-gateway",
    caseStudy: {
      problem: "Agent memories are opaque, mutable, and lack auditable timelines — creating compliance and debugging challenges.",
      solution: "An embedded Triplestore and vector graph database built entirely in Go. Designed to give local AI agents persistent, time-traveling audit logs.",
      impact: "Provides deterministic provenance, temporal queries, and tamper-evident storage for production agents.",
      screenshots: []
    }
  },
  // {
  //   id: 3,
  //   title: "Project Siranta",
  //   thumbnail: "/projects/siranta/siranta.webp",
  //   description: "Architectural research and platform for agent orchestration and memory models.",
  //   type: 'product',
  //   stack: ["Go", "LangGraph", "Agentic Workflows", "Distributed Systems"],
  //   codeUrl: "",
  //   caseStudy: {
  //     problem: "Designing pipelines for long-running, stateful agents at scale requires new primitives across storage, ordering, and safety.",
  //     solution: "Platform-level research combining immutable event logs, deterministic replay, and secure isolation for agent tasks.",
  //     impact: "Defines operational patterns used across Siranta products and prototypes.",
  //     screenshots: []
  //   }
  // },
  // {
  //   id: 4,
  //   title: "Project Aura",
  //   thumbnail: "/projects/aura/aura.webp",
  //   description: "Secure context routing and policy enforcement for autonomous stacks.",
  //   type: 'product',
  //   stack: ["Go", "Policy Engines", "Zero-Trust", "Kubernetes"],
  //   codeUrl: "",
  //   caseStudy: {
  //     problem: "Agents require guarded access to secrets and external tools while preserving auditability.",
  //     solution: "Runtime policy enforcement and context shaping layer that mediates agent outputs and side effects.",
  //     impact: "Reduces blast radius and enables safe experimentation with autonomous behaviors.",
  //     screenshots: []
  //   }
  // },
  // --- Restored project entries (lower priority) ---
  {
    id: 10,
    title: "AtLast: The Infinite, Self-Validating Trivia Engine",
    thumbnail: "/projects/atlas-agents/atlastcover.webp",
    description: "A competitive, autonomous trivia system that generates, validates, and adapts questions in real-time using multi-agent orchestration.",
    type: 'project',
    stack: ["Python", "FastAPI", "LangGraph", "Next.js", "PostgreSQL (Vector)", "Redis", "Kubernetes"],
    liveDemoUrl: "https://atlast.manishshetty.dev",
    codeUrl: "https://github.com/ManishRShetty/AtLast.git",
    caseStudy: {
      problem: "Static question databases scale poorly and fail to adapt to player skill, causing poor UX and manual maintenance.",
      solution: "A multi-agent pipeline that scrapes, drafts, and adversarially validates trivia using specialized agents and LLM-as-judge metrics.",
      impact: "Delivers verified, adaptive questions at sub-second latency with predictive caching and horizontally scalable agents.",
      screenshots: []
    }
  },
  {
    id: 11,
    title: "CandleCrush",
    thumbnail: "/projects/candlecrush/candlecrushcover.webp",
    description: "A gamified trading simulator with an AI mentor that teaches technical analysis through interactive gameplay.",
    type: 'project',
    stack: ["TypeScript", "React", "Express", "Vite", "Framer Motion"],
    liveDemoUrl: "https://candlecrush.nexusclubs.in/",
    codeUrl: "https://github.com/Nexus-SIT/CandleCrush",
    caseStudy: {
      problem: "Financial education is often passive and intimidating for novices.",
      solution: "A pixel-art, task-based simulator with an animated mentor and progressive learning modules.",
      impact: "Improved adoption and engagement within the Nexus community; demonstrates product-level gamification and full-stack delivery.",
      screenshots: [
        "/projects/candlecrush/candle1.webp",
        "/projects/candlecrush/candle2.webp"
      ]
    }
  },
  {
    id: 12,
    title: "AquaLedger",
    thumbnail: "/projects/aqualedger/aqualedgercover.webp",
    description: "An offline-first fisheries platform engineered for zero-connectivity zones with a conflict-free sync engine and hands-free voice parsing.",
    type: 'project',
    stack: ["Next.js", "Dexie.js (IndexedDB)", "TanStack Query", "Web Speech API"],
    liveDemoUrl: "https://aqualedger.manishshetty.dev",
    codeUrl: "https://github.com/ManishRShetty/AquaLedger",
    caseStudy: {
      problem: "Field data collection in no-connectivity zones leads to data loss and manual reconciliation.",
      solution: "A local-first PWA with an optimistic sync queue and voice-first entry to accelerate data capture.",
      impact: "Guaranteed offline reliability and reduced data entry time by ~60% in field trials.",
      screenshots: []
    }
  },
  {
    id: 13,
    title: "Srinathon 2.0 Official Platform",
    thumbnail: "/projects/srinathon/srinathon.webp",
    description: "A gamified, high-performance event platform for a 24-hour hackathon with a Card Deck UI and real-time scheduling.",
    type: 'project',
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveDemoUrl: "https://srinathon.nexusclubs.in/",
    codeUrl: "https://github.com/ManishRShetty/srinathon",
    caseStudy: {
      problem: "Static hackathon portals fail to capture the event's energy and dynamic needs.",
      solution: "A responsive gamified interface with a live timeline and interactive reveals for problem statements.",
      impact: "Handled peak traffic and increased engagement during reveal windows.",
      screenshots: []
    }
  },
  {
    id: 14,
    title: "WebP Wizard",
    thumbnail: "/projects/webpwizard/WebpWizardCover.webp",
    description: "A tool for fast WebP conversion with AI-powered alt-text generation and optimization heuristics.",
    type: 'project',
    stack: ["TypeScript", "Next.js", "AI/ML", "Image Processing"],
    liveDemoUrl: "https://webpwizard.manishshetty.dev/",
    codeUrl: "https://github.com/ManishRShetty/webp-wizard",
    caseStudy: {
      problem: "Manual image optimization is time-consuming and error-prone.",
      solution: "An automated conversion pipeline with accessibility-focused AI alt-text generation.",
      impact: "Streamlines developer workflows and improves web performance and accessibility.",
      screenshots: []
    }
  },
  {
    id: 15,
    title: "Nexus Club Website",
    thumbnail: "/projects/nexusclubs/nexusclubscover.webp",
    description: "End-to-end development of the Nexus Club website — membership, events, and resource hub.",
    type: 'project',
    stack: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    liveDemoUrl: "https://www.nexusclubs.in",
    codeUrl: "",
    caseStudy: {
      problem: "The club needed a modern, scalable website for events and member engagement.",
      solution: "Built a modular full-stack application with an admin dashboard and performance optimizations.",
      impact: "Centralized event operations and improved member engagement.",
      screenshots: []
    }
  },
  {
    id: 16,
    title: "Envision 2025 Official Platform",
    thumbnail: "https://i.ibb.co/TD8n386m/New-Project-3.png",
    description: "The official digital hub for a national-level tech fest focused on high-performance immersive web experiences.",
    type: 'project',
    stack: ["React", "Framer Motion", "Tailwind CSS"],
    liveDemoUrl: "https://envision.manishshetty.dev",
    codeUrl: "#",
    caseStudy: {
      problem: "Coordinating multi-track events requires a centralized, real-time experience.",
      solution: "A responsive portal with scroll-linked animations and a Bento-grid presentation.",
      impact: "Served as the central source of truth for the festival with high mobile accessibility.",
      screenshots: []
    }
  },
  {
    id: 17,
    title: "Arena - Experimental Game Lab",
    thumbnail: "/projects/arena/arenacover.webp",
    description: "A modular PWA runtime for browser-based mini-games with unified state and analytics.",
    type: 'project',
    stack: ["Next.js", "TypeScript", "HTML5 Canvas", "Zustand"],
    liveDemoUrl: "https://arena.manishshetty.dev",
    codeUrl: "https://github.com/ManishRShetty/arena",
    caseStudy: {
      problem: "Experimental game deployments create maintenance overhead and fragmented UX.",
      solution: "A consolidated arcade container that injects modular games with shared resources.",
      impact: "Reduced deployment overhead and showcased advanced state handling.",
      screenshots: []
    }
  },
  {
    id: 5,
    title: "FolkSpace",
    thumbnail: "/projects/folkspace/FolkSpaceCover.webp",
    description: "An architecture-level product integrating forecasting, automation, and distributed ledgers for retail.",
    type: 'project',
    stack: ["Next.js", "AI/ML", "Automation", "Blockchain"],
    liveDemoUrl: "https://folkspace.manishshetty.dev",
    codeUrl: "https://github.com/ManishRShetty/FolkSpace",
    caseStudy: {
      problem: "Complex retail logistics and demand forecasting across distributed merchants.",
      solution: "A production system combining forecasting, automation, and transparent distributor tracking.",
      impact: "Demonstrates high-level architecture skills and systems thinking at product scale.",
      screenshots: []
    }
  }
];