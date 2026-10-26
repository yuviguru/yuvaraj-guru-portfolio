import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

// Scroll to an element, an id or a y offset, through Lenis when it is running
export function scrollToTarget(lenis, target, { immediate = false, offset = 0 } = {}) {
    const el = typeof target === 'string' ? document.getElementById(target) : target;
    if (lenis) {
        lenis.scrollTo(el ?? target, { immediate, offset, force: true, duration: 1.4 });
        return;
    }
    if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: immediate ? 'auto' : 'smooth' });
    } else if (el) {
        el.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth' });
    }
}

export default function SmoothScroll({ children }) {
    const [lenis, setLenis] = useState(null);
    const lenisRef = useRef(null);
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
        const instance = new Lenis({ autoRaf: true, lerp: 0.085, wheelMultiplier: 0.95 });
        lenisRef.current = instance;
        setLenis(instance);
        return () => {
            instance.destroy();
            lenisRef.current = null;
        };
    }, []);

    // New page: jump to the top, or to the #section the link asked for.
    // Pages are lazy loaded, so the target may not exist yet; poll briefly.
    useEffect(() => {
        if (!hash) {
            scrollToTarget(lenisRef.current, 0, { immediate: true });
            return undefined;
        }
        let tries = 0;
        let timer;
        const seek = () => {
            const el = document.getElementById(hash.slice(1));
            if (el) {
                scrollToTarget(lenisRef.current, el);
            } else if (tries++ < 40) {
                timer = setTimeout(seek, 60);
            }
        };
        timer = setTimeout(seek, 60);
        return () => clearTimeout(timer);
    }, [pathname, hash]);

    return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
