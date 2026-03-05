import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

// Theme colors matching the website
const THEME = {
    primary: '#a78bfa',
    primaryLight: '#c4b5fd',
};

const LoadingSpinner = ({ className = "", text = "", fullScreen = false }) => {
    const spinner = (
        <div className="relative" style={{ width: 64, height: 64 }}>
            {/* Rotating energy ring */}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                    background: `conic-gradient(from 0deg, ${THEME.primary}00 0% 60%, ${THEME.primary} 80%, ${THEME.primary}00 100%)`,
                    mask: 'radial-gradient(circle, transparent 55%, #000 57%)',
                    WebkitMask: 'radial-gradient(circle, transparent 55%, #000 57%)',
                    filter: `drop-shadow(0 0 8px ${THEME.primary}40)`,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner breathing ring */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    inset: 6,
                    border: `1px solid ${THEME.primary}20`,
                }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* YG Monogram */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    className="w-[36px] h-[36px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <Logo size="nav" animate={false} showGlow={true} />
                </motion.div>
            </div>
        </div>
    );

    const content = (
        <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
            {spinner}
            {text && (
                <p className="text-typography opacity-70 text-sm font-medium">
                    {text}
                </p>
            )}
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
                {content}
            </div>
        );
    }

    return content;
};

export default LoadingSpinner;
