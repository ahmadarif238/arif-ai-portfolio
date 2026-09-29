import { useEffect, useState } from 'react';
import { ArrowRight, Download, ExternalLink, Github, Printer, X } from 'lucide-react';
import { Button, Eyebrow } from '../ui/primitives';
import { CERTIFICATIONS, EDUCATION, EXPERIENCES, PERSONAL_INFO, PROJECTS, TECH_CATEGORIES } from '../../genz/data/portfolioData';
import type { Project } from '../../genz/types';
import { coverUrl } from '../data/covers';
import { lockScroll } from '../lib/scroll';

/** Bottom sheet that slides up over the page, closing on Escape or backdrop. */
function Sheet({ open, onClose, label, children }: { open: boolean; onClose: () => void; label: string; children: React.ReactNode }) {
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
    } else {
      setShown(false);
      const t = setTimeout(() => setMounted(false), 500);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      lockScroll(false);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!mounted) return null;
  return (
    <div className="fixed inset-0 z-[200]" role="dialog" aria-modal="true" aria-label={label}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/70 backdrop-blur-md transition-opacity duration-500 ${shown ? 'opacity-100' : 'opacity-0'}`}
      />
      <div
        data-lenis-prevent
        className={`sheet absolute inset-x-0 bottom-0 max-h-[94svh] overflow-y-auto rounded-b-none transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)] ${
          shown ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="sticky top-4 z-10 float-right mr-4 mt-4 grid h-11 w-11 place-items-center rounded-[var(--radius-sm)] bg-navy-900 text-white transition-colors hover:bg-pink-500 hover:text-charcoal"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ case study */

export function ProjectOverlay({
  project,
  onClose,
  onOpen,
  onEnquire
}: {
  project: Project | null;
  onClose: () => void;
  onOpen: (p: Project) => void;
  onEnquire: (s: string) => void;
}) {
  const [last, setLast] = useState<Project | null>(project);
  useEffect(() => {
    if (project) setLast(project);
  }, [project]);
  const p = project ?? last;
  const idx = p ? PROJECTS.findIndex((x) => x.id === p.id) : -1;
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <Sheet open={!!project} onClose={onClose} label={p ? `${p.title} case study` : 'Case study'}>
      {p && (
        <article className="container-grid pb-16 pt-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <Eyebrow className="text-navy-900">Case study · {p.category}</Eyebrow>
              <h2 className="heading mt-8 text-[length:var(--text-fluid-lg)] text-navy-900">{p.title}</h2>
              <p className="mt-4 text-[length:var(--text-fluid-xs)] tracking-[-0.02em] text-gradient inline-block">{p.tagline}</p>
              <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-navy-500">{p.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {p.liveUrl && (
                  <Button variant="pink" href={p.liveUrl} external icon={<ExternalLink className="h-4 w-4" />}>
                    Live demo
                  </Button>
                )}
                {p.githubUrl && (
                  <Button variant="navy" href={p.githubUrl} external icon={<Github className="h-4 w-4" />}>
                    Source
                  </Button>
                )}
                <Button
                  variant="slate"
                  onClick={() => {
                    onClose();
                    onEnquire('Autonomous AI Agents');
                  }}
                >
                  Build one for me
                </Button>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-[var(--radius-lg)] bg-charcoal">
                <img src={coverUrl(p.id)} alt="" className="aspect-[16/10] w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-3">
            {p.metrics.map((m) => (
              <div key={m.label} className="card-slate p-6">
                <p className="text-[length:var(--text-fluid-md)] leading-none tracking-[-0.05em] text-navy-900">{m.value}</p>
                <p className="text-label-sm mt-3 text-navy-500">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <Eyebrow className="text-pink-600">The problem</Eyebrow>
              <p className="mt-5 text-[length:var(--text-fluid-2xs)] leading-[1.5] text-navy-900">{p.problem}</p>
            </div>
            <div>
              <Eyebrow className="text-pink-600">The solution</Eyebrow>
              <p className="mt-5 text-[length:var(--text-fluid-2xs)] leading-[1.5] text-navy-900">{p.solution}</p>
            </div>
          </div>

          {/* Architecture flow */}
          <div className="mt-16 rounded-[var(--radius-lg)] bg-charcoal p-6 sm:p-10">
            <p className="text-label-sm text-white/60">Architecture</p>
            <ol className="mt-6 flex flex-wrap items-center gap-2">
              {p.architecture.map((n, i) => (
                <li key={n.id} className="flex items-center gap-2">
                  <span
                    className={`text-label-sm rounded-[var(--radius-sm)] px-3 py-2.5 ${
                      n.type === 'agent' ? 'bg-pink-500 text-charcoal' : n.type === 'output' ? 'bg-white text-navy-900' : 'bg-white/10 text-white'
                    }`}
                  >
                    {n.label}
                  </span>
                  {i < p.architecture.length - 1 && <ArrowRight className="h-4 w-4 text-white/40" />}
                </li>
              ))}
            </ol>
            <div className="mt-6 flex gap-4 text-white/60">
              {[
                ['bg-white/10', 'Input / process'],
                ['bg-pink-500', 'Agent'],
                ['bg-white', 'Output']
              ].map(([c, l]) => (
                <span key={l} className="text-label-sm flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-[2px] ${c}`} />
                  {l}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <Eyebrow className="text-navy-900">How it works</Eyebrow>
              <ol className="mt-6 space-y-4">
                {p.workflow.map((w, i) => (
                  <li key={w} className="flex gap-4 border-t hairline pt-4">
                    <span className="text-label-sm pt-1 text-pink-600">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[16px] leading-relaxed text-navy-900">{w}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <Eyebrow className="text-navy-900">Key features</Eyebrow>
              <ul className="mt-6 grid gap-2">
                {p.features.map((f) => (
                  <li key={f} className="card-slate flex items-center gap-3 px-4 py-3.5 text-[15px] text-navy-900">
                    <span className="h-[6px] w-[6px] rounded-[2px] bg-pink-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-label-sm mt-8 text-navy-500">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.techStack.map((t) => (
                  <span key={t} className="text-label-sm rounded-[5px] bg-navy-900 px-2.5 py-1.5 text-white">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpen(next)}
            className="group mt-20 flex w-full items-center justify-between gap-6 rounded-[var(--radius-lg)] bg-slate-100 p-6 text-left sm:p-8"
          >
            <span>
              <span className="text-label-sm text-navy-500">Next case study</span>
              <span className="mt-2 block text-[length:var(--text-fluid-sm)] tracking-[-0.03em] text-navy-900 group-hover:text-pink-600">{next.title}</span>
            </span>
            <img src={coverUrl(next.id)} alt="" className="hidden h-24 w-40 rounded-[var(--radius-sm)] object-cover sm:block" />
          </button>
        </article>
      )}
    </Sheet>
  );
}

/* ---------------------------------------------------------------- resume */

export function ResumeOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Sheet open={open} onClose={onClose} label="Resume">
      <div className="container-grid mx-auto max-w-5xl pb-16 pt-16">
        <Eyebrow className="text-navy-900">Curriculum vitae · {PERSONAL_INFO.year}</Eyebrow>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="heading text-[length:var(--text-fluid-lg)] text-navy-900">{PERSONAL_INFO.name}</h2>
            <p className="mt-3 text-[17px] text-navy-500">{PERSONAL_INFO.tagline}</p>
          </div>
          <div className="flex gap-2 print:hidden">
            <Button variant="pink" href="/resume.pdf" external icon={<Download className="h-4 w-4" />}>
              Download PDF
            </Button>
            <Button variant="slate" onClick={() => window.print()} icon={<Printer className="h-4 w-4" />}>
              Print
            </Button>
          </div>
        </div>
        <p className="text-label-sm mt-6 flex flex-wrap gap-x-5 gap-y-2 text-navy-500">
          <span>{PERSONAL_INFO.email}</span>
          <span>{PERSONAL_INFO.phone}</span>
          <span>{PERSONAL_INFO.location}</span>
        </p>

        <p className="mt-10 border-t hairline pt-8 text-[16px] leading-relaxed text-navy-500">{PERSONAL_INFO.extendedBio}</p>

        <h3 className="text-label mt-12 text-navy-900">Experience</h3>
        <ul className="mt-4">
          {EXPERIENCES.map((e) => (
            <li key={e.role} className="border-t hairline py-6">
              <div className="flex flex-wrap justify-between gap-2">
                <p className="text-[18px] text-navy-900">
                  {e.role} <span className="text-navy-500">· {e.company}</span>
                </p>
                <p className="text-label-sm text-navy-500">{e.period}</p>
              </div>
              <ul className="mt-3 space-y-1.5">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-[14px] leading-relaxed text-navy-500">
                    <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-[2px] bg-pink-500" />
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-label text-navy-900">Education</h3>
            {EDUCATION.map((ed) => (
              <div key={ed.degree} className="mt-4 border-t hairline pt-4">
                <p className="text-[16px] text-navy-900">{ed.degree}</p>
                <p className="mt-1 text-[14px] text-navy-500">
                  {ed.institution} · {ed.period} · GPA {ed.gpa}
                </p>
              </div>
            ))}
            <h3 className="text-label mt-10 text-navy-900">Certifications</h3>
            <ul className="mt-4 space-y-3 border-t hairline pt-4">
              {CERTIFICATIONS.map((c) => (
                <li key={c.name} className="text-[14px] text-navy-900">
                  {c.name} <span className="text-navy-500">· {c.issuer}, {c.year}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-label text-navy-900">Skills</h3>
            <div className="mt-4 space-y-5 border-t hairline pt-4">
              {TECH_CATEGORIES.map((c) => (
                <div key={c.category}>
                  <p className="text-[14px] text-navy-900">{c.category}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-navy-500">{c.skills.map((s) => s.name).join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Sheet>
  );
}
