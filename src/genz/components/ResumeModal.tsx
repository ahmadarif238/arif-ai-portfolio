import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Award, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape and stop the page behind from scrolling while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0b1220]/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#222f43] bg-[#131c31] p-6 sm:p-10 text-[#94a9c9] shadow-2xl z-10 custom-scrollbar"
      >
        {/* Actions Bar */}
        <div className="flex items-center justify-between border-b border-[#222f43] pb-4 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider color-linear flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0ea5ea]" />
            <span>Curriculum Vitae • 2026 Edition</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="btn-linear-small"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#222f43] bg-[#0b1220] px-4 py-2 text-xs font-bold text-[#94a9c9] hover:text-white hover:border-[#0ea5ea] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-full border border-[#222f43] bg-[#0b1220] p-1.5 text-[#94a9c9] hover:bg-[#222f43] hover:text-white transition-colors"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="space-y-8 print:text-black">
          {/* Header */}
          <div className="border-b border-[#222f43] pb-6">
            <h1 id="resume-title" className="text-3xl font-extrabold text-white">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold color-linear mt-1">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#94a9c9]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0ea5ea]" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#0bd1d1]" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#0ea5ea]" />
                {PERSONAL_INFO.email}
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              Executive Profile
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[#cad7ea]">
              {PERSONAL_INFO.extendedBio}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#0ea5ea]" />
              <span>Professional Experience</span>
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-[#0ea5ea] pl-4 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                    <span className="text-xs font-mono text-[#0bd1d1]">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold color-linear">{exp.company}</div>
                  <ul className="space-y-1 pt-1">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-xs text-[#94a9c9]">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#222f43]">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#0bd1d1]" />
                <span>Education</span>
              </h2>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <div className="font-bold text-white">{edu.degree}</div>
                  <div className="color-linear">{edu.institution}</div>
                  <div className="text-[11px] text-[#7f92b0]">{edu.period} • GPA: {edu.gpa}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0ea5ea]" />
                <span>Verified Certifications</span>
              </h2>
              <div className="space-y-2 text-xs">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="font-medium text-[#cad7ea]">{cert.name}</span>
                    <span className="text-[#7f92b0] font-mono text-[11px]">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
