'use client';

import React, { useState } from 'react';
import { 
  Wrench, 
  Search, 
  Brain, 
  Terminal, 
  Layout, 
  Server, 
  Database, 
  GitBranch, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { skillCategories } from '@/data/skills';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    'ai-genai': <Brain className="w-4 h-4 text-sky-400" />,
    'programming': <Terminal className="w-4 h-4 text-violet-400" />,
    'frontend': <Layout className="w-4 h-4 text-pink-400" />,
    'backend': <Server className="w-4 h-4 text-amber-400" />,
    'databases': <Database className="w-4 h-4 text-emerald-400" />,
    'tools': <GitBranch className="w-4 h-4 text-cyan-400" />
  };

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, categoryName: cat.name, categoryId: cat.id }))
  );

  const filteredSkills = allSkills.filter((item) => {
    const matchesTab = activeTab === 'all' || item.categoryId === activeTab;
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Advanced':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/30">
            Advanced
          </span>
        );
      case 'Proficient':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/30">
            Proficient
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-500/10 text-slate-400 border border-slate-500/30">
            Working Knowledge
          </span>
        );
    }
  };

  return (
    <section id="skills" className="relative py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-sky-400">
              <Wrench className="w-3.5 h-3.5" />
              <span>02 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Applied Technologies & <span className="text-gradient-violet">Systems Skills</span>
            </h2>
            <p className="text-base text-slate-400 max-w-2xl">
              Organized into clear engineering domains. Evaluated based on actual implementation in production codebases and automated test suites rather than artificial percentage bars.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-mono rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-sky-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                : 'bg-white/[0.03] hover:bg-white/[0.07] text-slate-400 hover:text-white border border-white/[0.08]'
            }`}
          >
            All Disciplines ({allSkills.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'bg-white/[0.03] hover:bg-white/[0.07] text-slate-400 hover:text-white border border-white/[0.08]'
              }`}
            >
              <span>{categoryIcons[cat.id]}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl bg-white/[0.02] border transition-all duration-300 group hover:-translate-y-1 ${
                skill.highlight
                  ? 'border-white/10 hover:border-sky-500/40 hover:bg-sky-500/[0.03]'
                  : 'border-white/[0.06] hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                    {categoryIcons[skill.categoryId]}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      {skill.categoryName}
                    </span>
                  </div>
                </div>
                {getLevelBadge(skill.level)}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mt-2 pl-0.5">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-mono text-xs">
            No technologies found matching &quot;{searchQuery}&quot;
          </div>
        )}

      </div>
    </section>
  );
}
