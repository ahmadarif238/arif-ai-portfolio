import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Eyebrow, Reveal, SplitTitle } from '../ui/primitives';
import { FAQS } from '../../genz/data/portfolioData';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div id="faq" className="container-grid grid gap-12 pb-[clamp(5rem,4rem+4vw,9rem)] md:grid-cols-12">
      <div className="md:col-span-4">
        <Eyebrow className="text-navy-900">FAQ</Eyebrow>
        <SplitTitle text={'Questions,\n*answered*'} className="heading mt-10 text-[length:var(--text-fluid-md)] text-navy-900" />
      </div>
      <ul className="md:col-span-7 md:col-start-6">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal as="li" key={f.question} className="border-b hairline">
              <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="group flex w-full items-center gap-6 py-6 text-left">
                <span className="flex-1 text-[length:var(--text-fluid-2xs)] tracking-[-0.02em] text-navy-900 group-hover:text-pink-600">{f.question}</span>
                <Plus className={`h-5 w-5 shrink-0 text-navy-900 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
              </button>
              <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.645,.045,.355,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <p className="overflow-hidden text-[16px] leading-relaxed text-navy-500">
                  <span className="block max-w-[44rem] pb-7">{f.answer}</span>
                </p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
