import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="relative py-24 border-t border-[#222f43]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GenZ Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131c31] border border-[#222f43] text-xs font-semibold text-[#0bd1d1] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0ea5ea]" />
              <span>Engineering Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The <span className="color-linear">Process</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#94a9c9] leading-relaxed">
            A structured, repeatable methodology from initial discovery audit to reliable, production-grade AI deployment.
          </p>
        </div>

        {/* 6-Step Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="card-hover-border bg-[#131c31] border-[#222f43] p-7 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black color-linear font-mono">
                    {step.step}
                  </span>
                  <span className="tag-badge text-xs font-mono font-semibold">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#0bd1d1] transition-colors mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#94a9c9] leading-relaxed mb-6">
                  {step.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#222f43] mt-auto">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#7f92b0] mb-2.5">
                  Deliverables & Activities
                </div>
                <ul className="space-y-1.5">
                  {step.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#94a9c9]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0bd1d1] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
