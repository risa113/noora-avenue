import React from 'react';

export default function SectionHeading({ badge, title, subtitle, center = true }) {
  return (
    <div className={`mb-14 md:mb-18 ${center ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1B6CA8]/20 bg-[#D6E9F5]/60 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1B6CA8]" />
          <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#1B6CA8]">{badge}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold tracking-tight leading-tight text-[#1A2332] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-[#8896A8] leading-relaxed font-light">{subtitle}</p>
      )}
      {/* Architectural accent rule */}
      <div className={`mt-7 flex items-center gap-2.5 ${center ? 'justify-center' : ''}`}>
        <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#1B6CA8]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#1B6CA8]" />
        <div className="h-px w-5 bg-[#A8CEEA]" />
      </div>
    </div>
  );
}
