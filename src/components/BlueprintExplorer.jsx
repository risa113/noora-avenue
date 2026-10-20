import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { parcelData } from '../data/parcelData';

export default function BlueprintExplorer({ onSelectPlot }) {
  const [activePlotId, setActivePlotId] = useState("1");
  const [filterCategory, setFilterCategory] = useState("all");
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const navigate = useNavigate();

  const activeData = parcelData[activePlotId] || parcelData["1"];

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.3, 2.8));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.3, 0.7));
  const handleResetZoom = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setHasMoved(false);
    setDragStart({ x: e.clientX - translate.x, y: e.clientY - translate.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setHasMoved(true);
    setTranslate({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handlePlotClick = (id) => {
    if (hasMoved) return; // user was dragging map
    setActivePlotId(id);
    if (onSelectPlot) {
      onSelectPlot(id);
    }
  };

  const handleDoubleClick = () => {
    if (scale === 1) {
      setScale(1.7);
    } else {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    }
  };

  const handleInquireClick = () => {
    navigate(`/inquire?plot=${encodeURIComponent(activeData.title)}`);
  };

  // Filter keys
  const plotKeys = ["7", "6", "5", "4", "3", "2", "1"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Interactive Blueprint Viewer (Col 8) */}
      <div className="lg:col-span-8 bg-surface-container-lowest joinery-border relative overflow-hidden flex flex-col shadow-sm">
        
        {/* Map Toolbar */}
        <div className="flex flex-wrap items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-surface joinery-border-b text-xs gap-2 sm:gap-3">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-secondary text-base">architecture</span>
            <span className="font-label-sm text-[11px] sm:text-label-sm uppercase tracking-wider text-primary">
              SWP/104/2024 • Scheme No: 2 (7 Plots)
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Filter Pills */}
            <div className="hidden sm:flex items-center border border-outline-variant bg-surface-container-low text-[10px] font-label-sm uppercase mr-2">
              <button
                onClick={() => setFilterCategory("all")}
                className={`px-2.5 py-1 ${filterCategory === 'all' ? 'bg-primary text-white font-medium' : 'text-on-surface-variant hover:text-primary'}`}
              >
                All 7
              </button>
              <button
                onClick={() => { setFilterCategory("corner"); setActivePlotId("1"); }}
                className={`px-2.5 py-1 border-l border-outline-variant ${filterCategory === 'corner' ? 'bg-primary text-white font-medium' : 'text-on-surface-variant hover:text-primary'}`}
              >
                Corner (01)
              </button>
              <button
                onClick={() => { setFilterCategory("central"); setActivePlotId("4"); }}
                className={`px-2.5 py-1 border-l border-outline-variant ${filterCategory === 'central' ? 'bg-primary text-white font-medium' : 'text-on-surface-variant hover:text-primary'}`}
              >
                Central (04)
              </button>
              <button
                onClick={() => { setFilterCategory("villa"); setActivePlotId("7"); }}
                className={`px-2.5 py-1 border-l border-outline-variant ${filterCategory === 'villa' ? 'bg-primary text-white font-medium' : 'text-on-surface-variant hover:text-primary'}`}
              >
                Villa (07)
              </button>
            </div>

            {/* Pan/Zoom Controls */}
            <button
              onClick={handleZoomIn}
              className="p-1.5 border border-outline-variant hover:bg-surface-variant text-primary focus:outline-none"
              title="Zoom In"
            >
              <span className="material-symbols-outlined text-sm">zoom_in</span>
            </button>
            <button
              onClick={handleZoomOut}
              className="p-1.5 border border-outline-variant hover:bg-surface-variant text-primary focus:outline-none"
              title="Zoom Out"
            >
              <span className="material-symbols-outlined text-sm">zoom_out</span>
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 border border-outline-variant hover:bg-surface-variant text-primary font-label-sm text-[10px] uppercase px-2 focus:outline-none"
              title="Reset View"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Mobile & Touch Quick Plot Selector Bar */}
        <div className="bg-surface-container-low px-3 py-2 joinery-border-b flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="font-label-sm text-[10px] uppercase text-outline shrink-0 mr-1 hidden sm:inline">
            Quick Select:
          </span>
          {["1", "2", "3", "4", "5", "6", "7"].map((id) => {
            const isSel = activePlotId === id;
            return (
              <button
                key={id}
                onClick={() => handlePlotClick(id)}
                className={`shrink-0 px-2.5 py-1 text-xs font-tabular-spec font-semibold transition-all rounded ${
                  isSel
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-surface-container-lowest text-primary border border-outline-variant hover:bg-surface-variant'
                }`}
              >
                Plot {id.padStart(2, '0')}
              </button>
            );
          })}
          <button
            onClick={() => handlePlotClick("road")}
            className={`shrink-0 px-2.5 py-1 text-xs font-tabular-spec font-medium transition-all rounded ${
              activePlotId === "road"
                ? 'bg-secondary text-white'
                : 'bg-surface-container-lowest text-secondary border border-secondary/30 hover:bg-secondary/10'
            }`}
          >
            23-Ft Road
          </button>
        </div>

        {/* Viewport with Pan & Zoom */}
        <div
          className="relative w-full h-[440px] sm:h-[580px] lg:h-[620px] bg-[#f4ece1] overflow-hidden cursor-grab active:cursor-grabbing select-none flex items-center justify-center"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onDoubleClick={handleDoubleClick}
        >
          <div
            className="relative transition-transform duration-100 ease-out origin-center"
            style={{
              transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`
            }}
          >
            {/* Blueprint Raster Base */}
            <img
              alt="Cadastral site subdivision plan surveyor blueprint SWP/104/2024"
              className="w-[880px] max-w-none block pointer-events-none select-none"
              src="./assets/images/blueprint-layout.png"
            />

            {/* Precise Calibrated SVG Overlay */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-auto"
              preserveAspectRatio="none"
              viewBox="0 0 1024 726"
            >
              {/* Existing 7.00m Road Corridor (West) */}
              <g
                className="cursor-pointer"
                onClick={() => handlePlotClick("road")}
              >
                <polygon
                  points="185,140 259,140 259,555 185,555"
                  fill={activePlotId === "road" ? "rgba(215, 232, 200, 0.7)" : "rgba(216, 231, 205, 0.25)"}
                  stroke="#54634a"
                  strokeDasharray="4 2"
                  strokeWidth={activePlotId === "road" ? 2.5 : 1.5}
                />
                <text
                  x="222"
                  y="348"
                  textAnchor="middle"
                  transform="rotate(-90 222 348)"
                  className="font-tabular-spec pointer-events-none fill-secondary font-bold text-[10px] tracking-wider uppercase select-none"
                >
                  EXISTING 7.00M ROAD (42.20M FRONTAGE)
                </text>
              </g>

              {/* 7 Plots: Ordered from Plot 7 (Top) to Plot 1 (Bottom) */}
              {plotKeys.map((id) => {
                const plot = parcelData[id];
                const isActive = activePlotId === id;
                return (
                  <g
                    key={id}
                    className="cursor-pointer group"
                    onClick={() => handlePlotClick(id)}
                  >
                    {/* Clickable/Hoverable Polygon */}
                    <polygon
                      points={plot.polygon}
                      fill={isActive ? "rgba(215, 232, 200, 0.65)" : "rgba(227, 232, 217, 0.25)"}
                      stroke={isActive ? "#48220a" : "#23301e"}
                      strokeWidth={isActive ? 2.8 : 1.8}
                      className="transition-all duration-200 hover:fill-[rgba(215,232,200,0.5)]"
                    />

                    {/* Badge Container Box */}
                    <rect
                      x="285"
                      y={plot.badgeY}
                      width="146"
                      height="26"
                      rx="3"
                      fill={isActive ? "rgba(215, 232, 200, 0.96)" : "rgba(255, 255, 255, 0.88)"}
                      stroke={isActive ? "#23301e" : "#54634a"}
                      strokeWidth={isActive ? 1.4 : 0.8}
                      className="pointer-events-none transition-all duration-200"
                    />

                    {/* Badge Text */}
                    <text
                      x={plot.labelX}
                      y={plot.labelY}
                      textAnchor="middle"
                      className="font-tabular-spec pointer-events-none fill-primary font-bold text-[12px] select-none"
                    >
                      {plot.plotNumber} • {plot.areaSqM.toFixed(2)} Sq.M
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Blueprint Footer Legend */}
        <div className="px-6 py-3 bg-surface joinery-border-t flex flex-wrap items-center justify-between text-xs gap-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 font-label-sm text-label-sm uppercase text-on-surface-variant">
              <span className="w-3 h-3 bg-[#e3e8d9] border border-[#23301e] inline-block"></span>
              <span>Available Plot</span>
            </span>
            <span className="flex items-center space-x-1.5 font-label-sm text-label-sm uppercase text-on-surface-variant">
              <span className="w-3 h-3 bg-[#d7e8c8] border border-[#48220a] inline-block"></span>
              <span>Selected</span>
            </span>
            <span className="flex items-center space-x-1.5 font-label-sm text-label-sm uppercase text-on-surface-variant">
              <span className="w-3 h-3 bg-[#f1eee6] border border-[#54634a] border-dashed inline-block"></span>
              <span>7.00m Road Frontage</span>
            </span>
          </div>
          <span className="font-tabular-spec text-tabular-spec text-outline">
            Drag to pan • Double click to zoom
          </span>
        </div>
      </div>

      {/* Synchronized Plot Details Inspector Panel (Col 4) */}
      <div className="lg:col-span-4 bg-surface-container-lowest joinery-border p-4 sm:p-6 md:p-8 shadow-sm">
        <div className="joinery-border-b pb-4 sm:pb-6 mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              {activeData.meta}
            </span>
            <span className="border border-secondary-fixed-dim bg-secondary-container text-on-secondary-fixed font-label-sm text-[10px] px-2.5 py-0.5 uppercase tracking-wider">
              {activeData.badge}
            </span>
          </div>
          <h3 className="text-2xl sm:text-headline-lg font-headline-lg text-primary">
            {activeData.title}
          </h3>
          <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant mt-1">
            {activeData.desc}
          </p>
        </div>

        {/* Tabular Specifications */}
        <div className="space-y-3 mb-8">
          <div className="flex justify-between py-2 joinery-border-b">
            <span className="font-label-sm text-label-sm uppercase text-outline">Cadastral Ref</span>
            <span className="font-tabular-spec text-tabular-spec text-primary font-medium">{activeData.meta}</span>
          </div>
          <div className="flex justify-between py-2 joinery-border-b">
            <span className="font-label-sm text-label-sm uppercase text-outline">Total Extent</span>
            <span className="font-tabular-spec text-tabular-spec text-primary font-medium">{activeData.area}</span>
          </div>
          <div className="flex justify-between py-2 joinery-border-b">
            <span className="font-label-sm text-label-sm uppercase text-outline">North Boundary</span>
            <span className="font-tabular-spec text-tabular-spec text-primary">{activeData.north}</span>
          </div>
          <div className="flex justify-between py-2 joinery-border-b">
            <span className="font-label-sm text-label-sm uppercase text-outline">South Boundary</span>
            <span className="font-tabular-spec text-tabular-spec text-primary">{activeData.south}</span>
          </div>
          <div className="flex justify-between py-2 joinery-border-b">
            <span className="font-label-sm text-label-sm uppercase text-outline">East Boundary</span>
            <span className="font-tabular-spec text-tabular-spec text-primary">{activeData.east}</span>
          </div>
          <div className="flex justify-between py-2 joinery-border-b">
            <span className="font-label-sm text-label-sm uppercase text-outline">West Frontage (Road)</span>
            <span className="font-tabular-spec text-tabular-spec text-primary font-medium">{activeData.west}</span>
          </div>
          <div className="flex justify-between py-2 joinery-border-b">
            <span className="font-label-sm text-label-sm uppercase text-outline">Orientation</span>
            <span className="font-tabular-spec text-tabular-spec text-primary">{activeData.facing}</span>
          </div>
          <div className="flex justify-between py-2 joinery-border-b">
            <span className="font-label-sm text-label-sm uppercase text-outline">Status</span>
            <span className="font-tabular-spec text-tabular-spec text-secondary font-medium">{activeData.status}</span>
          </div>
        </div>

        {/* Inspector CTA */}
        <button
          onClick={handleInquireClick}
          className="w-full bg-primary-container text-surface-container-lowest py-3.5 px-6 font-label-sm text-label-sm uppercase tracking-widest hover:bg-secondary transition-colors text-center block mb-4"
        >
          {activePlotId === "road" ? "Inquire About Road Access" : `Inquire for ${activeData.title}`}
        </button>

        <p className="font-body-sm text-[11px] text-outline leading-normal joinery-border-t pt-4">
          Regularisation Orders SWP/104/2024 &amp; SWP/146/2024. All boundaries physically staked by registered DTCP surveyor with permanent granite pegging. Direct spot registration at Melapalayam Sub-Registrar Office.
        </p>
      </div>
    </div>
  );
}
