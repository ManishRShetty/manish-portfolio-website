
import type { Project } from '../types';

export const projectsData: Project[] = [
  {
  id: 1,
  title: "FolkSpace",
  thumbnail: "https://picsum.photos/seed/folkspace/800/600",
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
  liveDemoUrl: "#",
  codeUrl: "#",
  caseStudy: {
    problem:
      "Nordic retail suffers from volatile demand due to weather, seasons, and festivals—something traditional ERP/POS systems cannot interpret, causing overstocking and understocking.",
    solution:
      "We built an AI-driven system using Random Forest for demand forecasting, multi-language support, real-time weather-based stocking, dynamic pricing, distributor transparency via blockchain, and automated stock replenishment powered by n8n.",
    impact:
      "Received appreciation from multiple mentors for being one of the most complete and research-backed solutions. Improved stocking accuracy and pricing intelligence by combining sales data, weather history, and seasonal trends.",
    screenshots: [
      "https://picsum.photos/seed/folkspace-ss1/1200/800",
      "https://picsum.photos/seed/folkspace-ss2/1200/800",
      "https://picsum.photos/seed/folkspace-ss3/1200/800"
    ]
  },
 
},

  {
  id: 2,
  title: "Nexus Club Website",
  thumbnail: "https://picsum.photos/seed/nexusclubsite/800/600",
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
  codeUrl: "#",
  caseStudy: {
    problem:
      "The club needed a modern, responsive website that could handle event listings, membership info, dynamic content updates and be scalable as the club grows.",
    solution:
      "Built a robust full-stack application: Next.js + Tailwind for the UI; Node.js/Express + MongoDB for the back-end; designed modular components, admin dashboard for event uploads, and optimized for performance and SEO.",
    impact:
      "Delivered a fast, mobile-friendly site; improved engagement among students, simplified event update workflows for club admins; created a scalable foundation for future features like hackathon portals and member analytics."
    ,
    screenshots: [
      "https://picsum.photos/seed/nexusclubsite-ss1/1200/800",
      "https://picsum.photos/seed/nexusclubsite-ss2/1200/800",
      "https://picsum.photos/seed/nexusclubsite-ss3/1200/800"
    ]
  },
  
},
  {
    id: 3,
    title: "Envision College Event Website",
    thumbnail: "https://i.ibb.co/TD8n386m/New-Project-3.png",
    description: "A sleek, modern marketing website designed to capture leads, with animations powered by Framer Motion.",
    stack: ["React", "Framer Motion", "UI/UX"],
    liveDemoUrl: "#",
    codeUrl: "#",
    caseStudy: {
      problem: "A startup needed a visually appealing landing page that could clearly communicate its value proposition and convert visitors into leads.",
      solution: "A user-centric design process was followed to create an intuitive layout. The site was built in React, with subtle, engaging animations from Framer Motion to guide the user's attention. A Formspree-integrated contact form was included for lead capture.",
      impact: "The new design led to a 40% increase in user engagement and a 25% higher conversion rate on the contact form.",
      screenshots: [
        "https://picsum.photos/seed/gamma-ss1/1200/800"
      ]
    }
  }
];
