import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
    motion,
    useAnimation,
    useMotionValue,
    useTransform,
    animate,
    AnimatePresence,
} from 'framer-motion';
import PageTitle from '../components/PageTitle';
import PageLayout from '../components/PageLayout';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/motion/FadeIn';

/* ═══════════════════════════════════════════════
   Shared Helpers
   ═══════════════════════════════════════════════ */

function CopyButton({ text }) {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(text).catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <button
            onClick={handleCopy}
            className="text-[11px] uppercase tracking-wider text-typography-muted hover:text-accent transition-colors font-medium select-none"
        >
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
}

function SliderControl({ label, value, onChange, min, max, step, unit = '' }) {
    const percentage = ((value - min) / (max - min)) * 100;
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-typography font-medium">{label}</span>
                <span className="text-sm text-primary font-mono font-semibold tabular-nums">
                    {step < 1 ? value.toFixed(1) : value}
                    {unit}
                </span>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(parseFloat(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer slider-thumb"
                style={{
                    background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${percentage}%, var(--color-border) ${percentage}%, var(--color-border) 100%)`,
                }}
            />
            <style>{`
                .slider-thumb::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 16px; height: 16px; border-radius: 50%;
                    background: var(--color-primary);
                    border: 2px solid var(--color-surface);
                    box-shadow: 0 0 8px rgba(167,139,250,0.4);
                    cursor: pointer;
                }
                .slider-thumb::-moz-range-thumb {
                    width: 16px; height: 16px; border-radius: 50%;
                    background: var(--color-primary);
                    border: 2px solid var(--color-surface);
                    box-shadow: 0 0 8px rgba(167,139,250,0.4);
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
}

function OptionGroup({ label, options, value, onChange }) {
    return (
        <div>
            <label className="text-xs uppercase tracking-widest text-typography-muted font-semibold mb-3 block">
                {label}
            </label>
            <div className="flex gap-2 flex-wrap">
                {options.map((opt) => (
                    <button
                        key={opt}
                        onClick={() => onChange(opt)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 select-none ${
                            value === opt
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'bg-surface-hover text-typography-muted hover:text-typography'
                        }`}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
}

function ToggleSwitch({ label, checked, onChange }) {
    return (
        <button
            onClick={() => onChange(!checked)}
            className="flex items-center gap-3 group cursor-pointer select-none"
            type="button"
        >
            <div
                className={`w-10 h-[22px] rounded-full relative transition-colors duration-200 ${
                    checked ? 'bg-primary' : 'bg-surface-hover border border-borderLight'
                }`}
            >
                <motion.div
                    className="w-4 h-4 rounded-full bg-white absolute top-[3px] shadow-sm"
                    animate={{ left: checked ? 21 : 3 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
            </div>
            <span className="text-sm text-typography-muted group-hover:text-typography transition-colors">
                {label}
            </span>
        </button>
    );
}

function CodeBlock({ label, code }) {
    return (
        <div className="bg-background rounded-xl border border-borderLight overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-borderLight">
                <span className="text-[11px] uppercase tracking-widest text-typography-muted font-semibold">
                    {label}
                </span>
                <CopyButton text={code} />
            </div>
            <pre className="p-4 text-xs sm:text-sm font-mono text-primary-light overflow-x-auto leading-relaxed">
                <code>{code}</code>
            </pre>
        </div>
    );
}

/* ═══════════════════════════════════════════════
   Section 1 — Animation Playground
   ═══════════════════════════════════════════════ */

const ANIMATION_TYPES = ['spring', 'tween', 'keyframes'];

function AnimationPlayground() {
    const [animType, setAnimType] = useState('spring');
    const [stiffness, setStiffness] = useState(200);
    const [damping, setDamping] = useState(20);
    const [duration, setDuration] = useState(0.8);
    const [isAnimated, setIsAnimated] = useState(false);
    const controls = useAnimation();

    const triggerAnimation = useCallback(async () => {
        const forward = !isAnimated;

        let transition;
        if (animType === 'spring') {
            transition = { type: 'spring', stiffness, damping };
        } else if (animType === 'tween') {
            transition = { type: 'tween', duration, ease: 'easeInOut' };
        } else {
            transition = {
                duration,
                times: [0, 0.25, 0.5, 0.75, 1],
            };
        }

        if (animType === 'keyframes') {
            await controls.start({
                x: forward ? [0, -20, 70, 200, 140] : [140, 200, 70, -20, 0],
                scale: forward ? [1, 1.05, 0.9, 1.3, 1.15] : [1.15, 1.3, 0.9, 1.05, 1],
                rotate: forward ? [0, -90, 90, 270, 180] : [180, 270, 90, -90, 0],
                borderRadius: forward
                    ? ['16px', '30%', '50%', '20%', '50%']
                    : ['50%', '20%', '50%', '30%', '16px'],
                transition,
            });
        } else {
            await controls.start({
                x: forward ? 140 : 0,
                scale: forward ? 1.15 : 1,
                rotate: forward ? 180 : 0,
                borderRadius: forward ? '50%' : '16px',
                transition,
            });
        }

        setIsAnimated(forward);
    }, [animType, stiffness, damping, duration, isAnimated, controls]);

    const getCodeSnippet = () => {
        const next = !isAnimated;
        if (animType === 'spring') {
            return `<motion.div
  animate={{
    x: ${next ? 140 : 0},
    scale: ${next ? 1.15 : 1},
    rotate: ${next ? 180 : 0},
    borderRadius: "${next ? '50%' : '16px'}"
  }}
  transition={{
    type: "spring",
    stiffness: ${stiffness},
    damping: ${damping}
  }}
/>`;
        }
        if (animType === 'tween') {
            return `<motion.div
  animate={{
    x: ${next ? 140 : 0},
    scale: ${next ? 1.15 : 1},
    rotate: ${next ? 180 : 0},
    borderRadius: "${next ? '50%' : '16px'}"
  }}
  transition={{
    type: "tween",
    duration: ${duration},
    ease: "easeInOut"
  }}
/>`;
        }
        return `<motion.div
  animate={{
    x: [0, -20, 70, 200, 140],
    scale: [1, 1.05, 0.9, 1.3, 1.15],
    rotate: [0, -90, 90, 270, 180],
    borderRadius: ["16px","30%","50%","20%","50%"]
  }}
  transition={{
    duration: ${duration},
    times: [0, 0.25, 0.5, 0.75, 1]
  }}
/>`;
    };

    return (
        <FadeIn delay={0.1}>
            <div className="mb-20 sm:mb-28">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-typography mb-3">
                    Animation <span className="text-primary">Playground</span>
                </h3>
                <p className="text-typography-muted mb-8 max-w-2xl">
                    Explore how different Framer Motion transition types shape the feel of an animation.
                    Tweak parameters in real time and grab the generated code.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Controls */}
                    <div className="lg:col-span-2 bg-surface border border-borderLight rounded-2xl p-5 sm:p-6 space-y-6">
                        {/* Type selector */}
                        <div>
                            <label className="text-xs uppercase tracking-widest text-typography-muted font-semibold mb-3 block">
                                Transition Type
                            </label>
                            <div className="flex gap-2">
                                {ANIMATION_TYPES.map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setAnimType(t)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 select-none ${
                                            animType === t
                                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                                : 'bg-surface-hover text-typography-muted hover:text-typography'
                                        }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Spring params */}
                        <AnimatePresence mode="wait">
                            {animType === 'spring' && (
                                <motion.div
                                    key="spring-controls"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-5"
                                >
                                    <SliderControl
                                        label="Stiffness"
                                        value={stiffness}
                                        onChange={setStiffness}
                                        min={1}
                                        max={500}
                                        step={1}
                                    />
                                    <SliderControl
                                        label="Damping"
                                        value={damping}
                                        onChange={setDamping}
                                        min={1}
                                        max={50}
                                        step={1}
                                    />
                                </motion.div>
                            )}

                            {/* Tween / Keyframes duration */}
                            {(animType === 'tween' || animType === 'keyframes') && (
                                <motion.div
                                    key="duration-control"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <SliderControl
                                        label="Duration"
                                        value={duration}
                                        onChange={setDuration}
                                        min={0.1}
                                        max={3}
                                        step={0.1}
                                        unit="s"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Play / Reset */}
                        <button
                            onClick={triggerAnimation}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm tracking-wide hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300 active:scale-[0.98] select-none"
                        >
                            {isAnimated ? 'Reset Animation' : 'Play Animation'}
                        </button>
                    </div>

                    {/* Stage + code */}
                    <div className="lg:col-span-3 bg-surface border border-borderLight rounded-2xl p-6 flex flex-col">
                        {/* Stage */}
                        <div className="flex-1 flex items-center justify-center min-h-[220px] sm:min-h-[260px] relative overflow-hidden">
                            {/* subtle grid */}
                            <div
                                className="absolute inset-0 opacity-[0.04]"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(var(--color-typography) 1px, transparent 1px), linear-gradient(90deg, var(--color-typography) 1px, transparent 1px)',
                                    backgroundSize: '40px 40px',
                                }}
                            />
                            <motion.div
                                animate={controls}
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl relative cursor-pointer z-10"
                                style={{
                                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                    boxShadow:
                                        '0 8px 32px rgba(167, 139, 250, 0.3), 0 0 60px rgba(52, 211, 153, 0.15)',
                                }}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.94 }}
                            >
                                {/* specular highlight */}
                                <div
                                    className="absolute inset-0 rounded-[inherit] opacity-60"
                                    style={{
                                        background:
                                            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 60%)',
                                    }}
                                />
                            </motion.div>
                        </div>

                        {/* Code snippet */}
                        <div className="mt-4">
                            <CodeBlock label="Generated Code" code={getCodeSnippet()} />
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}

/* ═══════════════════════════════════════════════
   Section 2 — Micro-Interaction Gallery
   ═══════════════════════════════════════════════ */

function InteractionCard({ title, description, children }) {
    return (
        <div className="bg-surface border border-borderLight rounded-2xl p-5 sm:p-6 flex flex-col group hover:border-primary/30 transition-colors duration-300">
            <div className="mb-4">
                <h4 className="text-sm font-semibold text-typography">{title}</h4>
                <p className="text-xs text-typography-muted mt-0.5">{description}</p>
            </div>
            <div className="flex-1 flex items-center justify-center min-h-[160px] sm:min-h-[180px] relative">
                {children}
            </div>
        </div>
    );
}

/* --- Magnetic Button --- */
function MagneticButton() {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        x.set((e.clientX - cx) * 0.35);
        y.set((e.clientY - cy) * 0.35);
    };

    const handleMouseLeave = () => {
        animate(x, 0, { type: 'spring', stiffness: 300, damping: 20 });
        animate(y, 0, { type: 'spring', stiffness: 300, damping: 20 });
    };

    return (
        <motion.button
            ref={ref}
            style={{ x, y }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileTap={{ scale: 0.92 }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow cursor-pointer select-none"
        >
            Hover Near Me
        </motion.button>
    );
}

/* --- Elastic 3D Card --- */
function ElasticCard() {
    const ref = useRef(null);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width;
        const ny = (e.clientY - rect.top) / rect.height;
        rotateX.set((ny - 0.5) * -20);
        rotateY.set((nx - 0.5) * 20);
    };

    const handleMouseLeave = () => {
        animate(rotateX, 0, { type: 'spring', stiffness: 300, damping: 20 });
        animate(rotateY, 0, { type: 'spring', stiffness: 300, damping: 20 });
    };

    return (
        <div style={{ perspective: 600 }} className="w-full flex items-center justify-center">
            <motion.div
                ref={ref}
                style={{ rotateX, rotateY }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
                className="w-32 h-24 sm:w-36 sm:h-28 rounded-xl border border-borderLight cursor-pointer select-none flex items-center justify-center relative overflow-hidden"
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-surface-hover))',
                    }}
                />
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        background:
                            'radial-gradient(circle at 30% 30%, rgba(167,139,250,0.4), transparent 70%)',
                    }}
                />
                <span className="relative text-xs font-semibold text-typography tracking-wide">
                    3D Tilt
                </span>
            </motion.div>
        </div>
    );
}

/* --- Morphing Shape --- */
function MorphingShape() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{
                borderRadius: isHovered ? '50%' : '16px',
                rotate: isHovered ? 135 : 0,
                scale: isHovered ? 1.1 : 1,
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="w-20 h-20 sm:w-24 sm:h-24 cursor-pointer"
            style={{
                background: isHovered
                    ? 'linear-gradient(135deg, var(--color-accent), var(--color-primary))'
                    : 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                boxShadow: isHovered
                    ? '0 0 40px rgba(52,211,153,0.35)'
                    : '0 0 20px rgba(167,139,250,0.2)',
            }}
        />
    );
}

/* --- Glow Trail --- */
function GlowTrail() {
    const containerRef = useRef(null);
    const glowX = useMotionValue(0);
    const glowY = useMotionValue(0);
    const [isInside, setIsInside] = useState(false);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        glowX.set(e.clientX - rect.left);
        glowY.set(e.clientY - rect.top);
    };

    const bgGlow = useTransform([glowX, glowY], ([px, py]) => {
        return `radial-gradient(180px circle at ${px}px ${py}px, rgba(167,139,250,0.25), rgba(52,211,153,0.1) 40%, transparent 70%)`;
    });

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsInside(true)}
            onMouseLeave={() => setIsInside(false)}
            className="w-full h-full absolute inset-0 rounded-b-2xl cursor-crosshair overflow-hidden"
        >
            <AnimatePresence>
                {isInside && (
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: bgGlow }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </AnimatePresence>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-xs text-typography-muted select-none">
                    {isInside ? 'Follow the glow' : 'Move cursor here'}
                </span>
            </div>
        </motion.div>
    );
}

/* --- Stagger Reveal --- */
function StaggerReveal() {
    const [revealed, setRevealed] = useState(false);
    const words = ['Creative', 'Code', 'Brings', 'Ideas', 'To', 'Life'];

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 min-h-[48px] items-center">
                <AnimatePresence mode="wait">
                    {revealed &&
                        words.map((word, i) => (
                            <motion.span
                                key={word}
                                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 20,
                                    delay: i * 0.08,
                                }}
                                className={`text-lg sm:text-xl font-bold ${
                                    i % 2 === 0 ? 'text-primary' : 'text-accent'
                                }`}
                            >
                                {word}
                            </motion.span>
                        ))}
                </AnimatePresence>
            </div>
            <button
                onClick={() => setRevealed(!revealed)}
                className="px-4 py-1.5 rounded-lg bg-surface-hover text-typography-muted hover:text-typography text-xs font-medium transition-colors border border-borderLight hover:border-primary/30 select-none"
            >
                {revealed ? 'Reset' : 'Click to Reveal'}
            </button>
        </div>
    );
}

/* --- Spring Counter --- */
function SpringCounter() {
    const [count, setCount] = useState(0);
    const animatedCount = useMotionValue(0);
    const rounded = useTransform(animatedCount, (v) => Math.round(v));
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const anim = animate(animatedCount, count, {
            type: 'spring',
            stiffness: 180,
            damping: 18,
        });
        const unsub = rounded.on('change', (v) => setDisplay(v));
        return () => {
            anim.stop();
            unsub();
        };
    }, [count, animatedCount, rounded]);

    return (
        <div className="flex items-center gap-5">
            <button
                onClick={() => setCount((c) => c - 1)}
                className="w-10 h-10 rounded-xl bg-surface-hover border border-borderLight text-typography hover:border-primary/40 hover:text-primary transition-all text-lg font-bold flex items-center justify-center active:scale-90 select-none"
            >
                &minus;
            </button>
            <motion.span
                key={display}
                className="text-4xl sm:text-5xl font-bold text-primary font-mono tabular-nums w-16 text-center select-none"
                initial={{ scale: 1.3, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
                {display}
            </motion.span>
            <button
                onClick={() => setCount((c) => c + 1)}
                className="w-10 h-10 rounded-xl bg-surface-hover border border-borderLight text-typography hover:border-accent/40 hover:text-accent transition-all text-lg font-bold flex items-center justify-center active:scale-90 select-none"
            >
                +
            </button>
        </div>
    );
}

function MicroInteractionGallery() {
    return (
        <FadeIn delay={0.2}>
            <div className="mb-20 sm:mb-28">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-typography mb-3">
                    Micro-Interaction <span className="text-primary">Gallery</span>
                </h3>
                <p className="text-typography-muted mb-8 max-w-2xl">
                    Hover, click, and explore these interaction patterns. Each card demonstrates a
                    technique for crafting delightful user experiences.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <InteractionCard title="Magnetic Button" description="Follows your cursor when near">
                        <MagneticButton />
                    </InteractionCard>
                    <InteractionCard title="Elastic Card" description="Tilts with mouse position">
                        <ElasticCard />
                    </InteractionCard>
                    <InteractionCard title="Morphing Shape" description="Hover to transform">
                        <MorphingShape />
                    </InteractionCard>
                    <InteractionCard title="Glow Trail" description="Move your cursor inside">
                        <GlowTrail />
                    </InteractionCard>
                    <InteractionCard title="Stagger Reveal" description="Click to trigger text animation">
                        <StaggerReveal />
                    </InteractionCard>
                    <InteractionCard title="Spring Counter" description="Click the buttons">
                        <SpringCounter />
                    </InteractionCard>
                </div>
            </div>
        </FadeIn>
    );
}

/* ═══════════════════════════════════════════════
   Section 3 — Component Customizer
   ═══════════════════════════════════════════════ */

const SIZES = ['sm', 'md', 'lg'];
const VARIANTS = ['primary', 'outline', 'ghost'];

function ComponentCustomizer() {
    const [size, setSize] = useState('md');
    const [variant, setVariant] = useState('primary');
    const [isRounded, setIsRounded] = useState(false);
    const [withIcon, setWithIcon] = useState(false);

    const getSizeClasses = () => {
        switch (size) {
            case 'sm':
                return 'px-4 py-1.5 text-sm';
            case 'lg':
                return 'px-8 py-3.5 text-lg';
            default:
                return 'px-6 py-2.5 text-base';
        }
    };

    const getVariantClasses = () => {
        switch (variant) {
            case 'outline':
                return 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white';
            case 'ghost':
                return 'bg-transparent text-primary hover:bg-primary/10';
            default:
                return 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20';
        }
    };

    const getCodeSnippet = () => {
        const sizeMap = {
            sm: 'px-4 py-1.5 text-sm',
            md: 'px-6 py-2.5 text-base',
            lg: 'px-8 py-3.5 text-lg',
        };
        const variantMap = {
            primary:
                'bg-primary text-white\n    hover:bg-primary-dark shadow-lg shadow-primary/20',
            outline:
                'bg-transparent border-2 border-primary\n    text-primary hover:bg-primary hover:text-white',
            ghost: 'bg-transparent text-primary\n    hover:bg-primary/10',
        };

        const classes = [
            sizeMap[size],
            variantMap[variant],
            isRounded ? 'rounded-full' : 'rounded-lg',
            'font-semibold transition-all duration-200',
            withIcon ? 'inline-flex items-center gap-2' : '',
        ]
            .filter(Boolean)
            .join('\n    ');

        const iconJsx = withIcon
            ? `\n  <svg className="w-4 h-4" fill="none"\n    viewBox="0 0 24 24" stroke="currentColor">\n    <path strokeLinecap="round"\n      strokeLinejoin="round" strokeWidth={2}\n      d="M13 7l5 5m0 0l-5 5m5-5H6" />\n  </svg>`
            : '';

        return `<button\n  className="${classes}"\n>\n  Get Started${iconJsx}\n</button>`;
    };

    return (
        <FadeIn delay={0.3}>
            <div className="mb-16">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-typography mb-3">
                    Component <span className="text-primary">Customizer</span>
                </h3>
                <p className="text-typography-muted mb-8 max-w-2xl">
                    Design a button component in real time. Toggle properties and watch both
                    the preview and the generated code update instantly.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Controls */}
                    <div className="bg-surface border border-borderLight rounded-2xl p-5 sm:p-6 space-y-6">
                        <OptionGroup label="Size" options={SIZES} value={size} onChange={setSize} />
                        <OptionGroup
                            label="Variant"
                            options={VARIANTS}
                            value={variant}
                            onChange={setVariant}
                        />
                        <div className="flex flex-wrap gap-6">
                            <ToggleSwitch label="Rounded" checked={isRounded} onChange={setIsRounded} />
                            <ToggleSwitch label="With Icon" checked={withIcon} onChange={setWithIcon} />
                        </div>
                    </div>

                    {/* Preview + code */}
                    <div className="bg-surface border border-borderLight rounded-2xl flex flex-col overflow-hidden">
                        {/* Live preview */}
                        <div className="flex-1 flex items-center justify-center p-8 min-h-[160px] relative">
                            {/* dot grid */}
                            <div
                                className="absolute inset-0 opacity-[0.035]"
                                style={{
                                    backgroundImage:
                                        'radial-gradient(var(--color-typography) 1px, transparent 1px)',
                                    backgroundSize: '20px 20px',
                                }}
                            />
                            <motion.button
                                layout
                                className={`${getSizeClasses()} ${getVariantClasses()} ${
                                    isRounded ? 'rounded-full' : 'rounded-lg'
                                } font-semibold transition-colors duration-200 ${
                                    withIcon ? 'inline-flex items-center gap-2' : ''
                                } relative z-10 cursor-default select-none`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                            >
                                Get Started
                                {withIcon && (
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                )}
                            </motion.button>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-borderLight" />

                        {/* Code */}
                        <CodeBlock label="JSX Output" code={getCodeSnippet()} />
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}

/* ═══════════════════════════════════════════════
   Page Export
   ═══════════════════════════════════════════════ */

export default function Playground() {
    return (
        <PageTransition>
            <PageLayout containerSize="wide">
                <SEO
                    title="Creative Lab - Interactive Playground | Yuvaraj Guru"
                    description="Explore interactive animations, micro-interactions, and live component customization. A creative coding playground built with Framer Motion, React, and Tailwind CSS."
                    keywords="Creative Coding, Interactive Playground, Framer Motion, React Animations, Micro Interactions, Component Customizer, Web Animation, UX Engineering"
                    url="https://yuvarajguru.dev/playground"
                />
                <PageTitle title="Creative" highlightTitle="Lab" bgTitle="play" />

                <FadeIn>
                    <p className="text-center text-typography-muted max-w-2xl mx-auto mb-16 sm:mb-20 -mt-4 text-base sm:text-lg leading-relaxed">
                        A space for experimentation&mdash;where code meets creativity.
                        Play with animations, interactions, and components in real time.
                    </p>
                </FadeIn>

                <AnimationPlayground />
                <MicroInteractionGallery />
                <ComponentCustomizer />
            </PageLayout>
        </PageTransition>
    );
}
