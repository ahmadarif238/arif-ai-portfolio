import { useEffect, useRef, useState } from 'react';
import { Check, FileCode2, Folder } from 'lucide-react';
import { Eyebrow, Reveal, Segmented, SplitTitle, useInView } from '../ui/primitives';
import { WHY_ITEMS } from '../data/siteContent';
import { PROJECTS } from '../../genz/data/portfolioData';
import { coverUrl } from '../data/covers';

/**
 * First light sheet. A sticky index on the left follows whichever feature is in
 * view on the right, each feature carrying a small live visual.
 */
export function WhySection() {
  const [active, setActive] = useState(0);
  const blocks = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    blocks.current.forEach((b) => b && io.observe(b));
    return () => io.disconnect();
  }, []);

  const visuals = [<PipelineCard key="p" />, <OwnershipCard key="o" />, <TerminalCard key="t" />, <ChartCard key="c" />];

  return (
    <section className="sheet" id="why">
      <div className="container-grid pb-[clamp(5rem,4rem+4vw,9rem)] pt-[clamp(5rem,4rem+4vw,9rem)]">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-[length:var(--text-fluid-xs)] leading-[1.2] tracking-[-0.02em] text-navy-900">
              Production-grade software
              <br />
              without the production complexity
            </p>
          </Reveal>
          <SplitTitle
            text={'Built for businesses,\n*pushing boundaries*'}
            className="heading text-[length:var(--text-fluid-lg)] text-navy-900 md:col-span-7 md:col-start-6"
          />
        </div>

        <div className="mt-[clamp(4rem,3rem+5vw,10rem)] grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-[calc(var(--header-h)+3rem)]">
              <Eyebrow className="text-navy-900">Why work with me</Eyebrow>
              <ul className="mt-14 hidden space-y-1 md:block">
                {WHY_ITEMS.map((w, i) => (
                  <li key={w.key}>
                    <a
                      href={`#why-${w.key}`}
                      onClick={(e) => {
                        e.preventDefault();
                        blocks.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                      className={`text-left text-[length:var(--text-fluid-md)] leading-[1.15] tracking-[-0.035em] transition-colors duration-500 ${
                        active === i ? 'text-navy-900' : 'text-navy-300 hover:text-navy-500'
                      }`}
                    >
                      {w.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-[clamp(4rem,3rem+4vw,8rem)] md:col-span-6 md:col-start-7">
            {WHY_ITEMS.map((w, i) => (
              <div key={w.key} id={`why-${w.key}`} data-index={i} ref={(el) => { blocks.current[i] = el; }}>
                <Reveal>{visuals[i]}</Reveal>
                <Reveal delay={0.1}>
                  <p className="text-label-sm mt-8 text-pink-700 md:hidden">{w.label}</p>
                  <h3 className="mt-6 text-[length:var(--text-fluid-2xs)] tracking-[-0.02em] text-navy-900">{w.title}</h3>
                  <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6] text-navy-500">{w.body}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- cards */

const FEATURED = PROJECTS.filter((p) => p.featured);

function PipelineCard() {
  const [tab, setTab] = useState(FEATURED[0].id);
  const project = FEATURED.find((p) => p.id === tab)!;
  const [ref, inView] = useInView<HTMLDivElement>(0.35);
  const [runKey, setRunKey] = useState(0);
  useEffect(() => setRunKey((k) => k + 1), [tab, inView]);

  return (
    <div ref={ref} className="relative overflow-hidden rounded-[var(--radius-lg)] bg-charcoal">
      <img src={coverUrl(project.id)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-500" />
      <div className="relative flex flex-col items-center px-4 pb-6 pt-6 sm:px-10">
        <Segmented
          tone="dark"
          value={tab}
          onChange={setTab}
          options={FEATURED.map((p) => ({ value: p.id, label: p.title.split(/[: ]/)[0] }))}
        />
        <div className="mt-24 w-full rounded-[var(--radius-md)] bg-slate-50 p-5 sm:mt-32 sm:p-7" key={runKey}>
          <p className="text-label-sm text-navy-500">Pipeline</p>
          <ul className="mt-5 space-y-4">
            {project.workflow.map((step, i) => (
              <li key={step}>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[14px] leading-snug text-navy-900">{step.split(/[.,]/)[0]}</span>
                  <Check
                    className="h-4 w-4 shrink-0 text-pink-700 opacity-0"
                    style={{ animation: inView ? `fade-in .3s ${0.6 + i * 0.55}s forwards` : undefined }}
                  />
                </div>
                <div className="mt-2 h-[6px] overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full w-0 rounded-full bg-pink-500"
                    style={{ animation: inView ? `bar-fill .55s ${0.1 + i * 0.55}s cubic-bezier(.645,.045,.355,1) forwards` : undefined }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-200 pt-5">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-[length:var(--text-fluid-xs)] tracking-[-0.03em] text-navy-900">{m.value}</p>
                <p className="mt-1 text-[14px] leading-snug text-navy-500">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OwnershipCard() {
  const files = [
    { depth: 0, name: 'your-project/', dir: true },
    { depth: 1, name: 'agents/', dir: true },
    { depth: 2, name: 'orchestrator.py' },
    { depth: 2, name: 'factual_enforcer.py' },
    { depth: 1, name: 'api/', dir: true },
    { depth: 2, name: 'main.py' },
    { depth: 1, name: 'web/', dir: true },
    { depth: 2, name: 'app.tsx' },
    { depth: 1, name: 'docker-compose.yml' },
    { depth: 1, name: 'README.md' },
    { depth: 1, name: '.env.example' }
  ];
  const [ref, inView] = useInView<HTMLDivElement>(0.35);
  return (
    <div ref={ref} className="rounded-[var(--radius-lg)] bg-slate-100 p-4 sm:p-8">
      <div className="rounded-[var(--radius-md)] bg-white p-5 sm:p-7">
        <div className="flex items-center justify-between">
          <p className="text-label-sm text-navy-500">Handover</p>
          <p className="text-label-sm rounded-[var(--radius-sm)] bg-pink-500/12 px-2 py-1 text-pink-700">Delivered</p>
        </div>
        <ul className="mt-5 font-mono text-[14px] text-navy-900">
          {files.map((f, i) => (
            <li
              key={f.name + i}
              className="flex items-center gap-2 py-[5px] opacity-0"
              style={{ paddingLeft: f.depth * 20, animation: inView ? `fade-in .35s ${i * 0.08}s forwards` : undefined }}
            >
              {f.dir ? <Folder className="h-4 w-4 text-pink-700" /> : <FileCode2 className="h-4 w-4 text-navy-500" />}
              {f.name}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-4 rounded-[var(--radius-sm)] bg-white px-4 py-3 text-[14px] text-navy-500">
        100% ownership · No lock-in · Credentials handed over
      </p>
    </div>
  );
}

const TERMINAL = [
  { t: 'cmd', v: 'arif@studio ~ % ship contract-iq --stack fastapi,langgraph,pinecone' },
  { t: 'ok', v: 'Connected HubSpot CRM' },
  { t: 'ok', v: 'Linked Slack workspace #alerts' },
  { t: 'ok', v: 'Indexed contract vault into Pinecone' },
  { t: 'ok', v: 'Built Docker image (api + worker)' },
  { t: 'log', v: 'Logs' },
  { t: 'bar', v: 'Tests   ', p: 100 },
  { t: 'bar', v: 'Evals   ', p: 100 },
  { t: 'ok', v: 'Deployed to production' }
];

function TerminalCard() {
  const [ref, inView] = useInView<HTMLDivElement>(0.35);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= TERMINAL.length) clearInterval(id);
    }, 420);
    return () => clearInterval(id);
  }, [inView]);
  return (
    <div ref={ref} className="rounded-[var(--radius-lg)] bg-charcoal p-4 sm:p-6">
      <p className="text-label-sm inline-block rounded-[var(--radius-sm)] bg-slate-200 px-2 py-1 text-navy-900">Terminal</p>
      <div className="mt-4 min-h-[330px] rounded-[var(--radius-md)] bg-slate-50 p-5 font-mono text-[12px] leading-[1.75] text-navy-900 sm:p-6">
        {TERMINAL.slice(0, n).map((l, i) => (
          <div key={i} className="fade-line">
            {l.t === 'cmd' && <p className="break-words">{l.v}</p>}
            {l.t === 'ok' && <p className="text-pink-700">✓ {l.v}</p>}
            {l.t === 'log' && <p className="mt-2 text-navy-500">{l.v}</p>}
            {l.t === 'bar' && (
              <p className="flex items-center gap-2 whitespace-pre">
                {l.v}
                <span className="inline-block h-[10px] w-40 overflow-hidden bg-slate-200 sm:w-56">
                  <span className="block h-full bg-navy-900" style={{ animation: 'bar-fill .8s forwards', width: 0 }} />
                </span>
                {l.p}%
              </p>
            )}
          </div>
        ))}
        {n < TERMINAL.length && <span className="inline-block h-4 w-2 animate-pulse bg-navy-900 align-middle" />}
      </div>
    </div>
  );
}

const SERIES: Record<string, number[][]> = {
  Latency: [
    [22, 24, 21, 26, 23, 30, 24, 22, 25, 23, 27, 24, 22],
    [38, 40, 36, 44, 39, 52, 41, 38, 43, 40, 47, 41, 39],
    [55, 57, 52, 63, 54, 72, 58, 53, 61, 56, 68, 60, 56]
  ],
  Calls: [
    [12, 18, 22, 28, 34, 30, 42, 46, 44, 52, 58, 62, 66],
    [18, 24, 30, 36, 44, 40, 52, 56, 54, 62, 68, 72, 76],
    [26, 32, 38, 46, 54, 50, 62, 66, 64, 72, 78, 82, 86]
  ],
  Cost: [
    [60, 58, 55, 50, 48, 44, 40, 38, 34, 30, 28, 26, 24],
    [66, 64, 61, 57, 54, 50, 46, 44, 40, 37, 34, 32, 30],
    [74, 72, 68, 64, 60, 56, 52, 50, 46, 43, 40, 38, 36]
  ]
};

function ChartCard() {
  const [tab, setTab] = useState<'Latency' | 'Calls' | 'Cost'>('Latency');
  const [ref, inView] = useInView<HTMLDivElement>(0.35);
  const w = 520;
  const h = 220;
  const toPath = (arr: number[]) =>
    arr.map((v, i) => `${i === 0 ? 'M' : 'L'}${(i / (arr.length - 1)) * w},${h - (v / 100) * h}`).join(' ');
  const colors = ['#586490', '#b3c0d4', '#ff488b'];
  return (
    <div ref={ref} className="rounded-[var(--radius-lg)] bg-slate-100 p-4 sm:p-8">
      <div className="flex justify-center">
        <Segmented value={tab} onChange={setTab} options={(['Latency', 'Calls', 'Cost'] as const).map((v) => ({ value: v, label: v }))} />
      </div>
      <div className="mt-6 rounded-[var(--radius-md)] bg-white p-4 sm:p-6">
        <svg viewBox={`-30 -10 ${w + 40} ${h + 40}`} className="w-full" role="img" aria-label={`Sample ${tab.toLowerCase()} trend`}>
          {[0, 25, 50, 75, 100].map((g) => (
            <g key={g}>
              <line x1="0" x2={w} y1={h - (g / 100) * h} y2={h - (g / 100) * h} stroke="#dbe5ed" strokeDasharray="3 4" />
              <text aria-hidden="true" x="-10" y={h - (g / 100) * h + 4} textAnchor="end" className="fill-navy-500 font-mono text-[12px]">
                {g}
              </text>
            </g>
          ))}
          {['09:00', '12:00', '15:00', '18:00'].map((t, i) => (
            <text aria-hidden="true" key={t} x={(i / 3) * w} y={h + 22} textAnchor="middle" className="fill-navy-500 font-mono text-[12px]">
              {t}
            </text>
          ))}
          {SERIES[tab].map((s, i) => (
            <path
              key={tab + i}
              d={toPath(s)}
              fill="none"
              stroke={colors[i]}
              strokeWidth={i === 2 ? 2 : 1.5}
              pathLength={1}
              strokeDasharray="1"
              strokeDashoffset={inView ? 0 : 1}
              style={{ transition: `stroke-dashoffset 1.6s ${i * 0.15}s cubic-bezier(.645,.045,.355,1)` }}
            />
          ))}
        </svg>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-2">
            {['P50', 'P90', 'Max'].map((l, i) => (
              <span key={l} className={`text-label-sm rounded-[var(--radius-sm)] px-2 py-1 ${['text-white', 'text-navy-900', 'text-charcoal'][i]}`} style={{ background: colors[i] }}>
                {l}
              </span>
            ))}
          </div>
          <span className="text-[14px] text-navy-500">Illustrative monitoring view</span>
        </div>
      </div>
    </div>
  );
}
