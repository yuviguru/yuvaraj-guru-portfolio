import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';

// Helper to read a CSS variable (needed for SVG fill in Safari)
function getCSSVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

// ─── 1. Loyalty Program ────────────────────────────────────────────────────
const LoyaltyDemo = React.memo(function LoyaltyDemo() {
    const count = useMotionValue(0);
    const rounded = useTransform(count, v => Math.round(v).toLocaleString());
    const countries = ['🇩🇪', '🇫🇷', '🇪🇸', '🇮🇹', '🇳🇱'];

    useEffect(() => {
        const controls = animate(count, 12750, { duration: 2.5, ease: 'easeOut' });
        return controls.stop;
    }, [count]);

    return (
        <div className="space-y-3 text-center py-2">
            <div className="text-2xl font-heading font-bold text-primary">
                <motion.span>{rounded}</motion.span>
                <span className="text-sm text-typography-muted ml-1">pts</span>
            </div>
            <div className="text-xs text-typography-muted uppercase tracking-wider">Reward Points</div>
            <div className="flex justify-center gap-2 mt-1">
                {countries.map((flag, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.25, duration: 0.4 }}
                        className="text-xl"
                    >
                        {flag}
                    </motion.span>
                ))}
            </div>
            <div className="text-xs text-typography-muted">Expanding across Europe</div>
        </div>
    );
});

