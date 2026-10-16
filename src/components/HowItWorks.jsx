import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, FileCheck, Layers, MapPin, Maximize2, ShieldCheck } from 'lucide-react';
import { asset } from '../utils/assetUrl';

export default function HowItWorks({ projectData, onOpenLightbox }) {
  const [activeStepIndex, setActiveStepIndex] = useState(1); // Default to Plot Selection (Step 2) like in video

  const steps = projectData.workflowSteps || [
    {
      id: "step-1",
      stepNumber: "01",
      title: "Request & Requirements",
      description: "Connect with our authorized promoters to register your residential parcel requirement, desired frontage, and custom orientation in Kokkattikulam.",
      actionText: "Request Plot Callback",
      image: asset("/assets/images/melapalayam_satellite_location.jpg"),
      blueprintBadge: "Consultation Phase"
    },
    {
      id: "step-2",
      stepNumber: "02",
      title: "Plot Selection",
      description: "Explore verified Plots 01 through 08 with exact side dimensions, 30-feet road frontages, and on-site physical demarcation walkthroughs.",
      actionText: "Inspect 8 Available Plots",
      image: asset("/assets/images/land_aerial_survey.jpg"),
      blueprintBadge: "30 Ft Road Access"
    },
    {
      id: "step-3",
      stepNumber: "03",
      title: "Legal Support & DTCP Order",
      description: "Review complete statutory records including DTCP Sanction SWP/68/2024, online filing GT61QM93/2024, and government park fee treasury receipts.",
      actionText: "Verify DTCP Sanctions",
      image: asset("/assets/images/plot_layout_scan.png"),
      blueprintBadge: "Order SWP/68/2024"
    },
    {
      id: "step-4",
      stepNumber: "04",
      title: "Key Transfer & Registration",
      description: "Direct sale deed execution, instant sub-registrar registration, transparent encumbrance-free title transfer, and immediate site possession.",
      actionText: "Book Immediate Registration",
      image: asset("/assets/images/land_ground_view.jpg"),
      blueprintBadge: "Clear Title Assured"
    }
  ];

  const currentStep = steps[activeStepIndex] || steps[0];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header (Video 00:01 style) */}
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
              DTCP sanctioned layout, verified plot dimensions, and transparent sub-registrar documentation — everything you need to invest with absolute confidence.
            </p>
          </div>
        </div>

        {/* Interactive Step Navigator Split (Video 00:01) */}
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
                      <span className="text-sm font-bold tracking-tight">
                        {step.title}
                      </span>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'text-white translate-x-1' : 'text-neutral-400 group-hover:translate-x-1'
                    }`} />
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Column: Featured Image with Floating Floorplan Card */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-xl group">
              <img
                src={currentStep.image}
                alt={currentStep.title}
                className="w-full h-[420px] sm:h-[480px] lg:h-[520px] object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Layout Drawing Blueprint Overlay Card (Directly from Video 00:01) */}
              <div className="absolute bottom-5 right-5 left-5 sm:left-auto sm:w-84 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-xl text-left">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 block">
                      Official Blueprint Preview
                    </span>
                    <h5 className="text-sm font-extrabold text-neutral-900">
                      மனை உட்பிரிவு வரைபடம் (Scale 1:400)
                    </h5>
                  </div>
                  <button
                    onClick={() => onOpenLightbox(projectData.layoutInfo.image, "மனை உட்பிரிவு வரைபடம் (Plan of Subdivision)", "Plots 01–08 • 9.15M Road • SWP/68/2024")}
                    className="p-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
                    title="Enlarge blueprint"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div
                  className="mt-3 relative rounded-xl overflow-hidden border border-neutral-200/90 bg-neutral-50 cursor-pointer group/plan"
                  onClick={() => onOpenLightbox(projectData.layoutInfo.image, "மனை உட்பிரிவு வரைபடம் (Plan of Subdivision)", "Plots 01–08 • 9.15M Road • SWP/68/2024")}
                >
                  <img
                    src={projectData.layoutInfo.image}
                    alt="Sanctioned Blueprint Thumbnail"
                    className="w-full h-32 object-contain p-1 group-hover/plan:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-neutral-900/20 opacity-0 group-hover/plan:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-neutral-900 shadow-md flex items-center gap-1.5">
                      <Maximize2 className="w-3 h-3 text-sky-600" />
                      Inspect Full Blueprint
                    </span>
                  </div>
                </div>

                <div className="mt-2.5 flex items-center justify-between text-[11px] text-neutral-500 font-semibold">
                  <span>DTCP Sanction: SWP/68/2024</span>
                  <span className="text-neutral-900 font-bold">8 Plots Sanctioned</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
