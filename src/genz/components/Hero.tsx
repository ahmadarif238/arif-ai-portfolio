import React from 'react';
import { ArrowRight, Bot, Database, Globe, Zap, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import WhatsAppIcon from '../../components/ui/WhatsAppIcon';

export const Hero: React.FC = () => {
  // Bubbles seated on the portrait ring, one per core engineering domain
  const skillOrbit = [
    { Icon: Bot, label: 'LangGraph and Multi-Agent Systems', pos: 'top-[8%] -left-[4%] sm:top-[10%] sm:-left-[3%]' },
    { Icon: Database, label: 'RAG and Vector Retrieval', pos: 'top-[8%] -right-[4%] sm:top-[10%] sm:-right-[3%]' },
    { Icon: Globe, label: 'Computer Vision at 92 FPS', pos: 'bottom-[14%] -left-[6%] sm:bottom-[16%] sm:-left-[5%]' },
    { Icon: Zap, label: 'Enterprise Cloud Automation', pos: 'bottom-[14%] -right-[6%] sm:bottom-[16%] sm:-right-[5%]' }
  ];

  const domainCategories = [
    {
      title: 'Autonomous AI Agents',
      count: 'Production',
      icon: Bot,
      tag: 'LangGraph, LangChain and Multi-Agent Orchestration'
    },
    {
      title: 'Enterprise RAG Systems',
      count: 'Grounded',
      icon: Database,
      tag: 'Pinecone, FAISS and Verifiable Factual Retrieval'
    },
    {
      title: 'Computer Vision & Edge AI',
      count: '92 FPS',
      icon: Globe,
      tag: 'Quantized YOLO, Depth Anything V2 and OpenVINO'
    },
    {
      title: 'Enterprise Process Automation',
      count: 'Azure',
      icon: Zap,
      tag: 'Microsoft Power Platform, Azure and n8n Pipelines'
    },
    {
      title: 'Scalable Backends & APIs',
      count: 'High Throughput',
      icon: Database,
      tag: 'FastAPI, React 19, TypeScript and PostgreSQL'
    }
  ];

  return (
    <section id="home" className="relative pt-32 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#0ea5ea]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#0bd1d1]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131c31] border border-[#222f43] text-xs font-semibold tracking-wider text-[#0bd1d1] uppercase">
              <span className="pulse-dot" />
              <span>AI Engineer &middot; Agentic AI and RAG Systems</span>
            </div>

            <div>
              <span className="block text-xs sm:text-sm font-semibold text-[#7f92b0] tracking-wider uppercase mb-2">
                Portfolio and Technical Case Studies
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#f0f5fd] tracking-tight leading-tight">
                Arif Ahmad Khan
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#0bd1d1] mt-2 tracking-tight">
                Designing and Deploying Autonomous AI Architectures
              </p>
            </div>

            <p className="text-[#94a9c9] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              AI Engineer specializing in agentic systems, Retrieval-Augmented Generation, and production LLM application backends. Experienced in deploying autonomous multi-agent workflows with LangGraph, scalable FastAPI microservices, and enterprise automation on Microsoft Azure and Power Platform.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a href="#works" className="btn-linear">
                <span>View Engineering Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#contact" className="btn-border-linear">
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#222f43] bg-[#131c31] text-xs font-semibold text-[#94a9c9] hover:text-white hover:border-[#0ea5ea] transition-all"
                title="Download Curriculum Vitae"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-md hover:scale-105"
                title="Direct WhatsApp Communication"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Portrait Ringed with Orbit Badges */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[320px] sm:w-[390px] sm:h-[390px] lg:w-[440px] lg:h-[440px]">
              {/* Ambient halo glow */}
              <div className="absolute inset-4 -z-10 rounded-full bg-gradient-to-tr from-[#10b981]/30 via-[#0ea5ea]/25 to-[#0bd1d1]/20 blur-[75px]" />

              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#10b981] via-[#0ea5ea] to-[#0bd1d1]/40 p-[12px] sm:p-[16px] shadow-2xl shadow-emerald-950/40">
                <div className="h-full w-full rounded-full" style={{ backgroundColor: "var(--theme-bg)" }} />
              </div>

              {/* Centered Portrait */}
              <picture className="absolute inset-[22px] sm:inset-[28px] h-[calc(100%-44px)] w-[calc(100%-44px)] sm:h-[calc(100%-56px)] sm:w-[calc(100%-56px)]">
                <source type="image/webp" srcSet={`${PERSONAL_INFO.avatarSmallUrl} 560w, ${PERSONAL_INFO.avatarUrl} 960w`} />
                <img
                  src={PERSONAL_INFO.avatarFallbackUrl}
                  alt={PERSONAL_INFO.name}
                  className="h-full w-full rounded-full object-cover object-top select-none shadow-inner"
                />
              </picture>

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

        {/* Core Domains & Capabilities Bar */}
        <div id="topics" className="mt-16 card-hover-border bg-[#131c31] border-[#222f43] p-6 sm:p-8 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Header */}
            <div className="lg:col-span-3 space-y-2">
              <h3 className="text-xl font-bold text-white">Core Capabilities</h3>
              <p className="text-xs sm:text-sm text-[#94a9c9] leading-relaxed">
                Specialized engineering capabilities across multi-agent AI, edge computer vision, and enterprise automation.
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
