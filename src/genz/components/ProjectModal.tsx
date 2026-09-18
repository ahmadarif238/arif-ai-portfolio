import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, ArrowRight, CheckCircle, ShieldCheck, Layers, Cpu, Sparkles } from 'lucide-react';
import { Project, ArchitectureNode } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode | null>(null);

  // Close on Escape and stop the page behind from scrolling while open.
  useEffect(() => {
    if (!project) return;
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
  }, [project, onClose]);

  // Reset the inspected architecture node when a different project opens.
  useEffect(() => {
    setSelectedNode(null);
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0b1220]/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#222f43] bg-[#131c31] p-6 sm:p-8 text-[#94a9c9] shadow-2xl z-10 custom-scrollbar"
      >
        {/* Close Button */}
        <button
          id="close-project-modal"
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full border border-[#222f43] bg-[#0b1220] p-2 text-[#94a9c9] hover:bg-[#222f43] hover:text-white transition-colors"
          aria-label="Close Project Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Information */}
        <div className="border-b border-[#222f43] pb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="tag-badge active text-xs font-semibold">
              {project.category}
            </span>
            <span className="text-xs text-[#7f92b0]">•</span>
            <span className="text-xs text-[#94a9c9]">{project.stats}</span>
          </div>
          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="mt-1 text-sm font-semibold color-linear">
            {project.tagline}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 my-6">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="rounded-xl border border-[#222f43] bg-[#0b1220] p-4 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold color-linear">
                {metric.value}
              </div>
              <div className="text-[11px] text-[#7f92b0] uppercase tracking-wider font-bold mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 flex items-center gap-2">
              <span>The Bottleneck & Challenge</span>
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[#cad7ea]">
              {project.problem}
            </p>
          </div>

          <div className="rounded-2xl border border-[#0bd1d1]/30 bg-[#0bd1d1]/5 p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider color-linear mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0bd1d1]" />
              <span>The Engineered Solution</span>
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[#cad7ea]">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Interactive Architecture Flow Explorer */}
        <div className="mb-8 rounded-2xl border border-[#222f43] bg-[#0b1220] p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0ea5ea]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Interactive Architecture Pipeline
              </h3>
            </div>
            <span className="text-[11px] text-[#7f92b0]">Click any node to inspect internals</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {project.architecture.map((node) => {
              const isSelected = selectedNode?.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#0bd1d1] bg-[#131c31] shadow-lg ring-1 ring-[#0bd1d1]'
                      : 'border-[#222f43] bg-[#131c31]/60 hover:border-[#0ea5ea]'
                  }`}
                >
                  <div className="text-[10px] uppercase font-bold text-[#7f92b0] mb-1">
                    {node.type}
                  </div>
                  <div className="text-xs font-bold text-white mb-1 truncate">
                    {node.label}
                  </div>
                  <div className="text-[10px] color-linear font-mono truncate">
                    Active Pipeline Node
                  </div>
                </button>
              );
            })}
          </div>

          {/* Expanded Node Inspector */}
          {selectedNode && (
            <div className="mt-4 rounded-xl border border-[#0bd1d1]/30 bg-[#131c31] p-4 text-xs text-[#cad7ea]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#0bd1d1]" />
                  {selectedNode.label} — Node Specifications
                </span>
                <span className="text-[10px] font-mono text-[#0bd1d1] uppercase bg-[#0b1220] px-2 py-0.5 rounded border border-[#222f43]">
                  {selectedNode.type}
                </span>
              </div>
              <p className="text-xs text-[#94a9c9] leading-relaxed">
                Deterministic {selectedNode.type} stage in the execution graph with verified sub-second latency and error handling guarantees.
              </p>
            </div>
          )}
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
            Full Engineering Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-[#0b1220] border border-[#222f43] text-xs text-[#94a9c9]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#222f43] pt-6">
          <div className="flex items-center gap-3">
            {(project.liveUrl || project.demoUrl) && (
              <a
                href={(project.liveUrl || project.demoUrl)!}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linear"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-border-linear"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="btn-border-linear text-xs py-2 px-4"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
