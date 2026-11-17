'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  X, 
  ExternalLink, 
  Layers, 
  Play, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Database,
  Terminal,
  BrainCircuit
} from 'lucide-react';
import { useMovie } from '@/context/MovieContext';
import { projectsData } from '@/data/projects';

export default function MovieProjectModal() {
  const { activeProjectModal, closeProjectModal, openProjectModal } = useMovie();
  const [selectedSlug, setSelectedSlug] = useState<string>('campusos-ai');
  const [screenshotIdx, setScreenshotIdx] = useState<number>(0);

  useEffect(() => {
    if (activeProjectModal) {
      setSelectedSlug(activeProjectModal);
      setScreenshotIdx(0);
    }
  }, [activeProjectModal]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProjectModal();
    };
    if (activeProjectModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProjectModal, closeProjectModal]);

  if (!activeProjectModal) return null;

  const currentProject = projectsData.find(p => p.slug === selectedSlug) || projectsData[0];
  const screenshots = currentProject.screenshots || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl rounded-2xl border border-white/[0.12] bg-[#070b16] shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-project-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-white/[0.08] bg-[#091022]">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 rounded bg-[#e5b061]/20 text-[#e5b061] border border-[#e5b061]/40 text-xs font-mono font-bold uppercase">
              INTERACTIVE PROJECT INSPECTION
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Film Paused &bull; Select project to review architecture
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={closeProjectModal}
              className="px-3.5 py-1.5 rounded-lg bg-[#38bdf8] text-black font-mono text-xs font-bold hover:bg-[#7dd3fc] transition-all flex items-center space-x-1.5"
            >
              <span>RESUME FILM</span>
              <Play className="w-3.5 h-3.5 fill-current" />
            </button>
            <button
              onClick={closeProjectModal}
              className="p-1.5 rounded-lg border border-white/[0.1] text-slate-400 hover:text-white"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Switcher Tabs */}
        <div className="flex flex-wrap gap-1.5 p-3 border-b border-white/[0.06] bg-[#060914] overflow-x-auto">
          {projectsData.map((p) => (
            <button
              key={p.slug}
              onClick={() => {
                setSelectedSlug(p.slug);
                setScreenshotIdx(0);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                selectedSlug === p.slug
                  ? 'bg-white/[0.12] text-white font-bold border border-[#38bdf8]/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Project Title & Overview */}
          <div className="space-y-2 border-b border-white/[0.08] pb-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider">
                {currentProject.category} &bull; {currentProject.period}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.06] text-slate-300 border border-white/[0.1]">
                {currentProject.status}
              </span>
            </div>
            <h2 id="movie-project-title" className="text-2xl sm:text-3xl font-serif text-slate-100 font-normal">
              {currentProject.title}
            </h2>
            <p className="text-sm font-sans text-slate-300 leading-relaxed max-w-3xl">
              {currentProject.overview}
            </p>
          </div>

          {/* Verified Metrics Badges */}
          {currentProject.metrics && currentProject.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {currentProject.metrics.map((m) => (
                <div key={m.label} className="p-3.5 rounded-xl bg-black/50 border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">{m.label}</span>
                  <div className="text-xl sm:text-2xl font-serif text-[#e5b061] font-semibold mt-0.5">{m.value}</div>
                  <span className="text-[10px] font-mono text-slate-400 mt-0.5 block">{m.detail}</span>
                </div>
              ))}
            </div>
          )}

          {/* Screenshots Slider (When Available) */}
          {screenshots.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Real Screenshot Capture ({screenshotIdx + 1} of {screenshots.length}):
                </span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setScreenshotIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length)}
                    className="p-1 rounded border border-white/[0.1] text-slate-400 hover:text-white"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setScreenshotIdx((prev) => (prev + 1) % screenshots.length)}
                    className="p-1 rounded border border-white/[0.1] text-slate-400 hover:text-white"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/[0.1] bg-black/80 shadow-2xl">
                <Image
                  src={screenshots[screenshotIdx].url}
                  alt={screenshots[screenshotIdx].caption}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 text-xs font-mono text-slate-200 flex justify-between">
                  <span>{screenshots[screenshotIdx].caption}</span>
                  <span className="text-[10px] text-[#e5b061]">GROUND TRUTH</span>
                </div>
              </div>
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5">
              <span className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold block">
                Problem Statement:
              </span>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {currentProject.problemStatement}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold block">
                Engineering Solution:
              </span>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {currentProject.solution}
              </p>
            </div>
          </div>

          {/* Key Features & Tech Stack */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Core Technologies:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentProject.technologies.map(t => (
                <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-slate-200 border border-white/[0.08]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Compliance Verification Note */}
          {currentProject.verificationNotes && (
            <div className="p-3.5 rounded-lg bg-[#0e1422] border border-[#38bdf8]/20 text-xs text-slate-300 font-sans flex items-start space-x-2.5">
              <ShieldCheck className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
              <p>{currentProject.verificationNotes}</p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-[#091022] flex items-center justify-between text-xs font-mono text-slate-400">
          <a
            href={currentProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#38bdf8] hover:underline flex items-center space-x-1.5"
          >
            <span>GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={closeProjectModal}
            className="px-4 py-2 rounded-lg bg-[#38bdf8] text-black font-bold uppercase tracking-wider hover:bg-[#7dd3fc] transition-all flex items-center space-x-1.5"
          >
            <span>RESUME FILM</span>
            <Play className="w-3.5 h-3.5 fill-current" />
          </button>
        </div>

      </div>
    </div>
  );
}
