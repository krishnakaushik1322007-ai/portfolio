'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Brain, 
  Database, 
  Lock, 
  Sparkles,
  Terminal,
  Activity
} from 'lucide-react';

interface LayerInfo {
  id: string;
  tabLabel: string;
  tag: string;
  title: string;
  description: string;
  specs: { label: string; value: string }[];
  highlight: string;
}

const STACK_LAYERS: LayerInfo[] = [
  {
    id: 'l1',
    tabLabel: 'L1: Grounded RAG Core',
    tag: 'LAYER 01 // COGNITIVE RETRIEVAL CORE',
    title: 'Grounded Gemini RAG & Dense Embeddings',
    description:
      'Implements dense 768-dimensional vector embeddings with pgvector and FAISS. Query chunks are passed through strict semantic bounds with source-evidence citations and deterministic offline fallback to eliminate hallucination in institutional and academic records.',
    specs: [
      { label: 'Vector Engine', value: 'pgvector + FAISS' },
      { label: 'LLM Integration', value: 'Google Gemini 2.5 Flash / 1.5 Pro' },
      { label: 'Evidence Citation', value: 'Strict Excerpt Verification' },
      { label: 'Fallback Mode', value: 'Deterministic Labelled Fallback' }
    ],
    highlight: 'Active in CampusOS AI & Agentic RAG Engine'
  },
  {
    id: 'l2',
    tabLabel: 'L2: Socratic State Machine',
    tag: 'LAYER 02 // PEDAGOGICAL STATE CONTROLLER',
    title: 'Multi-Turn Socratic Dialogue & Misconception Tracking',
    description:
      'Engineered for CBSE Class 12 Physics (Drift Velocity pilot). Guides students through step-by-step conceptual discovery across 41 tracked states with zero circular dependencies or schema validation errors.',
    specs: [
      { label: 'Tracked States', value: '41 State Transitions' },
      { label: 'Validation Errors', value: '0 Schema Errors' },
      { label: 'Syllabus Alignment', value: 'NCERT / CBSE Class 12' },
      { label: 'Curriculum Provenance', value: 'Entity-Level JSON Schema' }
    ],
    highlight: 'Active in Gyanix Dataset Engine'
  },
  {
    id: 'l3',
    tabLabel: 'L3: PostGIS Spatial Clustering',
    tag: 'LAYER 03 // GEOSPATIAL CLUSTERING & TRIAGE',
    title: 'PostGIS ST_DWithin & Multimodal Vision Ingestion',
    description:
      'De-duplicates citizen complaints within 50 meters into single canonical municipal issues, eliminating 40.4% noise. Google Gemini 2.5 Flash analyzes citizen photos in under 500ms to extract damage severity and department routing.',
    specs: [
      { label: 'Spatial Indexing', value: 'PostGIS ST_DWithin (<=50m)' },
      { label: 'Noise Reduction', value: '40.4% Duplicate Merging' },
      { label: 'Vision Latency', value: '<500ms Multimodal Triage' },
      { label: 'Automated Tests', value: '100 / 100 Tests Passing' }
    ],
    highlight: 'Active in CivicLens Municipal Platform'
  },
  {
    id: 'l4',
    tabLabel: 'L4: Deterministic C++ Expert Rules',
    tag: 'LAYER 04 // LOW-LATENCY EMBEDDED REASONING',
    title: 'Native C++ STL Crop Disease Expert System',
    description:
      'Zero-dependency, offline-first rule engine implemented in C++ using OOP and Standard Template Library algorithms. Tokenizes farmer symptom queries and evaluates disease severity, treatments, and prevention protocols across 9 essential crops in under 1 millisecond.',
    specs: [
      { label: 'Language', value: 'Native C++ (STL / OOP)' },
      { label: 'Execution Latency', value: '<1ms Memory Search' },
      { label: 'Crops Supported', value: '9 Agricultural Crops' },
      { label: 'Cloud Overhead', value: '0 bytes (100% Offline)' }
    ],
    highlight: 'Active in ZENETH Expert System'
  },
  {
    id: 'l5',
    tabLabel: 'L5: Multi-Tenant RBAC Security',
    tag: 'LAYER 05 // SYSTEM GOVERNANCE & SECURITY',
    title: 'Role Isolation, PBKDF2 Hashing & Token Rotation',
    description:
      'Enforces strict boundaries across 5 institutional roles (Admin, Teacher, Student, Parent, Operations). Hardened with PBKDF2-HMAC-SHA256 password cryptography, refresh token rotation, double-submit CSRF cookie protection, and guardian-child relationship checks.',
    specs: [
      { label: 'Password Hashing', value: 'PBKDF2-HMAC-SHA256' },
      { label: 'Token Protocol', value: 'Refresh Token Rotation' },
      { label: 'CSRF Defense', value: 'Double-Submit Cookie Guard' },
      { label: 'Authorization', value: 'Tenant & Child-Level Isolation' }
    ],
    highlight: 'Active in CampusOS AI & CivicLens Dispatch'
  },
  {
    id: 'l6',
    tabLabel: 'L6: Hallucination Verification',
    tag: 'LAYER 06 // SELF-REFLECTION & VERIFICATION',
    title: 'Cross-Interaction Reranking & Faithfulness Gate',
    description:
      'Incoming queries pass through semantic intent classification, hybrid dense/lexical retrieval (FAISS + BM25), cross-encoder passage reranking, and an automated verification gate that scores answer faithfulness against source claims before client dispatch.',
    specs: [
      { label: 'Retrieval Mode', value: 'Hybrid (FAISS + BM25)' },
      { label: 'Reranker', value: 'Cross-Encoder Scoring' },
      { label: 'Faithfulness Check', value: 'Grounded Claim Verifier' },
      { label: 'Pytest Matrix', value: '8 / 8 Passing Suites' }
    ],
    highlight: 'Active in Agentic RAG Engine'
  },
  {
    id: 'l7',
    tabLabel: 'L7: Offline Fallback Engine',
    tag: 'LAYER 07 // RESILIENCE & ADAPTIVE FALLBACK',
    title: 'Quota-Resilient Circuit Breaker & Mock Failover',
    description:
      'Gracefully degrades when cloud APIs exceed rate quotas (HTTP 429) or network connections drop. Automatically activates deterministic rule-based responses and mock failovers to maintain 100% operational uptime.',
    specs: [
      { label: 'Failover Strategy', value: 'Circuit-Breaker Mocking' },
      { label: 'Uptime Guarantee', value: 'Zero Service Halt on 429' },
      { label: 'Audit Compliance', value: 'Deterministic Response Logs' },
      { label: 'Testing Coverage', value: 'Full Mock E2E Verification' }
    ],
    highlight: 'Active across CampusOS, CivicLens & ZENETH'
  }
];

