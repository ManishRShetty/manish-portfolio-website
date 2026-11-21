export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  genre: string;
  vibe: string;
  link?: string;
  quote?: string;
  isTopFavorite?: boolean;
}

export interface Movie {
  id: string;
  title: string;
  year: string;
  director: string;
  genre: string;
  poster: string;
  rating: number; // out of 5
  favoriteQuote: string;
  whyILoveIt: string;
  badge?: string;
}

export interface SideQuest {
  id: string;
  title: string;
  category: 'Creative UI' | 'Generative Art' | 'Mini-Tool' | 'Experiment';
  description: string;
  tech: string[];
  status: 'In Orbit' | 'Prototypes' | 'Deep Space' | 'Shipped';
  link?: string;
  demoUrl?: string;
  image?: string;
}

export interface ArtifactItem {
  id: string;
  title: string;
  category: 'Book' | 'Gear' | 'Ritual' | 'Hobby';
  subtitle: string;
  description: string;
  icon: string;
  highlight?: string;
}

export interface CosmicThought {
  id: string;
  date: string;
  topic: string;
  content: string;
  mood: string;
}

export const UNIVERSE_DATA = {
  profile: {
    name: "Manish's Inner Universe",
    tagline: "The sonic frequencies, cinematic visions, side quests & unfiltered thoughts that fuel my mind.",
    bio: "Beyond algorithms, zero-trust memory, and context pipelines lies the personal orbit: late-night synthwave playlists, cyberpunk films, speculative sci-fi books, and oddball creative side projects.",
    stats: [
      { label: "Hours in Flow", value: "3,400+" },
      { label: "Tracks on Repeat", value: "140+" },
      { label: "Sci-Fi Films Explored", value: "85+" },
      { label: "Creative Side Quests", value: "24+" },
    ]
  },

  tracks: [
    {
      id: "track-1",
      title: "Starboy / After Hours",
      artist: "The Weeknd",
      album: "After Hours",
      cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&auto=format&fit=crop&q=80",
      genre: "Synthwave / Dark R&B",
      vibe: "Late Night Code & Drive",
      quote: "Neon lights reflected in the rain at 3 AM while compiling agent loops.",
      link: "https://open.spotify.com",
      isTopFavorite: true,
    },
    {
      id: "track-2",
      title: "Resonance",
      artist: "HOME",
      album: "Odyssey",
      cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
      genre: "Chillwave / Synth",
      vibe: "Nostalgic Architecture",
      quote: "The universal anthem of deep work and futuristic nostalgia.",
      link: "https://open.spotify.com",
      isTopFavorite: true,
    },
    {
      id: "track-3",
      title: "Cornfield Chase",
      artist: "Hans Zimmer",
      album: "Interstellar OST",
      cover: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&auto=format&fit=crop&q=80",
      genre: "Cinematic Neo-Classical",
      vibe: "Cosmic Epiphany",
      quote: "Pure organ chills. The sound of reaching beyond human limits.",
      link: "https://open.spotify.com",
      isTopFavorite: true,
    },
    {
      id: "track-4",
      title: "Midnight City",
      artist: "M83",
      album: "Hurry Up, We're Dreaming",
      cover: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&auto=format&fit=crop&q=80",
      genre: "Electronic / Dream Pop",
      vibe: "Euphoric Creative Surge",
      quote: "Saxophone climax right when the design clicks into place.",
      link: "https://open.spotify.com",
    },
    {
      id: "track-5",
      title: "Nightcall",
      artist: "Kavinsky",
      album: "OutRun",
      cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=80",
      genre: "Outrun / Electro",
      vibe: "Cyberpunk Midnight",
      quote: "Cruising through highway tunnels with zero latency.",
      link: "https://open.spotify.com",
    },
    {
      id: "track-6",
      title: "Experience",
      artist: "Ludovico Einaudi",
      album: "In a Time Lapse",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
      genre: "Contemporary Classical",
      vibe: "Deep Focus Flow State",
      quote: "When you need to rewrite complex state trees in silence.",
      link: "https://open.spotify.com",
    }
  ] as Track[],

  movies: [
    {
      id: "movie-1",
      title: "Interstellar",
      year: "2014",
      director: "Christopher Nolan",
      genre: "Sci-Fi / Space Odyssey",
      poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
      rating: 5,
      favoriteQuote: "\"Do not go gentle into that good night. Rage, rage against the dying of the light.\"",
      whyILoveIt: "A monument to human ambition, love transcending space-time, and Zimmer's transcendental pipe organs.",
      badge: "All-Time Masterpiece",
    },
    {
      id: "movie-2",
      title: "Blade Runner 2049",
      year: "2017",
      director: "Denis Villeneuve",
      genre: "Cyberpunk / Neo-Noir",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
      rating: 5,
      favoriteQuote: "\"All those moments will be lost in time, like tears in rain.\"",
      whyILoveIt: "Unrivaled visual poetry, Roger Deakins' brutalist neon cinematography, and profound questions on synthetic consciousness.",
      badge: "Visual Benchmark",
    },
    {
      id: "movie-3",
      title: "Inception",
      year: "2010",
      director: "Christopher Nolan",
      genre: "Heist / Mind-Bender",
      poster: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600&auto=format&fit=crop&q=80",
      rating: 5,
      favoriteQuote: "\"An idea is like a virus. Resilient. Highly contagious.\"",
      whyILoveIt: "Architectural storytelling at its absolute zenith. The concept of nested reality loops mirrors recursion in code.",
      badge: "Mind Architecture",
    },
    {
      id: "movie-4",
      title: "Spider-Man: Across the Spider-Verse",
      year: "2023",
      director: "Joaquim Dos Santos, Kemp Powers",
      genre: "Animation / Multiverse",
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
      rating: 5,
      favoriteQuote: "\"Everyone keeps telling me how my story is supposed to go. Nah, I'ma do my own thing.\"",
      whyILoveIt: "A revolutionary masterclass in mixed-media art styles, frame-rate manipulation, and fearless creative direction.",
      badge: "Animation Marvel",
    },
    {
      id: "movie-5",
      title: "Oppenheimer",
      year: "2023",
      director: "Christopher Nolan",
      genre: "Biographical Drama",
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
      rating: 5,
      favoriteQuote: "\"Theory will only take you so far.\"",
      whyILoveIt: "The relentless tension of intellectual creation, ethical weight, and Ludwig Göransson's ticking violin soundtrack.",
      badge: "Epic Drama",
    },
    {
      id: "movie-6",
      title: "Cyberpunk: Edgerunners",
      year: "2022",
      director: "Hiroyuki Imaishi (Studio Trigger)",
      genre: "Anime / Sci-Fi",
      poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
      rating: 5,
      favoriteQuote: "\"I really want to stay at your house.\"",
      whyILoveIt: "Visceral color palette, supersonic pacing, and the ultimate neon tragedy set against Night City.",
      badge: "Top Anime",
    }
  ] as Movie[],

  sideQuests: [
    {
      id: "quest-1",
      title: "Bioluminescent Gravity Canvas",
      category: "Generative Art",
      description: "Interactive cosmos canvas where mouse acts as a cosmic gravitational singularity pulling starfield particles.",
      tech: ["HTML5 Canvas", "Vector Physics", "Particle Systems"],
      status: "In Orbit",
    },
    {
      id: "quest-2",
      title: "Autonomous Agent Memory Sandbox",
      category: "Experiment",
      description: "A visual playground testing synthetic memory consolidation, decay graphs, and vector similarity clustering.",
      tech: ["TypeScript", "Vector Embeddings", "Graph Theory"],
      status: "Prototypes",
    },
    {
      id: "quest-3",
      title: "Tactile Glass UI Experiments",
      category: "Creative UI",
      description: "Experimental glassmorphic toggles, fluid magnetic cards, 3D tilt cards, and spring micro-interactions.",
      tech: ["Framer Motion", "Tailwind CSS", "React 19"],
      status: "Shipped",
    },
    {
      id: "quest-4",
      title: "Web Audio Ambient Frequency Synth",
      category: "Mini-Tool",
      description: "Custom Web Audio API synthesizer generating deep space hums, binaural beats, and cosmic drones for flow state.",
      tech: ["Web Audio API", "Gain Nodes", "Dual Oscillators"],
      status: "In Orbit",
    }
  ] as SideQuest[],

  artifacts: [
    {
      id: "art-1",
      category: "Book",
      title: "Klara and the Sun",
      subtitle: "by Kazuo Ishiguro",
      description: "A tender, heartbreaking exploration of machine perception, artificial innocence, and what it truly means to love humans.",
      icon: "📖",
      highlight: "Required reading on synthetic empathy."
    },
    {
      id: "art-2",
      category: "Book",
      title: "Snow Crash",
      subtitle: "by Neal Stephenson",
      description: "The visionary cyberpunk blueprint that invented the Metaverse, avatar culture, and cryptographic distributed futures.",
      icon: "⚡",
      highlight: "Cyberpunk canon."
    },
    {
      id: "art-3",
      category: "Gear",
      title: "The Battle Station",
      subtitle: "Custom Mechanical Keeb & Ultrawide",
      description: "Tactile lubed switches with deep acoustic profile, matte dark setup, minimal wires, and warm indirect amber lighting.",
      icon: "⌨️",
      highlight: "Crafted for 12hr focus sessions."
    },
    {
      id: "art-4",
      category: "Ritual",
      title: "Aeropress Espresso Roast",
      subtitle: "Morning Single-Origin Chemistry",
      description: "Inverted Aeropress brew with 200°F water, 30s bloom, and dark roast beans. The official spark plug for high-throughput code.",
      icon: "☕",
      highlight: "0% sugar, 100% caffeine."
    }
  ] as ArtifactItem[],

  musings: [
    {
      id: "musing-1",
      date: "Late Night Orbit",
      topic: "The Elegance of Constraints",
      content: "The best interfaces and the most resilient AI agents aren't built by adding complexity—they're born from ruthless simplification. True creative power is making complex distributed systems feel as intuitive as breathing.",
      mood: "🌌 Deep Thought"
    },
    {
      id: "musing-2",
      date: "3:00 AM Synthesis",
      topic: "Code as Kinetic Art",
      content: "Code isn't just instructions for silicon; it's a medium for kinetic expression. When transitions have realistic inertia and physics, the digital world feels tactile and alive.",
      mood: "✨ Inspired"
    },
    {
      id: "musing-3",
      date: "Sunday Solitude",
      topic: "Why Cinema Shapes My Code",
      content: "Directors like Nolan and Villeneuve don't just tell stories—they construct entire architectural systems of rules, pacing, and tension. I approach designing software infrastructure with that exact cinematic discipline.",
      mood: "🎬 Cinematic"
    }
  ] as CosmicThought[],

  spaceQuotes: [
    "\"The cosmos is within us. We are made of star-stuff.\" — Carl Sagan",
    "\"Somewhere, something incredible is waiting to be known.\" — Sharon Begley",
    "\"Creativity is intelligence having fun.\" — Albert Einstein",
    "\"I'ma do my own thing.\" — Miles Morales",
    "\"Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is.\" — Douglas Adams"
  ]
};
