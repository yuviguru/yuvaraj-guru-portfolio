// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NavBar from './components/NavBar';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './context/LanguageContext'; // Use LanguageProvider
import { ThemeProvider } from './context/ThemeContext'; // Add ThemeProvider

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <ThemeProvider> {/* Wrap with ThemeProvider */}
          <LanguageProvider> {/* Wrap with LanguageProvider */}
            <Router>
              <div className="yuvaraj-guru-portfolio h-[100%] min-h-screen bg-background">
                <NavBar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  {/* 404 catch-all route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </Router>
          </LanguageProvider>
        </ThemeProvider> {/* Close ThemeProvider */}
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
