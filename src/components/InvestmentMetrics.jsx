import React, { useState } from 'react';
import { ArrowUpRight, BarChart3, CheckCircle2, TrendingUp } from 'lucide-react';

export default function InvestmentMetrics({ projectData }) {
  const [hoveredMetric, setHoveredMetric] = useState(null);

  const metrics = projectData.investmentMetrics || [];

  return (
    <section id="investment-metrics" className="py-20 lg:py-28 bg-white border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14 text-left">
          <div className="lg:col-span-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 block mb-2">
              Capital Preservation & Growth
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Reliable facilities for stable investments
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-neutral-500 leading-relaxed font-normal">
              Our land parcels are not just square meters — they represent an enduring, legally safeguarded foundation for your capital. DTCP Technical Sanctions SWP/104/2024 & SWP/146/2024 guarantee clean title, no encumbrances, and verified development parameters.
            </p>
          </div>
        </div>

        {/* 3 Metric Cards with Interactive Animated Bar Charts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {metrics.map((item, idx) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredMetric(idx)}
              onMouseLeave={() => setHoveredMetric(null)}
              className="bg-[#FAFAF9] rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>{item.trend}</span>
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-none">
                  {item.value}
                </div>

                <p className="text-xs text-neutral-500 mt-2.5 font-medium leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              {/* Animated Mini Bar Chart Visualization */}
              <div className="pt-8 mt-6 border-t border-neutral-200/70">
                <div className="h-16 flex items-end gap-2.5 px-1">
                  {item.bars.map((barHeight, bIdx) => {
                    const isLast = bIdx === item.bars.length - 1;
                    const isHovered = hoveredMetric === idx;
                    return (
                      <div
                        key={bIdx}
                        className="flex-1 rounded-t-sm transition-all duration-300 relative group/bar"
                        style={{
                          height: `${Math.min(100, (barHeight / 130) * 100)}%`,
                          backgroundColor: isLast
                            ? '#09090B'
                            : isHovered
                            ? '#38BDF8'
                            : '#D4D4D8'
                        }}
                      >
                        {/* Micro-tooltip on hover */}
                        <div className="opacity-0 group-hover/bar:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded pointer-events-none whitespace-nowrap">
                          {barHeight}%
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-[10px] text-neutral-400 font-bold uppercase tracking-wider mt-3">
                  <span>Development Stage</span>
                  <span className="text-neutral-900 font-extrabold">Final Phase</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Statutory Order Guarantee Box */}
        <div className="mt-8 p-6 rounded-3xl bg-neutral-900 text-white text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Official Directorate Clearance
            </span>
            <h4 className="text-lg font-bold text-white">
              Town and Country Planning Sanction: SWP/104/2024 & SWP/146/2024
            </h4>
            <p className="text-xs text-neutral-400 max-w-2xl font-light">
              Park reservation fee of Rs. 54,090.00 fully remitted on 18.12.2024 under TNCDBR Rule 47(6). Complete documentation ready for immediate title scrutiny and spot registration.
            </p>
          </div>

          <a
            href="#approvals"
            className="btn-pill-secondary bg-white text-neutral-900 hover:bg-neutral-100 text-xs px-5 py-3 shrink-0"
          >
            <span>Inspect Approvals</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}