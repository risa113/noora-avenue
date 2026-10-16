import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating({ projectData }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Tooltip */}
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-neutral-900 text-white text-xs font-semibold py-1.5 px-3 rounded-full shadow-lg border border-neutral-700 whitespace-nowrap pointer-events-none">
        Chat with Project Desk
      </div>

      {/* Floating CTA Button */}
      <a
        href={projectData.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl border-2 border-white transition-all transform hover:scale-108 active:scale-95"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border border-white" />
      </a>
    </div>
  );
}
