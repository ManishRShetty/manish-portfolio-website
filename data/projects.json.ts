
import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 6,
    title: "AtLast: The Infinite, Self-Validating Trivia Engine (Currently in Development)",
    thumbnail: "/projects/atlas-agents/atlastagentscover.webp",
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
    id: 1,
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
        "/projects/folkspace/folkspace2.webp",

      ]
    },

  },

  {
    id: 2,
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
    },

  },
  {
    id: 4,
    title: "AquaLedger",
    thumbnail: "/projects/aqualedger/aqualedgercover.webp",
    description:
      "AquaLedger is an AI-driven fisheries platform engineered with a product-first mindset—combining AI, full-stack thinking, and UX strategy to deliver a fast, intelligent and user-centric offline-first experience for fishermen and buyers.",
    stack: [
      "AI Product Design",
      "Next.js",
      "UI/UX",
      "Figma",
      "System Architecture",
      "Human-Centered Design"
    ],
    liveDemoUrl: "https://aqualedger.manishshetty.dev",
    codeUrl: "https://github.com/ManishRShetty/AquaLedger",
    caseStudy: {
      problem:
        "Traditional fisheries workflows depended on paper logs and unstable connectivity. These limitations led to inaccurate data, slow decision-making, and poor visibility into sustainability metrics generated by AI models.",
      solution:
        "As an AI Product Engineer, I led the end-to-end product and UX direction—conducting field research with 15+ fishermen and buyers, uncovering the need for an offline-first architecture, and designing a component-based catch-logging system optimized for speed, clarity, and low cognitive load. I also transformed complex AI sustainability outputs into a simple color-coded scoring interface that users could interpret in seconds.",
      impact:
        "The redesigned experience reduced data-entry effort by 50%, achieved a 98% task-success rate, lowered input errors by 70%, and boosted sustainability-metric comprehension by 85%. Iterative usability testing refined search and filtering flows, resulting in a 45% faster time to locate specific catch records.",
      screenshots: [
      ]
    }
  },
  {
    id: 3,
    title: "Envision College Event Website",
    thumbnail: "https://i.ibb.co/TD8n386m/New-Project-3.png",
    description: "A sleek, modern marketing website designed to capture leads, with animations powered by Framer Motion.",
    stack: ["React", "Framer Motion", "UI/UX"],
    liveDemoUrl: "https://envision.manishshetty.dev",
    codeUrl: "#",
    caseStudy: {
      problem: "A startup needed a visually appealing landing page that could clearly communicate its value proposition and convert visitors into leads.",
      solution: "A user-centric design process was followed to create an intuitive layout. The site was built in React, with subtle, engaging animations from Framer Motion to guide the user's attention. A Formspree-integrated contact form was included for lead capture.",
      role: "Lead designer and front-end developer responsible for design, development, and deployment.",
      impact: "The new design led to a 40% increase in user engagement and a 25% higher conversion rate on the contact form.",
      screenshots: [
        "/projects/envision/envision1.webp",
        "/projects/envision/envision2.webp",
        "/projects/envision/envision3.webp"
      ]
    }
  },
  {
    id: 5,
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
    "id": 6,
    "title": "Arena - Experimental Game Lab",
    "thumbnail": "/projects/arena/arenacover.webp",
    "description": "A modular Progressive Web App (PWA) serving as a centralized runtime environment for browser-based mini-games, featuring unified state management and performance analytics.",
    "stack": ["Next.js", "TypeScript", "HTML5 Canvas", "Zustand", "Framer Motion"],
    "liveDemoUrl": "https://arena.manishshetty.dev",
    "codeUrl": "https://github.com/ManishRShetty/arena",
    "caseStudy": {
      "problem": "Developing distinct deployments for experimental game mechanics creates portfolio clutter and introduces maintenance fatigue, fragmenting the user experience.",
      "solution": "Architected a scalable 'arcade' container. I built a unified core system that handles shared resources (audio, global state, user preferences) and asset pre-loading. This allows individual games to be injected as modular components, drastically reducing code duplication.",
      "role": "Full-stack Engineer & Game Mechanic Designer.",
      "impact": "Consolidated distinct interactive projects into a single high-performance SPA, reducing deployment overhead by 80% and demonstrating complex state logic handling beyond standard CRUD apps.",
      "screenshots": [
        "/projects/arena/arena1.webp",

      ]
    }
  }
];
