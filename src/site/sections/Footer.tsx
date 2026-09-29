import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import WhatsAppIcon from '../../components/ui/WhatsAppIcon';
import { Button } from '../ui/primitives';
import { PERSONAL_INFO, SERVICES } from '../../genz/data/portfolioData';
import { NAV_LINKS } from '../data/siteContent';
import { scrollToHash } from '../lib/scroll';

/** Dark footer back over the ribbons: socials, link columns, closing CTA. */
export function Footer({ onOpenResume }: { onOpenResume: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();
  const go = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToHash(hash), 450);
    } else scrollToHash(hash);
  };

  return (
    <footer data-stage="ribbons" className="relative z-[1] -mt-[var(--radius-xl)] pt-[var(--radius-xl)] text-white">
      <div className="container-grid pt-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="flex gap-2 md:col-span-6">
            {[
              { Icon: Github, href: PERSONAL_INFO.githubUrl, label: 'GitHub' },
              { Icon: Linkedin, href: PERSONAL_INFO.linkedinUrl, label: 'LinkedIn' },
              { Icon: WhatsAppIcon, href: PERSONAL_INFO.whatsappUrl, label: 'WhatsApp' },
              { Icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' }
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-[var(--radius-sm)] transition-colors hover:bg-white/10"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-6">
            <div>
              <p className="text-[14px] text-white/55">Services</p>
              <ul className="mt-4 space-y-2.5">
                {SERVICES.slice(0, 5).map((s) => (
                  <li key={s.number}>
                    <a href="#services" onClick={go('#services')} className="text-[14px] hover:text-pink-300">
                      {s.title.replace('Development', '').replace('& Enterprise ', '').trim()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[14px] text-white/55">{PERSONAL_INFO.shortName}</p>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link to={l.to} className="text-[14px] hover:text-pink-300">
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} onClick={go(l.href!)} className="text-[14px] hover:text-pink-300">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
                <li>
                  <button onClick={onOpenResume} className="text-[14px] hover:text-pink-300">
                    Resume / CV
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-8 py-[clamp(5rem,4rem+6vw,12rem)] md:grid-cols-12">
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-[length:var(--text-fluid-xs)] leading-[1.15] tracking-[-0.03em]">
              Start automating your business today
              <br className="hidden sm:block" /> or talk to me about your project.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="pink" href="#contact" onClick={go('#contact')}>
                Get started
              </Button>
              <Button variant="ghost" href={PERSONAL_INFO.whatsappUrl} external>
                Book a call
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/12 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px]">
            {PERSONAL_INFO.year} © {PERSONAL_INFO.name}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <button onClick={onOpenResume} className="text-label-sm hover:text-pink-300">
              Resume
            </button>
            <a href="/resume.pdf" download className="text-label-sm hover:text-pink-300">
              Download CV
            </a>
            <Link to="/blog" className="text-label-sm hover:text-pink-300">
              Blog
            </Link>
            <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="text-label-sm hover:text-pink-300">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
