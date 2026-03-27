// App.js
import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import NavBar from './components/NavBar';
import ErrorBoundary from './components/ErrorBoundary';
import BackgroundEffects from './components/BackgroundEffects';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import LoadingSpinner from './components/LoadingSpinner';
import SplashScreen from './components/SplashScreen';
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

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, prefersReduced ? 0 : 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <LanguageProvider>
            <Router>
              <LayoutGroup id="logo-handoff">
                <AnimatePresence mode="wait">
                  {showSplash && <SplashScreen />}
                </AnimatePresence>
                <div className={`yuvaraj-guru-portfolio min-h-screen bg-background font-sans text-typography transition-colors duration-300 overflow-x-hidden ${showSplash ? 'overflow-hidden' : ''}`}>
                  <BackgroundEffects />
                  <ScrollProgress />
                  <CustomCursor />
                  <NavBar showSplash={showSplash} />
                  <Suspense fallback={
                    <div className="flex items-center justify-center min-h-screen">
                      <LoadingSpinner />
                    </div>
                  }>
                    <AnimatedRoutes />
                  </Suspense>
                </div>
              </LayoutGroup>
            </Router>
          </LanguageProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
