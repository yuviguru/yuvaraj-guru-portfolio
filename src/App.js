// App.js
import React, { Suspense, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar';
import SiteFooter from './components/SiteFooter';
import ErrorBoundary from './components/ErrorBoundary';
import CustomCursor from './components/CustomCursor';
import LoadingSpinner from './components/LoadingSpinner';
import Preloader, { shouldShowPreloader } from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';
import { LanguageProvider } from './context/LanguageContext';
import { SiteReadyContext } from './context/SiteReadyContext';
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
  const [showPreloader, setShowPreloader] = useState(shouldShowPreloader);
  const handlePreloaderDone = useCallback(() => setShowPreloader(false), []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <LanguageProvider>
          <Router>
            <SmoothScroll>
              <SiteReadyContext.Provider value={!showPreloader}>
                <AnimatePresence>
                  {showPreloader && <Preloader onDone={handlePreloaderDone} />}
                </AnimatePresence>
                <div className="yuvaraj-guru-portfolio min-h-screen bg-background font-sans text-typography overflow-x-clip">
                  <div aria-hidden="true" className="grain animate-grain" />
                  <CustomCursor />
                  <NavBar />
                  <Suspense fallback={
                    <div className="flex items-center justify-center min-h-screen">
                      <LoadingSpinner />
                    </div>
                  }>
                    <main>
                      <AnimatedRoutes />
                    </main>
                  </Suspense>
                  <SiteFooter />
                </div>
              </SiteReadyContext.Provider>
            </SmoothScroll>
          </Router>
        </LanguageProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
