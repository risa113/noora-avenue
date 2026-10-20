import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, FileCheck, Layers, Maximize2, Phone, ShieldCheck, Compass } from 'lucide-react';

export default function PlotLayout({ projectData, onOpenLightbox }) {
  const { layoutInfo, plots } = projectData;
  const [activePlot, setActivePlot] = useState(plots[0]);
  const [viewType, setViewType] = useState('blueprint'); // 'blueprint' | 'vector'

  return (
    <section id="layout" className="py-20 lg:py-28 bg-white border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 block mb-1">
              Sanctioned Plan (Scale 1:400) • SWP/104/2024
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              {layoutInfo.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-tamil mt-1">
              {layoutInfo.tamilTitle} — {layoutInfo.subtitle}
            </p>
          </div>
          
          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* View switcher */}
            <div className="p-1 rounded-full bg-neutral-100 border border-neutral-200 flex items-center gap-1">
              <button
                onClick={() => setViewType('blueprint')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  viewType === 'blueprint' ? 'bg-neutral-900 text-white shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Official Drawing
              </button>
              <button
                onClick={() => setViewType('vector')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  viewType === 'vector' ? 'bg-neutral-900 text-white shadow-xs' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Interactive Vector
              </button>
            </div>

            <button
              onClick={() => onOpenLightbox(layoutInfo.image, "மனை உட்பிரிவு வரைபடம் (Plan of Subdivision)", "Scale 1:400 • Plots 01–07 • 7.00M Road • SWP/104/2024 & SWP/146/2024")}
              className="btn-pill-primary text-xs py-2 px-4"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Fullscreen</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Layout Blueprint / Interactive Vector Map */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAFAF9] rounded-3xl p-5 sm:p-6 border border-neutral-200 shadow-sm text-left">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200/80 mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Directorate Sanctioned Drawing • Kokkadikulam Scheme No: 2
                  </span>
                  <h4 className="text-base font-extrabold text-neutral-900 font-tamil">
                    மனை உட்பிரிவு வரைபடம் (SWP/104/2024)
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    Scale 1:400
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    7 Plots
                  </span>
                </div>
              </div>

              {/* Blueprint or Interactive Vector Container */}
              {viewType === 'blueprint' ? (
                <div
                  className="relative overflow-hidden rounded-2xl bg-white border border-neutral-200 cursor-pointer group flex items-center justify-center p-3 min-h-[460px] shadow-2xs"
                  onClick={() => onOpenLightbox(layoutInfo.image, "மனை உட்பிரிவு வரைபடம் (SWP/104/2024)", "Scale 1:400 • Plots 01–07 • 7.00M Road Frontage • App 7GDMQ9WA/2024")}
                >
                  <img
                    src={layoutInfo.image}
                    alt="Noora Avenue Official 7-Plot Subdivision Blueprint"
                    className="w-full h-auto max-h-[520px] object-contain mx-auto group-hover:scale-102 transition-transform duration-500 rounded"
                  />
                  <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                    <div className="px-5 py-3 rounded-full bg-white text-neutral-900 font-extrabold text-xs border border-neutral-200 flex items-center gap-2 shadow-xl">
                      <Maximize2 className="w-4 h-4 text-sky-600" />
                      <span>Zoom & Inspect Detailed Boundary Dimensions</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Interactive Vector Subdivision Schematic */
                <div className="relative rounded-2xl bg-white border border-neutral-200 p-4 min-h-[460px] flex flex-col items-center justify-center select-none">
                  
                  {/* Top North Indicator & Boundary */}
                  <div className="w-full flex items-center justify-between text-[11px] font-bold text-neutral-500 mb-2 px-2">
                    <span className="font-tamil bg-neutral-100 px-2 py-0.5 rounded">வடக்கு (North): ச.எண்: 14/1C • நகரளவை: 13/3 (21.60M)</span>
                    <div className="flex items-center gap-1 text-neutral-900 font-black">
                      <Compass className="w-4 h-4 text-sky-600" />
                      <span>வ (N)</span>
                    </div>
                  </div>

                  {/* Layout SVG Scheme */}
                  <div className="w-full max-w-[500px] relative">
                    <svg viewBox="0 0 500 520" className="w-full h-auto">
                      {/* West Road (Yellow strip) */}
                      <rect x="20" y="50" width="70" height="420" fill="#FEF08A" stroke="#EAB308" strokeWidth="2" />
                      <text x="55" y="260" textAnchor="middle" fill="#854D0E" fontSize="12" fontWeight="bold" transform="rotate(-90 55 260)">
                        நிலையிலுள்ள சாலை 7.00மீ (42.20M)
                      </text>
                      <text x="55" y="440" textAnchor="middle" fill="#A16207" fontSize="9" fontWeight="600">
                        T.S: 13/107
                      </text>

                      {/* Surrounding North Label */}
                      <text x="260" y="38" textAnchor="middle" fill="#52525B" fontSize="11" fontWeight="bold">
                        Approved Layout: 25/2019 (21.60m)
                      </text>

                      {/* Main Subdivided 7 Plots (Stacked bottom to top) */}
                      {/* Plot 7 (Top) */}
                      <g onClick={() => setActivePlot(plots[6])} className="cursor-pointer group/plot">
                        <polygon
                          points="90,50 380,50 370,110 90,110"
                          fill={activePlot.id === 7 ? '#38BDF8' : '#F0F9FF'}
                          stroke={activePlot.id === 7 ? '#0284C7' : '#EF4444'}
                          strokeWidth={activePlot.id === 7 ? '3' : '1.5'}
                        />
                        <text x="235" y="85" textAnchor="middle" fill={activePlot.id === 7 ? '#FFFFFF' : '#0F172A'} fontSize="15" fontWeight="900">
                          PLOT 7 (129.3 Sq.M)
                        </text>
                        <text x="105" y="83" fill="#64748B" fontSize="9" fontWeight="bold">6.00m</text>
                        <text x="360" y="83" fill="#64748B" fontSize="9" fontWeight="bold">21.60m</text>
                      </g>

                      {/* Plot 6 */}
                      <g onClick={() => setActivePlot(plots[5])} className="cursor-pointer group/plot">
                        <polygon
                          points="90,110 370,110 360,170 90,170"
                          fill={activePlot.id === 6 ? '#38BDF8' : '#FFFFFF'}
                          stroke={activePlot.id === 6 ? '#0284C7' : '#EF4444'}
                          strokeWidth={activePlot.id === 6 ? '3' : '1.5'}
                        />
                        <text x="230" y="145" textAnchor="middle" fill={activePlot.id === 6 ? '#FFFFFF' : '#0F172A'} fontSize="15" fontWeight="900">
                          PLOT 6 (128.7 Sq.M)
                        </text>
                        <text x="105" y="143" fill="#64748B" fontSize="9" fontWeight="bold">6.00m</text>
                        <text x="350" y="143" fill="#64748B" fontSize="9" fontWeight="bold">21.40m</text>
                      </g>

                      {/* Plot 5 */}
                      <g onClick={() => setActivePlot(plots[4])} className="cursor-pointer group/plot">
                        <polygon
                          points="90,170 360,170 350,230 90,230"
                          fill={activePlot.id === 5 ? '#38BDF8' : '#F0F9FF'}
                          stroke={activePlot.id === 5 ? '#0284C7' : '#EF4444'}
                          strokeWidth={activePlot.id === 5 ? '3' : '1.5'}
                        />
                        <text x="225" y="200" textAnchor="middle" fill={activePlot.id === 5 ? '#FFFFFF' : '#0F172A'} fontSize="15" fontWeight="900">
                          PLOT 5 (127.2 Sq.M)
                        </text>
                        <text x="225" y="215" textAnchor="middle" fill={activePlot.id === 5 ? '#FFFFFF' : '#0369A1'} fontSize="9" fontWeight="bold">
                          ச.எண்: 14/1J • நகரளவை: 13/7
                        </text>
                        <text x="105" y="203" fill="#64748B" fontSize="9" fontWeight="bold">6.00m</text>
                      </g>

                      {/* Plot 4 */}
                      <g onClick={() => setActivePlot(plots[3])} className="cursor-pointer group/plot">
                        <polygon
                          points="90,230 350,230 340,290 90,290"
                          fill={activePlot.id === 4 ? '#38BDF8' : '#FFFFFF'}
                          stroke={activePlot.id === 4 ? '#0284C7' : '#EF4444'}
                          strokeWidth={activePlot.id === 4 ? '3' : '1.5'}
                        />
                        <text x="220" y="265" textAnchor="middle" fill={activePlot.id === 4 ? '#FFFFFF' : '#0F172A'} fontSize="15" fontWeight="900">
                          PLOT 4 (125.4 Sq.M)
                        </text>
                        <text x="105" y="263" fill="#64748B" fontSize="9" fontWeight="bold">6.00m</text>
                        <text x="330" y="263" fill="#64748B" fontSize="9" fontWeight="bold">20.80m</text>
                      </g>

                      {/* Plot 3 */}
                      <g onClick={() => setActivePlot(plots[2])} className="cursor-pointer group/plot">
                        <polygon
                          points="90,290 340,290 330,350 90,350"
                          fill={activePlot.id === 3 ? '#38BDF8' : '#F0F9FF'}
                          stroke={activePlot.id === 3 ? '#0284C7' : '#EF4444'}
                          strokeWidth={activePlot.id === 3 ? '3' : '1.5'}
                        />
                        <text x="215" y="325" textAnchor="middle" fill={activePlot.id === 3 ? '#FFFFFF' : '#0F172A'} fontSize="15" fontWeight="900">
                          PLOT 3 (124.2 Sq.M)
                        </text>
                        <text x="105" y="323" fill="#64748B" fontSize="9" fontWeight="bold">6.00m</text>
                      </g>

                      {/* Plot 2 */}
                      <g onClick={() => setActivePlot(plots[1])} className="cursor-pointer group/plot">
                        <polygon
                          points="90,350 330,350 320,410 90,410"
                          fill={activePlot.id === 2 ? '#38BDF8' : '#FFFFFF'}
                          stroke={activePlot.id === 2 ? '#0284C7' : '#EF4444'}
                          strokeWidth={activePlot.id === 2 ? '3' : '1.5'}
                        />
                        <text x="210" y="385" textAnchor="middle" fill={activePlot.id === 2 ? '#FFFFFF' : '#0F172A'} fontSize="15" fontWeight="900">
                          PLOT 2 (123.0 Sq.M)
                        </text>
                        <text x="105" y="383" fill="#64748B" fontSize="9" fontWeight="bold">6.00m</text>
                        <text x="310" y="383" fill="#64748B" fontSize="9" fontWeight="bold">20.40m</text>
                      </g>

                      {/* Plot 1 (Bottom) */}
                      <g onClick={() => setActivePlot(plots[0])} className="cursor-pointer group/plot">
                        <polygon
                          points="90,410 320,410 310,470 90,470"
                          fill={activePlot.id === 1 ? '#38BDF8' : '#F0F9FF'}
                          stroke={activePlot.id === 1 ? '#0284C7' : '#EF4444'}
                          strokeWidth={activePlot.id === 1 ? '3' : '1.5'}
                        />
                        <text x="205" y="445" textAnchor="middle" fill={activePlot.id === 1 ? '#FFFFFF' : '#0F172A'} fontSize="15" fontWeight="900">
                          PLOT 1 (125.9 Sq.M)
                        </text>
                        <text x="105" y="443" fill="#64748B" fontSize="9" fontWeight="bold">6.20m</text>
                        <text x="290" y="465" fill="#64748B" fontSize="9" fontWeight="bold">20.20m</text>
                      </g>

                      {/* East Boundary Label */}
                      <text x="410" y="260" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="bold" transform="rotate(90 410 260)">
                        கிழக்கு (East): ச.எண்: 14/1I • 13/8 (43.00M)
                      </text>
                    </svg>
                  </div>

                  {/* Bottom South Indicator */}
                  <div className="w-full flex items-center justify-between text-[11px] font-bold text-neutral-500 mt-2 px-2">
                    <span className="font-tamil bg-neutral-100 px-2 py-0.5 rounded">தெற்கு (South): ச.எண்: 14/1N • நகரளவை: 13/9 (20.20M)</span>
                    <span className="text-[10px] text-sky-700 font-bold">Click any plot to inspect</span>
                  </div>

                </div>
              )}

              {/* Quick Specs Bar */}
              <div className="grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-neutral-200 text-center">
                {[
                  { label: "Total Plots", value: "07 மனைகள்" },
                  { label: "Road Width", value: "7.00 M (23 Ft)" },
                  { label: "Total Area", value: "900.00 ச.மீ" },
                  { label: "Approval", value: "SWP/104/2024" },
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
                All dimensions transcribed directly from sanctioned drawing SWP/104/2024.
              </p>

              {/* 7 Plot Buttons */}
              <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-4 gap-2 mt-4">
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
                  <div className="text-right">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 block">
                      {activePlot.statusText}
                    </span>
                    <span className="text-[11px] font-bold text-neutral-500 block mt-1">
                      {activePlot.areaApprox}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                    Verified Blueprint Measurements (SWP/104/2024)
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
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-semibold">Facing:</span>
                    <span className="font-bold text-neutral-800">{activePlot.facing}</span>
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
              onClick={() => onOpenLightbox(layoutInfo.image, "மனை உட்பிரிவு வரைபடம் (Plan of Subdivision)", "Scale 1:400 • Plots 01–07 • 7.00M Road • SWP/104/2024 & SWP/146/2024")}
              className="btn-pill-secondary w-full py-3.5 text-xs font-bold uppercase tracking-wider justify-center"
            >
              <Maximize2 className="w-4 h-4 text-neutral-700" />
              <span>Enlarge Official Drawing Fullscreen</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}