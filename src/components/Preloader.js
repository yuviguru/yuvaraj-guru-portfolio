import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';

const EASE = [0.76, 0, 0.24, 1];
const SESSION_KEY = 'yg-preloaded';

// Show the preloader once per browser session, never for reduced motion
export function shouldShowPreloader() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    try {
        return !window.sessionStorage.getItem(SESSION_KEY);
    } catch {
        return true;
    }
}

export default function Preloader({ onDone }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const root = document.documentElement;
        root.style.overflow = 'hidden';
        const controls = animate(0, 100, {
            duration: 2.1,
            ease: [0.65, 0, 0.35, 1],
            onUpdate: (v) => setCount(Math.round(v)),
            onComplete: () => {
                try {
                    window.sessionStorage.setItem(SESSION_KEY, '1');
                } catch {
                    // Storage can be blocked; the preloader simply shows again next time
                }
                setTimeout(onDone, 250);
            },
        });
        return () => {
            controls.stop();
            root.style.overflow = '';
        };
    }, [onDone]);

    return (
        <motion.div
            key="preloader"
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 0.9, ease: EASE } }}
            className="fixed inset-0 z-[100] bg-ink text-cream overflow-hidden"
            aria-hidden="true"
        >
            <div className="absolute top-6 left-5 md:left-12 font-mono text-[11px] tracking-[0.3em] text-cream/50">
                PORTFOLIO
            </div>
            <div className="absolute top-6 right-5 md:right-12 font-mono text-[11px] tracking-[0.3em] text-cream/50">
                CHENNAI, IN
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <motion.span
                    initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="font-serif italic text-ember text-4xl md:text-6xl"
                >
                    Hello
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, letterSpacing: '0.1em' }}
                    animate={{ opacity: 1, letterSpacing: '0.55em' }}
                    transition={{ duration: 1.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="font-heading text-[11px] md:text-sm font-medium text-cream/70 pl-[0.55em]"
                >
                    YUVARAJ GURU
                </motion.span>
            </div>

            <div className="absolute bottom-4 right-5 md:right-12 font-display font-bold leading-none text-[22vw] md:text-[14vw] text-cream tabular-nums">
                {count}
            </div>
            <div className="absolute bottom-0 left-0 h-px bg-ember" style={{ width: `${count}%` }} />
        </motion.div>
    );
}
