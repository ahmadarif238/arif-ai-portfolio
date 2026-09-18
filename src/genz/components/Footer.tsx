import React, { useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import WhatsAppIcon from '../../components/ui/WhatsAppIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  // Section anchors only exist on the home route.
  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const [newsletterName, setNewsletterName] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setStatus('sending');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: newsletterName || 'Website visitor',
          email: newsletterEmail,
          title: 'Keep me posted',
          message: `${newsletterName || 'A visitor'} asked to be kept up to date with your work.`
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('done');
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
    }
  };

  return (
    <footer className="relative bg-[#0b1220] border-t border-[#222f43] pt-16 pb-12 text-[#94a9c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GenZ Main Footer Box */}
        <div className="card-hover-border bg-[#131c31] border-[#222f43] p-8 sm:p-12 rounded-3xl mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Col 1: Brand & Address */}
            <div className="lg:col-span-4 space-y-4">
              <a href={sectionHref("#home")} className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#0ea5ea] to-[#0bd1d1] flex items-center justify-center shadow-[0_0_15px_rgba(11,209,209,0.35)]">
                  <span className="text-white font-extrabold text-lg">AK</span>
                </div>
                <span className="text-xl font-extrabold text-white whitespace-nowrap">
                  Arif <span className="color-linear">Ahmad Khan</span>
                </span>
              </a>

              <p className="text-xs sm:text-sm text-[#94a9c9] leading-relaxed">
                Software Engineer specializing in autonomous multi-agent AI systems, high-speed Next.js/React applications, and end-to-end enterprise workflow automation.
              </p>

              <div className="pt-2">
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                  Location & Availability
                </h5>
                <p className="text-xs text-[#7f92b0]">
                  {PERSONAL_INFO.location} • Global Remote & Contract
                </p>
              </div>

              <div className="pt-1 text-xs text-[#0bd1d1] font-mono">
                {PERSONAL_INFO.email}
              </div>
            </div>

            {/* Col 2: Navigation Menus */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-bold text-white mb-4">Explore</h5>
                <ul className="space-y-2.5 text-xs">
                  <li>
                    <a href={sectionHref("#home")} className="hover:text-[#0bd1d1] transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href={sectionHref("#topics")} className="hover:text-[#0bd1d1] transition-colors">
                      Core Domains
                    </a>
                  </li>
                  <li>
                    <a href={sectionHref("#works")} className="hover:text-[#0bd1d1] transition-colors">
                      My Projects
                    </a>
                  </li>
                  <li>
                    <a href={sectionHref("#services")} className="hover:text-[#0bd1d1] transition-colors">
                      Services
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-bold text-white mb-4">Credentials</h5>
                <ul className="space-y-2.5 text-xs">
                  <li>
                    <a href={sectionHref("#about")} className="hover:text-[#0bd1d1] transition-colors">
                      About Me
                    </a>
                  </li>
                  <li>
                    <a href={sectionHref("#tech")} className="hover:text-[#0bd1d1] transition-colors">
                      Tech Stack
                    </a>
                  </li>
                  <li>
                    <Link to="/blog" className="hover:text-[#0bd1d1] transition-colors">
                      Journal
                    </Link>
                  </li>
                  <li>
                    <a href={sectionHref("#contact")} className="hover:text-[#0bd1d1] transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Col 3: GenZ Newsletter Signup */}
            <div className="lg:col-span-4 space-y-4">
              <h5 className="text-sm font-bold text-white">Keep In Touch</h5>
              <p className="text-xs text-[#94a9c9] leading-relaxed">
                Leave your details and I will get back to you about new AI agent builds, automation workflows, and availability.
              </p>

              {status === 'done' ? (
                <div className="p-4 rounded-xl bg-[#0b1220] border border-[#0bd1d1]/40 flex items-center gap-2 text-xs text-[#0bd1d1]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Got it. Thanks for reaching out, I will be in touch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="text"
                    value={newsletterName}
                    onChange={(e) => setNewsletterName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-[#0b1220] border border-[#222f43] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#66768f] focus:outline-hidden focus:border-[#0ea5ea]"
                  />
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full bg-[#0b1220] border border-[#222f43] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#66768f] focus:outline-hidden focus:border-[#0ea5ea]"
                  />
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-linear w-full justify-center text-xs py-2.5"
                  >
                    <span>{status === 'sending' ? 'Sending...' : 'Send'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  {status === 'error' && (
                    <p className="flex items-center gap-1.5 text-[11px] text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Could not send. Please email me directly.</span>
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-[#222f43] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#7f92b0] text-center sm:text-left">
              © {new Date().getFullYear()} <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. All rights reserved.
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0b1220] border border-[#222f43] flex items-center justify-center text-[#94a9c9] hover:text-[#0bd1d1] hover:border-[#0ea5ea] transition-all"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0b1220] border border-[#222f43] flex items-center justify-center text-[#94a9c9] hover:text-[#0bd1d1] hover:border-[#0ea5ea] transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0b1220] border border-[#222f43] flex items-center justify-center text-[#94a9c9] hover:text-[#0bd1d1] hover:border-[#0ea5ea] transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-8 h-8 rounded-full bg-[#0b1220] border border-[#222f43] flex items-center justify-center text-[#94a9c9] hover:text-[#0bd1d1] hover:border-[#0ea5ea] transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0ea5ea] to-[#0bd1d1] flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform ml-2"
                title="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
