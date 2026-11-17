'use client';

import React, { useState } from 'react';
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
  Send
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../BrandIcons';
import { useMovie } from '@/context/MovieContext';

export default function CinematicNarrativeOverlay() {
  const { 
    progress, 
    currentScene, 
    currentSceneIndex, 
    openProjectModal, 
    setIsCertificateModalOpen,
    seekProgress,
    replayJourney
  } = useMovie();

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
    <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-between p-4 sm:p-8 md:p-12 overflow-hidden">
      
      {/* Top Scene Identifier Watermark */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/[0.1] bg-black/40 backdrop-blur-md text-[11px] font-mono text-[#38bdf8] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span>SCENE 0{currentSceneIndex + 1} &bull; {currentScene.title}</span>
          </div>
          <div className="text-[10px] font-mono text-slate-400 pl-1">
            TIMELINE: {(progress * 100).toFixed(1)}% &bull; {currentScene.theme}
          </div>
        </div>

        {/* Quick Resume Download Pill (Always available for recruiters) */}
        <div className="pointer-events-auto flex items-center space-x-2">
          <a
            href="/Krishna_Kaushik_Resume.pdf"
            download="Krishna_Kaushik_Resume.pdf"
            className="px-3.5 py-1.5 rounded-lg border border-[#38bdf8]/40 bg-[#070b16]/80 backdrop-blur-md hover:bg-[#38bdf8]/20 text-[#38bdf8] font-mono text-xs tracking-wider flex items-center space-x-1.5 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            title="Download Verified Resume PDF"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME PDF</span>
          </a>
        </div>
      </div>

      {/* Center Cinematic Titles & Stories (Fades in/out based on scene) */}
      <div className="my-auto max-w-4xl mx-auto w-full text-center space-y-6">
        
        {/* ========================================================================= */}
        {/* SCENE 01: THE OPENING (0.00 to 0.14) */}
        {/* ========================================================================= */}
        {currentSceneIndex === 0 && (
          <div className="space-y-4 animate-fadeIn">
            <span className="font-mono text-xs sm:text-sm text-[#e5b061] tracking-widest uppercase font-semibold block">
              A CINEMATIC PORTFOLIO EXPERIENCE
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-slate-100 tracking-tight leading-[1.08]">
              &ldquo;Every Journey Begins <br />
              With a <span className="italic font-normal text-gradient-gold">Dream.&rdquo;</span>
            </h1>
            <div className="pt-2 space-y-1">
              <h2 className="text-xl sm:text-2xl font-serif text-slate-200">
                KRISHNA KAUSHIK
              </h2>
              <p className="text-xs sm:text-sm font-mono text-cyan-300 tracking-widest uppercase">
                AI ENGINEER &bull; SOFTWARE DEVELOPER &bull; CSE (AI) SCHOLAR
              </p>
            </div>
            <div className="pt-4 pointer-events-auto inline-flex items-center space-x-3">
              <button
                onClick={() => seekProgress(0.15)}
                className="px-6 py-2.5 rounded-xl bg-[#e5b061] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#fef08a] transition-all flex items-center space-x-2 shadow-[0_0_25px_rgba(229,176,97,0.4)]"
              >
                <span>ADVANCE TO THE FOUNDATION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SCENE 02: THE FOUNDATION (0.14 to 0.28) */}
        {/* ========================================================================= */}
        {currentSceneIndex === 1 && (
          <div className="space-y-5 animate-fadeIn">
            <span className="font-mono text-xs text-[#38bdf8] tracking-widest uppercase block">
              ACADEMIC RIGOR &bull; SHOOLINI UNIVERSITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
              Every Engineer Needs a <span className="italic font-normal text-gradient-cyan">Strong Foundation.</span>
            </h2>

            <div className="max-w-2xl mx-auto p-6 rounded-2xl border border-white/[0.12] bg-[#070b16]/85 backdrop-blur-xl shadow-2xl space-y-4 pointer-events-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
                <div className="text-left">
                  <span className="text-[11px] font-mono text-[#38bdf8] block">SHOOLINI UNIVERSITY</span>
                  <div className="text-lg font-serif text-slate-100 font-medium">
                    B.Tech &ndash; Computer Science &amp; Engineering (AI)
                  </div>
                  <span className="text-xs font-mono text-slate-400">2025 &ndash; 2029 (Expected)</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-[#121828] border border-[#e5b061]/40 text-center">
                  <span className="text-[9px] font-mono text-[#e5b061] block">CUMULATIVE CGPA</span>
                  <span className="text-2xl font-serif font-bold text-slate-100">9.05 <span className="text-xs font-mono text-slate-400">/ 10</span></span>
                </div>
              </div>

              <div className="text-left text-xs text-slate-300 font-sans space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Core Foundations:
                </span>
                <p>
                  Data Structures &amp; Algorithms, Database Management Systems (DBMS), Object-Oriented Programming (C++), Python Scripting, Discrete Mathematics, Computer Architecture.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SCENE 03: THE AWAKENING (0.28 to 0.42) */}
        {/* ========================================================================= */}
        {currentSceneIndex === 2 && (
          <div className="space-y-5 animate-fadeIn">
            <span className="font-mono text-xs text-violet-400 tracking-widest uppercase block">
              THE CYBERNETIC RESEARCH LABORATORY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
              &ldquo;Curiosity Became Learning. <br />
              Learning Became the <span className="italic font-normal text-gradient-journey">Desire to Build.&rdquo;</span>
            </h2>

            {/* Glowing Tech Arsenal Matrix in 3D Overlay */}
            <div className="max-w-3xl mx-auto p-6 rounded-2xl border border-white/[0.12] bg-[#070b16]/85 backdrop-blur-xl shadow-2xl space-y-4 pointer-events-auto text-left">
              <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider block">
                Verified Technical Arsenal:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded bg-black/40 border border-white/[0.06]">
                  <span className="text-[10px] text-slate-500 block">AI &amp; LLMS</span>
                  <span className="text-cyan-300">Gemini, RAG, FAISS</span>
                </div>
                <div className="p-2.5 rounded bg-black/40 border border-white/[0.06]">
                  <span className="text-[10px] text-slate-500 block">PROGRAMMING</span>
                  <span className="text-emerald-300">Python, C++, C, JS, SQL</span>
                </div>
                <div className="p-2.5 rounded bg-black/40 border border-white/[0.06]">
                  <span className="text-[10px] text-slate-500 block">FULL-STACK</span>
                  <span className="text-amber-300">Next.js, FastAPI, Node</span>
                </div>
                <div className="p-2.5 rounded bg-black/40 border border-white/[0.06]">
                  <span className="text-[10px] text-slate-500 block">DATABASES</span>
                  <span className="text-purple-300">Postgres, pgvector</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SCENE 04: THE CREATION (0.42 to 0.65) — FLAGSHIP WORKBENCH */}
        {/* ========================================================================= */}
        {currentSceneIndex === 3 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#e5b061]/40 bg-[#e5b061]/10 text-[#e5b061] font-mono text-xs uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>THE CREATION // ENGINEERING FOUNDRY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
              Ideas Become Meaningful <br />
              <span className="italic font-normal text-gradient-gold">When We Build Them.</span>
            </h2>

            {/* Clickable 6-Project Holographic Grid */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pointer-events-auto text-left">
              {[
                { slug: 'campusos-ai', title: 'CampusOS AI (Flagship)', note: '510 QA Suites &bull; 5 Roles', color: 'border-[#e5b061] text-[#e5b061]' },
                { slug: 'gyanix', title: 'Gyanix (Socratic AI)', note: '41 States &bull; CBSE 12 Physics', color: 'border-[#38bdf8] text-[#38bdf8]' },
                { slug: 'civiclens', title: 'CivicLens (Spatial AI)', note: 'PostGIS <=50m &bull; 100/100 Tests', color: 'border-[#10b981] text-[#10b981]' },
                { slug: 'agentic-rag-engine', title: 'Agentic RAG Engine', note: 'Hybrid FAISS+BM25 &bull; 8/8 Tests', color: 'border-cyan-400 text-cyan-300' },
                { slug: 'zeneth-crop-expert', title: 'ZENETH (Native C++)', note: '<1ms STL &bull; 9 Crops &bull; Offline', color: 'border-rose-400 text-rose-300' },
                { slug: 'financial-advisor-ai', title: 'Financial Advisor AI', note: '10-K Parsing &bull; Plotly RAG', color: 'border-amber-400 text-amber-300' }
              ].map((p) => (
                <div
                  key={p.slug}
                  onClick={() => openProjectModal(p.slug)}
                  className="p-4 rounded-xl border border-white/[0.1] bg-[#070b16]/90 backdrop-blur-xl hover:border-white/30 cursor-pointer transition-all hover:scale-[1.02] shadow-xl group"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className={`font-semibold ${p.color}`}>{p.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">
                    {p.note}
                  </div>
                  <div className="text-[10px] font-mono text-[#38bdf8] mt-2 group-hover:underline">
                    PAUSE &amp; INSPECT SPEC &rarr;
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SCENE 05: THE PROFESSIONAL JOURNEY (0.65 to 0.78) */}
        {/* ========================================================================= */}
        {currentSceneIndex === 4 && (
          <div className="space-y-5 animate-fadeIn">
            <span className="font-mono text-xs text-[#10b981] tracking-widest uppercase block">
              CORIZO &ndash; INTERNSHIP PROGRAMME (COLLABORATION WITH IIT BOMBAY)
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
              Expanding Technical <span className="italic font-normal text-gradient-emerald">Horizons.</span>
            </h2>

            <div className="max-w-2xl mx-auto p-6 rounded-2xl border border-white/[0.12] bg-[#070b16]/85 backdrop-blur-xl shadow-2xl space-y-3 pointer-events-auto text-left">
              <div className="p-3.5 rounded-lg border border-[#10b981]/50 bg-[#0a1714]">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#10b981] font-bold">STAGE 01 &mdash; IoT and Robotics (3 Months)</span>
                  <span className="px-2 py-0.5 rounded bg-[#10b981]/25 text-[#10b981]">CURRENTLY ONGOING</span>
                </div>
                <p className="text-xs text-slate-300 font-sans mt-1">
                  Microcontroller architectures, sensor telemetry, hardware-software interfacing, and robotics kinematics.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 rounded-lg border border-white/[0.08] bg-black/40">
                  <span className="text-slate-300 block">STAGE 02 &bull; Data Science</span>
                  <span className="text-[10px] text-slate-500">3 Months &bull; UPCOMING</span>
                </div>
                <div className="p-3 rounded-lg border border-white/[0.08] bg-black/40">
                  <span className="text-slate-300 block">STAGE 03 &bull; Nanotechnology</span>
                  <span className="text-[10px] text-slate-500">3 Months &bull; UPCOMING</span>
                </div>
              </div>

              <span className="text-[10px] font-mono text-slate-400 block pt-1">
                *Accurate attribution: Trainee in collaborative programme; not directly employed by IIT Bombay.
              </span>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SCENE 06: THE MILESTONES (0.78 to 0.88) */}
        {/* ========================================================================= */}
        {currentSceneIndex === 5 && (
          <div className="space-y-5 animate-fadeIn">
            <span className="font-mono text-xs text-purple-400 tracking-widest uppercase block">
              MOUNTAIN SUMMIT &bull; COMPETITIVE MILESTONE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
              Anveshan Hackathon <span className="italic font-normal text-gradient-journey">Round 2.</span>
            </h2>

            <div className="max-w-xl mx-auto p-6 rounded-2xl border border-purple-500/30 bg-[#070b16]/85 backdrop-blur-xl shadow-2xl space-y-4 pointer-events-auto">
              <Award className="w-10 h-10 text-purple-400 mx-auto" />
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Successfully advanced to Round 2 in the competitive Anveshan Hackathon, presenting engineering architectures evaluated under real contest constraints.
              </p>
              <button
                onClick={() => setIsCertificateModalOpen(true)}
                className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                Inspect Official Participation Certificate
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SCENE 07: THE DESTINATION (0.88 to 1.00) — CREDITS & DISPATCH */}
        {/* ========================================================================= */}
        {currentSceneIndex === 6 && (
          <div className="space-y-6 animate-fadeIn pointer-events-auto">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-slate-100 tracking-tight">
                &ldquo;This Is Not the Destination. <br />
                <span className="italic font-normal text-gradient-journey">It Is Just the Beginning.&rdquo;</span>
              </h2>
              <div className="text-base sm:text-xl font-serif text-slate-300 pt-1">
                KRISHNA KAUSHIK &bull; AI ENGINEER &amp; SOFTWARE DEVELOPER
              </div>
            </div>

            {/* Direct Connect Hub Card */}
            <div className="max-w-3xl mx-auto p-6 rounded-2xl border border-white/[0.12] bg-[#070b16]/90 backdrop-blur-xl shadow-2xl space-y-5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div 
                  onClick={handleCopyEmail}
                  className="p-3 rounded-lg bg-black/50 border border-white/[0.08] cursor-pointer hover:border-[#38bdf8] transition-all flex flex-col justify-between"
                >
                  <span className="text-[10px] text-slate-500">EMAIL (ONE-CLICK COPY)</span>
                  <span className="text-slate-100 font-semibold truncate">krishnakaushik1322007@gmail.com</span>
                  <span className="text-[10px] text-[#38bdf8] mt-1">{copiedEmail ? 'COPIED!' : 'Click to copy'}</span>
                </div>

                <div 
                  onClick={handleCopyPhone}
                  className="p-3 rounded-lg bg-black/50 border border-white/[0.08] cursor-pointer hover:border-[#38bdf8] transition-all flex flex-col justify-between"
                >
                  <span className="text-[10px] text-slate-500">PHONE (ONE-CLICK COPY)</span>
                  <span className="text-slate-100 font-semibold">+91 9650246706</span>
                  <span className="text-[10px] text-[#38bdf8] mt-1">{copiedPhone ? 'COPIED!' : 'Click to copy'}</span>
                </div>

                <a 
                  href="/Krishna_Kaushik_Resume.pdf"
                  download="Krishna_Kaushik_Resume.pdf"
                  className="p-3 rounded-lg bg-[#38bdf8]/15 border border-[#38bdf8]/40 hover:bg-[#38bdf8]/25 transition-all flex flex-col justify-between"
                >
                  <span className="text-[10px] text-[#38bdf8]">OFFICIAL RESUME</span>
                  <span className="text-white font-bold">Download PDF &rarr;</span>
                  <span className="text-[10px] text-slate-400 mt-1">Verified Credentials</span>
                </a>
              </div>

              {/* Verified Profiles & Replay Journey Button */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/[0.08]">
                <div className="flex items-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/krishna-kaushik-559239366/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded bg-black/50 border border-white/[0.08] text-xs font-mono text-cyan-300 hover:text-white flex items-center space-x-1.5"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/krishnakaushik1322007-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded bg-black/50 border border-white/[0.08] text-xs font-mono text-[#e5b061] hover:text-white flex items-center space-x-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Profile</span>
                  </a>
                </div>

                <button
                  onClick={replayJourney}
                  className="px-4 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-xs font-mono text-slate-200 flex items-center space-x-1.5 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>REPLAY THE FILM</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Spacer (Room for Player HUD) */}
      <div className="h-16" />
    </div>
  );
}
