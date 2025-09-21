// NavBar.js
import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';
import { faHome, faUser, faBriefcase, faEnvelope, faBlog, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

// Mobile Navigation Item Component
function MobileNavItem({ name, icon, link }) {
    const location = useLocation();
    const isActive = location.pathname === link;

    return (
        <Link
            to={link}
            className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-200 ${isActive
                ? 'bg-primary text-white'
                : 'text-typography hover:bg-navPillsBg hover:text-white'
                }`}
        >
            <div className="w-8 h-8 flex justify-center items-center">
                <FontAwesomeIcon icon={icon} size="lg" />
            </div>
            <span className="text-lg font-medium">{name}</span>
        </Link>
    );
}

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // List of navigation items with properties like link and isActive
    const navItems = [
        { name: 'Home', icon: faHome, link: '/' },
        { name: 'About', icon: faUser, link: '/about' },
        { name: 'Portfolio', icon: faBriefcase, link: '/portfolio' },
        { name: 'Contact', icon: faEnvelope, link: '/contact' },
        { name: 'Blog', icon: faBlog, link: '/blog' },
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

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Desktop Navigation - Hidden on mobile and tablet (lg and below) */}
            <aside className="hidden lg:flex fixed top-0 right-1 z-40 h-screen p-4 items-center justify-center bg-slate-950 text-typography">
                <nav>
                    <ul className="flex flex-col gap-5 items-end">
                        {navItems.map((item, index) => (
                            <NavItem
                                key={index}
                                name={item.name}
                                icon={item.icon}
                                link={item.link}
                            />
                        ))}
                        {/* Theme Switcher for Desktop */}
                        <li className="mt-4">
                            <ThemeSwitcher />
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Mobile Navigation - Visible on tablets and mobile (lg and below) */}
            <div className="lg:hidden">
                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="fixed top-4 right-4 z-50 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-200 hover:scale-105"
                    aria-label="Toggle mobile menu"
                >
                    <FontAwesomeIcon
                        icon={isMobileMenuOpen ? faTimes : faBars}
                        size="lg"
                        className="transition-transform duration-200"
                    />
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                        onClick={closeMobileMenu}
                    />
                )}

                {/* Mobile Menu Sidebar */}
                <aside className={`fixed top-0 right-0 z-40 h-screen w-full sm:w-72 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-200 text-typography transform transition-transform duration-300 ease-in-out shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    <div className="p-6 pt-20">
                        {/* Theme Switcher for Mobile */}
                        <div className="mb-6 flex justify-center">
                            <ThemeSwitcher />
                        </div>

                        {/* Navigation Items */}
                        <nav>
                            <ul className="flex flex-col gap-2">
                                {navItems.map((item, index) => (
                                    <li key={index} onClick={closeMobileMenu}>
                                        <MobileNavItem
                                            name={item.name}
                                            icon={item.icon}
                                            link={item.link}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        </>
    );
}
