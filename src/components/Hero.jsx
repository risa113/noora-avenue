import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, FileText, Layers, MapPin, Navigation, Phone, Search } from 'lucide-react';
import { asset } from '../utils/assetUrl';

export default function Hero({ projectData, onOpenLayoutModal, onSelectPlotFilter }) {
  const [activeTab, setActiveTab] = useState('all');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const heroSlides = [
    {
      id: 'blueprint',
      title: 'DTCP Sanctioned Blueprint (Scale 1:400)',
      badge: 'Order SWP/104/2024',
      subtitle: 'Official 7-Plot Subdivision Layout Plan • Kokkadikulam Scheme No: 2',
      image: asset('/assets/images/plot_layout_approved_7plots.png'),
      isBlueprint: true
    },
    {
      id: 'drone-aerial',
      title: 'Actual Site Drone Aerial Survey',
      badge: '900 Sq.M • 0.22 Acre',
      subtitle: 'Real Aerial Photograph of the 7 Demarcated Plots & Roads',
      image: asset('/assets/images/real_site_aerial_drone.jpg'),
      isBlueprint: false
    },
    {
      id: 'ground-stones',
      title: 'Actual Ground View & Boundary Stones',
      badge: 'Survey Stones Laid',
      subtitle: 'Real Ground View of Demarcated Plot Corners and Road Frontage',
      image: asset('/assets/images/real_site_ground_stones.jpg'),
      isBlueprint: false
    },
    {
      id: 'boundary-view',
      title: 'Actual Site Demarcated Landscape',
      badge: '7.00M Road Access',
      subtitle: '42.20 Meters Total West Frontage with Instant Vehicle Access',
      image: asset('/assets/images/real_site_boundary_view.jpg'),
      isBlueprint: false
    },
    {
      id: 'satellite',
      title: 'Satellite Ground View',
      badge: 'GPS: 8.6844° N, 77.7131° E',
      subtitle: 'Kokkadikulam Village, 500m from Annai Hajira Women\'s College',
      image: asset('/assets/images/melapalayam_satellite_close.jpg'),
      isBlueprint: false
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Plots (7)' },
    { id: 'corner', label: 'Southern Corner (Plot 01)' },
    { id: 'central', label: 'Central Prime (Plots 04, 05)' },
    { id: 'standard', label: 'Standard Plots (Plots 02, 03, 06)' },
    { id: 'villa', label: 'Northern Villa (Plot 07)' }
  ];

  // Auto-advance slides every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (onSelectPlotFilter) {
      onSelectPlotFilter(tabId);
    }
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('plots-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeSlide = heroSlides[currentSlideIndex];

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FAFAF9] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-neutral-200/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold Editorial Content */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Verification Pill with Real Location */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-800">
                {projectData.approvalBadge} • SWP/104/2024 & SWP/146/2024
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.08]">
              DTCP Approved Residential Plots for Sale
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-neutral-700 font-bold mt-2">
                Kokkadikulam, Melapalayam
              </span>
            </h1>

            {/* Subtitle / Description emphasizing Land / Plots only */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-xl">
              <strong className="text-neutral-900 font-bold">{projectData.fullProjectName}</strong> — Exclusive 7-plot DTCP approved residential plotted layout situated at <strong>Kokkadikulam (Scheme No: 2)</strong>, Melapalayam Ward, Tirunelveli Corporation. Direct 7.00-meter (23 Ft) road frontage with clear title and spot registration.
            </p>

            {/* Tamil Quote Card */}
            <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs max-w-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Land Investment Motto
                </span>
              </div>
              <p className="text-sm font-tamil text-neutral-900 font-semibold leading-relaxed">
                “{projectData.tamilQuote}”
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#plots-catalog"
                className="btn-pill-primary px-7 py-3.5 text-sm"
              >
                <span>Inspect 7 Available Plots</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#location"
                className="btn-pill-secondary px-6 py-3.5 text-sm"
              >
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>View Exact Location</span>
              </a>
            </div>

            {/* Key Micro-Specs Strip */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-neutral-200/70 max-w-lg">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Total Land Area</span>
                <span className="text-sm font-extrabold text-neutral-900 block mt-0.5">900.00 Sq.M</span>
                <span className="text-[10px] text-neutral-500 font-medium">0.22 Acre / 22.24 Cts</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Sanctioned Road</span>
                <span className="text-sm font-extrabold text-neutral-900 block mt-0.5">7.00 M (23 Ft)</span>
                <span className="text-[10px] text-neutral-500 font-medium">TS No: 13/107 Road</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Allotted Plots</span>
                <span className="text-sm font-extrabold text-neutral-900 block mt-0.5">7 மனைகள்</span>
                <span className="text-[10px] text-neutral-500 font-medium">Plots 01 to 07</span>
              </div>
            </div>

          </div>

          {/* Right Column: Multi-Slide Interactive Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-900 group">
              
              {/* Slide Media Container */}
              <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[540px] bg-neutral-950 flex items-center justify-center overflow-hidden">
                {activeSlide.isBlueprint ? (
                  <div
                    className="w-full h-full bg-white p-4 flex items-center justify-center cursor-pointer"
                    onClick={onOpenLayoutModal}
                  >
                    <img
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      className="max-h-full max-w-full object-contain hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <>
                    <img
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent pointer-events-none" />
                  </>
                )}

                {/* On-Slide Marker Badge (Top Left) */}
                <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-neutral-900/90 text-white border border-white/20 text-xs font-bold shadow-lg flex items-center gap-2 backdrop-blur-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/30" />
                  <span>{activeSlide.badge}</span>
                </div>

                {/* Top Right Proximity Badge */}
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/95 text-neutral-900 border border-neutral-200 text-[11px] font-bold shadow-md flex items-center gap-1.5 backdrop-blur-md">
                  <Navigation className="w-3.5 h-3.5 text-sky-600" />
                  <span>500m to Hajira College</span>
                </div>

                {/* Slide Navigation Buttons */}
                <button
                  onClick={handlePrevSlide}
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-neutral-900/70 hover:bg-neutral-900 text-white flex items-center justify-center border border-white/20 transition-all opacity-80 hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextSlide}
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-neutral-900/70 hover:bg-neutral-900 text-white flex items-center justify-center border border-white/20 transition-all opacity-80 hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Card Overlay with Slide Thumbnails & Details */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2.5">
                
                {/* Slide Selector Indicators / Tabs */}
                <div className="flex items-center justify-center gap-2 py-1 px-3 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/20 w-fit mx-auto">
                  {heroSlides.map((slide, sIdx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlideIndex(sIdx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        sIdx === currentSlideIndex
                          ? 'w-6 bg-sky-400'
                          : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${sIdx + 1}`}
                    />
                  ))}
                </div>

                {/* Floating Active Info Card */}
                <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-xl text-left">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md inline-block">
                        Slide {currentSlideIndex + 1} of {heroSlides.length} • {activeSlide.title}
                      </span>
                      <h4 className="text-sm sm:text-base font-extrabold text-neutral-900 mt-1">
                        {activeSlide.subtitle}
                      </h4>
                      <p className="text-[11px] text-neutral-500 font-tamil mt-0.5">
                        கொக்கடிகுளம் அபிவிருத்தி திட்டம் எண் 2 • மேலப்பாளையம் வார்டு
                      </p>
                    </div>

                    {/* Miniature Blueprint Thumbnail */}
                    <button
                      onClick={onOpenLayoutModal}
                      title="Click to view Sanctioned Subdivision Blueprint"
                      className="w-13 h-13 rounded-xl border border-neutral-200 bg-neutral-50 overflow-hidden shrink-0 hover:border-neutral-900 transition-all group/thumb relative shadow-xs"
                    >
                      <img
                        src={asset("/assets/images/plot_layout_approved_7plots.png")}
                        alt="Plot layout thumbnail"
                        className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform"
                      />
                      <div className="absolute inset-0 bg-neutral-900/30 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                    </button>
                  </div>

                  <div className="mt-2.5 pt-2.5 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      7 Plots Ready for Immediate Sale
                    </span>
                    <button
                      onClick={onOpenLayoutModal}
                      className="text-xs font-extrabold text-neutral-900 hover:text-sky-700 flex items-center gap-1 transition-colors"
                    >
                      <span>Full Blueprint View</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Hero Bottom / Interactive Search & Filter Bar */}
        <div className="mt-14 lg:mt-20">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-lg text-left">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 block mb-1">
                  Residential Plot Finder
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
                  Find the exact residential plot for your home construction
                </h3>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-neutral-900 text-white shadow-xs'
                        : 'bg-neutral-100/80 text-neutral-600 hover:bg-neutral-200/80 hover:text-neutral-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Controls Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
              
              {/* Filter 1: Road Access */}
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Road Width
                </label>
                <div className="text-sm font-extrabold text-neutral-900 flex items-center justify-between">
                  <span>7.00 M (23 Ft) Road</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>

              {/* Filter 2: Site Location */}
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Location Proximity
                </label>
                <div className="text-sm font-extrabold text-neutral-900 flex items-center justify-between">
                  <span>500m to Hajira College</span>
                  <MapPin className="w-4 h-4 text-sky-600" />
                </div>
              </div>

              {/* Filter 3: Registration Status */}
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Land Status
                </label>
                <div className="text-sm font-extrabold text-neutral-900 flex items-center justify-between">
                  <span>Ready for Immediate Sale</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>

              {/* Filter 4: CTA Button */}
              <div className="flex items-center">
                <button
                  onClick={scrollToCatalog}
                  className="btn-pill-primary w-full py-4 text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  <Search className="w-4 h-4" />
                  <span>Inspect 7 Available Plots</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}