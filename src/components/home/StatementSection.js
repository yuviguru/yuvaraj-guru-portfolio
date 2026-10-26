import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

// Horizontal padding of the text block, in vw. The light column travels in
// viewport units, the text mask in % of the text box, so both share this.
const PAD_VW = 6;

function StatementLines() {
    return (
        <>
            Anyone can ship a screen.
            <br />
            I ship the system behind it.
        </>
    );
}

// A column of light sweeps across a ribbed glass wall and lights the words
// as it passes; once it has gone by, the whole line stays lit.
export default function StatementSection() {
    const ref = useRef(null);
    const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] });

    const lightVw = useTransform(p, [0.04, 0.72], [-18, 118]);
    const lightLeft = useMotionTemplate`${lightVw}vw`;
    const fill = useTransform(p, [0.7, 0.9], [0, 1]);
    const textMask = useTransform([lightVw, fill], ([x, f]) => {
        const pct = ((x - PAD_VW) / (100 - PAD_VW * 2)) * 100;
        const lit = `rgba(0,0,0,${f.toFixed(3)})`;
        return `linear-gradient(90deg, ${lit} ${pct - 18}%, #000 ${pct}%, ${lit} ${pct + 18}%)`;
    });
    const wallGlow = useTransform(p, [0, 0.1, 0.8, 1], [0.2, 0.6, 0.6, 0.35]);
    const hintOpacity = useTransform(p, [0.82, 0.95], [0, 1]);

    return (
        <section ref={ref} className="relative h-[260vh]" aria-label="Statement">
            <div className="sticky top-0 h-[100svh] overflow-hidden bg-ink">
                <motion.div className="absolute inset-0 fluted" style={{ opacity: wallGlow }} />

                <motion.div
                    aria-hidden="true"
                    className="absolute top-0 bottom-0 w-[30vw] min-w-[220px] -translate-x-1/2 fluted-mask"
                    style={{ left: lightLeft }}
                >
                    <div
                        className="absolute inset-0"
                        style={{ background: 'radial-gradient(ellipse 48% 70% at 50% 42%, rgba(255,226,198,0.85), rgba(222,140,90,0.4) 40%, rgba(200,121,79,0.08) 70%, transparent 85%)' }}
                    />
                </motion.div>

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_115%,rgba(200,121,79,0.16),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

                <div className="relative h-full flex flex-col justify-center" style={{ paddingLeft: `${PAD_VW}vw`, paddingRight: `${PAD_VW}vw` }}>
                    <h2 className="relative m-0 font-heading font-bold leading-[1] tracking-[-0.025em] text-[clamp(40px,7.4vw,118px)]">
                        <span className="block text-rust" style={{ WebkitTextStroke: '1px rgba(200,121,79,0.28)' }}>
                            <StatementLines />
                        </span>
                        <motion.span
                            aria-hidden="true"
                            className="absolute inset-0 block text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(180deg, #fff1e4 0%, #eab48f 45%, #c8794f 100%)',
                                WebkitMaskImage: textMask,
                                maskImage: textMask,
                            }}
                        >
                            <StatementLines />
                        </motion.span>
                    </h2>
                </div>

                <motion.p
                    style={{ opacity: hintOpacity }}
                    className="absolute bottom-[10%] right-5 md:right-[6vw] m-0 font-mono text-[10px] md:text-[11px] tracking-[0.42em] text-ember"
                >
                    PROOF, NOT PROMISES ↓
                </motion.p>
            </div>
        </section>
    );
}
