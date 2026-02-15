import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 400,
        damping: 30,
        restDelta: 0.01,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
            style={{
                scaleX,
                background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
            }}
        />
    );
}
