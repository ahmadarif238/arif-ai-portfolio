import { Award, GraduationCap } from 'lucide-react';
import { Eyebrow, Reveal, SplitTitle, useCountUp, useInView } from '../ui/primitives';
import { CERTIFICATIONS, EDUCATION, EXPERIENCES, PERSONAL_INFO } from '../../genz/data/portfolioData';
import { coverUrl } from '../data/covers';

function Stat({ value, label }: { value: string; label: string }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.5);
  const num = parseFloat(value);
  const suffix = value.replace(/^[\d.]+/, '');
  const v = useCountUp(isNaN(num) ? 0 : num, inView);
  return (
    <div ref={ref} className="border-t hairline pt-5">
      <p className="text-[length:var(--text-fluid-md)] leading-none tracking-[-0.05em] text-navy-900">
        {isNaN(num) ? value : `${Math.round(v)}${suffix}`}
      </p>
      <p className="text-label-sm mt-3 text-navy-500">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <div id="about" className="container-grid pb-[clamp(5rem,4rem+4vw,9rem)] pt-[clamp(5rem,4rem+4vw,9rem)]">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-charcoal">
            <img src={coverUrl('about')} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="relative p-6 pt-10 sm:p-10">
              <div className="mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-[var(--radius-md)] ring-1 ring-white/20">
                <img src={PERSONAL_INFO.avatarUrl} alt={PERSONAL_INFO.name} className="h-full w-full object-cover" />
              </div>
              <div className="mt-6 flex items-end justify-between gap-4 text-white">
                <div>
                  <p className="text-[22px] tracking-[-0.02em]">{PERSONAL_INFO.name}</p>
                  <p className="text-label-sm mt-2 text-white/70">Software Engineer · {PERSONAL_INFO.location}</p>
                </div>
                <span className="text-label-sm rounded-[5px] bg-pink-500 px-2 py-1 text-charcoal">Available</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          <Eyebrow className="text-navy-900">About</Eyebrow>
          <SplitTitle text={'One engineer,\n*accountable* end to end'} className="heading mt-10 text-[length:var(--text-fluid-lg)] text-navy-900" />
          <Reveal delay={0.1}>
            <p className="mt-8 text-[length:var(--text-fluid-2xs)] leading-[1.5] text-navy-500">{PERSONAL_INFO.extendedBio}</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <Stat value={PERSONAL_INFO.completedProjects} label="Projects shipped" />
            <Stat value={PERSONAL_INFO.caseStudies} label="Case studies" />
            <Stat value={PERSONAL_INFO.hoursSavedWeekly} label="Hrs saved / week" />
            <Stat value={PERSONAL_INFO.automationUptime} label="Automation uptime" />
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mt-[clamp(4rem,3rem+4vw,8rem)] grid gap-10 md:grid-cols-12">
        <Eyebrow className="text-navy-900 md:col-span-4">Experience</Eyebrow>
        <ul className="md:col-span-8">
          {EXPERIENCES.map((e) => (
            <Reveal as="li" key={e.role + e.company} className="grid gap-3 border-t hairline py-7 sm:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="text-label-sm flex items-center gap-2 text-navy-500">
                  {e.isCurrent && <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />}
                  {e.period}
                </p>
                <p className="mt-3 text-[19px] tracking-[-0.02em] text-navy-900">{e.role}</p>
                <p className="mt-1 text-[14px] text-navy-500">
                  {e.company}
                  {e.location ? ` · ${e.location}` : ''}
                </p>
              </div>
              <ul className="space-y-2">
                {e.points.slice(0, 3).map((p) => (
                  <li key={p} className="flex gap-3 text-[14px] leading-relaxed text-navy-500">
                    <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-[2px] bg-pink-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-12">
        <div className="md:col-span-8 md:col-start-5 grid gap-3 sm:grid-cols-2">
          {EDUCATION.map((ed) => (
            <Reveal key={ed.degree} className="card-slate flex gap-4 p-5">
              <GraduationCap className="h-6 w-6 shrink-0 text-navy-900" strokeWidth={1.5} />
              <div>
                <p className="text-[16px] text-navy-900">{ed.degree}</p>
                <p className="mt-1 text-[13px] text-navy-500">{ed.institution}</p>
                <p className="text-label-sm mt-3 text-navy-500">
                  {ed.period} · GPA {ed.gpa}
                </p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.08} className="card-slate flex gap-4 p-5">
            <Award className="h-6 w-6 shrink-0 text-navy-900" strokeWidth={1.5} />
            <ul className="space-y-2">
              {CERTIFICATIONS.map((c) => (
                <li key={c.name}>
                  <p className="text-[14px] text-navy-900">{c.name}</p>
                  <p className="text-label-sm mt-0.5 text-navy-500">
                    {c.issuer} · {c.year}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
