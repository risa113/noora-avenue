import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import TheLandPage from './pages/TheLandPage';
import PlotLayoutPage from './pages/PlotLayoutPage';
import GalleryPage from './pages/GalleryPage';
import LocationPage from './pages/LocationPage';
import InquirePage from './pages/InquirePage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background text-on-surface">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/the-land" element={<TheLandPage />} />
            <Route path="/plot-layout" element={<PlotLayoutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/inquire" element={<InquirePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
