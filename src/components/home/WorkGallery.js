import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'framer-motion';
import { allProjects } from '../../data/projects';
import ProjectDetailModal from '../portfolio/ProjectDetailModal';
import { scrollToTarget, useLenis } from '../SmoothScroll';

const FEATURED = allProjects.slice(0, 8);

// Each poster gets its own small world, like a set built for one product
const POSTER_THEMES = {
    20: { word: 'AI Studio', bg: 'linear-gradient(160deg, #13205a 0%, #2b45b8 55%, #0b1233 100%)', accent: '#ffd84d', screen: '#fdf6e3', fg: '#14205a', glow: 'rgba(255,216,77,0.35)' },
    21: { word: 'Ticket → PR', bg: 'linear-gradient(160deg, #1c120c 0%, #4a2615 60%, #120b07 100%)', accent: '#f0915f', screen: '#f7efe6', fg: '#3a1d0e', glow: 'rgba(240,145,95,0.4)' },
    22: { word: 'Vibe Refactor', bg: 'linear-gradient(160deg, #0c211c 0%, #1e5446 60%, #08140f 100%)', accent: '#a5f0cf', screen: '#0f1f1a', fg: '#d9fff0', glow: 'rgba(165,240,207,0.3)' },
    12: { word: 'Sales IQ', bg: 'linear-gradient(160deg, #0d1218 0%, #213244 60%, #070a0e 100%)', accent: '#6fd6ff', screen: '#0c141c', fg: '#dff5ff', glow: 'rgba(111,214,255,0.3)' },
    1: { word: 'Loyalty EU', bg: 'linear-gradient(160deg, #26090f 0%, #63182b 60%, #14050a 100%)', accent: '#ffadbe', screen: '#fff4f6', fg: '#4a0f1e', glow: 'rgba(255,173,190,0.35)' },
    11: { word: 'Search', bg: 'linear-gradient(160deg, #1c1606 0%, #574511 60%, #0f0c03 100%)', accent: '#ffd479', screen: '#fffaf0', fg: '#3b2e08', glow: 'rgba(255,212,121,0.35)' },
    2: { word: 'Hackathon', bg: 'linear-gradient(160deg, #100d26 0%, #2f2670 60%, #08061a 100%)', accent: '#b9b5ff', screen: '#0e0c22', fg: '#e8e6ff', glow: 'rgba(185,181,255,0.3)' },
    3: { word: 'Facets', bg: 'linear-gradient(160deg, #061a1a 0%, #0f4545 60%, #031010 100%)', accent: '#73ecd9', screen: '#f2fffc', fg: '#063333', glow: 'rgba(115,236,217,0.3)' },
};

const DEFAULT_THEME = { word: 'Project', bg: 'linear-gradient(160deg, #161412 0%, #3a2a20 60%, #0b0a09 100%)', accent: '#e3a17a', screen: '#f3eee4', fg: '#1d1610', glow: 'rgba(227,161,122,0.3)' };

