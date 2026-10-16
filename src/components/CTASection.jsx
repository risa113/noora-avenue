import React from 'react';
import { ArrowUpRight, Phone, MessageCircle } from 'lucide-react';

export default function CTASection({ projectData }) {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#1A2332] text-white">
      {/* Cerulean atmospheric glow backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1B6CA8]/20 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#3D8EC7]/15 blur-[100px]" />
      </div>

      {/* Thin subtle grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none" />

      {/* Top architectural line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A8CEEA]/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10 text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-[11px] font-bold uppercase tracking-[0.2em] text-[#A8CEEA] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A8CEEA] animate-pulse" />
          {projectData.approvalBadge}
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5 leading-tight">
          YOUR NEXT PROPERTY<br className="hidden sm:block" />
          <span className="text-[#A8CEEA]"> STARTS HERE</span>
        </h2>

        <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed mb-4 font-light">
          Discover <strong className="text-white font-semibold">NOORA AVENUE - II</strong> and explore the available plotted development. Direct ownership with verified DTCP approvals and 30-feet wide internal access.
        </p>

        <p className="text-sm sm:text-base font-tamil text-[#A8CEEA] font-semibold max-w-lg mx-auto mb-12">
          “{projectData.tamilQuote}”
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="btn-luxury w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1B6CA8] hover:bg-[#3D8EC7] text-white font-bold text-sm tracking-wide shadow-xl cerulean-glow-lg"
          >
            <span>BOOK YOUR PLOT</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={`tel:${projectData.contact.primaryPhoneTel}`}
            className="btn-luxury w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent border border-white/25 text-white hover:border-white/50 font-bold text-sm tracking-wide transition-all"
          >
            <Phone className="w-4 h-4 text-[#A8CEEA]" />
            <span>CONTACT US</span>
          </a>

          <a
            href={projectData.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/15 font-bold text-sm tracking-wide transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#A8CEEA]" />
            <span>WHATSAPP US</span>
          </a>
        </div>

      </div>
    </section>
  );
}
