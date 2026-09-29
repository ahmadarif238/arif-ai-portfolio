import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ------------------------------------------------------------------ hooks */

/** Adds `is-in` once the element scrolls into view (one-shot). */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

/* ------------------------------------------------------------- scramble */

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=/<>';

/** Mono label that scrambles into place on hover, like the reference buttons. */
export function ScrambleText({ text, active }: { text: string; active: boolean }) {
  const [out, setOut] = useState(text);
  const frame = useRef(0);
  useEffect(() => {
    cancelAnimationFrame(frame.current);
    if (!active) {
      setOut(text);
      return;
    }
    const start = performance.now();
    const dur = 420;
    const step = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const settled = Math.floor(p * text.length);
      setOut(
        text
          .split('')
          .map((ch, i) => (ch === ' ' || i < settled ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
          .join('')
      );
      if (p < 1) frame.current = requestAnimationFrame(step);
    };
    frame.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame.current);
  }, [active, text]);
  return (
    <span className="text-label relative z-[2] inline-block leading-none" aria-label={text}>
      <span aria-hidden="true">{out}</span>
    </span>
  );
}

/* --------------------------------------------------------------- button */

type Variant = 'pink' | 'ghost' | 'slate';

interface ButtonProps {
  children: string;
  variant?: Variant;
  href?: string;
  to?: string;
  onClick?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  iconOnly?: boolean;
  label?: string;
  external?: boolean;
}

export function Button({ children, variant = 'pink', href, to, onClick, icon, className = '', type = 'button', disabled, external, iconOnly, label }: ButtonProps) {
  const [hover, setHover] = useState(false);
  const cls = `btn btn-${variant} ${iconOnly ? 'btn-icon' : ''} ${className}`;
  const inner = (
    <>
      <span aria-hidden="true" className="btn-fill" />
      {!iconOnly && <ScrambleText text={children} active={hover} />}
      {icon && <span className="relative z-[2] inline-flex">{icon}</span>}
    </>
  );
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    ...(iconOnly ? { 'aria-label': label ?? children } : {})
  };
  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick} {...handlers}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick} {...handlers} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled} {...handlers}>
      {inner}
    </button>
  );
}

/* ----------------------------------------------------------- split title */

/**
 * Heading whose words rise out of a mask one after another when it scrolls in.
 * Wrap the accent phrase in `*asterisks*` to render it in the pink gradient.
 */
export function SplitTitle({
  text,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  stagger = 0.06
}: {
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const [ref, inView] = useInView<HTMLHeadingElement>(0.3);
  let i = 0;
  const parts = text.split(/(\*[^*]+\*|\n)/g).filter(Boolean);
  return (
    <Tag ref={ref} className={`${className} ${inView ? 'is-in' : ''}`} aria-label={text.replace(/\*/g, '')}>
      {parts.map((part, pi) => {
        if (part === '\n') return <br key={pi} />;
        const accent = part.startsWith('*');
        const words = part.replace(/\*/g, '').split(' ').filter(Boolean);
        const nodes = words.map((w, wi) => {
          const d = delay + i++ * stagger;
          return (
            <React.Fragment key={wi}>
              <span className="split-word" aria-hidden="true">
                <span style={{ transitionDelay: `${d}s` }} className={accent ? 'text-gradient' : ''}>
                  {w}
                </span>
              </span>
              {wi < words.length - 1 || !accent ? ' ' : ''}
            </React.Fragment>
          );
        });
        return (
          <React.Fragment key={pi}>
            {nodes}
            {accent ? ' ' : ''}
          </React.Fragment>
        );
      })}
    </Tag>
  );
}

/* -------------------------------------------------------------- reveal */

export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div'
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li' | 'section' | 'article';
}) {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);
  return (
    <Tag ref={ref as React.RefObject<never>} className={`reveal ${inView ? 'is-in' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------- eyebrow */

export function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`eyebrow text-label ${className}`}>{children}</p>;
}

/* -------------------------------------------------------- segmented */

export function Segmented<T extends string>({
  options,
  value,
  onChange,
  tone = 'light'
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  tone?: 'light' | 'dark';
}) {
  return (
    <div
      role="tablist"
      className={`inline-flex gap-1 rounded-[var(--radius-sm)] p-1 bg-white`}
    >
      {options.map((o) => (
        <button
          key={o.value}
          role="tab"
          aria-selected={value === o.value}
          onClick={() => onChange(o.value)}
          className={`rounded-[var(--radius-sm)] px-3 py-2 text-[16px] transition-colors duration-200 sm:px-5 ${
            value === o.value ? 'bg-navy-500 text-white' : 'text-navy-900 hover:bg-slate-100'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------ counter */

export function useCountUp(target: number, run: boolean, ms = 1400) {
  const [v, setV] = useState(0);
  const tick = useCallback(() => {
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - t0) / ms, 1);
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, ms]);
  useEffect(() => {
    if (run) tick();
  }, [run, tick]);
  return v;
}
