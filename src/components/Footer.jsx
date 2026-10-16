import React from 'react';
import { ArrowUp, MapPin, MessageSquare, Phone, ShieldCheck } from 'lucide-react';

export default function Footer({ projectData }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-400 pt-16 pb-12 border-t border-neutral-800 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Project Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-neutral-900 flex items-center justify-center font-black text-lg">
                N
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white block leading-none">
                  {projectData.brandName}
                </span>
                <span className="text-[10px] font-bold tracking-[0.18em] text-neutral-400 uppercase block mt-1">
                  {projectData.projectTitle} • DTCP APPROVED
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-neutral-200">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Sanction Order: SWP/68/2024</span>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-light">
              An exclusive 8-plot DTCP approved residential development. Engineered with 30-feet internal road access, legally certified documentation, and rapid possession.
            </p>

            <p className="text-xs font-tamil text-neutral-300 font-medium">
              “{projectData.tamilQuote}”
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white block mb-4">
              Quick Navigation
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#plots-catalog" className="hover:text-white transition-colors">Plots Catalog (1-8)</a></li>
              <li><a href="#advisors" className="hover:text-white transition-colors">Land & Map Records</a></li>
              <li><a href="#layout" className="hover:text-white transition-colors">Subdivision Blueprint</a></li>
              <li><a href="#approvals" className="hover:text-white transition-colors">DTCP Sanction Order</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Satellite Location</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Buyer FAQs</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Sales Desk</a></li>
            </ul>
          </div>

          {/* Official Contact Info & NAP Local SEO */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white block mb-4">
              Authorized Representatives & Address
            </span>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-xs text-neutral-300 leading-relaxed font-medium">
                  {projectData.locationDetails.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400" />
                <a 
                  href={`tel:${projectData.contact.primaryPhoneTel}`}
                  className="font-bold text-white hover:text-sky-300 transition-colors"
                >
                  {projectData.contact.primaryPhoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400" />
                <a 
                  href={`tel:${projectData.contact.secondaryPhoneTel}`}
                  className="font-bold text-white hover:text-sky-300 transition-colors"
                >
                  {projectData.contact.secondaryPhoneFormatted}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={projectData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-primary bg-white/10 hover:bg-white/15 text-white text-xs py-2.5 px-4 inline-flex items-center gap-2 border border-white/15"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
          
          <div className="text-left max-w-3xl">
            <p className="leading-relaxed">
              <strong className="text-neutral-400">Disclaimer:</strong> Information displayed on this portal is strictly based on official project documents and government sanctions. All measurements and layout provisions correspond to DTCP technical sanction order SWP/68/2024.
            </p>
            <p className="mt-2 text-neutral-500">
              © {new Date().getFullYear()} {projectData.brandName} {projectData.projectTitle}. All rights reserved. DTCP Approved Layout.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10 transition-colors shrink-0"
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </footer>
  );
}
