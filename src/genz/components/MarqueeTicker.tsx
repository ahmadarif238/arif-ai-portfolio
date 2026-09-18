import React from 'react';
import { Sparkles } from 'lucide-react';
import { MARQUEE_ITEMS } from '../data/portfolioData';

export const MarqueeTicker: React.FC = () => {
  const duplicatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      aria-label="Skill & Focus Areas"
      className="relative z-20 w-full overflow-hidden border-y border-[#222f43] bg-[#131c31] py-4"
    >
      <div className="flex animate-marquee items-center whitespace-nowrap">
        {duplicatedItems.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-6 mx-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#94a9c9] hover:text-[#0bd1d1] transition-colors cursor-default">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0ea5ea] to-[#0bd1d1] shadow-[0_0_8px_rgba(11,209,209,0.8)]" />
          </div>
        ))}
      </div>
    </div>
  );
};
