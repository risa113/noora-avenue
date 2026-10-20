import React, { useState } from 'react';
import { Compass, ExternalLink, MapPin, Navigation, Phone, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { asset } from '../utils/assetUrl';

export default function Location({ locationDetails, projectData }) {
  const [mapType, setMapType] = useState('satellite'); // 'satellite' | 'roadmap' | 'aerial'

  return (
    <section id="location" className="py-20 lg:py-28 bg-white border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 block mb-1">
              Exact Site Location & Scraped Map
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              {locationDetails.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 font-medium">
              Kokkadikulam Scheme No: 2 • 500 Meters from Annai Hajira Women's College, Melapalayam, Tirunelveli
            </p>
          </div>

          <a
            href={locationDetails.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-primary text-xs py-2.5 px-5 self-start md:self-auto shrink-0"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Google Maps App</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Verified Location Coordinates & Government Survey Data */}
          <div className="lg:col-span-5 text-left space-y-6">
            
            {/* Address & Landmark Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAFAF9] border border-neutral-200 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block">
                    Verified Ground Site
                  </span>
                  <h4 className="text-lg font-extrabold text-neutral-900 mt-0.5">
                    Kokkadikulam Scheme No: 2
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    {locationDetails.address}
                  </p>
                </div>
              </div>

              {/* Coordinates Pill */}
              <div className="p-3 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-between text-xs font-semibold">
                <span className="text-neutral-500">GPS Coordinates:</span>
                <span className="font-mono font-bold text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded">
                  {locationDetails.coordinates.formatted}
                </span>
              </div>
            </div>

            {/* Official Administrative & Survey Boundaries */}
            <div className="p-6 rounded-3xl bg-white border border-neutral-200 shadow-2xs space-y-3">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                Statutory Municipal Classification
              </span>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500">Development Scheme:</span>
                  <span className="font-bold text-neutral-900 font-tamil">கொக்கடிகுளம் அபிவிருத்தி திட்டம் எண்: 2</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500">Village:</span>
                  <span className="font-bold text-neutral-900">{locationDetails.village}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500">Ward & Block:</span>
                  <span className="font-bold text-neutral-900">{locationDetails.ward}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500">Taluk & Corporation:</span>
                  <span className="font-bold text-neutral-900">Palayamkottai • Tirunelveli Corporation</span>
                </div>
                <div className="pt-1">
                  <span className="text-neutral-500 block mb-1">Official Survey Numbers:</span>
                  <span className="font-bold text-sky-800 font-tamil block bg-sky-50/70 p-2 rounded-lg border border-sky-100 text-[11px]">
                    {locationDetails.surveyNumbers}
                  </span>
                </div>
              </div>
            </div>

            {/* Surrounding Boundaries from Blueprint */}
            {locationDetails.surroundingBoundaries && (
              <div className="p-5 rounded-3xl bg-[#FAFAF9] border border-neutral-200/90 text-xs space-y-2">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                  Sanctioned Boundaries (நான்கெல்லைகள்)
                </span>
                <div className="space-y-1.5 text-neutral-600">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-neutral-900 shrink-0">North:</span>
                    <span className="font-tamil">{locationDetails.surroundingBoundaries.north}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-neutral-900 shrink-0">South:</span>
                    <span className="font-tamil">{locationDetails.surroundingBoundaries.south}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-neutral-900 shrink-0">East:</span>
                    <span className="font-tamil">{locationDetails.surroundingBoundaries.east}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-neutral-900 shrink-0">West:</span>
                    <span className="font-tamil">{locationDetails.surroundingBoundaries.west}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Key Vicinity Distances */}
            <div className="space-y-2.5">
              <h5 className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest px-1">
                Landmarks & Connectivity
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {locationDetails.landmarks.map((landmark, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border transition-colors ${
                      landmark.highlight
                        ? 'bg-sky-50/60 border-sky-200'
                        : 'bg-[#FAFAF9] border-neutral-200/80'
                    }`}
                  >
                    <span className="text-xs font-bold text-neutral-900 block">{landmark.name}</span>
                    <span className={`text-[11px] font-semibold block mt-0.5 ${
                      landmark.highlight ? 'text-sky-800' : 'text-neutral-500'
                    }`}>
                      {landmark.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location CTAs */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={locationDetails.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-primary text-xs py-3 px-6"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate via Google Maps</span>
              </a>

              <a
                href={projectData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-secondary text-xs py-3 px-5"
              >
                <span>Request Exact Pin on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Live Interactive Google Map & Satellite View Component */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-950 shadow-xl flex flex-col">
              
              {/* Map Header / Switcher Tabs */}
              <div className="px-5 py-3.5 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-xs font-extrabold text-white">
                    Site Location: Kokkadikulam Scheme No: 2, Melapalayam
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-neutral-800 p-1 rounded-full text-xs">
                  <button
                    onClick={() => setMapType('satellite')}
                    className={`px-3 py-1 rounded-full font-bold transition-all ${
                      mapType === 'satellite' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    Google Satellite
                  </button>
                  <button
                    onClick={() => setMapType('aerial')}
                    className={`px-3 py-1 rounded-full font-bold transition-all ${
                      mapType === 'aerial' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    Aerial Survey View
                  </button>
                  <button
                    onClick={() => setMapType('roadmap')}
                    className={`px-3 py-1 rounded-full font-bold transition-all ${
                      mapType === 'roadmap' ? 'bg-white text-neutral-900 shadow-xs' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    Road Map
                  </button>
                </div>
              </div>

              {/* Map View Frame */}
              <div className="relative w-full h-[450px] sm:h-[520px] bg-neutral-900 flex items-center justify-center overflow-hidden">
                {mapType === 'satellite' ? (
                  <iframe
                    title="Google Satellite Map of Noora Avenue at Kokkadikulam Melapalayam"
                    src={locationDetails.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                ) : mapType === 'roadmap' ? (
                  <iframe
                    title="Google Roadmap of Melapalayam Annai Hajira College Area"
                    src={locationDetails.googleMapsRoadmapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                ) : (
                  <div className="relative w-full h-full group/img cursor-pointer">
                    <img
                      src={asset("/assets/images/melapalayam_satellite_close.jpg")}
                      alt="Scraped Aerial Map of Melapalayam Kokkadikulam Site"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-neutral-950/20 pointer-events-none" />

                    {/* Site Location Overlay Tag */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2.5 rounded-2xl bg-neutral-900/95 text-white border border-white/20 shadow-2xl flex items-center gap-3 backdrop-blur-md">
                      <span className="w-3 h-3 rounded-full bg-rose-500 ring-4 ring-rose-500/40 animate-ping" />
                      <div className="text-left">
                        <span className="text-[10px] text-sky-400 font-bold uppercase block leading-none">NOORA AVENUE</span>
                        <span className="text-xs font-extrabold text-white block mt-0.5">Kokkadikulam Residential Plots (1-7)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Map Footer Bar */}
              <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-2">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Exact Coordinates: 8.684444° N, 77.713056° E</span>
                </span>
                <a
                  href={locationDetails.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1 transition-colors"
                >
                  <span>Get Driving Route</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}