import type { Project } from '../types';

export const projectsData: Project[] = [
  // =========================================================================
  // FLAGSHIP PRODUCT (Full-Width Showcase)
  // =========================================================================
  {
    id: 1,
    title: "Siranta AI - Founder & Lead Engineer",
    logo: "/siranta/siranta-white.svg",
    thumbnail: "/siranta/siranta.png",
    description: "A comprehensive ecosystem of zero-trust, bi-temporal agent memory and context aggregation tools.",
    type: 'product',
    priority: 1,
    stack: ["Go", "LangGraph", "Vector Graph", "RAG", "Distributed Systems", "bbolt"],
    liveDemoUrl: "https://siranta.vercel.app",
    codeUrl: "https://github.com/siranta-ai",
    caseStudy: {
      problem: "Large code repositories create context stuffing for LLMs, and agent memories are opaque, mutable, and lack verifiable audit timelines.",
      solution: "Engineered a unified ecosystem featuring Kord (a pure Go CLI for rapid repo-to-XML flattening), Siranta Gateway (an embedded Triplestore and vector graph database for time-traveling audit logs), and Project Aura (zero-trust context routing).",
      impact: "Eliminates context stuffing, reduces token consumption by up to 60%, and provides deterministic provenance and tamper-evident storage for production agents at scale.",
      screenshots: [
        "/siranta/kord.png",
        "/siranta/gateway.png"
      ]
    }
  },

  // =========================================================================
  // TIER 1: FLAGSHIP & HIGH-IMPACT DISTRIBUTED SYSTEMS
  // =========================================================================
  {
    id: 10,
    title: "AtLast: The Infinite, Self-Validating Trivia Engine",
    thumbnail: "/projects/atlas-agents/atlastcover.webp",
    description: "An autonomous, multi-agent content generation engine with adversarial LLM-as-judge fact-checking and sub-second Redis queueing.",
    type: 'project',
    priority: 2,
    stack: ["Python", "FastAPI", "LangGraph", "Next.js", "Redis", "PostgreSQL", "Cohere"],
    liveDemoUrl: "https://atlast.manishshetty.dev",
    codeUrl: "https://github.com/ManishRShetty/AtLast.git",
    caseStudy: {
      problem: "Static question databases scale poorly and fail to adapt to player skill, while generative LLMs suffer from unverified hallucinations.",
      solution: "Architected a stateful LangGraph DAG decoupling generation from adversarial verification. Node A synthesizes clues, while Node B cross-references search APIs (Tavily). Pre-generates batches into tiered Redis queues.",
      impact: "Eliminated generative hallucinations and slashed user-facing delivery latency from ~4.2s to sub-100ms with predictive caching.",
      screenshots: ["/projects/atlas-agents/atlastagentscover.webp"]
    }
  },
  {
    id: 20,
    title: "SentinelPAM (FinSpark): Insider Threat & Access Misuse Detection",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/FinSpark",
    description: "Real-time privileged access management and database telemetry anomaly detection engine for high-compliance banking architectures.",
    type: 'project',
    priority: 3,
    stack: ["Python", "PostgreSQL (pg_stat_statements)", "Node.js", "Express", "Docker", "Scikit-Learn"],
    codeUrl: "https://github.com/ManishRShetty/FinSpark",
    caseStudy: {
      problem: "Privileged database misuse goes undetected until data exfiltration occurs, while synthetic logging fails in enterprise audits.",
      solution: "Ingests live query telemetry directly from PostgreSQL pg_stat_statements and OS audit files. Trains unsupervised Isolation Forests and z-score models to detect anomalous query frequencies and off-hour access.",
      impact: "Delivers sub-second security alerts and auditable query telemetry graphs across containerized Docker microservices.",
      screenshots: []
    }
  },
  {
    id: 30,
    title: "CIH: AI-Powered Flood-Aware Evacuation Routing & Dispatch",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/Flood-Routing",
    description: "Crisis dispatch platform parsing OpenStreetMap vector data into dynamic topological graphs with vehicle-specific flood routing.",
    type: 'project',
    priority: 4,
    stack: ["Node.js", "Express", "ngraph.path", "OpenStreetMap (PBF)", "Redis", "Flutter", "Leaflet"],
    codeUrl: "https://github.com/ManishRShetty/Flood-Routing",
    caseStudy: {
      problem: "Static navigation tools route emergency vehicles into submerged corridors during flash floods, cutting off critical rescue lines.",
      solution: "Parsed raw OpenStreetMap PBF files into an in-memory spatial graph using ngraph. Dynamic edge-weighting recalculates vehicle-specific A* paths: routing ambulances around deep waters while directing rescue boats through canals.",
      impact: "Synchronizes live coordinates and road blocks between web dispatchers and mobile responders via Redis and Firebase.",
      screenshots: []
    }
  },
  {
    id: 40,
    title: "MERC: Enterprise Research & Operations Platform",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/merc",
    description: "Enterprise digital platform featuring decoupled Angular 19 SSR, Django REST, Celery task workers, and Cloudflare Tunnel zero-trust deployment.",
    type: 'project',
    priority: 5,
    stack: ["Angular 19 (SSR)", "Django REST", "Celery", "Redis", "PostgreSQL 16", "Docker", "Nginx"],
    codeUrl: "https://github.com/ManishRShetty/merc.git",
    caseStudy: {
      problem: "Legacy monolithic enterprise applications suffer from sluggish dashboard loads, unscalable background jobs, and vulnerable exposed ports.",
      solution: "Decoupled service-oriented architecture: Angular 19 Server-Side Rendering (SSR) for instant first-paint, Django REST backend, Celery/Redis for async batch tasks, and Nginx reverse proxy.",
      impact: "Production VPS deployment with zero open inbound firewall ports via Cloudflare Tunnels, handling automated cron schedules and document processing.",
      screenshots: []
    }
  },
  {
    id: 50,
    title: "HireQ: Autonomous Multi-Agent Recruitment Platform",
    thumbnail: "https://opengraph.githubassets.com/1/dhanuvagman006/NewAI",
    description: "Autonomous technical interviewing system orchestrating hierarchical supervisor agents with Gemini 2.0 Flash Live.",
    type: 'project',
    priority: 6,
    stack: ["Google ADK", "Gemini 2.0 Flash Live", "Python", "Agentic Routing", "WebSocket"],
    codeUrl: "https://github.com/dhanuvagman006/NewAI.git",
    caseStudy: {
      problem: "Initial candidate technical screenings are labor-intensive, inconsistent, and slow down technical hiring pipelines.",
      solution: "Built a hierarchical multi-agent supervisor pattern using Google Agent Development Kit (ADK). The supervisor dynamically routes candidates between specialized sub-agents: AptitudeAgent, TechRoundHR, and FinalRoundAgent.",
      impact: "Conducts multi-modal conversational code interviews in real-time, synthesizing structured candidate evaluation scorecards.",
      screenshots: []
    }
  },
  {
    id: 12,
    title: "AquaLedger: Sustainable Fisheries Offline-First PWA",
    thumbnail: "/projects/aqualedger/aqualedgercover.webp",
    description: "Offline-first Progressive Web App with Google Genkit AI catch parsing and deterministic IndexedDB-to-Firestore synchronization.",
    type: 'project',
    priority: 7,
    stack: ["Next.js", "Dexie.js (IndexedDB)", "Google Genkit AI", "TanStack Query", "PWA"],
    liveDemoUrl: "https://aqualedger.manishshetty.dev",
    codeUrl: "https://github.com/ManishRShetty/AquaLedger-Proto.git",
    caseStudy: {
      problem: "Maritime field data collection in zero-connectivity offshore waters leads to data loss and arduous manual reconciliation.",
      solution: "Engineered local client persistence using Dexie.js (IndexedDB) and TanStack Query sync persisters. Integrated Google Genkit AI to parse unstructured audio and catch logs into validated Zod schemas, with two-way conflict resolution upon reconnection.",
      impact: "Guaranteed 100% offline logging reliability and reduced offshore catch record entry times by ~60% in field trials.",
      screenshots: []
    }
  },
  {
    id: 60,
    title: "MediChain: Decentralized Clinical Trial Provenance",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/MediChain",
    description: "Immutable clinical trial registry and pharmaceutical provenance platform built on Solidity smart contracts and Hyperledger Fabric.",
    type: 'project',
    priority: 8,
    stack: ["Solidity", "Hardhat", "Hyperledger Fabric", "Node.js", "Python NLP", "PostgreSQL"],
    codeUrl: "https://github.com/ManishRShetty/MediChain.git",
    caseStudy: {
      problem: "Clinical trial manipulation, non-replicable research data, and counterfeit drugs compromise global pharmaceutical integrity.",
      solution: "Developed Solidity smart contracts deployed via Hardhat to log patient consent, trial milestones, and adverse event reports immutably on-chain. Incorporated Hyperledger Fabric consortium topologies for multi-stakeholder drug verification.",
      impact: "Created cryptographic proof of clinical trial results and verified regulatory documentation before on-chain hashing.",
      screenshots: []
    }
  },
  {
    id: 70,
    title: "Pre-Cardiac Arrest Prediction System",
    thumbnail: "https://opengraph.githubassets.com/1/allenlobo31/Cardiac_Arrest_Prediction",
    description: "Non-invasive early warning system extracting time and frequency domain Heart Rate Variability (HRV) metrics to predict cardiac arrest risk.",
    type: 'project',
    priority: 9,
    stack: ["Python", "SciPy", "Scikit-Learn (Random Forest)", "Pandas", "Flask", "React"],
    codeUrl: "https://github.com/allenlobo31/Cardiac_Arrest_Prediction.git",
    caseStudy: {
      problem: "In-hospital sudden cardiac arrests often exhibit physiological warning signs hours before collapse that go unnoticed on standard telemetry.",
      solution: "Built a signal-processing pipeline extracting HRV metrics (SDNN, RMSSD, LF/HF spectral ratio) from raw ECG waveforms with SciPy. Trained an ensemble Random Forest model tuned for high clinical sensitivity.",
      impact: "Provides medical staff with instant risk classifications and spectral density visualizations from raw ECG signal uploads.",
      screenshots: []
    }
  },
  {
    id: 80,
    title: "Karavali Newspaper: Automated Publishing Pipeline",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/newspaper-n8n",
    description: "End-to-end digital news ecosystem combining n8n automated content ingestion, MinIO S3 object storage, and a bilingual Next.js portal.",
    type: 'project',
    priority: 10,
    stack: ["n8n Automation", "Node.js", "Express", "MongoDB", "MinIO (S3)", "Next.js", "i18next"],
    codeUrl: "https://github.com/ManishRShetty/newspaper-n8n.git",
    caseStudy: {
      problem: "Regional newsrooms lack scalable digital infrastructure to automatically aggregate multi-source wire feeds and deliver fast bilingual web experiences.",
      solution: "Engineered an n8n workflow engine to automate news scraping, image normalization, and MinIO S3 storage. Backed by a Node.js REST API with RBAC and a localized Next.js frontend supporting Kannada and English.",
      impact: "Automated content ingestion workflows, cutting editorial publishing turnaround times while supporting thousands of daily readers.",
      screenshots: []
    }
  },
  {
    id: 90,
    title: "ClearPath: Emergency Vehicle Traffic Preemption",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/ClearPath",
    description: "Smart-city emergency telemetry simulator triggering dynamic green-wave traffic signal corridors for approaching emergency units.",
    type: 'project',
    priority: 11,
    stack: ["Next.js", "Firebase Firestore", "Mapbox GL", "Leaflet", "Geofire", "Tailwind CSS"],
    codeUrl: "https://github.com/ManishRShetty/ClearPath.git",
    caseStudy: {
      problem: "Urban traffic gridlock causes critical delays for emergency vehicles navigating municipal signal intersections.",
      solution: "Developed a real-time simulator tracking ambulance GPS telemetry and velocity. Geospatial proximity algorithms automatically preempt traffic light cycles to clear green corridors along the vehicle's heading.",
      impact: "Demonstrated measurable reductions in simulated intersection transit delays with synchronized dispatcher and hospital triage dashboards.",
      screenshots: []
    }
  },

  // =========================================================================
  // TIER 2: ADVANCED INTERACTIVE, CREATIVE WEBGL & SPECIALIZED TOOLS
  // =========================================================================
  {
    id: 100,
    title: "Project Aura (AuraLink): Industrial Digital Twin & WebRTC AR",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/AuraLink",
    description: "Industrial IoT digital twin and AR telepresence platform with low-latency WebRTC video and cross-tab BroadcastChannel sync.",
    type: 'project',
    priority: 12,
    stack: ["Next.js", "React 19", "WebRTC (PeerJS)", "BroadcastChannel API", "Recharts", "TypeScript"],
    codeUrl: "https://github.com/ManishRShetty/AuraLink.git",
    caseStudy: {
      problem: "Field technicians resolving machinery outages require immediate, hands-free spatial guidance from remote senior specialists.",
      solution: "Implemented low-latency P2P audio/video streaming via WebRTC (PeerJS) with real-time AR annotation pointers. Leveraged the HTML5 BroadcastChannel API to synchronize multi-window telemetry simulations without server roundtrips.",
      impact: "Enabled real-time remote inspection workflows with zero server-side streaming bandwidth overhead.",
      screenshots: []
    }
  },
  {
    id: 110,
    title: "TraceLab: Shader-Accelerated Algorithm Visualizer",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/TraceLab",
    description: "GPU-accelerated Northern Lights WebGL fragment shaders with interactive line-by-line algorithm execution and Gemini complexity reasoning.",
    type: 'project',
    priority: 13,
    stack: ["React", "TypeScript", "OGL (WebGL)", "Framer Motion", "Google GenAI SDK", "Tailwind CSS"],
    codeUrl: "https://github.com/ManishRShetty/TraceLab.git",
    caseStudy: {
      problem: "DSA education tools are typically dry and visually detached from runtime execution mechanics and complexity proofs.",
      solution: "Built an interactive workbench tracing 10 sorting and searching algorithms with live pseudocode synchronization. Rendered GPU-accelerated background shaders using OGL WebGL and integrated Gemini for automated complexity proofs.",
      impact: "Achieved sub-60fps fluid visual rendering with contextual AI explanations for arbitrary execution states.",
      screenshots: []
    }
  },
  {
    id: 120,
    title: "2025 ACC/AHA ACS Clinical Decision Support System",
    thumbnail: "https://opengraph.githubassets.com/1/RohitDev96/ph",
    description: "Clinical decision support engine codifying 2025 ACC/AHA cardiovascular guidelines for Acute Coronary Syndrome risk stratification.",
    type: 'project',
    priority: 14,
    stack: ["Python", "Pandas", "NumPy", "Clinical Rule Engine", "OpenPyXL", "Vercel"],
    codeUrl: "https://github.com/RohitDev96/ph.git",
    caseStudy: {
      problem: "Emergency triage for acute coronary syndromes involves dense, multi-variable clinical guidelines prone to diagnostic variability.",
      solution: "Developed a deterministic medical inference rule engine ingesting cardiac biomarkers, ECG parameters, and hemodynamic factors. Codified TIMI/GRACE risk scoring to guide early invasive versus conservative therapy.",
      impact: "Standardized patient risk stratification and automated audit report generation from clinical CSV/Excel registries.",
      screenshots: []
    }
  },
  {
    id: 130,
    title: "PadharoEdu: Immersive WebXR Virtual Spatial Classroom",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/classroom-webxr",
    description: "Cross-platform WebXR 3D educational environment supporting Meta Quest, Vision Pro, and desktop manipulation of instructional models.",
    type: 'project',
    priority: 15,
    stack: ["Next.js", "Three.js", "React Three Fiber", "@react-three/xr", "WebGL", "GLTF"],
    codeUrl: "https://github.com/ManishRShetty/classroom-webxr.git",
    caseStudy: {
      problem: "Remote digital learning lacks spatial immersion, hands-on spatial physics, and collaborative three-dimensional engagement.",
      solution: "Built a cross-platform WebXR classroom using Three.js and React Three Fiber. Implemented spatial controller tracking, collision boundaries, and realistic environmental lighting for virtual model manipulation.",
      impact: "Delivered interactive 3D instructional spaces accessible on mobile, desktop, and standalone VR headsets.",
      screenshots: []
    }
  },
  {
    id: 14,
    title: "WebP Wizard: Intelligent Content-Aware Image Compression",
    thumbnail: "/projects/webpwizard/webpwizardcover.webp",
    description: "Client-side image conversion and compression engine utilizing Google Gemini Vision to parameterize lossy vs. lossless encoding.",
    type: 'project',
    priority: 16,
    stack: ["React", "TypeScript", "Google GenAI SDK", "JSZip", "Web Workers", "Canvas API"],
    liveDemoUrl: "https://webpwizard.manishshetty.dev/",
    codeUrl: "https://github.com/ManishRShetty/webp-wizard.git",
    caseStudy: {
      problem: "Manual image optimization is tedious, while server-side compression pipelines introduce privacy concerns and cloud egress costs.",
      solution: "Constructed an in-browser compression pipeline using Web Workers and HTML5 Canvas. Integrated Google Gemini Vision to evaluate image content and parameterize compression quality, packaging outputs via JSZip.",
      impact: "Zero server storage overhead, instant batch processing, and measurable reductions in web asset footprints.",
      screenshots: [
        "/projects/webpwizard/Screenshot1.webp",
        "/projects/webpwizard/Screenshot2.webp"
      ]
    }
  },
  {
    id: 17,
    title: "Arena: High-Performance Web Engineering Sandbox",
    thumbnail: "/projects/arena/arenacover.webp",
    description: "Experimental web architecture benchmark testing Next.js 15 Partial Prerendering (PPR), React 19, and sub-second FCP rendering.",
    type: 'project',
    priority: 17,
    stack: ["Next.js 15 (PPR)", "React 19", "TypeScript Strict", "Framer Motion", "Tailwind CSS"],
    liveDemoUrl: "https://arena.manishshetty.dev",
    codeUrl: "https://github.com/ManishRShetty/Arena.git",
    caseStudy: {
      problem: "Feature-heavy web applications suffer from slow initial paints, heavy hydration costs, and runtime type regressions.",
      solution: "Built a modular architecture benchmarking React Server Components, Partial Prerendering, and strict TypeScript contracts with custom typography.",
      impact: "Demonstrated zero runtime type exceptions and sub-second First Contentful Paint (FCP) across diverse network conditions.",
      screenshots: ["/projects/arena/arena1.webp"]
    }
  },
  {
    id: 140,
    title: "Aero: Emotion-Driven Facial Computer Vision Gaming",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/Aero",
    description: "Hands-free gaming client where in-game flight physics are driven by deep PyTorch facial emotion classification running at 30+ FPS.",
    type: 'project',
    priority: 18,
    stack: ["PyTorch", "OpenCV", "FastAPI", "Next.js", "WebSocket", "Canvas Confetti"],
    codeUrl: "https://github.com/ManishRShetty/Aero.git",
    caseStudy: {
      problem: "Traditional interactive games rely entirely on tactile inputs, ignoring biometric and facial emotional feedback.",
      solution: "Engineered an OpenCV processing pipeline and FastAPI server running PyTorch deep neural networks. Extracted facial landmarks and classified micro-expressions at 30+ FPS, translating head posture into game physics.",
      impact: "Created a low-latency, hands-free computer vision gaming experience with seamless WebSocket state streaming.",
      screenshots: []
    }
  },
  {
    id: 150,
    title: "MakeMyResume: AI-Powered LaTeX Placement Resume Builder",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/MakeMyResume",
    description: "ATS-optimized placement resume platform using Gemini 3.7 Flash to tailor project achievements into compiled single-page LaTeX templates.",
    type: 'project',
    priority: 19,
    stack: ["Next.js 14", "TypeScript", "Google Gemini 3.7 Flash", "LaTeX Compiler", "Tailwind CSS"],
    codeUrl: "https://github.com/ManishRShetty/MakeMyResume.git",
    caseStudy: {
      problem: "Engineering students struggle to translate project experiences into quantifiable, ATS-compliant XYZ-format resume achievements.",
      solution: "Built a dynamic customization suite leveraging Gemini 3.7 Flash to parse raw job descriptions and generate clean, compiled single-page LaTeX templates.",
      impact: "Ensured single-page placement compliance and formatted resumes for maximum ATS parseability.",
      screenshots: []
    }
  },
  {
    id: 11,
    title: "CandleCrush: Server-Authoritative Trading Simulator",
    thumbnail: "/projects/candlecrush/candlecrushcover.webp",
    description: "Gamified technical analysis simulator featuring server-authoritative balance locks and simulated market execution.",
    type: 'project',
    priority: 20,
    stack: ["TypeScript", "Node.js", "Express", "React", "Tailwind CSS", "Framer Motion"],
    liveDemoUrl: "https://candlecrush.nexusclubs.in/",
    codeUrl: "https://github.com/Nexus-SIT/CandleCrush",
    caseStudy: {
      problem: "Financial education platforms are intimidating for novices, while client-rendered games suffer from balance manipulation exploits.",
      solution: "Constructed an Express and TypeScript backend validating order execution, locking balance deductions, and streaming simulated market ticks to a pixel-art React interface.",
      impact: "Delivered deterministic trade execution with zero balance drift across hundreds of active student training sessions.",
      screenshots: [
        "/projects/candlecrush/candle1.webp",
        "/projects/candlecrush/candle2.webp"
      ]
    }
  },
  {
    id: 160,
    title: "Valley: 2D Custom Canvas Engine & Top-Down Exploration RPG",
    thumbnail: "https://opengraph.githubassets.com/1/Nexus-SIT/Valley",
    description: "Retro 2D exploration engine featuring custom AABB collision detection, tile camera clamping, and Phaser 3 state controllers.",
    type: 'project',
    priority: 21,
    stack: ["Phaser 3", "React", "HTML5 Canvas API", "Vite", "Collision Engine"],
    codeUrl: "https://github.com/Nexus-SIT/Valley.git",
    caseStudy: {
      problem: "Heavyweight game engines introduce bloated web bundles and sluggish startup times when embedded in browser interfaces.",
      solution: "Engineered a custom 2D top-down exploration engine on the HTML5 Canvas API. Implemented axis-aligned bounding box (AABB) collision, tile camera clamping, and dialogue state machines.",
      impact: "Delivered smooth 60 FPS gameplay in modern web browsers with minimal memory consumption.",
      screenshots: []
    }
  },
  {
    id: 170,
    title: "Avia: Bioacoustic Avian Species Sound Identification",
    thumbnail: "https://opengraph.githubassets.com/1/Nishan-02/avainapp",
    description: "Environmental audio recognition platform converting raw waveforms into mel-spectrogram tensors for CNN avian classification.",
    type: 'project',
    priority: 22,
    stack: ["PyTorch", "Librosa", "NumPy", "FastAPI", "React", "Signal Processing"],
    codeUrl: "https://github.com/Nishan-02/avainapp.git",
    caseStudy: {
      problem: "Ecological field bioacoustic surveys are manually intensive, while ambient environmental noise causes severe model classification drift.",
      solution: "Processed raw audio into mel-frequency spectrogram tensors with Librosa. Trained a PyTorch CNN classifier normalized against ambient noise, serving predictions via a lightweight FastAPI REST API.",
      impact: "Achieved high species classification precision from live recorded field audio samples.",
      screenshots: []
    }
  },
  {
    id: 5,
    title: "FolkSpace: Climate-Responsive Retail Demand Forecaster",
    thumbnail: "/projects/folkspace/FolkSpaceCover.webp",
    description: "Supply chain demand platform correlating real-time meteorological data with historic SKU sales to eliminate deadstock waste.",
    type: 'project',
    priority: 23,
    stack: ["React", "Node.js", "Express", "MongoDB", "Python", "Tailwind CSS"],
    liveDemoUrl: "https://folkspace.manishshetty.dev",
    codeUrl: "https://github.com/ManishRShetty/FolkSpace.git",
    caseStudy: {
      problem: "Apparel merchants suffer from severe inventory deadstock when unpredicted micro-climate shifts disrupt seasonal demand.",
      solution: "Built during a 28-hour hackathon: correlates live weather volatility with historic regional retail inventory sales using Python regression models and an Express/MongoDB dashboard.",
      impact: "Provided store managers with actionable inventory reallocation recommendations to minimize retail waste.",
      screenshots: [
        "/projects/folkspace/folkspace1.webp",
        "/projects/folkspace/folkspace2.webp"
      ]
    }
  },
  {
    id: 180,
    title: "Infinite Kitchen: AI Studio Culinary Strategy Game",
    thumbnail: "https://placehold.co/800x500/1C1C1E/FFFFFF?text=Infinite+Kitchen+Game",
    description: "Creative culinary combination sandbox in React 19 evaluating arbitrary player ingredient combinations with Gemini AI.",
    type: 'project',
    priority: 24,
    stack: ["React 19", "Vite", "Google Gemini API", "Framer Motion", "Lucide"],
    caseStudy: {
      problem: "Static crafting games suffer from pre-defined recipe bottlenecks that limit player creativity.",
      solution: "Leveraged Google Gemini to evaluate arbitrary ingredient combinations in real time, synthesizing dynamic culinary recipes, difficulty tiers, and interactive particle animations.",
      impact: "Built with React 19 and Framer Motion for responsive drag-and-drop gameplay and fluid reactive state.",
      screenshots: []
    }
  },

  // =========================================================================
  // TIER 3: PORTALS, DASHBOARDS, LOGISTICS & DEVELOPER UTILITIES
  // =========================================================================
  {
    id: 190,
    title: "CSBS Department Portal: Academic Management Hub",
    thumbnail: "https://opengraph.githubassets.com/1/Nexus-SIT/CSBS",
    description: "Official full-stack departmental portal serving students and faculty with role-based authentication and attendance tracking.",
    type: 'project',
    priority: 25,
    stack: ["Next.js 16", "React 19", "Firebase Auth", "Firestore", "Tailwind CSS"],
    codeUrl: "https://github.com/Nexus-SIT/CSBS.git",
    caseStudy: {
      problem: "Departmental announcements, timetables, and attendance were scattered across fragmented communication channels.",
      solution: "Built the official academic portal using Next.js 16 and Firebase. Integrated role-based authentication (RBAC), live attendance logs, and dynamic event management.",
      impact: "Centralized academic operations for hundreds of students, faculty members, and administrative staff.",
      screenshots: []
    }
  },
  {
    id: 200,
    title: "NexHack Portal: Hackathon Logistics & QR Check-In",
    thumbnail: "https://opengraph.githubassets.com/1/Nexus-SIT/NexHack",
    description: "Hackathon operations portal with cryptographic QR-code badge check-in and real-time Recharts attendance dashboards.",
    type: 'project',
    priority: 26,
    stack: ["Next.js", "React", "Recharts", "QR Code Web API", "Tailwind CSS"],
    codeUrl: "https://github.com/Nexus-SIT/NexHack.git",
    caseStudy: {
      problem: "Multi-day hackathon registration lines create severe logistical bottlenecks during attendee check-in and meal distribution.",
      solution: "Engineered an operations platform generating unique participant QR badges, verified via a high-speed scanner view connected to real-time attendance analytics.",
      impact: "Streamlined participant check-ins and meal tracking for 24-hour hackathons with zero duplicate admissions.",
      screenshots: []
    }
  },
  {
    id: 210,
    title: "Thaniya Certificate Studio: Automated Credential Studio",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/Thaniya-Certificate",
    description: "Batch certificate generation studio rendering thousands of high-resolution credentials from spreadsheet rosters directly in-browser.",
    type: 'project',
    priority: 27,
    stack: ["Next.js", "jsPDF", "JSZip", "Google Generative AI", "Firebase", "PapaParse"],
    codeUrl: "https://github.com/ManishRShetty/Thaniya-Certificate.git",
    caseStudy: {
      problem: "Manual generation of hundreds of event certificates causes formatting inconsistencies and heavy administrative delays.",
      solution: "Constructed a client-side compilation pipeline using jsPDF, JSZip, and PapaParse. Ingests CSV rosters and uses Gemini AI to verify recipient citation text.",
      impact: "Compiled and exported thousands of institutional certificates directly in the browser without server GPU overhead.",
      screenshots: []
    }
  },
  {
    id: 220,
    title: "YearBook Generator: AI Layout & Collage Synthesis",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/YearBook-Generator",
    description: "Digital yearbook creator calculating dynamic CSS grid layouts to accommodate heterogeneous image aspect ratios with Gemini captions.",
    type: 'project',
    priority: 28,
    stack: ["React", "Vite", "Node.js", "Express", "Google GenAI SDK", "Tailwind CSS"],
    codeUrl: "https://github.com/ManishRShetty/YearBook-Generator.git",
    caseStudy: {
      problem: "Collage creation with mixed portrait and landscape photos creates uneven white-space and distorted layouts.",
      solution: "Engineered dynamic CSS grid calculation algorithms to automatically arrange heterogeneous aspect ratios into balanced collages with AI-synthesized cohort captions.",
      impact: "Eliminated manual collage design workflows for graduating college cohorts.",
      screenshots: []
    }
  },
  {
    id: 230,
    title: "Bunts Oman Siri Singara: Live Tournament Auction & Draft",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/Oman-Bunts",
    description: "Offline-first sports tournament drafting and auction presentation engine built with Alpine.js, SheetJS, and Chart.js.",
    type: 'project',
    priority: 29,
    stack: ["Alpine.js", "Tailwind CSS", "Chart.js", "SheetJS (XLSX)", "JSZip"],
    codeUrl: "https://github.com/ManishRShetty/Oman-Bunts.git",
    caseStudy: {
      problem: "Live sports auctions held in event halls often suffer from spotty venue Wi-Fi, risking disrupted bidding rounds.",
      solution: "Engineered an entirely offline-first presentation application using Alpine.js and SheetJS. Ingests player rosters via local Excel files and renders real-time budget and team balance graphs.",
      impact: "Successfully powered live tournament bidding with zero internet connectivity requirements.",
      screenshots: []
    }
  },
  {
    id: 13,
    title: "Srinathon 2.0 Official Platform",
    thumbnail: "/projects/srinathon/srinathon.webp",
    description: "Gamified 24-hour hackathon portal featuring an interactive Card Deck UI and live problem-statement reveal schedules.",
    type: 'project',
    priority: 30,
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveDemoUrl: "https://srinathon.nexusclubs.in/",
    codeUrl: "https://github.com/ManishRShetty/srinathon",
    caseStudy: {
      problem: "Static hackathon portals fail to capture the high-energy timeline of a 24-hour hackathon.",
      solution: "Built a responsive platform with scroll-linked card deck animations and synchronized release countdowns for secret problem statements.",
      impact: "Handled peak reveal windows with zero downtime during the live national-level hackathon.",
      screenshots: [
        "/projects/srinathon/1.webp",
        "/projects/srinathon/2.webp"
      ]
    }
  },
  {
    id: 15,
    title: "Nexus Club Platform: Community Operations Hub",
    thumbnail: "/projects/nexusclubs/nexusclubscover.webp",
    description: "Full-stack institutional platform for membership management, event registration, and administrative operations.",
    type: 'project',
    priority: 31,
    stack: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    liveDemoUrl: "https://www.nexusclubs.in",
    caseStudy: {
      problem: "Club operations were fragmented across Google Forms, spreadsheets, and decentralized chat groups.",
      solution: "Built a modular full-stack web application with role-based admin controls, member registries, and event publishing.",
      impact: "Centralized club operations for hundreds of active student members.",
      screenshots: [
        "/projects/nexusclubs/nexus1.webp",
        "/projects/nexusclubs/nexus2.webp"
      ]
    }
  },
  {
    id: 240,
    title: "MediaHarbor: Multi-Source Media Extractor & Player",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/Media-Harbour",
    description: "Video media extraction utility and streaming client with responsive playback controls and custom parsing scripts.",
    type: 'project',
    priority: 32,
    stack: ["Node.js", "Express", "Next.js", "React", "Streaming Scripts"],
    codeUrl: "https://github.com/ManishRShetty/Media-Harbour.git",
    caseStudy: {
      problem: "Multi-platform media buffering and downloading tools are often riddled with trackers and invasive popups.",
      solution: "Developed a clean media extraction and streaming client using Node.js and React, implementing custom media parsing and playback controls.",
      impact: "Provided seamless media streaming and asset downloading with a clean dark interface.",
      screenshots: []
    }
  },
  {
    id: 250,
    title: "React-Mastery: Modern Architecture & Design Patterns",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/React-Mastery",
    description: "Comprehensive open-source architectural guide breaking down modern JavaScript ES6+ internals and production React patterns.",
    type: 'project',
    priority: 33,
    stack: ["TypeScript", "React Patterns", "Component Architecture", "Markdown"],
    codeUrl: "https://github.com/ManishRShetty/React-Mastery.git",
    caseStudy: {
      problem: "Developers frequently struggle with complex state lifecycle bugs and inefficient re-renders in large React applications.",
      solution: "Authored an architectural repository documenting compound components, custom hook abstractions, memoization strategies, and clean code principles.",
      impact: "Serves as an educational and onboarding reference for student developers across campus clubs.",
      screenshots: []
    }
  },
  {
    id: 260,
    title: "Nexus Code Library: Academic Algorithms Repository",
    thumbnail: "https://opengraph.githubassets.com/1/Nexus-SIT/Nexus-Code-Library",
    description: "Centralized departmental repository archiving verified reference solutions across 8 semesters of CS curricula.",
    type: 'project',
    priority: 34,
    stack: ["Python", "C/C++", "Java", "Data Structures", "Algorithms"],
    codeUrl: "https://github.com/Nexus-SIT/Nexus-Code-Library.git",
    caseStudy: {
      problem: "Undergraduate computer science laboratory coursework lacks centralized, high-quality, verified algorithm references.",
      solution: "Curated an 8-semester academic repository housing optimized solutions for fundamental data structures, graph algorithms, and statistical computation.",
      impact: "Maintained as the primary open-source academic repository for department peers and juniors.",
      screenshots: []
    }
  },
  {
    id: 270,
    title: "FoodFilm Festival Portal: CSBS Showcase",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/FoodFilmFestival",
    description: "Creative typography landing page and interactive event schedule viewer designed for the CSBS Food & Film festival.",
    type: 'project',
    priority: 35,
    stack: ["HTML5", "Modern CSS3 (Grid/Flexbox)", "JavaScript"],
    codeUrl: "https://github.com/ManishRShetty/FoodFilmFestival.git",
    caseStudy: {
      problem: "Event showcases need high visual flair and fluid responsive typography to engage campus festival attendees.",
      solution: "Crafted a lightweight event portal with responsive CSS grid viewports, vibrant color contrasts, and interactive program schedules.",
      impact: "Showcased departmental creative productions during the campus festival.",
      screenshots: []
    }
  },
  {
    id: 280,
    title: "GTA-VI Interactive Countdown Timer",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/GTA-VI-Countdown",
    description: "Interactive Vice City neon-themed web countdown timer featuring dynamic ambient soundscapes and audio FX.",
    type: 'project',
    priority: 36,
    stack: ["React", "Vite", "CSS Keyframe Animations", "Web Audio API"],
    codeUrl: "https://github.com/ManishRShetty/GTA-VI-Countdown.git",
    caseStudy: {
      problem: "Anticipated media releases benefit from immersive, thematic web countdowns with responsive audio-visual feedback.",
      solution: "Designed a Vice City neon aesthetic countdown using CSS keyframe shaders, responsive time synchronization, and integrated audio cues.",
      impact: "Popular web utility shared across community developer groups.",
      screenshots: []
    }
  },
  {
    id: 290,
    title: "Client-Side Password Security & Entropy Validator",
    thumbnail: "https://placehold.co/800x500/1C1C1E/FFFFFF?text=Password+Security+Validator",
    description: "Real-time client-side security utility providing visual entropy calculations and credential policy evaluation.",
    type: 'project',
    priority: 37,
    stack: ["Next.js", "React", "Regular Expressions", "Entropy Evaluation"],
    caseStudy: {
      problem: "Static password rules fail to convey actual mathematical entropy to users, leading to easily crackable passwords.",
      solution: "Engineered a client-side validation utility that computes real-time password entropy, character diversity scoring, and common breach pattern flags.",
      impact: "Delivers instant visual feedback on credential strength with zero server-side transmission.",
      screenshots: []
    }
  },
  {
    id: 300,
    title: "Thaniya Brand Portfolio & Showcase",
    thumbnail: "https://opengraph.githubassets.com/1/ManishRShetty/thaniya",
    description: "Responsive corporate brand portfolio and service engagement portal featuring fluid page transitions and contact forms.",
    type: 'project',
    priority: 38,
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    codeUrl: "https://github.com/ManishRShetty/thaniya.git",
    caseStudy: {
      problem: "Enterprise services companies need high-trust, fast-loading digital showcase portals to convert prospective clients.",
      solution: "Constructed a corporate web portal with fluid page transitions, responsive service showcases, and interactive client contact forms.",
      impact: "Served as the primary digital brand presence for Thaniya Technologies.",
      screenshots: []
    }
  }
];
