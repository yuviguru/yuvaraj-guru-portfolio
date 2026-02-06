import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button({ text, icon, disabled = false, className = "" }) {
    const isLoading = className.includes('animate-spin');

    return (
        <motion.button
            type="submit"
            disabled={disabled}
            whileHover={!disabled ? { scale: 1.02 } : {}}
            whileTap={!disabled ? { scale: 0.98 } : {}}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className={`relative group cursor-pointer inline-block px-10 py-3 pr-16 bg-transparent border border-primary rounded-full transition-all duration-300 z-10 overflow-hidden before:absolute before:-z-10 before:bg-primary before:rounded-full before:left-0 before:right-0 before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
            <span className="relative z-20 text-typography font-heading font-semibold uppercase text-sm tracking-wide">
                {text}
            </span>
            <span className="absolute right-0 bottom-0 w-[49px] h-[49px] bg-primary rounded-full text-white flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors duration-300">
                <FontAwesomeIcon
                    icon={icon}
                    size="lg"
                    className={isLoading ? 'animate-spin' : ''}
                />
            </span>
        </motion.button>
    );
}
