import React from 'react';
import { Download, Award, GraduationCap, Briefcase, MapPin, CheckCircle2, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResumeModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="about" className="relative py-24 border-t border-[#222f43]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GenZ Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131c31] border border-[#222f43] text-xs font-semibold text-[#0bd1d1] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0ea5ea]" />
              <span>Background & Engineering Pedigree</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              About <span className="color-linear">Me</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#94a9c9] leading-relaxed">
            Bridging frontend visual polish, scalable backend systems, and cutting-edge autonomous AI pipelines with single-engineer ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-hover-border bg-[#131c31] border-[#222f43] p-6 rounded-3xl space-y-6 shadow-xl">
              <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden border border-[#222f43] bg-[#0b1220]">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1220]/90 border border-[#222f43] text-xs font-semibold text-[#0bd1d1] backdrop-blur-md">
                    <span className="pulse-dot" />
                    <span>{PERSONAL_INFO.status}</span>
                  </span>
                </div>
              </div>

              {/* Personal Details Table */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-[#222f43] pb-2.5">
                  <span className="text-[#7f92b0] font-semibold uppercase">Full Name</span>
                  <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#222f43] pb-2.5">
                  <span className="text-[#7f92b0] font-semibold uppercase">Location</span>
                  <span className="text-[#94a9c9] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0ea5ea]" />
                    {PERSONAL_INFO.location}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-[#222f43] pb-2.5">
                  <span className="text-[#7f92b0] font-semibold uppercase">Systems Delivered</span>
                  <span className="text-white font-bold">{PERSONAL_INFO.completedProjects}</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#222f43] pb-2.5">
                  <span className="text-[#7f92b0] font-semibold uppercase">Hours Saved Weekly</span>
                  <span className="color-linear font-bold">{PERSONAL_INFO.hoursSavedWeekly}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={onOpenResumeModal}
                  className="btn-linear w-full justify-center"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Resume</span>
                </button>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-border-linear w-full justify-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Education Card */}
            <div className="card-hover-border bg-[#131c31] border-[#222f43] p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0ea5ea]/10 border border-[#0ea5ea]/30 flex items-center justify-center text-[#0ea5ea]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Education</h4>
                  <p className="text-xs text-[#7f92b0]">Academic Background</p>
                </div>
              </div>

              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-sm font-bold text-white">{edu.degree}</h5>
                    <span className="text-[11px] font-mono text-[#0bd1d1] shrink-0 bg-[#0b1220] px-2 py-0.5 rounded border border-[#222f43]">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium color-linear">{edu.institution}</p>
                  <p className="text-xs text-[#94a9c9]">GPA / Grade: {edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative Bio & Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            {/* Extended Narrative */}
            <div className="card-hover-border bg-[#131c31] border-[#222f43] p-6 sm:p-8 rounded-3xl space-y-4">
              <h3 className="text-xl font-bold text-white">
                Engineering Autonomous Solutions with Human-Centric Precision
              </h3>
              <p className="text-sm text-[#94a9c9] leading-relaxed">
                {PERSONAL_INFO.extendedBio}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-[#94a9c9]">
                  <CheckCircle2 className="w-4 h-4 text-[#0bd1d1] shrink-0 mt-0.5" />
                  <span>Custom LLM Fine-Tuning & Vector RAG with Qdrant/Pinecone</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#94a9c9]">
                  <CheckCircle2 className="w-4 h-4 text-[#0bd1d1] shrink-0 mt-0.5" />
                  <span>Full-Stack Next.js 15, React 19, TypeScript & Tailwind</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#94a9c9]">
                  <CheckCircle2 className="w-4 h-4 text-[#0bd1d1] shrink-0 mt-0.5" />
                  <span>Multi-Agent Orchestration via LangGraph & State Machines</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#94a9c9]">
                  <CheckCircle2 className="w-4 h-4 text-[#0bd1d1] shrink-0 mt-0.5" />
                  <span>Real-time Voice Calling Systems via Twilio, Retell & Whisper</span>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#0ea5ea]" />
                  <span>Experience & Roles</span>
                </h3>
                <span className="text-xs text-[#7f92b0] font-mono">2024 - Present</span>
              </div>

              <div className="space-y-4">
                {EXPERIENCES.map((exp, idx) => (
                  <div
                    key={idx}
                    className="card-hover-border bg-[#131c31] border-[#222f43] p-6 rounded-2xl space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="text-base font-bold text-white">{exp.role}</h4>
                        <p className="text-xs font-semibold color-linear">{exp.company}</p>
                      </div>
                      <span className="text-xs font-mono text-[#0bd1d1] bg-[#0b1220] px-2.5 py-1 rounded-full border border-[#222f43] self-start sm:self-auto">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5 pt-1">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-xs text-[#94a9c9] flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0bd1d1] shrink-0 mt-1.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="card-hover-border bg-[#131c31] border-[#222f43] p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0bd1d1]/10 border border-[#0bd1d1]/30 flex items-center justify-center text-[#0bd1d1]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Certifications & Honors</h4>
                  <p className="text-xs text-[#7f92b0]">Verified Industry Credentials</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0b1220] border border-[#222f43] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0bd1d1] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-white">{cert.name}</h5>
                      <p className="text-[11px] text-[#7f92b0]">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
