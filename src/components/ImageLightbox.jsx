import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

export default function ImageLightbox({ isOpen, onClose, imageSrc, title, subtitle }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setScale(1);
    }
  }, [isOpen]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 backdrop-blur-md p-4 sm:p-6 transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/80">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-neutral-900 tracking-tight">{title || "Document Preview"}</h3>
            {subtitle && <p className="text-xs sm:text-sm text-sky-700 mt-0.5">{subtitle}</p>}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setScale((s) => Math.min(s + 0.3, 3))}
              className="p-2 rounded-xl text-neutral-700 hover:bg-neutral-200 transition-colors"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setScale((s) => Math.max(s - 0.3, 0.7))}
              className="p-2 rounded-xl text-neutral-700 hover:bg-neutral-200 transition-colors"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setScale(1)}
              className="p-2 rounded-xl text-neutral-700 hover:bg-neutral-200 transition-colors"
              title="Reset Zoom"
              aria-label="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 ml-2 rounded-xl text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 transition-colors"
              title="Close (Esc)"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Viewer */}
        <div className="relative flex-1 overflow-auto bg-neutral-100/60 p-4 sm:p-8 flex items-center justify-center min-h-[300px]">
          <div
            className="transition-transform duration-200 ease-out origin-center cursor-grab active:cursor-grabbing max-w-full"
            style={{ transform: `scale(${scale})` }}
          >
            <img
              src={imageSrc}
              alt={title || "Preview image"}
              className="max-h-[75vh] w-auto object-contain mx-auto rounded-xl shadow-md border border-neutral-200 bg-white"
              loading="lazy"
            />
          </div>
        </div>

        {/* Footer controls & info */}
        <div className="px-6 py-3 bg-white border-t border-neutral-200 flex flex-wrap items-center justify-between text-xs text-neutral-500">
          <span className="font-semibold">NOORA AVENUE - II • Sanction Order: SWP/68/2024</span>
          <span>Click outside or press Esc to close • Use zoom controls for minute details</span>
        </div>
      </div>
    </div>
  );
}
