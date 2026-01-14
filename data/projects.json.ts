import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "AtLast: The Infinite, Self-Validating Trivia Engine (Currently in Development)",
    thumbnail: "/projects/atlas-agents/atlastcover.webp",
    description:
      "🚧 Currently in Development 🚧 | A competitive 'Where in the World' game powered by a multi-agent AI system that generates real-time trivia questions, validates accuracy, and adapts difficulty based on player behavior—optimizing for both fun and fact-checking.",
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Next.js",
      "React",
      "Framer Motion",
      "PostgreSQL (Vector)",
      "Redis",
      "Kubernetes",
      "Docker",
      "Mapbox GL JS",
      "Wikipedia API",
      "OpenStreetMap"
    ],
    liveDemoUrl: "https://atlast.manishshetty.dev",
    codeUrl: "https://github.com/ManishRShetty/AtLast.git",
    caseStudy: {
      problem:
        "Traditional trivia games rely on static question databases that become repetitive and fail to adapt to player skill levels. Content creation is manual, slow, and prone to ambiguity. Players experience inconsistent difficulty curves and encounter questions that are either too easy or unfairly obscure.",
      solution:
        "Built an Autonomous Content Pipeline using a multi-agent system with three specialized nodes: (1) The Scraper Agent—uses Wikipedia API, Google Places API, and OpenStreetMap to fetch real-time location data; (2) The Creative Agent—drafts unique trivia riddles based on raw data; (3) The Adversary Agent—validates questions by attempting to break them, ensuring zero ambiguity through web searches. Implemented LLM-as-a-Judge metrics for hallucination checks, predictive queueing with Redis to eliminate latency, and dynamic difficulty scaling using ELO ratings for both users and agents. Created 'The Interrogation' game mode where users question an AI spy that lies 10% of the time, with real-time streaming of agent thoughts for transparency.",
      role:
        "Architected the entire multi-agent system using LangGraph for agent orchestration. Designed the agentic loop between Creative and Adversary agents to ensure content quality. Built the backend infrastructure with FastAPI, implemented the Redis queueing system for instant question delivery, and deployed on Kubernetes for scalable agent pools. Developed the frontend with Next.js, integrated Mapbox GL JS for cyberpunk-aesthetic 3D globe visualization, and implemented real-time agent thought streaming for technical transparency.",
      impact:
        "Created an infinitely scalable trivia system that generates verified, unique questions on-demand with zero manual content creation. Achieved sub-second question delivery through predictive caching despite complex LLM chains. Demonstrated advanced DevOps skills with Kubernetes-based agent scaling and content-as-code versioning. The project showcases expertise in agentic workflows, tool use, RAG systems, and production-grade AI infrastructure—making it a compelling portfolio piece for AI Product Engineer roles.",
      screenshots: []
    }
  },
  {
    id: 4,
    title: "AquaLedger",
    thumbnail: "/projects/aqualedger/aqualedgercover.webp",
    description: "An offline-first, hands-free fisheries platform engineered for zero-connectivity zones. Features a custom conflict-free sync engine and on-device voice parsing to enable rapid, reliable data entry in harsh marine environments.",
    stack: [
      "Next.js 14",
      "Dexie.js (IndexedDB)",
      "TanStack Query",
      "Web Speech API",
      "Tailwind CSS",
      "Framer Motion"
    ],
    liveDemoUrl: "https://aqualedger.manishshetty.dev",
    codeUrl: "https://github.com/ManishRShetty/AquaLedger",
    caseStudy: {
      problem: "Fishermen operate in wet, unstable environments where standard touch interfaces fail and internet is non-existent. Traditional cloud-first apps cause data loss during long offshore trips, and paper logs create a 48-hour lag in market pricing.",
      solution: "I architected a 'Local-First' PWA using Dexie.js to guarantee 100% uptime without internet. I engineered a custom sync queue with optimistic UI updates that caches mutations offline and automatically resolves conflicts when connectivity is restored. To solve the 'wet hands' friction, I built a hands-free voice logger using the Web Speech API and a custom regex parser that normalizes natural language (e.g., '20kg Tuna') into structured data.",
      impact: "Eliminated data loss via the persistent sync queue architecture. Reduced data entry time by ~60% using the hands-free voice mode compared to traditional forms. The system now supports full 'Apple-Dark' aesthetic visuals while running completely offline on low-end mobile hardware.",
      screenshots: []
    }
  },
  {
    id: 2,
    title: "FolkSpace",
    thumbnail: "/projects/folkspace/FolkSpaceCover.webp",
    description:
      "An AI-powered retail solution designed for Nordic markets with demand forecasting, smart pricing, automation, and blockchain-based distributor tracking.",
    stack: [
      "Next.js",
      "Node.js",
      "Express",
      "Flask",
      "MongoDB",
      "n8n Automation",
      "Leaflet",
      "OpenStreetMap",
      "Custom Blockchain (PoW)"
    ],
    liveDemoUrl: "https://folkspace.manishshetty.dev",
    codeUrl: "https://github.com/ManishRShetty/FolkSpace",
    caseStudy: {
      problem:
        "Nordic retail suffers from volatile demand due to weather, seasons, and festivals—something traditional ERP/POS systems cannot interpret, causing overstocking and understocking.",
      solution:
        "We built an AI-driven system using Random Forest for demand forecasting, multi-language support, real-time weather-based stocking, dynamic pricing, distributor transparency via blockchain, and automated stock replenishment powered by n8n.",
      role:
        "Led end-to-end development: designed system architecture, developed AI models, built front-end/back-end components, integrated APIs, and implemented blockchain for transparency.",
      impact:
        "Received appreciation from multiple mentors for being one of the most complete and research-backed solutions. Improved stocking accuracy and pricing intelligence by combining sales data, weather history, and seasonal trends.",
      screenshots: [
        "/projects/folkspace/folkspace1.webp",
        "/projects/folkspace/folkspace2.webp"
      ]
    }
  },
  {
    id: 5,
    title: "Srinathon 2.0 Official Platform",
    thumbnail: "/projects/srinathon/srinathon.webp",
    description: "A gamified, high-performance event platform for Mangalore's largest 24-hour hackathon. Features a unique 'Card Deck' UI paradigm and real-time event scheduling.",
    stack: [
      "Next.js",
      "Framer Motion (3D Card Flip)",
      "Tailwind CSS",
      "TypeScript",
      "Vercel"
    ],
    liveDemoUrl: "https://srinathon.nexusclubs.in/",
    codeUrl: "https://github.com/ManishRShetty/srinathon",
    caseStudy: {
      problem: "Hackathon portals are usually static and boring, failing to capture the high-energy 'Game On' spirit of a 24-hour coding marathon. Additionally, organizing a multi-track event (Hardware, Software, Open Innovation) required a dynamic way to reveal problem statements without overwhelming the user.",
      solution: "I engineered a 'Gamified' user experience centered around a Casino/Card theme. I built a custom 3D Card Flip interface using Framer Motion to interactively reveal Problem Statements, reducing cognitive load while increasing user time-on-site. The site features a responsive 'Live Timeline' that guided 500+ participants through the 24-hour sprint with zero downtime.",
      impact: "The gamified interface led to a 3x increase in social sharing and successfully handled peak traffic during the 'Problem Statement Reveal' window. The platform served as the central command center for logistics, effectively showcasing 15+ sponsors and managing the flow of the 24-hour event.",
      screenshots: [
        "/projects/srinathon/1.webp",
        "/projects/srinathon/2.webp",
        "/projects/srinathon/3.webp", 
        "/projects/srinathon/4.webp",
        "/projects/srinathon/5.webp",
        "/projects/srinathon/6.webp"
      ]
    }
  },
  {
    id: 7,
    title: "WebP Wizard",
    thumbnail: "/projects/webpwizard/WebpWizardCover.webp",
    description:
      "WebP Wizard is a tool designed to make image conversion to WebP format simple, fast, and efficient. With newly added AI-powered alt text generator, WebP Wizard not only compresses images but intelligently optimizes them for quality and content—helping you deliver the best visuals with the smallest files.",
    stack: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "AI/ML",
      "Image Processing",
      "WebP Conversion",
      "Alt Text Generation",
      "Optimization Algorithms"
    ],
    liveDemoUrl: "https://webpwizard.manishshetty.dev/",
    codeUrl: "https://github.com/ManishRShetty/webp-wizard",
    caseStudy: {
      problem:
        "Web developers face challenges in optimizing images for web performance while maintaining quality. Manual image compression is time-consuming, and generating meaningful alt text for accessibility requires significant effort and expertise.",
      solution:
        "Built WebP Wizard with intelligent image conversion algorithms that automatically optimize images for the web while preserving visual quality. Integrated AI-powered alt text generation to enhance web accessibility by automatically creating descriptive, contextually relevant alternative text for images.",
      role:
        "Developed the complete tool including the image conversion engine, AI model integration for alt text generation, optimization algorithms, and user interface for seamless interaction.",
      impact:
        "Significantly reduced image file sizes while maintaining quality, improved web performance through efficient WebP conversion, and enhanced accessibility by automatically generating meaningful alt text. Streamlined the workflow for web developers by combining compression and accessibility features in one tool.",
      screenshots: [
        "/projects/webpwizard/Screenshot1.webp",
        "/projects/webpwizard/Screenshot2.webp",
        "/projects/webpwizard/Screenshot3.webp"
      ]
    }
  },
  {
    id: 3,
    title: "Nexus Club Website",
    thumbnail: "/projects/nexusclubs/nexusclubscover.webp",
    description:
      "End-to-end development of the Nexus Club website — designed and built from front-end to back-end to support the tech club’s online presence, member engagement, events listing, and resource hub.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "API integration",
      "Hosting & Deployment"
    ],
    liveDemoUrl: "https://www.nexusclubs.in",
    codeUrl: "",
    caseStudy: {
      problem:
        "The club needed a modern, responsive website that could handle event listings, membership info, dynamic content updates and be scalable as the club grows.",
      solution:
        "Built a robust full-stack application: Next.js + Tailwind for the UI; Node.js/Express + MongoDB for the back-end; designed modular components, admin dashboard for event uploads, and optimized for performance and SEO.",
      role:
        "Sole developer responsible for full-stack development, system design, UI/UX, deployment, and ongoing maintenance.",
      impact:
        "Delivered a fast, mobile-friendly site; improved engagement among students, simplified event update workflows for club admins; created a scalable foundation for future features like hackathon portals and member analytics.",
      screenshots: [
        "/projects/nexusclubs/nexus1.webp",
        "/projects/nexusclubs/nexus2.webp",
        "/projects/nexusclubs/nexus3.webp",
        "/projects/nexusclubs/nexus4.webp"
      ]
    }
  },
  {
    id: 6,
    title: "Envision 2025 Official Platform",
    thumbnail: "https://i.ibb.co/TD8n386m/New-Project-3.png",
    description: "The official digital hub for Srinivas Institute of Technology's National Level Tech Fest. A high-performance, immersive web experience designed to showcase events and drive student registrations.",
    stack: [
      "React",
      "Framer Motion",
      "Tailwind CSS",
      "Vite"
    ],
    liveDemoUrl: "https://envision.manishshetty.dev",
    codeUrl: "#",
    caseStudy: {
      problem: "Organizing a national-level tech fest like Envision 2025 involves coordinating 20+ events across multiple departments. Relying on static PDFs and Instagram posts resulted in information fragmentation and a poor attendee experience for students trying to find schedules and rules.",
      solution: "I designed and developed the official event portal using React and Framer Motion. The focus was on 'Digital Hype'—using scroll-linked animations, a premium dark-mode aesthetic, and a Bento-grid layout to present event details excitingly. I prioritized mobile responsiveness to ensure students could access live schedules on the go.",
      impact: "Served as the central source of truth for the entire festival. The site successfully centralized registration links and rulebooks, eliminating the need for manual PDF sharing. The high-performance animations created a strong brand identity, setting a professional tone for the event before it even started.",
      screenshots: [
        "/projects/envision/envision1.webp",
        "/projects/envision/envision2.webp",
        "/projects/envision/envision3.webp"
      ]
    }
  },
  {
    id: 8,
    title: "Arena - Experimental Game Lab",
    thumbnail: "/projects/arena/arenacover.webp",
    description: "A modular Progressive Web App (PWA) serving as a centralized runtime environment for browser-based mini-games, featuring unified state management and performance analytics.",
    stack: ["Next.js", "TypeScript", "HTML5 Canvas", "Zustand", "Framer Motion"],
    liveDemoUrl: "https://arena.manishshetty.dev",
    codeUrl: "https://github.com/ManishRShetty/arena",
    caseStudy: {
      problem: "Developing distinct deployments for experimental game mechanics creates portfolio clutter and introduces maintenance fatigue, fragmenting the user experience.",
      solution: "Architected a scalable 'arcade' container. I built a unified core system that handles shared resources (audio, global state, user preferences) and asset pre-loading. This allows individual games to be injected as modular components, drastically reducing code duplication.",
      role: "Full-stack Engineer & Game Mechanic Designer.",
      impact: "Consolidated distinct interactive projects into a single high-performance SPA, reducing deployment overhead by 80% and demonstrating complex state logic handling beyond standard CRUD apps.",
      screenshots: [
        "/projects/arena/arena1.webp"
      ]
    }
  }
];