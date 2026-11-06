import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * Brand mark: a central core wired to three satellite nodes.
 *
 * Reads as an agent network, which is what Arif actually builds (multi-agent
 * systems, orchestration, integrations), and stays legible down to 24px where
 * a detailed illustration would turn to mud. The core is filled with the theme
 * background variable so it stays a clean cut-out in both night and day mode.
 */
export const Logo: React.FC<LogoProps> = ({ className = 'h-9 w-9' }) => (
  <svg
    viewBox="0 0 40 40"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Arif Ahmad Khan"
  >
    <defs>
      <linearGradient id="akMarkGradient" x1="4" y1="2" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0ea5ea" />
        <stop offset="1" stopColor="#0bd1d1" />
      </linearGradient>
    </defs>

    {/* Links from the core out to each satellite */}
    <path
      d="M20 20V8.5M20 20l10 5.8M20 20l-10 5.8"
      stroke="url(#akMarkGradient)"
      strokeWidth="2.4"
      strokeLinecap="round"
      opacity="0.6"
    />

    {/* Satellite agents */}
    <circle cx="20" cy="7.4" r="4.6" fill="url(#akMarkGradient)" />
    <circle cx="31.2" cy="26.3" r="4.6" fill="url(#akMarkGradient)" />
    <circle cx="8.8" cy="26.3" r="4.6" fill="url(#akMarkGradient)" />

    {/* Core */}
    <circle
      cx="20"
      cy="20"
      r="5.2"
      fill="var(--theme-bg, #0b1220)"
      stroke="url(#akMarkGradient)"
      strokeWidth="2.6"
    />
  </svg>
);

export default Logo;
