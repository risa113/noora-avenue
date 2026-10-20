import React from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../data/projectData';

export default function LocationPage() {
  return (
    <div className="py-10 sm:py-16 md:py-20 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-space-md md:px-margin-desktop">
        
        {/* Page Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center space-x-2 mb-2">
            <span className="font-label-sm text-[11px] sm:text-label-sm uppercase tracking-widest text-secondary">
              Kokkadikulam Scheme No: 2 • Melapalayam Ward
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-display-xl font-display-xl text-primary font-normal leading-tight">
            Territory &amp; Regional Connectivity
          </h1>
          <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant max-w-3xl mt-2 leading-relaxed">
            Positioned in Kokkadikulam Scheme No: 2, Noora Avenue 2 delivers natural tranquility while maintaining immediate access to educational institutions, places of worship, and commercial corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Connectivity Cards (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-headline-sm text-primary mb-2">Strategic Landmarks</h3>
            
            {projectData.connectivity.map((item, idx) => (
              <div key={idx} className="p-5 bg-surface-container-lowest joinery-border flex items-start space-x-4 shadow-xs">
                <span className="material-symbols-outlined text-secondary text-2xl mt-0.5">
                  {item.icon}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-headline-sm text-base text-primary font-bold">
                      {item.title}
                    </h4>
                    <span className="font-tabular-spec text-xs font-semibold text-secondary whitespace-nowrap">
                      {item.distance}
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                    {item.desc}
                  </p>
                  <span className="inline-block mt-2 font-tabular-spec text-[11px] text-outline">
                    Estimated commute: {item.time}
                  </span>
                </div>
              </div>
            ))}

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center space-x-2 bg-primary-container text-surface-container-lowest px-6 py-3 font-label-sm text-label-sm uppercase tracking-wider hover:bg-secondary transition-colors"
                href="https://maps.google.com/?q=8.6844,77.7131"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Open in Google Maps</span>
                <span className="material-symbols-outlined text-base">near_me</span>
              </a>
              <span className="font-tabular-spec text-tabular-spec text-outline">
                Site visits accompanied daily by prior appointment
              </span>
            </div>
          </div>

          {/* Aerial Location Visual with GPS Marker (Col 7) */}
          <div className="lg:col-span-7 bg-surface-container-lowest joinery-border p-6 md:p-8 shadow-sm">
            <div className="relative w-full aspect-[16/11] bg-surface-container overflow-hidden joinery-border flex items-center justify-center">
              <img
                src="./assets/images/real-ground-drone.jpg"
                alt="Aerial terrain of Noora Avenue 2 in Melapalayam"
                className="w-full h-full object-cover filter contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-primary/15"></div>

              {/* Floating Map Marker Pin */}
              <div className="absolute bg-surface-container-lowest px-4 py-2.5 joinery-border shadow-md flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                <div>
                  <p className="font-label-sm text-[10px] uppercase text-outline">Sanctuary Coordinates</p>
                  <p className="font-tabular-spec text-tabular-spec text-primary font-semibold">
                    8°41'04"N, 77°42'47"E (Melapalayam)
                  </p>
                </div>
              </div>

              {/* Cadastral Tag */}
              <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-sm px-3 py-1.5 joinery-border text-[11px] font-tabular-spec text-primary">
                Kokkadikulam Scheme No: 2 • S.No: 14/1J • TS No: 13/7
              </div>
            </div>

            <div className="mt-4 flex flex-wrap justify-between items-center text-xs text-outline font-label-sm uppercase gap-2">
              <span>Town Survey No: 13/7 • Ward AS, Block 1</span>
              <span>Cadastral Benchmark Verified</span>
            </div>
          </div>
        </div>

        {/* Accompanied Visit Protocol */}
        <div className="bg-surface-container-lowest joinery-border p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="font-tabular-spec text-secondary text-sm font-bold block">STEP 01</span>
              <h4 className="font-headline-sm text-primary">Book Time Slot</h4>
              <p className="font-body-sm text-on-surface-variant">
                Call or WhatsApp our concierge at {projectData.contact.phone} to coordinate your preferred inspection time.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-tabular-spec text-secondary text-sm font-bold block">STEP 02</span>
              <h4 className="font-headline-sm text-primary">Accompanied Meeting</h4>
              <p className="font-body-sm text-on-surface-variant">
                We meet guests directly at Annai Hajira Women's College or Melapalayam High Road for smooth escort.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-tabular-spec text-secondary text-sm font-bold block">STEP 03</span>
              <h4 className="font-headline-sm text-primary">On-Site Boundary Walk</h4>
              <p className="font-body-sm text-on-surface-variant">
                Walk the physical white granite boundary pegs with the approved DTCP blueprint in hand.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
