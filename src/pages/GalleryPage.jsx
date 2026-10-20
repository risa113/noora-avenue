import React, { useState } from 'react';
import { projectData } from '../data/projectData';
import LightboxModal from '../components/LightboxModal';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const plates = projectData.galleryPlates;

  const filteredPlates = activeFilter === 'all'
    ? plates
    : plates.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  const handleOpenModal = (img, caption) => {
    setSelectedImage(img);
    setSelectedCaption(caption);
  };

  return (
    <div className="py-10 sm:py-16 md:py-20 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-space-md md:px-margin-desktop">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-label-sm text-[11px] sm:text-label-sm uppercase tracking-widest text-secondary">
                Authentic Photographic Plates • 100% Real Site Imagery
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-display-xl font-display-xl text-primary font-normal leading-tight">
              Real Site Photographic Survey
            </h1>
          </div>
          <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant max-w-md leading-relaxed">
            Unfiltered field perspectives illustrating the undisturbed ground plane, 7.00m road frontage, permanent granite survey pegs, and approved municipal blueprint.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-1.5 font-label-sm text-label-sm uppercase tracking-wider transition-colors ${
              activeFilter === 'all'
                ? 'bg-primary text-white font-medium'
                : 'border border-outline-variant bg-surface-container-low text-on-surface-variant hover:text-primary'
            }`}
          >
            All Plates (4)
          </button>
          <button
            onClick={() => setActiveFilter('drone')}
            className={`px-4 py-1.5 font-label-sm text-label-sm uppercase tracking-wider transition-colors ${
              activeFilter === 'drone'
                ? 'bg-primary text-white font-medium'
                : 'border border-outline-variant bg-surface-container-low text-on-surface-variant hover:text-primary'
            }`}
          >
            Drone Aerial
          </button>
          <button
            onClick={() => setActiveFilter('ground')}
            className={`px-4 py-1.5 font-label-sm text-label-sm uppercase tracking-wider transition-colors ${
              activeFilter === 'ground'
                ? 'bg-primary text-white font-medium'
                : 'border border-outline-variant bg-surface-container-low text-on-surface-variant hover:text-primary'
            }`}
          >
            Ground Perspectives
          </button>
          <button
            onClick={() => setActiveFilter('blueprint')}
            className={`px-4 py-1.5 font-label-sm text-label-sm uppercase tracking-wider transition-colors ${
              activeFilter === 'blueprint'
                ? 'bg-primary text-white font-medium'
                : 'border border-outline-variant bg-surface-container-low text-on-surface-variant hover:text-primary'
            }`}
          >
            Official Blueprint
          </button>
        </div>

        {/* Plates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredPlates.map((plate) => (
            <div
              key={plate.id}
              className="bg-surface-container-low joinery-border group overflow-hidden cursor-pointer flex flex-col justify-between"
              onClick={() => handleOpenModal(plate.src, plate.caption)}
            >
              <div className="overflow-hidden aspect-[16/10] bg-[#f4ece1] relative">
                <img
                  src={plate.src}
                  alt={plate.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-white px-3 py-1 font-label-sm text-[10px] uppercase tracking-wider">
                  {plate.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-sm text-primary px-3 py-1 font-label-sm text-[10px] uppercase tracking-wider flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Enlarge</span>
                  <span className="material-symbols-outlined text-xs">fullscreen</span>
                </div>
              </div>

              <div className="p-6 bg-surface-container-lowest flex-1 flex flex-col justify-between joinery-border-t">
                <div>
                  <span className="font-label-sm text-label-sm uppercase text-secondary block mb-1">
                    {plate.badge}
                  </span>
                  <h3 className="font-headline-sm text-primary mb-2">
                    {plate.title}
                  </h3>
                  <p className="font-body-sm text-on-surface-variant mb-4">
                    {plate.caption}
                  </p>
                </div>
                <div className="pt-4 joinery-border-t flex flex-wrap gap-2 text-[11px] font-tabular-spec text-outline">
                  {plate.specs.map((s, i) => (
                    <span key={i} className="bg-surface-container px-2.5 py-0.5 joinery-border">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity Guarantee Note */}
        <div className="p-8 bg-surface-container-low joinery-border text-center max-w-3xl mx-auto">
          <span className="material-symbols-outlined text-secondary text-2xl mb-2">verified</span>
          <h4 className="font-headline-sm text-primary mb-2">Zero Stock Photography Guarantee</h4>
          <p className="font-body-sm text-on-surface-variant">
            All visual plates displayed across this website represent the actual site grounds of Noora Avenue 2 located in Kokkadikulam Scheme No: 2, Melapalayam, Tirunelveli.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        image={selectedImage}
        caption={selectedCaption}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
