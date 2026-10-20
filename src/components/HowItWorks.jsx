import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, FileCheck, Layers, MapPin, Maximize2, ShieldCheck } from 'lucide-react';
import { asset } from '../utils/assetUrl';

export default function HowItWorks({ projectData, onOpenLightbox }) {
  const [activeStepIndex, setActiveStepIndex] = useState(1); // Default to Plot Selection (Step 2)

  const steps = projectData.workflowSteps || [];
  const currentStep = steps[activeStepIndex] || steps[0];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14 text-left">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 block mb-2">
              Verified Acquisition Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              See what we offer and how it works
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-neutral-500 leading-relaxed font-normal">
              DTCP sanctioned layout SWP/104/2024, verified plot dimensions for 7 plots, and transparent sub-registrar documentation — everything you need to invest with absolute confidence.
            </p>
          </div>
        </div>

        {/* Interactive Step Navigator Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Steps List & Active Card */}
          <div className="lg:col-span-5 text-left space-y-6">
            
            {/* Active Step Highlight Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAFAF9] border border-neutral-200 shadow-sm transition-all duration-300">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 block mb-1">
                Active Step {currentStep.stepNumber} of 04
              </span>
              <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight">
                {currentStep.title}
              </h3>
              <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                {currentStep.description}
              </p>

              <div className="pt-6 mt-6 border-t border-neutral-200/80 flex items-center justify-between">
                <a
                  href={`tel:${projectData.contact.primaryPhoneTel}`}
                  className="btn-pill-primary text-xs py-2.5 px-5"
                >
                  <span>Get consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                  {currentStep.blueprintBadge}
                </span>
              </div>
            </div>

            {/* Vertical Step Selector Tabs */}
            <div className="space-y-2 pt-2">
              {steps.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? 'bg-neutral-900 text-white shadow-sm'
                        : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100/80'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                        isActive ? 'bg-white/15 text-white' : 'bg-neutral-200/60 text-neutral-600'
                      }`}>
                        {step.stepNumber}
                      </span>
                      <span className="text-sm font-extrabold tracking-tight">
                        {step.title}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-sky-400 translate-x-1' : 'text-neutral-400 opacity-60'
                    }`} />
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Column: Dynamic Step Visualizer / Scanned Blueprint Trigger */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-neutral-200 group bg-neutral-900">
              
              {/* Step Display Image */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] bg-neutral-950 flex items-center justify-center overflow-hidden">
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-neutral-900 shadow-md">
                  Phase {currentStep.stepNumber} Verification
                </div>

                {/* Inspect Blueprint Button */}
                <button
                  onClick={() => onOpenLightbox(projectData.layoutInfo.image, "மனை உட்பிரிவு வரைபடம் (Plan of Subdivision)", "Plots 01–07 • 7.00M Road • SWP/104/2024 & SWP/146/2024")}
                  className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-900 text-white text-xs font-bold border border-white/20 backdrop-blur-md flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Inspect Blueprint</span>
                </button>
              </div>

              {/* Bottom Step Information Overlay */}
              <div className="p-5 bg-white text-left flex items-center justify-between border-t border-neutral-100">
                <div>
                  <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block">
                    Sanction Order SWP/104/2024
                  </span>
                  <h4 className="text-base font-extrabold text-neutral-900">
                    {currentStep.actionText}
                  </h4>
                </div>

                <a
                  href={`tel:${projectData.contact.primaryPhoneTel}`}
                  className="btn-pill-primary text-xs py-2 px-4 shrink-0"
                >
                  <span>Connect with Desk</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}