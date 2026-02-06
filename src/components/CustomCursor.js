import React, { useState, useEffect, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Smooth spring-based cursor position
    const cursorX = useSpring(0, { stiffness: 300, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 300, damping: 28 });

    const handleMouseMove = useCallback((e) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
    }, [cursorX, cursorY, isVisible]);

    const handleMouseDown = useCallback(() => setIsClicking(true), []);
    const handleMouseUp = useCallback(() => setIsClicking(false), []);
    const handleMouseLeave = useCallback(() => setIsVisible(false), []);
    const handleMouseEnter = useCallback(() => setIsVisible(true), []);

    useEffect(() => {
        // Check for touch device or prefers-reduced-motion
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (isTouchDevice || prefersReducedMotion) return;

        const handleHoverStart = (e) => {
            const target = e.target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]');
            if (target) setIsHovering(true);
        };

        const handleHoverEnd = (e) => {
            const target = e.target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]');
            if (target) setIsHovering(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseover', handleHoverStart);
        document.addEventListener('mouseout', handleHoverEnd);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseover', handleHoverStart);
            document.removeEventListener('mouseout', handleHoverEnd);
        };
    }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseEnter]);

    // Don't render on touch devices
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouchDevice) return null;

    return (
        <>
            {/* Cursor ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isHovering ? 48 : isClicking ? 16 : 28,
                    height: isHovering ? 48 : isClicking ? 16 : 28,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    width: { type: 'spring', stiffness: 300, damping: 20 },
                    height: { type: 'spring', stiffness: 300, damping: 20 },
                    opacity: { duration: 0.15 },
                }}
            >
                <div
                    className="w-full h-full rounded-full border-2 border-white transition-colors duration-200"
                    style={{
                        borderColor: isHovering ? 'var(--color-primary)' : 'rgba(255,255,255,0.6)',
                        backgroundColor: isHovering ? 'rgba(167, 139, 250, 0.1)' : 'transparent',
                    }}
                />
            </motion.div>

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isClicking ? 6 : 4,
                    height: isClicking ? 6 : 4,
                    opacity: isVisible && !isHovering ? 0.8 : 0,
                }}
                transition={{ duration: 0.1 }}
            >
                <div className="w-full h-full rounded-full bg-white" />
            </motion.div>
        </>
    );
};

export default CustomCursor;
