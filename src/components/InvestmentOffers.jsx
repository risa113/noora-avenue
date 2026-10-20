import React from 'react';
import { CheckCircle2, Download, ExternalLink, MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function InvestmentOffers({ projectData, onOpenLightbox }) {
  const offers = projectData.investmentOffers || [];

  return (
    <section id="investment-offers" className="py-20 lg:py-28 bg-[#FAFAF9] border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 block mb-1">
              Curated Land Opportunities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Offers for investments
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-md font-medium">
            Handpicked signature residential plot parcels within NOORA AVENUE selected for highest custom construction potential and immediate sub-registrar registration.
          </p>
        </div>

        {/* Horizontal Investment Rows */}
        <div className="space-y-6 text-left">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl p-5 sm:p-7 border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center group"
            >
              
              {/* Left: Thumbnail with Category Badge */}
              <div className="lg:col-span-4 relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-neutral-100 border border-neutral-200 p-2 flex items-center justify-center">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 rounded-xl"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-neutral-900 shadow-xs">
                  {offer.plotNumber}
                </div>
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-neutral-900/90 backdrop-blur-md text-[10px] font-bold text-white shadow-xs">
                  {offer.category}
                </div>
              </div>

              {/* Middle: Details & Specs */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-sky-700">{offer.plotNumber}</span>
                  <span className="text-neutral-300">•</span>
                  <span className="text-xs text-neutral-500 font-medium font-tamil">கொக்கடிகுளம் கிராமம் • மேலப்பாளையம்</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
                  {offer.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {offer.description}
                </p>

                {/* Specs Chips Row */}
                <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-semibold text-neutral-700">
                  <span className="px-3 py-1 rounded-lg bg-neutral-100 border border-neutral-200/80">
                    {offer.dimensions}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-sky-50 text-sky-800 border border-sky-100">
                    {offer.roadWidth} Road
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-neutral-100 text-neutral-600 font-tamil">
                    {offer.surveyNo}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`tel:${projectData.contact.primaryPhoneTel}`}
                    className="btn-pill-primary text-xs py-2.5 px-5"
                  >
                    <span>Book Site Visit</span>
                  </a>

                  <button
                    onClick={() => onOpenLightbox(projectData.layoutInfo.image, `${offer.plotNumber} Blueprint`, "Official Subdivision Layout Map SWP/104/2024 & SWP/146/2024")}
                    className="btn-pill-secondary text-xs py-2.5 px-4"
                  >
                    <Download className="w-3.5 h-3.5 text-neutral-600" />
                    <span>View Layout Plan</span>
                  </button>
                </div>
              </div>

              {/* Right: Key Return & Title Attributes */}
              <div className="lg:col-span-3 lg:border-l lg:border-neutral-200/80 lg:pl-8 space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-neutral-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Statutory Approval
                  </span>
                  <div className="text-base font-extrabold text-neutral-900 mt-0.5">
                    {offer.dtcpBadge}
                  </div>
                  <span className="text-[11px] text-neutral-500 font-medium">SWP/104/2024</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                    Registration Timeline
                  </span>
                  <div className="text-base font-extrabold text-emerald-600 mt-0.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{offer.clearance}</span>
                  </div>
                  <span className="text-[11px] text-neutral-500 font-medium">Spot Sub-Registrar Filing</span>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    Existing Road Access
                  </span>
                  <span className="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full inline-block">
                    23 Ft (7.00M) Road Access
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}