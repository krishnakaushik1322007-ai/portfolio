'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FolderGit2, 
  ArrowRight, 
  ExternalLink,
  Sparkles, 
  Filter 
} from 'lucide-react';
import { projectsData } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function FeaturedProjects() {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: `All Systems (${projectsData.length})` },
    { id: 'AI & LLMs', label: 'Autonomous AI' },
    { id: 'Full-Stack & Platforms', label: 'Full-Stack Platforms' },
    { id: 'Systems & C++', label: 'Systems & C++' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="relative py-24 border-b border-white/[0.08] bg-[#050508]">
      {/* Red vertical accent line */}
      <div className="vertical-accent-line hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 md:pl-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>ENGINEERING INDEX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              The Systems <span className="text-red-500">Matrix</span>
            </h2>
            <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
              Specialized architectures spanning grounded multi-agent RAG, multimodal vision triage, Socratic curriculum modeling, and native C++ expert systems.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-xs font-mono text-red-400 hover:text-red-300 font-bold uppercase tracking-wider group"
          >
            <span>Explore Full Catalog ({projectsData.length})</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filter Pills (Matching video: red active button) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 whitespace-nowrap border ${
                filter === c.id
                  ? 'bg-red-500 text-white font-bold border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                  : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border-white/[0.08]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Bottom CTA to Projects */}
        <div className="mt-14 p-8 rounded-2xl bg-[#09090f] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">
              Inspect technical case study teardowns &amp; architecture nodes
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Explore in-depth case study pages complete with data flow diagrams and test suites.
            </p>
          </div>
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shrink-0 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
          >
            Explore Teardowns
          </Link>
        </div>

      </div>
    </section>
  );
}
