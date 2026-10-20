import React, { useState } from 'react';
import projectData from './data/projectData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Advisors from './components/Advisors';
import InvestmentMetrics from './components/InvestmentMetrics';
import InvestmentOffers from './components/InvestmentOffers';
import SmartSelection from './components/SmartSelection';
import PlotCatalog from './components/PlotCatalog';
import PlotLayout from './components/PlotLayout';
import ApprovalSection from './components/ApprovalSection';
import WhyChooseUs from './components/WhyChooseUs';
import Location from './components/Location';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import ImageLightbox from './components/ImageLightbox';

export default function App() {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    imageSrc: '',
    title: '',
    subtitle: ''
  });

  const [selectedPlotFilter, setSelectedPlotFilter] = useState('all');

  const openLightbox = (imageSrc, title, subtitle = '') => {
    setLightboxState({
      isOpen: true,
      imageSrc,
      title,
      subtitle
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenMasterLayout = () => {
    openLightbox(
      projectData.layoutInfo.image,
      "Official Subdivision Layout Drawing (மனை உட்பிரிவு வரைபடம்)",
      "Sanctioned Plan • Scale 1:400 • Plots 1 to 7 • 7.00M Road • SWP/104/2024 & SWP/146/2024"
    );
  };

  const handleSelectPlotFilter = (filterId) => {
    setSelectedPlotFilter(filterId);
    const catalogEl = document.getElementById('plots-catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-neutral-900 selection:bg-sky-100 selection:text-sky-900 font-sans">
      
      {/* 1. Minimalist Luxury Header */}
      <Navbar projectData={projectData} />

      <main>
        {/* 2. Hero Section with Floating Preview & Search Filter Bar (Video 00:00) */}
        <Hero 
          projectData={projectData} 
          onOpenLayoutModal={handleOpenMasterLayout}
          onSelectPlotFilter={handleSelectPlotFilter}
        />

        {/* 3. See what we offer and how it works (Video 00:01) */}
        <HowItWorks
          projectData={projectData}
          onOpenLightbox={openLightbox}
        />

        {/* 4. Expert Advisors & Authorized Promoters (Video 00:02 - 00:03) */}
        <Advisors
          projectData={projectData}
        />

        {/* 5. Reliable facilities for stable investments (Video 00:04) */}
        <InvestmentMetrics
          projectData={projectData}
        />

        {/* 6. Offers for Investments / Curated Signature Plots (Video 00:05) */}
        <InvestmentOffers
          projectData={projectData}
          onOpenLightbox={openLightbox}
        />

        {/* 7. Smart Selection of Premium Real Estate / Land (Video 00:06 - 00:08) */}
        <SmartSelection
          projectData={projectData}
        />

        {/* 8. Available Residential Plots (01 - 07) Catalog Grid (Video 00:09 - 00:12) */}
        <PlotCatalog
          projectData={projectData}
          onOpenLightbox={openLightbox}
          selectedFilter={selectedPlotFilter}
        />

        {/* 9. Sanctioned Master Subdivision Blueprint & Interactive Plot Inspector */}
        <PlotLayout 
          projectData={projectData} 
          onOpenLightbox={openLightbox} 
        />

        {/* 10. Official DTCP Sanction Order & Government Records */}
        <ApprovalSection 
          projectData={projectData} 
          onOpenLightbox={openLightbox} 
        />

        {/* 11. Investment Advantages & Prudent Land Ownership */}
        <WhyChooseUs
          projectData={projectData}
        />

        {/* 12. Strategic Location & Accessibility */}
        <Location 
          locationDetails={projectData.locationDetails} 
          projectData={projectData} 
        />

        {/* 13. Property & Layout Media Gallery */}
        <Gallery 
          projectData={projectData} 
          onOpenLightbox={openLightbox} 
        />

        {/* 14. Buyer Guidance & Local SEO Frequently Asked Questions */}
        <FAQ
          projectData={projectData}
        />

        {/* 15. Contact Sales Desk & Instant WhatsApp Submission */}
        <Contact
          projectData={projectData}
        />
      </main>

      {/* 15. Minimalist Luxury Footer */}
      <Footer projectData={projectData} />

      {/* Floating Interactive WhatsApp Button */}
      <WhatsAppFloating projectData={projectData} />

      {/* Full-screen Document & Layout Modal Lightbox */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        onClose={closeLightbox}
        imageSrc={lightboxState.imageSrc}
        title={lightboxState.title}
        subtitle={lightboxState.subtitle}
      />
    </div>
  );
}