function Poster({ project }) {
    const theme = POSTER_THEMES[project.id] || DEFAULT_THEME;
    return (
        <div className="relative w-full h-full overflow-hidden rounded-[6px]" style={{ background: theme.bg, containerType: 'inline-size' }}>
            <div className="absolute inset-0 fluted opacity-30" />
            <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 70% 55% at 50% 38%, ${theme.glow}, transparent 70%)` }} />
            <p
                className="absolute top-[5%] inset-x-0 m-0 text-center font-display font-bold uppercase leading-none whitespace-nowrap"
                style={{ fontSize: `${Math.min(10.5, 88 / theme.word.length)}cqw`, color: theme.accent }}
            >
                {theme.word}
            </p>

            <div className="absolute left-1/2 top-[27%] w-[60%] -translate-x-1/2">
                <div className="aspect-[16/10] rounded-[5px] border-[5px] border-[#0d0d0e] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.55)]">
                    <div className="h-full flex flex-col p-[6%]" style={{ background: theme.screen, color: theme.fg }}>
                        <div className="flex gap-[3px]">
                            {[0, 1, 2].map((d) => (
                                <span key={d} className="w-[5px] h-[5px] rounded-full opacity-40" style={{ background: theme.fg }} />
                            ))}
                        </div>
                        <p className="m-0 mt-[7%] font-heading font-bold leading-[1.05]" style={{ fontSize: '3.6cqw' }}>
                            {project.title}
                        </p>
                        <p className="m-0 mt-[4%] leading-snug opacity-70 line-clamp-3" style={{ fontSize: '1.75cqw' }}>
                            {project.impactHeadline}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-[4px]">
                            {project.technologies.slice(0, 3).map((t) => (
                                <span key={t} className="rounded-full border px-[6px] py-[1px] opacity-70" style={{ fontSize: '1.35cqw', borderColor: theme.fg }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-[12%] h-[9px] bg-gradient-to-b from-[#2b2b2e] to-[#101011]" />
                <div className="mx-auto w-[42%] h-[5px] rounded-t-[3px] bg-[#1b1b1d]" />
            </div>

            <div className="absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-t from-black/75 to-transparent" />
            <div className="absolute bottom-[5%] inset-x-[5%] flex justify-between font-mono uppercase tracking-[0.18em] text-white/75" style={{ fontSize: '1.55cqw' }}>
                <span>{project.industry} · {project.period}</span>
                <span>{project.ndaProtected ? 'Under NDA' : project.status === 'in-progress' ? 'Building' : 'Live'}</span>
            </div>
        </div>
    );
}

function useCardSize() {
    const measure = () => {
        const w = Math.round(Math.min(620, Math.max(360, window.innerWidth * 0.4)));
        return { w, h: Math.round(w * 0.68) };
    };
    const [size, setSize] = useState(measure);
    useEffect(() => {
        const onResize = () => setSize(measure());
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    return size;
}

function HelixCard({ project, index, position, size, geometry, onOpen }) {
    const dist = useTransform(position, (v) => Math.abs(v - index));
    const opacity = useTransform(dist, [0, 1.2, 2.6], [1, 0.75, 0]);
    const shade = useTransform(dist, [0, 1.1], [0, 0.6]);
    const pointerEvents = useTransform(dist, (d) => (d < 0.5 ? 'auto' : 'none'));

    return (
        <div
            className="absolute left-0 top-0"
            style={{
                width: size.w,
                height: size.h,
                marginLeft: -size.w / 2,
                marginTop: -size.h / 2,
                transform: `rotateY(${-index * geometry.step}deg) translateZ(${geometry.radius}px) translateY(${index * geometry.dy}px)`,
                backfaceVisibility: 'hidden',
            }}
        >
            <motion.button
                type="button"
                onClick={() => onOpen(project)}
                aria-label={`Open ${project.title}`}
                tabIndex={-1}
                style={{ opacity, pointerEvents }}
                className="group relative block w-full h-full p-0 border-0 bg-transparent text-left"
            >
                <Poster project={project} />
                <motion.span className="absolute inset-0 rounded-[6px] bg-black pointer-events-none" style={{ opacity: shade }} />
                <span className="absolute top-3 right-3 rounded-full bg-black/50 backdrop-blur px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-cream opacity-0 group-hover:opacity-100 transition-opacity">
                    OPEN ↗
                </span>
            </motion.button>
        </div>
    );
}

function Helix({ projects, onOpen }) {
    const ref = useRef(null);
    const lenis = useLenis();
    const size = useCardSize();
    const n = projects.length;
    // Radius is large enough that a neighbour's near edge stays behind the
    // front card: R > (w / 2) * cot(step / 2)
    const geometry = { step: 38, radius: Math.round(size.w * 1.6), dy: Math.round(size.h * 0.62) };

    const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] });
    const position = useTransform(p, [0.04, 0.96], [0, n - 1], { clamp: true });
    const ringTransform = useTransform(
        position,
        (v) => `translateZ(${-geometry.radius}px) translateY(${-v * geometry.dy}px) rotateY(${v * geometry.step}deg)`
    );
    const [active, setActive] = useState(0);
    useMotionValueEvent(position, 'change', (v) => setActive(Math.round(v)));

    const jumpTo = (i) => {
        const el = ref.current;
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const travel = el.offsetHeight - window.innerHeight;
        scrollToTarget(lenis, top + (0.04 + (i / (n - 1)) * 0.92) * travel);
    };

    return (
        <section ref={ref} className="relative bg-ink" style={{ height: `${n * 70 + 100}vh` }} aria-label="Selected projects">
            <div className="sticky top-0 h-[100svh] overflow-hidden" style={{ perspective: '1700px' }}>
                <div className="absolute left-1/2 top-[48%]" style={{ transformStyle: 'preserve-3d' }}>
                    <motion.div style={{ transform: ringTransform, transformStyle: 'preserve-3d' }}>
                        {projects.map((project, i) => (
                            <HelixCard
                                key={project.id}
                                project={project}
                                index={i}
                                position={position}
                                size={size}
                                geometry={geometry}
                                onOpen={onOpen}
                            />
                        ))}
                    </motion.div>
                </div>

                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent pointer-events-none" />

                <div className="absolute top-24 left-5 md:left-12 font-mono text-[11px] tracking-[0.3em] text-cream/50">
                    <span className="text-cream">{String(active + 1).padStart(2, '0')}</span> / {String(n).padStart(2, '0')}
                </div>

                {/* Captions crossfade in one grid cell; "wait" mode would queue up and
                    go stale when the index jumps through several projects at once */}
                <div className="absolute left-5 md:left-12 top-36 max-w-[300px] hidden lg:grid">
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={projects[active].id}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8, pointerEvents: 'none' }}
                            transition={{ duration: 0.35 }}
                            className="col-start-1 row-start-1"
                        >
                            <p className="m-0 font-mono text-[10px] tracking-[0.3em] uppercase text-ember">{projects[active].role}</p>
                            <p className="m-0 mt-3 text-cream/75 leading-relaxed text-[15px]">{projects[active].impactHeadline}</p>
                            <button
                                type="button"
                                onClick={() => onOpen(projects[active])}
                                className="mt-4 font-mono text-[11px] tracking-[0.25em] uppercase text-cream border-b border-ember/60 pb-1 hover:text-ember transition-colors"
                            >
                                Case notes ↗
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <ol className="absolute right-0 bottom-[9%] w-[min(320px,34vw)] m-0 p-0 list-none">
                    {projects.map((project, i) => (
                        <li key={project.id}>
                            <button
                                type="button"
                                onClick={() => jumpTo(i)}
                                className={`relative w-full text-left pl-3 pr-6 py-[2px] text-[15px] leading-snug transition-colors duration-300 ${active === i ? 'bg-cream text-ink' : 'text-cream/75 hover:text-cream'}`}
                            >
                                {active === i && <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-ember" />}
                                {project.title}
                            </button>
                        </li>
                    ))}
                </ol>

                <Link
                    to="/portfolio"
                    className="group absolute left-0 bottom-0 w-[200px] h-[130px] no-underline"
                    aria-label="View all work"
                >
                    <svg viewBox="0 0 200 130" className="absolute inset-0 w-full h-full" aria-hidden="true">
                        <path d="M0 130 L0 32 C18 8 44 -4 62 18 C78 38 74 70 104 92 C130 110 150 112 170 130 Z" className="fill-smoke group-hover:fill-ember transition-colors duration-500" />
                    </svg>
                    <span className="absolute left-5 bottom-6 font-display font-bold text-[13px] tracking-[0.18em] text-cream">VIEW ALL</span>
                </Link>
            </div>
        </section>
    );
}

function StackedWork({ projects, onOpen }) {
    return (
        <section className="relative bg-ink px-5 md:px-12 pb-24" aria-label="Selected projects">
            <div className="grid gap-16 max-w-3xl mx-auto">
                {projects.map((project, i) => (
                    <motion.button
                        key={project.id}
                        type="button"
                        onClick={() => onOpen(project)}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="block w-full text-left p-0 border-0 bg-transparent"
                    >
                        <div className="aspect-[3/2]">
                            <Poster project={project} />
                        </div>
                        <div className="mt-4 flex items-baseline justify-between gap-4">
                            <h3 className="m-0 font-heading font-bold text-2xl text-cream">{project.title}</h3>
                            <span className="font-mono text-[11px] tracking-[0.2em] text-cream/45">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <p className="m-0 mt-2 text-cream/65 leading-relaxed">{project.impactHeadline}</p>
                    </motion.button>
                ))}
                <Link to="/portfolio" className="justify-self-start font-display font-bold tracking-[0.15em] text-cream no-underline border-b border-ember pb-1">
                    VIEW ALL WORK ↗
                </Link>
            </div>
        </section>
    );
}

function useIsWide() {
    const query = '(min-width: 900px)';
    const [wide, setWide] = useState(() => window.matchMedia(query).matches);
    useEffect(() => {
        const mql = window.matchMedia(query);
        const onChange = (e) => setWide(e.matches);
        mql.addEventListener('change', onChange);
        return () => mql.removeEventListener('change', onChange);
    }, []);
    return wide;
}

export default function WorkGallery() {
    const [selected, setSelected] = useState(null);
    const closeModal = useCallback(() => setSelected(null), []);
    const reduceMotion = useReducedMotion();
    const wide = useIsWide();

    return (
        <>
            {wide && !reduceMotion ? (
                <Helix projects={FEATURED} onOpen={setSelected} />
            ) : (
                <StackedWork projects={FEATURED} onOpen={setSelected} />
            )}
            <AnimatePresence>
                {selected && <ProjectDetailModal project={selected} onClose={closeModal} />}
            </AnimatePresence>
        </>
    );
}
