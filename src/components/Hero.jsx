import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Compass, FileText, Layers, MapPin, Navigation, Phone, Search } from 'lucide-react';
import { asset } from '../utils/assetUrl';

export default function Hero({ projectData, onOpenLayoutModal, onSelectPlotFilter }) {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('satellite'); // 'satellite' | 'blueprint'

  const filterTabs = [
    { id: 'all', label: 'All Plots (8)' },
    { id: 'corner', label: 'Corner Plots' },
    { id: 'central', label: 'Central Prime' },
    { id: 'standard', label: 'Standard Plots' },
    { id: 'villa', label: 'Northern Villa' }
  ];

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
                {projectData.approvalBadge} • SWP/68/2024
              </span>
            </div>

            {/* Main Headline - Optimized for Top Local & On-Page SEO */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.08]">
              DTCP Approved Residential Plots for Sale
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-neutral-700 font-bold mt-2">
                Melapalayam, Tirunelveli
              </span>
            </h1>

            {/* Subtitle / Description emphasizing Land / Plots only */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-xl">
              <strong className="text-neutral-900 font-bold">{projectData.fullProjectName}</strong> — Exclusive 8-plot DTCP approved residential plotted layout located at <strong>Madina Garden, Kokkattikulam</strong> (just 500m from Annai Hajira Women's College, Melapalayam, Tirunelveli). Planned with 30-feet wide internal avenue roads.
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
                <span>Inspect 8 Available Plots</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#location"
                className="btn-pill-secondary px-6 py-3.5 text-sm"
              >
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>View Satellite Map</span>
              </a>
            </div>

            {/* Key Micro-Specs Strip */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-neutral-200/70 max-w-lg">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Total Land Area</span>
                <span className="text-sm font-extrabold text-neutral-900 block mt-0.5">1133.00 Sq.M</span>
                <span className="text-[10px] text-neutral-500 font-medium">0.28 Acre</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Sanctioned Road</span>
                <span className="text-sm font-extrabold text-neutral-900 block mt-0.5">9.15 M (30 Ft)</span>
                <span className="text-[10px] text-neutral-500 font-medium">Internal Road</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Exact Location</span>
                <span className="text-sm font-extrabold text-neutral-900 block mt-0.5">500m to College</span>
                <span className="text-[10px] text-neutral-500 font-medium">Melapalayam</span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Satellite Aerial View with Toggle to Blueprint */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-900 group">
              
              {/* Media Container: Satellite Image or Blueprint */}
              <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[540px] bg-neutral-950 flex items-center justify-center overflow-hidden">
                {viewMode === 'satellite' ? (
                  <>
                    <img
                      src={asset("/assets/images/melapalayam_satellite_close.jpg")}
                      alt="Actual Satellite Location of Noora Avenue II at Melapalayam"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent pointer-events-none" />

                    {/* On-Map Marker Badges */}
                    <div className="absolute top-16 left-6 px-3 py-1.5 rounded-full bg-neutral-900/90 text-white border border-white/20 text-xs font-bold shadow-lg flex items-center gap-2 backdrop-blur-md animate-pulse">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 ring-4 ring-rose-500/30" />
                      <span>NOORA AVENUE - II Site (8 Plots)</span>
                    </div>

                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/95 text-neutral-900 border border-neutral-200 text-[11px] font-bold shadow-md flex items-center gap-1.5 backdrop-blur-md">
                      <Navigation className="w-3.5 h-3.5 text-sky-600" />
                      <span>500m from Annai Hajira College</span>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-white p-4 flex items-center justify-center cursor-pointer" onClick={onOpenLayoutModal}>
                    <img
                      src={asset("/assets/images/plot_layout_scan.png")}
                      alt="DTCP Sanctioned Layout Map Scale 1:400"
                      className="max-h-full max-w-full object-contain hover:scale-102 transition-transform"
                    />
                  </div>
                )}
              </div>

              {/* View Toggle Bar (Top Right) */}
              <div className="absolute bottom-5 left-5 right-5 sm:left-auto sm:right-5 flex flex-col gap-3">
                
                {/* View Switcher Pills */}
                <div className="self-end p-1 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/20 flex items-center gap-1 shadow-lg">
                  <button
                    onClick={() => setViewMode('satellite')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      viewMode === 'satellite' ? 'bg-white text-neutral-900 shadow-xs' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Satellite Ground View
                  </button>
                  <button
                    onClick={() => setViewMode('blueprint')}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      viewMode === 'blueprint' ? 'bg-white text-neutral-900 shadow-xs' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Subdivision Map (1:400)
                  </button>
                </div>

                {/* Floating Plot Preview Card */}
                <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-xl text-left">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md inline-block">
                        Plot 01 (Corner)
                      </span>
                      <h4 className="text-base font-extrabold text-neutral-900 mt-1">
                        Sanctioned Plotted Land
                      </h4>
                      <p className="text-xs text-neutral-500 font-medium mt-0.5">
                        21.90M × 6.50M • 30 Ft Avenue Road Frontage
                      </p>
                    </div>

                    {/* Miniature Blueprint Thumbnail */}
                    <button
                      onClick={onOpenLayoutModal}
                      title="Click to view Sanctioned Subdivision Blueprint"
                      className="w-14 h-14 rounded-xl border border-neutral-200 bg-neutral-50 overflow-hidden shrink-0 hover:border-neutral-900 transition-all group/thumb relative shadow-xs"
                    >
                      <img
                        src={asset("/assets/images/plot_layout_scan.png")}
                        alt="Plot layout thumbnail"
                        className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform"
                      />
                      <div className="absolute inset-0 bg-neutral-900/30 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                    </button>
                  </div>

                  <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Ready for Immediate Sale
                    </span>
                    <button
                      onClick={onOpenLayoutModal}
                      className="text-xs font-extrabold text-neutral-900 hover:text-sky-700 flex items-center gap-1 transition-colors"
                    >
                      <span>Inspect Drawing</span>
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
                  <span>9.15 M (30 Ft) Road</span>
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
                  <span>Inspect 8 Available Plots</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
