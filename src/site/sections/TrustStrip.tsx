import { useEffect, useRef } from 'react';
import { TECH_MARQUEE } from '../data/siteContent';

/**
 * The band between the hero and the first sheet: a marquee of the stack I ship
 * with, over a field of dots that light up pink behind the pointer and twinkle
 * at random when left alone.
 */
export function TrustStrip() {
  return (
    <section data-stage="ribbons" className="relative pb-[calc(var(--radius-xl)+2rem)] pt-10" aria-label="Technologies">
      <div className="relative overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee">
          {[...TECH_MARQUEE, ...TECH_MARQUEE].map((t, i) => (
            <span key={i} className="mx-10 whitespace-nowrap text-[clamp(1.75rem,1.2rem+1.6vw,2.9rem)] font-semibold tracking-[-0.04em] text-white md:mx-14">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="container-grid mt-10">
        <InteractiveDots />
      </div>
    </section>
  );
}

function InteractiveDots() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const build = () => {
      const small = el.clientWidth < 700;
      const cols = small ? 6 : 20;
      const count = small ? 24 : 100;
      el.style.setProperty('--cols', String(cols));
      el.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const d = document.createElement('div');
        d.className = 'dot-cell';
        el.appendChild(d);
      }
    };
    build();
    const ro = new ResizeObserver(() => {
      const want = el.clientWidth < 700 ? 24 : 100;
      if (el.children.length !== want) build();
    });
    ro.observe(el);

    // Trail under the pointer.
    const trail: Element[] = [];
    let idleTimer = 0;
    let idleTick = 0;
    let idle = true;
    const clearIdle = () => {
      Array.from(el.children).forEach((c) => !c.classList.contains('is-trail') && c.classList.remove('is-active'));
    };
    const scheduleIdle = () => {
      idleTick = window.setTimeout(() => {
        if (!idle) return;
        clearIdle();
        const kids = Array.from(el.children);
        const n = 1 + Math.floor(Math.random() * 5);
        for (let i = 0; i < n; i++) kids[Math.floor(Math.random() * kids.length)]?.classList.add('is-active');
        scheduleIdle();
      }, 800 + Math.random() * 700);
    };
    const goIdleLater = () => {
      clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        idle = true;
        scheduleIdle();
      }, 1800);
    };
    const move = (e: PointerEvent) => {
      idle = false;
      clearTimeout(idleTick);
      clearIdle();
      goIdleLater();
      const hit = document.elementFromPoint(e.clientX, e.clientY);
      if (!hit || !hit.classList.contains('dot-cell') || trail[trail.length - 1] === hit) return;
      while (trail.length >= 45) trail.shift()?.classList.remove('is-active', 'is-trail');
      trail.push(hit);
      hit.classList.add('is-active', 'is-trail');
      setTimeout(() => {
        const i = trail.indexOf(hit);
        if (i !== -1) trail.splice(i, 1);
        hit.classList.remove('is-active', 'is-trail');
      }, 2400);
    };
    el.addEventListener('pointermove', move);
    scheduleIdle();
    return () => {
      ro.disconnect();
      el.removeEventListener('pointermove', move);
      clearTimeout(idleTimer);
      clearTimeout(idleTick);
    };
  }, []);

  return <div ref={ref} className="dots-grid -mx-5 md:-mx-10" aria-hidden="true" />;
}
