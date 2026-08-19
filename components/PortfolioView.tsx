'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { WorkExperience } from '@/components/Experience';
import { Community } from '@/components/Community';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { CaseStudyModal } from '@/components/CaseStudyModal';
import type { Project } from '@/types';

interface PortfolioViewProps {
  initialProjects: Project[];
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ initialProjects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-900 font-sans">
      <main className="container bg-black mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects projects={initialProjects} onProjectClick={openModal} />
        <WorkExperience />
        <Community />
        <Education />
        <Contact />
      </main>
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioView;
