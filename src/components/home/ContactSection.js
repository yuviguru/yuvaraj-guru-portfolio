import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EMAIL } from '../SiteFooter';

const HEADLINE = "Have a product to ship, a frontend to untangle, or an AI workflow that keeps falling over? Let's build it properly.";
const WORDS = HEADLINE.split(' ');
const HIGHLIGHT_FROM = WORDS.length - 4;

function timeOfDay() {
    const h = new Date().getHours();
    if (h < 5 || h >= 21) return 'tonight';
    if (h < 12) return 'this morning';
    if (h < 17) return 'this afternoon';
    return 'this evening';
}

function Word({ children, progress, range, highlight }) {
    const opacity = useTransform(progress, range, [0.14, 1]);
    return (
        <motion.span style={{ opacity }} className={`inline-block mr-[0.24em] ${highlight ? 'text-ember' : ''}`}>
            {children}
        </motion.span>
    );
}

export default function ContactSection() {
    const headingRef = useRef(null);
    const { scrollYProgress: p } = useScroll({ target: headingRef, offset: ['start 85%', 'end 40%'] });

    return (
        <section id="contact" className="relative bg-ink px-5 md:px-12 pt-24 md:pt-36 pb-24 md:pb-32">
            <p className="m-0 font-heading text-[12px] md:text-sm font-medium tracking-[0.55em] text-cream/80">CONTACT</p>

            <h2 ref={headingRef} className="mt-8 mb-0 max-w-[1100px] font-heading font-bold text-cream leading-[1.08] tracking-[-0.02em] text-[clamp(36px,5.6vw,84px)]">
                {WORDS.map((word, i) => {
                    const start = (i / WORDS.length) * 0.85;
                    return (
                        <Word key={`${word}-${i}`} progress={p} range={[start, start + 0.15]} highlight={i >= HIGHLIGHT_FROM}>
                            {word}
                        </Word>
                    );
                })}
            </h2>

            <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative mt-20 md:mt-28 overflow-hidden rounded-[28px] bg-slate border border-white/5 min-h-[440px] md:min-h-[560px] flex flex-col items-center justify-center text-center px-6 py-20"
            >
                <motion.div
                    aria-hidden="true"
                    animate={{ x: ['-6%', '6%', '-6%'] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -inset-x-[15%] -bottom-[30%] h-[75%]"
                    style={{
                        background: 'radial-gradient(ellipse 55% 50% at 50% 55%, rgba(200,121,79,0.55), rgba(130,80,58,0.25) 50%, transparent 78%)',
                        filter: 'blur(28px)',
                    }}
                />
                <p className="relative m-0 max-w-[720px] font-heading font-bold text-cream/90 leading-[1.15] text-[clamp(28px,3.4vw,50px)] text-balance">
                    Hey there! What are we building {timeOfDay()}?
                </p>
                <div className="relative mt-10 flex flex-wrap justify-center gap-4">
                    <Link
                        to="/contact"
                        className="rounded-full bg-cream text-ink px-8 py-4 font-heading font-medium text-lg no-underline hover:bg-ember transition-colors duration-300"
                    >
                        Start a project
                    </Link>
                    <a
                        href={`mailto:${EMAIL}?subject=${encodeURIComponent('Hi Yuvaraj')}`}
                        className="rounded-full bg-cream text-ink px-8 py-4 font-heading font-medium text-lg no-underline hover:bg-ember transition-colors duration-300"
                    >
                        Say hi
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
