import React from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../data/projectData';
import RealSlideshow from '../components/RealSlideshow';
import InquiryForm from '../components/InquiryForm';

export default function HomePage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative bg-surface-container-low py-10 sm:py-16 md:py-20 joinery-border-b">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-space-md md:px-margin-desktop">
          {/* Meta Pill and Editorial Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 text-xs">
            <div className="inline-flex items-center space-x-2 border border-outline-variant bg-surface-container-lowest px-3 py-1 sm:px-3.5 sm:py-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-wider text-secondary">
                7 Designated Parcels • DTCP Regularisation SWP/104/2024
              </span>
            </div>
            <span className="font-tabular-spec text-[11px] sm:text-tabular-spec text-outline">
              Survey No: 14/1J • TS No: 13/7 • Kokkadikulam Scheme No: 2
            </span>
          </div>

          {/* Headline & Editorial Narrative Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-8 sm:mb-12">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-4xl md:text-display-xl font-display-xl text-primary font-normal leading-tight">
                A More Considered Way to Own Land.
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pl-4">
              <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Preserved natural topography and verified cadastral boundaries in an architecturally planned countryside enclave. Positioned just 500 meters from Annai Hajira Women's College in Melapalayam.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/plot-layout"
                  className="inline-block text-center bg-primary-container text-surface-container-lowest px-6 py-3 font-label-sm text-xs sm:text-label-sm uppercase tracking-widest hover:bg-secondary transition-colors"
                >
                  Explore 7-Plot Layout
                </Link>
                <Link
                  to="/inquire"
                  className="inline-block text-center border border-outline-variant bg-surface-container-lowest px-6 py-3 font-label-sm text-xs sm:text-label-sm uppercase tracking-widest text-primary hover:border-tertiary transition-colors"
                >
                  Request Official Blueprint
                </Link>
              </div>
            </div>
          </div>

          {/* Cinematic Slideshow of Real Ground Photos */}
          <RealSlideshow />
        </div>
      </section>

      {/* SECTION 01 PREVIEW: STEWARDSHIP & PHILOSOPHY */}
      <section className="py-14 md:py-24 bg-surface joinery-border-b">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-space-md md:px-margin-desktop">
          <div className="mb-10 sm:mb-12">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">
              01 / Stewardship &amp; Investment Security
            </span>
            <div className="w-12 h-px bg-secondary"></div>
          </div>

          {/* Pull Quote & Value Tag */}
          <div className="max-w-4xl mb-12 sm:mb-16 bg-surface-container-low p-6 sm:p-8 joinery-border">
            <blockquote className="text-xl sm:text-2xl md:text-headline-lg font-headline-lg text-primary italic leading-relaxed">
              "Land is not merely property; it is an enduring relationship with topography, light, and natural heritage."
            </blockquote>
            <p className="font-body-md text-xs sm:text-sm text-secondary mt-3">
              — "இன்று வாங்கும் ஒரு நல்ல மனை, உங்கள் தலைமுறைக்கான நிரந்தரப் பாதுகாப்பு!" (Invest in fertile, clear-titled soil that creates generational wealth)
            </p>
          </div>

          {/* Editorial Content & Feature Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-12">
            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-headline-md text-primary leading-snug">
                Why Noora Avenue 2 is Melapalayam's Most Coveted Plotted Enclave
              </h3>
              <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant leading-relaxed">
                Finding clear-titled, fully approved residential land in Melapalayam with genuine municipal road access is exceptionally rare. <strong className="text-primary font-semibold">{projectData.brandName}</strong> offers an exclusive boutique enclave of just 7 sanctioned plots, purposefully designed to eliminate the crowding, legal confusion, and infrastructure deficits common in conventional layouts.
              </p>
              <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant leading-relaxed">
                Positioned in <span className="text-primary font-medium">Kokkadikulam Scheme No: 2</span>, directly along an existing 7.00-meter (23-ft) avenue road and merely 500 meters from Annai Hajira Women's College, every parcel is leveled, surveyed, and staked with permanent granite boundary stones — ready for immediate home construction or high-yield capital appreciation.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  to="/the-land"
                  className="inline-flex items-center space-x-2 text-primary font-label-sm text-xs uppercase tracking-wider border-b border-primary pb-1 hover:text-secondary transition-colors"
                >
                  <span>Read Full Stewardship Dossier</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
                <a
                  href={`https://wa.me/919443283369?text=${encodeURIComponent('Hello Noora Avenue 2, I would like to know the current pricing and availability of the 7 plots in Melapalayam.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-[#1EBE5D] font-tabular-spec text-xs font-semibold hover:underline"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>WhatsApp for Pricing Details</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 border-t lg:border-t-0 lg:border-l joinery-border pt-6 lg:pt-0 lg:pl-10">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary block">
                The Four Pillars of Guaranteed Peace of Mind
              </span>

              <div className="space-y-3">
                <div className="bg-surface-container-lowest p-4 joinery-border shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-secondary text-lg">verified</span>
                    <h4 className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
                      100% DTCP Approved &amp; Unencumbered Title
                    </h4>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant">
                    Orders SWP/104/2024 &amp; SWP/146/2024. Spot registration ready at the Melapalayam Sub-Registrar Office with zero legal encumbrance.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-4 joinery-border shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-secondary text-lg">water_drop</span>
                    <h4 className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
                      Abundant Sweet Groundwater (18–24m)
                    </h4>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant">
                    Tested sweet, non-saline drinking water table at shallow depths. Pure red loam soil with exceptional bearing capacity for multi-story villas.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-4 joinery-border shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-secondary text-lg">alt_route</span>
                    <h4 className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
                      23-Ft Avenue Road &amp; Granite Pegging
                    </h4>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant">
                    42.20m uninterrupted western road frontage. Every boundary physically staked with white granite markers for clear demarcation.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-4 joinery-border shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-secondary text-lg">school</span>
                    <h4 className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
                      Prime Enclave • 500m to Annai Hajira College
                    </h4>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant">
                    Tranquil residential surroundings with rapid 5-minute access to Melapalayam High Road, Palayamkottai, and central Tirunelveli.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 TEASER: INTERACTIVE BLUEPRINT */}
      <section className="py-14 md:py-20 bg-surface-container-low joinery-border-b">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-space-md md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">02 / Official Cadastral Survey Plan</span>
              <div className="w-12 h-px bg-secondary mb-3"></div>
              <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-primary">
                Explore the Sanctioned 7-Plot Subdivision
              </h2>
            </div>
            <Link
              to="/plot-layout"
              className="inline-flex items-center justify-center space-x-2 bg-primary-container text-surface-container-lowest px-6 py-3 font-label-sm text-xs sm:text-label-sm uppercase tracking-wider hover:bg-secondary transition-colors"
            >
              <span>Launch Interactive Explorer</span>
              <span className="material-symbols-outlined text-base">architecture</span>
            </Link>
          </div>

          {/* Blueprint Teaser Preview Card */}
          <div className="bg-surface-container-lowest joinery-border p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-7 aspect-[16/10] bg-[#f4ece1] joinery-border overflow-hidden flex items-center justify-center p-3 sm:p-4 relative group">
                <img
                  src="./assets/images/blueprint-layout.png"
                  alt="Blueprint Plan"
                  className="max-h-full max-w-full object-contain filter contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <Link
                    to="/plot-layout"
                    className="bg-primary text-white px-4 sm:px-5 py-2 sm:py-2.5 font-label-sm text-xs sm:text-label-sm uppercase tracking-wider shadow-lg"
                  >
                    Open Interactive Pan &amp; Zoom Tool
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                <span className="border border-secondary-fixed-dim bg-secondary-container text-on-secondary-fixed font-label-sm text-[10px] px-2.5 py-0.5 uppercase tracking-wider inline-block">
                  Orders: SWP/104/2024 &amp; SWP/146/2024
                </span>
                <h3 className="text-xl sm:text-headline-sm font-headline-sm text-primary">
                  Individual Boundary Staking for 7 Plots
                </h3>
                <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant leading-relaxed">
                  Each plot features direct access to the 7.00m existing avenue road with 42.20m total frontage. Plots range from 123.00 Sq.M (3.04 Cents) to 129.30 Sq.M (3.20 Cents).
                </p>
                <div className="pt-2">
                  <Link
                    to="/plot-layout"
                    className="inline-flex items-center space-x-2 text-secondary font-tabular-spec text-xs sm:text-sm font-medium hover:text-primary transition-colors"
                  >
                    <span>Click here to inspect frontage, depths, and area per parcel</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: CORE VALUES */}
      <section className="py-14 md:py-24 bg-surface joinery-border-b">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-space-md md:px-margin-desktop">
          <div className="mb-10 sm:mb-14">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">03 / Core Values</span>
            <div className="w-12 h-px bg-secondary mb-3"></div>
            <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-primary">
              The Principles of Our Stewardship
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {projectData.coreValues.map((val) => (
              <div
                key={val.num}
                className="bg-surface-container-lowest p-6 sm:p-8 joinery-border hover:border-secondary transition-colors flex flex-col justify-between h-full"
              >
                <div>
                  <span className="font-tabular-spec text-tabular-spec text-secondary block mb-3 sm:mb-4">{val.num}</span>
                  <h3 className="font-headline-sm text-lg sm:text-headline-sm text-primary mb-2 sm:mb-3">{val.title}</h3>
                  <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant leading-relaxed">{val.desc}</p>
                </div>
                <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 joinery-border-t">
                  <span className="font-label-sm text-[10px] uppercase text-outline tracking-wider">{val.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN-BUILT INQUIRY & EXPRESSION OF INTEREST SECTION */}
      <section className="py-14 md:py-24 bg-surface-container-low joinery-border-b" id="in-built-inquire">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-space-md md:px-margin-desktop">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">
              04 / Direct Promoter Gateway
            </span>
            <div className="w-12 h-px bg-secondary mx-auto mb-3"></div>
            <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-primary">
              Book Your Plot in Noora Avenue 2
            </h2>
            <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant mt-3 max-w-xl mx-auto leading-relaxed">
              படிவத்தில் உங்கள் விவரங்களை உள்ளிடவும். உங்கள் பதிவு நேரடியாக எங்களது WhatsApp (+91 94432 83369) எண்ணிற்கு உடனுக்குடன் வந்து சேரும்.
            </p>
          </div>

          {/* In-built Form Component */}
          <InquiryForm />
        </div>
      </section>

      {/* QUICK CTA CORRIDOR */}
      <section className="py-12 sm:py-16 bg-surface-container-low joinery-border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-space-md text-center space-y-4 sm:space-y-6">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">
            Direct Promoter Access
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-headline-lg font-headline-lg text-primary">
            Ready to Walk the Grounds of Noora Avenue 2?
          </h2>
          <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Schedule a private accompanied site inspection with our land representative or connect directly on WhatsApp for instant cadastral blueprints.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2">
            <Link
              to="/inquire"
              className="w-full sm:w-auto bg-primary-container text-white px-8 py-3.5 font-label-sm text-xs sm:text-label-sm uppercase tracking-widest hover:bg-secondary transition-colors text-center"
            >
              Submit Expression of Interest
            </Link>
            <a
              href={projectData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-outline-variant bg-surface-container-lowest px-7 py-3.5 font-label-sm text-xs sm:text-label-sm uppercase tracking-widest text-primary hover:border-tertiary transition-colors flex items-center justify-center space-x-2"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
