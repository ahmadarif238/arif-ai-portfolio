import { useEffect, useRef, useState } from 'react';
import { Button, SplitTitle } from '../ui/primitives';
import { stageBus } from '../three/stageBus';
import { HOLD_WORDS } from '../data/siteContent';
import { PERSONAL_INFO } from '../../genz/data/portfolioData';
import { scrollToHash } from '../lib/scroll';

const HOLD_MS = 2600;
const R = 70;
const CIRC = 2 * Math.PI * R;

/**
 * Full-viewport hero over the ribbon stage. On desktop a ring follows the
 * pointer; pressing and holding fills the ring, makes the 3D surge forward and
 * flashes a word sequence, then everything eases back on release.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const ring = useRef<SVGCircleElement>(null);
  const [visible, setVisible] = useState(false);
  const [holding, setHolding] = useState(false);
  const [word, setWord] = useState(-1);
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setFine(mq.matches);
    const on = () => setFine(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  // Ring follows the pointer with a little lag.
  useEffect(() => {
    if (!fine) return;
    let x = 0,
      y = 0,
      tx = 0,
      ty = 0,
      raf = 0,
      seen = false;
    const el = root.current!;
    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!seen) {
        x = tx;
        y = ty;
        seen = true;
      }
      const overUi = (e.target as HTMLElement).closest('a, button, input, [data-no-cursor]');
      setVisible(!overUi);
    };
    const leave = () => setVisible(false);
    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      if (cursor.current) cursor.current.style.transform = `translate3d(${x - 75}px, ${y - 75}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    raf = requestAnimationFrame(loop);
    return () => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
      cancelAnimationFrame(raf);
    };
  }, [fine]);

  // Progress ring + word sequence while held.
  useEffect(() => {
    stageBus.setHold(holding);
    if (!holding) {
      setWord(-1);
      if (ring.current) {
        ring.current.style.transition = 'stroke-dashoffset .5s cubic-bezier(.645,.045,.355,1)';
        ring.current.style.strokeDashoffset = String(CIRC);
      }
      return;
    }
    if (ring.current) {
      ring.current.style.transition = `stroke-dashoffset ${HOLD_MS}ms linear`;
      ring.current.style.strokeDashoffset = '0';
    }
    const step = HOLD_MS / HOLD_WORDS.length;
    const timers = HOLD_WORDS.map((_, i) => setTimeout(() => setWord(i), i * step + 120));
    const end = setTimeout(() => setHolding(false), HOLD_MS + 900);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(end);
    };
  }, [holding]);

  useEffect(() => () => stageBus.setHold(false), []);

  const start = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).closest('a, button, input, [data-no-cursor]')) return;
    setHolding(true);
  };

  return (
    <section
      id="top"
      ref={root}
      data-stage="ribbons"
      className={`relative flex min-h-[100svh] select-none flex-col justify-end ${fine ? 'cursor-none' : ''}`}
      onPointerDown={fine ? start : undefined}
      onPointerUp={() => setHolding(false)}
      onPointerCancel={() => setHolding(false)}
    >
      {/* Hold words */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center">
        {HOLD_WORDS.map((w, i) => (
          <span
            key={w}
            className={`absolute text-[length:var(--text-fluid-3xl)] tracking-[-0.05em] text-white transition-[opacity,transform,filter] duration-500 ${
              word === i ? 'scale-100 opacity-100 blur-0' : 'scale-110 opacity-0 blur-md'
            }`}
          >
            {w}
          </span>
        ))}
      </div>

      <div
        className={`container-grid relative grid gap-10 pb-[clamp(2.5rem,6vh,5rem)] pt-40 transition-opacity duration-500 md:grid-cols-12 md:items-end ${
          holding ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <SplitTitle
          as="h1"
          text={'Intelligent\nsoftware that\n*works* for you'}
          className="heading text-[length:var(--text-fluid-2xl)] md:col-span-7"
          delay={0.25}
          stagger={0.08}
        />
        <div className="md:col-span-4 md:col-start-9" data-no-cursor>
          <p className="text-label-sm mb-5 flex items-center gap-2 text-pink-300 hero-fade" style={{ animationDelay: '.7s' }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
            </span>
            {PERSONAL_INFO.status} · {PERSONAL_INFO.location} / Remote
          </p>
          <p className="hero-fade text-[length:var(--text-fluid-2xs)] leading-[1.35] text-white" style={{ animationDelay: '.8s' }}>
            {PERSONAL_INFO.shortBio.split('. ')[0]}.
          </p>
          <div className="hero-fade mt-8 flex flex-wrap gap-3" style={{ animationDelay: '.95s' }}>
            <Button
              variant="pink"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash('#contact');
              }}
            >
              Start a project
            </Button>
            <Button
              variant="ghost"
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash('#work');
              }}
            >
              View work
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop cursor ring */}
      {fine && (
        <div ref={cursor} className={`hold-cursor ${visible ? 'is-visible' : ''} ${holding ? 'is-holding' : ''}`} aria-hidden="true">
          <svg viewBox="0 0 150 150">
            <circle cx="75" cy="75" r={R} fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1" />
            <circle
              ref={ring}
              cx="75"
              cy="75"
              r={R}
              fill="none"
              stroke="#ff488b"
              strokeWidth="2"
              strokeDasharray={CIRC}
              strokeDashoffset={CIRC}
              strokeLinecap="round"
            />
            <circle cx="10" cy="75" r="2.5" fill="#fff" />
            <circle cx="140" cy="75" r="2.5" fill="#fff" />
          </svg>
          <p className="text-label mt-2 text-center text-white">{holding ? 'Keep holding' : 'Click and hold'}</p>
        </div>
      )}

      {/* Touch: tap-to-toggle trigger */}
      {!fine && (
        <button
          onClick={() => setHolding((h) => !h)}
          className="absolute right-[var(--grid-margin)] top-[22vh] grid h-24 w-24 place-items-center rounded-full border border-white/35 text-white"
          aria-label="Tap to surge the scene"
        >
          <span className="text-label-sm">{holding ? 'Tap to stop' : 'Tap & hold'}</span>
        </button>
      )}
    </section>
  );
}
