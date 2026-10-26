import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import posts from '../../data/posts';
import { formatDate } from '../../utils/helper';

const LATEST = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

// Resting and fanned-out positions, in paint order: the newest post sits
// in the middle, on top of the other two
const PAPER_POSES = [
    { post: 1, rest: { x: '-14%', y: '6%', rotate: -9 }, open: { x: '-40%', y: '-22%', rotate: -18 } },
    { post: 2, rest: { x: '14%', y: '5%', rotate: 8 }, open: { x: '40%', y: '-20%', rotate: 15 } },
    { post: 0, rest: { x: '0%', y: '0%', rotate: -1 }, open: { x: '0%', y: '-34%', rotate: -2 } },
];

function Paper({ post, pose, index }) {
    return (
        <motion.div
            variants={{ rest: pose.rest, open: pose.open }}
            transition={{ type: 'spring', stiffness: 160, damping: 18, delay: index * 0.03 }}
            className="absolute left-[21%] top-[4%] w-[58%] h-[74%]"
        >
            <Link
                to={`/blog/${post.slug}`}
                className="block h-full rounded-[14px] bg-cream text-ink p-[7%] no-underline shadow-[0_20px_40px_rgba(0,0,0,0.45)] hover:bg-white transition-colors"
            >
                <span className="block font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-ink/50">{formatDate(post.date)}</span>
                <span className="block mt-3 font-heading font-bold text-[15px] md:text-[18px] leading-tight line-clamp-3">{post.title}</span>
                <span className="block mt-4 space-y-2" aria-hidden="true">
                    <span className="block h-[6px] rounded-full bg-ink/10 w-[92%]" />
                    <span className="block h-[6px] rounded-full bg-ink/10 w-[80%]" />
                    <span className="block h-[6px] rounded-full bg-ink/10 w-[86%]" />
                </span>
            </Link>
        </motion.div>
    );
}

export default function NotebookSection() {
    const ref = useRef(null);
    const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start end', 'center center'] });
    const y = useTransform(p, [0, 1], [160, 0]);
    const rotate = useTransform(p, [0, 1], [-16, -5]);
    const glow = useTransform(p, [0.3, 1], [0, 1]);

    return (
        <section ref={ref} id="notebook" className="relative overflow-hidden bg-ink py-28 md:py-40">
            <motion.div
                aria-hidden="true"
                style={{ opacity: glow }}
                className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] max-w-[160vw] bg-[radial-gradient(closest-side,rgba(255,236,218,0.16),rgba(200,121,79,0.06)_55%,transparent)]"
            />

            <p className="relative text-center m-0 mb-16 md:mb-20 font-mono text-[11px] tracking-[0.35em] text-cream/45">
                (03) · THE NOTEBOOK
            </p>

            <motion.div
                style={{ y, rotate }}
                initial="rest"
                whileHover="open"
                whileFocus="open"
                animate="rest"
                className="relative mx-auto w-[min(84vw,500px)] aspect-[5/4]"
            >
                {/* Back of the folder and its tab */}
                <div className="absolute left-[5%] top-[2%] w-[36%] h-[16%] rounded-t-[18px] bg-[#4a423d]" />
                <div className="absolute inset-x-0 bottom-0 top-[9%] rounded-[24px] bg-gradient-to-b from-[#4a423d] to-[#2c2623]" />

                {PAPER_POSES.map((pose, i) => LATEST[pose.post] && (
                    <Paper key={LATEST[pose.post].slug} post={LATEST[pose.post]} pose={pose} index={i} />
                ))}

                {/* Frosted front pocket */}
                <Link
                    to="/blog"
                    aria-label="Open the notebook: all writing"
                    className="absolute inset-x-0 bottom-0 h-[60%] rounded-[24px] no-underline flex items-center justify-center overflow-hidden border-t border-white/25 backdrop-blur-md shadow-[0_30px_70px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.25)]"
                    style={{ background: 'linear-gradient(180deg, rgba(140,124,114,0.72) 0%, rgba(78,68,62,0.92) 100%)' }}
                >
                    <span
                        className="font-serif italic text-[clamp(46px,10vw,92px)] leading-none text-[#e4d9cf] -rotate-[10deg]"
                        style={{ textShadow: '0 1px 0 rgba(255,255,255,0.45), 0 -1px 1px rgba(0,0,0,0.45), 0 10px 24px rgba(0,0,0,0.25)' }}
                    >
                        open me
                    </span>
                </Link>
            </motion.div>

            <p className="relative text-center m-0 mt-16 md:mt-20 px-5 font-hand uppercase text-cream text-lg md:text-2xl tracking-[0.04em]">
                Notes from building with AI. Take them.
            </p>
            <div className="relative text-center mt-6">
                <Link to="/blog" className="font-mono text-[11px] tracking-[0.25em] uppercase text-cream/70 no-underline border-b border-white/20 pb-1 hover:text-ember hover:border-ember/60 transition-colors">
                    Read the notebook ↗
                </Link>
            </div>
        </section>
    );
}
