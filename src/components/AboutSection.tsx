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
      title: '01 Sovereign Systems',
      desc: 'Zero reliance on third-party black-box wrappers. Every layer built with deliberate necessity, deterministic fallbacks, and audit-ready execution.',
      icon: ShieldCheck,
      color: 'text-red-400'
    },
    {
      title: '02 First-Principles Architecture',
      desc: 'Machine learning systems require robust backend orchestration, secure database boundaries, and responsive interfaces from database indexing to UI states.',
      icon: Layers,
      color: 'text-sky-400'
    },
    {
      title: '03 Axiomatic Verification',
      desc: 'Autonomous systems must verify actions against deterministic ground truths before client dispatch — 510 automated QA suites in CampusOS, 100/100 tests in CivicLens.',
      icon: Target,
      color: 'text-emerald-400'
    }
  ];

  return (
    <section id="about" className="relative py-24 border-b border-white/[0.08] bg-[#050508]">
      {/* Left Red Vertical Accent Line */}
      <div className="vertical-accent-line hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 md:pl-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="text-xs font-mono text-slate-500 tracking-wider">
            //01.00 SEC_ABOUT INDEX [AGENT_COMPILED]
          </div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>ENGINEER PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Background &amp; Philosophy
          </h2>
          <p className="text-base text-slate-400 max-w-3xl leading-relaxed">
            A comprehensive overview of my academic foundation at Shoolini University, technical journey, engineering philosophy, and aspirations in the international technology industry.
          </p>
        </div>

        {/* Grid: Narrative on Left, Core Pillars on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            
            {/* Academic Background with Real Photo Chip */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <div className="flex items-center space-x-3 pb-3 border-b border-white/[0.06]">
                <img
                  src="/krishna_kaushik.jpg"
                  alt="Krishna Kaushik"
                  className="w-12 h-12 rounded-full object-cover object-top border-2 border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.3)] shrink-0"
                />
                <div>
                  <h3 className="text-base font-bold text-white flex items-center space-x-2">
                    <span>Krishna Kaushik</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                      CGPA 9.05 / 10
                    </span>
                  </h3>
                  <div className="text-xs font-mono text-slate-400">
                    B.Tech CSE (Artificial Intelligence) &bull; Shoolini University (2025–2029)
                  </div>
                </div>
              </div>

              <p>
                I am a Computer Science and Engineering undergraduate specializing in Artificial Intelligence at 
                <strong className="text-white font-semibold"> Shoolini University</strong> (2025–2029) where I maintain a 
                <strong className="text-red-400 font-semibold font-mono"> 9.05 / 10 CGPA</strong>. My academic coursework encompasses 
                Data Structures, Database Management Systems, Object-Oriented Programming, and discrete computational mathematics.
              </p>
              <p className="text-sm text-slate-400">
                From my earliest coursework, my priority has been applying computer science principles to build working, testable software. I do not confine myself to theory or toy scripts; I explore how databases, networks, and neural reasoning pipelines integrate under real-world constraints.
              </p>
            </div>

            {/* Technical Journey */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-red-400" />
                <span>The Technical Journey</span>
              </h3>
              <p>
                My defining engineering capabilities were forged in the terminal: completely hands-on in machine learning architectures, grounded multi-agent RAG pipelines with pgvector &amp; Gemini, offline C++ rule engines, and hardened security layers.
              </p>
              <p className="text-sm text-slate-400">
                My engineering path began with low-level systems programming in C and C++, culminating in ZENETH (an offline crop disease expert system with zero cloud reliance), expanding into full-stack AI engineering with Next.js, FastAPI, and PostgreSQL.
              </p>
            </div>

            {/* Quote Block */}
            <div className="p-4 rounded-xl bg-red-500/[0.04] border-l-2 border-l-red-500 border-white/[0.08] italic text-slate-200 text-sm font-mono">
              &ldquo;I design and deploy autonomous AI systems that operate 24/7 with persistent memory, multi-agent orchestration, and continuous self-verification &mdash; built from first principles, not frameworks.&rdquo;
            </div>

          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Core Engineering Philosophies
            </h3>

            <div className="space-y-4">
              {philosophies.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-red-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
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
            <div className="p-5 rounded-xl bg-gradient-to-br from-red-500/[0.05] via-white/[0.02] to-transparent border border-red-500/20 space-y-3 font-mono text-xs">
              <div className="text-red-400 font-semibold uppercase tracking-wider">
                Engineering Snapshot
              </div>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">Current Role</span>
                  <span>B.Tech CSE (AI) Student &amp; Developer</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">Academic Standing</span>
                  <span className="text-emerald-400">9.05 / 10 CGPA</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">Internship</span>
                  <span>Corizo (IIT Bombay Academic Collab)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-slate-400">Location</span>
                  <span>India &bull; Global Opportunities</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Code Repositories</span>
                  <a
                    href="https://github.com/krishnakaushik1322007-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:underline flex items-center space-x-1"
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
