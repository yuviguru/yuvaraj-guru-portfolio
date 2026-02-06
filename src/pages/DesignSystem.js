import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import PageTitle from '../components/PageTitle';
import PageLayout from '../components/PageLayout';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/motion/StaggerChildren';

/* ------------------------------------------------------------------ */
/*  DATA: Color Palette Tokens                                        */
/* ------------------------------------------------------------------ */
const colorGroups = [
    {
        label: 'Primary',
        tokens: [
            { variable: '--color-primary', name: 'Primary', tailwind: 'primary' },
            { variable: '--color-primary-light', name: 'Primary Light', tailwind: 'primary-light' },
            { variable: '--color-primary-dark', name: 'Primary Dark', tailwind: 'primary-dark' },
            { variable: '--color-accent', name: 'Accent', tailwind: 'accent' },
        ],
    },
    {
        label: 'Surface',
        tokens: [
            { variable: '--color-background', name: 'Background', tailwind: 'background' },
            { variable: '--color-surface', name: 'Surface', tailwind: 'surface' },
            { variable: '--color-surface-hover', name: 'Surface Hover', tailwind: 'surface-hover' },
            { variable: '--color-secondary', name: 'Secondary', tailwind: 'secondary' },
        ],
    },
    {
        label: 'Typography',
        tokens: [
            { variable: '--color-typography', name: 'Typography', tailwind: 'typography' },
            { variable: '--color-typography-muted', name: 'Typography Muted', tailwind: 'typography-muted' },
            { variable: '--color-active-text', name: 'Active Text', tailwind: 'activeText' },
        ],
    },
    {
        label: 'Border & Utility',
        tokens: [
            { variable: '--color-border', name: 'Border', tailwind: 'borderLight' },
            { variable: '--color-nav-pills-bg', name: 'Nav Pills BG', tailwind: 'navPillsBg' },
            { variable: '--color-bg-gray', name: 'BG Gray', tailwind: 'bgLight' },
            { variable: '--color-buttons', name: 'Buttons', tailwind: 'buttons' },
        ],
    },
];

/* ------------------------------------------------------------------ */
/*  DATA: Typography Scale                                            */
/* ------------------------------------------------------------------ */
const typographyScale = [
    { tag: 'H1', className: 'text-5xl lg:text-6xl', font: 'Sora', weight: 800, size: '48 / 60 px', lineHeight: '1.1', sample: 'Design System' },
    { tag: 'H2', className: 'text-4xl lg:text-5xl', font: 'Sora', weight: 700, size: '36 / 48 px', lineHeight: '1.15', sample: 'Section Heading' },
    { tag: 'H3', className: 'text-3xl', font: 'Sora', weight: 700, size: '30 px', lineHeight: '1.2', sample: 'Card Title' },
    { tag: 'H4', className: 'text-2xl', font: 'Sora', weight: 600, size: '24 px', lineHeight: '1.25', sample: 'Sub-heading' },
    { tag: 'H5', className: 'text-xl', font: 'Sora', weight: 600, size: '20 px', lineHeight: '1.3', sample: 'Label Large' },
    { tag: 'H6', className: 'text-lg', font: 'Sora', weight: 600, size: '18 px', lineHeight: '1.4', sample: 'Label Medium' },
    { tag: 'Body', className: 'text-base', font: 'DM Sans', weight: 400, size: '16 px', lineHeight: '1.6', sample: 'Body text used in paragraphs, descriptions, and general content across the portfolio.' },
    { tag: 'Small', className: 'text-sm', font: 'DM Sans', weight: 400, size: '14 px', lineHeight: '1.5', sample: 'Caption text for secondary information and metadata.' },
    { tag: 'Code', className: 'text-sm', font: 'Fira Code', weight: 400, size: '14 px', lineHeight: '1.6', sample: 'const theme = getDesignTokens();' },
];

