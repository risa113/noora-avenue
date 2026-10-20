import React from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../data/projectData';
import RealSlideshow from '../components/RealSlideshow';
import InquiryForm from '../components/InquiryForm';

export default function HomePage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative bg-surface-container-low py-12 md:py-20 joinery-border-b">
        <div className="max-w-screen-2xl mx-auto px-space-md md:px-margin-desktop">
          {/* Meta Pill and Editorial Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center space-x-2 border border-outline-variant bg-surface-container-lowest px-3.5 py-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                7 Designated Parcels • DTCP Regularisation SWP/104/2024
              </span>
            </div>
            <span className="font-tabular-spec text-tabular-spec text-outline">
              Survey No: 14/1J • TS No: 13/7 • Kokkadikulam Scheme No: 2
            </span>
          </div>

          {/* Headline & Editorial Narrative Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-8">
              <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-primary font-normal leading-tight">
                A More Considered Way to Own Land.
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pl-4">
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Preserved natural topography and verified cadastral boundaries in an architecturally planned countryside enclave. Positioned just 500 meters from Annai Hajira Women's College in Melapalayam.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/plot-layout"
                  className="inline-block bg-primary-container text-surface-container-lowest px-7 py-3 font-label-sm text-label-sm uppercase tracking-widest hover:bg-secondary transition-colors"
                >
                  Explore 7-Plot Layout
                </Link>
                <Link
                  to="/inquire"
                  className="inline-block border border-outline-variant bg-surface-container-lowest px-7 py-3 font-label-sm text-label-sm uppercase tracking-widest text-primary hover:border-tertiary transition-colors"
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
      <section className="py-16 md:py-24 bg-surface joinery-border-b">
        <div className="max-w-screen-2xl mx-auto px-space-md md:px-margin-desktop">
          <div className="mb-12">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">01 / Stewardship &amp; Philosophy</span>
            <div className="w-12 h-px bg-secondary"></div>
          </div>

          <div className="max-w-4xl mb-16">
            <blockquote className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary italic leading-relaxed">
              "Land is not merely property; it is an enduring relationship with topography, light, and natural heritage."
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6">
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Every parcel within <strong className="text-primary font-semibold">{projectData.brandName}</strong> is positioned to honor existing natural gradients, gentle drainage slopes, and morning sun orientations. Rather than imposing arbitrary congestion, our 7-plot layout is governed by DTCP municipal technical sanctions and a generous 7.00-meter (23 Ft) wide avenue road.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Situated in Kokkadikulam Scheme No: 2, just 500 meters from Annai Hajira Women's College, the location balances quiet residential privacy with fast connectivity to Melapalayam High Road, Palayamkottai, and central Tirunelveli.
              </p>
              <div className="pt-2">
                <Link
                  to="/the-land"
                  className="inline-flex items-center space-x-2 text-primary font-label-sm text-label-sm uppercase tracking-wider border-b border-primary pb-1 hover:text-secondary transition-colors"
                >
                  <span>Read Full Stewardship Dossier</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="space-y-6 border-l joinery-border pl-6 md:pl-10">
              <h3 className="font-headline-sm text-headline-sm text-primary">Verified Land Pedigree</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Each plot carries clear, unencumbered freehold title documentation under Survey No: 14/1J and Town Survey No: 13/7. Ready for direct sale deed execution and immediate spot registration at the Melapalayam Sub-Registrar Office.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-surface-container-low p-4 joinery-border">
                  <span className="font-label-sm text-label-sm uppercase text-outline block mb-1">Soil Texture</span>
                  <span className="font-tabular-spec text-tabular-spec text-primary font-medium">{projectData.pedigree.soilTexture}</span>
                </div>
                <div className="bg-surface-container-low p-4 joinery-border">
                  <span className="font-label-sm text-label-sm uppercase text-outline block mb-1">Water Table</span>
                  <span className="font-tabular-spec text-tabular-spec text-primary font-medium">{projectData.pedigree.waterTable}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 TEASER: INTERACTIVE BLUEPRINT */}
      <section className="py-16 md:py-20 bg-surface-container-low joinery-border-b">
        <div className="max-w-screen-2xl mx-auto px-space-md md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">02 / Official Cadastral Survey Plan</span>
              <div className="w-12 h-px bg-secondary mb-3"></div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                Explore the Sanctioned 7-Plot Subdivision
              </h2>
            </div>
            <Link
              to="/plot-layout"
              className="inline-flex items-center space-x-2 bg-primary-container text-surface-container-lowest px-6 py-3 font-label-sm text-label-sm uppercase tracking-wider hover:bg-secondary transition-colors"
            >
              <span>Launch Interactive Explorer</span>
              <span className="material-symbols-outlined text-base">architecture</span>
            </Link>
          </div>

          {/* Blueprint Teaser Preview Card */}
          <div className="bg-surface-container-lowest joinery-border p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 aspect-[16/10] bg-[#f4ece1] joinery-border overflow-hidden flex items-center justify-center p-4 relative group">
                <img
                  src="./assets/images/blueprint-layout.png"
                  alt="Blueprint Plan"
                  className="max-h-full max-w-full object-contain filter contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <Link
                    to="/plot-layout"
                    className="bg-primary text-white px-5 py-2.5 font-label-sm text-label-sm uppercase tracking-wider shadow-lg"
                  >
                    Open Interactive Pan &amp; Zoom Tool
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-4">
                <span className="border border-secondary-fixed-dim bg-secondary-container text-on-secondary-fixed font-label-sm text-[10px] px-2.5 py-0.5 uppercase tracking-wider">
                  Orders: SWP/104/2024 &amp; SWP/146/2024
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Individual Boundary Staking for 7 Plots
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Each plot features direct access to the 7.00m existing avenue road with 42.20m total frontage. Plots range from 123.00 Sq.M (3.04 Cents) to 129.30 Sq.M (3.20 Cents).
                </p>
                <div className="pt-2">
                  <Link
                    to="/plot-layout"
                    className="inline-flex items-center space-x-2 text-secondary font-tabular-spec text-sm font-medium hover:text-primary transition-colors"
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

      {/* SECTION 05: CORE VALUES */}
      <section className="py-16 md:py-24 bg-surface joinery-border-b">
        <div className="max-w-screen-2xl mx-auto px-space-md md:px-margin-desktop">
          <div className="mb-14">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">03 / Core Values</span>
            <div className="w-12 h-px bg-secondary mb-3"></div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              The Principles of Our Stewardship
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectData.coreValues.map((val) => (
              <div
                key={val.num}
                className="bg-surface-container-lowest p-8 joinery-border hover:border-secondary transition-colors flex flex-col justify-between h-full"
              >
                <div>
                  <span className="font-tabular-spec text-tabular-spec text-secondary block mb-4">{val.num}</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{val.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{val.desc}</p>
                </div>
                <div className="mt-8 pt-4 joinery-border-t">
                  <span className="font-label-sm text-[10px] uppercase text-outline tracking-wider">{val.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN-BUILT INQUIRY & EXPRESSION OF INTEREST SECTION */}
      <section className="py-16 md:py-24 bg-surface-container-low joinery-border-b" id="in-built-inquire">
        <div className="max-w-screen-2xl mx-auto px-space-md md:px-margin-desktop">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-2">
              04 / Direct Promoter Gateway
            </span>
            <div className="w-12 h-px bg-secondary mx-auto mb-3"></div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Book Your Plot in Noora Avenue 2
            </h2>
            <p className="font-body-md text-on-surface-variant mt-3 max-w-xl mx-auto">
              படிவத்தில் உங்கள் விவரங்களை உள்ளிடவும். உங்கள் பதிவு நேரடியாக எங்களது WhatsApp (+91 94432 83369) எண்ணிற்கு உடனுக்குடன் வந்து சேரும்.
            </p>
          </div>

          {/* In-built Form Component */}
          <InquiryForm />
        </div>
      </section>

      {/* QUICK CTA CORRIDOR */}
      <section className="py-16 bg-surface-container-low joinery-border-b">
        <div className="max-w-4xl mx-auto px-space-md text-center space-y-6">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">
            Direct Promoter Access
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Ready to Walk the Grounds of Noora Avenue 2?
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
            Schedule a private accompanied site inspection with our land representative or connect directly on WhatsApp for instant cadastral blueprints.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/inquire"
              className="bg-primary-container text-white px-8 py-3.5 font-label-sm text-label-sm uppercase tracking-widest hover:bg-secondary transition-colors"
            >
              Submit Expression of Interest
            </Link>
            <a
              href={projectData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-outline-variant bg-surface-container-lowest px-7 py-3.5 font-label-sm text-label-sm uppercase tracking-widest text-primary hover:border-tertiary transition-colors flex items-center space-x-2"
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
