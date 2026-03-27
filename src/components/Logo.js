import React from 'react';
import { motion } from 'framer-motion';

export const LOGO_LAYOUT_ID = 'brand-logo';

// ── Theme colors ─────────────────────────────────────────────────────
const THEME = {
  primary: '#a78bfa',
  primaryLight: '#c4b5fd',
  primaryLighter: '#ddd6fe',
};

// ── SVG paths — Y integrated inside G ───────────────────────────────
const G_PATH = 'M140 60 A60 60 0 1 0 140 140 M140 100 L170 100';
// Continuous path: left-arm → center → right-arm → back to center → stem
// No M command at junction = no extra round linecap sphere
const Y_PATH = 'M60 60 L100 100 L140 60 L100 100 L100 150';

/**
 * Logo Component - Animated YG Monogram
 *
 * @param {string} size - Size variant: 'splash' | 'nav' | 'small'
 * @param {boolean} animate - Whether to show animations
 * @param {boolean} showGlow - Whether to show glow effect
 */
export default function Logo({ size = 'nav', animate = false, showGlow = true }) {
  const dimensions = {
    splash: { width: 130, height: 130, strokeWidth: 10 },
    nav: { width: 48, height: 48, strokeWidth: 12 },
    small: { width: 24, height: 24, strokeWidth: 16 },
  };

  const dim = dimensions[size] || dimensions.nav;
  const viewBox = "0 0 200 200";

  return (
    <svg
      viewBox={viewBox}
      width={dim.width}
      height={dim.height}
      style={{ display: 'block' }}
    >
      <defs>
        {showGlow && (
          <filter id={`logo-glow-${size}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
        <linearGradient id={`g-grad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={THEME.primary} />
          <stop offset="100%" stopColor={THEME.primaryLight} />
        </linearGradient>
        <linearGradient id={`y-grad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={THEME.primaryLight} />
          <stop offset="100%" stopColor={THEME.primaryLighter} />
        </linearGradient>
      </defs>

      {/* G Path */}
      <motion.path
        d={G_PATH}
        fill="none"
        stroke={`url(#g-grad-${size})`}
        strokeWidth={dim.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={showGlow ? `url(#logo-glow-${size})` : undefined}
        initial={animate ? { pathLength: 0, opacity: 0 } : false}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: animate ? 0.8 : 0, delay: animate ? 0.2 : 0 }}
      />

      {/* Y Path */}
      <motion.path
        d={Y_PATH}
        fill="none"
        stroke={`url(#y-grad-${size})`}
        strokeWidth={dim.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={showGlow ? `url(#logo-glow-${size})` : undefined}
        initial={animate ? { pathLength: 0, opacity: 0 } : false}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: animate ? 0.8 : 0, delay: animate ? 0.4 : 0 }}
      />
    </svg>
  );
}

/**
 * Logo Text Component - "YG" text mark
 * For use in navbar alongside the icon
 */
export function LogoText({ className = "" }) {
  return (
    <span className={`font-heading font-bold text-typography ${className}`}>
      <span className="text-primary">Y</span>
      <span className="text-typography">G</span>
    </span>
  );
}
