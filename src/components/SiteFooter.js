import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollToTarget, useLenis } from './SmoothScroll';
import portrait from '../assets/images/yuvaraj-headshot-no-bg.png';
import resumePdf from '../assets/Yuvaraj_Guru_CV.pdf';

export const EMAIL = 'k.yuvarajguru@gmail.com';

const SITE_LINKS = [
    { name: 'Work', to: '/portfolio' },
    { name: 'About', to: '/about' },
    { name: 'Writing', to: '/blog' },
    { name: 'Contact', to: '/contact' },
];

const SOCIAL_LINKS = [
    { name: 'GitHub', href: 'https://github.com/yuviguru' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yuvaraj-guru/' },
    { name: 'Resume', href: resumePdf },
];

export default function SiteFooter() {
    const lenis = useLenis();
    const year = new Date().getFullYear();

    return (
        <footer className="relative z-[55] isolate overflow-hidden bg-ink text-cream lg:min-h-[100svh] flex flex-col">
            {/* Blurred, grainy portrait bleeding in from the right */}
            <div aria-hidden="true" className="absolute inset-y-0 right-0 w-full md:w-[60%] -z-10 pointer-events-none">
                <img
                    src={portrait}
                    alt=""
                    width={864}
                    height={1072}
                    loading="lazy"
                    className="absolute bottom-0 right-[-6%] h-[78%] md:h-[88%] w-auto max-w-none object-contain opacity-40 md:opacity-80"
                    style={{
                        filter: 'grayscale(1) contrast(1.2) brightness(0.85) blur(6px)',
                        WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 60% 55%, #000 35%, transparent 80%)',
                        maskImage: 'radial-gradient(ellipse 60% 70% at 60% 55%, #000 35%, transparent 80%)',
                    }}
                />
            </div>

            <div className="flex-1 flex flex-col px-5 md:px-12 pt-14 md:pt-10 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,350px)_1fr] gap-y-2 font-mono text-[12px] md:text-[13px] tracking-[0.14em] uppercase text-cream/60">
                    <span>Architecting products, not pages</span>
                    <span>Chennai, India</span>
                </div>

                <div className="mt-16 md:mt-auto md:pt-24 flex flex-wrap items-center gap-6 md:gap-16">
                    <motion.button
                        type="button"
                        onClick={() => scrollToTarget(lenis, 0)}
                        whileHover={{ y: -4 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                        aria-label="Back to top"
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/15 bg-[#121212] flex items-center justify-center text-3xl text-cream/90 hover:text-ember hover:border-ember/50 transition-colors"
                    >
                        ↑
                    </motion.button>

                    <a
                        href={`mailto:${EMAIL}?subject=${encodeURIComponent('Intro call')}`}
                        className="chamfer group inline-flex items-center gap-3 sm:gap-4 whitespace-nowrap bg-[#3a3734] hover:bg-[#46423e] transition-colors pl-5 pr-3 py-3 no-underline text-cream"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-ember" />
                        <span className="font-heading text-[12px] md:text-[13px] font-medium tracking-[0.16em]">BOOK AN INTRO CALL</span>
                        <span className="font-mono text-[10px] tracking-[0.2em] text-cream/50"><span className="hidden sm:inline">···· </span>15 MIN</span>
                        <span className="w-7 h-7 rounded-full border border-cream/40 flex items-center justify-center text-xs group-hover:rotate-45 transition-transform duration-300">
                            ↗
                        </span>
                    </a>
                </div>

                <div className="mt-14 md:mt-20 grid grid-cols-2 sm:grid-cols-[minmax(0,350px)_1fr] font-mono text-[13px] md:text-[15px] tracking-[0.14em] uppercase leading-7">
                    <ul>
                        {SITE_LINKS.map((l) => (
                            <li key={l.to}>
                                <Link to={l.to} className="text-cream/85 hover:text-ember transition-colors no-underline">
                                    {l.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {SOCIAL_LINKS.map((l) => (
                            <li key={l.name}>
                                <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-cream/85 hover:text-ember transition-colors no-underline">
                                    {l.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <p
                    aria-hidden="true"
                    className="mt-4 font-heading font-black uppercase leading-[0.82] tracking-[-0.04em] text-[19vw] sm:text-[12.5vw] lg:text-[10.5vw] sm:whitespace-nowrap select-none text-transparent bg-clip-text [--solid:60%] [--half:85%] [--gone:115%] sm:[--solid:28%] sm:[--half:52%] sm:[--gone:78%]"
                    style={{ backgroundImage: 'linear-gradient(90deg, #f3eee4 0%, #f3eee4 var(--solid), rgba(243,238,228,0.35) var(--half), rgba(243,238,228,0) var(--gone))' }}
                >
                    <span className="block sm:inline">Yuvaraj</span> <span className="block sm:inline">Guru</span>
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-[minmax(0,350px)_1fr] gap-y-2 font-mono text-[12px] md:text-[14px] tracking-[0.12em] uppercase">
                    <a href={`mailto:${EMAIL}`} className="text-cream/85 hover:text-ember transition-colors no-underline break-all">
                        {EMAIL}
                    </a>
                    <span className="text-cream/45">© {year}</span>
                </div>
            </div>
        </footer>
    );
}
