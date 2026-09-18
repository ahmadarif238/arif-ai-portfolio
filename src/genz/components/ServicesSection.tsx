import React from 'react';
import { ArrowRight, CheckCircle2, Cpu, Bot, Database, PhoneCall, Code2, Layers, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectServiceForContact?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForContact }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#0bd1d1]" />;
      case 'Bot': return <Bot className="w-6 h-6 text-[#0bd1d1]" />;
      case 'Database': return <Database className="w-6 h-6 text-[#0bd1d1]" />;
      case 'PhoneCall': return <PhoneCall className="w-6 h-6 text-[#0bd1d1]" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-[#0bd1d1]" />;
      default: return <Layers className="w-6 h-6 text-[#0bd1d1]" />;
    }
  };

  return (
    <section id="services" className="relative py-24 border-t border-[#222f43]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GenZ Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131c31] border border-[#222f43] text-xs font-semibold text-[#0bd1d1] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0ea5ea]" />
              <span>Full-Stack & Autonomous AI Deliverables</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              My <span className="color-linear">Services</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#94a9c9] leading-relaxed">
            From architecture discovery to multi-agent production deployment, delivered with single-engineer accountability and zero overhead.
          </p>
        </div>

        {/* GenZ Grid of Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="card-hover-border bg-[#131c31] border-[#222f43] p-7 rounded-2xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#222f43]/80 border border-[#334155] flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-[#0ea5ea] group-hover:to-[#0bd1d1] group-hover:text-white transition-all">
                    {getIcon(service.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#7f92b0] bg-[#0b1220] px-2.5 py-1 rounded-full border border-[#222f43]">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#0bd1d1] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-medium color-linear">
                  {service.tagline}
                </p>

                <p className="text-xs text-[#94a9c9] leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-2 border-t border-[#222f43]/70 space-y-2">
                  <div className="text-[11px] font-bold text-[#7f92b0] uppercase tracking-wider">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1.5">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#94a9c9]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0bd1d1] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-[#222f43]/50">
                <a
                  href="#contact"
                  onClick={() => onSelectServiceForContact && onSelectServiceForContact(service.title)}
                  className="btn-linear-small w-full justify-center"
                >
                  <span>Inquire for {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
