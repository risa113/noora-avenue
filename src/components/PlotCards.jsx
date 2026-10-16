import React from 'react';
import SectionHeading from './SectionHeading';
import { Phone } from 'lucide-react';

export default function PlotCards({ projectData }) {
  const { plots } = projectData;

  return (
    <section id="plots" className="py-24 lg:py-32 bg-[#FAFAF7] bg-arch-grid relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E0DBD2] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          badge="INDIVIDUAL PLOT DIRECTORY"
          title="AVAILABLE RESIDENTIAL PLOTS (01 - 08)"
          subtitle="All side dimensions verified directly from the DTCP sanctioned blueprint. Contact for real-time availability confirmation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plots.map((plot) => (
            <div
              key={plot.id}
              className="bg-[#FAFAF7] rounded-2xl p-6 border border-[#EDE9E1] hover:border-[#1B6CA8]/40 card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#1A2332] group-hover:text-[#1B6CA8] transition-colors">
                    {plot.plotNumber}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D6E9F5] text-[#1B6CA8] border border-[#A8CEEA]/50">
                    {plot.category}
                  </span>
                </div>

                <div className="h-0.5 w-full bg-[#EDE9E1] mb-5">
                  <div className="h-0.5 w-10 bg-[#1B6CA8] group-hover:w-full transition-all duration-500" />
                </div>

                <div className="space-y-3 mb-6 flex-1 text-left">
                  <div className="bg-[#F5F3EE] p-3 rounded-xl border border-[#EDE9E1]">
                    <span className="text-[10px] uppercase font-bold text-[#1B6CA8] block mb-1.5">
                      Verified Side Dimensions
                    </span>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] text-[#4A5568]">
                      <div>N: <strong className="text-[#1A2332] font-bold">{plot.dimensions.north}</strong></div>
                      <div>S: <strong className="text-[#1A2332] font-bold">{plot.dimensions.south}</strong></div>
                      <div>E: <strong className="text-[#1A2332] font-bold">{plot.dimensions.east}</strong></div>
                      <div>W: <strong className="text-[#1B6CA8] font-bold">{plot.dimensions.west}</strong></div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#8896A8] block">Road Frontage</span>
                    <span className="text-xs font-bold text-[#1A2332] mt-0.5 block">{plot.roadFrontage}</span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#8896A8] block">Survey Details</span>
                    <span className="text-xs font-medium text-[#1B6CA8] font-tamil mt-0.5 block">{plot.surveyDetails}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EDE9E1]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#1B6CA8]" />
                  <span className="text-xs font-bold text-[#1B6CA8]">{plot.statusText}</span>
                </div>

                <a
                  href={`tel:${projectData.contact.primaryPhoneTel}`}
                  className="btn-luxury w-full py-2.5 px-4 rounded-xl bg-[#F5F3EE] hover:bg-[#1B6CA8] text-[#1A2332] hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 border border-[#EDE9E1] hover:border-[#1B6CA8]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Enquire Status</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-[#F5F3EE] border border-[#EDE9E1] max-w-3xl mx-auto text-center card-shadow">
          <p className="text-sm text-[#4A5568] leading-relaxed">
            For specific plot dimensions, site bookings & availability — call directly at{' '}
            <strong className="text-[#1A2332]">{projectData.contact.primaryPhoneFormatted}</strong> or{' '}
            <strong className="text-[#1A2332]">{projectData.contact.secondaryPhoneFormatted}</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
