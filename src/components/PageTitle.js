import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

export default function PageTitle({ title, highlightTitle, bgTitle }) {
    return (
        <header className="relative pt-4 pb-8 md:pb-14">
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="m-0 font-mono text-[11px] tracking-[0.35em] uppercase text-cream/45"
            >
                ✦ {bgTitle}
            </motion.p>
            <h1 className="mt-5 mb-0 overflow-hidden">
                <motion.span
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className="block pb-[0.16em] font-display font-bold uppercase text-cream leading-[0.95] text-[clamp(48px,8.5vw,128px)]"
                >
                    {title}{' '}
                    <span className="font-serif italic normal-case font-normal text-ember">{highlightTitle}</span>
                </motion.span>
            </h1>
        </header>
    );
}
