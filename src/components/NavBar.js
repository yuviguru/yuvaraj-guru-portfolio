// NavBar.js
import React from 'react';
import NavItem from './NavItem';
import { faHome, faUser, faBriefcase, faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    // List of navigation items with properties like link and isActive
    const navItems = [
        { name: 'Home', icon: faHome, link: '/' },
        { name: 'About', icon: faUser, link: '/about' },
        { name: 'Portfolio', icon: faBriefcase, link: '/portfolio' }, // Added Portfolio
        { name: 'Contact', icon: faEnvelope, link: '/contact' },     // Added Contact
        { name: 'Blog', icon: faBlog, link: '/blog' },
        // Add more items as needed
    ];

    return (
        <aside className="fixed top-0 right-1 z-40 h-screen p-4 content-center bg-slate-950 text-typography">
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
                </ul>
            </nav>
        </aside>
    );
}
