import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { PRICING_TIERS } from '../data/portfolioData';

interface PricingSectionProps {
  onSelectTierForContact?: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTierForContact }) => {

  return (
    <section id="pricing" className="relative py-24 border-t border-[#222f43]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GenZ Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131c31] border border-[#222f43] text-xs font-semibold text-[#0bd1d1] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0ea5ea]" />
              <span>Scoped & Transparent Engagements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Pricing <span className="color-linear">Plans</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#94a9c9] leading-relaxed">
            Every project is scoped individually, so you get a fixed quote before any work begins. Direct engineer access and full source code ownership come as standard.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const price = tier.monthlyPrice;
            const isPopular = tier.popular;

            return (
              <div
                key={tier.id}
                className={`card-hover-border bg-[#131c31] border-[#222f43] p-8 rounded-3xl flex flex-col justify-between relative transition-all duration-300 ${
                  isPopular
                    ? 'ring-2 ring-[#0bd1d1] shadow-2xl lg:-translate-y-2'
                    : ''
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 right-8">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#0ea5ea] to-[#0bd1d1] text-xs font-bold text-white shadow-md">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-[#94a9c9] leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  {/* Price display */}
                  <div className="flex items-baseline gap-2 border-b border-[#222f43] pb-6 mb-6">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">
                      {price}
                    </span>
                    <span className="text-xs text-[#7f92b0] font-mono">
                      {tier.periodLabel}
                    </span>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-bold text-[#7f92b0] uppercase tracking-wider">
                      Included Deliverables:
                    </div>
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#94a9c9]">
                        <CheckCircle2 className="w-4 h-4 text-[#0bd1d1] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 border-t border-[#222f43]">
                  <a
                    href="#contact"
                    onClick={() => onSelectTierForContact && onSelectTierForContact(tier.name)}
                    className={isPopular ? 'btn-linear w-full justify-center' : 'btn-border-linear w-full justify-center'}
                  >
                    <span>Choose {tier.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
