// NavBar.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { scrollToTarget, useLenis } from './SmoothScroll';
import resumePdf from '../assets/Yuvaraj_Guru_CV.pdf';

export const NAV_LINKS = [
    { name: 'Home', to: '/' },
    { name: 'Work', to: '/portfolio' },
    { name: 'About', to: '/about' },
    { name: 'Writing', to: '/blog' },
    { name: 'Contact', to: '/contact' },
];

const SECONDARY_LINKS = [
    { name: 'Design System', to: '/design-system' },
    { name: 'Resume', href: resumePdf },
    { name: 'GitHub', href: 'https://github.com/yuviguru' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yuvaraj-guru/' },
];

const EASE = [0.22, 1, 0.36, 1];

export function Wordmark({ className = '' }) {
    return (
        <span className={`font-display font-bold tracking-[0.04em] leading-none ${className}`}>
            GURU
        </span>
    );
}

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const lenis = useLenis();
    const menuRef = useRef(null);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (!open) return undefined;
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        const onClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('keydown', onKey);
        document.addEventListener('mousedown', onClick);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('mousedown', onClick);
        };
    }, [open]);

    const isActive = (to) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to));

    const goHome = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
            scrollToTarget(lenis, 0);
        }
        setOpen(false);
    };

    return (
        <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
            <div className="flex items-center justify-between px-5 md:px-12 pt-4 md:pt-5">
                <Link
                    to="/"
                    onClick={goHome}
                    aria-label="Yuvaraj Guru, home"
                    className="pointer-events-auto text-cream text-[22px] md:text-[26px] no-underline hover:text-ember transition-colors duration-300"
                >
                    <Wordmark />
                </Link>

                <div ref={menuRef} className="relative pointer-events-auto">
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-controls="site-menu"
                        className="group flex items-center gap-4 rounded-full bg-smoke/80 backdrop-blur-md border border-white/10 pl-6 pr-1.5 py-1.5 text-cream shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
                    >
                        <span className="font-heading text-[11px] font-medium tracking-[0.22em] w-12 text-left">
                            {open ? 'CLOSE' : 'MENU'}
                        </span>
                        <span className="relative w-9 h-9 rounded-full bg-white/10 group-hover:bg-ember/80 transition-colors duration-300 flex items-center justify-center">
                            <motion.span
                                animate={{ rotate: open ? 90 : 0 }}
                                transition={{ duration: 0.4, ease: EASE }}
                                className="flex flex-col gap-[3px]"
                            >
                                <span className="block w-[3px] h-[3px] rounded-full bg-cream" />
                                <span className="block w-[3px] h-[3px] rounded-full bg-cream" />
                            </motion.span>
                        </span>
                    </button>

                    <AnimatePresence>
                        {open && (
                            <motion.nav
                                id="site-menu"
                                aria-label="Main"
                                initial={{ opacity: 0, y: -12, scale: 0.97, filter: 'blur(6px)' }}
                                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -8, scale: 0.98, filter: 'blur(4px)' }}
                                transition={{ duration: 0.35, ease: EASE }}
                                style={{ transformOrigin: 'top right' }}
                                className="absolute right-0 top-[calc(100%+12px)] w-[min(calc(100vw-40px),440px)] rounded-[22px] bg-smoke/95 backdrop-blur-xl border border-white/10 px-7 py-6 md:px-9 md:py-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                            >
                                <ul className="flex flex-col">
                                    {NAV_LINKS.map((item, i) => (
                                        <motion.li
                                            key={item.to}
                                            initial={{ opacity: 0, y: 14 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease: EASE }}
                                        >
                                            <Link
                                                to={item.to}
                                                onClick={item.to === '/' ? goHome : () => setOpen(false)}
                                                className={`group flex items-center justify-between py-2 font-heading text-[34px] md:text-[42px] leading-tight no-underline transition-colors duration-300 ${isActive(item.to) ? 'text-ember' : 'text-cream hover:text-ember'}`}
                                            >
                                                {item.name}
                                                <span className="text-base opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                                    ↗
                                                </span>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                                <div className="mt-5 pt-5 border-t border-white/10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.18em] uppercase text-cream/55">
                                    {SECONDARY_LINKS.map((item) =>
                                        item.to ? (
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                onClick={() => setOpen(false)}
                                                className="hover:text-ember transition-colors no-underline"
                                            >
                                                {item.name}
                                            </Link>
                                        ) : (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-ember transition-colors no-underline"
                                            >
                                                {item.name}
                                            </a>
                                        )
                                    )}
                                </div>
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
}
