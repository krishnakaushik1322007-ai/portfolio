'use client';

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Award, 
  Layers, 
  MapPin, 
  Mail, 
  Phone, 
  Check, 
  Copy, 
  RotateCcw,
  ShieldCheck,
  Terminal,
  Brain,
  Database,
  Code2,
  Cpu,
  Activity,
  Compass,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../BrandIcons';
import { useMovie } from '@/context/MovieContext';
import { soundEngine } from './CinematicSoundEngine';

export default function CinematicNarrativeOverlay() {
  const { 
    progress, 
    currentScene, 
    currentSceneIndex, 
    isPlaying,
    openProjectModal, 
    setIsCertificateModalOpen,
    seekProgress,
    replayJourney
  } = useMovie();

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [charScreenX, setCharScreenX] = useState<number>(0);

  // Monitor projected 2D screen coordinate of Krishna for dynamic Safe-Zone placement
  useEffect(() => {
    let animId: number;
    const pollSafeZone = () => {
      if (typeof window !== 'undefined') {
        const val = (window as unknown as { __krishnaScreenX?: number }).__krishnaScreenX;
        if (typeof val === 'number') {
          setCharScreenX(val);
        }
      }
      animId = requestAnimationFrame(pollSafeZone);
    };
    animId = requestAnimationFrame(pollSafeZone);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Calculate Scene-Relative progress from 0.0 to 1.0
  const sceneStart = currentScene.startProgress;
  const sceneEnd = currentScene.endProgress;
  const pRel = Math.max(0, Math.min(1, (progress - sceneStart) / (sceneEnd - sceneStart)));

  // Sound pulse triggers on key reveal moments
  useEffect(() => {
    if (pRel > 0.18 && pRel < 0.22) {
      soundEngine.playRevealPulse(480);
    } else if (pRel > 0.48 && pRel < 0.52) {
      soundEngine.playRevealPulse(620);
    } else if (pRel > 0.78 && pRel < 0.82) {
      soundEngine.playRevealPulse(740);
    }
  }, [currentSceneIndex, Math.floor(pRel * 10)]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('krishnakaushik1322007@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('+91 9650246706');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Safe-Zone Positioning: if Krishna is on left side (screenX < -0.05), place on right.
  // If Krishna is on right side (screenX > 0.05), place on left.
  const isKrishnaLeft = charScreenX < -0.05;
  const safeAlignmentClass = isKrishnaLeft ? 'justify-end' : 'justify-start';

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-between p-4 sm:p-7 md:p-9 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* TOP HUD: Minimal Scene Telemetry & Recruiter Fast Track */}
      {/* ========================================================================= */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/[0.08] bg-black/45 backdrop-blur-md text-[11px] font-mono text-[#38bdf8] uppercase tracking-widest shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-[#38bdf8] animate-pulse' : 'bg-amber-400'}`} />
            <span>SCENE 0{currentSceneIndex + 1} &bull; {currentScene.title}</span>
          </div>
          <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-400 pl-1">
            <span>TIMELINE: {(progress * 100).toFixed(1)}%</span>
            <span>&bull;</span>
            <span className="text-slate-300">{currentScene.theme}</span>
            {!isPlaying && (
              <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                PAUSED
              </span>
            )}
          </div>
        </div>

        {/* Top Right: Verified Resume PDF */}
        <div className="pointer-events-auto flex items-center space-x-2">
          <a
            href="/Krishna_Kaushik_Resume.pdf"
            download="Krishna_Kaushik_Resume.pdf"
            className="px-3.5 py-1.5 rounded-lg border border-[#38bdf8]/40 bg-[#070b16]/85 backdrop-blur-md hover:bg-[#38bdf8]/20 text-[#38bdf8] font-mono text-xs tracking-wider flex items-center space-x-1.5 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            title="Download Verified Resume PDF"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME PDF</span>
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SAFE-ZONE DYNAMIC INFORMATION SYSTEM */}
      {/* (Never obscures Krishna or scenery; dynamically floats in negative space) */}
      {/* ========================================================================= */}
      <div className="my-auto w-full max-w-6xl mx-auto pointer-events-none flex flex-col justify-end">

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 01: THE BEGINNING (p: 0.00 to 0.11) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 0 && (
          <div className="space-y-4">
            
            {/* Reveal 1: "EVERY JOURNEY BEGINS WITH CURIOSITY." in low negative sky */}
            {pRel >= 0.12 && pRel < 0.45 && (
              <div className="animate-fadeIn space-y-2 text-center max-w-2xl mx-auto">
                <span className="font-mono text-[10px] text-[#e5b061] tracking-[0.3em] uppercase block font-semibold">
                  PROLOGUE // THE HIMALAYAN DAWN
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight leading-tight">
                  &ldquo;Every Journey Begins With <br />
                  <span className="italic font-normal text-gradient-gold">Curiosity.&rdquo;</span>
                </h1>
                <p className="text-[11px] font-mono text-slate-400 max-w-md mx-auto pt-1">
                  Before the code and architectures, there was only the desire to understand.
                </p>
              </div>
            )}

            {/* Reveal 2: Identity & Title anchored cleanly in safe right negative space */}
            {pRel >= 0.45 && pRel < 0.72 && (
              <div className="animate-fadeIn flex justify-end">
                <div className="p-4 rounded-xl border border-white/[0.1] bg-[#060a16]/85 backdrop-blur-xl max-w-md shadow-2xl space-y-1 text-right">
                  <div className="inline-block px-2 py-0.5 rounded bg-cyan-500/10 text-[9px] font-mono text-cyan-300 uppercase tracking-widest border border-cyan-500/20">
                    PROTAGONIST // THE ENGINEER
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 font-medium">
                    KRISHNA KAUSHIK
                  </h2>
                  <p className="text-[11px] font-mono text-cyan-300 tracking-widest uppercase">
                    AI ENGINEER &bull; SOFTWARE DEVELOPER
                  </p>
                </div>
              </div>
            )}

            {/* Reveal 3: Forward transition into academic gateway */}
            {pRel >= 0.72 && (
              <div className="animate-fadeIn flex justify-start">
                <div className="p-3.5 rounded-xl border border-white/[0.08] bg-[#060a16]/80 backdrop-blur-md max-w-sm text-xs font-mono text-slate-300">
                  <div className="text-[#e5b061] font-bold text-[11px] mb-0.5">THE TRANSITION</div>
                  <p className="text-slate-400 text-[10px] leading-relaxed">
                    Leaving the mountain road behind. Approaching the collegiate quad...
                  </p>
                </div>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 02: THE FOUNDATION — SHOOLINI UNIVERSITY (p: 0.11 to 0.22) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 1 && (
          <div className="space-y-4">
            
            {/* Minimal Cinematic Label: SHOOLINI UNIVERSITY (Top Right) */}
            {pRel >= 0.04 && pRel < 0.35 && (
              <div className="animate-fadeIn flex justify-end">
                <div className="p-3.5 rounded-xl border border-[#e5b061]/30 bg-[#060a16]/85 backdrop-blur-md text-right space-y-0.5">
                  <span className="text-[9px] font-mono text-[#e5b061] uppercase tracking-widest block font-bold">
                    ACADEMIC INSTITUTION
                  </span>
                  <div className="text-lg font-serif text-slate-100 font-medium">
                    SHOOLINI UNIVERSITY
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    Solan, Himachal Pradesh &bull; Faculty of Engineering
                  </span>
                </div>
              </div>
            )}

            {/* Compact Lower-Third: B.Tech CSE (AI) */}
            {pRel >= 0.35 && pRel < 0.65 && (
              <div className={`animate-fadeIn flex ${safeAlignmentClass}`}>
                <div className="p-4 rounded-xl border border-cyan-500/30 bg-[#060a16]/90 backdrop-blur-xl max-w-md shadow-2xl space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-cyan-400">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>DEGREE CANDIDACY</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-serif text-slate-100 font-medium leading-snug">
                    B.Tech &ndash; Computer Science &amp; Engineering
                  </h3>
                  <div className="text-[11px] font-mono text-[#e5b061] tracking-wider uppercase">
                    SPECIALIZATION: ARTIFICIAL INTELLIGENCE
                  </div>
                  <p className="text-[10px] font-sans text-slate-400">
                    DSA, DBMS, C++ Object-Oriented Architectures, Discrete Math.
                  </p>
                </div>
              </div>
            )}

            {/* Compact Notebook Reveal: Session 2025-2029 & 9.05 CGPA */}
            {pRel >= 0.65 && (
              <div className="animate-fadeIn flex justify-end">
                <div className="p-4 rounded-xl border border-[#e5b061]/40 bg-[#060a16]/90 backdrop-blur-xl max-w-sm shadow-2xl space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-white/[0.08] pb-1.5">
                    <span className="text-slate-400 text-[11px]">ACADEMIC SESSION</span>
                    <span className="text-cyan-300 font-bold text-xs">2025 &ndash; 2029</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-slate-400 block uppercase">EVALUATION</span>
                      <span className="text-xs text-slate-200">Cumulative GPA</span>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-[#e5b061]/10 border border-[#e5b061]/40 text-right">
                      <span className="text-[9px] font-mono text-[#e5b061] block">CURRENT CGPA</span>
                      <span className="text-xl font-serif font-bold text-slate-100">9.05 <span className="text-[10px] font-mono text-slate-400">/ 10</span></span>
                    </div>
                  </div>
                  <div className="text-[9px] font-mono text-emerald-400 flex items-center space-x-1 pt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Academic Record &bull; Top Decile</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 03: LEARNING AND TECHNOLOGY (p: 0.22 to 0.33) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 2 && (
          <div className="space-y-4">
            
            {/* Programming Stack (Safe Left Negative Space) */}
            {pRel >= 0.04 && pRel < 0.35 && (
              <div className="animate-fadeIn flex justify-start">
                <div className="p-4 rounded-xl border border-emerald-500/30 bg-[#060a16]/90 backdrop-blur-xl shadow-2xl max-w-sm space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-emerald-400">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>PROGRAMMING LANGUAGES</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                    {['PYTHON', 'C', 'C++', 'JAVASCRIPT', 'SQL'].map(lang => (
                      <span key={lang} className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 font-sans">
                    Modern C++ algorithms, Python AI pipelines, relational SQL.
                  </p>
                </div>
              </div>
            )}

            {/* AI & LLM Stack (Safe Right Negative Space) */}
            {pRel >= 0.35 && pRel < 0.65 && (
              <div className="animate-fadeIn flex justify-end">
                <div className="p-4 rounded-xl border border-cyan-500/40 bg-[#060a16]/95 backdrop-blur-xl shadow-2xl max-w-md space-y-2 text-right">
                  <div className="flex items-center justify-end space-x-1.5 text-xs font-mono text-cyan-400">
                    <span>INTELLIGENCE &amp; LLMS</span>
                    <Brain className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-wrap justify-end gap-1.5 text-[11px] font-mono">
                    {['GENERATIVE AI', 'LARGE LANGUAGE MODELS', 'RAG', 'LANGCHAIN', 'GEMINI API', 'FAISS'].map(ai => (
                      <span key={ai} className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold">
                        {ai}
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 font-sans">
                    Dense vector similarity indexing &amp; retrieval augmented generation.
                  </p>
                </div>
              </div>
            )}

            {/* Cloud & Databases (Safe Left Negative Space) */}
            {pRel >= 0.65 && (
              <div className="animate-fadeIn flex justify-start">
                <div className="p-4 rounded-xl border border-purple-500/30 bg-[#060a16]/90 backdrop-blur-xl shadow-2xl max-w-md space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-purple-400">
                    <Database className="w-3.5 h-3.5" />
                    <span>FULL-STACK &amp; DATABASES</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                    {['NEXT.JS', 'REACT', 'NODE.JS', 'POSTGRESQL', 'SUPABASE', 'PGVECTOR'].map(db => (
                      <span key={db} className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 font-semibold">
                        {db}
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 font-sans">
                    Serverless API gateways with pgvector cosine similarity.
                  </p>
                </div>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 04: CAMPUSOS AI — FLAGSHIP FOUNDRY (p: 0.33 to 0.46) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 3 && (
          <div className="space-y-4">
            
            {/* Title & Subheading (Top-Right Negative Space) */}
            {pRel >= 0.02 && pRel < 0.25 && (
              <div className="animate-fadeIn flex justify-end">
                <div className="p-3.5 rounded-xl border border-[#e5b061]/40 bg-[#060a16]/85 backdrop-blur-md text-right space-y-0.5">
                  <span className="text-[9px] font-mono text-[#e5b061] tracking-widest uppercase block font-bold">
                    FLAGSHIP PLATFORM // CHAPTER 03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif text-slate-100 font-medium">
                    CAMPUSOS AI
                  </h2>
                  <p className="text-[10px] font-mono text-gradient-gold">
                    &ldquo;An AI-Powered Institutional Operating Platform.&rdquo;
                  </p>
                </div>
              </div>
            )}

            {/* 5 Stakeholder Roles (Safe Lower-Third) */}
            {pRel >= 0.25 && pRel < 0.52 && (
              <div className="animate-fadeIn max-w-xl mx-auto p-4 rounded-xl border border-white/[0.1] bg-[#060a16]/90 backdrop-blur-xl shadow-2xl space-y-2">
                <span className="text-[10px] font-mono text-[#e5b061] uppercase tracking-wider block text-center">
                  MULTI-TENANT ROLE ECOSYSTEM (5 ROLES):
                </span>
                <div className="grid grid-cols-5 gap-1.5 text-center text-[10px] font-mono">
                  {[
                    { role: 'STUDENTS', sub: 'Adaptive' },
                    { role: 'TEACHERS', sub: 'Evaluator' },
                    { role: 'ADMINS', sub: 'Governance' },
                    { role: 'ACCOUNTS', sub: 'Audits' },
                    { role: 'PARENTS', sub: 'Feed' }
                  ].map((item) => (
                    <div key={item.role} className="p-1.5 rounded bg-black/40 border border-[#e5b061]/30">
                      <div className="font-bold text-[#e5b061]">{item.role}</div>
                      <div className="text-[8px] text-slate-400">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Stack & Flow (Safe Left Side) */}
            {pRel >= 0.52 && pRel < 0.76 && (
              <div className="animate-fadeIn flex justify-start">
                <div className="p-4 rounded-xl border border-cyan-500/30 bg-[#060a16]/90 backdrop-blur-xl max-w-md shadow-2xl space-y-2">
                  <div className="text-xs font-mono text-cyan-400 font-bold">
                    ARCHITECTURE &bull; FULL-STACK AI
                  </div>
                  <div className="text-[10px] font-mono text-slate-300">
                    NEXT.JS &bull; SUPABASE &bull; POSTGRESQL &bull; PGVECTOR &bull; GEMINI
                  </div>
                  <p className="text-[10px] text-slate-400 font-sans">
                    Role-based access control (RBAC), multi-tenant schemas, and dense vector embeddings for institutional knowledge retrieval.
                  </p>
                </div>
              </div>
            )}

            {/* Verified QA Benchmark & Interactive Modal Trigger */}
            {pRel >= 0.76 && (
              <div className="animate-fadeIn flex justify-end pointer-events-auto">
                <div className="p-4 rounded-xl border border-[#e5b061]/50 bg-[#060a16]/95 backdrop-blur-xl shadow-2xl max-w-sm space-y-2 text-right">
                  <span className="text-[10px] font-mono text-[#e5b061] uppercase tracking-wider block">
                    QA TEST SUITE VERIFICATION
                  </span>
                  <div className="flex items-center justify-end space-x-3 text-xs font-mono">
                    <span className="text-emerald-400 font-bold">487 Passed</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-amber-400 font-bold">23 Skipped</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-slate-200 font-bold">510 Total</span>
                  </div>
                  <button
                    onClick={() => openProjectModal('campusos-ai')}
                    className="px-4 py-1.5 rounded-lg bg-[#e5b061] hover:bg-[#fef08a] text-black font-mono text-xs font-bold uppercase transition-all shadow-[0_0_15px_rgba(229,176,97,0.3)] inline-flex items-center space-x-1.5 ml-auto"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>INSPECT CAMPUSOS SPEC</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 05: GYANIX — SOCRATIC AI LEARNING ASSISTANT (p: 0.46 to 0.58) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 4 && (
          <div className="space-y-4">
            
            {/* Title & Scope (Safe Top Left) */}
            {pRel >= 0.02 && pRel < 0.32 && (
              <div className="animate-fadeIn flex justify-start">
                <div className="p-3.5 rounded-xl border border-cyan-500/30 bg-[#060a16]/85 backdrop-blur-md space-y-0.5">
                  <span className="text-[9px] font-mono text-cyan-400 tracking-widest uppercase block font-bold">
                    SOCRATIC PEDAGOGY // CHAPTER 04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif text-slate-100 font-medium">
                    GYANIX
                  </h2>
                  <p className="text-[10px] font-mono text-gradient-cyan">
                    &ldquo;Curriculum-Aware Socratic AI Learning Assistant.&rdquo;
                  </p>
                </div>
              </div>
            )}

            {/* Target Cohort: CBSE Class 11 & 12 */}
            {pRel >= 0.32 && pRel < 0.62 && (
              <div className="animate-fadeIn flex justify-end">
                <div className="p-4 rounded-xl border border-cyan-500/30 bg-[#060a16]/90 backdrop-blur-xl max-w-sm shadow-2xl text-right space-y-1">
                  <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest block font-bold">
                    CURRICULUM ALIGNMENT
                  </span>
                  <h3 className="text-base font-serif text-slate-100 font-medium">
                    CBSE Class 11 &amp; 12 Physics &amp; STEM
                  </h3>
                  <p className="text-[10px] text-slate-400 font-sans">
                    Indexed directly against NCERT foundational syllabi with chapter-aligned embeddings.
                  </p>
                </div>
              </div>
            )}

            {/* Socratic Pipeline & Trigger */}
            {pRel >= 0.62 && (
              <div className="animate-fadeIn flex justify-start pointer-events-auto">
                <div className="p-4 rounded-xl border border-cyan-500/40 bg-[#060a16]/95 backdrop-blur-xl shadow-2xl max-w-md space-y-2.5">
                  <div className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider font-bold">
                    SOCRATIC REASONING FLOW:
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-[9px] font-mono text-center">
                    <div className="p-1.5 rounded bg-black/40 border border-white/[0.08] text-cyan-300">Question</div>
                    <div className="p-1.5 rounded bg-black/40 border border-white/[0.08] text-[#e5b061]">Context RAG</div>
                    <div className="p-1.5 rounded bg-black/40 border border-white/[0.08] text-emerald-400">Guided Hint</div>
                    <div className="p-1.5 rounded bg-black/40 border border-white/[0.08] text-purple-400">Mastery</div>
                  </div>
                  <button
                    onClick={() => openProjectModal('gyanix')}
                    className="px-3.5 py-1.5 rounded-lg bg-[#38bdf8] hover:bg-[#7dd3fc] text-black font-mono text-xs font-bold uppercase transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] inline-flex items-center space-x-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>INSPECT GYANIX ARCHITECTURE</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 06: SPECIALIZED ENGINEERING PROJECTS (p: 0.58 to 0.70) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 5 && (
          <div className="space-y-4">
            
            {/* CivicLens (Safe Side Placement) */}
            {pRel >= 0.02 && pRel < 0.28 && (
              <div className="animate-fadeIn flex justify-start pointer-events-auto">
                <div className="p-4 rounded-xl border border-emerald-500/40 bg-[#060a16]/95 backdrop-blur-xl shadow-2xl max-w-md space-y-1.5">
                  <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-emerald-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>CIVICLENS // SPATIAL AI</span>
                  </div>
                  <h3 className="text-base font-serif text-slate-100 font-medium">Geo-Tagged Civic Auditing</h3>
                  <p className="text-[10px] text-slate-300 font-sans leading-relaxed">
                    PostGIS spatial clustering within &le;50m radii to eliminate duplicate municipal complaints.
                  </p>
                  <button
                    onClick={() => openProjectModal('civiclens')}
                    className="px-3 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-[11px] font-bold uppercase inline-flex items-center space-x-1"
                  >
                    <span>INSPECT CIVICLENS SPEC</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            {/* Financial Advisor AI */}
            {pRel >= 0.28 && pRel < 0.52 && (
              <div className="animate-fadeIn flex justify-end pointer-events-auto">
                <div className="p-4 rounded-xl border border-amber-500/40 bg-[#060a16]/95 backdrop-blur-xl shadow-2xl max-w-md space-y-1.5 text-right">
                  <div className="flex items-center justify-end space-x-1.5 text-xs font-mono text-amber-400">
                    <span>FINANCIAL ADVISOR AI</span>
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-base font-serif text-slate-100 font-medium">SEC 10-K Financial Parsing</h3>
                  <p className="text-[10px] text-slate-300 font-sans leading-relaxed">
                    Hybrid BM25 and dense embedding search over complex balance sheets with interactive Plotly telemetries.
                  </p>
                  <button
                    onClick={() => openProjectModal('financial-advisor-ai')}
                    className="px-3 py-1 rounded bg-amber-500 hover:bg-amber-400 text-black font-mono text-[11px] font-bold uppercase inline-flex items-center space-x-1 ml-auto"
                  >
                    <span>INSPECT FINANCIAL ADVISOR</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            {/* Agentic RAG Engine */}
            {pRel >= 0.52 && pRel < 0.76 && (
              <div className="animate-fadeIn flex justify-start pointer-events-auto">
                <div className="p-4 rounded-xl border border-cyan-500/40 bg-[#060a16]/95 backdrop-blur-xl shadow-2xl max-w-md space-y-1.5">
                  <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>AGENTIC RAG ENGINE</span>
                  </div>
                  <h3 className="text-base font-serif text-slate-100 font-medium">Autonomous Query Router</h3>
                  <p className="text-[10px] text-slate-300 font-sans leading-relaxed">
                    Self-correcting retrieval pipeline with query decomposition and dense FAISS vector index (8/8 tests verified).
                  </p>
                  <button
                    onClick={() => openProjectModal('agentic-rag-engine')}
                    className="px-3 py-1 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-[11px] font-bold uppercase inline-flex items-center space-x-1"
                  >
                    <span>INSPECT AGENTIC RAG</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            {/* ZENETH Crop Expert */}
            {pRel >= 0.76 && (
              <div className="animate-fadeIn flex justify-end pointer-events-auto">
                <div className="p-4 rounded-xl border border-rose-500/40 bg-[#060a16]/95 backdrop-blur-xl shadow-2xl max-w-md space-y-1.5 text-right">
                  <div className="flex items-center justify-end space-x-1.5 text-xs font-mono text-rose-400">
                    <span>ZENETH // NATIVE C++</span>
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-base font-serif text-slate-100 font-medium">Sub-Millisecond Agronomy Engine</h3>
                  <p className="text-[10px] text-slate-300 font-sans leading-relaxed">
                    100% deterministic rule engine in modern C++ STL with &lt;1ms latency for 9 crop cultivars offline.
                  </p>
                  <button
                    onClick={() => openProjectModal('zeneth-crop-expert')}
                    className="px-3 py-1 rounded bg-rose-500 hover:bg-rose-400 text-white font-mono text-[11px] font-bold uppercase inline-flex items-center space-x-1 ml-auto"
                  >
                    <span>INSPECT ZENETH SPEC</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 07: PROFESSIONAL JOURNEY — CORIZO / IIT BOMBAY (p: 0.70 to 0.80) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 6 && (
          <div className="space-y-4">
            
            {/* Collaborative Programme Context */}
            {pRel >= 0.02 && pRel < 0.35 && (
              <div className="animate-fadeIn flex justify-start">
                <div className="p-3.5 rounded-xl border border-emerald-500/40 bg-[#060a16]/85 backdrop-blur-md space-y-0.5">
                  <span className="text-[9px] font-mono text-emerald-400 tracking-widest uppercase block font-bold">
                    COLLABORATIVE TRAINING // CHAPTER 06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif text-slate-100 font-medium">
                    CORIZO PROGRAMME
                  </h2>
                  <p className="text-[10px] font-mono text-emerald-300">
                    In Collaboration with IIT Bombay &bull; 9-Month Trainee Track
                  </p>
                </div>
              </div>
            )}

            {/* Stage 01: IoT & Robotics (Active) */}
            {pRel >= 0.35 && pRel < 0.65 && (
              <div className="animate-fadeIn flex justify-end">
                <div className="p-4 rounded-xl border border-emerald-500/50 bg-[#060a16]/95 backdrop-blur-xl shadow-2xl max-w-md space-y-1.5 text-right">
                  <div className="flex items-center justify-end space-x-1 text-xs font-mono">
                    <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-semibold text-[9px]">
                      CURRENTLY ONGOING
                    </span>
                    <span className="text-emerald-400 font-bold">&bull; STAGE 01</span>
                  </div>
                  <h3 className="text-base font-serif text-slate-100 font-medium">IoT &amp; Robotics Specialization</h3>
                  <p className="text-[10px] text-slate-300 font-sans">
                    Microcontroller firmware, sensor bus integration (I2C/SPI), robotic joint kinematics.
                  </p>
                </div>
              </div>
            )}

            {/* Stages 02 & 03 Sequential Roadmap */}
            {pRel >= 0.65 && (
              <div className="animate-fadeIn flex justify-start">
                <div className="p-4 rounded-xl border border-white/[0.1] bg-[#060a16]/95 backdrop-blur-xl shadow-2xl max-w-md space-y-2">
                  <span className="text-[9px] font-mono text-[#38bdf8] uppercase tracking-wider block font-bold">
                    UPCOMING PHASES (3 MONTHS EACH)
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                    <div className="p-2 rounded bg-black/40 border border-white/[0.08]">
                      <span className="text-slate-200 font-bold block">Stage 02 &bull; Data Science</span>
                      <span className="text-[9px] text-amber-400 font-semibold">UPCOMING</span>
                    </div>
                    <div className="p-2 rounded bg-black/40 border border-white/[0.08]">
                      <span className="text-slate-200 font-bold block">Stage 03 &bull; Nanotechnology</span>
                      <span className="text-[9px] text-amber-400 font-semibold">UPCOMING</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 08: ANVESHAN HACKATHON — THE SUMMIT (p: 0.80 to 0.90) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 7 && (
          <div className="space-y-4">
            
            {/* Summit Arrival Label */}
            {pRel >= 0.04 && pRel < 0.40 && (
              <div className="animate-fadeIn flex justify-start">
                <div className="p-3.5 rounded-xl border border-purple-500/40 bg-[#060a16]/85 backdrop-blur-md space-y-0.5">
                  <span className="text-[9px] font-mono text-purple-300 tracking-widest uppercase block font-bold">
                    COMPETITIVE MILESTONE // THE SUMMIT
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif text-slate-100 font-medium">
                    ANVESHAN HACKATHON
                  </h2>
                  <p className="text-[10px] font-mono text-purple-300">
                    National Competitive Hackathon
                  </p>
                </div>
              </div>
            )}

            {/* Advanced to Round 2 & Interactive Certificate Trigger */}
            {pRel >= 0.40 && (
              <div className="animate-fadeIn flex justify-end pointer-events-auto">
                <div className="p-4 rounded-xl border border-purple-500/40 bg-[#060a16]/95 backdrop-blur-xl shadow-2xl max-w-md space-y-2 text-right">
                  <div className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-mono text-[10px] font-bold border border-purple-500/30">
                    <Sparkles className="w-3 h-3" />
                    <span>PARTICIPANT &bull; ADVANCED TO ROUND 2</span>
                  </div>
                  <h3 className="text-base font-serif text-slate-100 font-medium">
                    Architectural Defense Under Constraint
                  </h3>
                  <button
                    onClick={() => setIsCertificateModalOpen(true)}
                    className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold uppercase transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] inline-flex items-center space-x-1.5 ml-auto"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>INSPECT OFFICIAL CERTIFICATE</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 09: THE FINAL DESTINATION — METROPOLIS SUNRISE (p: 0.90 to 1.00) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 8 && (
          <div className="space-y-4 text-center pointer-events-auto">
            
            {/* The Journey Has Just Begun */}
            {pRel >= 0.02 && pRel < 0.35 && (
              <div className="animate-fadeIn space-y-2">
                <span className="font-mono text-[10px] text-[#e5b061] tracking-[0.3em] uppercase block font-semibold">
                  EPILOGUE // THE HORIZON
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight leading-tight">
                  &ldquo;The Journey Has <br />
                  <span className="italic font-normal text-gradient-gold">Just Begun.&rdquo;</span>
                </h1>
              </div>
            )}

            {/* Recruiter Contact Matrix */}
            {pRel >= 0.35 && (
              <div className="animate-fadeIn max-w-2xl mx-auto p-5 rounded-2xl border border-white/[0.12] bg-[#060a16]/95 backdrop-blur-xl shadow-2xl space-y-4">
                <div>
                  <h2 className="text-2xl font-serif text-slate-100 font-medium">
                    KRISHNA KAUSHIK
                  </h2>
                  <p className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase">
                    AI ENGINEER &bull; SOFTWARE DEVELOPER
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  <a
                    href="https://github.com/krishnakaushik1322007-ai"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg border border-white/[0.08] bg-black/40 hover:border-white/30 transition-all flex flex-col items-center space-y-1"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-300" />
                    <span className="text-slate-200 font-bold text-[11px]">GITHUB</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/krishna-kaushik-559239366/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg border border-white/[0.08] bg-black/40 hover:border-[#38bdf8]/40 transition-all flex flex-col items-center space-y-1"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#38bdf8]" />
                    <span className="text-slate-200 font-bold text-[11px]">LINKEDIN</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-lg border border-white/[0.08] bg-black/40 hover:border-[#e5b061]/40 transition-all flex flex-col items-center space-y-1"
                  >
                    <Mail className="w-4 h-4 text-[#e5b061]" />
                    <span className="text-slate-200 font-bold text-[11px]">
                      {copiedEmail ? 'COPIED!' : 'EMAIL'}
                    </span>
                  </button>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2.5 rounded-lg border border-white/[0.08] bg-black/40 hover:border-emerald-500/40 transition-all flex flex-col items-center space-y-1"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-200 font-bold text-[11px]">
                      {copiedPhone ? 'COPIED!' : 'PHONE'}
                    </span>
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                  <a
                    href="/Krishna_Kaushik_Resume.pdf"
                    download="Krishna_Kaushik_Resume.pdf"
                    className="px-5 py-2 rounded-xl bg-[#38bdf8] hover:bg-[#7dd3fc] text-black font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center space-x-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>DOWNLOAD OFFICIAL RESUME (PDF)</span>
                  </a>

                  <button
                    onClick={replayJourney}
                    className="px-4 py-2 rounded-xl border border-white/[0.15] hover:bg-white/[0.08] text-slate-300 font-mono text-xs uppercase tracking-wider transition-all flex items-center space-x-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>REPLAY JOURNEY</span>
                  </button>
                </div>

              </div>
            )}

          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* BOTTOM SPACER FOR TRANSPORT BAR */}
      {/* ========================================================================= */}
      <div className="h-16 sm:h-20 pointer-events-none" />

    </div>
  );
}
