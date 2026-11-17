'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Layers, 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal, 
  Database, 
  Eye, 
  BrainCircuit, 
  Compass, 
  Info,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  FileCode2,
  Lock,
  Cpu
} from 'lucide-react';
import { useJourney } from '@/context/JourneyContext';

export default function Chapter04Building() {
  const { goToChapter, playCinematicChime } = useJourney();
  const [activeProject, setActiveProject] = useState<'campusos' | 'gyanix' | 'civiclens' | 'finadvisor' | 'agentic' | 'zeneth'>('campusos');

  // CampusOS Interactive State
  const [activeRole, setActiveRole] = useState<'admin' | 'teacher' | 'student' | 'parent' | 'ops'>('parent');
  const [screenshotIdx, setScreenshotIdx] = useState<number>(0);

  const campusOSScreenshots = [
    { url: '/projects/campusos/00_platform_ecosystem.png', caption: 'Platform Ecosystem & Unified Dashboard' },
    { url: '/projects/campusos/01_administrator_workspace.png', caption: 'Administrator Governance & Oversight Console' },
    { url: '/projects/campusos/02_teacher_workspace.png', caption: 'Teacher Academic Management & Attendance Portal' },
    { url: '/projects/campusos/03_student_portal.png', caption: 'Student Academic Schedule & Coursework Interface' },
    { url: '/projects/campusos/04_parent_my_child_today.png', caption: 'Parent "My Child Today" Daily Digest' },
    { url: '/projects/campusos/05_parent_sahayak_evidence.png', caption: 'Parent Sahayak Grounded AI Citation & Evidence View' },
    { url: '/projects/campusos/06_school_operations.png', caption: 'School Operations & Scheduled Transport Timetable' },
    { url: '/projects/campusos/09_platform_architecture_concept.png', caption: 'Platform Layer Architecture & Multi-Tenant Data Flow' }
  ];

  // Gyanix Socratic Demo State
  const [gyanixTurn, setGyanixTurn] = useState<number>(0);
  const gyanixTurns = [
    {
      q: 'Student: If electron drift velocity in copper is barely a few millimeters per second, why does a light bulb 10 meters away turn on immediately when I flip the wall switch?',
      a: 'Gyanix (Socratic Hint): Think of a garden hose already filled with water from end to end. When you turn on the tap, do you wait for a water molecule from the tap to reach the nozzle before water flows?',
      sub: 'Pedagogical diagnostic: Identifies misconception between carrier speed and electromagnetic wavefront propagation.'
    },
    {
      q: 'Student: No! Water flows immediately because the hose is already full, so pushing at one end pushes water everywhere at once!',
      a: 'Gyanix (Synthesis): Precisely! The electric field establishes at ~10⁸ m/s, setting free electrons into motion throughout the entire wire simultaneously. Individual electrons drift slowly, but the current I = n·A·e·v_d is immediate.',
      sub: 'Grounded in CBSE Class 12 Physics Chapter 3: Current Electricity, Section 3.4.'
    }
  ];

  // ZENETH C++ Crop selector
  const [selectedCrop, setSelectedCrop] = useState<string>('Wheat');
  const crops = [
    { name: 'Wheat', disease: 'Yellow Rust (Puccinia striiformis)', sev: 'Critical', rx: 'Propiconazole 25% EC @ 0.1% spray; sow resistant varieties (HD-3086, DBW-187)' },
    { name: 'Rice', disease: 'Bacterial Leaf Blight', sev: 'Severe', rx: 'Streptocycline (1g/10L) + Copper Oxychloride; drain excess water' },
    { name: 'Cotton', disease: 'Bacterial Blight / Angular Leaf Spot', sev: 'Moderate', rx: 'Copper Oxychloride (2.5g/L) + Streptocycline; seed delinting with H2SO4' },
    { name: 'Potato', disease: 'Late Blight (Phytophthora infestans)', sev: 'Critical', rx: 'Mancozeb 75% WP (2.5g/L) preventive, followed by Metalaxyl + Mancozeb' }
  ];

  const currentCrop = crops.find(c => c.name === selectedCrop) || crops[0];

  return (
    <section 
      id="building"
      className="relative min-h-screen py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] overflow-hidden bg-[#040711]"
    >
      <div className="relative max-w-7xl mx-auto w-full space-y-12 z-10">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#e5b061]/40 bg-[#e5b061]/10 text-[#e5b061] font-mono text-xs uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5 animate-pulse" />
              <span>CHAPTER 04 // THE BUILDING PHASE &bull; THEME: TURNING IDEAS INTO REALITY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-slate-100 tracking-tight">
              Ideas Become Meaningful <br />
              <span className="italic font-normal text-gradient-gold">When We Build Them.</span>
            </h2>
            <p className="mt-2 text-slate-300 font-sans text-sm sm:text-base max-w-3xl">
              The flagship engineering environment. Real codebases, deterministic safety layers, automated QA matrices, and zero fabricated claims.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-400">
              6 Verified Engineering Systems
            </span>
          </div>
        </div>

        {/* Project Selector Navigation Bar */}
        <div className="flex flex-wrap gap-2 border-b border-white/[0.08] pb-4">
          {[
            { id: 'campusos', label: '01. CampusOS AI (Flagship)', badge: '510 QA Suites' },
            { id: 'gyanix', label: '02. Gyanix (EdTech AI)', badge: '41 States' },
            { id: 'civiclens', label: '03. CivicLens (Spatial AI)', badge: 'PostGIS <=50m' },
            { id: 'agentic', label: '04. Agentic RAG Engine', badge: 'Hybrid Search' },
            { id: 'zeneth', label: '05. ZENETH (Native C++)', badge: '<1ms STL' },
            { id: 'finadvisor', label: '06. Financial Research AI', badge: 'Plotly & RAG' }
          ].map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setActiveProject(p.id as typeof activeProject);
                playCinematicChime(580);
              }}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs tracking-wider transition-all flex items-center space-x-2 ${
                activeProject === p.id
                  ? 'bg-gradient-to-r from-[#e5b061] to-[#f59e0b] text-black font-bold shadow-[0_0_20px_rgba(229,176,97,0.35)]'
                  : 'bg-white/[0.03] text-slate-300 border border-white/[0.06] hover:border-white/20 hover:text-white'
              }`}
            >
              <span>{p.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                activeProject === p.id ? 'bg-black/25 text-black' : 'bg-white/[0.05] text-[#38bdf8]'
              }`}>
                {p.badge}
              </span>
            </button>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* PROJECT 01: CAMPUSOS AI (THE FLAGSHIP CENTREPIECE) */}
        {/* ========================================================================= */}
        {activeProject === 'campusos' && (
          <div className="p-6 sm:p-10 rounded-2xl border border-[#e5b061]/35 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-8 animate-fadeIn">
            
            {/* Top Bar with Verified Testing Milestone */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/[0.08] pb-6">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#e5b061]/20 text-[#e5b061] border border-[#e5b061]/40 font-bold uppercase">
                    FLAGSHIP CENTREPIECE
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Ongoing Institutional Platform
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif text-slate-100 font-normal">
                  CampusOS AI &mdash; Role-Aware Institutional Platform
                </h3>
                <p className="text-sm font-sans text-slate-300 max-w-2xl">
                  Modernizing school administration and academic operations across 5 institutional stakeholder roles with grounded Gemini RAG, pgvector, and verified security controls.
                </p>
              </div>

              {/* Verified 510 QA Suite Badge */}
              <div className="p-4 rounded-xl border border-[#10b981]/40 bg-[#0a1714] shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col items-center justify-center text-center shrink-0 min-w-[200px]">
                <span className="text-[10px] font-mono text-[#10b981] uppercase tracking-wider">
                  VERIFIED QA MILESTONE
                </span>
                <div className="text-3xl font-serif font-bold text-slate-100 mt-0.5">
                  510 <span className="text-xs font-mono text-slate-400 font-normal">Collected</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-300 mt-1">
                  487 Passed &bull; 23 Skipped in Dev
                </span>
              </div>
            </div>

            {/* Screenshots Gallery with Interactive Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Platform Screenshots &amp; Architecture Captures ({screenshotIdx + 1} of {campusOSScreenshots.length}):
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setScreenshotIdx((prev) => (prev - 1 + campusOSScreenshots.length) % campusOSScreenshots.length)}
                    className="p-1.5 rounded border border-white/[0.1] text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setScreenshotIdx((prev) => (prev + 1) % campusOSScreenshots.length)}
                    className="p-1.5 rounded border border-white/[0.1] text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/[0.1] bg-black/80 shadow-2xl group">
                <Image
                  src={campusOSScreenshots[screenshotIdx].url}
                  alt={campusOSScreenshots[screenshotIdx].caption}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex items-center justify-between text-xs font-mono text-slate-200">
                  <span>{campusOSScreenshots[screenshotIdx].caption}</span>
                  <span className="text-[10px] text-[#e5b061]">REAL CAPTURE</span>
                </div>
              </div>
            </div>

            {/* 5-Role Workspace Interactive Demonstration */}
            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-mono text-[#e5b061] uppercase tracking-wider">
                  5 Stakeholder Workspaces (Role-Based Access Control):
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Strict boundary isolation per institutional tier
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'admin', label: '1. Administrator Console' },
                  { id: 'teacher', label: '2. Teacher Academic Portal' },
                  { id: 'student', label: '3. Student Schedule' },
                  { id: 'parent', label: '4. Parent Sahayak AI' },
                  { id: 'ops', label: '5. Operations & Transport' }
                ].map((r) => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setActiveRole(r.id as typeof activeRole);
                      playCinematicChime(640);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeRole === r.id
                        ? 'bg-[#38bdf8] text-black font-bold shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                        : 'bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:text-white'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Role Spec */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs text-slate-300 space-y-2">
                {activeRole === 'parent' && (
                  <div>
                    <span className="text-[#e5b061] font-semibold block mb-1">
                      Parent Sahayak AI &mdash; Grounded Bilingual School Companion:
                    </span>
                    <p className="font-sans text-slate-300 text-xs leading-relaxed">
                      Parents receive grounded updates in English and Hindi regarding daily coursework, cafeteria menus, and attendance. Every assertion includes direct source citations &mdash; eliminating hallucination.
                    </p>
                  </div>
                )}
                {activeRole === 'admin' && (
                  <div>
                    <span className="text-[#38bdf8] font-semibold block mb-1">
                      Administrator Governance &amp; Security Console:
                    </span>
                    <p className="font-sans text-slate-300 text-xs leading-relaxed">
                      Multi-tenant school administration with PBKDF2-HMAC-SHA256 password hashing, Refresh Token Rotation, Double-Submit Cookie CSRF protection, and route-level rate limiting.
                    </p>
                  </div>
                )}
                {activeRole === 'teacher' && (
                  <div>
                    <span className="text-[#10b981] font-semibold block mb-1">
                      Teacher Academic Management:
                    </span>
                    <p className="font-sans text-slate-300 text-xs leading-relaxed">
                      Validated attendance logging (10/10 automated endpoint tests), class grade rosters, and homework dispatch workflows.
                    </p>
                  </div>
                )}
                {activeRole === 'student' && (
                  <div>
                    <span className="text-cyan-300 font-semibold block mb-1">
                      Student Academic Schedule:
                    </span>
                    <p className="font-sans text-slate-300 text-xs leading-relaxed">
                      Timetables, assignment deadlines, and syllabus tracking with restricted read-only permissions on institutional records.
                    </p>
                  </div>
                )}
                {activeRole === 'ops' && (
                  <div>
                    <span className="text-purple-300 font-semibold block mb-1">
                      School Operations &amp; Scheduled Transport:
                    </span>
                    <p className="font-sans text-slate-300 text-xs leading-relaxed">
                      Bus route timetables, campus maintenance tickets, and operational logistics tracking.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Architecture Node Flow */}
            <div className="space-y-3 pt-4 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Platform Architecture Data Flow:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
                <div className="p-3 rounded-lg bg-black/50 border border-white/[0.06]">
                  <span className="text-[10px] text-slate-500 block">CLIENT</span>
                  <span className="text-slate-100 font-semibold">Next.js App Router</span>
                </div>
                <div className="p-3 rounded-lg bg-black/50 border border-white/[0.06]">
                  <span className="text-[10px] text-slate-500 block">AUTH</span>
                  <span className="text-[#e5b061] font-semibold">PBKDF2 + CSRF</span>
                </div>
                <div className="p-3 rounded-lg bg-black/50 border border-white/[0.06]">
                  <span className="text-[10px] text-slate-500 block">BACKEND</span>
                  <span className="text-[#38bdf8] font-semibold">FastAPI Async</span>
                </div>
                <div className="p-3 rounded-lg bg-black/50 border border-white/[0.06]">
                  <span className="text-[10px] text-slate-500 block">DATABASE</span>
                  <span className="text-[#10b981] font-semibold">Postgres + pgvector</span>
                </div>
                <div className="p-3 rounded-lg bg-black/50 border border-white/[0.06]">
                  <span className="text-[10px] text-slate-500 block">AI GROUNDING</span>
                  <span className="text-purple-300 font-semibold">Gemini 768-dim RAG</span>
                </div>
              </div>
            </div>

            {/* Deep Dive & Github Link */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-slate-400">
                Ongoing engineering project &bull; 0 customer numbers or adoption claimed
              </span>
              <Link
                href="/projects/campusos-ai"
                className="px-5 py-2.5 rounded-lg bg-[#e5b061] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#d49e4d] transition-all flex items-center space-x-2"
              >
                <span>READ FULL CAMPUSOS CASE STUDY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PROJECT 02: GYANIX */}
        {/* ========================================================================= */}
        {activeProject === 'gyanix' && (
          <div className="p-6 sm:p-10 rounded-2xl border border-[#38bdf8]/35 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div>
                <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider block">
                  PEDAGOGICAL COGNITIVE LAB &bull; CBSE CLASS 11 &amp; 12
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-slate-100 font-normal mt-0.5">
                  Gyanix &mdash; Curriculum-Aware Socratic AI Assistant
                </h3>
              </div>
              <div className="flex gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/40">
                  41 Tracked States
                </span>
                <span className="px-2.5 py-1 rounded bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/40">
                  0 Schema Errors
                </span>
              </div>
            </div>

            <p className="text-sm font-sans text-slate-300 leading-relaxed max-w-3xl">
              Unlike generic LLMs that spoon-feed formulas without diagnosing misunderstandings, Gyanix guides students through conceptual discovery using state-machine scaffolding grounded in NCERT syllabus codes.
            </p>

            {/* Interactive Socratic Turn Explorer */}
            <div className="p-5 rounded-xl bg-black/50 border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                <span className="text-xs font-mono text-[#e5b061] uppercase tracking-wider">
                  Interactive Socratic Interaction Demo (Turn {gyanixTurn + 1} of 2)
                </span>
                <button
                  onClick={() => {
                    setGyanixTurn(prev => (prev === 0 ? 1 : 0));
                    playCinematicChime(620);
                  }}
                  className="px-2.5 py-1 rounded bg-white/[0.06] text-xs font-mono text-slate-300 hover:text-white"
                >
                  Switch Dialogue Turn &rarr;
                </button>
              </div>

              <div className="space-y-3 font-sans text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-[#0b1424] border border-[#38bdf8]/25 text-slate-200">
                  {gyanixTurns[gyanixTurn].q}
                </div>
                <div className="p-3.5 rounded-lg bg-[#141208] border border-[#e5b061]/35 text-amber-100/90">
                  {gyanixTurns[gyanixTurn].a}
                </div>
                <div className="text-[11px] font-mono text-emerald-400">
                  {gyanixTurns[gyanixTurn].sub}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs font-mono text-slate-400">
                Pilot dataset on CBSE 12 Physics: Current Electricity (Drift Velocity)
              </span>
              <Link
                href="/projects/gyanix"
                className="text-[#38bdf8] font-mono text-xs hover:underline flex items-center space-x-1"
              >
                <span>Read Full Gyanix Case Study</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PROJECT 03: CIVICLENS */}
        {/* ========================================================================= */}
        {activeProject === 'civiclens' && (
          <div className="p-6 sm:p-10 rounded-2xl border border-[#10b981]/35 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div>
                <span className="text-[10px] font-mono text-[#10b981] uppercase tracking-wider block">
                  GEOSPATIAL &amp; VISION OBSERVATORY &bull; HACKATHON PROTOTYPE
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-slate-100 font-normal mt-0.5">
                  CivicLens &mdash; Civic Infrastructure Intelligence
                </h3>
              </div>
              <div className="flex gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/40">
                  40.4% Duplicate Noise Reduction
                </span>
                <span className="px-2.5 py-1 rounded bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/40">
                  100/100 Tests
                </span>
              </div>
            </div>

            <p className="text-sm font-sans text-slate-300 leading-relaxed max-w-3xl">
              Eliminating municipal dispatcher paralysis by executing PostGIS spatial clustering (<code>ST_DWithin &lt;= 50m</code>) and sub-500ms Gemini 2.5 Flash multimodal vision triage with a 6-factor deterministic priority score.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative h-44 rounded-lg overflow-hidden border border-white/[0.1]">
                <Image
                  src="/projects/civiclens/Gemini_Final_ Visual.png"
                  alt="CivicLens AI Vision Analysis"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 rounded-lg bg-black/50 border border-white/[0.06] font-mono text-xs text-slate-300 space-y-2">
                <span className="text-[#10b981] block font-semibold">// PostGIS Spatial Query</span>
                <div>WHERE ST_DWithin(centroid_geom, :pt, 50.0);</div>
                <div className="text-slate-400 pt-1 font-sans">
                  Clusters multi-citizen photo submissions for the same road cavity into one canonical municipal action ticket.
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs font-mono text-slate-400">
                Hackathon concept &bull; No government deployment claimed
              </span>
              <Link
                href="/projects/civiclens"
                className="text-[#10b981] font-mono text-xs hover:underline flex items-center space-x-1"
              >
                <span>Read Full CivicLens Case Study</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PROJECT 04: AGENTIC RAG ENGINE */}
        {/* ========================================================================= */}
        {activeProject === 'agentic' && (
          <div className="p-6 sm:p-10 rounded-2xl border border-cyan-500/35 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                  ENTERPRISE RAG ARCHITECTURE &bull; PUBLIC GITHUB REPO
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-slate-100 font-normal mt-0.5">
                  Agentic RAG Engine &mdash; Self-Reflective Retrieval
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono">
                8 / 8 Pytest Passing
              </span>
            </div>

            <p className="text-sm font-sans text-slate-300 leading-relaxed max-w-3xl">
              Engineered to overcome naive RAG limitations using semantic intent routing, hybrid FAISS dense + BM25 lexical search, cross-encoder reranking, and automated self-reflection hallucination checks.
            </p>

            <div className="p-4 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-xs text-slate-300 space-y-1.5">
              <div className="text-slate-500">// Multi-Stage Verification Pipeline</div>
              <div className="text-cyan-400">Query &rarr; Semantic Router &rarr; Hybrid (FAISS + BM25) &rarr; Cross-Encoder &rarr; Self-Reflect Gate</div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <a
                href="https://github.com/krishnakaushik1322007-ai/Agentic-RAG-Engine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-mono text-xs hover:underline flex items-center space-x-1"
              >
                <span>View Public GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/projects/agentic-rag-engine"
                className="text-[#e5b061] font-mono text-xs hover:underline flex items-center space-x-1"
              >
                <span>Deep Dive</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PROJECT 05: ZENETH C++ */}
        {/* ========================================================================= */}
        {activeProject === 'zeneth' && (
          <div className="p-6 sm:p-10 rounded-2xl border border-rose-500/35 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div>
                <span className="text-[10px] font-mono text-rose-400 uppercase tracking-wider block">
                  LOW-LATENCY EMBEDDED SYSTEM &bull; NATIVE C++ STL
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-slate-100 font-normal mt-0.5">
                  ZENETH &mdash; Crop Disease Expert System
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-mono">
                &lt; 1ms Latency &bull; 0 Cloud Ops
              </span>
            </div>

            <p className="text-sm font-sans text-slate-300 leading-relaxed max-w-3xl">
              High-performance deterministic rule engine in native C++ for rural offline field terminals. Evaluates symptom signatures across 9 agricultural crops without network access or GPU overhead.
            </p>

            <div className="flex flex-wrap gap-2">
              {crops.map((c) => (
                <button
                  key={c.name}
                  onClick={() => {
                    setSelectedCrop(c.name);
                    playCinematicChime(660);
                  }}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                    selectedCrop === c.name
                      ? 'bg-rose-500 text-white font-bold'
                      : 'bg-white/[0.04] text-slate-400 hover:text-white'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-xs text-slate-300 space-y-1">
              <div>PATHOGEN: <span className="text-rose-300">{currentCrop.disease}</span> ({currentCrop.sev})</div>
              <div>REMEDY: <span className="text-slate-300 font-sans">{currentCrop.rx}</span></div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <a
                href="https://github.com/krishnakaushik1322007-ai/Cpp-Project-build-2nd-Sem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-400 font-mono text-xs hover:underline flex items-center space-x-1"
              >
                <span>View Public C++ Repository (Cpp-Project-build-2nd-Sem)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/projects/zeneth-crop-expert"
                className="text-[#e5b061] font-mono text-xs hover:underline flex items-center space-x-1"
              >
                <span>Deep Dive</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PROJECT 06: FINANCIAL RESEARCH ASSISTANT AI */}
        {/* ========================================================================= */}
        {activeProject === 'finadvisor' && (
          <div className="p-6 sm:p-10 rounded-2xl border border-amber-500/35 bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">
                  RAG DOCUMENT ANALYSIS &bull; FINANCIAL RESEARCH ASSISTANT
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-slate-100 font-normal mt-0.5">
                  Financial Advisor AI &mdash; Research Assistant
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono">
                Streamlit + Plotly + FAISS
              </span>
            </div>

            <p className="text-sm font-sans text-slate-300 leading-relaxed max-w-3xl">
              Retrieval-augmented financial analysis assistant engineered to parse balance sheets, quarterly reports, and corporate filings into cited quantitative findings. Framed strictly as an analytical research assistant, not certified investment advice.
            </p>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs font-mono text-slate-400">
                Analytical document research tool with citation-grounded answers
              </span>
              <Link
                href="/projects/financial-advisor-ai"
                className="text-amber-400 font-mono text-xs hover:underline flex items-center space-x-1"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        )}

        {/* Step Forward Prompt to Chapter 05 (Professional Journey) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <div className="text-xs font-mono text-slate-400 flex items-center space-x-2">
            <Info className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Next up: Chapter 05 &mdash; Professional Internship Journey</span>
          </div>

          <button
            onClick={() => {
              goToChapter(4);
              playCinematicChime(580);
            }}
            className="px-6 py-2.5 rounded-xl bg-[#38bdf8] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#7dd3fc] transition-all flex items-center space-x-2 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
          >
            <span>CONTINUE TO CHAPTER 05</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
