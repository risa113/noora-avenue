import React from 'react';

export default function LightboxModal({ image, caption, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-inverse-surface/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-surface-container-lowest joinery-border overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 bg-surface/80 p-2 text-primary hover:bg-surface focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="w-full max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
          <img
            alt={caption || "Enlarged site photograph"}
            className="max-h-[75vh] w-auto object-contain"
            src={image}
          />
        </div>

        {caption && (
          <div className="p-6 bg-surface-container-lowest joinery-border-t">
            <p className="font-body-md text-body-md text-primary font-medium">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
