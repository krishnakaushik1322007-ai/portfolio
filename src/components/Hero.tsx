'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  FileText, 
  Cpu, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import NeuralCanvas from './NeuralCanvas';

export default function Hero() {
  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#050508]">
      {/* Background Neural Canvas */}
      <NeuralCanvas />

      {/* Red Glow Ambient Lights */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-red-500/8 blur-[160px] rounded-full pointer-events-none" />

      {/* Giant Hollow Background Outline Heading "PORTFOLIO" */}
      <div 
        className="absolute top-12 left-1/2 -translate-x-1/2 text-[14vw] sm:text-[16vw] font-black tracking-widest text-outline-hollow pointer-events-none select-none z-0 opacity-40 leading-none whitespace-nowrap"
        aria-hidden="true"
      >
        PORTFOLIO
      </div>

      {/* Subtle Grid Lines */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Hello, I'm KRISHNA. + Bio + CTA */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-5">
            
            {/* Script Text */}
            <div className="text-xl sm:text-2xl font-serif italic text-slate-300 font-light tracking-wide">
              Hello, I&apos;m
            </div>

            {/* High-Impact Solid Red Box with Name */}
            <div className="inline-block px-5 py-2 sm:px-6 sm:py-2.5 bg-red-600 rounded-sm shadow-[0_0_35px_rgba(239,68,68,0.4)]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-wider uppercase font-sans">
                KRISHNA.
              </h1>
            </div>

            {/* Subtitle Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-red-500/30 text-[11px] font-mono text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>AI ENGINEER &amp; SYSTEMS ARCHITECT</span>
            </div>

            {/* Mission Statement */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-lg">
              Architecting 24/7 intelligent reasoning systems, grounded multi-agent RAG pipelines, and deterministic software from first principles &mdash; zero hallucinations, verifiable execution.
            </p>

            {/* Dual CTA Buttons (Matching video: Red INITIATE DISPATCH -> and Outline EXPLORE ARCHITECTURE) */}
            <div className="flex flex-wrap gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]"
              >
                <span>INITIATE DISPATCH</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-black/60 hover:bg-white/[0.05] text-slate-300 hover:text-white border border-white/10 text-xs font-mono font-semibold tracking-wider transition-all"
              >
                <span>EXPLORE ARCHITECTURE</span>
              </Link>
            </div>

            {/* Stat Counters Row */}
            <div className="flex items-center space-x-6 pt-4 font-mono border-t border-white/[0.06] w-full">
              <div>
                <div className="text-xl sm:text-2xl font-black text-red-500">510</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">QA Suites</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">7-Layer</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Core Stack</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-xl sm:text-2xl font-black text-red-400">9.05</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Shoolini CGPA</div>
              </div>
            </div>

          </div>

          {/* Center Column: Portrait / Neural Avatar Card (Matching video red box frame) */}
          <div className="lg:col-span-3 flex justify-center py-4">
            <div className="relative group w-full max-w-[280px]">
              
              {/* Outer Red Ambient Halo */}
              <div className="absolute -inset-1 bg-red-600/30 blur-xl rounded-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Main Red Frame */}
              <div className="relative rounded-xl border-2 border-red-500 bg-[#08080d] p-3 shadow-2xl space-y-3">
                
                {/* Visual Avatar / Photo Slot */}
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-t from-red-950/40 via-slate-900 to-black border border-white/10 flex flex-col items-center justify-center p-4 text-center">
                  
                  {/* Procedural Stylized Monogram */}
                  <div className="w-24 h-24 rounded-2xl bg-red-600/20 border border-red-500/50 flex items-center justify-center font-mono font-black text-4xl text-white shadow-[0_0_25px_rgba(239,68,68,0.3)]">
                    KK
                  </div>

                  <div className="mt-4 space-y-0.5">
                    <div className="text-sm font-bold text-white uppercase tracking-wider">Krishna Kaushik</div>
                    <div className="text-[11px] font-mono text-red-400">CSE (Artificial Intelligence)</div>
                    <div className="text-[10px] font-mono text-slate-400">Shoolini University &bull; India</div>
                  </div>

                  {/* Corner Target Markers */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-red-500" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-red-500" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-red-500" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-red-500" />
                </div>

                {/* Status Bar */}
                <div className="px-2 py-1 rounded bg-black/60 border border-white/[0.08] text-center">
                  <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest font-semibold flex items-center justify-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                    <span>SOVEREIGN INTELLIGENCE ACTIVE</span>
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Featured Projects Numbered Feed (Matching video's right feed) */}
          <div className="lg:col-span-4 space-y-3 font-mono">
            
            {/* Feed Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <span className="text-xs uppercase tracking-wider text-slate-400">FLAGSHIP DIRECTORY</span>
              <span className="text-[10px] text-red-400">SYS_V2026.1</span>
            </div>

            {/* 01. CampusOS AI */}
            <Link
              href="/projects/campusos-ai"
              className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-red-500/40 block transition-all group"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="text-red-400 font-bold">01.</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/10 text-red-300 border border-red-500/20">FLAGSHIP</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                CampusOS AI
              </h4>
              <p className="text-[11px] text-slate-400 leading-normal mt-0.5 font-sans">
                Next.js &bull; FastAPI &bull; Supabase pgvector &bull; Gemini RAG
              </p>
            </Link>

            {/* 02. CivicLens */}
            <Link
              href="/projects/civiclens"
              className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-red-500/40 block transition-all group"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="text-red-400 font-bold">02.</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">100/100 TESTS</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                CivicLens Municipal Platform
              </h4>
              <p className="text-[11px] text-slate-400 leading-normal mt-0.5 font-sans">
                PostGIS ST_DWithin &bull; Gemini 2.5 Flash Vision &bull; 6-Factor Scoring
              </p>
            </Link>

            {/* 03. Gyanix */}
            <Link
              href="/projects/gyanix"
              className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-red-500/40 block transition-all group"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="text-red-400 font-bold">03.</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">PILOT</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                Gyanix Socratic Dataset
              </h4>
              <p className="text-[11px] text-slate-400 leading-normal mt-0.5 font-sans">
                CBSE 12 Physics &bull; 41 State Transitions &bull; 0 Schema Errors
              </p>
            </Link>

            {/* Quick Terminal & Resume Row */}
            <div className="pt-2 flex items-center justify-between text-xs">
              <a
                href="#terminal"
                className="text-slate-400 hover:text-white flex items-center space-x-1"
              >
                <Terminal className="w-3.5 h-3.5 text-red-500" />
                <span>Launch CLI</span>
              </a>
              <a
                href="/Krishna_Kaushik_Resume.pdf"
                download
                className="text-red-400 hover:text-red-300 flex items-center space-x-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume (PDF)</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
