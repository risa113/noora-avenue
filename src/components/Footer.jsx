import React from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../data/projectData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-low joinery-border-t">
      <div className="w-full px-space-md md:px-margin-desktop py-space-xl max-w-screen-2xl mx-auto flex flex-col gap-space-lg">
        {/* Top Row: Brand & Architectural Purpose */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start joinery-border-b pb-12">
          <div className="md:col-span-5 space-y-3">
            <span className="font-display-lg text-headline-sm tracking-wider uppercase text-primary">
              {projectData.brandName}
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              A premium residential plotted development in Kokkadikulam Scheme No: 2, Melapalayam, Tirunelveli. Dedicated to verified cadastral integrity and transparent freehold ownership.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h5 className="font-label-sm text-label-sm uppercase tracking-wider text-primary mb-3">
                Documentation
              </h5>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link className="text-on-surface-variant hover:text-primary transition-colors" to="/plot-layout">
                    Cadastral Survey Records
                  </Link>
                </li>
                <li>
                  <Link className="text-on-surface-variant hover:text-primary transition-colors" to="/the-land">
                    Sanction Order SWP/104/2024
                  </Link>
                </li>
                <li>
                  <Link className="text-on-surface-variant hover:text-primary transition-colors" to="/gallery">
                    Real Photographic Plates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-label-sm text-label-sm uppercase tracking-wider text-primary mb-3">
                Governance
              </h5>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link className="text-on-surface-variant hover:text-primary transition-colors" to="/the-land">
                    DTCP Regularisation
                  </Link>
                </li>
                <li>
                  <Link className="text-on-surface-variant hover:text-primary transition-colors" to="/the-land">
                    Melapalayam Sub-Registrar
                  </Link>
                </li>
                <li>
                  <Link className="text-on-surface-variant hover:text-primary transition-colors" to="/inquire">
                    Direct Concierge Desk
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-label-sm text-label-sm uppercase tracking-wider text-primary mb-3">
                Survey Registry
              </h5>
              <p className="font-tabular-spec text-tabular-spec text-outline">
                Scheme: Kokkadikulam No: 2<br />
                Survey: S.No 14/1J • TS No 13/7<br />
                Ward AS, Block 1, Melapalayam<br />
                Direct: {projectData.contact.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright & Legal Deed Attestation */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-outline gap-4">
          <p className="font-body-sm text-body-sm">
            © <span>{currentYear}</span> {projectData.brandName}. All rights reserved. DTCP Regularisation Orders SWP/104/2024 &amp; SWP/146/2024.
          </p>
          <div className="flex items-center space-x-6">
            <span className="font-label-sm text-[10px] uppercase tracking-wider">7 Sanctioned Parcels</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-primary transition-colors focus:outline-none"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        {/* Agency Attribution & Official Backlink */}
        <div className="joinery-border-t pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="font-body-sm text-on-surface-variant text-xs">
              Designed and developed by
            </span>
            <a
              href="https://tmdigitalgrow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-outline-variant/60 hover:border-[#9a6538] hover:bg-surface hover:shadow-md transition-all duration-300"
              title="TM Digital Marketing — Official Agency Website"
            >
              <span className="font-tm-luxury font-bold text-sm tracking-widest text-[#7a481c] group-hover:text-[#9a6538] transition-colors">
                TM Digital
              </span>
              <span className="font-body-sm font-semibold text-primary text-xs tracking-normal">
                Marketing
              </span>
              <span className="material-symbols-outlined text-[13px] text-[#7a481c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                arrow_outward
              </span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-outline">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#54634a]"></span>
            <span>Agency Backlink:</span>
            <a
              href="https://tmdigitalgrow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-secondary hover:text-primary transition-colors underline decoration-outline-variant hover:decoration-primary"
            >
              tmdigitalgrow.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
