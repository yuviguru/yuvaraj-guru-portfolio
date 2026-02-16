import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────
// PREMIUM 3D SPLASH — INTEGRATED YG MONOGRAM
// Glass morphism + rotating energy ring + SVG stroke draw + glow
// ─────────────────────────────────────────────────────────────────────

// ── SVG paths — Y integrated inside G ───────────────────────────────
const G_PATH = 'M140 60 A60 60 0 1 0 140 140 M140 100 L170 100';
const Y_PATH = 'M60 60 L100 100 L140 60 M100 100 L100 150';

// ── Orbit dots ──────────────────────────────────────────────────────
const ORBIT_DOTS = [
  { id: 0, angle: 0, opacity: 0.9, size: 6 },
  { id: 1, angle: 120, opacity: 0.55, size: 5 },
  { id: 2, angle: 240, opacity: 0.35, size: 4 },
];

// ── Spark particles (burst outward after draw) ──────────────────────
const createSparks = () =>
  Array.from({ length: 16 }, (_, i) => {
    const angle = (i / 16) * Math.PI * 2;
    const radius = 120 + Math.random() * 60;
    return {
      id: i,
      endX: Math.cos(angle) * radius,
      endY: Math.sin(angle) * radius,
      size: 1.5 + Math.random() * 2,
      delay: 1.8 + Math.random() * 0.4,
    };
  });

// ── Stroke draw variant ─────────────────────────────────────────────
const createDrawVariant = (delay) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.6, delay, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.3, delay },
    },
  },
});

// ── Glow pulse variant (after draw completes) ───────────────────────
const glowPulseVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 0.6, 0.3, 0.5, 0.3],
    transition: {
      duration: 2.4,
      delay: 1.6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function SplashScreen() {
  const sparks = useMemo(createSparks, []);

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.04 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 1200px 700px at 50% 45%, #0b0b11 0%, #050507 55%, #000 100%)',
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
            radial-gradient(closest-side, rgba(255,255,255,0.08), transparent 70%),
            radial-gradient(closest-side at 30% 30%, rgba(255,255,255,0.04), transparent 65%),
            radial-gradient(closest-side at 70% 80%, rgba(255,255,255,0.025), transparent 65%)
          `,
          filter: 'blur(18px)',
        }}
      />

      {/* ── The main stage ────────────────────────────────────────── */}
      <div className="relative" style={{ width: '220px', height: '220px' }}>

        {/* ── ROTATING ENERGY RING (conic gradient) ────────────────── */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 180deg,
              rgba(255,255,255,0) 0% 14%,
              rgba(255,255,255,0.95) 18%,
              rgba(255,255,255,0) 24% 50%,
              rgba(255,255,255,0.65) 56%,
              rgba(255,255,255,0) 62% 100%)`,
            mask: 'radial-gradient(circle, transparent 57%, #000 58%)',
            WebkitMask: 'radial-gradient(circle, transparent 57%, #000 58%)',
            filter: 'drop-shadow(0 0 22px rgba(255,255,255,0.25))',
          }}
          initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
          animate={{ opacity: 0.9, scale: 1, rotate: 360 }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 },
            scale: { duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 1.6, repeat: Infinity, ease: 'linear' },
          }}
        />

        {/* ── Inner breathing ring ─────────────────────────────────── */}
        <motion.div
          className="absolute rounded-full"
          style={{
            inset: '18px',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04), 0 0 0 1px rgba(255,255,255,0.03)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.03, 1] }}
          transition={{
            duration: 1.8,
            delay: 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* ── GLASS CORE — the container ───────────────────────────── */}
        <motion.div
          className="absolute overflow-hidden"
          style={{
            inset: '36px',
            borderRadius: '32px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03))',
            border: '1px solid rgba(255,255,255,0.14)',
            boxShadow: '0 18px 70px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.10)',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Scanning highlight sweep */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              inset: '-60px',
              background: 'linear-gradient(110deg, transparent 0% 45%, rgba(255,255,255,0.25) 50%, transparent 55% 100%)',
            }}
            initial={{ x: '-55%', opacity: 0 }}
            animate={{ x: ['-55%', '55%'], opacity: [0, 0.9, 0.8, 0] }}
            transition={{
              duration: 1.25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Micro grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '14px 14px',
              opacity: 0.25,
              mixBlendMode: 'overlay',
            }}
          />
        </motion.div>

        {/* ── SVG MONOGRAM — stroke draw animation ─────────────────── */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.svg
            viewBox="0 0 200 200"
            className="w-[130px] h-[130px]"
            initial="hidden"
            animate="visible"
            style={{
              filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.2))',
            }}
          >
            <defs>
              {/* Glow filter for the strokes */}
              <filter id="yg-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glow layer (behind) */}
            <motion.g filter="url(#yg-glow)" variants={glowPulseVariant}>
              <path
                d={G_PATH}
                fill="none"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={Y_PATH}
                fill="none"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.g>

            {/* G — main stroke draw */}
            <motion.path
              d={G_PATH}
              fill="none"
              stroke="rgba(255,255,255,0.92)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={createDrawVariant(0.4)}
            />

            {/* Y — main stroke draw (slightly delayed) */}
            <motion.path
              d={Y_PATH}
              fill="none"
              stroke="rgba(255,255,255,0.92)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={createDrawVariant(0.7)}
            />
          </motion.svg>
        </div>

        {/* ── ORBIT DOTS ───────────────────────────────────────────── */}
        <motion.div
          className="absolute inset-0"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
        >
          {ORBIT_DOTS.map((dot) => (
            <motion.div
              key={dot.id}
              className="absolute rounded-full"
              style={{
                width: dot.size,
                height: dot.size,
                background: 'rgba(255,255,255,0.85)',
                boxShadow: '0 0 18px rgba(255,255,255,0.35)',
                top: '50%',
                left: '50%',
                transformOrigin: '0 0',
                transform: `rotate(${dot.angle}deg) translateX(108px) translateY(-50%)`,
                opacity: dot.opacity,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: dot.opacity, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + dot.id * 0.15 }}
            />
          ))}
        </motion.div>

        {/* ── SPARK BURST ──────────────────────────────────────────── */}
        {sparks.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full"
            style={{
              width: s.size,
              height: s.size,
              background: 'rgba(255,255,255,0.8)',
              boxShadow: '0 0 6px rgba(255,255,255,0.4)',
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
            style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.3))' }}
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.7, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <p
            className="font-mono uppercase"
            style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            Crafting Experiences
          </p>
          <motion.div
            style={{ height: '1px', background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.3))' }}
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
          background: 'rgba(255,255,255,0.06)',
        }}
      >
        <motion.div
          className="h-full rounded-full origin-left"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), rgba(255,255,255,0.9))',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}
