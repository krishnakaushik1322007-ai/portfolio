'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  FileText, 
  Compass, 
  Play, 
  Map, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Terminal,
  Activity
} from 'lucide-react';
import { useTour } from '@/context/TourContext';
import NeuralCanvas from './NeuralCanvas';

export default function Hero() {
  const { toggleAutoTour, setIsFloorPlanOpen, nextStation } = useTour();

  return (
    <section id="foyer" className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#07090e]">
      {/* Background Neural Canvas */}
      <NeuralCanvas />

      {/* Luxury Champagne Gold Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#e5b061]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/8 blur-[160px] rounded-full pointer-events-none" />

      {/* Giant Hollow Background Outline Heading "ATELIER" / "ESTATE" */}
      <div 
        className="absolute top-12 left-1/2 -translate-x-1/2 text-[14vw] sm:text-[16vw] font-black tracking-widest text-outline-hollow pointer-events-none select-none z-0 opacity-40 leading-none whitespace-nowrap"
        aria-hidden="true"
      >
        FACILITY
      </div>

      {/* Architectural Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none" />

      {/* Luxury Gold Vertical Margin Guide */}
      <div className="vertical-accent-line hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 md:pl-12 w-full space-y-8">
        
        {/* Station Identification Header */}
        <div className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-full bg-[#e5b061]/10 border border-[#e5b061]/30 text-xs font-mono text-[#e5b061]">
          <span className="w-2 h-2 rounded-full bg-[#e5b061] animate-ping" />
          <span>STATION 01 // THE GRAND FOYER &bull; EXECUTIVE RECEPTION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Editorial Presentation */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="text-xl sm:text-2xl font-serif italic text-slate-300 font-light tracking-wide">
                Welcome to the Engineering Estate &bull; You are meeting
              </div>
              
              {/* Massive Name in Luxury Gold Styling */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase">
                KRISHNA <span className="text-gradient-gold">KAUSHIK</span>
              </h1>
            </div>

            {/* Subtitle Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-[#e5b061]/30 text-xs font-mono text-[#e5b061]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AI ENGINEER &bull; SYSTEMS ARCHITECT &bull; CSE (AI) UNDERGRADUATE</span>
            </div>

            {/* Tour Docent Welcome Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              &ldquo;Architecting 24/7 autonomous cognitive systems, grounded multi-agent RAG pipelines, and deterministic software from first principles &mdash; zero hallucinations, verifiable execution.&rdquo;
            </p>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-[#e5b061]/20 font-mono text-xs text-slate-400 space-y-1">
              <div className="text-[#e5b061] font-bold text-[11px] uppercase tracking-wider flex items-center space-x-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>TOUR GUIDE INTRODUCTION // ESTATE DOCENT</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs">
                Welcome to my interactive campus tour. As you walk through these 7 architectural stations, you will inspect my flagship institutional AI platform (CampusOS AI), geospatial vision observatory (CivicLens), Socratic cognitive pavilion (Gyanix), and embedded C++ rule foundry (ZENETH).
              </p>
            </div>

            {/* Tour Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={toggleAutoTour}
                className="px-6 py-3.5 rounded-xl bg-[#e5b061] hover:bg-[#d49539] text-[#07090e] font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(229,176,97,0.4)] flex items-center space-x-2"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Begin Guided Tour</span>
              </button>

              <button
                onClick={() => setIsFloorPlanOpen(true)}
                className="px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-[#e5b061]/30 font-mono text-xs font-semibold tracking-wider transition-all flex items-center space-x-2"
              >
                <Map className="w-3.5 h-3.5 text-[#e5b061]" />
                <span>Estate Blueprint Map</span>
              </button>

              <a
                href="/Krishna_Kaushik_Resume.pdf"
                download
                className="px-5 py-3.5 rounded-xl bg-black/60 hover:bg-white/[0.05] text-slate-300 hover:text-white border border-white/10 font-mono text-xs font-semibold tracking-wider transition-all flex items-center space-x-2"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Core Telemetry Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.08] max-w-lg font-mono">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-[#e5b061]/20">
                <div className="text-2xl sm:text-3xl font-black text-[#e5b061]">9.05</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Shoolini CGPA</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-emerald-500/20">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">510</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">CampusOS Tests</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-sky-500/20">
                <div className="text-2xl sm:text-3xl font-black text-sky-400">7-Layer</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">Core Stack</div>
              </div>
            </div>

          </div>

          {/* Right Column: Krishna Kaushik Studio Portrait in Luxury Architectural Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              
              {/* Outer Champagne Gold Ambient Halo */}
              <div className="absolute -inset-2 bg-[#e5b061]/20 blur-2xl rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Main Luxury Architectural Frame */}
              <div className="relative rounded-2xl border-2 border-[#e5b061]/50 bg-[#0a0e18] p-4 shadow-2xl space-y-4">
                
                {/* Visual Avatar: Real High-Res Studio Portrait */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-950 border border-white/10 group/img">
                  <img
                    src="/krishna_kaushik.jpg"
                    alt="Krishna Kaushik - AI Engineer & CSE (Artificial Intelligence) Scholar"
                    className="w-full h-full object-cover object-top filter contrast-105 brightness-95 group-hover/img:scale-105 transition-all duration-700"
                  />

                  {/* Gradient Overlay for luxury tone */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-transparent opacity-85 pointer-events-none" />

                  {/* Corner Target Markers */}
                  <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#e5b061]" />
                  <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#e5b061]" />
                  <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#e5b061]" />
                  <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#e5b061]" />

                  {/* Identification Tag */}
                  <div className="absolute bottom-3 left-3 right-3 text-center pointer-events-none">
                    <div className="text-sm font-black text-white uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      KRISHNA KAUSHIK
                    </div>
                    <div className="text-[11px] font-mono text-[#e5b061] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      Shoolini University &bull; 9.05 / 10 CGPA
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/[0.08] text-center font-mono">
                  <span className="text-[10px] text-[#e5b061] uppercase tracking-widest font-semibold flex items-center justify-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>SOVEREIGN FACILITY ACTIVE &bull; STOP 01 OF 07</span>
                  </span>
                </div>

                {/* Next Station Shortcut */}
                <button
                  onClick={nextStation}
                  className="w-full py-2.5 rounded-lg bg-[#e5b061]/10 hover:bg-[#e5b061] text-[#e5b061] hover:text-[#07090e] border border-[#e5b061]/30 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
                >
                  <span>Step into Station 02: CampusOS AI Lab</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
