import React from 'react';
import SectionHeading from './SectionHeading';

export default function ProjectIntro({ projectData, onOpenLayoutModal }) {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FAFAF7] bg-arch-grid relative overflow-hidden">
      {/* Top subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E0DBD2] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          badge="ABOUT THE DEVELOPMENT"
          title="NOORA AVENUE"
          subtitle="A meticulously planned DTCP-approved plotted community engineered for residential prestige and enduring investment assurance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT: Project Image with Warm Paper Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#F5F3EE] p-3 border border-[#EDE9E1] card-shadow group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/assets/images/land_aerial_survey.jpg"
                  alt="Noora Avenue Demarcated Plotted Land Development"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Bottom floating badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#FAFAF7]/95 backdrop-blur-md border border-[#EDE9E1] shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-[#1B6CA8]">Official Plotted Subdivision</p>
                  <p className="text-sm font-extrabold text-[#1A2332]">Plots 01 through 07</p>
                </div>
                <button
                  onClick={onOpenLayoutModal}
                  className="btn-luxury px-4 py-2 rounded-lg bg-[#1B6CA8] text-white text-xs font-bold hover:bg-[#3D8EC7] transition-colors shadow-sm"
                >
                  View Blueprint
                </button>
              </div>
            </div>

            {/* Architectural accent note */}
            <div className="hidden sm:block absolute -bottom-4 -right-2 px-5 py-3 rounded-xl bg-[#FFFFFF] border border-[#EDE9E1] card-shadow">
              <div className="text-[10px] text-[#8896A8] font-bold uppercase tracking-wider">Directorate Clearance</div>
              <div className="text-sm font-black text-[#1A2332]">Order SWP/104/2024</div>
            </div>
          </div>

          {/* RIGHT: Editorial Content & Verified Metrics */}
          <div className="lg:col-span-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A2332] tracking-tight mb-4">
              Designed for Discriminating Homeowners & Sound Investors
            </h3>

            <p className="text-[#4A5568] text-base leading-relaxed mb-4 font-normal">
              <strong className="text-[#1A2332]">NOORA AVENUE</strong> represents a premier plotted layout sanctioned under official DTCP guidelines. Designed to offer maximum privacy, optimum solar orientation, and wide direct roadway frontages, the project provides an uncompromising foundation for custom villa construction.
            </p>

            <p className="text-[#4A5568] text-base leading-relaxed mb-8 font-normal">
              Every individual plot within this strictly bounded 7-unit development enjoys frontage directly off the 7.00-meter existing road, eliminating congested thoroughfares while securing enduring community prestige.
            </p>

            {/* Verified Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {projectData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F5F3EE] border border-[#EDE9E1] hover:border-[#1B6CA8]/30 transition-all duration-300 card-shadow"
                >
                  <span className="text-[10px] font-bold text-[#1B6CA8] uppercase tracking-wider block mb-1">
                    {stat.label}
                  </span>
                  <span className="text-lg sm:text-xl font-black text-[#1A2332] block">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#8896A8] mt-1 block">
                    {stat.subtext}
                  </span>
                </div>
              ))}
            </div>

            {/* Tamil Quote Card */}
            <div className="mt-8 p-5 rounded-xl bg-[#F5F3EE] border-l-4 border-[#1B6CA8] border-y border-r border-[#EDE9E1]">
              <p className="text-sm font-tamil text-[#1A2332] font-semibold leading-relaxed">
                “{projectData.tamilQuote}”
              </p>
              <span className="text-[11px] text-[#1B6CA8] font-bold uppercase tracking-wider mt-1.5 block">
                NOORA AVENUE • Residential Opportunities
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}