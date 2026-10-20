import React from 'react';
import { Maximize2 } from 'lucide-react';

export default function Gallery({ projectData, onOpenLightbox }) {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 block mb-1">
              Visual Documentation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Property & layout gallery
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Actual on-site drone photography, physical ground boundary stones, and DTCP approved subdivision blueprint.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.gallery.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item.url, item.title, item.caption)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-neutral-200 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-white text-neutral-900 flex items-center justify-center shadow-xl transform scale-80 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-neutral-900 backdrop-blur-md border border-neutral-200 shadow-2xs">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5 text-left">
                <h4 className="text-sm font-extrabold text-neutral-900 group-hover:text-sky-700 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-500 mt-1 line-clamp-1 font-tamil">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
