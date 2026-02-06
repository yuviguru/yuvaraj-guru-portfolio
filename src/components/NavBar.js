// NavBar.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavItem from './NavItem';
import { faHome, faUser, faBriefcase, faEnvelope, faBlog, faBars, faTimes, faPalette, faFlask } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

// Mobile Navigation Item Component
function MobileNavItem({ name, icon, link }) {
    const location = useLocation();
    const isActive = location.pathname === link ||
        (link !== '/' && location.pathname.startsWith(link));

    return (
        <Link
            to={link}
            className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 no-underline ${isActive
                ? 'bg-primary text-white'
                : 'text-typography hover:bg-navPillsBg'
                }`}
        >
            <div className="w-8 h-8 flex justify-center items-center">
                <FontAwesomeIcon icon={icon} size="lg" />
            </div>
            <span className="text-base font-heading font-medium">{name}</span>
        </Link>
    );
}

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', icon: faHome, link: '/' },
        { name: 'About', icon: faUser, link: '/about' },
        { name: 'Portfolio', icon: faBriefcase, link: '/portfolio' },
        { name: 'Design System', icon: faPalette, link: '/design-system' },
        { name: 'Playground', icon: faFlask, link: '/playground' },
        { name: 'Blog', icon: faBlog, link: '/blog' },
        { name: 'Contact', icon: faEnvelope, link: '/contact' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Desktop Navigation */}
            <aside className="hidden lg:flex fixed top-0 right-2 z-40 h-screen p-4 items-center justify-center">
                <nav>
                    <ul className="flex flex-col gap-4 items-end">
                        {navItems.map((item, index) => (
                            <NavItem
                                key={item.link}
                                name={item.name}
                                icon={item.icon}
                                link={item.link}
                            />
                        ))}
                        <li className="mt-4">
                            <ThemeSwitcher />
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
                {/* Mobile Menu Button */}
                <motion.button
                    onClick={toggleMobileMenu}
                    whileTap={{ scale: 0.9 }}
                    className="fixed top-4 right-4 z-50 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/25"
                    aria-label="Toggle mobile menu"
                >
                    <FontAwesomeIcon
                        icon={isMobileMenuOpen ? faTimes : faBars}
                        size="lg"
                    />
                </motion.button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            onClick={closeMobileMenu}
                        />
                    )}
                </AnimatePresence>

                {/* Mobile Menu Sidebar */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.aside
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 z-40 h-screen w-full sm:w-80 bg-background/95 backdrop-blur-xl border-l border-borderLight shadow-2xl"
                        >
                            <div className="p-6 pt-20">
                                {/* Theme Switcher */}
                                <div className="mb-8 flex justify-center">
                                    <ThemeSwitcher />
                                </div>

                                {/* Navigation Items */}
                                <nav>
                                    <ul className="flex flex-col gap-2">
                                        {navItems.map((item, index) => (
                                            <motion.li
                                                key={item.link}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                onClick={closeMobileMenu}
                                            >
                                                <MobileNavItem
                                                    name={item.name}
                                                    icon={item.icon}
                                                    link={item.link}
                                                />
                                            </motion.li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </motion.aside>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
