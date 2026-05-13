import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import YuvarajCV from '../assets/Yuvaraj_Guru_CV.pdf';

export default function FloatingResumeButton({ showSplash }) {
    if (showSplash) return null;

    return (
        <motion.a
            href={YuvarajCV}
            download="Yuvaraj_Guru_CV.pdf"
            aria-label="Download Resume"
            title="Download Resume"
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 flex items-center gap-2 h-12 sm:h-14 pl-3.5 sm:pl-4 pr-3.5 sm:pr-4 bg-primary text-white rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 no-underline overflow-hidden transition-shadow duration-300"
        >
            <span className="absolute inset-0 rounded-full bg-primary opacity-60 animate-ping pointer-events-none [animation-duration:2.6s]" aria-hidden="true" />

            <span className="relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6">
                <FontAwesomeIcon icon={faDownload} className="text-base sm:text-lg" />
            </span>

            <span className="relative font-heading font-semibold uppercase tracking-wide text-xs sm:text-sm whitespace-nowrap max-w-0 opacity-0 group-hover:max-w-[160px] group-hover:opacity-100 group-focus-visible:max-w-[160px] group-focus-visible:opacity-100 group-hover:ml-1 group-focus-visible:ml-1 transition-all duration-300 ease-out">
                Download CV
            </span>
        </motion.a>
    );
}