/* ------------------------------------------------------------------ */
/*  DATA: Spacing Scale                                               */
/* ------------------------------------------------------------------ */
const spacingScale = [
    { label: '4', px: 4, rem: '0.25', tailwind: '1' },
    { label: '8', px: 8, rem: '0.5', tailwind: '2' },
    { label: '12', px: 12, rem: '0.75', tailwind: '3' },
    { label: '16', px: 16, rem: '1', tailwind: '4' },
    { label: '24', px: 24, rem: '1.5', tailwind: '6' },
    { label: '32', px: 32, rem: '2', tailwind: '8' },
    { label: '48', px: 48, rem: '3', tailwind: '12' },
    { label: '64', px: 64, rem: '4', tailwind: '16' },
];

/* ------------------------------------------------------------------ */
/*  DATA: Design Tokens Table (dark / light values)                   */
/* ------------------------------------------------------------------ */
const designTokens = [
    { token: '--color-primary', dark: '#a78bfa', light: '#7c3aed' },
    { token: '--color-primary-light', dark: '#c4b5fd', light: '#a78bfa' },
    { token: '--color-primary-dark', dark: '#7c3aed', light: '#6d28d9' },
    { token: '--color-accent', dark: '#34d399', light: '#059669' },
    { token: '--color-background', dark: '#0a0a0f', light: '#fafaf9' },
    { token: '--color-surface', dark: '#141420', light: '#ffffff' },
    { token: '--color-surface-hover', dark: '#1e1e30', light: '#f5f3ff' },
    { token: '--color-typography', dark: '#f0eef6', light: '#1c1917' },
    { token: '--color-typography-muted', dark: '#7a7890', light: '#78716c' },
    { token: '--color-border', dark: '#2a2a40', light: '#e7e0f0' },
    { token: '--color-nav-pills-bg', dark: '#1a1a2e', light: '#f0ecf9' },
    { token: '--color-bg-gray', dark: '#111118', light: '#f5f3ff' },
    { token: '--color-active-text', dark: '#ffffff', light: '#ffffff' },
    { token: '--color-secondary', dark: '#0a0a0f', light: '#fafaf9' },
    { token: '--color-buttons', dark: 'var(--color-primary)', light: 'var(--color-primary)' },
];

