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
  Send,
  Code2,
  Cpu,
  Brain,
  Database,
  Terminal,
  Activity,
  Compass,
  Building,
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
  const [msgSent, setMsgSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Calculate Scene-Relative progress from 0.0 to 1.0
  const sceneStart = currentScene.startProgress;
  const sceneEnd = currentScene.endProgress;
  const pRel = Math.max(0, Math.min(1, (progress - sceneStart) / (sceneEnd - sceneStart)));

  // Sound pulse triggers on key reveal moments
  useEffect(() => {
    // Check if we hit milestone points and trigger sound subtle pulse
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

  const handleSendMsg = (e: React.FormEvent) => {
    e.preventDefault();
    setMsgSent(true);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-between p-4 sm:p-8 md:p-10 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* TOP HEADER HUD: Scene Watermark & Recruiter Quick Actions */}
      {/* ========================================================================= */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/[0.1] bg-black/50 backdrop-blur-md text-[11px] font-mono text-[#38bdf8] uppercase tracking-widest">
            <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-[#38bdf8] animate-pulse' : 'bg-amber-400'}`} />
            <span>SCENE 0{currentSceneIndex + 1} &bull; {currentScene.title}</span>
          </div>
          <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-400 pl-1">
            <span>TIMELINE: {(progress * 100).toFixed(1)}%</span>
            <span>&bull;</span>
            <span className="text-slate-300">{currentScene.theme}</span>
            {!isPlaying && (
              <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                PAUSED
              </span>
            )}
          </div>
        </div>

        {/* Top Right: Verified Resume PDF Download & Fast Track */}
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
      {/* CENTER & LOWER CINEMATIC REVEAL SYSTEM */}
      {/* ========================================================================= */}
      <div className="my-auto w-full max-w-5xl mx-auto pointer-events-none">

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 01: THE BEGINNING (0.00 to 0.11) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 0 && (
          <div className="space-y-6 text-center">
            
            {/* FIRST REVEAL (pRel: 0.15 to 0.45): "EVERY JOURNEY BEGINS WITH CURIOSITY." */}
            {pRel >= 0.12 && pRel < 0.45 && (
              <div className="animate-fadeIn space-y-2 transition-all duration-700">
                <span className="font-mono text-xs text-[#e5b061] tracking-widest uppercase block font-semibold">
                  PROLOGUE // THE HIMALAYAN DAWN
                </span>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-slate-100 tracking-tight leading-tight">
                  &ldquo;Every Journey Begins With <br />
                  <span className="italic font-normal text-gradient-gold">Curiosity.&rdquo;</span>
                </h1>
                <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md mx-auto pt-2">
                  A solitary road at sunrise. Before the architectures and systems, there was only the desire to understand.
                </p>
              </div>
            )}

            {/* SECOND REVEAL (pRel: 0.45 to 0.72): Camera orbits -> "KRISHNA KAUSHIK" */}
            {pRel >= 0.45 && pRel < 0.72 && (
              <div className="animate-fadeIn space-y-3 transition-all duration-700">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/[0.1] bg-black/40 text-[10px] font-mono text-[#38bdf8] uppercase tracking-widest">
                  <span>PROTAGONIST // THE ENGINEER</span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-medium text-slate-100 tracking-tight">
                  KRISHNA KAUSHIK
                </h1>
                <p className="text-xs sm:text-sm font-mono text-cyan-300 tracking-[0.25em] uppercase">
                  AI ENGINEER &bull; SOFTWARE DEVELOPER &bull; CSE SCHOLAR
                </p>
              </div>
            )}

            {/* THIRD REVEAL (pRel: 0.72 to 0.95): Professional Title & Forward Transition */}
            {pRel >= 0.72 && (
              <div className="animate-fadeIn space-y-4 transition-all duration-700">
                <div className="max-w-md mx-auto p-4 rounded-xl border border-white/[0.1] bg-[#070b16]/80 backdrop-blur-lg text-slate-300 text-xs font-mono">
                  <div className="text-[#e5b061] font-bold text-sm mb-1">CURIOSITY &rarr; ENGINEERING</div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Walking from exploration into foundational academic rigor. Transitioning into the university campus...
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 02: THE FOUNDATION — SHOOLINI UNIVERSITY (0.11 to 0.22) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 1 && (
          <div className="space-y-6">
            
            {/* FIRST REVEAL (pRel: 0.05 to 0.32): "SHOOLINI UNIVERSITY" on building entrance */}
            {pRel >= 0.04 && pRel < 0.32 && (
              <div className="text-center animate-fadeIn space-y-2">
                <span className="font-mono text-xs text-[#e5b061] tracking-widest uppercase block">
                  CHAPTER 01 // THE ACADEMIC GATEWAY
                </span>
                <h1 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
                  SHOOLINI UNIVERSITY
                </h1>
                <p className="text-xs font-mono text-slate-400">
                  Collegiate quad &bull; Solan, Himachal Pradesh &bull; Faculty of Engineering
                </p>
              </div>
            )}

            {/* SECOND REVEAL (pRel: 0.30 to 0.60): Degree Information */}
            {pRel >= 0.30 && pRel < 0.60 && (
              <div className="animate-fadeIn flex justify-start">
                <div className="p-5 rounded-2xl border border-cyan-500/30 bg-[#070b16]/90 backdrop-blur-xl max-w-lg shadow-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
                    <GraduationCap className="w-4 h-4" />
                    <span>DEGREE CANDIDACY</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif text-slate-100 font-medium">
                    B.Tech &ndash; Computer Science &amp; Engineering
                  </h2>
                  <div className="text-xs font-mono text-[#e5b061] tracking-wider uppercase">
                    SPECIALIZATION: ARTIFICIAL INTELLIGENCE
                  </div>
                  <p className="text-[11px] font-sans text-slate-400 pt-1">
                    Rigorous study of Data Structures &amp; Algorithms, Database Management Systems (DBMS), Discrete Mathematics, and Computer Architecture.
                  </p>
                </div>
              </div>
            )}

            {/* THIRD & FOURTH REVEAL (pRel: 0.60 to 0.98): Timeline & 9.05 CGPA Notebook Reveal */}
            {pRel >= 0.60 && (
              <div className="animate-fadeIn flex justify-end">
                <div className="p-5 rounded-2xl border border-[#e5b061]/40 bg-[#070b16]/90 backdrop-blur-xl max-w-md shadow-2xl space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-white/[0.08] pb-2">
                    <span className="text-slate-400">SESSION YEARS</span>
                    <span className="text-[#38bdf8] font-bold">2025 &ndash; 2029 (Expected)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">ACADEMIC EXCELLENCE</span>
                      <span className="text-xs text-slate-300">Cumulative Evaluation</span>
                    </div>
                    <div className="px-3.5 py-1.5 rounded-xl bg-[#e5b061]/10 border border-[#e5b061]/50 text-right">
                      <span className="text-[9px] font-mono text-[#e5b061] block">CURRENT CGPA</span>
                      <span className="text-2xl font-serif font-bold text-slate-100">9.05 <span className="text-xs font-mono text-slate-400">/ 10</span></span>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 flex items-center space-x-1.5 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Academic Record &bull; Top Decile Performance</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 03: LEARNING AND TECHNOLOGY (0.22 to 0.33) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 2 && (
          <div className="space-y-6">
            
            {/* FIRST REVEAL (pRel: 0.05 to 0.32): Programming Technologies */}
            {pRel >= 0.04 && pRel < 0.32 && (
              <div className="animate-fadeIn max-w-lg">
                <div className="p-5 rounded-2xl border border-emerald-500/30 bg-[#070b16]/90 backdrop-blur-xl shadow-2xl space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
                    <Terminal className="w-4 h-4" />
                    <span>PRIMARY PROGRAMMING ARSENAL</span>
                  </div>
                  <h3 className="text-lg font-serif text-slate-100">Language Foundations</h3>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {['PYTHON', 'C', 'C++', 'JAVASCRIPT', 'SQL'].map(lang => (
                      <span key={lang} className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Object-oriented C++ architectures, Python scripting &amp; AI backend pipelines, optimized relational SQL queries.
                  </p>
                </div>
              </div>
            )}

            {/* SECOND REVEAL (pRel: 0.32 to 0.60): AI & LLM Stack */}
            {pRel >= 0.32 && pRel < 0.60 && (
              <div className="animate-fadeIn flex justify-center">
                <div className="p-5 rounded-2xl border border-cyan-500/40 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl max-w-xl space-y-3 text-center">
                  <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400">
                    <Brain className="w-4 h-4" />
                    <span>INTELLIGENCE &amp; REASONING STACK</span>
                  </div>
                  <h3 className="text-xl font-serif text-slate-100">Generative AI &amp; LLM Engineering</h3>
                  <div className="flex flex-wrap justify-center gap-2 text-xs font-mono">
                    {['GENERATIVE AI', 'LARGE LANGUAGE MODELS', 'RAG', 'LANGCHAIN', 'GEMINI API', 'FAISS'].map(ai => (
                      <span key={ai} className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold">
                        {ai}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Autonomous multi-agent orchestration, dense vector embeddings with FAISS, and context retrieval augmentation.
                  </p>
                </div>
              </div>
            )}

            {/* THIRD & FOURTH REVEAL (pRel: 0.60 to 0.98): Full-Stack & Database Architectures */}
            {pRel >= 0.60 && (
              <div className="animate-fadeIn flex justify-end">
                <div className="p-5 rounded-2xl border border-purple-500/30 bg-[#070b16]/90 backdrop-blur-xl shadow-2xl max-w-lg space-y-3 text-right">
                  <div className="flex items-center justify-end space-x-2 text-xs font-mono text-purple-400">
                    <span>DEVELOPMENT &amp; DATABASE PERSISTENCE</span>
                    <Database className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-serif text-slate-100">Full-Stack Cloud Architecture</h3>
                  <div className="flex flex-wrap justify-end gap-2 text-xs font-mono">
                    {['NEXT.JS', 'REACT', 'NODE.JS', 'EXPRESS.JS', 'POSTGRESQL', 'SUPABASE', 'MYSQL', 'PGVECTOR'].map(db => (
                      <span key={db} className="px-2 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 font-semibold text-[11px]">
                        {db}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Serverless API gateways, vector similarity indexing with pgvector, and responsive high-performance UIs.
                  </p>
                </div>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 04: CAMPUSOS AI — FLAGSHIP ENGINEERING (0.33 to 0.46) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 3 && (
          <div className="space-y-5">
            
            {/* FIRST REVEAL (pRel: 0.02 to 0.24): Title & Subheading */}
            {pRel >= 0.02 && pRel < 0.24 && (
              <div className="text-center animate-fadeIn space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#e5b061]/50 bg-[#e5b061]/10 text-[#e5b061] font-mono text-xs uppercase tracking-widest">
                  <Layers className="w-3.5 h-3.5" />
                  <span>FLAGSHIP PLATFORM // CHAPTER 03</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-serif font-light text-slate-100 tracking-tight">
                  CAMPUSOS AI
                </h1>
                <p className="text-xs sm:text-sm font-mono text-gradient-gold tracking-wider">
                  &ldquo;An AI-Powered Institutional Operating Platform.&rdquo;
                </p>
              </div>
            )}

            {/* SECOND REVEAL (pRel: 0.24 to 0.48): 5 Stakeholder Roles sequentially */}
            {pRel >= 0.24 && pRel < 0.48 && (
              <div className="animate-fadeIn max-w-2xl mx-auto p-5 rounded-2xl border border-white/[0.12] bg-[#070b16]/90 backdrop-blur-xl shadow-2xl space-y-3">
                <span className="text-[11px] font-mono text-[#e5b061] uppercase tracking-wider block">
                  MULTI-TENANT ROLE ECOSYSTEM (5 ROLES):
                </span>
                <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono">
                  {[
                    { role: 'STUDENTS', sub: 'Adaptive Hub', active: pRel >= 0.25 },
                    { role: 'TEACHERS', sub: 'Assessment AI', active: pRel >= 0.30 },
                    { role: 'ADMINS', sub: 'Governance', active: pRel >= 0.35 },
                    { role: 'ACCOUNTS', sub: 'Audit Trails', active: pRel >= 0.40 },
                    { role: 'PARENTS', sub: 'Real-time Feed', active: pRel >= 0.44 }
                  ].map((item) => (
                    <div 
                      key={item.role} 
                      className={`p-2 rounded-lg border transition-all duration-300 ${
                        item.active 
                          ? 'border-[#e5b061] bg-[#e5b061]/15 text-white scale-105 shadow-[0_0_12px_rgba(229,176,97,0.3)]' 
                          : 'border-white/[0.06] bg-black/30 text-slate-500'
                      }`}
                    >
                      <div className="font-bold text-[11px]">{item.role}</div>
                      <div className="text-[9px] text-slate-400 mt-0.5">{item.sub}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 pt-1 text-center font-sans">
                  Granular role-based access control (RBAC) ensuring strict tenant isolation across departments.
                </p>
              </div>
            )}

            {/* THIRD & FOURTH REVEAL (pRel: 0.48 to 0.74): Architecture Flow */}
            {pRel >= 0.48 && pRel < 0.74 && (
              <div className="animate-fadeIn max-w-3xl mx-auto p-5 rounded-2xl border border-cyan-500/40 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span>ENTERPRISE ARCHITECTURE FLOW</span>
                  <span>NEXT.JS &bull; SUPABASE &bull; PGVECTOR &bull; GEMINI</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono py-2">
                  <div className="p-3 rounded-lg bg-black/50 border border-white/[0.08]">
                    <span className="text-[10px] text-slate-500 block">CLIENT TIER</span>
                    <span className="text-[#38bdf8] font-bold">Next.js 14 App</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/50 border border-white/[0.08]">
                    <span className="text-[10px] text-slate-500 block">EDGE GATEWAY</span>
                    <span className="text-[#e5b061] font-bold">Supabase Auth</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/50 border border-white/[0.08]">
                    <span className="text-[10px] text-slate-500 block">DATABASE</span>
                    <span className="text-emerald-400 font-bold">PostgreSQL RLS</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/50 border border-white/[0.08]">
                    <span className="text-[10px] text-slate-500 block">AI INFERENCE</span>
                    <span className="text-purple-400 font-bold">Gemini RAG</span>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-slate-400 text-center flex items-center justify-center space-x-2">
                  <span>Client Request</span>
                  <span>&rarr;</span>
                  <span>JWT Validation</span>
                  <span>&rarr;</span>
                  <span>pgvector Cosine Search</span>
                  <span>&rarr;</span>
                  <span>Synthesized Response</span>
                </div>
              </div>
            )}

            {/* FIFTH REVEAL (pRel: 0.74 to 0.98): Verified Test Suite Metrics & Interactive Trigger */}
            {pRel >= 0.74 && (
              <div className="animate-fadeIn max-w-xl mx-auto p-5 rounded-2xl border border-[#e5b061]/50 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-3 text-center pointer-events-auto">
                <span className="text-xs font-mono text-[#e5b061] uppercase tracking-wider block">
                  VERIFIED QA SUITE BENCHMARK
                </span>
                <div className="flex items-center justify-center space-x-6 py-1">
                  <div>
                    <span className="text-3xl font-serif font-bold text-emerald-400">487</span>
                    <span className="text-[10px] font-mono text-slate-400 block">PASSED SUITES</span>
                  </div>
                  <div className="w-px h-8 bg-white/[0.1]" />
                  <div>
                    <span className="text-3xl font-serif font-bold text-amber-400">23</span>
                    <span className="text-[10px] font-mono text-slate-400 block">SKIPPED / ISOLATED</span>
                  </div>
                  <div className="w-px h-8 bg-white/[0.1]" />
                  <div>
                    <span className="text-3xl font-serif font-bold text-slate-100">510</span>
                    <span className="text-[10px] font-mono text-slate-400 block">TOTAL TEST RUNS</span>
                  </div>
                </div>
                <button
                  onClick={() => openProjectModal('campusos-ai')}
                  className="px-6 py-2 rounded-xl bg-[#e5b061] hover:bg-[#fef08a] text-black font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(229,176,97,0.4)] flex items-center space-x-2 mx-auto"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>PAUSE &amp; INSPECT CAMPUSOS SPEC</span>
                </button>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 05: GYANIX — SOCRATIC AI LEARNING ASSISTANT (0.46 to 0.58) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 4 && (
          <div className="space-y-5">
            
            {/* FIRST REVEAL (pRel: 0.02 to 0.30): Title & Scope */}
            {pRel >= 0.02 && pRel < 0.30 && (
              <div className="text-center animate-fadeIn space-y-2">
                <span className="font-mono text-xs text-[#38bdf8] tracking-widest uppercase block">
                  CHAPTER 04 // SOCRATIC PEDAGOGY
                </span>
                <h1 className="text-4xl sm:text-6xl font-serif font-light text-slate-100 tracking-tight">
                  GYANIX
                </h1>
                <p className="text-xs sm:text-sm font-mono text-gradient-cyan">
                  &ldquo;Curriculum-Aware Socratic AI Learning Assistant.&rdquo;
                </p>
              </div>
            )}

            {/* SECOND REVEAL (pRel: 0.30 to 0.58): CBSE Class 11 & 12 */}
            {pRel >= 0.30 && pRel < 0.58 && (
              <div className="animate-fadeIn max-w-lg mx-auto p-5 rounded-2xl border border-cyan-500/30 bg-[#070b16]/90 backdrop-blur-xl shadow-2xl text-center space-y-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
                  TARGET CURRICULUM COHORT
                </span>
                <h3 className="text-2xl font-serif text-slate-100 font-medium">
                  CBSE Class 11 &amp; 12 Physics &amp; STEM
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  Indexed directly against NCERT foundational syllabi with chapter-aligned embeddings and zero hallucinations.
                </p>
              </div>
            )}

            {/* THIRD & FOURTH REVEAL (pRel: 0.58 to 0.98): Socratic Workflow & Verified Features */}
            {pRel >= 0.58 && (
              <div className="animate-fadeIn max-w-2xl mx-auto p-5 rounded-2xl border border-cyan-500/40 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-4 pointer-events-auto text-center">
                <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider">
                  THE SOCRATIC REASONING PIPELINE:
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.08]">
                    <span className="text-[9px] text-slate-500 block">STEP 01</span>
                    <span className="text-cyan-300 font-bold">Question</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.08]">
                    <span className="text-[9px] text-slate-500 block">STEP 02</span>
                    <span className="text-[#e5b061] font-bold">Context RAG</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.08]">
                    <span className="text-[9px] text-slate-500 block">STEP 03</span>
                    <span className="text-emerald-400 font-bold">AI Guided Hint</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.08]">
                    <span className="text-[9px] text-slate-500 block">STEP 04</span>
                    <span className="text-purple-400 font-bold">Student Mastery</span>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-center space-x-4">
                  <span>41 State Coverage</span>
                  <span>&bull;</span>
                  <span>Zero Direct Answers</span>
                  <span>&bull;</span>
                  <span>Step-by-Step Proofs</span>
                </div>
                <button
                  onClick={() => openProjectModal('gyanix')}
                  className="px-5 py-2 rounded-xl bg-[#38bdf8] hover:bg-[#7dd3fc] text-black font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(56,189,248,0.4)] flex items-center space-x-2 mx-auto"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>INSPECT GYANIX ARCHITECTURE</span>
                </button>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 06: SPECIALIZED ENGINEERING PROJECTS (0.58 to 0.70) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 5 && (
          <div className="space-y-4">
            
            {/* CivicLens Reveal (pRel: 0.02 to 0.28) */}
            {pRel >= 0.02 && pRel < 0.28 && (
              <div className="animate-fadeIn max-w-xl mx-auto p-5 rounded-2xl border border-emerald-500/40 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-2 text-center pointer-events-auto">
                <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-emerald-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>CIVICLENS // SPATIAL AI INFRASTRUCTURE</span>
                </div>
                <h3 className="text-xl font-serif text-slate-100">Intelligent Geo-Tagged Civic Auditing</h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  PostGIS geospatial clustering within &le;50m radii to eliminate duplicate civic complaints. Automated routing to municipal authorities.
                </p>
                <div className="text-[11px] font-mono text-emerald-300">
                  100/100 Test Suites Passed &bull; PostGIS &bull; Next.js &bull; Cloudinary
                </div>
                <button
                  onClick={() => openProjectModal('civiclens')}
                  className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold uppercase transition-all mt-1 inline-flex items-center space-x-1.5"
                >
                  <span>INSPECT CIVICLENS SPEC</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}

            {/* Financial Advisor AI Reveal (pRel: 0.28 to 0.52) */}
            {pRel >= 0.28 && pRel < 0.52 && (
              <div className="animate-fadeIn max-w-xl mx-auto p-5 rounded-2xl border border-amber-500/40 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-2 text-center pointer-events-auto">
                <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-amber-400">
                  <Activity className="w-3.5 h-3.5" />
                  <span>FINANCIAL ADVISOR AI // RETRIEVAL SYSTEM</span>
                </div>
                <h3 className="text-xl font-serif text-slate-100">SEC 10-K Automated Financial Parsing</h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Hybrid BM25 and dense embedding search over complex balance sheets, 10-K annual filings, and cash flow statements with interactive Plotly telemetries.
                </p>
                <div className="text-[11px] font-mono text-amber-300">
                  Gemini API &bull; Streamlit &bull; Plotly &bull; SEC EDGAR Integrations
                </div>
                <button
                  onClick={() => openProjectModal('financial-advisor-ai')}
                  className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-bold uppercase transition-all mt-1 inline-flex items-center space-x-1.5"
                >
                  <span>INSPECT FINANCIAL ADVISOR SPEC</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}

            {/* Agentic RAG Engine Reveal (pRel: 0.52 to 0.76) */}
            {pRel >= 0.52 && pRel < 0.76 && (
              <div className="animate-fadeIn max-w-xl mx-auto p-5 rounded-2xl border border-cyan-500/40 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-2 text-center pointer-events-auto">
                <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AGENTIC RAG ENGINE // AUTONOMOUS ROUTER</span>
                </div>
                <h3 className="text-xl font-serif text-slate-100">Dynamic Multi-Hop Query Rewriter</h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Self-correcting retrieval pipeline with query decomposition, dense FAISS vector index, and BM25 hybrid ranking ensuring verified grounded context.
                </p>
                <div className="text-[11px] font-mono text-cyan-300">
                  8/8 End-to-End Test Suites Verified &bull; LangChain &bull; FastAPI
                </div>
                <button
                  onClick={() => openProjectModal('agentic-rag-engine')}
                  className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold uppercase transition-all mt-1 inline-flex items-center space-x-1.5"
                >
                  <span>INSPECT AGENTIC RAG SPEC</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}

            {/* ZENETH Crop Expert Reveal (pRel: 0.76 to 0.98) */}
            {pRel >= 0.76 && (
              <div className="animate-fadeIn max-w-xl mx-auto p-5 rounded-2xl border border-rose-500/40 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-2 text-center pointer-events-auto">
                <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-rose-400">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>ZENETH // NATIVE C++ EXPERT SYSTEM</span>
                </div>
                <h3 className="text-xl font-serif text-slate-100">Sub-Millisecond Offline Agronomy Engine</h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  100% deterministic rule-based expert engine written in modern C++ utilizing the Standard Template Library (STL). Operates completely offline with &lt;1ms latency for 9 crop cultivars.
                </p>
                <div className="text-[11px] font-mono text-rose-300">
                  Native C++ &bull; Sub-1ms Latency &bull; Zero Network Dependency
                </div>
                <button
                  onClick={() => openProjectModal('zeneth-crop-expert')}
                  className="px-4 py-1.5 rounded-lg bg-rose-500 hover:bg-rose-400 text-white font-mono text-xs font-bold uppercase transition-all mt-1 inline-flex items-center space-x-1.5"
                >
                  <span>INSPECT ZENETH C++ SPEC</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 07: PROFESSIONAL JOURNEY — CORIZO / IIT BOMBAY (0.70 to 0.80) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 6 && (
          <div className="space-y-5">
            
            {/* FIRST REVEAL (pRel: 0.02 to 0.32): Institution & Collaborative Context */}
            {pRel >= 0.02 && pRel < 0.32 && (
              <div className="text-center animate-fadeIn space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-mono text-xs uppercase tracking-widest">
                  <Compass className="w-3.5 h-3.5" />
                  <span>PROFESSIONAL DEVELOPMENT // CHAPTER 06</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-serif font-light text-slate-100 tracking-tight">
                  CORIZO PROGRAMME
                </h1>
                <p className="text-xs sm:text-sm font-mono text-emerald-300">
                  &ldquo;In Collaboration with IIT Bombay.&rdquo;
                </p>
                <p className="text-[11px] font-mono text-slate-400 max-w-md mx-auto">
                  *Accurate attribution: Trainee in collaborative educational programme; not directly employed by IIT Bombay.
                </p>
              </div>
            )}

            {/* SECOND REVEAL (pRel: 0.30 to 0.58): Stage 01 - IoT & Robotics */}
            {pRel >= 0.30 && pRel < 0.58 && (
              <div className="animate-fadeIn max-w-lg mx-auto p-5 rounded-2xl border border-emerald-500/50 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-bold">STAGE 01 &bull; 3 MONTHS</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold text-[10px]">
                    CURRENTLY ONGOING
                  </span>
                </div>
                <h3 className="text-xl font-serif text-slate-100">IoT &amp; Robotics Specialization</h3>
                <p className="text-xs text-slate-300 font-sans">
                  Microcontroller architectures, sensor communication protocols (I2C/SPI), robotic joint articulation, and hardware-software interfacing.
                </p>
              </div>
            )}

            {/* THIRD & FOURTH REVEAL (pRel: 0.58 to 0.98): Sequential Stages 02 & 03 */}
            {pRel >= 0.58 && (
              <div className="animate-fadeIn max-w-xl mx-auto p-5 rounded-2xl border border-white/[0.12] bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-3">
                <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider block text-center">
                  SEQUENTIAL 9-MONTH ROADMAP
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl border border-white/[0.08] bg-black/40 space-y-1">
                    <span className="text-slate-400 text-[10px] block">STAGE 02 &bull; 3 MONTHS</span>
                    <span className="text-slate-200 font-bold block">Data Science</span>
                    <span className="text-[10px] text-amber-400 block font-semibold">UPCOMING</span>
                    <p className="text-[10px] text-slate-400 font-sans pt-1">
                      Advanced analytical modeling, feature engineering &amp; large-scale data wrangling.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-white/[0.08] bg-black/40 space-y-1">
                    <span className="text-slate-400 text-[10px] block">STAGE 03 &bull; 3 MONTHS</span>
                    <span className="text-slate-200 font-bold block">Nanotechnology</span>
                    <span className="text-[10px] text-amber-400 block font-semibold">UPCOMING</span>
                    <p className="text-[10px] text-slate-400 font-sans pt-1">
                      Nanomaterials simulation, micro-scale sensor arrays &amp; semiconductor devices.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 08: ANVESHAN HACKATHON — THE SUMMIT MILESTONE (0.80 to 0.90) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 7 && (
          <div className="space-y-5">
            
            {/* FIRST REVEAL (pRel: 0.04 to 0.38): Summit Arrival */}
            {pRel >= 0.04 && pRel < 0.38 && (
              <div className="text-center animate-fadeIn space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 font-mono text-xs uppercase tracking-widest">
                  <Award className="w-3.5 h-3.5" />
                  <span>COMPETITIVE MILESTONE // THE SUMMIT</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-serif font-light text-slate-100 tracking-tight">
                  ANVESHAN HACKATHON
                </h1>
                <p className="text-xs sm:text-sm font-mono text-purple-300">
                  National Competitive Hackathon
                </p>
              </div>
            )}

            {/* SECOND & THIRD REVEAL (pRel: 0.38 to 0.98): Advanced to Round 2 & Interactive Certificate */}
            {pRel >= 0.38 && (
              <div className="animate-fadeIn max-w-lg mx-auto p-6 rounded-2xl border border-purple-500/40 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-4 text-center pointer-events-auto">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-mono text-xs font-bold border border-purple-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PARTICIPANT &bull; ADVANCED TO ROUND 2</span>
                </div>
                <h3 className="text-xl font-serif text-slate-100 font-medium">
                  Architectural Rigor Under Competitive Scrutiny
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Evaluated on real-world scalability, database integrity, and practical AI implementations under rigorous contest judging.
                </p>
                <button
                  onClick={() => setIsCertificateModalOpen(true)}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(168,85,247,0.4)] flex items-center space-x-2 mx-auto"
                >
                  <Award className="w-4 h-4" />
                  <span>INSPECT OFFICIAL PARTICIPATION CERTIFICATE</span>
                </button>
              </div>
            )}

          </div>
        )}

        {/* --------------------------------------------------------------------- */}
        {/* SCENE 09: THE FINAL DESTINATION — SUNRISE METROPOLIS (0.90 to 1.00) */}
        {/* --------------------------------------------------------------------- */}
        {currentSceneIndex === 8 && (
          <div className="space-y-6 text-center pointer-events-auto">
            
            {/* FIRST REVEAL (pRel: 0.02 to 0.32): "THE JOURNEY HAS JUST BEGUN." */}
            {pRel >= 0.02 && pRel < 0.32 && (
              <div className="animate-fadeIn space-y-3">
                <span className="font-mono text-xs text-[#e5b061] tracking-widest uppercase block font-semibold">
                  EPILOGUE // THE HORIZON
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-slate-100 tracking-tight leading-tight">
                  &ldquo;The Journey Has <br />
                  <span className="italic font-normal text-gradient-gold">Just Begun.&rdquo;</span>
                </h1>
              </div>
            )}

            {/* SECOND REVEAL (pRel: 0.32 to 0.60): Identity & Title */}
            {pRel >= 0.32 && pRel < 0.60 && (
              <div className="animate-fadeIn space-y-2">
                <h2 className="text-3xl sm:text-5xl font-serif font-medium text-slate-100">
                  KRISHNA KAUSHIK
                </h2>
                <p className="text-xs sm:text-sm font-mono text-[#38bdf8] tracking-[0.2em] uppercase">
                  AI ENGINEER &bull; SOFTWARE DEVELOPER &bull; READY TO BUILD
                </p>
                <div className="pt-2 text-xs font-mono text-slate-400">
                  Open for Engineering Roles, Collaborations &amp; Groundbreaking AI Research
                </div>
              </div>
            )}

            {/* THIRD REVEAL (pRel: 0.60 to 1.00): Sequential Contact Cards */}
            {pRel >= 0.60 && (
              <div className="animate-fadeIn max-w-3xl mx-auto p-6 rounded-2xl border border-white/[0.15] bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-5">
                <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest block">
                  ESTABLISH DIRECT CONTACT &amp; VERIFY CREDENTIALS
                </span>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  {/* GitHub */}
                  <a
                    href="https://github.com/krishnakaushik1322007-ai"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-white/[0.08] bg-black/40 hover:border-white/30 hover:bg-white/[0.05] transition-all flex flex-col items-center space-y-1.5"
                  >
                    <GithubIcon className="w-5 h-5 text-slate-300" />
                    <span className="text-slate-200 font-bold">GITHUB</span>
                    <span className="text-[10px] text-slate-500">Repositories</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/krishna-kaushik-559239366/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-white/[0.08] bg-black/40 hover:border-[#38bdf8]/40 hover:bg-[#38bdf8]/10 transition-all flex flex-col items-center space-y-1.5"
                  >
                    <LinkedinIcon className="w-5 h-5 text-[#38bdf8]" />
                    <span className="text-slate-200 font-bold">LINKEDIN</span>
                    <span className="text-[10px] text-slate-500">Network</span>
                  </a>

                  {/* Copy Email */}
                  <button
                    onClick={handleCopyEmail}
                    className="p-3 rounded-xl border border-white/[0.08] bg-black/40 hover:border-[#e5b061]/40 hover:bg-[#e5b061]/10 transition-all flex flex-col items-center space-y-1.5"
                  >
                    <Mail className="w-5 h-5 text-[#e5b061]" />
                    <span className="text-slate-200 font-bold">EMAIL</span>
                    <span className="text-[10px] text-[#e5b061]">
                      {copiedEmail ? 'Copied!' : 'Copy Address'}
                    </span>
                  </button>

                  {/* Copy Phone */}
                  <button
                    onClick={handleCopyPhone}
                    className="p-3 rounded-xl border border-white/[0.08] bg-black/40 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all flex flex-col items-center space-y-1.5"
                  >
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <span className="text-slate-200 font-bold">+91 9650246706</span>
                    <span className="text-[10px] text-emerald-400">
                      {copiedPhone ? 'Copied!' : 'Copy Phone'}
                    </span>
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href="/Krishna_Kaushik_Resume.pdf"
                    download="Krishna_Kaushik_Resume.pdf"
                    className="px-6 py-2.5 rounded-xl bg-[#38bdf8] hover:bg-[#7dd3fc] text-black font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center space-x-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>DOWNLOAD OFFICIAL RESUME (PDF)</span>
                  </a>

                  <button
                    onClick={replayJourney}
                    className="px-5 py-2.5 rounded-xl border border-white/[0.15] hover:bg-white/[0.08] text-slate-300 font-mono text-xs uppercase tracking-wider transition-all flex items-center space-x-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>REPLAY JOURNEY (SCENE 01)</span>
                  </button>
                </div>

              </div>
            )}

          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* BOTTOM SPACER FOR MOVIE TRANSPORT HUD */}
      {/* ========================================================================= */}
      <div className="h-20 sm:h-24 pointer-events-none" />

    </div>
  );
}
