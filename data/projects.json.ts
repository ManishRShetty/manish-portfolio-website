
import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    thumbnail: "https://picsum.photos/seed/alpha/800/600",
    description: "A dynamic dashboard for visualizing real-time data, built with Next.js and Tailwind CSS for a seamless user experience.",
    stack: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    liveDemoUrl: "#",
    codeUrl: "#",
    caseStudy: {
      problem: "The client needed a high-performance, real-time analytics dashboard to monitor user engagement metrics without suffering from data lag.",
      solution: "We built a server-side rendered application using Next.js for fast initial loads. Real-time updates were handled via Firebase Firestore listeners, and the UI was crafted with Tailwind CSS for rapid, responsive development.",
      impact: "Achieved a 95+ Lighthouse performance score and reduced data latency by 60%, allowing stakeholders to make faster, data-driven decisions.",
      screenshots: [
        "https://picsum.photos/seed/alpha-ss1/1200/800",
        "https://picsum.photos/seed/alpha-ss2/1200/800",
        "https://picsum.photos/seed/alpha-ss3/1200/800",
      ]
    }
  },
  {
    id: 2,
    title: "Project Beta",
    thumbnail: "https://picsum.photos/seed/beta/800/600",
    description: "A headless e-commerce solution with a focus on performance and scalability, leveraging modern DevOps practices.",
    stack: ["Node.js", "Express", "Docker", "AWS"],
    liveDemoUrl: "#",
    codeUrl: "#",
    caseStudy: {
      problem: "An online retailer was struggling with a slow, monolithic e-commerce platform that couldn't handle traffic spikes during peak seasons.",
      solution: "We architected a microservices-based backend using Node.js and Express, containerized it with Docker, and deployed it on AWS for scalability. The frontend was decoupled, allowing for a faster, more flexible user interface.",
      impact: "Page load times were cut by 50%, and the system successfully handled a 300% increase in traffic during a flash sale with zero downtime.",
      screenshots: [
        "https://picsum.photos/seed/beta-ss1/1200/800",
        "https://picsum.photos/seed/beta-ss2/1200/800"
      ]
    }
  },
  {
    id: 3,
    title: "Project Gamma",
    thumbnail: "https://picsum.photos/seed/gamma/800/600",
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
