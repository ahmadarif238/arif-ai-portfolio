import { useState } from 'react';
import { Reveal, Segmented, SplitTitle } from '../ui/primitives';
import { USE_CASES, USE_CASE_TABS, UseCaseTab } from '../data/siteContent';
import { iconFor } from '../ui/icons';
import { PROJECTS } from '../../genz/data/portfolioData';
import type { Project } from '../../genz/types';

/**
 * "Built by Arif": tabs of concrete things I build, each card linking to the
 * project that proves it or straight to a pre-filled enquiry.
 */
export function UseCases({ onOpenProject, onEnquire }: { onOpenProject: (p: Project) => void; onEnquire: (service: string) => void }) {
  const [tab, setTab] = useState<UseCaseTab>('voice');
  const items = USE_CASES.filter((u) => u.tab === tab);

  return (
    <section data-stage="shield" className="relative pb-[calc(var(--radius-xl)+clamp(5rem,4rem+4vw,9rem))] pt-[clamp(3rem,2rem+4vw,7rem)]">
      <div className="container-grid">
        <div className="flex flex-col items-center text-center">
          <SplitTitle text="Built by Arif" className="heading text-[length:var(--text-fluid-md)]" />
          <Reveal delay={0.1} className="mt-8">
            <Segmented tone="dark" value={tab} onChange={setTab} options={USE_CASE_TABS} />
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1200px] gap-3 sm:grid-cols-2">
          {items.map((u, i) => {
            const Icon = iconFor(u.icon);
            const project = u.projectId ? PROJECTS.find((p) => p.id === u.projectId) : undefined;
            return (
              <Reveal key={tab + u.title} delay={i * 0.06}>
                <button
                  onClick={() => (project ? onOpenProject(project) : onEnquire(u.service))}
                  className="group flex h-full w-full gap-4 rounded-[var(--radius-md)] bg-slate-50 p-3 text-left transition-transform duration-300 hover:-translate-y-0.5 sm:gap-5"
                >
                  <span className="grid aspect-square w-[88px] shrink-0 place-items-center rounded-[var(--radius-sm)] bg-slate-200 text-navy-900 transition-colors duration-300 group-hover:bg-pink-500 group-hover:text-charcoal sm:w-[108px]">
                    <Icon className="h-9 w-9" strokeWidth={1.4} />
                  </span>
                  <span className="flex flex-col py-1 pr-2">
                    <span className="text-[16px] leading-tight tracking-[-0.02em] text-navy-900 sm:text-[length:var(--text-fluid-2xs)]">{u.title}</span>
                    <span className="mt-1.5 text-[14px] leading-snug text-navy-500">{u.description}</span>
                    <span className="text-label-sm mt-auto pt-3 text-navy-900 underline decoration-navy-900/30 underline-offset-4 group-hover:decoration-pink-500">
                      {project ? 'View case study' : 'Discuss this'}
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
