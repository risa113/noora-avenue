import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, FileCheck, Layers, Maximize2, Phone, ShieldCheck } from 'lucide-react';

export default function PlotLayout({ projectData, onOpenLightbox }) {
  const { layoutInfo, plots } = projectData;
  const [activePlot, setActivePlot] = useState(plots[0]);

  return (
    <section id="layout" className="py-20 lg:py-28 bg-white border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 block mb-1">
              Sanctioned Plan (Scale 1:400)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              {layoutInfo.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-tamil mt-1">
              {layoutInfo.tamilTitle} — {layoutInfo.subtitle}
            </p>
          </div>
          
          <button
            onClick={() => onOpenLightbox(layoutInfo.image, "மனை உட்பிரிவு வரைபடம் (Plan of Subdivision)", "Scale 1:400 • Plots 01–08 • 9.15M Road • SWP/68/2024")}
            className="btn-pill-primary text-xs py-2.5 px-5 self-start sm:self-auto"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Full Blueprint View</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Scanned Blueprint Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAFAF9] rounded-3xl p-5 sm:p-6 border border-neutral-200 shadow-sm text-left">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200/80 mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Directorate Sanctioned Drawing
                  </span>
                  <h4 className="text-base font-extrabold text-neutral-900">
                    மனை உட்பிரிவு வரைபடம் (SWP/68/2024)
                  </h4>
                </div>
                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                  Scale 1:400
                </span>
              </div>

              {/* Scanned Image Container with Zoom Trigger */}
              <div
                className="relative overflow-hidden rounded-2xl bg-white border border-neutral-200 cursor-pointer group flex items-center justify-center p-3 min-h-[440px] shadow-2xs"
                onClick={() => onOpenLightbox(layoutInfo.image, "மனை உட்பிரிவு வரைபடம்", "Plots 01–08 • 9.15M Road • SWP/68/2024")}
              >
                <img
                  src={layoutInfo.image}
                  alt="Noora Avenue II Official Subdivision Blueprint"
                  className="w-full h-auto max-h-[500px] object-contain mx-auto group-hover:scale-102 transition-transform duration-500 rounded"
                />
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                  <div className="px-5 py-3 rounded-full bg-white text-neutral-900 font-extrabold text-xs border border-neutral-200 flex items-center gap-2 shadow-xl">
                    <Maximize2 className="w-4 h-4 text-sky-600" />
                    <span>Zoom & Inspect Detailed Boundary Dimensions</span>
                  </div>
                </div>
              </div>

              {/* Quick Specs Bar */}
              <div className="grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-neutral-200 text-center">
                {[
                  { label: "Total Plots", value: "08 மனைகள்" },
                  { label: "Road Width", value: "9.15 M (30 Ft)" },
                  { label: "Scale", value: "1 : 400" },
                  { label: "Approval", value: "SWP/68/2024" },
                ].map((s) => (
                  <div key={s.label} className="p-2.5 bg-white rounded-xl border border-neutral-200/80">
                    <span className="text-[9px] text-neutral-400 uppercase block font-bold">{s.label}</span>
                    <span className="text-xs font-black text-neutral-900 block mt-0.5">{s.value}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT: Interactive Plot Inspector */}
          <div className="lg:col-span-5 text-left space-y-5">
            
            <div className="p-6 rounded-3xl bg-[#FAFAF9] border border-neutral-200 shadow-sm">
              <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block mb-1">
                Interactive Plot Dimension Inspector
              </span>
              <h3 className="text-lg font-extrabold text-neutral-900">
                Select a Plot to Inspect Exact Boundary Measurements
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                All dimensions transcribed directly from sanctioned drawing.
              </p>

              <div className="grid grid-cols-4 gap-2 mt-4">
                {plots.map((plot) => (
                  <button
                    key={plot.id}
                    onClick={() => setActivePlot(plot)}
                    className={`py-2 px-1 rounded-xl text-xs font-black transition-all duration-200 border ${
                      activePlot.id === plot.id
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs scale-103'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {plot.plotNumber}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Plot Details Box */}
            {activePlot && (
              <div className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                  <div>
                    <span className="text-2xl font-black text-neutral-900">{activePlot.plotNumber}</span>
                    <span className="text-xs font-bold text-sky-700 block mt-0.5">{activePlot.category}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {activePlot.statusText}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                    Verified Blueprint Measurements
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "North (வடக்கு)", val: activePlot.dimensions.north },
                      { label: "South (தெற்கு)", val: activePlot.dimensions.south },
                      { label: "East (கிழக்கு)", val: activePlot.dimensions.east },
                      { label: "West / Road", val: activePlot.dimensions.west },
                    ].map((d) => (
                      <div key={d.label} className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                        <span className="text-[10px] text-neutral-500 block font-semibold">{d.label}</span>
                        <span className="text-sm font-black text-neutral-900">{d.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-100 space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-semibold">Road Frontage:</span>
                    <span className="font-bold text-neutral-900">{activePlot.roadFrontage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-semibold">Survey Boundary:</span>
                    <span className="font-bold text-sky-700 font-tamil">{activePlot.surveyDetails}</span>
                  </div>
                </div>

                <a
                  href={`tel:${projectData.contact.primaryPhoneTel}`}
                  className="btn-pill-primary w-full py-3 px-4 text-xs font-bold uppercase tracking-wider justify-center shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Enquire Availability for {activePlot.plotNumber}</span>
                </a>
              </div>
            )}

            <button
              onClick={() => onOpenLightbox(layoutInfo.image, "மனை உட்பிரிவு வரைபடம் (Plan of Subdivision)", "Scale 1:400 • Plots 01–08 • 9.15M Road • SWP/68/2024")}
              className="btn-pill-secondary w-full py-3.5 text-xs font-bold uppercase tracking-wider justify-center"
            >
              <Maximize2 className="w-4 h-4 text-neutral-700" />
              <span>Enlarge Full Drawing Fullscreen</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
