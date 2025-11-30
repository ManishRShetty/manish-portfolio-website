'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { WorkExperience } from '@/components/Experience';
import { Community } from '@/components/Community';
import { Education } from '@/components/Education';
// import { Talks } from '@/components/Talks';
// import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CaseStudyModal } from '@/components/CaseStudyModal';
import { projectsData } from '@/data/projects.json';
import type { Project } from '@/types';

const App: React.FC = () => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="min-h-screen bg-black bg-red text-gray-900 font-sans">

            <Header />
            <main className="container bg-black mx-auto px-4 sm:px-6 lg:px-8">
                <Hero />
                <About />
                <Projects projects={projectsData} onProjectClick={openModal} />
                <WorkExperience />
                <Community />
                <Education />
                {/* <Talks /> */}
                {/* <Achievements /> */}
                <Contact />
            </main>
            <Footer />
            <AnimatePresence>
                {selectedProject && (
                    <CaseStudyModal project={selectedProject} onClose={closeModal} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default App;
