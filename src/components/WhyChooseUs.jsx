import React from 'react';
import { Award, Compass, Shield, TrendingUp } from 'lucide-react';

const icons = [Shield, Award, Compass, TrendingUp];

export default function WhyChooseUs({ projectData }) {
  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-[#FAFAF9] border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 block mb-2">
            Investment Assurance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Why choose {projectData.fullProjectName}
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 mt-3 leading-relaxed">
            Engineered for long-term residential and investment consideration with absolute statutory transparency.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl text-left">
          {projectData.advantages.map((adv, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-neutral-900 mb-1.5 group-hover:text-neutral-700 transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {adv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Sub-bar */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-neutral-200 max-w-3xl mx-auto text-center shadow-2xs">
          <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
            Prudent Real Estate Principles • Sustainable Capital Growth
          </p>
          <p className="text-xs text-neutral-600 mt-1">
            Plotted land developments provide intrinsic security through direct land rights, architectural freedom, and low overhead holding costs.
          </p>
        </div>

      </div>
    </section>
  );
}