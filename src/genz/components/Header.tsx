import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenResumeModal: () => void;
  isDayMode: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenResumeModal,
  isDayMode,
  onToggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  // Section anchors only exist on the home route, so prefix them elsewhere.
  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['home', 'topics', 'works', 'services', 'about', 'tech', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; href: string; id: string; route: boolean }[] = [
    { label: 'Home', href: '#home', id: 'home', route: false },
    { label: 'Domains', href: '#topics', id: 'topics', route: false },
    { label: 'Portfolio', href: '#works', id: 'works', route: false },
    { label: 'Services', href: '#services', id: 'services', route: false },
    { label: 'About Me', href: '#about', id: 'about', route: false },
    { label: 'Tech Stack', href: '#tech', id: 'tech', route: false },
    { label: 'Journal', href: '/blog', id: 'journal', route: true },
    { label: 'Contact', href: '#contact', id: 'contact', route: false }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b1220]/95 border-b border-[#222f43] backdrop-blur-md py-3.5 shadow-xl'
          : 'bg-[#0b1220]/80 backdrop-blur-sm border-b border-[#222f43]/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* GenZ Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-left focus:outline-hidden group"
          >
            <Logo className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 transition-transform group-hover:scale-105 drop-shadow-[0_0_10px_rgba(11,209,209,0.35)]" />
            <div className="flex flex-col min-w-0">
              <span className="text-[15px] sm:text-lg md:text-xl font-extrabold tracking-tight text-white whitespace-nowrap">
                Arif <span className="color-linear">Ahmad Khan</span>
              </span>
              <span className="hidden sm:block text-[10px] text-[#94a9c9] tracking-wider uppercase font-medium -mt-1">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = item.route
                ? pathname.startsWith('/blog')
                : isHome && activeSection === item.id;
              const cls = `px-3 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-all ${
                isActive
                  ? 'color-linear bg-[#131c31] border border-[#0ea5ea]/40'
                  : 'text-[#94a9c9] hover:text-white hover:bg-[#131c31]/60'
              }`;
              return item.route ? (
                <Link key={item.label} to={item.href} className={cls}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={sectionHref(item.href)} className={cls}>
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Header Right Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            {/* GenZ Night / Day Switch */}
            <button
              onClick={onToggleTheme}
              type="button"
              className="relative flex items-center justify-between w-14 h-7 rounded-full bg-[#131c31] border border-[#222f43] p-1 cursor-pointer transition-colors hover:border-[#0bd1d1]"
              title={isDayMode ? 'Switch to Night Mode' : 'Switch to Day Mode'}
              aria-label="Toggle Theme"
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  isDayMode
                    ? 'translate-x-7 bg-amber-400 text-slate-900 shadow-md'
                    : 'translate-x-0 bg-gradient-to-r from-[#0ea5ea] to-[#0bd1d1] text-white shadow-[0_0_10px_rgba(11,209,209,0.5)]'
                }`}
              >
                {isDayMode ? (
                  <Sun className="w-3 h-3" />
                ) : (
                  <Moon className="w-3 h-3" />
                )}
              </div>
              <span className="sr-only">Toggle theme</span>
            </button>

            {/* Resume CV Button */}
            <button
              onClick={onOpenResumeModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#222f43] bg-[#131c31] text-xs font-bold text-[#94a9c9] hover:text-white hover:border-[#0ea5ea] transition-all"
              title="View CV & Certifications"
            >
              <FileText className="w-3.5 h-3.5 text-[#0bd1d1]" />
              <span>Resume</span>
            </button>

            {/* GenZ Signature Linear CTA Button */}
            {/* Wrapped, because .btn-linear-small sets display:inline-flex in
                plain CSS and would win over the `hidden` utility. */}
            <span className="hidden sm:block">
              <a href={sectionHref('#contact')} className="btn-linear-small">
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </span>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-[#131c31] border border-[#222f43] text-white hover:text-[#0bd1d1] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Offcanvas Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0b1220] border-b border-[#222f43] px-6 py-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = item.route
                ? pathname.startsWith('/blog')
                : isHome && activeSection === item.id;
              const cls = `flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'color-linear bg-[#131c31] font-bold'
                  : 'text-[#94a9c9] hover:text-white hover:bg-[#131c31]/50'
              }`;
              const inner = (
                <>
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                </>
              );
              return item.route ? (
                <Link key={item.label} to={item.href} onClick={() => setMobileMenuOpen(false)} className={cls}>
                  {inner}
                </Link>
              ) : (
                <a key={item.label} href={sectionHref(item.href)} onClick={() => setMobileMenuOpen(false)} className={cls}>
                  {inner}
                </a>
              );
            })}

            <div className="mt-4 pt-4 border-t border-[#222f43] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#222f43] bg-[#131c31] text-sm font-medium text-white hover:border-[#0bd1d1]"
              >
                <FileText className="w-4 h-4 text-[#0bd1d1]" />
                <span>View Full Resume</span>
              </button>

              <a
                href={sectionHref('#contact')}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-linear w-full justify-center"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-4 text-xs text-[#66768f] text-center">
              <span>{PERSONAL_INFO.email}</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
