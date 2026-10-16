import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ projectData }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Plots (1-8)", href: "#plots-catalog" },
    { label: "Land & Map Records", href: "#advisors" },
    { label: "Sanctioned Blueprint", href: "#layout" },
    { label: "Approvals", href: "#approvals" },
    { label: "Location", href: "#location" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md py-3.5 border-b border-neutral-200/80 shadow-xs'
        : 'bg-white/80 backdrop-blur-sm py-5 border-b border-neutral-200/40'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">

          {/* Brand Logo - Minimalist Editorial */}
          <a href="#" className="flex items-center gap-3 group select-none">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-black text-lg tracking-wider shadow-sm group-hover:scale-105 transition-transform duration-300">
              N
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-xl tracking-tight text-neutral-900 leading-none group-hover:text-neutral-700 transition-colors">
                {projectData.brandName}
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-neutral-500 leading-none">
                  {projectData.projectTitle}
                </span>
                <span className="w-1 h-1 rounded-full bg-sky-500" />
                <span className="text-[9px] font-semibold text-sky-700 uppercase tracking-wider">
                  DTCP
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-neutral-600 hover:text-neutral-950 transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-neutral-900 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${projectData.contact.primaryPhoneTel}`}
              className="flex items-center gap-2 text-xs font-semibold text-neutral-700 hover:text-neutral-950 px-3.5 py-2 rounded-full border border-neutral-200 hover:border-neutral-300 bg-neutral-50/50 hover:bg-neutral-100 transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-900" />
              <span>{projectData.contact.primaryPhone}</span>
            </a>

            <a
              href="#contact"
              className="btn-pill-primary text-xs py-2.5 px-5"
            >
              <span>Book Site Visit</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${projectData.contact.primaryPhoneTel}`}
              className="p-2.5 text-neutral-800 rounded-full hover:bg-neutral-100"
              aria-label="Call"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full border border-neutral-200 text-neutral-800 hover:bg-neutral-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-neutral-200 px-6 py-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-neutral-700 hover:text-neutral-950 py-3 border-b border-neutral-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}

            <div className="pt-5 flex flex-col gap-3">
              <a
                href={projectData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-emerald-50 text-emerald-800 font-bold text-sm border border-emerald-200"
              >
                WhatsApp Inquiry
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-neutral-900 text-white font-bold text-sm shadow-md"
              >
                Book Your Plot
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
