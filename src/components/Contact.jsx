import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Send, MapPin, ShieldCheck } from 'lucide-react';

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
      `Hello, I am interested in NOORA AVENUE (SWP/104/2024).\nName: ${formData.name}\nPhone: ${formData.phone}\nPlot Interest: ${formData.plotInterest}\nMessage: ${formData.message || 'Please share availability and pricing details.'}`
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
            Speak directly with our authorized project promoters for 7-plot allocations, site walkthroughs, and official registration documents.
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
                  Official contact number for NOORA AVENUE. Available for instant telephonic consultation and immediate site walkthrough scheduling.
                </p>
              </div>

              {/* Sole Authorized Contact Phone */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-sky-400 block">Authorized Contact Desk</span>
                  <a
                    href={`tel:${projectData.contact.primaryPhoneTel}`}
                    className="text-xl sm:text-2xl font-black text-white hover:text-sky-300 transition-colors block mt-1"
                  >
                    {projectData.contact.primaryPhoneFormatted}
                  </a>
                  <span className="text-[11px] text-neutral-400 block mt-0.5">Direct Line • 9:00 AM – 8:00 PM</span>
                </div>
                <a
                  href={`tel:${projectData.contact.primaryPhoneTel}`}
                  className="px-4 py-2.5 rounded-full bg-white text-neutral-900 text-xs font-bold hover:bg-neutral-100 transition-colors shrink-0"
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
                <span>Chat on WhatsApp (+91 94432 83369)</span>
              </a>

              {/* Direct Address Strip */}
              <div className="pt-2 border-t border-white/10 flex items-start gap-2.5 text-xs text-neutral-400">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{projectData.locationDetails.address}</span>
              </div>
            </div>

            {/* Tamil Banner */}
            <div className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-sm text-left">
              <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block mb-1">
                Land Value Motto
              </span>
              <p className="text-sm font-tamil text-neutral-900 font-bold leading-relaxed">
                “{projectData.tamilQuote}”
              </p>
              <div className="mt-2 text-xs text-neutral-500 font-medium">
                DTCP Approval: SWP/104/2024 • 7 Sanctioned Residential Plots
              </div>
            </div>

          </div>

          {/* Right Column: Instant Plot Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-neutral-200 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-sky-700 block mb-1">
                Instant Online Enquiry
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
                Register Your Residential Plot Interest
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1 mb-6">
                Receive exact boundary dimensions, pricing per cent, and official sanction copies directly on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Mohamed Ibrahim"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 bg-[#FAFAF9]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 bg-[#FAFAF9]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                    Select Plot of Interest (1 to 7)
                  </label>
                  <select
                    value={formData.plotInterest}
                    onChange={(e) => setFormData({ ...formData, plotInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900 bg-[#FAFAF9]"
                  >
                    <option value="Plot 01 (Southern Corner - 125.9 Sq.M)">Plot 01 (Southern Corner - 125.86 Sq.M / 3.11 Cts)</option>
                    <option value="Plot 02 (Standard Residential - 123.0 Sq.M)">Plot 02 (Standard Residential - 123.00 Sq.M / 3.04 Cts)</option>
                    <option value="Plot 03 (Standard Residential - 124.2 Sq.M)">Plot 03 (Standard Residential - 124.20 Sq.M / 3.07 Cts)</option>
                    <option value="Plot 04 (Central Prime - 125.4 Sq.M)">Plot 04 (Central Prime - 125.40 Sq.M / 3.10 Cts)</option>
                    <option value="Plot 05 (Core Residential - 127.2 Sq.M)">Plot 05 (Core Residential - 127.20 Sq.M / 3.14 Cts)</option>
                    <option value="Plot 06 (Standard Residential - 128.7 Sq.M)">Plot 06 (Standard Residential - 128.70 Sq.M / 3.18 Cts)</option>
                    <option value="Plot 07 (Northern Villa - 129.3 Sq.M)">Plot 07 (Northern Villa - 129.30 Sq.M / 3.20 Cts)</option>
                    <option value="Any Available Plot / Full Layout Enquiry">Any Available Plot / Full Layout Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                    Your Specific Message or Requirement
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Interested in booking Plot 01. Please send price per cent and schedule a site visit."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 bg-[#FAFAF9]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-pill-primary w-full py-3.5 text-xs font-bold uppercase tracking-wider justify-center shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit & Connect on WhatsApp</span>
                </button>

                {submitted && (
                  <p className="text-xs text-emerald-600 font-bold text-center pt-2 flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>WhatsApp chat opened! Our authorized promoter will assist you immediately.</span>
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}