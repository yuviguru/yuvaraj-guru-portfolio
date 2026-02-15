// App.js
import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar';
import ErrorBoundary from './components/ErrorBoundary';
import BackgroundEffects from './components/BackgroundEffects';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import LoadingSpinner from './components/LoadingSpinner';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const DesignSystem = React.lazy(() => import('./pages/DesignSystem'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function SplashLogo() {
  const bracketStyle = { fontFamily: "'Courier New', Courier, monospace", fontWeight: 'bold' };

  return (
    <div className="mt-10 relative" style={{ width: '180px', height: '180px' }}>
      {/* Layer 1 — Static frame: chamfered border + corner dots + orbiting dots + brackets */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-primary" xmlns="http://www.w3.org/2000/svg">
        {/* Chamfered border — rectangle with 5% cut corners */}
        <path id="border-track"
          d="M5,0 L95,0 L100,5 L100,95 L95,100 L5,100 L0,95 L0,5 Z"
          fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />

        {/* Static corner dots */}
        <circle cx="2.5" cy="2.5" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="97.5" cy="2.5" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="97.5" cy="97.5" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="2.5" cy="97.5" r="1.5" fill="currentColor" opacity="0.6" />

        {/* Running dots — orbit the border like a train */}
        <circle r="2" fill="currentColor" opacity="0.9">
          <animateMotion dur="3s" repeatCount="indefinite">
            <mpath href="#border-track" />
          </animateMotion>
        </circle>
        <circle r="1.5" fill="currentColor" opacity="0.5">
          <animateMotion dur="3s" begin="1s" repeatCount="indefinite">
            <mpath href="#border-track" />
          </animateMotion>
        </circle>
        <circle r="1.2" fill="currentColor" opacity="0.3">
          <animateMotion dur="3s" begin="2s" repeatCount="indefinite">
            <mpath href="#border-track" />
          </animateMotion>
        </circle>

        {/* Static brackets */}
        <text x="13" y="62" fontSize="36" fill="currentColor" style={bracketStyle}>&lt;</text>
        <text x="73" y="62" fontSize="36" fill="currentColor" style={bracketStyle}>&gt;</text>
      </svg>

      {/* Layer 2+3 — Coin-flip: slash (front) → YG mark (back) */}
      <div className="absolute inset-0" style={{ perspective: '600px' }}>
        <div className="splash-coin" style={{ width: '100%', height: '100%', position: 'relative' }}>
          {/* Face A — Forward slash / */}
          <svg viewBox="0 0 100 100" className="splash-face w-full h-full text-primary" xmlns="http://www.w3.org/2000/svg">
            <line x1="57" y1="28" x2="43" y2="72" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>

          {/* Face B — YG mark: slash + backslash + G path */}
          <svg viewBox="0 0 100 100" className="splash-face splash-face-back w-full h-full text-primary" xmlns="http://www.w3.org/2000/svg">
            {/* Forward slash / */}
            <line x1="57" y1="28" x2="43" y2="72" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            {/* Backslash \ crossing the slash */}
            <line x1="40" y1="32" x2="56" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            {/* G letter — open geometric G, rotated ~13° to match original logo
                Shape: top bar, left vertical, bottom bar, right-bottom vertical, mid bar inward */}
            <g transform="rotate(13.6, 55, 57)">
              <path
                d="M52,42 L64,42 L64,46 L56,46 L56,68 L64,68 L64,72 L52,72 L52,42 Z M60,55 L64,55 L64,68 L60,68 Z"
                fill="currentColor" fillRule="evenodd"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function SplashScreen() {
  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
    >
      <LoadingSpinner />
      <SplashLogo />
    </motion.div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, prefersReduced ? 0 : 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <LanguageProvider>
            <Router>
              <AnimatePresence mode="wait">
                {showSplash && <SplashScreen />}
              </AnimatePresence>
              <div className={`yuvaraj-guru-portfolio min-h-screen bg-background font-sans text-typography transition-colors duration-300 ${showSplash ? 'overflow-hidden' : ''}`}>
                <BackgroundEffects />
                <ScrollProgress />
                <CustomCursor />
                <NavBar />
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <LoadingSpinner />
                  </div>
                }>
                  <AnimatedRoutes />
                </Suspense>
              </div>
            </Router>
          </LanguageProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
