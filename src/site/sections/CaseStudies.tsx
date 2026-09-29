import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button, Eyebrow, Reveal, SplitTitle } from '../ui/primitives';
import { PROJECTS } from '../../genz/data/portfolioData';
import type { Project } from '../../genz/types';
import { coverUrl } from '../data/covers';

/** Horizontal carousel of case studies, one card per shipped project. */
export function CaseStudies({ onOpenProject }: { onOpenProject: (p: Project) => void }) {
  const track = useRef<HTMLDivElement>(null);
  const nudge = (dir: 1 | -1) => {
    const el = track.current!;
    const card = el.querySelector('article');
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 400) + 12), behavior: 'smooth' });
  };

  return (
    <div id="work" className="pt-[clamp(5rem,4rem+4vw,9rem)]">
      <div className="container-grid grid gap-10 md:grid-cols-12">
        <Eyebrow className="text-navy-900 md:col-span-3">Case studies</Eyebrow>
        <SplitTitle
          text={'Shipping *real-world AI*\nacross industries'}
          className="heading text-[length:var(--text-fluid-lg)] text-navy-900 md:col-span-8 md:col-start-5"
        />
      </div>

      <div className="container-grid mt-16 flex items-center justify-between">
        <p className="text-[14px] text-navy-500">{PROJECTS.length} projects: production agents, live demos and source</p>
        <div className="flex gap-2">
          {[-1, 1].map((d) => (
            <Button
              key={d}
              variant="slate"
              iconOnly
              onClick={() => nudge(d as 1 | -1)}
              icon={d < 0 ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
            >
              {d < 0 ? 'Previous case study' : 'Next case study'}
            </Button>
          ))}
        </div>
      </div>

      <div
        ref={track}
        className="no-scrollbar mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-[var(--grid-margin)] pb-2"
        data-lenis-prevent-wheel=""
      >
        {PROJECTS.map((p, i) => (
          <Reveal as="article" key={p.id} delay={Math.min(i, 4) * 0.07} className="w-[82vw] shrink-0 snap-start sm:w-[420px] xl:w-[460px]">
            <button onClick={() => onOpenProject(p)} className="group flex h-full w-full flex-col rounded-[var(--radius-md)] bg-slate-100 p-3 text-left">
              <div className="flex gap-3 px-2 pt-1">
                <span className="text-label-sm text-navy-500">{p.category}</span>
                <span className="text-label-sm text-navy-500">{p.techStack[0]}</span>
              </div>
              <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-[var(--radius-sm)] bg-charcoal">
                <img
                  src={coverUrl(p.id)}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-[1.06]"
                />
                <span className="absolute left-3 top-3 rounded-[var(--radius-sm)] bg-charcoal/70 px-2 py-1 text-[14px] text-white">
                  {p.stats}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
                <h3 className="text-[length:var(--text-fluid-2xs)] leading-[1.25] tracking-[-0.02em] text-navy-900">{p.title}</h3>
                <p className="mt-1.5 text-[16px] leading-snug text-navy-500">{p.tagline}</p>
                <div className="mt-auto flex items-end justify-between gap-4 pt-10">
                  <div className="flex gap-6">
                    {p.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <p className="text-[length:var(--text-fluid-2xs)] leading-none tracking-[-0.03em] text-navy-900">{m.value}</p>
                        <p className="mt-1.5 text-[14px] leading-snug text-navy-500">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <span className="text-[14px] text-navy-500 transition-colors group-hover:text-pink-600">Read case study</span>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
