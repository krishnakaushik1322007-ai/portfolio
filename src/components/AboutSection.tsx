'use client';

import React from 'react';
import { 
  Terminal, 
  Brain, 
  Code2, 
  Layers, 
  Compass, 
  Target, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

export default function AboutSection() {
  const philosophies = [
    {
      title: 'Verification Over Hallucination',
      desc: 'AI systems are only as valuable as their grounding. I design architectures with strict source attribution, deterministic fallbacks, and schema validation so that generated answers can be inspected and audited.',
      icon: ShieldCheck,
      color: 'text-sky-400'
    },
    {
      title: 'Full-Stack Systems Discipline',
      desc: 'Machine learning models need robust backend orchestration, secure database boundaries, and responsive interfaces. I engineer end-to-end applications from database indexing to UI states.',
      icon: Layers,
      color: 'text-violet-400'
    },
    {
      title: 'Practical Pragmatism Over Hype',
      desc: 'Rather than chasing theoretical hype, I build software that solves tangible problems: educational coordination (CampusOS), civic issue deduplication (CivicLens), and offline crop diagnosis (ZENETH).',
      icon: Target,
      color: 'text-emerald-400'
    }
  ];

  return (
    <section id="about" className="relative py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-sky-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ENGINEERING PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Architecture-First Mindset.{' '}
            <span className="text-gradient-cyan">Grounded AI Execution.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl">
            A comprehensive overview of my academic foundation, technical journey, engineering philosophy, and aspirations in the international technology industry.
          </p>
        </div>

        {/* Grid: Narrative on Left, Core Pillars on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Brain className="w-5 h-5 text-sky-400" />
                <span>Academic Foundation & Background</span>
              </h3>
              <p>
                I am a Computer Science and Engineering undergraduate specializing in Artificial Intelligence at 
                <strong className="text-white font-semibold"> Shoolini University</strong> (2025–2029) where I maintain a 
                <strong className="text-sky-300 font-semibold font-mono"> 9.05 / 10 CGPA</strong>. My academic coursework encompasses 
                Data Structures, Database Management Systems, Object-Oriented Programming, and discrete computational mathematics.
              </p>
              <p>
                From my earliest coursework, my priority has been applying computer science principles to build working, testable software. I do not confine myself to theory or toy scripts; I explore how databases, networks, and neural reasoning pipelines integrate under real-world constraints.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-violet-400" />
                <span>The Technical Journey</span>
              </h3>
              <p>
                My engineering path began with low-level systems programming in C and C++, where I mastered memory models, pointer manipulation, and Standard Template Library algorithms. This foundation culminated in <strong className="text-slate-100">ZENETH</strong>, an offline, memory-resident crop disease expert system written in native C++ with zero cloud reliance.
              </p>
              <p>
                As AI models transitioned from classification benchmarks into generative reasoning engines, I expanded into full-stack AI engineering: building production REST microservices with <strong className="text-slate-100">FastAPI</strong>, implementing complex relational and vector schemas with <strong className="text-slate-100">PostgreSQL, Supabase, and pgvector</strong>, and developing responsive frontends with <strong className="text-slate-100">Next.js and TypeScript</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Compass className="w-5 h-5 text-emerald-400" />
                <span>Global Engineering Ambition</span>
              </h3>
              <p>
                My long-term ambition is to contribute to cutting-edge AI engineering and distributed systems teams at leading international technology companies such as Google, Microsoft, NVIDIA, and OpenAI. I am driven to tackle challenging problems in retrieval architectures, autonomous agent workflows, low-latency inference, and multimodal systems that millions of users rely upon daily.
              </p>
            </div>

          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
              Core Engineering Philosophies
            </h3>

            <div className="space-y-4">
              {philosophies.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed pl-11">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Fact Sheet Box */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-sky-500/[0.05] via-violet-500/[0.03] to-transparent border border-sky-500/20 space-y-3 font-mono text-xs">
              <div className="text-sky-400 font-semibold uppercase tracking-wider">
                Engineering Snapshot
              </div>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">Current Role</span>
                  <span>B.Tech CSE (AI) Student & Developer</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">Academic Standing</span>
                  <span className="text-emerald-400">9.05 / 10 CGPA</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">Internship</span>
                  <span>Corizo (IIT Bombay Collab)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">Location</span>
                  <span>India &bull; Open to Remote / Relocation</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Code Repositories</span>
                  <a
                    href="https://github.com/krishnakaushik1322007-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline flex items-center space-x-1"
                  >
                    <span>krishnakaushik1322007-ai</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
