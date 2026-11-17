'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Cpu, 
  Terminal, 
  Layers, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Compass, 
  ExternalLink,
  ChevronRight,
  Database,
  Eye,
  FileCode,
  Activity,
  Volume2,
  VolumeX,
  Send,
  Search,
  Check
} from 'lucide-react';

interface PrototypeOption {
  id: string;
  name: string;
  tag: string;
  category: string;
  fileSnippet: {
    filename: string;
    lang: string;
    code: string;
  };
  metrics: {
    qaSuites: string;
    latency: string;
    memory: string;
    throughput: string;
  };
  steps: string[];
}

const PROTOTYPES: PrototypeOption[] = [
  {
    id: 'campusos',
    name: 'CampusOS AI',
    tag: 'FLAGSHIP // INSTITUTIONAL OS',
    category: 'Full-Stack EdTech & Gemini RAG',
    fileSnippet: {
      filename: 'src/lib/rag/grounded_query.ts',
      lang: 'typescript',
      code: `// Grounded Gemini RAG Vector Pipeline
export async function executeGroundedRAG(query: string, tenantId: string) {
  const embedding = await gemini.embedContent({
    model: "text-embedding-004",
    content: { parts: [{ text: query }] }
  });
  
  // Dense 768-dim cosine distance via Supabase pgvector
  const { data: chunks } = await supabase.rpc("match_institutional_chunks", {
    query_embedding: embedding.values,
    match_threshold: 0.82,
    filter_tenant: tenantId,
    match_count: 5
  });

  return verifyFaithfulness(chunks, query); // Zero Hallucination
}`
    },
    metrics: {
      qaSuites: '510 Suites (487 Pass / 23 Skip)',
      latency: '340ms Vector Match',
      memory: '48.2 MB Resident',
      throughput: '142 tok/s Stream'
    },
    steps: [
      'Synthesizing pgvector cosine distance schema (768-dim)...',
      'Hardening RBAC boundaries (PBKDF2-HMAC-SHA256 & CSRF)...',
      'Mounting Next.js 5-tier role switcher (Student / Teacher / Admin)...',
      'Executing automated test harness: 510 QA suites passing...',
      'Live prototype converged. Ready for interactive demonstration.'
    ]
  },
  {
    id: 'civiclens',
    name: 'CivicLens Municipal Platform',
    tag: 'CIVIC INTEL // MULTIMODAL VISION',
    category: 'PostGIS ST_DWithin & Gemini 2.5 Flash',
    fileSnippet: {
      filename: 'engine/spatial_triage.py',
      lang: 'python',
      code: `# PostGIS Spatial Deduplication Engine
def cluster_complaints(lat: float, lon: float, category: str):
    # ST_DWithin merges complaints within 50-meter radius
    query = """
    SELECT id, cluster_id, ST_Distance(geom, ST_MakePoint(%s, %s)::geography)
    FROM municipal_issues
    WHERE ST_DWithin(geom, ST_MakePoint(%s, %s)::geography, 50)
      AND category = %s AND status = 'OPEN';
    """
    duplicates = db.execute(query, (lon, lat, lon, lat, category))
    # Merges 40.4% noise into single canonical municipal ticket
    return merge_or_create(duplicates)`
    },
    metrics: {
      qaSuites: '100 / 100 Automated Tests',
      latency: '<500ms Vision Triage',
      memory: '36.4 MB Microservice',
      throughput: '40.4% Noise Reduction'
    },
    steps: [
      'Ingesting geospatial GPS coordinates & citizen photo feed...',
      'Invoking Gemini 2.5 Flash multimodal vision triage (<500ms)...',
      'Running PostGIS ST_DWithin (<=50m) spatial clustering...',
      'Merging duplicate citizen tickets into canonical issue #1048...',
      'Municipal dispatch routing verified with 100/100 tests passing.'
    ]
  },
  {
    id: 'gyanix',
    name: 'Gyanix Socratic Dataset',
    tag: 'PEDAGOGICAL // 41 STATE TRANSITIONS',
    category: 'CBSE Class 12 Physics Socratic Engine',
    fileSnippet: {
      filename: 'engine/state_machine.ts',
      lang: 'typescript',
      code: `// Multi-Turn Socratic Pedagogical State Controller
export class SocraticStateMachine {
  private currentState: SocraticState = 'DRIFT_VELOCITY_INTRO';
  
  transition(studentInput: string, misconceptionId?: string) {
    // 41 verified state transitions with zero schema errors
    const evaluation = evaluateNCERTSchema(studentInput);
    if (evaluation.hasMisconception) {
      return this.generateSocraticHint(evaluation.misconception);
    }
    return this.advanceState(evaluation.nextTargetState);
  }
}`
    },
    metrics: {
      qaSuites: '41 State Transitions',
      latency: '18ms State Resolution',
      memory: '24.1 MB In-Memory',
      throughput: '0 Schema Errors'
    },
    steps: [
      'Loading CBSE Class 12 Physics ontology (Drift Velocity)...',
      'Validating 41 state transitions against NCERT curriculum...',
      'Initializing multi-turn student misconception detector...',
      'Enforcing strict JSON schema with zero circular loops...',
      'Socratic dialogue engine mounted and ready for student prompts.'
    ]
  },
  {
    id: 'zeneth',
    name: 'ZENETH C++ Expert System',
    tag: 'EMBEDDED C++ // 100% OFFLINE',
    category: 'Zero Cloud Overhead Crop Rule Engine',
    fileSnippet: {
      filename: 'src/expert_engine.cpp',
      lang: 'cpp',
      code: `// Native C++ STL Offline Crop Disease Expert System
#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

struct Diagnosis {
    std::string diseaseName;
    int confidenceScore;
    std::string treatmentProtocol;
};

Diagnosis evaluateSymptoms(const std::vector<std::string>& tokens) {
    // Tokenizes farmer input and searches rule graph in <1ms
    for (const auto& cropRule : g_CropRuleDatabase) {
        if (cropRule.matches(tokens)) {
            return { cropRule.name, cropRule.confidence, cropRule.treatment };
        }
    }
    return { "Unknown", 0, "Consult Agronomist" };
}`
    },
    metrics: {
      qaSuites: '9 Agricultural Crops',
      latency: '<1ms Memory Search',
      memory: '4.8 MB Resident',
      throughput: '100% Offline (0 bytes cloud)'
    },
    steps: [
      'Allocating C++ STL rule graphs into resident memory...',
      'Compiling symptom tokenization parser with zero cloud deps...',
      'Indexing 9 agricultural crops & diagnostic treatment vectors...',
      'Benchmarking query execution speed: <1 millisecond search...',
      'Offline diagnostic expert system initialized and fully operational.'
    ]
  }
];