/* ------------------------------------------------------------------ */
/*  HELPERS                                                           */
/* ------------------------------------------------------------------ */
function getComputedColor(variable) {
    if (typeof window === 'undefined') return '';
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

function SectionHeading({ children, subtitle }) {
    return (
        <div className="mb-10 lg:mb-14">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-typography tracking-tight">
                {children}
            </h2>
            {subtitle && (
                <p className="mt-3 text-typography-muted text-base lg:text-lg max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
            <div className="mt-4 h-px w-16 bg-primary rounded-full" />
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  SECTION: Color Palette                                            */
/* ------------------------------------------------------------------ */
function ColorPalette() {
    const [colors, setColors] = useState({});
    const [copiedVar, setCopiedVar] = useState(null);

    useEffect(() => {
        const map = {};
        colorGroups.forEach((g) =>
            g.tokens.forEach((t) => {
                map[t.variable] = getComputedColor(t.variable);
            }),
        );
        setColors(map);
    }, []);

    const handleCopy = useCallback((variable, hex) => {
        navigator.clipboard.writeText(hex || variable);
        setCopiedVar(variable);
        setTimeout(() => setCopiedVar(null), 1500);
    }, []);

    return (
        <section>
            <SectionHeading
                subtitle="Live CSS custom-property swatches. Click any swatch to copy its resolved hex value."
            >
                Color Palette
            </SectionHeading>

            {colorGroups.map((group) => (
                <div key={group.label} className="mb-12">
                    <h3 className="font-heading text-lg font-semibold text-typography-muted uppercase tracking-widest mb-5">
                        {group.label}
                    </h3>
                    <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {group.tokens.map((token) => {
                            const hex = colors[token.variable] || '';
                            const isCopied = copiedVar === token.variable;
                            return (
                                <StaggerItem key={token.variable}>
                                    <motion.button
                                        type="button"
                                        onClick={() => handleCopy(token.variable, hex)}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="w-full text-left rounded-xl border border-borderLight overflow-hidden bg-surface
                                                   transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10 focus:outline-none
                                                   focus:ring-2 focus:ring-primary/50 group"
                                    >
                                        {/* Color preview */}
                                        <div
                                            className="h-24 sm:h-28 lg:h-32 w-full transition-transform duration-300 group-hover:scale-[1.03]"
                                            style={{ backgroundColor: `var(${token.variable})` }}
                                        />
                                        {/* Meta */}
                                        <div className="p-3 lg:p-4">
                                            <p className="text-sm font-semibold text-typography truncate">{token.name}</p>
                                            <p className="text-xs font-mono text-typography-muted mt-1 truncate">
                                                {token.variable}
                                            </p>
                                            <div className="flex items-center justify-between mt-2">
                                                <span className="text-xs font-mono text-primary">
                                                    {hex || '...'}
                                                </span>
                                                <span
                                                    className={`text-[10px] uppercase tracking-wider font-semibold transition-opacity duration-200
                                                                ${isCopied ? 'text-accent opacity-100' : 'text-typography-muted opacity-0 group-hover:opacity-60'}`}
                                                >
                                                    {isCopied ? 'Copied!' : 'Copy'}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.button>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            ))}
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  SECTION: Typography Scale                                         */
/* ------------------------------------------------------------------ */
function TypographyScale() {
    return (
        <section>
            <SectionHeading
                subtitle="Three font families form the typographic hierarchy: Sora for headings, DM Sans for body copy, and Fira Code for code snippets."
            >
                Typography Scale
            </SectionHeading>

            <StaggerContainer className="space-y-0">
                {typographyScale.map((item) => {
                    const isCode = item.font === 'Fira Code';
                    const isHeading = item.font === 'Sora';
                    const fontClass = isCode ? 'font-mono' : isHeading ? 'font-heading' : 'font-sans';
                    return (
                        <StaggerItem key={item.tag}>
                            <div className="group grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-4 lg:gap-8 py-7 border-b border-borderLight last:border-b-0
                                            hover:bg-surface/50 transition-colors duration-200 rounded-lg px-4 -mx-4">
                                {/* Meta column */}
                                <div className="flex flex-row lg:flex-col gap-2 lg:gap-1 items-baseline lg:items-start flex-wrap">
                                    <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                                        {item.tag}
                                    </span>
                                    <span className="text-xs text-typography-muted">{item.font}</span>
                                    <span className="text-xs text-typography-muted">{item.size}</span>
                                    <span className="text-xs text-typography-muted">wt {item.weight}</span>
                                    <span className="text-xs text-typography-muted">lh {item.lineHeight}</span>
                                </div>
                                {/* Sample */}
                                <p
                                    className={`${item.className} ${fontClass} text-typography leading-snug`}
                                    style={{ fontWeight: item.weight }}
                                >
                                    {isCode ? (
                                        <code className="bg-surface px-3 py-1.5 rounded-lg border border-borderLight text-accent">
                                            {item.sample}
                                        </code>
                                    ) : (
                                        item.sample
                                    )}
                                </p>
                            </div>
                        </StaggerItem>
                    );
                })}
            </StaggerContainer>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  SECTION: Component Showcase                                       */
/* ------------------------------------------------------------------ */
function ComponentShowcase() {
    const [loadingBtn, setLoadingBtn] = useState(false);

    const handleLoadingDemo = () => {
        setLoadingBtn(true);
        setTimeout(() => setLoadingBtn(false), 2000);
    };

    return (
        <section>
            <SectionHeading
                subtitle="Interactive component previews demonstrating the core UI building blocks. Each element inherits design tokens for seamless theme switching."
            >
                Component Showcase
            </SectionHeading>

            {/* ---- Buttons ---- */}
            <FadeIn delay={0.05}>
                <div className="mb-14">
                    <h3 className="font-heading text-lg font-semibold text-typography-muted uppercase tracking-widest mb-6">
                        Buttons
                    </h3>
                    <div className="flex flex-wrap gap-4 items-center">
                        {/* Primary */}
                        <motion.button
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            className="px-7 py-3 rounded-full bg-primary text-white font-semibold text-sm
                                       shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300"
                        >
                            Primary
                        </motion.button>

                        {/* Outline */}
                        <motion.button
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            className="px-7 py-3 rounded-full border-2 border-primary text-primary font-semibold text-sm
                                       hover:bg-primary/10 transition-colors duration-300"
                        >
                            Outline
                        </motion.button>

                        {/* Ghost */}
                        <motion.button
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            className="px-7 py-3 rounded-full text-primary font-semibold text-sm
                                       hover:bg-primary/10 transition-colors duration-300"
                        >
                            Ghost
                        </motion.button>

                        {/* Accent */}
                        <motion.button
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            className="px-7 py-3 rounded-full bg-accent text-white font-semibold text-sm
                                       shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-shadow duration-300"
                        >
                            Accent
                        </motion.button>

                        {/* Disabled */}
                        <button
                            disabled
                            className="px-7 py-3 rounded-full bg-borderLight text-typography-muted font-semibold text-sm
                                       cursor-not-allowed opacity-50"
                        >
                            Disabled
                        </button>

                        {/* Loading */}
                        <motion.button
                            whileHover={!loadingBtn ? { scale: 1.04, y: -2 } : {}}
                            whileTap={!loadingBtn ? { scale: 0.96 } : {}}
                            onClick={handleLoadingDemo}
                            disabled={loadingBtn}
                            className={`px-7 py-3 rounded-full font-semibold text-sm min-w-[130px] flex items-center justify-center gap-2
                                       transition-all duration-300
                                       ${loadingBtn
                                    ? 'bg-primary/60 text-white/80 cursor-wait'
                                    : 'bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40'
                                }`}
                        >
                            {loadingBtn ? (
                                <>
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Loading...
                                </>
                            ) : (
                                'Click to Load'
                            )}
                        </motion.button>
                    </div>

                    {/* Button sizes */}
                    <div className="flex flex-wrap gap-4 items-end mt-6">
                        <button className="px-4 py-1.5 rounded-full bg-primary text-white font-semibold text-xs">
                            Small
                        </button>
                        <button className="px-7 py-3 rounded-full bg-primary text-white font-semibold text-sm">
                            Medium
                        </button>
                        <button className="px-9 py-4 rounded-full bg-primary text-white font-semibold text-base">
                            Large
                        </button>
                    </div>
                </div>
            </FadeIn>

            {/* ---- Cards ---- */}
            <FadeIn delay={0.1}>
                <div className="mb-14">
                    <h3 className="font-heading text-lg font-semibold text-typography-muted uppercase tracking-widest mb-6">
                        Cards
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 - Standard */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="rounded-2xl border border-borderLight bg-surface p-6
                                       transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5 group"
                        >
                            <div className="h-3 w-12 rounded-full bg-primary mb-5 group-hover:w-20 transition-all duration-500" />
                            <h4 className="font-heading text-xl font-bold text-typography mb-3">
                                Standard Card
                            </h4>
                            <p className="text-typography-muted text-sm leading-relaxed mb-4">
                                A foundational card component with surface background, subtle border, and a smooth hover lift animation.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                    bg-surface
                                </span>
                                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                    border
                                </span>
                            </div>
                        </motion.div>

                        {/* Card 2 - Gradient border */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="rounded-2xl p-px bg-gradient-to-br from-primary via-accent to-primary-dark
                                       transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10"
                        >
                            <div className="rounded-[15px] bg-surface p-6 h-full">
                                <div className="h-3 w-12 rounded-full bg-accent mb-5" />
                                <h4 className="font-heading text-xl font-bold text-typography mb-3">
                                    Gradient Border
                                </h4>
                                <p className="text-typography-muted text-sm leading-relaxed mb-4">
                                    Uses a gradient background on a wrapper with inner surface padding to achieve the bordered effect.
                                </p>
                                <div className="flex gap-2">
                                    <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                                        gradient
                                    </span>
                                    <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                                        border-trick
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3 - Interactive */}
                        <motion.div
                            whileHover={{ y: -6, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="rounded-2xl border border-borderLight bg-surface p-6 cursor-pointer
                                       transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/40 group"
                        >
                            <div className="h-3 w-12 rounded-full bg-gradient-to-r from-primary to-accent mb-5
                                            group-hover:w-full transition-all duration-700" />
                            <h4 className="font-heading text-xl font-bold text-typography mb-3">
                                Interactive Card
                            </h4>
                            <p className="text-typography-muted text-sm leading-relaxed mb-4">
                                A fully interactive card with tap feedback, border color transition, and an expanding accent bar on hover.
                            </p>
                            <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                                Hover or tap me &rarr;
                            </span>
                        </motion.div>
                    </div>
                </div>
            </FadeIn>

            {/* ---- Form Inputs ---- */}
            <FadeIn delay={0.15}>
                <div className="mb-14">
                    <h3 className="font-heading text-lg font-semibold text-typography-muted uppercase tracking-widest mb-6">
                        Form Inputs
                    </h3>
                    <div className="max-w-xl space-y-5">
                        {/* Text input */}
                        <div>
                            <label className="block text-sm font-semibold text-typography mb-2">Text Input</label>
                            <input
                                type="text"
                                placeholder="Enter your name..."
                                className="w-full bg-surface text-typography py-3 px-5 border border-borderLight rounded-xl
                                           placeholder:text-typography-muted/60 focus:outline-none focus:border-primary
                                           focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                                readOnly
                            />
                        </div>

                        {/* Email input with icon */}
                        <div>
                            <label className="block text-sm font-semibold text-typography mb-2">Email Input</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full bg-surface text-typography py-3 pl-11 pr-5 border border-borderLight rounded-xl
                                               placeholder:text-typography-muted/60 focus:outline-none focus:border-primary
                                               focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                                    readOnly
                                />
                                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-typography-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>

                        {/* Textarea */}
                        <div>
                            <label className="block text-sm font-semibold text-typography mb-2">Textarea</label>
                            <textarea
                                rows={4}
                                placeholder="Tell us about your project..."
                                className="w-full bg-surface text-typography py-3 px-5 border border-borderLight rounded-xl
                                           placeholder:text-typography-muted/60 focus:outline-none focus:border-primary
                                           focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                                readOnly
                            />
                        </div>

                        {/* Error state */}
                        <div>
                            <label className="block text-sm font-semibold text-typography mb-2">Error State</label>
                            <input
                                type="text"
                                placeholder="This field has an error"
                                defaultValue="Invalid input"
                                className="w-full bg-surface text-typography py-3 px-5 border border-red-500 rounded-xl
                                           placeholder:text-typography-muted/60 focus:outline-none focus:ring-2 focus:ring-red-500/20
                                           transition-all duration-200"
                                readOnly
                            />
                            <p className="text-red-500 text-xs mt-2 pl-1">This field is required and must be valid.</p>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* ---- Tags / Badges ---- */}
            <FadeIn delay={0.2}>
                <div className="mb-14">
                    <h3 className="font-heading text-lg font-semibold text-typography-muted uppercase tracking-widest mb-6">
                        Tags &amp; Badges
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/20">
                            React
                        </span>
                        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/20">
                            Vue.js
                        </span>
                        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-surface text-typography-muted border border-borderLight">
                            TypeScript
                        </span>
                        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-primary text-white">
                            Featured
                        </span>
                        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-accent text-white">
                            New
                        </span>
                        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-red-500/15 text-red-400 border border-red-500/20">
                            Deprecated
                        </span>
                        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-yellow-500/15 text-yellow-500 border border-yellow-500/20">
                            Beta
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            Active
                        </span>
                    </div>
                </div>
            </FadeIn>

            {/* ---- Navigation Pills ---- */}
            <FadeIn delay={0.25}>
                <div>
                    <h3 className="font-heading text-lg font-semibold text-typography-muted uppercase tracking-widest mb-6">
                        Navigation Pills
                    </h3>
                    <div className="inline-flex gap-1 bg-navPillsBg rounded-full p-1.5">
                        {['All', 'Design', 'Code', 'Motion'].map((item, i) => (
                            <button
                                key={item}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                                           ${i === 0
                                        ? 'bg-primary text-white shadow-md shadow-primary/30'
                                        : 'text-typography-muted hover:text-typography hover:bg-surface-hover'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Secondary nav style */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        {['Overview', 'Tokens', 'Components', 'Patterns'].map((item, i) => (
                            <button
                                key={item}
                                className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300
                                           ${i === 0
                                        ? 'border-primary bg-primary/10 text-primary'
                                        : 'border-borderLight text-typography-muted hover:border-primary/40 hover:text-typography'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  SECTION: Spacing Scale                                            */
/* ------------------------------------------------------------------ */
function SpacingScale() {
    return (
        <section>
            <SectionHeading
                subtitle="A base-4 spatial system ensures consistent rhythm across layouts, paddings, margins, and gaps."
            >
                Spacing Scale
            </SectionHeading>

            <StaggerContainer className="space-y-4">
                {spacingScale.map((s) => (
                    <StaggerItem key={s.label}>
                        <div className="flex items-center gap-4 lg:gap-6 group">
                            {/* Labels */}
                            <div className="w-20 sm:w-28 flex-shrink-0 text-right">
                                <span className="text-sm font-mono font-semibold text-typography">
                                    {s.px}px
                                </span>
                                <span className="text-xs text-typography-muted ml-2 hidden sm:inline">
                                    {s.rem}rem
                                </span>
                            </div>
                            {/* Visual bar */}
                            <motion.div
                                className="h-8 rounded-lg bg-primary/20 border border-primary/30 relative overflow-hidden
                                           group-hover:bg-primary/30 transition-colors duration-300"
                                style={{ width: `${Math.max(s.px * 1.5, 24)}px` }}
                                whileHover={{ scaleX: 1.05 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/10" />
                            </motion.div>
                            {/* Tailwind class */}
                            <span className="text-xs font-mono text-typography-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                tw: {s.tailwind}
                            </span>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  SECTION: Design Tokens Table                                      */
/* ------------------------------------------------------------------ */
function DesignTokensTable() {
    return (
        <section>
            <SectionHeading
                subtitle="All design tokens with their resolved values in dark and light themes. Tokens power seamless theme switching via CSS custom properties."
            >
                Design Tokens
            </SectionHeading>

            <FadeIn>
                <div className="overflow-x-auto rounded-2xl border border-borderLight">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-surface">
                                <th className="py-4 px-5 text-xs font-heading font-semibold text-typography-muted uppercase tracking-wider border-b border-borderLight">
                                    Token
                                </th>
                                <th className="py-4 px-5 text-xs font-heading font-semibold text-typography-muted uppercase tracking-wider border-b border-borderLight">
                                    Dark Theme
                                </th>
                                <th className="py-4 px-5 text-xs font-heading font-semibold text-typography-muted uppercase tracking-wider border-b border-borderLight">
                                    Light Theme
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {designTokens.map((row, i) => (
                                <tr
                                    key={row.token}
                                    className={`transition-colors duration-150 hover:bg-surface-hover/50
                                               ${i % 2 === 0 ? 'bg-transparent' : 'bg-surface/40'}`}
                                >
                                    <td className="py-3.5 px-5 border-b border-borderLight">
                                        <code className="text-sm font-mono text-typography">
                                            {row.token}
                                        </code>
                                    </td>
                                    <td className="py-3.5 px-5 border-b border-borderLight">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="w-5 h-5 rounded-md border border-borderLight flex-shrink-0 shadow-inner"
                                                style={{ backgroundColor: row.dark.startsWith('var') ? undefined : row.dark }}
                                            />
                                            <code className="text-sm font-mono text-typography-muted">{row.dark}</code>
                                        </div>
                                    </td>
                                    <td className="py-3.5 px-5 border-b border-borderLight">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="w-5 h-5 rounded-md border border-borderLight flex-shrink-0 shadow-inner"
                                                style={{ backgroundColor: row.light.startsWith('var') ? undefined : row.light }}
                                            />
                                            <code className="text-sm font-mono text-typography-muted">{row.light}</code>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </FadeIn>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  SECTION: Design Principles Callout                                */
/* ------------------------------------------------------------------ */
function DesignPrinciplesCallout() {
    const principles = [
        {
            title: 'Token-Driven',
            description: 'Every colour, space, and type decision maps to a CSS custom property, enabling theme switching and a single source of truth between Figma and code.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
            ),
        },
        {
            title: 'Composable',
            description: 'Components are built from atomic primitives -- buttons, tags, inputs -- and composed into larger patterns without hard-coded dependencies.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.421 48.421 0 01-4.185-.428.633.633 0 00-.7.522c-.272 1.62-.693 3.503-1.158 5.075a.634.634 0 00.786.78 48.378 48.378 0 014.089-.776.636.636 0 01.668.673v0c0 .348-.18.665-.39.946a2.12 2.12 0 00-.39 1.224c0 1.036 1.007 1.875 2.25 1.875s2.25-.84 2.25-1.875c0-.447-.142-.862-.39-1.224-.21-.281-.39-.598-.39-.946v0c0-.38.282-.697.668-.673a48.34 48.34 0 014.089.776.634.634 0 00.786-.78c-.465-1.572-.886-3.455-1.158-5.075a.633.633 0 00-.7-.522 48.496 48.496 0 01-4.185.428.64.64 0 01-.657-.643v0z" />
                </svg>
            ),
        },
        {
            title: 'Accessible',
            description: 'Contrast ratios meet WCAG 2.1 AA. Focus rings, semantic markup, and keyboard navigation are built in from day one.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            title: 'Motion-Ready',
            description: 'Framer Motion powers all transitions. Stagger reveals, hover lifts, and page transitions create a cohesive feel without layout thrash.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            ),
        },
    ];

    return (
        <section>
            <SectionHeading
                subtitle="The four pillars guiding every design and engineering decision in this system."
            >
                Design Principles
            </SectionHeading>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {principles.map((p) => (
                    <StaggerItem key={p.title}>
                        <motion.div
                            whileHover={{ y: -3 }}
                            className="rounded-2xl border border-borderLight bg-surface p-6 lg:p-7
                                       hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5
                                       transition-all duration-300 h-full"
                        >
                            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                {p.icon}
                            </div>
                            <h4 className="font-heading text-lg font-bold text-typography mb-2">{p.title}</h4>
                            <p className="text-sm text-typography-muted leading-relaxed">{p.description}</p>
                        </motion.div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
}

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                    */
/* ------------------------------------------------------------------ */
export default function DesignSystem() {
    return (
        <PageTransition>
            <PageLayout containerSize="wide">
                <SEO
                    title="Design System - Tokens, Typography & Components"
                    description="A living design system showcase: color tokens, typography scale, component library, spacing system, and theme-aware design tokens powering Yuvaraj Guru's portfolio."
                    keywords="Design System, Design Tokens, Component Library, Tailwind CSS, CSS Variables, Typography Scale, Color Palette, React Components, Figma to Code"
                    url="https://yuvarajguru.dev/design-system"
                />

                <PageTitle
                    title="Design"
                    highlightTitle="System"
                    bgTitle="tokens"
                />

                {/* Intro blurb */}
                <FadeIn>
                    <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24 px-4">
                        <p className="text-typography-muted text-base lg:text-lg leading-relaxed">
                            A living reference of every design token, typographic rule, and UI component
                            that powers this portfolio. Built to bridge the gap between
                            <span className="text-primary font-semibold"> Figma </span>
                            and
                            <span className="text-accent font-semibold"> code</span>,
                            ensuring pixel-perfect consistency and seamless theme switching.
                        </p>
                    </div>
                </FadeIn>

                {/* Sections with generous vertical spacing */}
                <div className="space-y-24 lg:space-y-32 pb-24 lg:pb-32">
                    <FadeIn><DesignPrinciplesCallout /></FadeIn>
                    <FadeIn><ColorPalette /></FadeIn>
                    <FadeIn><TypographyScale /></FadeIn>
                    <FadeIn><ComponentShowcase /></FadeIn>
                    <FadeIn><SpacingScale /></FadeIn>
                    <FadeIn><DesignTokensTable /></FadeIn>
                </div>
            </PageLayout>
        </PageTransition>
    );
}
