import { ArrowUpRight } from 'lucide-react';
import { Button, Eyebrow, Reveal, SplitTitle } from '../ui/primitives';
import { PROCESS_STEPS } from '../../genz/data/portfolioData';
import { PROCESS_ICONS } from '../data/siteContent';
import { iconFor } from '../ui/icons';
import { scrollToHash } from '../lib/scroll';

/** Dark band over the hex-shield set: how an engagement runs, step by step. */
export function ProcessSection() {
  return (
    <section id="process" data-stage="shield" className="relative pb-[clamp(5rem,4rem+4vw,9rem)] pt-[calc(var(--radius-xl)+clamp(5rem,4rem+4vw,9rem))] -mt-[var(--radius-xl)]">
      <div className="container-grid grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-[calc(var(--header-h)+3rem)]">
            <Eyebrow>How I work</Eyebrow>
            <SplitTitle text={'Scoped, *shipped*\nand supported'} className="heading mt-10 text-[length:var(--text-fluid-lg)]" />
            <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
              <Button
                variant="pink"
                href="#contact"
                icon={<ArrowUpRight className="h-4 w-4" />}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash('#contact');
                }}
              >
                Free audit
              </Button>
              <Button
                variant="ghost"
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash('#pricing');
                }}
              >
                See pricing
              </Button>
            </Reveal>
          </div>
        </div>

        <ol className="space-y-14 md:col-span-6 md:col-start-7">
          {PROCESS_STEPS.map((s, i) => {
            const Icon = iconFor(PROCESS_ICONS[i]);
            return (
              <Reveal as="li" key={s.step} delay={0.05}>
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 shrink-0 text-white/70" strokeWidth={1.5} />
                  <h3 className="text-[length:var(--text-fluid-xs)] tracking-[-0.03em]">{s.title}</h3>
                  <span className="text-label-sm ml-auto shrink-0 text-pink-300">{s.duration}</span>
                </div>
                <p className="mt-3 max-w-[36rem] text-[length:var(--text-fluid-2xs)] leading-[1.45] text-white/70">{s.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.keyPoints.slice(0, 3).map((k) => (
                    <li key={k} className="rounded-[var(--radius-sm)] bg-charcoal/70 px-2.5 py-1.5 text-[14px] text-white/70">
                      {k}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
