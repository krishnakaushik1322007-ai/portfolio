'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, 
  Eye, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  ExternalLink, 
  ArrowRight, 
  Activity, 
  AlertTriangle,
  Compass,
  FileCode2,
  Sparkles,
  Info
} from 'lucide-react';
import { useTour } from '@/context/TourContext';

export default function CivicLensSection() {
  const { playTourChime, setIsFloorPlanOpen } = useTour();
  const [activeTab, setActiveTab] = useState<'vision' | 'dedup' | 'priority'>('vision');
  const [selectedIncident, setSelectedIncident] = useState<number>(0);

  const incidents = [
    {
      id: 'INC-2026-084',
      type: 'Structural Cavity & Exposed Rebar',
      location: 'Sector 14 Junction, North Ward',
      distance: '18m from Primary School',
      reports: 7,
      originalReports: 7,
      status: 'Consolidated into Single Canonical Issue',
      geminiAnalysis: {
        damageClass: 'Severe Pavement Collapse',
        structuralRisk: 'High (Vehicle axle failure hazard)',
        detectedDept: 'Municipal Road Works & Safety',
        confidence: '98.4%',
        visionLatency: '412ms'
      },
      priorityScore: 0.94,
      priorityFactors: {
        physicalSeverity: 0.95,
        safetyRisk: 0.98,
        crowdVelocity: 0.90,
        schoolProximity: 0.92,
        slaUrgency: 0.95
      }
    },
    {
      id: 'INC-2026-102',
      type: 'Displaced Stormwater Grate',
      location: 'Commercial Market Avenue',
      distance: '34m from Metro Station Exit',
      reports: 12,
      originalReports: 12,
      status: 'PostGIS ST_DWithin Cluster (<=50m)',
      geminiAnalysis: {
        damageClass: 'Subsurface Drainage Hazard',
        structuralRisk: 'Critical Pedestrian Fall Risk',
        detectedDept: 'Public Works & Drainage',
        confidence: '96.2%',
        visionLatency: '388ms'
      },
      priorityScore: 0.89,
      priorityFactors: {
        physicalSeverity: 0.85,
        safetyRisk: 0.96,
        crowdVelocity: 0.94,
        schoolProximity: 0.70,
        slaUrgency: 0.91
      }
    }
  ];

  const currentInc = incidents[selectedIncident];

  return (
    <section 
      id="civiclens" 
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-[#e5b061]/15 bg-[#07090e] overflow-hidden"
    >
      {/* Blueprint Grid Watermark */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e5b061]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-12">
        {/* Station Architectural Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e5b061]/20 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded border border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981] font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span>STATION 03 // VISION &amp; GEOSPATIAL OBSERVATORY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
              CivicLens <span className="italic font-normal text-gradient-emerald">Spatial Intelligence</span>
            </h2>
            <p className="mt-2 text-slate-400 font-sans text-sm sm:text-base max-w-2xl">
              Eliminating municipal dispatcher paralysis. Transforming raw citizen reports into verified, deduplicated operational insights via PostGIS spatial clustering and multimodal Gemini Vision.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFloorPlanOpen(true)}
              className="px-3.5 py-2 rounded border border-[#e5b061]/30 bg-[#e5b061]/5 hover:bg-[#e5b061]/15 text-[#e5b061] font-mono text-xs tracking-wider flex items-center space-x-1.5 transition-all"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>STATION 03 OF 07</span>
            </button>
            <a
              href="https://github.com/krishnakaushik1322007-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded border border-[#10b981]/40 bg-[#10b981]/10 hover:bg-[#10b981]/20 text-[#10b981] font-mono text-xs font-semibold tracking-wider flex items-center space-x-2 transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>INSPECT REPO</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Docent Curatorial Plaque */}
        <div className="p-4 sm:p-5 rounded-lg border border-[#10b981]/25 bg-[#091017]/80 backdrop-blur-md flex items-start gap-4">
          <div className="w-8 h-8 rounded-full border border-[#10b981]/40 bg-[#10b981]/15 flex items-center justify-center shrink-0 text-[#10b981]">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            <span className="font-mono text-[#10b981] uppercase tracking-wider font-semibold mr-2">[Docent Commentary]</span>
            When hazards strike, citizens flood municipal portals with dozens of duplicate photos. CivicLens solves this with mathematical precision: executing PostGIS <code className="text-[#e5b061] font-mono">ST_DWithin(geom, point, 50)</code> to collapse duplicate reports by <strong>40.4%</strong>, while Google Gemini 2.5 Flash performs sub-500ms vision triage verified across <strong>100/100 automated test suites</strong>.
          </div>
        </div>

        {/* 4 Core Verification Metric Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded border border-[#e5b061]/20 bg-[#0c1017] flex flex-col justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Duplicate Suppression</span>
            <div className="mt-2 text-2xl sm:text-3xl font-serif text-[#10b981] font-normal">40.4%</div>
            <span className="text-[10px] text-slate-500 font-mono mt-1">Noise eliminated via PostGIS</span>
          </div>

          <div className="p-4 rounded border border-[#e5b061]/20 bg-[#0c1017] flex flex-col justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Vision Latency</span>
            <div className="mt-2 text-2xl sm:text-3xl font-serif text-[#e5b061] font-normal">&lt; 500ms</div>
            <span className="text-[10px] text-slate-500 font-mono mt-1">Gemini 2.5 Flash Multimodal</span>
          </div>

          <div className="p-4 rounded border border-[#e5b061]/20 bg-[#0c1017] flex flex-col justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Automated QA</span>
            <div className="mt-2 text-2xl sm:text-3xl font-serif text-[#10b981] font-normal">100 / 100</div>
            <span className="text-[10px] text-slate-500 font-mono mt-1">Passing tests across 12 modules</span>
          </div>

          <div className="p-4 rounded border border-[#e5b061]/20 bg-[#0c1017] flex flex-col justify-between">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Scoring Formula</span>
            <div className="mt-2 text-2xl sm:text-3xl font-serif text-[#e5b061] font-normal">6 Factors</div>
            <span className="text-[10px] text-slate-500 font-mono mt-1">Deterministic mathematical rating</span>
          </div>
        </div>

        {/* Interactive Dual-Wing Studio (Vision Triage + PostGIS Dedup Engine) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Wing: Incident Selector & Multimodal Vision Inspector */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-xl border border-[#e5b061]/25 bg-[#090d14]/90 backdrop-blur-md shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-[#10b981]" />
                  <h3 className="font-mono text-sm uppercase tracking-wider text-slate-200">
                    Live Incident Triage &amp; Vision Analysis
                  </h3>
                </div>
                <div className="flex gap-2">
                  {incidents.map((inc, idx) => (
                    <button
                      key={inc.id}
                      onClick={() => {
                        setSelectedIncident(idx);
                        playTourChime(600 + idx * 50);
                      }}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                        selectedIncident === idx
                          ? 'bg-[#10b981]/20 border border-[#10b981]/50 text-[#10b981]'
                          : 'bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white'
                      }`}
                    >
                      {inc.id}
                    </button>
                  ))}
                </div>
              </div>

              {/* Incident Meta Banner */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded bg-black/40 border border-white/[0.06]">
                <div>
                  <div className="text-xs font-mono text-slate-400">{currentInc.id} &bull; {currentInc.location}</div>
                  <div className="text-sm font-semibold text-slate-100 mt-0.5">{currentInc.type}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#e5b061]/15 text-[#e5b061] border border-[#e5b061]/30">
                    {currentInc.reports} Citizens Merged
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30">
                    Score: {currentInc.priorityScore}
                  </span>
                </div>
              </div>

              {/* Vision Output Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Vision Visual Snapshot */}
                <div className="relative rounded-lg overflow-hidden border border-white/[0.1] bg-black/60 group">
                  <div className="relative h-48 w-full">
                    <Image
                      src={selectedIncident === 0 ? "/projects/civiclens/Gemini_Final_ Visual.png" : "/projects/civiclens/Gemini_visual_01.png"}
                      alt="CivicLens Vision Triage"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[10px] font-mono text-white/90">
                      <span className="px-1.5 py-0.5 bg-black/70 rounded border border-white/20">
                        LATENCY: {currentInc.geminiAnalysis.visionLatency}
                      </span>
                      <span className="px-1.5 py-0.5 bg-[#10b981]/80 text-black font-bold rounded">
                        CONF: {currentInc.geminiAnalysis.confidence}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Gemini Multimodal Diagnostics */}
                <div className="space-y-3 p-3.5 rounded-lg bg-black/40 border border-white/[0.06] flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-[#e5b061] uppercase tracking-wider flex items-center space-x-1.5">
                      <Sparkles className="w-3 h-3 text-[#e5b061]" />
                      <span>Gemini 2.5 Flash Triage</span>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-mono uppercase">Damage Classification</div>
                      <div className="text-xs font-semibold text-slate-200">{currentInc.geminiAnalysis.damageClass}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-mono uppercase">Structural Risk Assessment</div>
                      <div className="text-xs text-rose-300 font-medium">{currentInc.geminiAnalysis.structuralRisk}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-mono uppercase">Dispatched Department</div>
                      <div className="text-xs font-mono text-[#10b981]">{currentInc.geminiAnalysis.detectedDept}</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/[0.06] text-[10px] font-mono text-slate-400">
                    Proximity: {currentInc.distance}
                  </div>
                </div>
              </div>

              {/* 6-Factor Deterministic Algorithm Breakdown */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Deterministic Mathematical Priority (0.0 to 1.0)</span>
                  <span className="text-[#e5b061] font-bold">{currentInc.priorityScore} / 1.00</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
                  <div className="p-2 rounded bg-black/50 border border-white/[0.06]">
                    <div className="text-[9px] font-mono text-slate-400">SEVERITY</div>
                    <div className="text-xs font-mono text-[#10b981] font-semibold mt-0.5">{currentInc.priorityFactors.physicalSeverity}</div>
                  </div>
                  <div className="p-2 rounded bg-black/50 border border-white/[0.06]">
                    <div className="text-[9px] font-mono text-slate-400">HAZARD RISK</div>
                    <div className="text-xs font-mono text-[#e5b061] font-semibold mt-0.5">{currentInc.priorityFactors.safetyRisk}</div>
                  </div>
                  <div className="p-2 rounded bg-black/50 border border-white/[0.06]">
                    <div className="text-[9px] font-mono text-slate-400">CROWD VEL</div>
                    <div className="text-xs font-mono text-cyan-400 font-semibold mt-0.5">{currentInc.priorityFactors.crowdVelocity}</div>
                  </div>
                  <div className="p-2 rounded bg-black/50 border border-white/[0.06]">
                    <div className="text-[9px] font-mono text-slate-400">SCHOOL PROX</div>
                    <div className="text-xs font-mono text-purple-300 font-semibold mt-0.5">{currentInc.priorityFactors.schoolProximity}</div>
                  </div>
                  <div className="p-2 rounded bg-black/50 border border-white/[0.06]">
                    <div className="text-[9px] font-mono text-slate-400">SLA DEADLINE</div>
                    <div className="text-xs font-mono text-amber-400 font-semibold mt-0.5">{currentInc.priorityFactors.slaUrgency}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Wing: PostGIS Spatial Pipeline & Closed-Loop Architecture */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Spatial Query Visual Box */}
            <div className="p-6 rounded-xl border border-[#10b981]/25 bg-[#090d14]/90 backdrop-blur-md shadow-2xl space-y-5">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#10b981] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#10b981]" />
                <span>Spatial PostGIS Ingestion Pipeline</span>
              </div>

              {/* Code Snippet for ST_DWithin */}
              <div className="p-4 rounded-lg bg-black/80 border border-white/[0.08] font-mono text-xs text-slate-300 space-y-1.5 overflow-x-auto">
                <div className="text-slate-500">// PostGIS Spatial Deduplication &lt;= 50m</div>
                <div className="text-[#e5b061]">SELECT <span className="text-white">id, title, centroid_geom</span></div>
                <div className="text-slate-300">FROM <span className="text-cyan-400">canonical_incidents</span></div>
                <div className="text-slate-300">WHERE <span className="text-[#10b981]">ST_DWithin</span>(</div>
                <div className="text-slate-400 pl-4">centroid_geom,</div>
                <div className="text-slate-400 pl-4">ST_SetSRID(ST_MakePoint(:lon, :lat), 4326)::geography,</div>
                <div className="text-[#e5b061] pl-4">50.0 /* meters */</div>
                <div className="text-slate-300">);</div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                <p>
                  Instead of polluting dispatch queues with 12 distinct tickets for one broken drainage lid, the spatial engine clusters coordinates dynamically and recalculates the geometric centroid upon each report.
                </p>
              </div>

              {/* Closed-Loop State Machine Flow */}
              <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Closed-Loop Municipal State Machine
                </div>
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-white/[0.06] text-slate-300">REPORTED</span>
                  <span className="text-slate-500">&rarr;</span>
                  <span className="px-2 py-0.5 rounded bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30">TRIAGED</span>
                  <span className="text-slate-500">&rarr;</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.06] text-slate-300">DISPATCHED</span>
                  <span className="text-slate-500">&rarr;</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.06] text-slate-300">IN PROGRESS</span>
                  <span className="text-slate-500">&rarr;</span>
                  <span className="px-2 py-0.5 rounded bg-[#e5b061]/20 text-[#e5b061] border border-[#e5b061]/30">RESOLVED</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 italic">
                  *Requires photographic verification from the municipal field engineer prior to closure.
                </p>
              </div>
            </div>

            {/* Test Rig Proof Pill */}
            <div className="p-4 rounded-lg border border-[#e5b061]/20 bg-[#0c1017] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-[#10b981]" />
                <div>
                  <div className="text-xs font-mono text-slate-200 font-semibold">100 / 100 Pytest Verification</div>
                  <div className="text-[10px] text-slate-400 font-mono">12 test modules covering async DB &amp; spatial math</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/40">
                VERIFIED
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
