import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const SPRING_CONFIG = { stiffness: 500, damping: 30, mass: 0.5 };

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const isTouchRef = useRef(false);

    // Motion values (stable refs — never change identity)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const cursorX = useSpring(mouseX, SPRING_CONFIG);
    const cursorY = useSpring(mouseY, SPRING_CONFIG);

    useEffect(() => {
        // Bail early on touch devices or reduced motion
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (isTouchDevice || prefersReducedMotion) {
            isTouchRef.current = true;
            return;
        }

        let visible = false;

        // Mousemove — update motion values directly (no React state)
        const onMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!visible) {
                visible = true;
                setIsVisible(true);
            }
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);
        const onMouseLeave = () => { visible = false; setIsVisible(false); };
        const onMouseEnter = () => { visible = true; setIsVisible(true); };

        // Hover detection — check tagName first (fast), .closest() only as fallback
        const isInteractive = (el) => {
            const tag = el.tagName;
            if (tag === 'A' || tag === 'BUTTON' || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
            if (el.getAttribute?.('role') === 'button') return true;
            if (el.closest?.('a, button')) return true;
            return false;
        };

        const onMouseOver = (e) => { if (isInteractive(e.target)) setIsHovering(true); };
        const onMouseOut = (e) => { if (isInteractive(e.target)) setIsHovering(false); };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseover', onMouseOver, { passive: true });
        document.addEventListener('mouseout', onMouseOut, { passive: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout', onMouseOut);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty deps — motion values are stable refs, state setters are stable

    // Don't render on touch devices
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
        return null;
    }

    // Scale-based sizing (transform only — no layout thrash)
    const ringScale = isHovering ? 1.7 : isClicking ? 0.6 : 1;

    return (
        <>
            {/* Cursor ring — fixed 28px, scale-based resize */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: 28,
                    height: 28,
                    willChange: 'transform',
                }}
            >
                <div
                    className="w-full h-full rounded-full border-2 transition-all duration-150 ease-out"
                    style={{
                        transform: `scale(${ringScale})`,
                        opacity: isVisible ? 1 : 0,
                        borderColor: isHovering ? 'var(--color-primary)' : 'rgba(255,255,255,0.5)',
                        backgroundColor: isHovering ? 'rgba(167, 139, 250, 0.08)' : 'transparent',
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
                    width: 4,
                    height: 4,
                    willChange: 'transform',
                }}
            >
                <div
                    className="w-full h-full rounded-full bg-white transition-opacity duration-100"
                    style={{ opacity: isVisible && !isHovering ? 0.7 : 0 }}
                />
            </motion.div>
        </>
    );
};

export default CustomCursor;
