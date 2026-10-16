import React from 'react';
import SectionHeading from './SectionHeading';
import { ShieldCheck, FileCheck, MapPin, Building2 } from 'lucide-react';

const iconMap = { ShieldCheck, FileCheck, MapPin, Building2 };

export default function Highlights({ projectData }) {
  return (
    <section id="highlights" className="py-24 lg:py-32 bg-[#F5F3EE] bg-arch-grid-warm relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E0DBD2] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          badge="PROJECT DISTINCTIONS"
          title="DISTINCTIVE HIGHLIGHTS"
          subtitle="Every dimension of NOORA AVENUE - II is planned with uncompromising legal integrity and infrastructural foresight."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectData.highlights.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group relative bg-[#FAFAF7] rounded-2xl p-7 border border-[#EDE9E1] hover:border-[#1B6CA8]/40 card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Subtle top indicator */}
                  <div className="w-10 h-0.5 bg-[#1B6CA8]/30 rounded-full mb-6 group-hover:w-16 group-hover:bg-[#1B6CA8] transition-all duration-300" />

                  {/* Icon */}
                  <div className="w-13 h-13 rounded-xl bg-[#D6E9F5]/70 border border-[#A8CEEA]/50 flex items-center justify-center text-[#1B6CA8] mb-5 group-hover:bg-[#1B6CA8] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-black text-[#1A2332] tracking-tight uppercase mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#4A5568] leading-relaxed font-tamil">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EDE9E1] flex items-center justify-between text-[10px] font-bold text-[#8896A8]">
                  <span>VERIFIED ADVANTAGE</span>
                  <span className="text-[#1B6CA8]">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
