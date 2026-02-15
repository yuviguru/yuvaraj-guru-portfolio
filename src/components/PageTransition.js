import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 24,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -12,
        transition: {
            duration: 0.15,
            ease: [0.4, 0, 1, 1],
        },
    },
};

export default function PageTransition({ children }) {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            {children}
        </motion.div>
    );
}
