import { Check } from 'lucide-react';
import { Button, Eyebrow, Reveal, SplitTitle } from '../ui/primitives';
import { PRICING_TIERS } from '../../genz/data/portfolioData';

/** Engagement options on a dark band, the recommended one lifted in pink. */
export function Pricing({ onEnquire }: { onEnquire: (tier: string) => void }) {
  return (
    <section
      id="pricing"
      data-stage="ribbons"
      className="relative -mt-[var(--radius-xl)] pb-[calc(var(--radius-xl)+clamp(5rem,4rem+4vw,9rem))] pt-[calc(var(--radius-xl)+clamp(5rem,4rem+4vw,9rem))]"
    >
      <div className="container-grid">
        <div className="grid gap-10 md:grid-cols-12">
          <Eyebrow className="md:col-span-3">Pricing</Eyebrow>
          <div className="md:col-span-8 md:col-start-5">
            <SplitTitle text={'Simple, *transparent*\nengagements'} className="heading text-[length:var(--text-fluid-lg)]" />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-lg text-[length:var(--text-fluid-2xs)] leading-[1.45] text-white/70">
                Every project is quoted up front after a short call, including expected running costs, so the monthly bill never surprises you.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-3 lg:grid-cols-3">
          {PRICING_TIERS.map((t, i) => {
            const hot = !!t.popular;
            return (
              <Reveal key={t.id} delay={i * 0.08}>
                <div
                  className={`no-shadow flex h-full flex-col rounded-[var(--radius-lg)] p-6 sm:p-8 ${
                    hot ? 'bg-pink-500 text-charcoal' : 'bg-charcoal/85 text-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-label-sm">{t.periodLabel}</p>
                    {t.badge && <span className="text-label-sm rounded-[var(--radius-sm)] bg-charcoal px-2 py-1 text-pink-300">{t.badge}</span>}
                  </div>
                  <h3 className="mt-8 text-[length:var(--text-fluid-xs)] leading-tight tracking-[-0.03em]">{t.name}</h3>
                  <p className="mt-2 text-[length:var(--text-fluid-md)] tracking-[-0.04em]">{t.monthlyPrice}</p>
                  <p className={`mt-4 text-[16px] leading-relaxed ${hot ? 'text-charcoal' : 'text-white/70'}`}>{t.description}</p>
                  <ul className={`mt-8 space-y-3 border-t pt-8 ${hot ? 'border-charcoal/15' : 'border-white/10'}`}>
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-3 text-[14px] leading-snug">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${hot ? 'text-charcoal' : 'text-pink-300'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-10">
                    <Button variant={hot ? 'ghost' : 'pink'} className="w-full" onClick={() => onEnquire(t.name)}>
                      {t.ctaText}
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
