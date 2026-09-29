/**
 * Brand mark: a hub wired to three satellite nodes, i.e. an agent network,
 * which is what Arif builds. Drawn in the pink-to-magenta accent so it reads on
 * both the dark stage and the light sheets.
 */
export function Logo({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arif Ahmad Khan">
      <defs>
        <linearGradient id="akMark" x1="4" y1="2" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff488b" />
          <stop offset="1" stopColor="#e33adb" />
        </linearGradient>
      </defs>
      <path d="M20 20V8.5M20 20l10 5.8M20 20l-10 5.8" stroke="url(#akMark)" strokeWidth="2.4" strokeLinecap="round" opacity="0.7" />
      <circle cx="20" cy="7.4" r="4.6" fill="url(#akMark)" />
      <circle cx="31.2" cy="26.3" r="4.6" fill="url(#akMark)" />
      <circle cx="8.8" cy="26.3" r="4.6" fill="url(#akMark)" />
      <circle cx="20" cy="20" r="4.4" stroke="url(#akMark)" strokeWidth="2.6" />
    </svg>
  );
}
