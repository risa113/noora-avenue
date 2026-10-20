import React from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../data/projectData';

export default function TheLandPage() {
  return (
    <div className="py-10 sm:py-16 md:py-20 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-space-md md:px-margin-desktop">
        
        {/* Page Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center space-x-2 mb-2 sm:mb-3">
            <span className="font-label-sm text-xs sm:text-label-sm uppercase tracking-widest text-secondary">
              Land Pedigree &amp; Statutory Validation
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-display-xl font-display-xl text-primary font-normal leading-tight mb-4">
            The Land &amp; Stewardship
          </h1>
          <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            A considered 900.00 Sq.M residential sanctuary in Kokkadikulam Scheme No: 2, Melapalayam, planned to honor natural topography, groundwater hydrology, and legal transparency.
          </p>
          <div className="w-16 h-px bg-secondary mt-5 sm:mt-6"></div>
        </div>

        {/* Pull Quote */}
        <div className="max-w-4xl mb-12 sm:mb-16 p-6 sm:p-8 bg-surface-container-low joinery-border">
          <blockquote className="text-xl sm:text-2xl md:text-headline-lg font-headline-lg text-primary italic leading-relaxed">
            "Land is not merely property; it is an enduring relationship with topography, light, and natural heritage."
          </blockquote>
          <p className="font-body-md text-xs sm:text-sm text-secondary mt-3">
            — "இன்று வாங்கும் நிலம், நாளை உங்கள் பெரிய சொத்து!" (Invest today in soil that anchors future generations)
          </p>
        </div>

        {/* Two-column Editorial Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div className="space-y-6">
            <h2 className="font-headline-md text-primary">Contour-First Development</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Every parcel within <strong className="text-primary font-semibold">{projectData.brandName}</strong> is positioned to honor existing natural gradients, gentle monsoon runoff drainage courses, and optimal sun orientations. Rather than imposing arbitrary urban grids, our layout is guided by the contours of the earth.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our stewardship charter guarantees that boundary demarcations are sustained with permanent granite pegging. The open sky remains vast and uncluttered, protected by low-density residential development guidelines created for peaceful domestic longevity.
            </p>
          </div>

          <div className="space-y-6 border-l joinery-border pl-6 md:pl-10">
            <h3 className="font-headline-sm text-headline-sm text-primary">Hydrology &amp; Soil Architecture</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Each deed carries unbroken parent documentation, clear residential conversion status, and verified groundwater sustainability tests conducted across the Kokkadikulam belt.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-surface-container-low p-5 joinery-border">
                <span className="font-label-sm text-label-sm uppercase text-outline block mb-1">Soil Texture</span>
                <span className="font-tabular-spec text-tabular-spec text-primary font-medium block mb-1">
                  {projectData.pedigree.soilTexture}
                </span>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  {projectData.pedigree.soilDesc}
                </p>
              </div>

              <div className="bg-surface-container-low p-5 joinery-border">
                <span className="font-label-sm text-label-sm uppercase text-outline block mb-1">Water Table</span>
                <span className="font-tabular-spec text-tabular-spec text-primary font-medium block mb-1">
                  {projectData.pedigree.waterTable}
                </span>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  {projectData.pedigree.waterDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Project Facts Grid (6 Cards) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Verified Project Register
            </h3>
            <span className="font-tabular-spec text-tabular-spec text-secondary flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">verified</span> DTCP Sanctioned Layout
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 joinery-border divide-y sm:divide-y-0 sm:divide-x sm:divide-y-0 divide-outline-variant bg-surface-container-lowest">
            <div className="p-8">
              <span className="font-label-sm text-label-sm uppercase text-outline block mb-2">Total Project Extent</span>
              <p className="font-headline-sm text-headline-sm text-primary mb-1">
                {projectData.approvals.totalExtent}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Continuous perimeter survey with authenticated white granite boundary stakes.
              </p>
            </div>

            <div className="p-8">
              <span className="font-label-sm text-label-sm uppercase text-outline block mb-2">Number of Plots</span>
              <p className="font-headline-sm text-headline-sm text-primary mb-1">
                7 Designated Parcels
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Numbered 1 through 7 with depths from 20.20m to 21.60m and 6.00m to 6.20m frontages.
              </p>
            </div>

            <div className="p-8">
              <span className="font-label-sm text-label-sm uppercase text-outline block mb-2">Zoning &amp; Sanctions</span>
              <p className="font-headline-sm text-headline-sm text-primary mb-1">
                {projectData.approvals.dtcpOrder}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Online regularisation sanction {projectData.approvals.onlineApp} formally validated.
              </p>
            </div>

            <div className="p-8">
              <span className="font-label-sm text-label-sm uppercase text-outline block mb-2">Boundary Delineation</span>
              <p className="font-headline-sm text-headline-sm text-primary mb-1">
                Survey Pegs In Place
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Permanent granite baseline markers installed at all key nodal vertices on site.
              </p>
            </div>

            <div className="p-8">
              <span className="font-label-sm text-label-sm uppercase text-outline block mb-2">Access Road Frontage</span>
              <p className="font-headline-sm text-headline-sm text-primary mb-1">
                {projectData.approvals.roadWidth}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {projectData.approvals.roadSurveyNo} road corridor with 42.20 meters uninterrupted western frontage.
              </p>
            </div>

            <div className="p-8">
              <span className="font-label-sm text-label-sm uppercase text-outline block mb-2">Legal Verification</span>
              <p className="font-headline-sm text-headline-sm text-primary mb-1">
                100% Clear Title
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Encumbrance-free parent deeds ready for review; spot registration at Melapalayam SRO.
              </p>
            </div>
          </div>
          <div className="mt-3 text-right">
            <span className="font-label-sm text-[10px] uppercase tracking-wider text-outline">
              * Dimensional specifications strictly derived from the approved surveyor blueprint SWP/104/2024.
            </span>
          </div>
        </div>

        {/* CTA to Blueprint Explorer */}
        <div className="p-8 bg-surface-container-low joinery-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-headline-sm text-primary">Inspect the 7 Designated Plots</h4>
            <p className="font-body-sm text-on-surface-variant mt-1">
              Examine the official municipal subdivision drawing with interactive pan &amp; zoom capabilities.
            </p>
          </div>
          <Link
            to="/plot-layout"
            className="bg-primary-container text-white px-7 py-3 font-label-sm text-label-sm uppercase tracking-widest hover:bg-secondary transition-colors whitespace-nowrap"
          >
            Open Plot Explorer
          </Link>
        </div>

      </div>
    </div>
  );
}