// ─── 2. Hackathon Platform ─────────────────────────────────────────────────
const HackathonDemo = React.memo(function HackathonDemo() {
    const [seconds, setSeconds] = useState(47);
    const steps = ['Register', 'Submit', 'Judge', 'Winner'];
    const [activeStep, setActiveStep] = useState(1);

    useEffect(() => {
        const t = setInterval(() => setSeconds(s => Math.max(0, s - 1)), 1000);
        return () => clearInterval(t);
    }, []);

    useEffect(() => {
        const t = setInterval(() => setActiveStep(s => (s + 1) % steps.length), 1800);
        return () => clearInterval(t);
    }, [steps.length]);

    return (
        <div className="space-y-3 py-2">
            <div className="text-center">
                <div className="font-mono text-2xl font-bold text-primary">
                    00:{String(seconds).padStart(2, '0')}
                </div>
                <div className="text-xs text-typography-muted uppercase tracking-wider">Time Remaining</div>
            </div>
            <div className="flex items-center justify-between px-1">
                {steps.map((step, i) => (
                    <React.Fragment key={step}>
                        <div className="flex flex-col items-center gap-1">
                            <motion.div
                                animate={{
                                    scale: activeStep === i ? 1.15 : 1,
                                    backgroundColor: i <= activeStep
                                        ? 'var(--color-primary)'
                                        : 'var(--color-surface-hover)',
                                }}
                                transition={{ duration: 0.3 }}
                                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-white font-bold border border-borderLight"
                            >
                                {i < activeStep ? '✓' : i + 1}
                            </motion.div>
                            <span className="text-[9px] text-typography-muted">{step}</span>
                        </div>
                        {i < steps.length - 1 && (
                            <motion.div
                                animate={{ opacity: i < activeStep ? 1 : 0.2 }}
                                className="flex-1 h-px mx-1"
                                style={{ background: 'var(--color-primary)' }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
});

// ─── 3. E-commerce Search ──────────────────────────────────────────────────
const EcomSearchDemo = React.memo(function EcomSearchDemo() {
    const facets = [
        { label: 'Size: M' },
        { label: 'Color: Blue' },
        { label: 'Brand: Nike' },
        { label: 'Price: <100' },
    ];
    const rotations = [[0, 2], [0, 1, 2], [1, 3], [0, 3]];
    const [activeFacets, setActiveFacets] = useState([0, 2]);
    const count = useMotionValue(247);
    const rounded = useTransform(count, v => Math.round(v));

    useEffect(() => {
        let i = 0;
        const t = setInterval(() => {
            i = (i + 1) % rotations.length;
            setActiveFacets(rotations[i]);
            animate(count, Math.floor(Math.random() * 300 + 50), { duration: 0.8 });
        }, 2000);
        return () => clearInterval(t);
    }, [count]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="space-y-2 py-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-surface rounded-lg border border-borderLight">
                <span className="text-typography-muted text-xs">🔍</span>
                <span className="text-xs text-typography-muted">clothing...</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
                {facets.map((facet, i) => (
                    <motion.span
                        key={facet.label}
                        animate={{
                            opacity: activeFacets.includes(i) ? 1 : 0.25,
                            scale: activeFacets.includes(i) ? 1 : 0.9,
                        }}
                        transition={{ duration: 0.3 }}
                        className="px-2 py-0.5 rounded-full text-[10px] font-mono border"
                        style={{
                            borderColor: activeFacets.includes(i)
                                ? 'var(--color-primary)'
                                : 'var(--color-border)',
                            color: activeFacets.includes(i)
                                ? 'var(--color-primary)'
                                : 'var(--color-typography-muted)',
                        }}
                    >
                        {facet.label}
                    </motion.span>
                ))}
            </div>
            <div className="text-right text-xs text-typography-muted">
                <motion.span className="text-primary font-mono font-bold">{rounded}</motion.span> results
            </div>
        </div>
    );
});

// ─── 4. Quote & Returns ────────────────────────────────────────────────────
const QuoteReturnsDemo = React.memo(function QuoteReturnsDemo() {
    const steps = [
        { icon: '🛒', label: 'Cart' },
        { icon: '📋', label: 'Quote' },
        { icon: '✅', label: 'Approved' },
        { icon: '↩️', label: 'Return' },
    ];
    const labels = [
        'Preparing bulk order request',
        'Quote submitted for review',
        'Approved — processing order',
        'Return initiated',
    ];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setCurrent(s => (s + 1) % steps.length), 1500);
        return () => clearInterval(t);
    }, [steps.length]);

    return (
        <div className="py-3 space-y-3">
            <div className="flex justify-between items-center px-1">
                {steps.map((step, i) => (
                    <React.Fragment key={step.label}>
                        <motion.div
                            animate={{ scale: current === i ? 1.2 : 1 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-col items-center gap-1"
                        >
                            <motion.div
                                animate={{
                                    backgroundColor: i <= current
                                        ? 'var(--color-primary)'
                                        : 'var(--color-surface-hover)',
                                }}
                                className="w-8 h-8 rounded-full flex items-center justify-center text-sm border border-borderLight"
                            >
                                <span>{step.icon}</span>
                            </motion.div>
                            <span className="text-[9px] text-typography-muted">{step.label}</span>
                        </motion.div>
                        {i < steps.length - 1 && (
                            <motion.div
                                animate={{ opacity: i < current ? 1 : 0.2 }}
                                className="flex-1 h-px mx-1"
                                style={{ background: 'var(--color-primary)' }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="text-center text-xs text-typography-muted px-2"
                >
                    {labels[current]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
});

// ─── 5. Flash Modernization ────────────────────────────────────────────────
const FlashModernDemo = React.memo(function FlashModernDemo() {
    const [sliderX, setSliderX] = useState(50);

    useEffect(() => {
        const keyframes = [50, 25, 70, 25, 50];
        let i = 0;
        const t = setInterval(() => {
            i = (i + 1) % keyframes.length;
            setSliderX(keyframes[i]);
        }, 1200);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="py-2 space-y-2">
            <div className="relative h-14 rounded-lg overflow-hidden border border-borderLight">
                {/* Before — Flash */}
                <div className="absolute inset-0 flex items-center pl-3 bg-surface-hover">
                    <span className="text-[10px] font-mono text-typography-muted">
                        <span className="text-orange-400">Flash</span> / ActionScript
                    </span>
                </div>
                {/* After — Modern */}
                <motion.div
                    animate={{ width: `${sliderX}%` }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="absolute inset-y-0 right-0 flex items-center justify-end pr-3"
                    style={{
                        background: 'linear-gradient(135deg, rgba(167,139,250,0.25) 0%, rgba(52,211,153,0.15) 100%)',
                        borderLeft: '2px solid var(--color-primary)',
                    }}
                >
                    <span className="text-[10px] font-mono text-primary whitespace-nowrap">
                        Vue 3 + Electron
                    </span>
                </motion.div>
            </div>
            <div className="text-center text-[10px] text-typography-muted">
                Legacy → Modern Migration
            </div>
        </div>
    );
});

// ─── 6. Pandemic Postcard ──────────────────────────────────────────────────
const PandemicCommDemo = React.memo(function PandemicCommDemo() {
    // phases: 0=blank, 1=header, 2=body, 3=stamp, 4=sent, then loop
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setPhase(p => (p + 1) % 5), 900);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="flex items-center justify-center py-2">
            <div className="relative w-full max-w-[180px] h-20 border-2 border-borderLight rounded-md bg-surface-hover overflow-hidden">
                {/* Header stripe */}
                <AnimatePresence>
                    {phase >= 1 && (
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            className="absolute top-0 left-0 right-0 h-5"
                            style={{ background: 'var(--color-primary)', opacity: 0.3, transformOrigin: 'left' }}
                        />
                    )}
                </AnimatePresence>
                {/* Body lines */}
                {phase >= 2 && (
                    <div className="absolute top-7 left-3 space-y-1">
                        {[60, 80, 45].map((w, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.12 }}
                                className="h-1.5 rounded-full bg-typography-muted"
                                style={{ width: `${w}%`, opacity: 0.3 }}
                            />
                        ))}
                    </div>
                )}
                {/* Stamp */}
                {phase >= 3 && (
                    <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: -10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="absolute bottom-2 right-2 w-8 h-8 rounded-sm flex items-center justify-center text-[10px] font-bold"
                        style={{ border: '2px solid var(--color-accent)', color: 'var(--color-accent)' }}
                    >
                        ✉
                    </motion.div>
                )}
                {/* Sent overlay */}
                {phase === 4 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: 'rgba(52,211,153,0.1)' }}
                    >
                        <span className="text-xs font-semibold" style={{ color: 'var(--color-accent)' }}>
                            Sent! ✓
                        </span>
                    </motion.div>
                )}
            </div>
        </div>
    );
});

// ─── 7. Resort Booking ─────────────────────────────────────────────────────
const ResortBookingDemo = React.memo(function ResortBookingDemo() {
    const rooms = [
        { id: 1, x: 8,  y: 8,  w: 28, h: 18, label: '101' },
        { id: 2, x: 42, y: 8,  w: 28, h: 18, label: '102' },
        { id: 3, x: 76, y: 8,  w: 28, h: 18, label: '103' },
        { id: 4, x: 8,  y: 34, w: 28, h: 18, label: '201' },
        { id: 5, x: 42, y: 34, w: 28, h: 18, label: '202' },
        { id: 6, x: 76, y: 34, w: 28, h: 18, label: '203' },
    ];
    const sequence = [1, 3, 5, 2, 4, 6];
    const [selected, setSelected] = useState(1);
    const [primaryColor, setPrimaryColor] = useState('#a78bfa');
    const [surfaceHover, setSurfaceHover] = useState('#1e1e30');
    const [borderColor, setBorderColor] = useState('#2a2a40');

    useEffect(() => {
        // Resolve CSS vars for SVG compatibility in Safari
        setPrimaryColor(getCSSVar('--color-primary') || '#a78bfa');
        setSurfaceHover(getCSSVar('--color-surface-hover') || '#1e1e30');
        setBorderColor(getCSSVar('--color-border') || '#2a2a40');
    }, []);

    useEffect(() => {
        let i = 0;
        const t = setInterval(() => {
            i = (i + 1) % sequence.length;
            setSelected(sequence[i]);
        }, 1000);
        return () => clearInterval(t);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const selectedRoom = rooms.find(r => r.id === selected);

    return (
        <div className="py-1">
            <svg viewBox="0 0 112 60" className="w-full h-16">
                {rooms.map(room => (
                    <g key={room.id}>
                        <motion.rect
                            x={room.x} y={room.y} width={room.w} height={room.h} rx={2}
                            animate={{
                                fill: selected === room.id ? primaryColor : surfaceHover,
                                stroke: selected === room.id ? primaryColor : borderColor,
                            }}
                            strokeWidth={1}
                            transition={{ duration: 0.3 }}
                        />
                        <text
                            x={room.x + room.w / 2} y={room.y + room.h / 2 + 3}
                            textAnchor="middle" fontSize={5}
                            fill={selected === room.id ? 'white' : '#7a7890'}
                        >
                            {room.label}
                        </text>
                    </g>
                ))}
            </svg>
            <div className="text-center text-[10px] text-typography-muted -mt-1">
                {selectedRoom ? `Room ${selectedRoom.label} selected` : 'Select a room'}
            </div>
        </div>
    );
});

// ─── 8. Healthcare Dashboard ───────────────────────────────────────────────
const HealthDashDemo = React.memo(function HealthDashDemo() {
    const metrics = [
        { label: 'Appts', value: 24, max: 30 },
        { label: 'Cases', value: 18, max: 25 },
        { label: 'Staff', value: 12, max: 15 },
    ];
    const [bars, setBars] = useState([0, 0, 0]);
    const count = useMotionValue(0);
    const rounded = useTransform(count, v => Math.round(v));

    useEffect(() => {
        const timer = setTimeout(() => {
            setBars(metrics.map(m => (m.value / m.max) * 100));
            const controls = animate(count, 24, { duration: 1.5 });
            return controls.stop;
        }, 300);
        return () => clearTimeout(timer);
    }, [count]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="py-2 space-y-2">
            <div className="flex items-center justify-between">
                <span className="text-[10px] text-typography-muted uppercase tracking-wider">Today's Appointments</span>
                <motion.span className="text-sm font-bold font-mono text-primary">{rounded}</motion.span>
            </div>
            <div className="flex items-end gap-2" style={{ height: 40 }}>
                {metrics.map((m, i) => (
                    <div key={m.label} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full relative bg-surface-hover rounded-t" style={{ height: 32 }}>
                            <motion.div
                                animate={{ height: `${bars[i]}%` }}
                                transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
                                className="absolute bottom-0 left-0 right-0 rounded-t"
                                style={{ background: 'var(--color-primary)' }}
                            />
                        </div>
                        <span className="text-[9px] text-typography-muted">{m.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
});

// ─── 9. Website Modernization ──────────────────────────────────────────────
const WebsiteModernDemo = React.memo(function WebsiteModernDemo() {
    const breakpoints = ['desktop', 'tablet', 'mobile'];
    const widthMap = { desktop: '100%', tablet: '65%', mobile: '38%' };
    const [bp, setBp] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setBp(p => (p + 1) % breakpoints.length), 1400);
        return () => clearInterval(t);
    }, [breakpoints.length]);

    const current = breakpoints[bp];

    return (
        <div className="flex flex-col items-center py-2 gap-2">
            <div className="w-full flex justify-center">
                <motion.div
                    animate={{ width: widthMap[current] }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="border rounded bg-surface-hover overflow-hidden"
                    style={{ height: 44, borderColor: 'var(--color-primary)', opacity: 0.8 }}
                >
                    {/* Browser chrome */}
                    <div className="h-3 flex items-center px-2 gap-1" style={{ background: 'var(--color-primary)', opacity: 0.3 }}>
                        {[0, 1, 2].map(i => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-typography-muted" style={{ opacity: 0.4 }} />
                        ))}
                    </div>
                    <div className="p-1.5 space-y-1">
                        {[90, 70, 50].map((w, i) => (
                            <div key={i} className="h-1.5 rounded-full bg-typography-muted" style={{ width: `${w}%`, opacity: 0.2 }} />
                        ))}
                    </div>
                </motion.div>
            </div>
            <div className="flex gap-3">
                {breakpoints.map((b, i) => (
                    <motion.button
                        key={b}
                        animate={{
                            color: i === bp
                                ? 'var(--color-primary)'
                                : 'var(--color-typography-muted)',
                        }}
                        onClick={() => setBp(i)}
                        className="text-[9px] font-medium capitalize"
                    >
                        {b}
                    </motion.button>
                ))}
            </div>
        </div>
    );
});

// ─── 10. Portfolio Demo ────────────────────────────────────────────────────
const PortfolioDemo = React.memo(function PortfolioDemo() {
    const stack = [
        { label: 'React', color: '#61DAFB' },
        { label: 'Tailwind', color: '#38BDF8' },
        { label: 'Framer', color: '#BB7BF2' },
        { label: 'AI ⚡', color: 'var(--color-accent)' },
    ];
    return (
        <div className="space-y-2 text-center py-2 w-full px-2">
            <div className="text-xs text-typography-muted uppercase tracking-wider">Tech Stack</div>
            <div className="flex flex-wrap justify-center gap-1.5">
                {stack.map(({ label, color }, i) => (
                    <motion.span
                        key={label}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.2, duration: 0.35, type: 'spring', stiffness: 200 }}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ color, border: `1px solid ${color}33`, background: `${color}18` }}
                    >
                        {label}
                    </motion.span>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ delay: 1.2, duration: 3, times: [0, 0.15, 0.85, 1], repeat: Infinity, repeatDelay: 1 }}
                className="text-[10px] font-medium"
                style={{ color: 'var(--color-accent)' }}
            >
                AI-powered · 40% faster dev
            </motion.div>
        </div>
    );
});

// ─── 11. Product Search Demo ───────────────────────────────────────────────
const ProductSearchDemo = React.memo(function ProductSearchDemo() {
    const queries = ['sneakers', 'blue jacket', 'running shoes', 'denim'];
    const [qIdx, setQIdx] = useState(0);
    const [chips, setChips] = useState([true, false, true]);
    const count = useMotionValue(124);
    const rounded = useTransform(count, v => Math.round(v));

    useEffect(() => {
        const t = setInterval(() => {
            setQIdx(i => (i + 1) % queries.length);
            setChips(c => {
                const next = [...c];
                next[Math.floor(Math.random() * next.length)] = !next[Math.floor(Math.random() * next.length)];
                return next;
            });
            animate(count, Math.floor(80 + Math.random() * 200), { duration: 0.6, ease: 'easeOut' });
        }, 1800);
        return () => clearInterval(t);
    }, [count, queries.length]);

    const chipLabels = ['Brand', 'Size', 'Color'];
    return (
        <div className="space-y-2 py-2 px-2 w-full">
            <div className="flex items-center gap-1.5 bg-white/10 rounded-lg px-2 py-1">
                <span className="text-[9px] text-typography-muted">🔍</span>
                <AnimatePresence mode="wait">
                    <motion.span
                        key={qIdx}
                        initial={{ opacity: 0, x: 6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -6 }}
                        transition={{ duration: 0.3 }}
                        className="text-[10px] text-white/80 font-mono"
                    >
                        {queries[qIdx]}
                    </motion.span>
                </AnimatePresence>
            </div>
            <div className="flex gap-1 flex-wrap">
                {chipLabels.map((chip, i) => (
                    <motion.span
                        key={chip}
                        animate={{
                            backgroundColor: chips[i] ? 'var(--color-primary)' : 'rgba(255,255,255,0.08)',
                            color: chips[i] ? '#fff' : 'rgba(255,255,255,0.5)',
                        }}
                        transition={{ duration: 0.4 }}
                        className="text-[9px] px-2 py-0.5 rounded-full font-medium"
                    >
                        {chip}
                    </motion.span>
                ))}
            </div>
            <div className="text-[9px] text-typography-muted text-center">
                <motion.span style={{ color: 'var(--color-primary)' }}>{rounded}</motion.span>
                {' '}results found
            </div>
        </div>
    );
});

// ─── 12. Sales Analytics Demo ──────────────────────────────────────────────
const SalesAnalyticsDemo = React.memo(function SalesAnalyticsDemo() {
    const barData = [
        [55, 70, 45, 80],
        [80, 50, 90, 60],
        [40, 85, 65, 75],
    ];
    const [frame, setFrame] = useState(0);
    const revenue = useMotionValue(42800);
    const revenueRounded = useTransform(revenue, v => `$${Math.round(v / 1000)}k`);

    useEffect(() => {
        const t = setInterval(() => {
            setFrame(f => (f + 1) % barData.length);
            animate(revenue, 30000 + Math.random() * 30000, { duration: 0.8, ease: 'easeOut' });
        }, 1800);
        return () => clearInterval(t);
    }, [revenue]);

    const bars = barData[frame];
    const barColors = ['var(--color-primary)', 'var(--color-accent)', 'var(--color-primary)', 'var(--color-accent)'];

    return (
        <div className="space-y-2 py-2 px-3 w-full">
            <div className="flex items-end gap-1.5 h-10 justify-center">
                {bars.map((h, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="w-5 rounded-t-sm"
                        style={{ background: barColors[i], minHeight: 4 }}
                    />
                ))}
            </div>
            <div className="text-center">
                <div className="text-lg font-bold font-heading" style={{ color: 'var(--color-primary)' }}>
                    <motion.span>{revenueRounded}</motion.span>
                </div>
                <div className="text-[9px] text-typography-muted uppercase tracking-wider">Revenue</div>
            </div>
        </div>
    );
});

// ─── 13. Gaming Demo ──────────────────────────────────────────────────────
const GamingDemo = React.memo(function GamingDemo() {
    const score = useMotionValue(0);
    const scoreRounded = useTransform(score, v => Math.round(v));

    useEffect(() => {
        const controls = animate(score, 8340, { duration: 2.5, ease: 'easeOut' });
        return controls.stop;
    }, [score]);

    return (
        <div className="space-y-2 text-center py-2 w-full px-2">
            <div className="text-[9px] text-typography-muted uppercase tracking-wider font-mono">Score</div>
            <div className="text-2xl font-bold font-mono" style={{ color: 'var(--color-accent)' }}>
                <motion.span>{scoreRounded}</motion.span>
            </div>
            <div className="relative h-6 flex items-center justify-center">
                <motion.div
                    animate={{
                        x: [-30, 30, -30],
                        y: [0, -10, 0, -6, 0],
                    }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-3 h-3 rounded-full"
                    style={{ background: 'var(--color-primary)' }}
                />
            </div>
            <div className="text-[9px] text-typography-muted font-mono">J4F · Play · Win</div>
        </div>
    );
});

// ─── 14. Static Site Demo ─────────────────────────────────────────────────
const StaticSiteDemo = React.memo(function StaticSiteDemo() {
    const perf = useMotionValue(0);
    const perfRounded = useTransform(perf, v => Math.round(v));
    const metrics = ['Performance', 'SEO', 'Accessibility'];

    useEffect(() => {
        const controls = animate(perf, 98, { duration: 2, ease: 'easeOut' });
        return controls.stop;
    }, [perf]);

    return (
        <div className="space-y-2 text-center py-2 w-full px-2">
            <div className="relative w-12 h-12 mx-auto">
                <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
                    <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                    <motion.circle
                        cx="20" cy="20" r="16"
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="100.5"
                        initial={{ strokeDashoffset: 100.5 }}
                        animate={{ strokeDashoffset: 100.5 - (98 / 100) * 100.5 }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[11px] font-bold" style={{ color: 'var(--color-primary)' }}>
                        <motion.span>{perfRounded}</motion.span>
                    </span>
                </div>
            </div>
            <div className="flex justify-center gap-2">
                {metrics.map((m, i) => (
                    <motion.div
                        key={m}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.3 }}
                        className="flex flex-col items-center gap-0.5"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ delay: 0.8 + i * 0.3, duration: 0.4 }}
                            className="w-1.5 h-1.5 rounded-full bg-green-400"
                        />
                        <span className="text-[7px] text-typography-muted">{m.slice(0, 4)}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
});

// ─── 15. Marketing Demo ───────────────────────────────────────────────────
const MarketingDemo = React.memo(function MarketingDemo() {
    const [show, setShow] = useState(false);
    const funnel = [
        { label: 'Visits', pct: 100, color: 'var(--color-primary)' },
        { label: 'Leads', pct: 62, color: 'var(--color-accent)' },
        { label: 'Converts', pct: 28, color: '#34D399' },
    ];

    useEffect(() => {
        const t = setTimeout(() => setShow(true), 2000);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="space-y-2 py-2 px-3 w-full">
            {funnel.map(({ label, pct, color }, i) => (
                <div key={label} className="flex items-center gap-2">
                    <span className="text-[8px] text-typography-muted w-12 text-right">{label}</span>
                    <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ delay: 0.3 + i * 0.25, duration: 0.8, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{ background: color }}
                        />
                    </div>
                    <span className="text-[8px] font-mono" style={{ color }}>{pct}%</span>
                </div>
            ))}
            <AnimatePresence>
                {show && (
                    <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-[9px] font-semibold"
                        style={{ color: '#34D399' }}
                    >
                        🚀 Launch Ready
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});

// ─── 16. Low-Code Builder Demo ────────────────────────────────────────────
const LowCodeBuilderDemo = React.memo(function LowCodeBuilderDemo() {
    const blocks = [
        { label: 'Header', color: 'var(--color-primary)' },
        { label: 'Card', color: 'var(--color-accent)' },
        { label: 'Button', color: '#34D399' },
    ];

    return (
        <div className="space-y-1.5 py-2 px-3 w-full">
            <div className="text-[9px] text-typography-muted text-center uppercase tracking-wider mb-1">Canvas</div>
            {blocks.map(({ label, color }, i) => (
                <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.35, duration: 0.4, type: 'spring', stiffness: 180 }}
                    className="flex items-center gap-2 rounded-lg px-2 py-1 border"
                    style={{ borderColor: `${color}55`, background: `${color}12` }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ delay: 0.8 + i * 0.35, duration: 0.3 }}
                        className="w-2 h-2 rounded-sm"
                        style={{ background: color }}
                    />
                    <span className="text-[9px] font-medium text-white/70">{label}</span>
                    <div className="ml-auto flex gap-0.5">
                        {[1, 2].map(d => (
                            <div key={d} className="w-1 h-1 rounded-full bg-white/20" />
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
});

// ─── 17. TalentOS Demo ────────────────────────────────────────────────────
const TalentOSDemo = React.memo(function TalentOSDemo() {
    const stages = ['Apply', 'Screen', 'Interview', 'Hire'];
    const [active, setActive] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setActive(s => (s + 1) % stages.length), 1600);
        return () => clearInterval(t);
    }, [stages.length]);

    return (
        <div className="space-y-3 py-2 px-2 w-full">
            <div className="text-[9px] text-typography-muted text-center uppercase tracking-wider">Talent Pipeline</div>
            <div className="flex items-center justify-between px-1">
                {stages.map((stage, i) => (
                    <React.Fragment key={stage}>
                        <div className="flex flex-col items-center gap-1">
                            <motion.div
                                animate={{
                                    scale: active === i ? 1.2 : 1,
                                    backgroundColor: i <= active
                                        ? 'var(--color-primary)'
                                        : 'var(--color-surface-hover)',
                                }}
                                transition={{ duration: 0.35 }}
                                className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] text-white font-bold border border-white/10"
                            >
                                {i < active ? '✓' : i + 1}
                            </motion.div>
                            <span className="text-[7px] text-typography-muted">{stage}</span>
                        </div>
                        {i < stages.length - 1 && (
                            <motion.div
                                animate={{ opacity: i < active ? 1 : 0.2 }}
                                className="flex-1 h-px mx-0.5"
                                style={{ background: 'var(--color-primary)' }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
            <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-[9px]"
                style={{ color: 'var(--color-primary)' }}
            >
                {stages[active]}
            </motion.div>
        </div>
    );
});

// ─── 18. Exam Portal Demo ─────────────────────────────────────────────────
const ExamPortalDemo = React.memo(function ExamPortalDemo() {
    const [secs, setSecs] = useState(59);
    const [answered, setAnswered] = useState(3);
    const total = 10;

    useEffect(() => {
        const t = setInterval(() => {
            setSecs(s => {
                if (s <= 0) {
                    setAnswered(a => Math.min(a + 1, total));
                    return 59;
                }
                return s - 1;
            });
        }, 1000);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="space-y-2 py-2 px-3 w-full">
            <div className="flex items-center justify-between">
                <span className="text-[9px] text-typography-muted">Q {answered}/{total}</span>
                <div className="font-mono text-lg font-bold" style={{ color: secs < 15 ? '#F87171' : 'var(--color-primary)' }}>
                    {String(Math.floor(secs / 60)).padStart(2, '0')}:{String(secs % 60).padStart(2, '0')}
                </div>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <motion.div
                    animate={{ width: `${(answered / total) * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'var(--color-primary)' }}
                />
            </div>
            <div className="bg-white/5 rounded-lg px-2 py-1.5 border border-white/10">
                <div className="text-[9px] text-white/70 leading-tight">Which hook manages side effects in React?</div>
            </div>
        </div>
    );
});

// ─── 19. Helper Bots Demo ─────────────────────────────────────────────────
const HelperBotsDemo = React.memo(function HelperBotsDemo() {
    const messages = [
        'How do I apply? 🙋',
        'Upload your CV and complete the assessment!',
        'What skills are needed?',
        'React, TypeScript & problem solving 🚀',
    ];
    const [visible, setVisible] = useState(1);

    useEffect(() => {
        const t = setInterval(() => setVisible(v => Math.min(v + 1, messages.length)), 1200);
        return () => clearInterval(t);
    }, [messages.length]);

    return (
        <div className="space-y-1.5 py-2 px-2 w-full">
            <div className="text-[9px] text-typography-muted text-center uppercase tracking-wider mb-1">AI Assistant</div>
            {messages.slice(0, visible).map((msg, i) => {
                const isBot = i % 2 === 1;
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
                    >
                        <span
                            className="text-[9px] px-2 py-1 rounded-xl max-w-[80%] leading-tight"
                            style={{
                                background: isBot ? 'var(--color-primary)' : 'rgba(255,255,255,0.12)',
                                color: isBot ? '#fff' : 'rgba(255,255,255,0.8)',
                            }}
                        >
                            {msg}
                        </span>
                    </motion.div>
                );
            })}
        </div>
    );
});

// ─── Registry ──────────────────────────────────────────────────────────────
export const DEMO_REGISTRY = {
    loyalty:       LoyaltyDemo,
    hackathon:     HackathonDemo,
    ecomSearch:    EcomSearchDemo,
    quoteReturns:  QuoteReturnsDemo,
    flashModern:   FlashModernDemo,
    pandemicComm:  PandemicCommDemo,
    resortBook:    ResortBookingDemo,
    healthDash:    HealthDashDemo,
    webModern:     WebsiteModernDemo,
    // Personal / Open Source
    portfolio:     PortfolioDemo,
    productSearch: ProductSearchDemo,
    salesAnalytics: SalesAnalyticsDemo,
    gaming:        GamingDemo,
    staticSite:    StaticSiteDemo,
    marketing:     MarketingDemo,
    lowCode:       LowCodeBuilderDemo,
    // In Progress
    talentOS:      TalentOSDemo,
    examPortal:    ExamPortalDemo,
    helperBots:    HelperBotsDemo,
};
