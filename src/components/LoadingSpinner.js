import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ className = "", text = "", fullScreen = false }) => {
    const spinner = (
        <div className="relative w-14 h-14">
            {/* Rotating ember arc */}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                    background: 'conic-gradient(from 0deg, rgba(200,121,79,0) 0% 60%, #c8794f 85%, rgba(200,121,79,0) 100%)',
                    mask: 'radial-gradient(circle, transparent 60%, #000 62%)',
                    WebkitMask: 'radial-gradient(circle, transparent 60%, #000 62%)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-[13px] text-cream/80">
                G
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
