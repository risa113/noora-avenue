import React from 'react';

export default function AnnouncementBar() {
  return (
    <div className="bg-surface-container joinery-border-b text-center py-2 px-3 sm:px-4 transition-colors">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-center gap-2 sm:gap-3">
        <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0"></span>
        <p className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-wider text-secondary leading-tight sm:leading-normal">
          DTCP Approved Layout • Regularisation Orders SWP/104/2024 &amp; SWP/146/2024 • 7 Sanctioned Plots • Spot Registration Ready
        </p>
      </div>
    </div>
  );
}
