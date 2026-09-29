import Lenis from 'lenis';

let lenis: Lenis | null = null;

/** Inertial page scrolling, matching the reference's weighted feel. */
export function startSmoothScroll() {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  let raf = 0;
  const loop = (time: number) => {
    lenis?.raf(time);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);
  return () => {
    cancelAnimationFrame(raf);
    lenis?.destroy();
    lenis = null;
  };
}

/** Lock/unlock page scroll while a modal is open. */
export function lockScroll(locked: boolean) {
  if (locked) lenis?.stop();
  else lenis?.start();
  document.documentElement.style.overflow = locked ? 'hidden' : '';
}

export function scrollToHash(hash: string) {
  const el = document.querySelector(hash) as HTMLElement | null;
  if (!el) return false;
  if (lenis) lenis.scrollTo(el, { offset: -8 });
  else el.scrollIntoView({ behavior: 'smooth' });
  return true;
}

export function scrollToTop(immediate = false) {
  if (lenis) lenis.scrollTo(0, { immediate });
  else window.scrollTo(0, 0);
}
