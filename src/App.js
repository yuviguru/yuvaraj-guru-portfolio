// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { LanguageProvider } from './context/LanguageContext'; // Use LanguageProvider

function App() {
  return (
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
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
