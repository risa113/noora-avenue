import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';

export default function FAQ({ projectData }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = projectData.faqs || [];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-800 text-[11px] font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Buyer Guidance & Local FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 mt-2 font-normal">
            Essential facts regarding DTCP approval order SWP/104/2024 & SWP/146/2024, 7-plot demarcations, 7.00M road access, and sub-registrar registration.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200/90 bg-[#FAFAF9] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-neutral-900 hover:text-sky-800 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-neutral-900 text-white border-neutral-900' : 'text-neutral-600'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal border-t border-neutral-200/60 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Banner */}
        <div className="mt-10 p-6 rounded-3xl bg-[#FAFAF9] border border-neutral-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <h4 className="text-sm font-extrabold text-neutral-900">
              Have specific legal or boundary questions?
            </h4>
            <p className="text-xs text-neutral-500 mt-0.5">
              Speak directly with our authorized project promoters for on-site inspection.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${projectData.contact.primaryPhoneTel}`}
              className="btn-pill-primary text-xs py-2.5 px-4"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {projectData.contact.primaryPhone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}