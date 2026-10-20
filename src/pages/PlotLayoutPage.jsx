import React from 'react';
import { Link } from 'react-router-dom';
import BlueprintExplorer from '../components/BlueprintExplorer';
import { parcelData } from '../data/parcelData';

export default function PlotLayoutPage() {
  const plotList = ["1", "2", "3", "4", "5", "6", "7"].map((id) => parcelData[id]);

  return (
    <div className="py-12 md:py-20 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-space-md md:px-margin-desktop">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                Drawing No: SWP/104/2024 • Scale 1:400 Cadastral Master
              </span>
            </div>
            <h1 className="font-display-xl-mobile md:font-display-xl text-primary font-normal leading-tight">
              Interactive 7-Plot Subdivision Explorer
            </h1>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            Click or touch any parcel on the verified surveyor subdivision blueprint below to examine frontage, individual depths, orientation, and availability status.
          </p>
        </div>

        {/* Interactive Explorer Component */}
        <div className="mb-16">
          <BlueprintExplorer />
        </div>

        {/* Tabular Overview of All 7 Plots */}
        <div className="bg-surface-container-lowest joinery-border p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Complete 7-Plot Dimensional Register
              </h3>
              <p className="font-body-sm text-on-surface-variant mt-1">
                Verified dimensional specifications filed under Application 7GDMQ9WA/2024.
              </p>
            </div>
            <Link
              to="/inquire"
              className="inline-flex items-center space-x-2 bg-primary-container text-surface-container-lowest px-5 py-2.5 font-label-sm text-label-sm uppercase tracking-wider hover:bg-secondary transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              <span>Book / Reserve Plot</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b joinery-border bg-surface-container-low font-label-sm text-label-sm uppercase text-secondary">
                  <th className="py-3 px-4">Plot No.</th>
                  <th className="py-3 px-4">Area (Sq.M)</th>
                  <th className="py-3 px-4">Area (Sq.Ft / Cents)</th>
                  <th className="py-3 px-4">North Depth</th>
                  <th className="py-3 px-4">South Depth</th>
                  <th className="py-3 px-4">East Width</th>
                  <th className="py-3 px-4">West Frontage</th>
                  <th className="py-3 px-4">Orientation</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant font-tabular-spec">
                {plotList.map((plot) => (
                  <tr key={plot.id} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-primary">{plot.title}</td>
                    <td className="py-3.5 px-4 font-medium text-primary">{plot.areaSqM.toFixed(2)}</td>
                    <td className="py-3.5 px-4 text-on-surface-variant">{plot.areaSqFt} Sq.Ft ({plot.areaCents} Cts)</td>
                    <td className="py-3.5 px-4 text-on-surface-variant">{plot.north}</td>
                    <td className="py-3.5 px-4 text-on-surface-variant">{plot.south}</td>
                    <td className="py-3.5 px-4 text-on-surface-variant">{plot.east}</td>
                    <td className="py-3.5 px-4 font-medium text-primary">{plot.west}</td>
                    <td className="py-3.5 px-4 text-secondary">{plot.facing}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block border border-secondary-fixed-dim bg-secondary-container text-on-secondary-fixed font-label-sm text-[9px] px-2 py-0.5 uppercase tracking-wider">
                        {plot.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <span className="font-label-sm text-[10px] uppercase tracking-wider text-outline">
              * Total Layout Extent: 900.00 Sq.M (22.24 Cents) • Direct 7.00m Existing Road (TS No: 13/107)
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
