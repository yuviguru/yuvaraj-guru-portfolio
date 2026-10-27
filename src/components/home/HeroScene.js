import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import CinematicPortrait from './CinematicPortrait';
import { useSiteReady } from '../../context/SiteReadyContext';

const EASE = [0.22, 1, 0.36, 1];

export function Sparkle({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
            <path d="M12 0 C12.6 7.2 16.8 11.4 24 12 C16.8 12.6 12.6 16.8 12 24 C11.4 16.8 7.2 12.6 0 12 C7.2 11.4 11.4 7.2 12 0Z" fill="currentColor" />
        </svg>
    );
}

// One sticky scene in three beats: the portrait, a letterbox that collapses
// into a line of light, then the tagline.
export default function HeroScene() {
    const ref = useRef(null);
    const ready = useSiteReady();
    const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] });

    // Beat 1 to 2: the frame closes into a letterbox, then into a line
    const insetY = useTransform(p, [0, 0.36, 0.5], [0, 37, 49.7]);
    const insetX = useTransform(p, [0, 0.36], [0, 3.4]);
    const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}%)`;
    const frameOpacity = useTransform(p, [0.46, 0.54], [1, 0]);
    const imageScale = useTransform(p, [0, 0.5], [1, 1.14]);
    const nameOpacity = useTransform(p, [0, 0.14], [1, 0]);
    const nameY = useTransform(p, [0, 0.14], [0, -50]);
    const hintOpacity = useTransform(p, [0, 0.06], [1, 0]);

    // The flare that lives on the closing seam
    const flareOpacity = useTransform(p, [0.2, 0.38, 0.5, 0.62], [0, 0.7, 1, 0]);
    const flareScale = useTransform(p, [0.2, 0.5, 0.64], [0.35, 1, 1.5]);

    // Beat 3: tagline focuses in
    const tagOpacity = useTransform(p, [0.55, 0.7], [0, 1]);
    const tagScale = useTransform(p, [0.55, 0.78], [1.14, 1]);
    const tagBlurPx = useTransform(p, [0.55, 0.72], [14, 0]);
    const tagFilter = useMotionTemplate`blur(${tagBlurPx}px)`;

    return (
        <section ref={ref} className="relative h-[320vh]" aria-label="Introduction">
            <div className="sticky top-0 h-[100svh] overflow-hidden bg-ink">
                <motion.div className="absolute inset-0" style={{ clipPath, opacity: frameOpacity }}>
                    <motion.div
                        className="absolute inset-0"
                        style={{ scale: imageScale }}
                        initial={{ opacity: 0, filter: 'brightness(0.2)' }}
                        animate={ready ? { opacity: 1, filter: 'brightness(1)' } : undefined}
                        transition={{ duration: 1.8, ease: EASE }}
                    >
                        <CinematicPortrait imageClassName="left-1/2 -translate-x-[78%] sm:left-[2%] sm:translate-x-0 lg:left-[5%]" />
                    </motion.div>

                    <motion.div
                        style={{ opacity: nameOpacity, y: nameY }}
                        className="absolute left-5 right-5 bottom-[9%] sm:left-auto sm:right-[7%] sm:bottom-[14%] flex flex-col items-start sm:items-center"
                    >
                        <h1 className="m-0 flex flex-col items-start sm:items-center text-ember">
                            <motion.span
                                initial={{ opacity: 0, letterSpacing: '0.2em' }}
                                animate={ready ? { opacity: 1, letterSpacing: '0.62em' } : undefined}
                                transition={{ duration: 1.6, delay: 0.3, ease: EASE }}
                                className="font-heading text-[11px] md:text-[13px] font-medium pl-[0.62em] text-ember/90"
                            >
                                YUVARAJ
                            </motion.span>
                            <span className="block overflow-hidden mt-2">
                                <motion.span
                                    initial={{ y: '105%' }}
                                    animate={ready ? { y: '0%' } : undefined}
                                    transition={{ duration: 1.1, delay: 0.45, ease: EASE }}
                                    className="block font-display font-bold leading-[0.9] text-[clamp(72px,10vw,150px)] tracking-[0.02em]"
                                >
                                    GURU
                                </motion.span>
                            </span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={ready ? { opacity: 1 } : undefined}
                            transition={{ duration: 1, delay: 1 }}
                            className="mt-3 font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-cream/60"
                        >
                            Frontend Architect · Product Engineer
                        </motion.p>
                        <Sparkle className="mt-6 w-3 h-3 text-ember animate-twinkle" />
                    </motion.div>
                </motion.div>

                {/* Seam of light */}
                <motion.div
                    aria-hidden="true"
                    style={{ opacity: flareOpacity, scaleX: flareScale }}
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] pointer-events-none"
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,236,220,0.95) 35%, #fff 50%, rgba(255,236,220,0.95) 65%, transparent)',
                            boxShadow: '0 0 14px 2px rgba(255,214,180,0.7), 0 0 60px 10px rgba(200,121,79,0.35)',
                        }}
                    />
                </motion.div>

                {/* Tagline */}
                <motion.div
                    style={{ opacity: tagOpacity, scale: tagScale, filter: tagFilter }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 pointer-events-none"
                >
                    <h2 className="m-0 font-display font-bold uppercase text-cream leading-[0.95] tracking-[0.01em] text-[clamp(40px,6.6vw,104px)] text-balance">
                        I engineer products
                        <br />
                        from pixel to pipeline
                    </h2>
                    <p className="mt-6 md:mt-8 font-serif italic text-ember text-[clamp(18px,2.2vw,32px)] text-balance">
                        interfaces people trust, automations that run themselves.
                    </p>
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    style={{ opacity: hintOpacity }}
                    className="absolute bottom-6 left-5 md:left-12 font-mono text-[10px] tracking-[0.35em] text-cream/45 flex items-center gap-3"
                >
                    <motion.span
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        ↓
                    </motion.span>
                    SCROLL
                </motion.div>
            </div>
        </section>
    );
}
