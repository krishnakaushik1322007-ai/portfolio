'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  Code
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import NeuralCanvas from './NeuralCanvas';

export default function Hero() {
  const [photoHovered, setPhotoHovered] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Neural Matrix Canvas */}
      <NeuralCanvas />

      {/* Radial Gradient Glowing Spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle Grid Lines */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/20 backdrop-blur-md text-xs font-mono text-sky-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>AI Engineer &bull; Software Developer &bull; CSE (AI)</span>
            </div>

            {/* Main Editorial Heading */}
            <div className="space-y-3">
              <h2 className="text-sm font-mono uppercase tracking-[0.25em] text-slate-400">
                Krishna Kaushik
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Building <span className="text-gradient-cyan">Intelligent Systems</span>.{' '}
                Engineering <span className="text-gradient-violet">Real-World Solutions</span>.
              </h1>
            </div>

            {/* Supporting Introduction */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Computer Science and Artificial Intelligence undergraduate passionate about building intelligent applications, AI-powered systems and scalable software solutions.
            </p>

            {/* Quick Focus Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'Retrieval-Augmented Generation (RAG)',
                'Google Gemini API',
                'FastAPI & Next.js',
                'Deterministic C++ Systems',
                'PostgreSQL & pgvector'
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-4 w-full sm:w-auto">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transform hover:-translate-y-0.5"
              >
                <span>View Engineering Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="/Krishna_Kaushik_Resume.pdf"
                download="Krishna_Kaushik_Resume.pdf"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-sky-500/40 text-sm font-semibold transition-all duration-200 backdrop-blur-md"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] text-sm font-medium transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Verification Links */}
            <div className="flex items-center space-x-6 pt-3 text-slate-400 text-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Profiles:</span>
              <a
                href="https://github.com/krishnakaushik1322007-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span className="font-mono text-xs">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-kaushik-559239366/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 hover:text-sky-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span className="font-mono text-xs">LinkedIn</span>
              </a>
              <span className="text-slate-400 font-mono text-xs">&bull;</span>
              <span className="font-mono text-xs text-slate-400">India (IST)</span>
            </div>
          </div>

          {/* Right Column: Architectural Terminal & Profile Avatar Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/20 via-violet-500/20 to-teal-500/20 blur-xl opacity-75" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-[#0b0e14]/90 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-5">
                
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 font-mono text-xs text-slate-400">system.spec &bull; v2026.1</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    LIVE_NODE
                  </span>
                </div>

                {/* Optional Photo / Procedural Neural Avatar Component */}
                <div 
                  className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-4 transition-all duration-300 hover:border-sky-500/30"
                  onMouseEnter={() => setPhotoHovered(true)}
                  onMouseLeave={() => setPhotoHovered(false)}
                >
                  <div className="flex items-center space-x-4">
                    {/* Neural Avatar Frame */}
                    <div className="relative w-20 h-20 rounded-xl bg-gradient-to-tr from-sky-600/30 via-violet-600/20 to-teal-500/20 border border-sky-400/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                      <div className="absolute inset-1 rounded-lg border border-white/10 flex items-center justify-center font-mono font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
                        KK
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0b0e14]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-base font-bold text-white truncate">Krishna Kaushik</h3>
                      </div>
                      <p className="text-xs text-sky-400 font-mono mt-0.5">CSE (AI) &bull; Shoolini Univ.</p>
                      <div className="mt-2 inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                        <span>CGPA: 9.05 / 10.0</span>
                      </div>
                    </div>
                  </div>

                  {/* Micro Hint */}
                  <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Active Research Focus</span>
                    <span className="text-sky-400">Self-Reflective RAG</span>
                  </div>
                </div>

                {/* Mini System Telemetry Box */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] space-y-1.5">
                    <div className="flex justify-between text-slate-400">
                      <span>Flagship Platform</span>
                      <span className="text-sky-300 font-semibold">CampusOS AI (Next.js + FastAPI)</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>CivicLens Suite</span>
                      <span className="text-emerald-400 font-semibold">100 / 100 Tests Passing</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Internship</span>
                      <span className="text-violet-300">Corizo (IIT Bombay Collab)</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Socratic Dataset</span>
                      <span className="text-teal-300">Gyanix (41 State Moves)</span>
                    </div>
                  </div>
                </div>

                {/* Quick Link to Terminal */}
                <a
                  href="#terminal"
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-sky-500/10 border border-white/[0.08] hover:border-sky-500/30 text-xs font-mono text-slate-300 hover:text-sky-300 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>Launch Interactive Terminal Sandbox</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