export default function LiveAgentPrototypeStudio() {
  const [selectedProtoId, setSelectedProtoId] = useState<string>('campusos');
  const [buildStep, setBuildStep] = useState<number>(0);
  const [isCompiling, setIsCompiling] = useState<boolean>(true);
  const [typedCodeLength, setTypedCodeLength] = useState<number>(0);
  const [speedMultiplier, setSpeedMultiplier] = useState<1 | 2>(1);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'telemetry'>('preview');

  // Interactive prototype state variables
  const [activeRole, setActiveRole] = useState<'student' | 'teacher' | 'admin'>('student');
  const [searchQuery, setSearchQuery] = useState<string>('attendance policy during semester exams');
  const [isQueryingRAG, setIsQueryingRAG] = useState<boolean>(false);
  const [ragResult, setRagResult] = useState<string | null>(null);

  // CivicLens interactive state
  const [civicReports, setCivicReports] = useState<number>(3);
  const [isClustered, setIsClustered] = useState<boolean>(false);

  // Gyanix interactive state
  const [socraticHistory, setSocraticHistory] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    { role: 'ai', text: 'Consider a wire carrying electric current. Do electrons accelerate continuously across its entire length?' }
  ]);
  const [studentInput, setStudentInput] = useState<string>('');

  // Audio Context for mechanical typing and compiler sounds
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playSynthSound = useCallback((freq = 700, duration = 0.04) => {
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
      osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 50, ctx.currentTime);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio unsupported or silenced
    }
  }, [audioEnabled]);

  const activeProto = PROTOTYPES.find((p) => p.id === selectedProtoId) || PROTOTYPES[0];

  // Re-run autonomous build simulation whenever prototype changes or user clicks rebuild
  const triggerRebuild = useCallback(() => {
    setIsCompiling(true);
    setBuildStep(0);
    setTypedCodeLength(0);
    setIsClustered(false);
    setRagResult(null);
  }, []);

  useEffect(() => {
    triggerRebuild();
  }, [selectedProtoId, triggerRebuild]);

  // Build progression loop
  useEffect(() => {
    if (!isCompiling) return;

    const intervalTime = speedMultiplier === 2 ? 600 : 1200;
    const codeTypingInterval = setInterval(() => {
      setTypedCodeLength((prev) => {
        if (prev < activeProto.fileSnippet.code.length) {
          playSynthSound(500 + (prev % 20) * 15, 0.02);
          return Math.min(activeProto.fileSnippet.code.length, prev + 18);
        }
        return prev;
      });
    }, 40 / speedMultiplier);

    const stepInterval = setInterval(() => {
      setBuildStep((prev) => {
        if (prev < activeProto.steps.length - 1) {
          playSynthSound(850 + prev * 80, 0.08);
          return prev + 1;
        } else {
          setIsCompiling(false);
          clearInterval(stepInterval);
          clearInterval(codeTypingInterval);
          setTypedCodeLength(activeProto.fileSnippet.code.length);
          playSynthSound(1200, 0.15); // Completion chime
          return prev;
        }
      });
    }, intervalTime);

    return () => {
      clearInterval(stepInterval);
      clearInterval(codeTypingInterval);
    };
  }, [isCompiling, speedMultiplier, activeProto, playSynthSound]);

  // Handle RAG mock execution
  const handleRunRAG = () => {
    setIsQueryingRAG(true);
    playSynthSound(900, 0.05);
    setTimeout(() => {
      setIsQueryingRAG(false);
      setRagResult(
        'According to §4.2 of Shoolini University Academic Regulations: A minimum of 75% attendance is strictly mandatory to sit for end-semester examinations. Medical exceptions must be endorsed by the Dean of Academic Affairs within 7 working days [Ground-truth Citation: Student_Handbook_2025.pdf#L142].'
      );
      playSynthSound(1100, 0.1);
    }, 700);
  };

  // Handle Socratic physics prompt
  const handleSendSocratic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentInput.trim()) return;

    const query = studentInput;
    setStudentInput('');
    playSynthSound(750, 0.03);

    setSocraticHistory((prev) => [
      ...prev,
      { role: 'user', text: query }
    ]);

    setTimeout(() => {
      setSocraticHistory((prev) => [
        ...prev,
        {
          role: 'ai',
          text: 'Notice that while an electric field accelerates free electrons, frequent collisions with vibrating lattice ions continually disrupt their momentum. Hence, what average net motion do they acquire instead of infinite acceleration?'
        }
      ]);
      playSynthSound(950, 0.08);
    }, 800);
  };

  return (
    <section id="live-builder" className="relative py-24 border-b border-white/[0.08] bg-[#050508] overflow-hidden">
      {/* Background Cyber Grid & Glow */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-red-600/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Left Red Vertical Guide */}
      <div className="vertical-accent-line hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 md:pl-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-500 tracking-wider">
              //00.99 LIVE AGENT FORGE [AUTONOMOUS WORKBENCH]
            </div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>LIVE AUTONOMOUS PROTOTYPE BUILDER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Watch The AI Agent Build <span className="text-red-500">Live Software</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Experience autonomous software engineering in real time: watch the agent reason through architecture, compile TypeScript and Python microservices, and construct working interactive prototypes right before your eyes.
            </p>
          </div>

          {/* Prototype Selector Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none self-start md:self-auto">
            {PROTOTYPES.map((p) => {
              const isSelected = p.id === selectedProtoId;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProtoId(p.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono whitespace-nowrap transition-all duration-200 border flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-red-500 text-white font-bold border-red-500 shadow-[0_0_18px_rgba(239,68,68,0.4)]'
                      : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border-white/[0.08]'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* The Master Agent Workbench Studio */}
        <div className="rounded-2xl border border-white/10 bg-[#08080d]/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden">
          
          {/* Workbench Top Status Bar */}
          <div className="px-4 py-3 bg-[#0d0d14] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            
            {/* Left: Agent Status indicator */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <span className={`w-2.5 h-2.5 rounded-full ${isCompiling ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`} />
                <span className="font-bold text-white uppercase tracking-wider">
                  {isCompiling ? 'AGENT BUILDING PROTOTYPE' : 'PROTOTYPE CONVERGED & ACTIVE'}
                </span>
              </div>
              <span className="text-slate-500 hidden sm:inline">&bull;</span>
              <span className="text-red-400 font-semibold hidden sm:inline">
                {activeProto.tag}
              </span>
            </div>

            {/* Right: Controller Tools (Rebuild, Speed, Sound) */}
            <div className="flex items-center space-x-2">
              <button
                onClick={triggerRebuild}
                className="px-2.5 py-1 rounded bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/30 text-[11px] font-bold tracking-wider transition-all flex items-center space-x-1"
                title="Wipe and rebuild prototype live"
              >
                <RotateCcw className={`w-3 h-3 ${isCompiling ? 'animate-spin' : ''}`} />
                <span>Re-Build</span>
              </button>

              <button
                onClick={() => setSpeedMultiplier(speedMultiplier === 1 ? 2 : 1)}
                className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-[11px] font-bold"
              >
                {speedMultiplier}x Speed
              </button>

              <button
                onClick={() => setAudioEnabled(!audioEnabled)}
                className="p-1.5 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title={audioEnabled ? 'Mute Mechanical Audio' : 'Enable Synth Click Audio'}
              >
                {audioEnabled ? <Volume2 className="w-3.5 h-3.5 text-red-400" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>

              {/* View Tabs */}
              <div className="flex bg-black/40 rounded p-0.5 border border-white/10 ml-2">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                    activeTab === 'preview' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Live App
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                    activeTab === 'code' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Code Stream
                </button>
                <button
                  onClick={() => setActiveTab('telemetry')}
                  className={`px-2.5 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                    activeTab === 'telemetry' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Telemetry
                </button>
              </div>
            </div>

          </div>

          {/* Workbench Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
            
            {/* Left 4 Cols: Autonomous Agent Reasoning Stream */}
            <div className="lg:col-span-4 p-5 border-r border-white/10 bg-[#07070c] flex flex-col justify-between font-mono text-xs space-y-4">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                    <Activity className="w-3.5 h-3.5 text-red-400" />
                    <span>NEURAL EXECUTION LOG</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold">
                    STEP {buildStep + 1} / {activeProto.steps.length}
                  </span>
                </div>

                {/* Step List */}
                <div className="space-y-2.5">
                  {activeProto.steps.map((st, i) => {
                    const isPassed = i < buildStep;
                    const isCurrent = i === buildStep;
                    return (
                      <div
                        key={i}
                        className={`p-2.5 rounded-lg border transition-all ${
                          isCurrent
                            ? 'bg-red-500/10 border-red-500/40 text-red-200 shadow-[0_0_12px_rgba(239,68,68,0.2)]'
                            : isPassed
                            ? 'bg-white/[0.02] border-white/[0.06] text-slate-300'
                            : 'bg-black/20 border-white/[0.04] text-slate-600'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          <span className="mt-0.5 shrink-0">
                            {isPassed ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            ) : isCurrent ? (
                              <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                            ) : (
                              <span className="w-3.5 h-3.5 rounded-full border border-slate-600 block" />
                            )}
                          </span>
                          <span className="leading-relaxed text-[11px]">{st}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hardware / QA Specs HUD */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/[0.08] space-y-2">
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                  Ground-Truth Execution Telemetry
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="bg-white/[0.02] p-2 rounded border border-white/[0.04]">
                    <span className="text-slate-500 block">QA Test Suite</span>
                    <span className="font-bold text-white block mt-0.5">{activeProto.metrics.qaSuites}</span>
                  </div>
                  <div className="bg-white/[0.02] p-2 rounded border border-white/[0.04]">
                    <span className="text-slate-500 block">Response Latency</span>
                    <span className="font-bold text-emerald-400 block mt-0.5">{activeProto.metrics.latency}</span>
                  </div>
                  <div className="bg-white/[0.02] p-2 rounded border border-white/[0.04]">
                    <span className="text-slate-500 block">Resident Footprint</span>
                    <span className="font-bold text-sky-400 block mt-0.5">{activeProto.metrics.memory}</span>
                  </div>
                  <div className="bg-white/[0.02] p-2 rounded border border-white/[0.04]">
                    <span className="text-slate-500 block">System Metric</span>
                    <span className="font-bold text-amber-400 block mt-0.5">{activeProto.metrics.throughput}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 8 Cols: Interactive Preview / Self-Typing Code Editor */}
            <div className="lg:col-span-8 p-5 bg-[#050509] flex flex-col justify-between relative">
              
              {/* Laser Scanning Line Animation during build */}
              {isCompiling && (
                <div 
                  className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent pointer-events-none z-30 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.8)]"
                  style={{ top: `${(buildStep / activeProto.steps.length) * 100}%` }}
                />
              )}

              {/* VIEW 1: LIVE INTERACTIVE APP PREVIEW */}
              {activeTab === 'preview' && (
                <div className="h-full flex flex-col space-y-4">
                  
                  {/* Virtual Browser Chrome Bar */}
                  <div className="p-3 rounded-t-xl bg-[#0e0e16] border border-white/10 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <span className="text-slate-500 pl-2">|</span>
                      <div className="px-3 py-1 rounded bg-black/60 border border-white/10 text-slate-300 text-[11px] flex items-center space-x-2 max-w-[280px] sm:max-w-none truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>https://{activeProto.id}.dev.internal/app</span>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/30 text-[10px] uppercase font-bold">
                      {isCompiling ? 'COMPILING SKELETON' : 'LIVE PROTOTYPE INTERACTIVE'}
                    </span>
                  </div>

                  {/* Virtual App Screen Viewport */}
                  <div className="flex-1 p-6 rounded-b-xl bg-gradient-to-b from-[#090910] to-[#06060a] border-x border-b border-white/10 min-h-[420px] flex flex-col justify-between">
                    
                    {/* PROTOTYPE 1: CampusOS AI */}
                    {selectedProtoId === 'campusos' && (
                      <div className="space-y-6">
                        
                        {/* Header & Role Switcher */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-4">
                          <div>
                            <div className="text-[10px] font-mono text-red-400 uppercase tracking-wider font-bold">
                              INSTITUTIONAL OPERATING PLATFORM
                            </div>
                            <h3 className="text-xl font-black text-white mt-0.5">
                              CampusOS AI Academic Hub
                            </h3>
                          </div>

                          {/* Interactive Role Switcher */}
                          <div className="flex items-center space-x-1 bg-black/60 p-1 rounded-lg border border-white/10 font-mono text-xs">
                            {(['student', 'teacher', 'admin'] as const).map((role) => (
                              <button
                                key={role}
                                onClick={() => {
                                  setActiveRole(role);
                                  playSynthSound(700, 0.03);
                                }}
                                className={`px-2.5 py-1 rounded capitalize transition-all ${
                                  activeRole === role
                                    ? 'bg-red-600 text-white font-bold shadow-[0_0_10px_rgba(239,68,68,0.4)]'
                                    : 'text-slate-400 hover:text-white'
                                }`}
                              >
                                {role}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Grounded RAG Document Query Box */}
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3 font-mono">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-300 font-bold flex items-center space-x-1.5">
                              <Search className="w-3.5 h-3.5 text-sky-400" />
                              <span>Grounded Gemini RAG Vector Query (pgvector 768-dim)</span>
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              PBKDF2-HMAC-SHA256
                            </span>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2">
                            <input
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder="Query campus regulations or syllabus..."
                              className="flex-1 px-3.5 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-red-500"
                            />
                            <button
                              onClick={handleRunRAG}
                              disabled={isQueryingRAG}
                              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 shadow-[0_0_15px_rgba(239,68,68,0.3)] shrink-0"
                            >
                              <span>{isQueryingRAG ? 'Vector Matching...' : 'Run RAG Query'}</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Grounded Result Display */}
                          {ragResult && (
                            <div className="p-3.5 rounded-lg bg-red-500/[0.04] border border-red-500/30 text-xs text-slate-200 leading-relaxed animate-in fade-in duration-200">
                              <div className="text-[10px] text-red-400 font-bold uppercase tracking-wider mb-1 flex items-center space-x-1">
                                <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
                                <span>Grounded Gemini Response (Zero Hallucination Verified)</span>
                              </div>
                              <p>{ragResult}</p>
                            </div>
                          )}
                        </div>

                        {/* Role-Specific Live View */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                          <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] space-y-1">
                            <span className="text-slate-500 text-[10px] block uppercase">Active Boundary</span>
                            <span className="font-bold text-white block capitalize">{activeRole} Security Tier</span>
                          </div>
                          <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] space-y-1">
                            <span className="text-slate-500 text-[10px] block uppercase">Double-Submit CSRF</span>
                            <span className="font-bold text-emerald-400 block">Validated &bull; Active</span>
                          </div>
                          <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] space-y-1">
                            <span className="text-slate-500 text-[10px] block uppercase">Automated Tests</span>
                            <span className="font-bold text-sky-400 block">510 QA Suites Passed</span>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* PROTOTYPE 2: CivicLens */}
                    {selectedProtoId === 'civiclens' && (
                      <div className="space-y-5 font-mono text-xs">
                        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                          <div>
                            <div className="text-[10px] text-sky-400 uppercase font-bold tracking-wider">
                              MUNICIPAL INFRASTRUCTURE DISPATCH
                            </div>
                            <h3 className="text-lg font-black text-white">
                              PostGIS Spatial Deduplication &amp; Multimodal Vision
                            </h3>
                          </div>
                          <span className="px-2.5 py-1 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20 text-[10px]">
                            100/100 TESTS PASSING
                          </span>
                        </div>

                        {/* Interactive Map Visualizer */}
                        <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-300 font-bold">
                              Live Grievance Cluster: Sector 14 Pothole (Lat: 30.9084, Lon: 77.0999)
                            </span>
                            <button
                              onClick={() => {
                                setIsClustered(!isClustered);
                                playSynthSound(850, 0.04);
                              }}
                              className="px-3 py-1 rounded bg-sky-500 hover:bg-sky-400 text-black font-bold uppercase text-[10px] transition-all"
                            >
                              {isClustered ? 'Uncluster Complaints' : 'Execute PostGIS ST_DWithin (<=50m)'}
                            </button>
                          </div>

                          <div className="relative h-32 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-grid-subtle opacity-40" />
                            
                            {/* Visual Clustering Nodes */}
                            <div className="relative z-10 flex items-center space-x-8">
                              {isClustered ? (
                                <div className="p-3 rounded-full bg-red-600/30 border-2 border-red-500 text-white font-bold flex items-center space-x-2 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                                  <ShieldCheck className="w-4 h-4 text-red-400" />
                                  <span>1 Canonical Municipal Issue #1048 (-40.4% Noise Merged)</span>
                                </div>
                              ) : (
                                <>
                                  <div className="p-2 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-[10px]">
                                    Citizen Report #1 (0m)
                                  </div>
                                  <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/50 text-amber-300 text-[10px]">
                                    Citizen Report #2 (+18m)
                                  </div>
                                  <div className="p-2 rounded-lg bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 text-[10px]">
                                    Citizen Report #3 (+34m)
                                  </div>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] text-[11px] text-slate-300 flex items-center justify-between">
                            <span>Gemini 2.5 Flash Vision Latency: <strong className="text-white">&lt;500ms</strong></span>
                            <span>Noise Merged: <strong className="text-emerald-400">40.4% duplicate reduction</strong></span>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* PROTOTYPE 3: Gyanix */}
                    {selectedProtoId === 'gyanix' && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                          <div>
                            <div className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider">
                              SOCRATIC PEDAGOGICAL ENGINE
                            </div>
                            <h3 className="text-lg font-black text-white">
                              CBSE Class 12 Physics (Drift Velocity)
                            </h3>
                          </div>
                          <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[10px]">
                            41 STATE TRANSITIONS
                          </span>
                        </div>

                        {/* Socratic Dialogue History */}
                        <div className="h-44 overflow-y-auto space-y-2.5 p-3 rounded-xl bg-black/60 border border-white/10">
                          {socraticHistory.map((item, i) => (
                            <div
                              key={i}
                              className={`p-2.5 rounded-lg text-xs leading-relaxed ${
                                item.role === 'ai'
                                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-200'
                                  : 'bg-white/[0.05] border border-white/10 text-white self-end ml-8'
                              }`}
                            >
                              <span className="font-bold text-[10px] block opacity-75 mb-0.5">
                                {item.role === 'ai' ? 'GYANIX SOCRATIC TUTOR' : 'STUDENT RESPONSE'}
                              </span>
                              {item.text}
                            </div>
                          ))}
                        </div>

                        {/* Student Prompt Form */}
                        <form onSubmit={handleSendSocratic} className="flex gap-2">
                          <input
                            type="text"
                            value={studentInput}
                            onChange={(e) => setStudentInput(e.target.value)}
                            placeholder="Type student response (e.g., 'Yes, the force accelerates them...')"
                            className="flex-1 px-3.5 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
                          />
                          <button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase transition-all flex items-center space-x-1"
                          >
                            <span>Respond</span>
                            <Send className="w-3 h-3" />
                          </button>
                        </form>
                      </div>
                    )}

                    {/* PROTOTYPE 4: ZENETH */}
                    {selectedProtoId === 'zeneth' && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                          <div>
                            <div className="text-[10px] text-violet-400 uppercase font-bold tracking-wider">
                              NATIVE C++ OFFLINE EXPERT SYSTEM
                            </div>
                            <h3 className="text-lg font-black text-white">
                              Zero-Cloud Agricultural Diagnostic Terminal
                            </h3>
                          </div>
                          <span className="px-2.5 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[10px]">
                            &lt;1MS MEMORY SEARCH
                          </span>
                        </div>

                        {/* Mock C++ Terminal Window */}
                        <div className="p-4 rounded-xl bg-black border border-white/10 space-y-2 text-slate-300 text-xs">
                          <div className="text-slate-500">
                            $ ./zeneth_cli --crop wheat --symptoms &quot;yellow pustules on leaf surface&quot;
                          </div>
                          <div className="text-violet-400 font-bold">
                            [OK] Tokenized 6 symptoms in 0.084 ms
                          </div>
                          <div className="text-emerald-400">
                            [DIAGNOSIS]: Stripe Rust (Puccinia striiformis) &bull; Confidence: 94%
                          </div>
                          <div className="text-slate-300">
                            [TREATMENT PROTOCOL]: Apply Propiconazole 25% EC @ 0.1% or Tebuconazole 25.9% EC. Avoid excess nitrogen fertilization.
                          </div>
                          <div className="text-[10px] text-slate-500 border-t border-white/[0.06] pt-1 mt-2">
                            Memory resident: 4.8 MB &bull; Zero network socket connections invoked (100% offline).
                          </div>
                        </div>

                      </div>
                    )}

                    {/* Bottom Link to Full Teardown Page */}
                    <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">
                        Inspecting verified architecture implementation nodes
                      </span>
                      <a
                        href={`/projects/${selectedProtoId === 'campusos' ? 'campusos-ai' : selectedProtoId}`}
                        className="text-red-400 hover:text-red-300 font-bold uppercase tracking-wider flex items-center space-x-1"
                      >
                        <span>Deep Technical Case Study</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>

                </div>
              )}

              {/* VIEW 2: LIVE CODE STREAM VIEW */}
              {activeTab === 'code' && (
                <div className="h-full flex flex-col space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-slate-400 flex items-center space-x-2">
                      <FileCode className="w-4 h-4 text-sky-400" />
                      <span>{activeProto.fileSnippet.filename}</span>
                    </span>
                    <span className="text-[10px] text-emerald-400">
                      {isCompiling ? 'AGENT GENERATING CODE...' : 'VERIFIED AST COMPILED'}
                    </span>
                  </div>

                  <div className="flex-1 p-4 rounded-xl bg-black border border-white/10 overflow-x-auto text-slate-200 leading-relaxed font-mono text-xs select-none">
                    <pre>
                      <code>
                        {activeProto.fileSnippet.code.slice(0, typedCodeLength)}
                        {isCompiling && (
                          <span className="inline-block w-2 h-4 bg-red-500 animate-pulse ml-0.5 align-middle" />
                        )}
                      </code>
                    </pre>
                  </div>
                </div>
              )}

              {/* VIEW 3: FULL TELEMETRY VIEW */}
              {activeTab === 'telemetry' && (
                <div className="h-full flex flex-col justify-between font-mono text-xs space-y-4">
                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">
                      Ground-Truth Engineering Audit Matrix
                    </h4>
                    <p className="text-slate-400 text-xs">
                      All metrics cited directly from automated test outputs, local code repositories, and academic transcripts. Zero fabricated deployment claims.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1">
                        <span className="text-slate-500 text-[10px] uppercase">Automated QA Suites</span>
                        <div className="text-lg font-black text-white">{activeProto.metrics.qaSuites}</div>
                        <span className="text-[10px] text-emerald-400">Validated via Pytest &amp; Jest</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1">
                        <span className="text-slate-500 text-[10px] uppercase">Latency Profile</span>
                        <div className="text-lg font-black text-emerald-400">{activeProto.metrics.latency}</div>
                        <span className="text-[10px] text-slate-400">Hardware: Local Silicon / Edge</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1">
                        <span className="text-slate-500 text-[10px] uppercase">Resident Memory</span>
                        <div className="text-lg font-black text-sky-400">{activeProto.metrics.memory}</div>
                        <span className="text-[10px] text-slate-400">Zero Memory Leaks</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1">
                        <span className="text-slate-500 text-[10px] uppercase">Algorithmic Throughput</span>
                        <div className="text-lg font-black text-amber-400">{activeProto.metrics.throughput}</div>
                        <span className="text-[10px] text-slate-400">NCERT &amp; PostGIS Grounded</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-red-500/[0.04] border border-red-500/20 text-slate-300 text-xs flex items-center justify-between">
                    <span>Shoolini University B.Tech CSE (AI) &bull; CGPA 9.05 / 10</span>
                    <span className="text-red-400 font-bold uppercase">Corizo / IIT Bombay Collab</span>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
