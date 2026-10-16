import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';

export default function FAQ({ projectData }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = projectData.faqs || [
    {
      question: "Where exactly is NOORA AVENUE - II located in Melapalayam, Tirunelveli?",
      answer: "NOORA AVENUE - II is located at Madina Garden, Kokkattikulam Village, within the Melapalayam Ward (Ward AS, Block 1, Palayamkottai Taluk, Tirunelveli Corporation), Tamil Nadu — 627005. The site is situated just 500 meters from Annai Hajira Women's College and 1.5 km from V.S.T. Pallivasal."
    },
    {
      question: "Is NOORA AVENUE - II approved by DTCP and local authorities?",
      answer: "Yes, 100%. The layout has received full statutory technical sanction from the Directorate of Town and Country Planning (DTCP) under Sanction Order SWP/68/2024 (Online Application: GT61QM93/2024) and Tirunelveli Corporation planning approval. All government park fee treasury receipts and OSR obligations have been formally fulfilled."
    },
    {
      question: "What are the plot dimensions and internal road width?",
      answer: "The layout encompasses 8 sanctioned residential plots ranging from 121.2 Sq.M (1,304 Sq.Ft) to 142.3 Sq.M (1,532 Sq.Ft) with north-south depths of 21.90 meters. The layout features an official 9.15-meter (30-feet) wide internal avenue road providing generous vehicular ingress for all plots."
    },
    {
      question: "Are the residential plots ready for immediate registration and construction?",
      answer: "Yes. All 8 plots have clear, unencumbered parent titles with individual survey demarcations (Survey No: 14/1Ppt, 1Q.18/3pt/4; Town Survey Nos: 13/37, 13/55, 16/4, 16/75). Direct sale deed execution and immediate spot registration can be carried out at the Melapalayam Sub-Registrar Office with instant physical boundary possession."
    },
    {
      question: "How can I schedule a site walkthrough or get pricing details?",
      answer: "You can connect directly with our authorized project promoters by calling +91 94432 83369 or +91 97900 19486, or click the WhatsApp button on this website for immediate layout blueprints, plot availability, and current pricing."
    }
  ];

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
            <span>Buyer Guidance & Local SEO FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 mt-2 font-normal">
            Essential facts regarding DTCP approval order SWP/68/2024, location connectivity, plot demarcations, and sub-registrar registration.
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
            <a
              href={projectData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-900 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
