import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Bot, PhoneCall, Database, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const titles = [
    'Software Engineer',
    'AI Agents Architect',
    'Full-Stack Developer',
    'Automation Specialist'
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypSpeed] = useState(120);
  const [quickInput, setQuickInput] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // Typewriter effect matching GenZ demo
  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          // Pause at end
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 60 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickInput.trim()) return;
    setSubmittedMessage(true);
    setTimeout(() => {
      const whatsappUrl = `https://wa.me/923438992587?text=${encodeURIComponent(
        `Hi Arif, I'm reaching out from your portfolio: "${quickInput}"`
      )}`;
      window.open(whatsappUrl, '_blank');
      setSubmittedMessage(false);
      setQuickInput('');
    }, 800);
  };

  // Bubbles seated on the portrait ring, one per core domain.
  const skillOrbit = [
    { Icon: Bot, label: 'AI Agents', pos: 'top-[12%] -left-[3%] sm:top-[13%] sm:-left-[2%]' },
    { Icon: Globe, label: 'Web & App Development', pos: 'top-[12%] -right-[3%] sm:top-[13%] sm:-right-[2%]' },
    { Icon: PhoneCall, label: 'AI Calling Agents', pos: 'bottom-[18%] -left-[6%] sm:bottom-[19%] sm:-left-[5%]' },
    { Icon: Zap, label: 'Workflow Automation', pos: 'bottom-[18%] -right-[6%] sm:bottom-[19%] sm:-right-[5%]' }
  ];

  const domainCategories = [
    {
      title: 'Autonomous AI Agents',
      count: 'Case studies',
      icon: Bot,
      color: 'from-cyan-500 to-blue-500',
      tag: 'LangGraph & CrewAI'
    },
    {
      title: 'Full-Stack Web Apps',
      count: 'Web & mobile',
      icon: Globe,
      color: 'from-blue-500 to-indigo-500',
      tag: 'Next.js & React 19'
    },
    {
      title: 'Workflow Automation',
      count: 'Pipelines',
      icon: Zap,
      color: 'from-teal-400 to-cyan-500',
      tag: 'n8n, Make & Webhooks'
    },
    {
      title: 'AI Calling & Voice Bots',
      count: 'Voice AI',
      icon: PhoneCall,
      color: 'from-sky-400 to-blue-600',
      tag: 'Twilio & Retell AI'
    },
    {
      title: 'API & Microservices',
      count: 'Backend',
      icon: Database,
      color: 'from-emerald-400 to-teal-500',
      tag: 'FastAPI & Postgres'
    }
  ];

  return (
    <section id="home" className="relative pt-32 pb-16 overflow-hidden">
      {/* GenZ Ambient glow backgrounds */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#0ea5ea]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#0bd1d1]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131c31] border border-[#222f43] text-xs font-semibold tracking-wider text-[#94a9c9] uppercase">
              <span className="pulse-dot" />
              <span>Available for Hire & Consulting</span>
            </div>

            <div>
              <span className="block text-sm sm:text-base font-bold text-[#7f92b0] tracking-wider uppercase mb-2">
                Hello Everyone!
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#f0f5fd] tracking-tight leading-tight">
                I’m <span className="color-linear">{displayText}</span>
                <span className="inline-block w-1 h-8 sm:h-12 bg-[#0bd1d1] ml-1.5 animate-pulse align-middle" />
              </h1>
            </div>

            <p className="text-[#94a9c9] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              I design and engineer production web applications, autonomous multi-agent AI systems, and enterprise workflow automations that turn manual bottlenecks into continuous, revenue-generating engines.
            </p>

            {/* GenZ Subscriber / Fast Project Inquiry Box */}
            <div className="pt-2">
              <form onSubmit={handleQuickSubmit} className="inner-subscriber max-w-xl">
                <input
                  type="text"
                  value={quickInput}
                  onChange={(e) => setQuickInput(e.target.value)}
                  placeholder="Drop your project idea or email..."
                  className="w-full bg-transparent text-sm text-white placeholder-[#7f92b0] px-3 focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="btn-linear shrink-0"
                >
                  {submittedMessage ? (
                    <span>Opening WhatsApp...</span>
                  ) : (
                    <>
                      <span>Get in Touch</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
              <div className="flex items-center gap-4 mt-3 text-xs text-[#66768f]">
                <span>⚡ Straight to WhatsApp</span>
                <span>•</span>
                <span>Zero-obligation consultation</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a href="#works" className="btn-linear">
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#services" className="btn-border-linear">
                <span>What I Do</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: portrait ringed by the domains he works in */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px]">
              {/* Ambient glow */}
              <div className="absolute inset-6 -z-10 rounded-full bg-gradient-to-tr from-[#0ea5ea]/30 to-[#0bd1d1]/15 blur-[70px]" />

              {/* Gradient ring: outer gradient disc with the page colour punched out */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#0bd1d1] via-[#0ea5ea] to-[#0ea5ea]/30 p-[14px] sm:p-[18px]">
                <div className="h-full w-full rounded-full" style={{ backgroundColor: "var(--theme-bg)" }} />
              </div>

              {/* Portrait sits inside the ring */}
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="absolute inset-[26px] sm:inset-[34px] h-[calc(100%-52px)] w-[calc(100%-52px)] sm:h-[calc(100%-68px)] sm:w-[calc(100%-68px)] rounded-full object-cover object-top select-none"
              />

              {/* Skill bubbles seated on the ring */}
              {skillOrbit.map(({ Icon, label, pos }) => (
                <div
                  key={label}
                  title={label}
                  className={`absolute z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-[#222f43] bg-[#131c31] text-[#0bd1d1] shadow-xl hover-up ${pos}`}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GenZ Hot Domains / Topics Bar */}
        <div id="topics" className="mt-16 card-hover-border bg-[#131c31] border-[#222f43] p-6 sm:p-8 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Header */}
            <div className="lg:col-span-3 space-y-2">
              <h3 className="text-xl font-bold text-white">Core Domains</h3>
              <p className="text-xs sm:text-sm text-[#94a9c9] leading-relaxed">
                Specialized engineering capabilities tailored for high-scale businesses.
              </p>
              <div className="pt-2">
                <a href="#services" className="text-xs font-bold color-linear inline-flex items-center gap-1 hover:underline">
                  <span>Explore all services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Topics Grid */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {domainCategories.map((cat, idx) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={idx}
                    className="group p-4 rounded-2xl bg-[#0b1220]/70 border border-[#222f43] hover:border-[#0ea5ea] transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#131c31] border border-[#222f43] flex items-center justify-center text-[#0bd1d1] group-hover:bg-gradient-to-tr group-hover:from-[#0ea5ea] group-hover:to-[#0bd1d1] group-hover:text-white transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] text-[#7f92b0] font-medium bg-[#131c31] px-2.5 py-1 rounded-full border border-[#222f43]">
                        {cat.count}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#0bd1d1] transition-colors mt-3">
                      {cat.title}
                    </h4>
                    <p className="text-xs text-[#94a9c9] mt-1">
                      {cat.tag}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
