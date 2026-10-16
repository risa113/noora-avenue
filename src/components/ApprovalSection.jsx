import React from 'react';
import { CheckCircle2, ExternalLink, FileCheck, FileCheck2, ShieldCheck } from 'lucide-react';

export default function ApprovalSection({ projectData, onOpenLightbox }) {
  const { approvalDetails } = projectData;

  return (
    <section id="approvals" className="py-20 lg:py-28 bg-[#FAFAF9] border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700 block mb-1">
              Government Sanctions & Regulatory Order
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              {approvalDetails.heading}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-tamil mt-1">
              மாவட்ட நகர் ஊரமைப்பு அலுவலகம் — Official Subdivision Sanction Order SWP/68/2024
            </p>
          </div>

          <button
            onClick={() => onOpenLightbox(approvalDetails.documentImage, "DTCP Sanction Order (ஒப்புதல் ஆவணம்)", "SWP/68/2024 • GT61QM93/2024")}
            className="btn-pill-primary text-xs py-2.5 px-5 self-start sm:self-auto"
          >
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>View Sanction Document</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Statutory Metadata & Clauses */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200 shadow-sm">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 block mb-2">
                Statutory Summary
              </span>
              <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                அனைத்து வளர்ச்சி அனுமதி, மனை அமைப்புகள், 9.15 மீ சாலை மற்றும் பூங்கா கட்டண வரம்புகள் அரசு விதிமுறைகளின்படி முறையாக நிறைவேற்றப்பட்டுள்ளன.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "உத்தரவு எண் (Sanction No)", val: approvalDetails.layoutOrderNo, accent: false },
                  { label: "விண்ணப்ப எண் (Online Ref)", val: approvalDetails.onlineAppNo, accent: true },
                  { label: "மொத்த பரப்பளவு (Total Area)", val: approvalDetails.totalArea, accent: false },
                  { label: "பூங்கா கட்டணம் (Park Fee)", val: approvalDetails.parkAreaFee, accent: true },
                ].map((item) => (
                  <div key={item.label} className="p-3.5 rounded-2xl bg-[#FAFAF9] border border-neutral-200/80">
                    <span className="text-[10px] text-neutral-400 uppercase font-bold block">{item.label}</span>
                    <span className={`text-sm sm:text-base font-black block mt-1 ${item.accent ? 'text-sky-700' : 'text-neutral-900'}`}>
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Clauses */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block px-1">
                அரசாணை & தொழில்நுட்ப விதிமுறைகள் (Clauses)
              </span>
              {approvalDetails.officialClauses.map((clause, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-2xs space-y-1 hover:border-neutral-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-bold text-neutral-900">{clause.title}</span>
                  </div>
                  <p className="text-xs text-neutral-600 pl-6 font-tamil leading-relaxed">{clause.desc}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Scanned Government Order Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white p-5 border border-neutral-200 shadow-sm text-left group">
              <div
                className="relative overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-center p-2 min-h-[440px] cursor-pointer"
                onClick={() => onOpenLightbox(approvalDetails.documentImage, "DTCP Sanction Order (ஒப்புதல் ஆவணம்)", "SWP/68/2024 • GT61QM93/2024")}
              >
                <img
                  src={approvalDetails.documentImage}
                  alt="DTCP Sanction Order SWP/68/2024"
                  className="w-full h-auto max-h-[500px] object-contain mx-auto group-hover:scale-102 transition-transform duration-500 rounded"
                />
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <div className="px-5 py-3 rounded-full bg-white text-neutral-900 font-extrabold text-xs border border-neutral-200 flex items-center gap-2 shadow-xl">
                    <ExternalLink className="w-4 h-4 text-sky-600" />
                    <span>Zoom & Read Full Government Sanction Order</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 px-2 flex items-center justify-between text-xs text-neutral-500">
                <span className="font-tamil">மனை உட்பிரிவு தொழில்நுட்ப ஒப்புதல் உத்திரவு</span>
                <span className="text-neutral-900 font-extrabold">SWP/68/2024</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
