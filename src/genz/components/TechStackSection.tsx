import React, { useState } from 'react';
import { Sparkles, Terminal, Cpu, Code2, Server, Globe, CheckCircle2 } from 'lucide-react';
import { TECH_CATEGORIES } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const keyTechHighlights = [
    { name: 'LangGraph & Multi-Agents', percent: 98, role: 'Deterministic state machine agent pipelines' },
    { name: 'React 19 & Next.js 15', percent: 96, role: 'High-speed modern web applications & SSR' },
    { name: 'FastAPI & Python 3.12', percent: 97, role: 'Asynchronous streaming backends & AI APIs' },
    { name: 'Twilio, Vapi & Whisper', percent: 94, role: 'Real-time conversational voice agents' },
    { name: 'Pinecone, Qdrant & RAG', percent: 95, role: 'Semantic search with strict zero-hallucination' },
    { name: 'n8n, Make & Automations', percent: 98, role: 'Enterprise data pipelines & CRM sync' }
  ];

  return (
    <section id="tech" className="relative py-24 border-t border-[#222f43]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GenZ Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131c31] border border-[#222f43] text-xs font-semibold text-[#0bd1d1] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0ea5ea]" />
              <span>Modern Technologies & Tooling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Tech <span className="color-linear">Stack & Proficiencies</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#94a9c9] leading-relaxed">
            Strictly production-grade frameworks selected for speed, architectural determinism, and reliable scalability.
          </p>
        </div>

        {/* Featured Tech Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {keyTechHighlights.map((tech, idx) => (
            <div
              key={idx}
              className="card-hover-border bg-[#131c31] border-[#222f43] p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white group-hover:text-[#0bd1d1] transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-xs font-mono font-bold color-linear">
                    {tech.percent}%
                  </span>
                </div>

                <p className="text-xs text-[#94a9c9] mb-4">
                  {tech.role}
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#0b1220] h-2 rounded-full overflow-hidden border border-[#222f43]">
                <div
                  className="h-full bg-gradient-to-r from-[#0ea5ea] to-[#0bd1d1] rounded-full transition-all duration-1000"
                  style={{ width: `${tech.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Category Explorer */}
        <div className="card-hover-border bg-[#131c31] border-[#222f43] p-6 sm:p-8 rounded-3xl">
          <div className="flex items-center justify-between border-b border-[#222f43] pb-4 mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#0ea5ea]" />
              <span>Full Category Breakdown</span>
            </h3>
            <span className="text-xs font-mono text-[#7f92b0]">
              {TECH_CATEGORIES[activeCategoryIndex].skills.length} Specialized Tools
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {TECH_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`tag-badge cursor-pointer ${
                  activeCategoryIndex === idx ? 'active font-bold' : ''
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH_CATEGORIES[activeCategoryIndex].skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0b1220] border border-[#222f43] hover:border-[#0ea5ea] transition-all"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-sm font-bold text-white">{skill.name}</h4>
                  <span className="text-xs font-mono text-[#0bd1d1]">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-[#131c31] h-1.5 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-[#0ea5ea] to-[#0bd1d1]"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
                <p className="text-[11px] text-[#7f92b0]">{skill.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
