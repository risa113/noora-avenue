import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Compass, MapPin, Navigation, Phone, ShieldCheck } from 'lucide-react';

export default function Advisors({ projectData }) {
  const [scrollIndex, setScrollIndex] = useState(0);

  const landRecords = projectData.advisors || [];

  const handlePrev = () => {
    setScrollIndex((prev) => (prev > 0 ? prev - 1 : landRecords.length - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => (prev < landRecords.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="advisors" className="py-20 lg:py-28 bg-[#FAFAF9] border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="text-left max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 block mb-1">
              DTCP & Satellite Verified Land Records
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Verified Land Demarcation & Map Records
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-2 font-normal leading-relaxed">
              Every residential plot parcel at NOORA AVENUE is demarcated with verified GPS satellite positioning, DTCP layout approvals SWP/104/2024 & SWP/146/2024, and 7.00-meter existing road access.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 hover:text-neutral-950 transition-colors shadow-2xs"
              aria-label="Previous land record"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 hover:text-neutral-950 transition-colors shadow-2xs"
              aria-label="Next land record"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Land Records Grid - Pure Land & Map Imagery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {landRecords.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-5 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Genuine Land / Map Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 mb-4 border border-neutral-100">
                  <img
                    src={item.image}
                    alt={`${item.name} - Noora Avenue DTCP residential plots Melapalayam`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-neutral-900/90 text-white backdrop-blur-md text-[10px] font-bold flex items-center gap-1 shadow-xs">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Verified Record</span>
                  </div>
                </div>

                {/* Land Spec Details */}
                <h3 className="text-base font-extrabold text-neutral-900 leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-neutral-500 mt-0.5">
                  {item.role}
                </p>
                <p className="text-[11px] text-sky-800 font-medium mt-2 bg-sky-50 px-2.5 py-1.5 rounded-lg block border border-sky-100/70 leading-relaxed">
                  {item.specialty}
                </p>
              </div>

              {/* Contact Direct Promoter Desk */}
              <div className="pt-5 mt-5 border-t border-neutral-100">
                <a
                  href={`tel:${projectData.contact.primaryPhoneTel}`}
                  className="w-full btn-pill-primary py-2.5 px-4 text-xs font-bold justify-between shadow-xs hover:shadow-md"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Inquire: {projectData.contact.primaryPhone}</span>
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}