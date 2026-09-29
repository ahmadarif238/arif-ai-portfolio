import { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { Button, Eyebrow, Reveal, SplitTitle } from '../ui/primitives';
import { SERVICES } from '../../genz/data/portfolioData';
import { iconFor } from '../ui/icons';

/** Services as the reference's arrowed feature list; each row opens in place. */
export function Services({ onEnquire }: { onEnquire: (service: string) => void }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div id="services" className="container-grid grid gap-12 pb-[clamp(5rem,4rem+4vw,9rem)] pt-[clamp(6rem,5rem+4vw,11rem)] md:grid-cols-12">
      <div className="md:col-span-4">
        <div className="md:sticky md:top-[calc(var(--header-h)+3rem)]">
          <Eyebrow className="text-navy-900">Services</Eyebrow>
          <SplitTitle text={'Everything you need\nto *ship AI*'} className="heading mt-10 text-[length:var(--text-fluid-md)] text-navy-900" />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-navy-500">
              One engineer across the whole build: interface, backend, and the automation that ties it together. No handoffs between three
              vendors.
            </p>
          </Reveal>
        </div>
      </div>

      <ul className="md:col-span-7 md:col-start-6">
        {SERVICES.map((s, i) => {
          const Icon = iconFor(s.icon);
          const isOpen = open === i;
          return (
            <Reveal as="li" key={s.number} className="border-b hairline">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-center gap-5 py-6 text-left"
              >
                <span className="text-label-sm w-8 shrink-0 text-navy-500">{s.number}</span>
                <span className="flex-1 text-[length:var(--text-fluid-2xs)] tracking-[-0.02em] text-navy-900 transition-colors group-hover:text-pink-600">
                  {s.title}
                </span>
                {isOpen ? (
                  <Plus className="h-5 w-5 rotate-45 text-navy-900 transition-transform duration-300" />
                ) : (
                  <ArrowRight className="h-5 w-5 text-navy-900 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>
              <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.645,.045,.355,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <div className="grid gap-6 pb-8 pl-[52px] sm:grid-cols-[1fr_auto]">
                    <div>
                      <p className="text-[16px] leading-relaxed text-navy-500">{s.description}</p>
                      <ul className="mt-5 space-y-2">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex gap-3 text-[14px] text-navy-900">
                            <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-pink-500" />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {s.technologies.map((t) => (
                          <span key={t} className="text-label-sm rounded-[var(--radius-sm)] bg-slate-100 px-2 py-1 text-navy-500">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4 sm:items-end">
                      <span className="grid h-14 w-14 place-items-center rounded-[var(--radius-sm)] bg-slate-100 text-navy-900">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </span>
                      <Button variant="slate" onClick={() => onEnquire(s.title)}>
                        Start this
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
