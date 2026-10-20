import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import InquiryForm from '../components/InquiryForm';
import { projectData } from '../data/projectData';

export default function InquirePage() {
  const [searchParams] = useSearchParams();
  const preselectedPlot = searchParams.get('plot');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="py-10 sm:py-16 md:py-20 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-space-md md:px-margin-desktop">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="font-label-sm text-[11px] sm:text-label-sm uppercase tracking-widest text-secondary">
              06 / Expression of Interest
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-display-xl font-display-xl text-primary font-normal leading-tight">
            Initiate a Direct Dialogue
          </h1>
          <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant mt-3 max-w-2xl mx-auto leading-relaxed">
            Register your interest to receive verified survey documents, technical blueprints, or coordinate an accompanied site inspection at Kokkadikulam Scheme No: 2.
          </p>
          <div className="w-12 h-px bg-secondary mx-auto mt-4"></div>
        </div>

        {/* Form Container */}
        <div className="mb-20">
          <InquiryForm preselectedPlot={preselectedPlot} />
        </div>

        {/* Frequently Addressed Questions (FAQ Accordion) */}
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center sm:text-left">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-1">
              Transparent Inquiries
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary">
              Frequently Addressed Questions
            </h2>
          </div>

          <div className="space-y-4">
            {projectData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-surface-container-lowest joinery-border">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-5 px-6 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-headline-sm text-base md:text-lg text-primary font-medium">
                      {faq.q}
                    </span>
                    <span className="material-symbols-outlined text-outline transition-transform duration-200">
                      {isOpen ? 'remove' : 'add'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 font-body-md text-body-md text-on-surface-variant joinery-border-t pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
