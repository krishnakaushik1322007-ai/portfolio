'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FolderGit2, 
  ArrowRight, 
  Sparkles, 
  Filter 
} from 'lucide-react';
import { projectsData } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function FeaturedProjects() {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'AI & LLMs', label: 'AI & LLM Systems' },
    { id: 'Full-Stack & Platforms', label: 'Full-Stack Platforms' },
    { id: 'Systems & C++', label: 'Systems & C++' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="relative py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-sky-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 // FEATURED ENGINEERING WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Intelligent Platforms & <span className="text-gradient-cyan">Verified Systems</span>
            </h2>
            <p className="text-base text-slate-400 max-w-2xl">
              Architectural deep-dives into educational operating systems, municipal intelligence, self-reflective RAG engines, and deterministic C++ expert systems.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-sm font-mono text-sky-400 hover:text-sky-300 font-semibold group"
          >
            <span>View Full Project Catalog ({projectsData.length})</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 whitespace-nowrap ${
                filter === c.id
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'bg-white/[0.03] hover:bg-white/[0.07] text-slate-400 hover:text-white border border-white/[0.08]'
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
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-sky-500/[0.06] via-violet-500/[0.05] to-transparent border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">
              Interested in full technical teardowns & code architecture?
            </h3>
            <p className="text-sm text-slate-400 font-mono">
              Explore in-depth case study pages complete with data flow diagrams and local test suites.
            </p>
          </div>
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shrink-0 border border-white/10"
          >
            Explore Case Studies
          </Link>
        </div>

      </div>
    </section>
  );
}
