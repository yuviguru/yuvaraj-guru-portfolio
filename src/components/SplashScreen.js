import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Logo, { LOGO_LAYOUT_ID } from './Logo';

// ─────────────────────────────────────────────────────────────────────
// PREMIUM 3D SPLASH — INTEGRATED YG MONOGRAM
// Glass morphism + rotating energy ring + SVG stroke draw + glow
// Colors: Primary violet palette only
// ─────────────────────────────────────────────────────────────────────

// ── Theme colors ─────────────────────────────────────────────────────
// Using only primary violet palette - no accent colors
const THEME = {
  primary: '#a78bfa',
  primaryLight: '#c4b5fd',
  primaryLighter: '#ddd6fe',
  primaryDark: '#7c3aed',
  primaryDarker: '#5b21b6',
  background: '#0a0a0f',
  surface: '#141420',
  white: '#ffffff',
};

// ── Spark particles (burst outward after draw) ──────────────────────
const createSparks = () =>
  Array.from({ length: 16 }, (_, i) => {
    const angle = (i / 16) * Math.PI * 2;
    const radius = 120 + Math.random() * 60;
    const colors = [THEME.primary, THEME.primaryLight, THEME.primaryLighter, THEME.white];
    return {
      id: i,
      endX: Math.cos(angle) * radius,
      endY: Math.sin(angle) * radius,
      size: 1.5 + Math.random() * 2,
      delay: 1.8 + Math.random() * 0.4,
      color: colors[i % colors.length],
    };
  });

export default function SplashScreen() {
  const sparks = useMemo(createSparks, []);

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 1200px 700px at 50% 45%, ${THEME.surface} 0%, ${THEME.background} 55%, #000 100%)`,
      }}
    >
      {/* ── Ambient glow behind everything ─────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '380px',
          height: '380px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: `
            radial-gradient(closest-side, ${THEME.primary}15, transparent 70%),
            radial-gradient(closest-side at 30% 30%, ${THEME.primaryLight}10, transparent 65%),
            radial-gradient(closest-side at 70% 80%, ${THEME.primaryLighter}08, transparent 65%)
          `,
          filter: 'blur(40px)',
        }}
      />

      {/* ── The main stage ────────────────────────────────────────── */}
      <div className="relative" style={{ width: '220px', height: '220px' }}>

        {/* ── ROTATING ENERGY RING (conic gradient with theme colors) ─ */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 180deg,
              ${THEME.primary}00 0% 8%,
              ${THEME.primary} 8% 14%,
              ${THEME.primary}00 14% 41%,
              ${THEME.primary} 41% 47%,
              ${THEME.primary}00 47% 74%,
              ${THEME.primary} 74% 80%,
              ${THEME.primary}00 80% 100%)`,
            mask: 'radial-gradient(circle, transparent 57%, #000 58%)',
            WebkitMask: 'radial-gradient(circle, transparent 57%, #000 58%)',
            filter: `drop-shadow(0 0 22px ${THEME.primary}40)`,
          }}
          initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
          animate={{ opacity: 0.9, scale: 1, rotate: 360 }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 },
            scale: { duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 2.4, repeat: Infinity, ease: 'linear' },
          }}
        />

        {/* ── Inner breathing ring ─────────────────────────────────── */}
        <motion.div
          className="absolute rounded-full"
          style={{
            inset: '18px',
            border: `1px solid ${THEME.primary}20`,
            boxShadow: `inset 0 0 0 1px ${THEME.primary}10, 0 0 0 1px ${THEME.primaryLight}08`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.03, 1] }}
          transition={{
            duration: 1.8,
            delay: 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* ── SVG MONOGRAM — Logo animation ─────────────────────────── */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            layoutId={LOGO_LAYOUT_ID}
            transition={{ type: 'spring', stiffness: 260, damping: 28, mass: 0.9 }}
            className="w-[130px] h-[130px]"
          >
            <Logo size="splash" animate={true} showGlow={true} />
          </motion.div>
        </div>

        {/* ORBIT DOTS removed */}

        {/* ── SPARK BURST ──────────────────────────────────────────── */}
        {sparks.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full"
            style={{
              width: s.size,
              height: s.size,
              background: s.color,
              boxShadow: `0 0 8px ${s.color}80`,
              top: '50%',
              left: '50%',
            }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{
              x: s.endX,
              y: s.endY,
              opacity: [0, 0.9, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 0.9,
              delay: s.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>

      {/* ── Tagline ───────────────────────────────────────────────── */}
      <motion.div
        className="absolute flex flex-col items-center gap-3"
        style={{ bottom: 'calc(50% - 150px)' }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            style={{ height: '1px', background: `linear-gradient(to right, transparent, ${THEME.primary}50)` }}
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.7, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <p
            className="font-mono uppercase"
            style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: `${THEME.primary}99`,
            }}
          >
            Crafting Experiences
          </p>
          <motion.div
            style={{ height: '1px', background: `linear-gradient(to left, transparent, ${THEME.primaryLight}50)` }}
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.7, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>

      {/* ── Bottom progress ───────────────────────────────────────── */}
      <div
        className="absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-full"
        style={{
          bottom: '48px',
          width: '160px',
          height: '2px',
          background: `${THEME.primary}10`,
        }}
      >
        <motion.div
          className="h-full rounded-full origin-left"
          style={{
            background: `linear-gradient(90deg, transparent, ${THEME.primary}, ${THEME.primaryLight})`,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}
