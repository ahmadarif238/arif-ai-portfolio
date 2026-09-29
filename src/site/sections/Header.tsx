import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/primitives';
import { NAV_LINKS } from '../data/siteContent';
import { PERSONAL_INFO } from '../../genz/data/portfolioData';
import WhatsAppIcon from '../../components/ui/WhatsAppIcon';
import { scrollToHash } from '../lib/scroll';

/**
 * Fixed header: wordmark left, a blurred pill of mono links, and the two
 * actions. It tucks away while scrolling down, returns on the way up, and
 * switches the pill to its light-surface tone whenever a sheet is under it.
 */
export function Header() {
  const [hidden, setHidden] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 240 && y > lastY.current + 2 && !menuOpen);
      if (y < lastY.current - 2 || y < 240) setHidden(false);
      lastY.current = y;
      setScrolled(y > 40);
      const probe = document.elementFromPoint(window.innerWidth / 2, 44);
      setOnLight(!!probe?.closest('.sheet'));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen, location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  const go = (href?: string, to?: string) => (e: React.MouseEvent) => {
    setMenuOpen(false);
    setMoreOpen(false);
    if (to) return;
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => scrollToHash(href!), 450);
    } else scrollToHash(href!);
  };

  const pillText = 'text-white';

  return (
    <>
      <header className={`site-header ${hidden ? 'is-hidden' : ''} ${onLight ? 'on-light' : ''}`}>
        <div className="container-grid flex items-center justify-between gap-4">
          <Link
            to="/"
            onClick={() => window.scrollY > 0 && location.pathname === '/' && scrollToHash('#top')}
            className={`flex items-center gap-3 transition-colors duration-300 ${onLight ? 'text-navy-900' : 'text-white'}`}
            aria-label={`${PERSONAL_INFO.name}, home`}
          >
            <Logo className="h-9 w-9 shrink-0" />
            <span
              className={`text-[26px] leading-none tracking-[-0.03em] transition-[opacity,transform] duration-300 ${
                scrolled ? 'pointer-events-none -translate-x-2 opacity-0' : 'opacity-100'
              }`}
            >
              {PERSONAL_INFO.shortName}
            </span>
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            <nav className={`nav-pill relative hidden items-center px-2 py-1.5 md:flex ${pillText}`} aria-label="Primary">
              {NAV_LINKS.map((l) =>
                l.to ? (
                  <Link key={l.label} to={l.to} className="nav-link text-label">
                    {l.label}
                  </Link>
                ) : (
                  <a key={l.label} href={l.href} onClick={go(l.href)} className="nav-link text-label">
                    {l.label}
                  </a>
                )
              )}
              <button
                className="nav-link grid h-[42px] w-[42px] place-items-center p-0"
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                aria-label="More links"
              >
                <span className="grid grid-cols-2 gap-[3px]">
                  {[0, 1, 2, 3].map((i) => (
                    <span key={i} className={`h-[4px] w-[4px] rounded-full bg-current transition-transform duration-300 ${moreOpen ? 'scale-150' : ''}`} />
                  ))}
                </span>
              </button>

              {/* "More" dropdown */}
              <div
                className={`absolute right-0 top-[calc(100%+8px)] w-[300px] origin-top-right rounded-[var(--radius-md)] bg-charcoal/95 p-2 backdrop-blur-xl transition-[opacity,transform] duration-300 ${
                  moreOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
                }`}
              >
                {[
                  { label: 'Email', sub: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}`, Icon: Mail },
                  { label: 'WhatsApp', sub: PERSONAL_INFO.phone, href: PERSONAL_INFO.whatsappUrl, Icon: WhatsAppIcon },
                  { label: 'GitHub', sub: '@ahmadarif238', href: PERSONAL_INFO.githubUrl, Icon: Github },
                  { label: 'LinkedIn', sub: 'Arif Ahmad Khan', href: PERSONAL_INFO.linkedinUrl, Icon: Linkedin }
                ].map(({ label, sub, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-[var(--radius-sm)] p-3 transition-colors hover:bg-white/8"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-[var(--radius-sm)] bg-white/8">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="text-label block">{label}</span>
                      <span className="mt-1 block text-[13px] text-white/60">{sub}</span>
                    </span>
                  </a>
                ))}
              </div>
            </nav>

            <Button variant="slate" href="#contact" onClick={go('#contact')} className="hidden sm:inline-flex">
              Contact
            </Button>
            <Button variant="pink" href="#contact" onClick={go('#contact')}>
              Hire me
            </Button>
            <button
              className={`btn text-label md:hidden ${onLight ? 'bg-navy-500/60 text-white' : 'bg-charcoal/90 text-white'}`}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[160] flex flex-col bg-charcoal transition-[opacity,visibility] duration-300 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="container-grid flex items-center justify-between py-[14px]">
          <span className="flex items-center gap-3 text-white">
            <Logo className="h-9 w-9" />
            <span className="text-[24px] tracking-[-0.03em]">{PERSONAL_INFO.shortName}</span>
          </span>
          <button className="btn bg-white/10 text-white" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="container-grid mt-6 flex flex-col">
          {NAV_LINKS.map((l, i) =>
            l.to ? (
              <Link
                key={l.label}
                to={l.to}
                className="border-b border-white/10 py-4 text-[34px] tracking-[-0.03em] text-white"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} onClick={go(l.href)} className="border-b border-white/10 py-4 text-[34px] tracking-[-0.03em] text-white">
                {l.label}
              </a>
            )
          )}
        </nav>
        <div className="container-grid mt-auto grid grid-cols-2 gap-2 pb-8">
          <Button variant="slate" href="#contact" onClick={go('#contact')}>
            Contact
          </Button>
          <Button variant="pink" href={PERSONAL_INFO.whatsappUrl} external>
            WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
}
