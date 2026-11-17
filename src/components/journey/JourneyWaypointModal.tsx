'use client';

import React, { useEffect } from 'react';
import { 
  X, 
  MapPin, 
  ArrowRight, 
  Compass, 
  Sparkles, 
  Layers, 
  GraduationCap, 
  Cpu, 
  Briefcase, 
  Award 
} from 'lucide-react';
import { useJourney } from '@/context/JourneyContext';

export default function JourneyWaypointModal() {
  const { 
    isWaypointMapOpen, 
    setIsWaypointMapOpen, 
    chapters, 
    activeChapter, 
    goToChapter 
  } = useJourney();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsWaypointMapOpen(false);
    };
    if (isWaypointMapOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isWaypointMapOpen, setIsWaypointMapOpen]);

  if (!isWaypointMapOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl rounded-2xl border border-[#38bdf8]/30 bg-[#070b16] shadow-[0_0_60px_rgba(56,189,248,0.2)] overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="journey-route-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.08] bg-[#091022]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-[#38bdf8]/15 border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8]">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h2 id="journey-route-title" className="font-serif text-lg sm:text-xl font-normal text-slate-100">
                The Journey &bull; Waypoint Route Map
              </h2>
              <p className="text-xs font-mono text-slate-400">
                From Curiosity in the Mountains to the Engineering Frontier
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsWaypointMapOpen(false)}
            className="p-2 rounded-lg border border-white/[0.1] text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            aria-label="Close Waypoint Map"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Waypoint Trail */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-slate-300 font-sans flex items-start space-x-3">
            <Sparkles className="w-4 h-4 text-[#e5b061] shrink-0 mt-0.5" />
            <p>
              Select any chapter below to travel directly to that checkpoint in the story. Every chapter contains interactive demonstrations of Krishna&apos;s verified engineering work.
            </p>
          </div>

          {/* Sequential Waypoints Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chapters.map((ch, idx) => {
              const isActive = activeChapter === idx;
              return (
                <div
                  key={ch.id}
                  onClick={() => {
                    goToChapter(idx);
                    setIsWaypointMapOpen(false);
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isActive
                      ? 'border-[#38bdf8] bg-[#0c1833] shadow-[0_0_20px_rgba(56,189,248,0.25)]'
                      : 'border-white/[0.08] bg-[#060914] hover:border-white/20 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2.5">
                      <span className={`w-6 h-6 rounded flex items-center justify-center font-mono text-xs font-bold ${
                        isActive ? 'bg-[#38bdf8] text-black' : 'bg-white/[0.06] text-slate-400'
                      }`}>
                        {ch.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-base text-slate-100 font-medium">
                          {ch.title}
                        </h3>
                        <span className="text-[10px] font-mono text-[#e5b061] uppercase tracking-wider block">
                          {ch.theme}
                        </span>
                      </div>
                    </div>

                    {isActive && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/40">
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {ch.environmentDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {ch.highlights.map((h) => (
                      <span 
                        key={h}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-end text-xs font-mono text-[#38bdf8] pt-1">
                    <span className="group-hover:underline flex items-center space-x-1">
                      <span>Travel to Chapter</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-[#091022] flex items-center justify-between text-xs font-mono text-slate-400">
          <span>7 Story Chapters &bull; Verified Academic &amp; Systems Record</span>
          <button
            onClick={() => setIsWaypointMapOpen(false)}
            className="px-4 py-2 rounded bg-white/[0.05] border border-white/[0.1] text-slate-200 hover:text-white"
          >
            Close Map
          </button>
        </div>
      </div>
    </div>
  );
}
