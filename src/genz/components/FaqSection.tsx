import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/portfolioData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="relative py-24 border-t border-[#222f43]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GenZ Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131c31] border border-[#222f43] text-xs font-semibold text-[#0bd1d1] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0ea5ea]" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Frequently Asked <span className="color-linear">Questions</span>
          </h2>
          <p className="mt-3 text-sm text-[#94a9c9] max-w-xl mx-auto leading-relaxed">
            Answers to common questions regarding architecture, security, source code ownership, and deployment timelines.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`card-hover-border bg-[#131c31] border-[#222f43] rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-[#0ea5ea]/60' : ''
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-bold transition-colors pr-4 ${
                    isOpen ? 'color-linear' : 'text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className="flex w-8 h-8 shrink-0 items-center justify-center rounded-lg bg-[#0b1220] border border-[#222f43] text-[#94a9c9]">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#0bd1d1]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[#222f43] p-6 pt-4 text-sm text-[#94a9c9] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
