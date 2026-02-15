import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavItem({ name, icon, link }) {
    const location = useLocation();
    const isActive = location.pathname === link ||
        (link !== '/' && location.pathname.startsWith(link));

    return (
        <li className="relative">
            <Link
                to={link}
                className="group flex items-center no-underline"
            >
                {/* Label - fades in on hover (CSS-only, no layout animation) */}
                <span
                    className="text-xs font-heading font-medium uppercase tracking-wider text-white mr-2 overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                    {name}
                </span>

                {/* Icon circle */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 flex justify-center items-center rounded-full transition-colors duration-200 ${
                        isActive
                            ? 'bg-primary text-white'
                            : 'bg-navPillsBg text-white hover:bg-primary'
                    }`}
                >
                    <FontAwesomeIcon icon={icon} size="lg" />
                </motion.div>

                {/* Active indicator dot */}
                {isActive && (
                    <motion.div
                        layoutId="nav-active"
                        className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                )}
            </Link>
        </li>
    );
}
