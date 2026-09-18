import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Layers, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface SelectedWorksProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [featuredIdx, setFeaturedIdx] = useState<number>(0);

  const categories = ['All', 'AI Agents', 'Automation', 'Voice AI', 'Chatbots'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const featuredProject = PROJECTS[featuredIdx] || PROJECTS[0];

  const handleNext = () => {
    setFeaturedIdx((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setFeaturedIdx((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  // Self-hosted thumbnails, one per project, so nothing repeats and the page
  // never depends on a third-party image host being up.
  const PROJECT_IMAGES: Record<string, string> = {
    'contract-iq': '/projects/contract-iq.jpg',
    'vivagraph-ai': '/projects/vivagraph-ai.jpg',
    'ai-sales-automation-agent': '/projects/ai-sales.jpg',
    'smart-supply-chain-agent': '/projects/supply-chain.jpg',
    'stock-news-alert-agent': '/projects/stock-news.jpg',
    'ai-operations-copilot': '/projects/ai-ops.jpg',
    'voice-enabled-executive-agent': '/projects/voice-agent.jpg'
  };

  const getProjectImage = (p: Project) =>
    p.thumbnailUrl || PROJECT_IMAGES[p.id] || '/projects/contract-iq.jpg';

  return (
    <section id="works" className="relative py-24 border-t border-[#222f43]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GenZ Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131c31] border border-[#222f43] text-xs font-semibold text-[#0bd1d1] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0ea5ea]" />
              <span>Engineered Systems & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              My <span className="color-linear">Latest Projects</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#94a9c9] leading-relaxed">
            Multi-agent orchestrations, conversational voice bots, and automated business workflows delivered with verifiable enterprise metrics.
          </p>
        </div>

        {/* GenZ Editor's Pick Spotlight Card */}
        <div className="mb-16 card-hover-border bg-[#131c31] border-[#222f43] p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between border-b border-[#222f43] pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#0ea5ea] to-[#0bd1d1] text-xs font-bold text-white shadow-sm">
                Spotlight Project
              </span>
              <span className="text-xs font-mono text-[#7f92b0]">
                0{featuredIdx + 1} of 0{PROJECTS.length}
              </span>
            </div>

            {/* Slider controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-[#222f43] border border-[#334155] flex items-center justify-center text-white hover:border-[#0ea5ea] hover:text-[#0bd1d1] transition-all cursor-pointer"
                title="Previous Featured"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-[#222f43] border border-[#334155] flex items-center justify-center text-white hover:border-[#0ea5ea] hover:text-[#0bd1d1] transition-all cursor-pointer"
                title="Next Featured"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="tag-badge active text-xs font-semibold">
                  {featuredProject.category}
                </span>
                <span className="text-xs text-[#7f92b0]">•</span>
                <span className="text-xs text-[#94a9c9]">{featuredProject.timeline || featuredProject.stats}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {featuredProject.title}
              </h3>

              <p className="text-sm font-semibold color-linear">
                {featuredProject.tagline}
              </p>

              <p className="text-sm text-[#94a9c9] leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {featuredProject.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#0b1220] border border-[#222f43]">
                    <div className="text-lg font-black color-linear">{m.value}</div>
                    <div className="text-[10px] uppercase font-bold text-[#7f92b0] truncate mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => onSelectProject(featuredProject)}
                  className="btn-linear"
                >
                  <Layers className="w-4 h-4" />
                  <span>View Architecture</span>
                </button>

                {(featuredProject.liveUrl || featuredProject.demoUrl) && (
                  <a
                    href={(featuredProject.liveUrl || featuredProject.demoUrl)!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-border-linear"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#222f43] border border-[#334155] flex items-center justify-center text-white hover:text-[#0bd1d1] hover:border-[#0ea5ea] transition-all"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Image Display */}
            <div className="lg:col-span-6">
              <div
                onClick={() => onSelectProject(featuredProject)}
                className="relative rounded-2xl overflow-hidden border border-[#222f43] bg-[#0b1220] group cursor-pointer aspect-video shadow-xl"
              >
                <img
                  src={getProjectImage(featuredProject)}
                  alt={featuredProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-[#131c31]/90 border border-[#222f43] text-xs font-semibold text-white flex items-center gap-1.5 group-hover:border-[#0ea5ea] transition-colors">
                  <span>Explore Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0bd1d1]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`tag-badge cursor-pointer ${
                  activeCategory === cat ? 'active' : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#7f92b0] font-mono">
            Showing {filteredProjects.length} of {PROJECTS.length} Systems
          </div>
        </div>

        {/* GenZ Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-hover-border bg-[#131c31] border-[#222f43] rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative aspect-video overflow-hidden cursor-pointer bg-[#0b1220]"
                >
                  <img
                    src={getProjectImage(project)}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#0b1220]/90 border border-[#222f43] text-[11px] font-semibold text-[#0bd1d1]">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-[#7f92b0] font-mono">
                      {project.timeline || project.stats}
                    </span>
                    <span className="text-xs font-bold color-linear">
                      {project.metrics[0]?.value} {project.metrics[0]?.label}
                    </span>
                  </div>

                  <h4
                    onClick={() => onSelectProject(project)}
                    className="text-lg font-bold text-white group-hover:text-[#0bd1d1] transition-colors cursor-pointer line-clamp-1"
                  >
                    {project.title}
                  </h4>

                  <p className="text-xs text-[#94a9c9] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-[#222f43]/60 border border-[#222f43] text-[10px] text-[#94a9c9]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md bg-[#222f43]/30 text-[10px] text-[#7f92b0]">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5 pt-3 border-t border-[#222f43]/60 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-bold color-linear inline-flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>Architecture Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#94a9c9] hover:text-[#0bd1d1] transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {(project.liveUrl || project.demoUrl) && (
                    <a
                      href={(project.liveUrl || project.demoUrl)!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#94a9c9] hover:text-[#0bd1d1] transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
