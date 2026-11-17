'use client';

import React from 'react';
import { 
  Briefcase, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Info, 
  Cpu, 
  Database, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import { useJourney } from '@/context/JourneyContext';

export default function Chapter05Experience() {
  const { goToChapter, playCinematicChime } = useJourney();

  return (
    <section 
      id="experience"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-28 sm:py-36 border-b border-white/[0.06] overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto w-full space-y-12 z-10">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#10b981]/40 bg-[#10b981]/10 text-[#10b981] font-mono text-xs uppercase tracking-widest mb-3">
              <Briefcase className="w-3.5 h-3.5 animate-pulse" />
              <span>CHAPTER 05 // THE PROFESSIONAL JOURNEY &bull; THEME: EXPANDING TECHNICAL HORIZONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
              Expanding Technical <span className="italic font-normal text-gradient-emerald">Horizons.</span>
            </h2>
            <p className="mt-2 text-slate-300 font-sans text-sm sm:text-base max-w-2xl">
              Cross-disciplinary industry training combining hardware-software interfaces, statistical data pipelines, and nanoscale materials.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#10b981]/40 bg-[#0a1714] shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col items-center justify-center text-center shrink-0 min-w-[180px]">
            <span className="text-[10px] font-mono text-[#10b981] uppercase tracking-wider">STRUCTURED PROGRAMME</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 mt-0.5">
              9 Months
            </div>
            <span className="text-[10px] font-mono text-emerald-300 mt-1">
              3 Structured Quarters
            </span>
          </div>
        </div>

        {/* Narrative Programme Showcase Card */}
        <div className="p-6 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-8">
          
          <div className="border-b border-white/[0.08] pb-6 space-y-2">
            <span className="text-[11px] font-mono text-[#10b981] uppercase tracking-wider block">
              COLLABORATIVE TECHNICAL APPRENTICESHIP
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-slate-100 font-normal">
              Corizo &ndash; Internship Programme
            </h3>
            <p className="text-sm font-sans text-amber-200/90 font-medium">
              In academic collaboration with IIT Bombay
            </p>

            {/* Mandatory Accurate Attribution Disclaimer */}
            <div className="mt-3 p-4 rounded-lg bg-[#0c1424] border border-[#38bdf8]/20 text-xs text-slate-300 font-sans flex items-start space-x-3">
              <Info className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
              <p>
                <strong>Attribution Note:</strong> This experience represents an online technical internship training programme organized by Corizo in academic collaboration with IIT Bombay. Krishna Kaushik is participating as an intern/trainee in this collaborative programme and is not an employee of IIT Bombay.
              </p>
            </div>
          </div>

          {/* 3 Sequential Stages */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Sequential Module Timeline &amp; Progress:
            </span>

            {/* STAGE 01: ONGOING */}
            <div className="p-6 rounded-xl border border-[#10b981]/50 bg-[#091714]/80 shadow-[0_0_20px_rgba(16,185,129,0.12)] space-y-3 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 rounded-full bg-[#10b981] animate-ping" />
                  <h4 className="font-mono text-sm sm:text-base font-semibold text-slate-100">
                    STAGE 01 &mdash; IoT and Robotics (3 Months)
                  </h4>
                </div>
                <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-[#10b981]/25 text-[#10b981] border border-[#10b981]/50">
                  CURRENTLY ONGOING
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Currently active module exploring microcontroller architectures, sensor integration, real-time telemetry processing, hardware-software interfacing protocols, and robotics kinematics.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {['Microcontroller Architectures', 'Sensor Telemetry', 'Embedded Systems', 'Robotics Kinematics'].map(t => (
                  <span key={t} className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-black/40 text-emerald-300 border border-emerald-500/25">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* STAGE 02: UPCOMING */}
            <div className="p-6 rounded-xl border border-white/[0.08] bg-[#070b16]/50 space-y-3 opacity-80">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <h4 className="font-mono text-sm sm:text-base font-semibold text-slate-300">
                    STAGE 02 &mdash; Data Science (3 Months)
                  </h4>
                </div>
                <span className="px-3 py-1 rounded text-xs font-mono bg-white/[0.05] text-slate-400 border border-white/[0.1]">
                  STATUS: UPCOMING
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                Scheduled second module concentrating on statistical data analysis, exploratory data cleaning pipelines, predictive modeling, and applied machine learning methodologies.
              </p>
            </div>

            {/* STAGE 03: UPCOMING */}
            <div className="p-6 rounded-xl border border-white/[0.08] bg-[#070b16]/50 space-y-3 opacity-80">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <h4 className="font-mono text-sm sm:text-base font-semibold text-slate-300">
                    STAGE 03 &mdash; Nanotechnology (3 Months)
                  </h4>
                </div>
                <span className="px-3 py-1 rounded text-xs font-mono bg-white/[0.05] text-slate-400 border border-white/[0.1]">
                  STATUS: UPCOMING
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                Scheduled concluding module focusing on nanoscale material properties, quantum structural properties, and nanoscale engineering applications.
              </p>
            </div>

          </div>

          {/* Continue Prompt to Chapter 06 */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
            <div className="text-xs font-mono text-slate-400 flex items-center space-x-2">
              <Info className="w-3.5 h-3.5 text-[#e5b061]" />
              <span>Next up: Chapter 06 &mdash; Competitive Hackathon Milestones</span>
            </div>

            <button
              onClick={() => {
                goToChapter(5);
                playCinematicChime(600);
              }}
              className="px-6 py-2.5 rounded-xl bg-[#10b981] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#34d399] transition-all flex items-center space-x-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span>CONTINUE TO CHAPTER 06</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
