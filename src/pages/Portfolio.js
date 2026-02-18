import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../components/PageTitle';
import PageLayout from '../components/PageLayout';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/motion/FadeIn';
import ProjectCard from '../components/portfolio/ProjectCard';
import { allProjects } from '../data/projects';

const PAGE_PROPS = {
    title: 'My',
    highlightTitle: 'Portfolio',
    bgTitle: 'works',
};

const CATEGORIES = ['All', 'Corporate', 'Open Source / Personal', 'In Progress'];

const STATS = [
    { label: 'Projects', value: `${allProjects.length}+` },
    { label: 'Industries', value: '10+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Years', value: '10+' },
];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = React.useMemo(() => {
        if (selectedCategory === 'All') return allProjects;
        return allProjects.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    const categoryCount = (cat) =>
        cat === 'All'
            ? allProjects.length
            : allProjects.filter(p => p.category === cat).length;

    return (
        <PageTransition>
            <PageLayout containerSize="wide">
                <SEO
                    title="Portfolio - Yuvaraj Guru | Frontend Architect & Product Engineer"
                    description={`Explore Yuvaraj Guru's portfolio featuring ${allProjects.length}+ projects — corporate enterprise work, open-source personal projects, and in-progress products. 10+ years across React, Vue.js, Node.js, and AI tooling.`}
                    keywords="Yuvaraj Guru Portfolio, Professional Projects, React Projects, Vue.js Applications, E-commerce Development, Platform Development, Software Engineer Portfolio, Open Source"
                    url="https://yuvarajguru.dev/portfolio"
                    type="website"
                />
                <PageTitle {...PAGE_PROPS} />

                <div className="pb-20">
                    {/* ── Hire CTA strip ── */}
                    <FadeIn>
                        <div className="mb-10 px-5 py-4 bg-accent/10 border border-accent/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🚀</span>
                                <div>
                                    <p className="text-sm font-semibold text-typography">
                                        Open to freelance & consulting engagements
                                    </p>
                                    <p className="text-xs text-typography-muted">
                                        Frontend architecture, product engineering, AI tooling
                                    </p>
                                </div>
                            </div>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors flex-shrink-0"
                            >
                                Get in Touch
                                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                            </Link>
                        </div>
                    </FadeIn>

                    {/* ── Introduction ── */}
                    <FadeIn delay={0.05}>
                        <div className="text-center mb-10">
                            <p className="text-base text-typography max-w-3xl mx-auto leading-relaxed opacity-80">
                                A showcase of my work spanning 10+ years across diverse industries.
                                Corporate projects are anonymized to respect NDA agreements. Personal and open-source
                                projects include live demos and source code.
                            </p>
                        </div>
                    </FadeIn>

                    {/* ── Category filter ── */}
                    <FadeIn delay={0.1}>
                        <div className="flex flex-wrap justify-center gap-2 mb-10">
                            {CATEGORIES.map((category) => {
                                const count = categoryCount(category);
                                const isActive = selectedCategory === category;
                                return (
                                    <motion.button
                                        key={category}
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                            isActive
                                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                                : 'bg-surface text-typography border border-borderLight hover:border-primary/40'
                                        }`}
                                    >
                                        {category}
                                        <span className={`ml-1.5 text-xs ${isActive ? 'text-white/70' : 'text-typography-muted'}`}>
                                            ({count})
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </FadeIn>

                    {/* ── Stats row ── */}
                    <FadeIn delay={0.15}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                            {STATS.map((stat, i) => (
                                <div
                                    key={i}
                                    className="text-center p-3 bg-surface rounded-xl border border-borderLight"
                                >
                                    <div className="text-xl font-heading font-bold text-primary">{stat.value}</div>
                                    <div className="text-xs text-typography-muted uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* ── Projects grid ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* ── Empty state ── */}
                    <AnimatePresence>
                        {filteredProjects.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-12"
                            >
                                <p className="text-typography text-lg mb-4">No projects in this category yet.</p>
                                <button
                                    onClick={() => setSelectedCategory('All')}
                                    className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                                >
                                    Show All Projects
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ── Conversion block ── */}
                    <FadeIn delay={0.2}>
                        <div className="mt-14 p-8 bg-surface rounded-2xl border border-borderLight text-center">
                            <h3 className="text-xl font-heading font-bold text-typography mb-2">
                                Want a deeper technical dive?
                            </h3>
                            <p className="text-sm text-typography opacity-70 leading-relaxed max-w-xl mx-auto mb-6">
                                Happy to discuss any of these projects in detail — stack choices, architecture decisions,
                                lessons learned, and how I can bring the same approach to your team or product.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors"
                                >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    Get in Touch
                                </Link>
                                <a
                                    href="/Yuvaraj_Guru_CV.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-surface-hover text-typography border border-borderLight rounded-xl text-sm font-medium hover:border-primary/40 transition-colors"
                                >
                                    <FontAwesomeIcon icon={faFileAlt} />
                                    View CV
                                </a>
                            </div>
                            <p className="mt-4 text-xs text-typography-muted">
                                Corporate projects are anonymized to respect NDAs.{' '}
                                <Link to="/contact" className="text-primary hover:text-primary-light transition-colors underline">
                                    Reach out
                                </Link>{' '}
                                for confidential technical discussions.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </PageLayout>
        </PageTransition>
    );
}
