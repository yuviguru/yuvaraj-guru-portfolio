import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

// "WORKS" pulls into focus: the RGB split closes as it reaches the centre
export default function WorksTitle() {
    const ref = useRef(null);
    const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start end', 'end start'] });

    const scale = useTransform(p, [0, 0.45], [0.55, 1]);
    const opacity = useTransform(p, [0.02, 0.22, 0.78, 0.95], [0, 1, 1, 0]);
    const chroma = useTransform(p, [0.1, 0.5, 0.9], [18, 3, 14]);
    const chromaPx = useMotionTemplate`${chroma}px`;

    return (
        <section ref={ref} id="work" className="relative h-[120vh] bg-ink overflow-hidden flex items-center justify-center">
            <motion.h2
                style={{ scale, opacity, '--chroma': chromaPx }}
                className="m-0 font-display font-bold uppercase text-cream text-chroma leading-none tracking-[0.01em] text-[clamp(92px,22vw,340px)]"
            >
                Works
            </motion.h2>
            <p className="absolute bottom-[12%] left-5 md:left-12 m-0 font-mono text-[11px] tracking-[0.35em] text-cream/45">
                (02) · SELECTED WORK
            </p>
        </section>
    );
}
