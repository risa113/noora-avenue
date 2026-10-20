import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Compass, Layers, Maximize2, Phone, ShieldCheck } from 'lucide-react';
import { asset } from '../utils/assetUrl';

export default function PlotCatalog({ projectData, onOpenLightbox, selectedFilter = 'all' }) {
  const [filter, setFilter] = useState(selectedFilter);

  const filterTabs = [
    { id: 'all', label: 'All Plots (7)' },
    { id: 'corner', label: 'Corner Plots' },
    { id: 'central', label: 'Central Prime' },
    { id: 'standard', label: 'Standard Plots' },
    { id: 'villa', label: 'Northern Villa' }
  ];

  const plots = projectData.plots || [];

  const filteredPlots = plots.filter((plot) => {
    if (filter === 'all') return true;
    if (filter === 'corner') return plot.category.toLowerCase().includes('corner');
    if (filter === 'central') return plot.category.toLowerCase().includes('central') || plot.category.toLowerCase().includes('core');
    if (filter === 'standard') return plot.category.toLowerCase().includes('standard');
    if (filter === 'villa') return plot.category.toLowerCase().includes('villa');
    return true;
  });

  return (
    <section id="plots-catalog" className="py-20 lg:py-28 bg-[#FAFAF9] border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 block mb-1">
              Sanctioned Residential Plot Directory • 7 Plots
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Available residential plots
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-medium">
              All 7 plots verified directly from official DTCP layout map SWP/104/2024 at Kokkadikulam Scheme No: 2, Melapalayam.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of 7 Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
          {filteredPlots.map((plot) => (
            <div
              key={plot.id}
              className="bg-white rounded-3xl p-4 sm:p-5 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Media Container: Real Blueprint / Plan */}
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-100 mb-4 border border-neutral-100 p-2 flex items-center justify-center">
                  <img
                    src={plot.image || asset("/assets/images/plot_layout_approved_7plots.png")}
                    alt={plot.plotNumber}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-neutral-900 shadow-xs">
                    {plot.plotNumber}
                  </div>
                  <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-neutral-900/90 text-white text-[10px] font-bold shadow-xs">
                    {plot.category}
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-wider shadow-xs">
                    Ready for Sale
                  </div>
                </div>

                {/* Plot Title & Location */}
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-extrabold text-neutral-900 tracking-tight">
                    {plot.plotNumber}
                  </h3>
                  <span className="text-xs font-bold text-sky-700">
                    {plot.areaApprox}
                  </span>
                </div>

                <p className="text-xs text-neutral-500 font-medium mb-3">
                  Kokkadikulam Scheme No: 2 • Melapalayam Ward
                </p>

                {/* Side Dimensions Card */}
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 mb-3 space-y-1.5 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Sanctioned Boundary Dimensions (SWP/104/2024)
                  </span>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] text-neutral-600">
                    <div>N: <strong className="text-neutral-900">{plot.dimensions.north}</strong></div>
                    <div>S: <strong className="text-neutral-900">{plot.dimensions.south}</strong></div>
                    <div>E: <strong className="text-neutral-900">{plot.dimensions.east}</strong></div>
                    <div>W: <strong className="text-neutral-900">{plot.dimensions.west}</strong></div>
                  </div>
                </div>

                {/* Survey Boundary & Road Frontage */}
                <div className="space-y-1 text-xs mb-4">
                  <div className="flex items-center justify-between text-neutral-600">
                    <span className="text-neutral-400">Road Frontage:</span>
                    <span className="font-bold text-neutral-800">{plot.roadFrontage}</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-600">
                    <span className="text-neutral-400">Survey No:</span>
                    <span className="font-bold text-sky-700 font-tamil">{plot.surveyDetails}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-100 flex items-center gap-2">
                <a
                  href={`https://wa.me/919443283369?text=${encodeURIComponent(`Hello, I am interested in purchasing ${plot.plotNumber} (${plot.category}) at NOORA AVENUE, Kokkadikulam (Order SWP/104/2024). Please share price and availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-primary flex-1 py-2.5 px-3 text-xs font-bold justify-center shadow-xs hover:shadow-md"
                >
                  <span>Inquire Price</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onOpenLightbox(projectData.layoutInfo.image, `${plot.plotNumber} Blueprint Details`, `Subdivision Drawing • North: ${plot.dimensions.north} × Road: ${plot.dimensions.west} • SWP/104/2024`)}
                  className="p-2.5 rounded-full border border-neutral-200 hover:bg-neutral-100 text-neutral-700 transition-colors"
                  title="View Layout Drawing"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}