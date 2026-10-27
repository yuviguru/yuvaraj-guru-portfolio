import React from 'react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import HeroScene from '../components/home/HeroScene';
import StatementSection from '../components/home/StatementSection';
import IntroSection from '../components/home/IntroSection';
import WorksTitle from '../components/home/WorksTitle';
import WorkGallery from '../components/home/WorkGallery';
import NotebookSection from '../components/home/NotebookSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
    return (
        <PageTransition>
            <SEO
                title="Yuvaraj Guru - Frontend Architect & Product Engineer | React, AI, Automation"
                description="Frontend Architect & Product Engineer with 10+ years building end-to-end products. Expert in React, Vue.js, AI integrations, and workflow automations for software development, recruitment, and more."
                keywords="Yuvaraj Guru, Frontend Architect, Product Engineer, AI Integration, Workflow Automation, React, Vue.js, Node.js, Full Stack Developer"
                url="https://yuvarajguru.dev"
                type="website"
            />
            <HeroScene />
            <StatementSection />
            <IntroSection />
            <WorksTitle />
            <WorkGallery />
            <NotebookSection />
            <ContactSection />
        </PageTransition>
    );
}
