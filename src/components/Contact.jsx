import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Send } from 'lucide-react';

export default function Contact({ projectData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plotInterest: 'Plot 01 (Corner)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello, I am interested in NOORA AVENUE - II.\nName: ${formData.name}\nPhone: ${formData.phone}\nPlot Interest: ${formData.plotInterest}\nMessage: ${formData.message || 'Please share availability and pricing details.'}`
    );
    window.open(`https://wa.me/919443283369?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFAF9] border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 block mb-2">
            Direct Coordination Desk
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Connect with our sales desk
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 mt-3 leading-relaxed">
            Speak directly with our authorized project coordinators for plot allocations, site walkthroughs, and official registration documents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
          
          {/* Left Column: Direct Phone and Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 sm:p-8 rounded-3xl bg-neutral-900 text-white shadow-xl space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 block mb-1">
                  Direct Sales & Promoters Line
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  {projectData.brandName} {projectData.projectTitle}
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Official contact numbers verified from project records. Available for instant telephonic consultation and immediate site walkthrough scheduling.
                </p>
              </div>

              {/* Phone 1 */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-sky-400 block">Primary Contact</span>
                  <a
                    href={`tel:${projectData.contact.primaryPhoneTel}`}
                    className="text-lg sm:text-xl font-black text-white hover:text-sky-300 transition-colors block mt-0.5"
                  >
                    {projectData.contact.primaryPhoneFormatted}
                  </a>
                </div>
                <a
                  href={`tel:${projectData.contact.primaryPhoneTel}`}
                  className="px-4 py-2 rounded-full bg-white text-neutral-900 text-xs font-bold hover:bg-neutral-100 transition-colors"
                >
                  Call Now
                </a>
              </div>

              {/* Phone 2 */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-sky-400 block">Secondary Contact</span>
                  <a
                    href={`tel:${projectData.contact.secondaryPhoneTel}`}
                    className="text-lg sm:text-xl font-black text-white hover:text-sky-300 transition-colors block mt-0.5"
                  >
                    {projectData.contact.secondaryPhoneFormatted}
                  </a>
                </div>
                <a
                  href={`tel:${projectData.contact.secondaryPhoneTel}`}
                  className="px-4 py-2 rounded-full bg-white text-neutral-900 text-xs font-bold hover:bg-neutral-100 transition-colors"
                >
                  Call Now
                </a>
              </div>

              {/* WhatsApp Button */}
              <a
                href={projectData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-pill-primary bg-emerald-600 hover:bg-emerald-700 py-3.5 px-6 text-xs font-bold tracking-wider uppercase justify-center shadow-lg border border-emerald-500"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp (+91)</span>
              </a>

            </div>

            {/* Tamil Banner */}
            <div className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-sm text-left">
              <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block mb-1">
                Land Value Motto
              </span>
              <p className="text-sm font-tamil text-neutral-900 font-bold leading-relaxed">
                “{projectData.tamilQuote}”
              </p>
            </div>

          </div>

          {/* Right Column: Instant Plot Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-neutral-200 shadow-sm">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-700 block mb-1">
                Direct Submission
              </span>
              <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight mb-2">
                Send an allocation inquiry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mb-6">
                Receive instant brochure PDF, sanction order copy, and latest plot availability via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mohammed Farooq"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-hidden focus:border-neutral-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94432 83369"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-hidden focus:border-neutral-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                    Plot of Interest
                  </label>
                  <select
                    value={formData.plotInterest}
                    onChange={(e) => setFormData({ ...formData, plotInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-hidden focus:border-neutral-900 transition-colors"
                  >
                    <option value="Plot 01 (Corner)">Plot 01 — Corner / Southern (21.90M × 6.50M)</option>
                    <option value="Plot 02 (Standard)">Plot 02 — Standard Residential (21.90M × 6.50M)</option>
                    <option value="Plot 03 (Standard)">Plot 03 — Standard Residential (21.90M × 6.50M)</option>
                    <option value="Plot 04 (Central Prime)">Plot 04 — Central Prime (21.90M × 6.50M)</option>
                    <option value="Plot 05 (Central Prime)">Plot 05 — Central Prime (21.90M × 6.50M)</option>
                    <option value="Plot 06 (Standard)">Plot 06 — Standard Residential (21.20M × 6.50M)</option>
                    <option value="Plot 07 (Executive)">Plot 07 — Executive Curve (16.10M × 6.50M)</option>
                    <option value="Plot 08 (Villa)">Plot 08 — Northern Villa Cul-de-sac (16.40M × 7.00M)</option>
                    <option value="Any Plot">Any Available Plot</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                    Your Specific Message or Inquiry
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Please let me know pricing, down payment terms, and next available site walkthrough slot."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-hidden focus:border-neutral-900 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-pill-primary w-full py-4 text-xs font-bold uppercase tracking-wider justify-center shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>

              {submitted && (
                <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center gap-3 text-xs text-emerald-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Inquiry prepared! Opening WhatsApp to connect directly with the sales coordinator.</span>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
