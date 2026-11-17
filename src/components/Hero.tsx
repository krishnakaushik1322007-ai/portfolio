'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  ChevronRight,
  RotateCcw,
  Volume2,
  VolumeX,
  FastForward,
  CheckCircle2,
  Activity,
  Zap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import NeuralCanvas from './NeuralCanvas';

export default function Hero() {
  // Agent Live Development States
  const [isBuilding, setIsBuilding] = useState<boolean>(true);
  const [buildStep, setBuildStep] = useState<number>(0);
  const [typedScript, setTypedScript] = useState<string>('');
  const [typedName, setTypedName] = useState<string>('');
  const [typedRole, setTypedRole] = useState<string>('');
  const [typedBio, setTypedBio] = useState<string>('');
  const [isPhotoScanned, setIsPhotoScanned] = useState<boolean>(false);
  const [statQA, setStatQA] = useState<number>(0);
  const [statCGPA, setStatCGPA] = useState<number>(0);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [agentActionText, setAgentActionText] = useState<string>('Initializing autonomous developer session...');

  const fullScript = "Hello, I'm";
  const fullName = "KRISHNA.";
  const fullRole = "AI ENGINEER & SYSTEMS ARCHITECT";
  const fullBio = "Architecting 24/7 intelligent reasoning systems, grounded multi-agent RAG pipelines, and deterministic software from first principles — zero hallucinations, verifiable execution.";

  // Web Audio Synthesizer for tactile typing sound
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playClickSound = useCallback((freq = 700, duration = 0.03) => {
    if (!audioEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 60, ctx.currentTime);
      gain.gain.setValueAtTime(0.025, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio unsupported or silenced
    }
  }, [audioEnabled]);

  // Restart Agent Development from Scratch
  const restartAgentDev = useCallback(() => {
    setIsBuilding(true);
    setBuildStep(0);
    setTypedScript('');
    setTypedName('');
    setTypedRole('');
    setTypedBio('');
    setIsPhotoScanned(false);
    setStatQA(0);
    setStatCGPA(0);
    setAgentActionText('Synthesizing codebase from scratch for Krishna Kaushik...');
  }, []);

  // Skip to Final State
  const skipToFinal = useCallback(() => {
    setIsBuilding(false);
    setBuildStep(8);
    setTypedScript(fullScript);
    setTypedName(fullName);
    setTypedRole(fullRole);
    setTypedBio(fullBio);
    setIsPhotoScanned(true);
    setStatQA(510);
    setStatCGPA(9.05);
    setAgentActionText('Codebase compiled & verified. 510 QA suites passing.');
  }, [fullScript, fullName, fullRole, fullBio]);

  // The Autonomous Agent Development Sequence Loop
  useEffect(() => {
    if (!isBuilding) return;

    let timeoutId: NodeJS.Timeout;

    // STEP 0: Agent writes Script text "Hello, I'm"
    if (buildStep === 0) {
      setAgentActionText('Agent: Writing greeting & script typography in src/components/Hero.tsx...');
      let charIdx = 0;
      const scriptInterval = setInterval(() => {
        if (charIdx <= fullScript.length) {
          setTypedScript(fullScript.slice(0, charIdx));
          playClickSound(650 + charIdx * 20);
          charIdx++;
        } else {
          clearInterval(scriptInterval);
          timeoutId = setTimeout(() => setBuildStep(1), 200);
        }
      }, 45);
      return () => {
        clearInterval(scriptInterval);
        clearTimeout(timeoutId);
      };
    }

    // STEP 1: Agent writes and stamps solid red name block "KRISHNA."
    if (buildStep === 1) {
      setAgentActionText('Agent: Injecting high-impact identity block [KRISHNA.] into DOM...');
      let charIdx = 0;
      const nameInterval = setInterval(() => {
        if (charIdx <= fullName.length) {
          setTypedName(fullName.slice(0, charIdx));
          playClickSound(800 + charIdx * 30, 0.04);
          charIdx++;
        } else {
          clearInterval(nameInterval);
          timeoutId = setTimeout(() => setBuildStep(2), 250);
        }
      }, 55);
      return () => {
        clearInterval(nameInterval);
        clearTimeout(timeoutId);
      };
    }

    // STEP 2: Agent writes subtitle pill
    if (buildStep === 2) {
      setAgentActionText('Agent: Declaring professional identity [AI ENGINEER & SYSTEMS ARCHITECT]...');
      let charIdx = 0;
      const roleInterval = setInterval(() => {
        if (charIdx <= fullRole.length) {
          setTypedRole(fullRole.slice(0, charIdx));
          playClickSound(700 + charIdx * 10);
          charIdx++;
        } else {
          clearInterval(roleInterval);
          timeoutId = setTimeout(() => setBuildStep(3), 200);
        }
      }, 25);
      return () => {
        clearInterval(roleInterval);
        clearTimeout(timeoutId);
      };
    }

    // STEP 3: Agent writes mission statement character by character
    if (buildStep === 3) {
      setAgentActionText('Agent: Drafting engineering philosophy & zero-hallucination manifesto...');
      let charIdx = 0;
      const bioInterval = setInterval(() => {
        if (charIdx <= fullBio.length) {
          setTypedBio(fullBio.slice(0, charIdx));
          if (charIdx % 3 === 0) playClickSound(550 + (charIdx % 30) * 12);
          charIdx += 2;
        } else {
          setTypedBio(fullBio);
          clearInterval(bioInterval);
          timeoutId = setTimeout(() => setBuildStep(4), 300);
        }
      }, 20);
      return () => {
        clearInterval(bioInterval);
        clearTimeout(timeoutId);
      };
    }

    // STEP 4: Agent mounts Krishna's real photo with facial scan sweep
    if (buildStep === 4) {
      setAgentActionText('Agent: Ingesting verified 1024x1024 high-res portrait (krishna_kaushik.jpg)...');
      timeoutId = setTimeout(() => {
        setIsPhotoScanned(true);
        playClickSound(950, 0.1);
        setBuildStep(5);
      }, 600);
      return () => clearTimeout(timeoutId);
    }

    // STEP 5: Agent increments stat counters (510 QA suites, 9.05 CGPA)
    if (buildStep === 5) {
      setAgentActionText('Agent: Verifying academic transcript (9.05 CGPA) & 510 automated test suites...');
      let qaCount = 0;
      let cgpaCount = 0;
      const statInterval = setInterval(() => {
        qaCount = Math.min(510, qaCount + 34);
        cgpaCount = Math.min(9.05, Number((cgpaCount + 0.6).toFixed(2)));
        setStatQA(qaCount);
        setStatCGPA(cgpaCount);
        playClickSound(600 + (qaCount % 100) * 5);

        if (qaCount >= 510 && cgpaCount >= 9.05) {
          clearInterval(statInterval);
          timeoutId = setTimeout(() => setBuildStep(6), 300);
        }
      }, 40);
      return () => {
        clearInterval(statInterval);
        clearTimeout(timeoutId);
      };
    }

    // STEP 6: Agent mounts flagship directory feed cards
    if (buildStep === 6) {
      setAgentActionText('Agent: Compiling Flagship Directory (CampusOS AI, CivicLens, Gyanix)...');
      timeoutId = setTimeout(() => {
        playClickSound(1100, 0.1);
        setBuildStep(7);
      }, 400);
      return () => clearTimeout(timeoutId);
    }

    // STEP 7: Completed
    if (buildStep === 7) {
      setAgentActionText('✓ Portfolio fully generated, compiled and verified from scratch by Autonomous Agent.');
      playClickSound(1250, 0.2);
      setIsBuilding(false);
      setBuildStep(8);
    }

  }, [buildStep, isBuilding, fullScript, fullName, fullRole, fullBio, playClickSound]);

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6">
        
        {/* TOP AGENT DEVELOPER BAR: Shows Agent Actively Developing the Portfolio */}
        <div className="max-w-4xl mx-auto p-2.5 sm:p-3 rounded-xl bg-[#09090f]/90 border border-white/10 backdrop-blur-xl shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
          
          <div className="flex items-center space-x-2.5 truncate">
            <span className={`w-2.5 h-2.5 rounded-full ${isBuilding ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`} />
            <span className="text-red-400 font-bold uppercase tracking-wider text-[11px] whitespace-nowrap">
              {isBuilding ? 'AGENT WRITING PORTFOLIO' : 'AGENT BUILD VERIFIED'}
            </span>
            <span className="text-slate-600 hidden sm:inline">&bull;</span>
            <span className="text-slate-300 text-[11px] truncate">
              {agentActionText}
            </span>
          </div>

          <div className="flex items-center space-x-2 shrink-0 self-end sm:self-auto">
            {isBuilding ? (
              <button
                onClick={skipToFinal}
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-[10px] font-bold flex items-center space-x-1 transition-colors"
                title="Skip to final view"
              >
                <FastForward className="w-3 h-3 text-amber-400" />
                <span>Skip</span>
              </button>
            ) : (
              <button
                onClick={restartAgentDev}
                className="px-2.5 py-1 rounded bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/30 text-[10px] font-bold flex items-center space-x-1 transition-all shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                title="Watch agent develop from scratch"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Replay Agent Dev</span>
              </button>
            )}

            <button
              onClick={() => setAudioEnabled(!audioEnabled)}
              className="p-1.5 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title={audioEnabled ? 'Mute Mechanical Typing Audio' : 'Enable Mechanical Typing Audio'}
            >
              {audioEnabled ? <Volume2 className="w-3.5 h-3.5 text-red-400" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

        {/* Main Grid: Left Column, Center Real Photo, Right Flagship Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          {/* Left Column: Hello, I'm KRISHNA. + Bio + CTA */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-5">
            
            {/* Script Text typed by agent */}
            <div className="text-xl sm:text-2xl font-serif italic text-slate-300 font-light tracking-wide min-h-[32px] flex items-center">
              <span>{typedScript}</span>
              {buildStep === 0 && (
                <span className="inline-block w-1.5 h-5 ml-1 bg-red-400 animate-pulse" />
              )}
            </div>

            {/* High-Impact Solid Red Box with Name stamped by agent */}
            <div className="inline-block px-5 py-2 sm:px-6 sm:py-2.5 bg-red-600 rounded-sm shadow-[0_0_35px_rgba(239,68,68,0.4)] min-h-[58px] sm:min-h-[66px] flex items-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-wider uppercase font-sans">
                {typedName}
                {buildStep === 1 && (
                  <span className="inline-block w-2 h-8 ml-1 bg-white animate-pulse" />
                )}
              </h1>
            </div>

            {/* Subtitle Pill typed by agent */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-red-500/30 text-[11px] font-mono text-red-400 min-h-[30px]">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>{typedRole}</span>
              {buildStep === 2 && (
                <span className="inline-block w-1.5 h-3.5 ml-1 bg-red-400 animate-pulse" />
              )}
            </div>

            {/* Mission Statement typed character by character by agent */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-lg min-h-[72px]">
              {typedBio}
              {buildStep === 3 && (
                <span className="inline-block w-1.5 h-4 ml-1 bg-[#00F0FF] animate-pulse align-middle" />
              )}
            </p>

            {/* Dual CTA Buttons */}
            <div className={`flex flex-wrap gap-3 pt-2 w-full sm:w-auto transition-opacity duration-300 ${buildStep >= 4 ? 'opacity-100' : 'opacity-20'}`}>
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]"
              >
                <span>INITIATE DISPATCH</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#live-builder"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-black/60 hover:bg-white/[0.05] text-slate-300 hover:text-white border border-white/10 text-xs font-mono font-semibold tracking-wider transition-all"
              >
                <span>WATCH LIVE BUILDER</span>
              </a>
            </div>

            {/* Stat Counters Row */}
            <div className="flex items-center space-x-6 pt-4 font-mono border-t border-white/[0.06] w-full">
              <div>
                <div className="text-xl sm:text-2xl font-black text-red-500">
                  {statQA}
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">QA Suites</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">7-Layer</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Core Stack</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-xl sm:text-2xl font-black text-red-400">
                  {statCGPA.toFixed(2)}
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Shoolini CGPA</div>
              </div>
            </div>

          </div>

          {/* Center Column: Krishna Kaushik's Real High-Res Studio Portrait */}
          <div className="lg:col-span-3 flex justify-center py-4">
            <div className="relative group w-full max-w-[280px]">
              
              {/* Outer Red Ambient Halo */}
              <div className="absolute -inset-1 bg-red-600/30 blur-xl rounded-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Main Red Frame */}
              <div className="relative rounded-xl border-2 border-red-500 bg-[#08080d] p-3 shadow-2xl space-y-3">
                
                {/* Visual Avatar / Real Photo of Krishna Kaushik */}
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-slate-950 border border-white/10 group/img">
                  
                  {/* Real Photo */}
                  <img
                    src="/krishna_kaushik.jpg"
                    alt="Krishna Kaushik - AI Engineer & CSE (Artificial Intelligence) Student"
                    className={`w-full h-full object-cover object-top filter contrast-105 brightness-95 group-hover/img:scale-105 transition-all duration-700 ${
                      isPhotoScanned ? 'opacity-100 filter-none' : 'opacity-40 filter blur-[2px]'
                    }`}
                  />
                  
                  {/* Laser Scanning Line during build */}
                  {buildStep === 4 && (
                    <div className="absolute inset-x-0 top-0 h-1 bg-red-500 shadow-[0_0_15px_#ef4444] animate-pulse z-20 pointer-events-none" />
                  )}

                  {/* Subtle Gradient Overlay for editorial contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080d] via-transparent to-transparent opacity-85 pointer-events-none" />

                  {/* Corner Target Markers */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-red-500" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-red-500" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-red-500" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-red-500" />

                  {/* Identity Tag at bottom of photo */}
                  <div className="absolute bottom-3 left-2 right-2 text-center pointer-events-none">
                    <div className="text-xs font-black text-white uppercase tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      KRISHNA KAUSHIK
                    </div>
                    <div className="text-[10px] font-mono text-red-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      Shoolini University &bull; 9.05 CGPA
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="px-2 py-1 rounded bg-black/60 border border-white/[0.08] text-center font-mono">
                  <span className="text-[10px] text-red-400 uppercase tracking-widest font-semibold flex items-center justify-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                    <span>SOVEREIGN SILICON ACTIVE</span>
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Featured Projects Numbered Feed */}
          <div className={`lg:col-span-4 space-y-3 font-mono transition-opacity duration-300 ${buildStep >= 6 ? 'opacity-100' : 'opacity-30'}`}>
            
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