export default function ConstitutionalStack() {
  const [activeLayer, setActiveLayer] = useState<LayerInfo>(STACK_LAYERS[0]);

  return (
    <section className="relative py-24 border-b border-white/[0.08] bg-[#07070b]">
      {/* Left Red Vertical Accent Line */}
      <div className="vertical-accent-line hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 md:pl-12">
        
        {/* Header Block */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>CORE ARCHITECTURAL STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            7-Layer Autonomous <span className="text-red-500">Engineering Stack</span>
          </h2>
          <p className="text-base text-slate-400 max-w-3xl leading-relaxed">
            A persistent, verifiable software architecture operating across local silicon, grounded LLMs, spatial clustering, and deterministic systems. Click any layer below to inspect implementation details.
          </p>
        </div>

        {/* 4 Stat Counters Bar (matching video) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 font-mono">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] border-l-2 border-l-red-500">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">510</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">CampusOS QA Suites</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] border-l-2 border-l-sky-500">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">100 / 100</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">CivicLens Tests Passing</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] border-l-2 border-l-emerald-500">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">9.05 / 10</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Shoolini University CGPA</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] border-l-2 border-l-amber-500">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">&lt;500ms</div>
            <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Gemini Vision Triage</div>
          </div>
        </div>

        {/* Layer Tabs Strip */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-3 scrollbar-none">
            {STACK_LAYERS.map((layer) => {
              const isActive = activeLayer.id === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? 'bg-red-500 text-white font-bold border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                      : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border-white/[0.08]'
                  }`}
                >
                  {layer.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Active Layer Details Card */}
          <div className="p-8 rounded-2xl bg-[#09090f] border border-red-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)] space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-3">
              <div>
                <span className="text-xs font-mono font-bold text-red-400 tracking-wider">
                  {activeLayer.tag}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                  {activeLayer.title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-300 border border-red-500/30 self-start sm:self-auto">
                {activeLayer.highlight}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {activeLayer.description}
            </p>

            {/* Specifications Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {activeLayer.specs.map((spec, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs space-y-1"
                >
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    {spec.label}
                  </span>
                  <span className="text-xs font-bold text-white block">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
