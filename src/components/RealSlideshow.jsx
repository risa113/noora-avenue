import React, { useState, useEffect } from 'react';
import { projectData } from '../data/projectData';

export default function RealSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 0,
      badge: "Real Photo 01 • High-Altitude Drone Cadastral Survey",
      title: "High Drone Aerial Demarcation of Noora Avenue 2",
      desc: "Unfiltered aerial survey capturing the rectangular 7-plot approved boundary, 42.20m road frontage, boundary markers, and the surrounding residential topography of Melapalayam.",
      specs: ["Extent: 900.00 Sq.M (22.24 Cents)", "Road: 7.00m Wide Frontage", "7 Sanctioned Plots"],
      image: "./assets/images/real-ground-drone.jpg",
      caption: "High Drone Aerial Demarcation"
    },
    {
      id: 1,
      badge: "Real Photo 02 • Ground Perspective & Boundary Stones",
      title: "Permanent Granite Survey Pegs Along 23-Ft Avenue Road",
      desc: "Direct on-ground perspective showing verified granite boundary stones along the 42.20-meter west ingress corridor (TS No: 13/107), ready for immediate boundary possession.",
      specs: ["TS No: 13/107 Road", "Granite Demarcation Fixed", "Spot Registration Ready"],
      image: "./assets/images/real-ground-1.jpg",
      caption: "Ground Perspective & Boundary Stones"
    },
    {
      id: 2,
      badge: "Real Photo 03 • Natural Terrain & Southern Horizon",
      title: "Virgin Red-Loam Soil & Unobstructed Open Sky",
      desc: "Clear panoramic ground view illustrating the naturally level ground plane, undisturbed soil structure, and serene rural backdrop just 500 meters from Annai Hajira Women's College.",
      specs: ["Sweet Groundwater (18-24m)", "500m to Annai Hajira College", "Naturally Level Topography"],
      image: "./assets/images/real-ground-landscape.jpg",
      caption: "Natural Terrain & Horizon"
    },
    {
      id: 3,
      badge: "Approved Document • Municipal Cadastral Blueprint",
      title: "Government Sanctioned 7-Plot Subdivision Blueprint",
      desc: "Official layout plan sanctioned under Orders SWP/104/2024 & SWP/146/2024 (Application 7GDMQ9WA/2024) establishing individual surveyed dimensions for Plots 01 to 07.",
      specs: ["Order: SWP/104/2024", "Kokkadikulam Scheme No: 2", "Scale 1:400 Cadastral Plan"],
      image: "./assets/images/blueprint-layout.png",
      caption: "Official Municipal Layout Blueprint",
      isBlueprint: true
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="relative w-full overflow-hidden joinery-border bg-surface-variant select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[640px] overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full ${
                  slide.isBlueprint ? 'object-contain bg-[#f3ede1] p-3 sm:p-4' : 'object-cover filter contrast-[1.03] brightness-[0.98]'
                } ${isActive ? 'slide-bg-active' : ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent"></div>

              {/* Animated Slide Content */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 md:p-10 text-white z-20">
                <div className="max-w-3xl">
                  {isActive && (
                    <>
                      <span className="inline-block border border-white/30 bg-primary/60 backdrop-blur-sm px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-label-sm uppercase tracking-wider mb-2 text-secondary-fixed-dim animate-slide-badge">
                        {slide.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-headline-lg font-display-lg text-white font-normal mb-2 leading-tight animate-slide-title">
                        {slide.title}
                      </h3>
                      <p className="font-body-md text-xs sm:text-sm md:text-base text-surface-container-low max-w-2xl mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none animate-slide-desc">
                        {slide.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-tabular-spec animate-slide-specs">
                        {slide.specs.map((spec, i) => (
                          <span
                            key={i}
                            className="bg-surface/20 backdrop-blur-sm px-2.5 py-1 border border-white/20"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Controls Bar */}
      <div className="bg-surface/95 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 joinery-border-t flex flex-wrap justify-between items-center gap-3 text-xs">
        {/* Indicator Dots */}
        <div className="flex items-center space-x-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                i === currentSlide ? 'w-8 bg-primary' : 'w-3 bg-outline-variant hover:bg-outline'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide Caption Title */}
        <div className="font-label-sm text-label-sm uppercase tracking-wider text-primary hidden sm:block">
          Slide {currentSlide + 1} of {slides.length}: {slides[currentSlide].caption}
        </div>

        {/* Prev / Next Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 border border-outline-variant hover:bg-surface-variant text-primary transition-colors focus:outline-none"
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined text-base">chevron_left</span>
          </button>
          <button
            onClick={handleNext}
            className="p-2 border border-outline-variant hover:bg-surface-variant text-primary transition-colors focus:outline-none"
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
