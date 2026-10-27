import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import CinematicPortrait from './CinematicPortrait';
import resumePdf from '../../assets/Yuvaraj_Guru_CV.pdf';

const STATS = [
    { value: '10+', label: 'Years shipping' },
    { value: '35+', label: 'Projects delivered' },
    { value: '48', label: 'Devs mentored' },
    { value: '15+', label: 'Technologies' },
];

const STAR = 'M100 0 L124 76 L200 100 L124 124 L100 200 L76 124 L0 100 L76 76 Z';

// Comic-print star: a solid core inside a halo of halftone dots
function HalftoneStar({ id, className = '', style }) {
    return (
        <motion.svg viewBox="0 0 200 200" aria-hidden="true" className={className} style={style}>
            <defs>
                <pattern id={`dots-${id}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
                    <circle cx="3" cy="3" r="1.9" fill="#f3eee4" />
                </pattern>
            </defs>
            <path d={STAR} fill={`url(#dots-${id})`} />
            <path d={STAR} fill="#f3eee4" transform="translate(100 100) scale(0.66) translate(-100 -100)" />
        </motion.svg>
    );
}

function Laptop({ rotateX, rotateY, rotateZ, y }) {
    return (
        <div style={{ perspective: 1600 }} className="w-full">
            <motion.div
                style={{ rotateX, rotateY, rotateZ, y, transformStyle: 'preserve-3d' }}
                className="relative mx-auto w-[88%] max-w-[640px]"
            >
                <div className="relative rounded-t-[18px] rounded-b-[6px] bg-[#1a1b1d] p-[2.2%] pb-[4%] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.65)]">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-ink" style={{ containerType: 'inline-size' }}>
                        <CinematicPortrait imageClassName="left-[3%]" />
                        <div className="absolute right-[8%] bottom-[16%] flex flex-col items-center text-ember">
                            <span className="font-heading font-medium tracking-[0.6em] pl-[0.6em]" style={{ fontSize: '1.5cqw' }}>YUVARAJ</span>
                            <span className="font-display font-bold leading-none" style={{ fontSize: '10cqw' }}>GURU</span>
                        </div>
                    </div>
                    <span className="absolute bottom-[0.8%] left-1/2 -translate-x-1/2 font-mono text-[7px] tracking-[0.35em] text-white/30">
                        YG · WORKSTATION
                    </span>
                </div>
                <div className="relative -mx-[6%] h-[16px] rounded-b-[16px] bg-gradient-to-b from-[#d4d4d7] via-[#97989c] to-[#4b4c50]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[16%] h-[6px] rounded-b-[8px] bg-[#6d6e72]" />
                </div>
                <div className="mx-auto mt-6 h-6 w-[80%] rounded-[50%] bg-black/60 blur-xl" />
            </motion.div>
        </div>
    );
}

export default function IntroSection() {
    const ref = useRef(null);
    const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start end', 'end start'] });

    const rotateX = useTransform(p, [0.05, 0.5], [42, 8]);
    const rotateY = useTransform(p, [0.05, 0.5], [-26, -10]);
    const rotateZ = useTransform(p, [0.05, 0.5], [-14, -3]);
    const laptopY = useTransform(p, [0.05, 0.5, 1], [140, 0, -60]);
    const starA = useTransform(p, [0, 1], [-30, 40]);
    const starB = useTransform(p, [0, 1], [20, -35]);
    const starAY = useTransform(p, [0, 1], [80, -80]);

    return (
        <section ref={ref} id="about-intro" className="relative overflow-hidden bg-ink py-28 md:py-40">
            <HalftoneStar id="a" className="absolute -top-6 -right-16 w-[260px] md:w-[380px] opacity-90" style={{ rotate: starA, y: starAY }} />
            <HalftoneStar id="b" className="absolute -bottom-20 -left-20 w-[220px] md:w-[320px] opacity-90" style={{ rotate: starB }} />

            <div className="relative max-w-[1400px] mx-auto px-5 md:px-12 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-16 lg:gap-10 items-center">
                <div>
                    <p className="font-mono text-[11px] tracking-[0.35em] text-cream/45 mb-8">(01) · WHO</p>
                    <p className="font-serif italic text-ember text-2xl md:text-3xl m-0">Hi, I&apos;m a</p>
                    <h2 className="mt-3 mb-0 font-display font-bold uppercase text-cream leading-[0.95] text-[clamp(42px,5.4vw,88px)]">
                        Frontend Architect <span className="font-serif italic normal-case font-normal text-ember">&amp;</span> Product Engineer
                    </h2>
                    <p className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-cream/70">
                        Ten years of turning messy requirements into products people actually use: loyalty programs
                        across Europe for a global retailer, hackathon platforms, search that cut server requests by 20%,
                        and lately, AI tooling that turns a ticket into a pull request.
                    </p>

                    <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
                        {STATS.map((s) => (
                            <div key={s.label} className="border-t border-white/10 pt-4">
                                <dt className="sr-only">{s.label}</dt>
                                <dd className="m-0 font-display font-bold text-4xl md:text-5xl text-cream leading-none">{s.value}</dd>
                                <dd className="m-0 mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-cream/50" aria-hidden="true">{s.label}</dd>
                            </div>
                        ))}
                    </dl>

                    <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 font-mono text-[12px] tracking-[0.2em] uppercase">
                        <Link to="/about" className="text-cream no-underline border-b border-ember/60 pb-1 hover:text-ember transition-colors">
                            The longer story ↗
                        </Link>
                        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="text-cream/70 no-underline border-b border-white/20 pb-1 hover:text-ember transition-colors">
                            Resume (PDF)
                        </a>
                    </div>
                </div>

                <Laptop rotateX={rotateX} rotateY={rotateY} rotateZ={rotateZ} y={laptopY} />
            </div>
        </section>
    );
}
