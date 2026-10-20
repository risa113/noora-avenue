import React from 'react';
import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { asset } from '../utils/assetUrl';

export default function SmartSelection({ projectData }) {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Typography & Action */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 block">
              Direct Land Ownership
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.12]">
              Smart selection of premium residential plots
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed font-normal">
              We offer a curated selection of 7 residential plots — from corner plots with generous road frontage to peaceful villa plots — each chosen for its clear DTCP title, optimal west-facing road frontage, and immediate building readiness.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Strict DTCP Technical Sanctions SWP/104/2024 & SWP/146/2024",
                "7.00-meter (23 ft) wide existing road connectivity (TS No: 13/107)",
                "Clear surveyed boundaries with individual subdivision demarcation",
                "Situated at Kokkadikulam Scheme No: 2, near Annai Hajira Women's College"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-neutral-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#plots-catalog"
                className="btn-pill-primary px-6 py-3.5 text-xs"
              >
                <span>Inspect 7 Available Plots</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${projectData.contact.primaryPhoneTel}`}
                className="btn-pill-secondary px-6 py-3.5 text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-700" />
                <span>Get Plot Consultation</span>
              </a>
            </div>
          </div>

          {/* Right Column: Staggered Satellite & Blueprint Image Collage */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-4 items-center">
              
              {/* Image 1: Real Drone Aerial Survey */}
              <div className="col-span-7 relative rounded-3xl overflow-hidden shadow-xl border border-neutral-200 group bg-neutral-900">
                <img
                  src={asset("/assets/images/real_site_aerial_drone.jpg")}
                  alt="Actual Drone Aerial Photograph of Noora Avenue Plotted Site"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md text-left text-xs font-bold text-neutral-900 border border-neutral-200 shadow-sm">
                  <span className="text-[10px] text-sky-700 uppercase block font-extrabold">Kokkadikulam Scheme No: 2</span>
                  Actual Drone Aerial Layout Demarcation (7 Plots)
                </div>
              </div>

              {/* Image 2 & 3: Sanction Blueprint & Real Ground View */}
              <div className="col-span-5 space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-neutral-200 group bg-white p-2">
                  <img
                    src={asset("/assets/images/plot_layout_approved_7plots.png")}
                    alt="Sanctioned Subdivision Drawing SWP/104/2024"
                    className="w-full h-44 sm:h-52 object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-neutral-900 text-white text-[10px] font-bold shadow-xs">
                    Scale 1:400
                  </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-neutral-200 group bg-neutral-100">
                  <img
                    src={asset("/assets/images/real_site_ground_stones.jpg")}
                    alt="7.00M Existing Road Infrastructure & Demarcated Land Plots in Melapalayam"
                    className="w-full h-40 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-neutral-900/90 text-white text-[10px] font-bold shadow-xs">
                    7.00M (23 Ft) Road
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}