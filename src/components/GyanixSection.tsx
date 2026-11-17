'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  BrainCircuit, 
  CheckCircle, 
  ExternalLink, 
  Compass, 
  Sparkles, 
  GraduationCap, 
  Info, 
  MessageSquare, 
  CheckCircle2, 
  ChevronRight,
  Database,
  ArrowRight
} from 'lucide-react';
import { useTour } from '@/context/TourContext';

export default function GyanixSection() {
  const { playTourChime, setIsFloorPlanOpen } = useTour();
  const [activeStep, setActiveStep] = useState<number>(0);

  const dialogueSteps = [
    {
      speaker: 'student',
      label: 'Student Query (Misconception)',
      text: 'If electron drift velocity in copper is barely a few millimeters per second (v_d ≈ 10⁻⁴ m/s), why does a light bulb 10 meters away turn on immediately when I flip the wall switch?',
      note: 'Common CBSE Class 12 physics trap: Confusing individual carrier drift speed with electromagnetic field wavefront propagation.'
    },
    {
      speaker: 'gyanix',
      label: 'Gyanix Socratic Scaffolding (State 14: Diagnostic Inquiry)',
      text: 'Consider a garden hose already filled with water from end to end. When you turn on the tap at one end, do you have to wait for a water molecule from the tap to travel all the way to the nozzle before water flows out?',
      note: 'Pedagogical rule: Refuse direct formula spoon-feeding. Trigger analogy-driven conceptual dissonance to diagnose mental model.'
    },
    {
      speaker: 'student',
      label: 'Student Discovery (Cognitive Realignment)',
      text: 'No! The water was already inside the entire pipe, so pushing at one end immediately pushes water out of the nozzle. So the electric field pushes all free electrons simultaneously across the entire circuit!',
      note: 'Student achieves autonomous breakthrough. No rote memorization required.'
    },
    {
      speaker: 'gyanix',
      label: 'Gyanix Validation & NCERT Mathematical Synthesis (State 28)',
      text: 'Exactly. The electric field propagates at ~10⁸ m/s, exerting force on conduction electrons throughout the wire simultaneously. Individual electrons drift sluggishly, but the collective current is given by I = n·A·e·v_d, where free electron density n in copper is immense (~8.5 × 10²⁸ m⁻³).',
      note: 'Grounded in CBSE 2026-27 Physics Chapter 3: Current Electricity, Section 3.4.'
    }
  ];

  return (
    <section 
      id="gyanix" 
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-[#e5b061]/15 bg-[#05070c] overflow-hidden"
    >
      {/* Blueprint Grid Watermark */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#e5b061]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-12">
        {/* Station Architectural Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e5b061]/20 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded border border-[#e5b061]/30 bg-[#e5b061]/10 text-[#e5b061] font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e5b061] animate-pulse" />
              <span>STATION 04 // SOCRATIC LEARNING PAVILION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
              Gyanix <span className="italic font-normal text-gradient-gold">Pedagogical Intelligence</span>
            </h2>
            <p className="mt-2 text-slate-400 font-sans text-sm sm:text-base max-w-2xl">
              Curriculum-aware Socratic learning assistant grounded in CBSE/NCERT Class 12 standards. Replacing generic chatbot hallucinations with multi-turn cognitive state tracking.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFloorPlanOpen(true)}
              className="px-3.5 py-2 rounded border border-[#e5b061]/30 bg-[#e5b061]/5 hover:bg-[#e5b061]/15 text-[#e5b061] font-mono text-xs tracking-wider flex items-center space-x-1.5 transition-all"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>STATION 04 OF 07</span>
            </button>
            <a
              href="https://github.com/krishnakaushik1322007-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded border border-[#e5b061]/40 bg-[#e5b061]/10 hover:bg-[#e5b061]/20 text-[#e5b061] font-mono text-xs font-semibold tracking-wider flex items-center space-x-2 transition-all shadow-[0_0_15px_rgba(229,176,97,0.15)]"
            >
              <Database className="w-3.5 h-3.5" />
              <span>DATASET ENGINE</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Docent Curatorial Plaque */}
        <div className="p-4 sm:p-5 rounded-lg border border-[#e5b061]/25 bg-[#0e0c09]/80 backdrop-blur-md flex items-start gap-4">
          <div className="w-8 h-8 rounded-full border border-[#e5b061]/40 bg-[#e5b061]/15 flex items-center justify-center shrink-0 text-[#e5b061]">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            <span className="font-mono text-[#e5b061] uppercase tracking-wider font-semibold mr-2">[Docent Commentary]</span>
            Standard LLMs are answer dispensers that bypass pedagogical diagnosis. Gyanix was engineered as a curriculum-grounded Socratic state engine for <strong>CBSE Class 12 Physics</strong>: mapping <strong>41 verified state transitions</strong>, indexing every formula directly to NCERT curriculum codes, and enforcing zero schema validation errors across complex entity graphs.
          </div>
        </div>

        {/* 4 Verified Metric Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded border border-[#e5b061]/20 bg-[#0c1017] flex flex-col justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Curriculum Grounding</span>
            <div className="mt-2 text-2xl sm:text-3xl font-serif text-[#e5b061] font-normal">CBSE 12</div>
            <span className="text-[10px] text-slate-500 font-mono mt-1">Physics: Drift Velocity &amp; Current</span>
          </div>

          <div className="p-4 rounded border border-[#e5b061]/20 bg-[#0c1017] flex flex-col justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">State Machine</span>
            <div className="mt-2 text-2xl sm:text-3xl font-serif text-[#10b981] font-normal">41 States</div>
            <span className="text-[10px] text-slate-500 font-mono mt-1">Tracked pedagogical transitions</span>
          </div>

          <div className="p-4 rounded border border-[#e5b061]/20 bg-[#0c1017] flex flex-col justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Structured Dialogues</span>
            <div className="mt-2 text-2xl sm:text-3xl font-serif text-[#e5b061] font-normal">12 Multi-Turn</div>
            <span className="text-[10px] text-slate-500 font-mono mt-1">Rigorous Socratic interactions</span>
          </div>

          <div className="p-4 rounded border border-[#e5b061]/20 bg-[#0c1017] flex flex-col justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Schema Integrity</span>
            <div className="mt-2 text-2xl sm:text-3xl font-serif text-[#10b981] font-normal">0 Errors</div>
            <span className="text-[10px] text-slate-500 font-mono mt-1">Automated cross-validation pass</span>
          </div>
        </div>

        {/* Interactive Socratic Dialogue Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Wing: Multi-Turn Dialogue Step Player */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-xl border border-[#e5b061]/25 bg-[#090d14]/90 backdrop-blur-md shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center space-x-2">
                  <BrainCircuit className="w-4 h-4 text-[#e5b061]" />
                  <h3 className="font-mono text-sm uppercase tracking-wider text-slate-200">
                    Socratic State Traversal (Turn {activeStep + 1} of 4)
                  </h3>
                </div>
                
                {/* Step indicators */}
                <div className="flex gap-1.5">
                  {dialogueSteps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveStep(idx);
                        playTourChime(500 + idx * 80);
                      }}
                      className={`w-7 h-7 rounded text-xs font-mono transition-all flex items-center justify-center ${
                        activeStep === idx
                          ? 'bg-[#e5b061] text-black font-bold shadow-[0_0_10px_rgba(229,176,97,0.4)]'
                          : idx < activeStep
                          ? 'bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/40'
                          : 'bg-white/[0.04] text-slate-400 border border-white/[0.08] hover:text-white'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Dialogue Bubble */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider ${
                    dialogueSteps[activeStep].speaker === 'student'
                      ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                      : 'bg-[#e5b061]/15 border-[#e5b061]/40 text-[#e5b061]'
                  }`}>
                    {dialogueSteps[activeStep].label}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    Syllabus: CBSE-PHY-12-CH03
                  </span>
                </div>

                <div className={`p-4 rounded-lg border text-sm sm:text-base leading-relaxed font-sans ${
                  dialogueSteps[activeStep].speaker === 'student'
                    ? 'bg-[#0b141f] border-cyan-500/20 text-slate-200'
                    : 'bg-[#16120b] border-[#e5b061]/30 text-amber-100/90 shadow-[0_0_20px_rgba(229,176,97,0.05)]'
                }`}>
                  &ldquo;{dialogueSteps[activeStep].text}&rdquo;
                </div>

                {/* Pedagogical Commentary for Turn */}
                <div className="p-3.5 rounded bg-black/40 border border-white/[0.06] text-xs font-sans text-slate-400 space-y-1">
                  <span className="text-[10px] font-mono text-[#10b981] uppercase tracking-wider font-semibold block">
                    Pedagogical Diagnostic Rationale:
                  </span>
                  <p>{dialogueSteps[activeStep].note}</p>
                </div>
              </div>

              {/* Traversal Controls */}
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                <button
                  disabled={activeStep === 0}
                  onClick={() => {
                    setActiveStep(prev => Math.max(0, prev - 1));
                    playTourChime(450);
                  }}
                  className="px-3 py-1.5 rounded border border-white/[0.1] text-xs font-mono text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  &larr; PREVIOUS TURN
                </button>

                <button
                  disabled={activeStep === dialogueSteps.length - 1}
                  onClick={() => {
                    setActiveStep(prev => Math.min(dialogueSteps.length - 1, prev + 1));
                    playTourChime(600);
                  }}
                  className="px-4 py-1.5 rounded bg-[#e5b061] text-black font-mono text-xs font-bold hover:bg-[#d49e4d] transition-all flex items-center space-x-1.5 disabled:opacity-30 disabled:pointer-events-none shadow-[0_0_15px_rgba(229,176,97,0.3)]"
                >
                  <span>ADVANCE STATE</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

          {/* Right Wing: Curriculum Schema & Provenance Graph */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-xl border border-[#e5b061]/25 bg-[#090d14]/90 backdrop-blur-md shadow-2xl space-y-5">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#e5b061] uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-[#e5b061]" />
                <span>NCERT Curriculum Provenance Hierarchy</span>
              </div>

              {/* Structured JSON-Schema Hierarchy representation */}
              <div className="space-y-2 text-xs font-mono">
                <div className="p-3 rounded bg-black/60 border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                    <span className="text-slate-300">Unit: Current Electricity</span>
                  </div>
                  <span className="text-[10px] text-slate-500">CBSE-PHY-12-U02</span>
                </div>

                <div className="p-3 rounded bg-black/60 border border-white/[0.06] flex items-center justify-between pl-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e5b061]" />
                    <span className="text-slate-300">Topic: Drift of Electrons &amp; Origin</span>
                  </div>
                  <span className="text-[10px] text-[#e5b061]">NCERT Sec 3.4</span>
                </div>

                <div className="p-3 rounded bg-black/60 border border-white/[0.06] flex items-center justify-between pl-10">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-slate-300">Concept: Mobility &amp; Ohm&apos;s Relation</span>
                  </div>
                  <span className="text-[10px] text-cyan-400">I = n·A·e·v_d</span>
                </div>
              </div>

              {/* Zero Hallucination Guardrail Guarantee */}
              <div className="p-4 rounded-lg bg-[#0e1610] border border-[#10b981]/30 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#10b981] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                  <span>Deterministic Pedagogy Guardrail</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Every entity in Gyanix contains bidirectional links: <code className="text-[#10b981] font-mono">prerequisites</code>, <code className="text-[#e5b061] font-mono">misconceptions</code>, and <code className="text-cyan-400 font-mono">diagnostic_questions</code>. Automated CI tests enforce zero dangling nodes and zero unverified assertions.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
