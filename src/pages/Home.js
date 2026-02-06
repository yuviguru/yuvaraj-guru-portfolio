import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImage from '../assets/images/yuvaraj-headshot-no-bg.png';
import { faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from '../hooks/useTranslations';
import { Link } from "react-router-dom";
import Button from '../components/Button';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

const roles = [
    "UI Engineer",
    "Creative Developer",
    "Design Systems Architect",
    "Frontend Craftsman",
];

const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "35+", label: "Projects Delivered" },
    { value: "15+", label: "Technologies" },
    { value: "48+", label: "Devs Mentored" },
];

function AnimatedRole() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
            <AnimatePresence mode="wait">
                <motion.span
                    key={roles[currentIndex]}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                >
                    {roles[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <span className="text-xs text-typography-muted uppercase tracking-[0.2em] font-medium">Scroll</span>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                <FontAwesomeIcon icon={faChevronDown} className="text-primary text-sm" />
            </motion.div>
        </motion.div>
    );
}

export default function Home() {
    const translations = useTranslations();

    const MoreAboutMeButton = {
        text: translations?.buttonText || "More About Me",
        icon: faArrowRight
    };

    return (
        <PageTransition>
            <SEO
                title="Yuvaraj Guru - UI Engineer & Creative Developer | React, Design Systems, Motion"
                description="UI Engineer & Creative Developer with 10+ years of experience crafting premium digital experiences. Specialized in React, Design Systems, Framer Motion, and bridging design & code."
                keywords="Yuvaraj Guru, UI Engineer, Creative Developer, Design Systems, React, Framer Motion, Frontend Developer, CSS Expert"
                url="https://yuvarajguru.dev"
                type="website"
            />

            <div className="relative min-h-screen w-full flex items-center overflow-hidden">
                {/* Hero gradient orbs */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.08, 0.12, 0.08],
                        }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
                        style={{ background: 'var(--color-primary)' }}
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.05, 0.08, 0.05],
                        }}
                        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
                        style={{ background: 'var(--color-accent)' }}
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Text Content */}
                        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                            {/* Greeting */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="text-typography-muted text-sm uppercase tracking-[0.2em] font-medium mb-4"
                            >
                                Hello, I'm
                            </motion.p>

                            {/* Name */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-typography leading-tight mb-4"
                            >
                                {translations?.heading || "Yuvaraj Guru"}
                            </motion.h1>

                            {/* Animated Role */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-semibold mb-6"
                            >
                                <AnimatedRole />
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                                className="text-typography-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
                            >
                                Crafting premium digital experiences at the intersection of design and engineering.
                                Specialized in React, Design Systems, and making interfaces feel <em className="text-primary not-italic font-medium">alive</em>.
                            </motion.p>

                            {/* CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-4"
                            >
                                <Link to="/about" className="no-underline">
                                    <Button {...MoreAboutMeButton} />
                                </Link>
                                <Link
                                    to="/playground"
                                    className="inline-flex items-center gap-2 px-8 py-3 border border-borderLight text-typography rounded-full font-semibold uppercase text-sm hover:border-primary hover:text-primary transition-colors duration-300 no-underline"
                                >
                                    Explore Playground
                                </Link>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1, duration: 0.5 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-borderLight"
                            >
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.2 + index * 0.1 }}
                                    >
                                        <span className="block font-heading text-2xl font-bold text-primary">{stat.value}</span>
                                        <span className="text-xs text-typography-muted uppercase tracking-wider">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="order-1 lg:order-2 relative"
                        >
                            <div className="relative">
                                {/* Glow behind image */}
                                <div
                                    className="absolute inset-0 rounded-full blur-[60px] opacity-20"
                                    style={{ background: 'var(--color-primary)' }}
                                />
                                {/* Image */}
                                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2 border-borderLight">
                                    <img
                                        src={profileImage}
                                        alt="Yuvaraj Guru - UI Engineer"
                                        className="w-full h-full object-cover object-top"
                                        loading="eager"
                                    />
                                </div>
                                {/* Decorative ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                    className="absolute -inset-3 rounded-full border border-dashed border-primary/20"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                <ScrollIndicator />
            </div>
        </PageTransition>
    );
}
