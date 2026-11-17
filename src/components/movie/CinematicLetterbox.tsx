'use client';

import React from 'react';
import { useMovie } from '@/context/MovieContext';
import { Volume2 } from 'lucide-react';

export default function CinematicLetterbox() {
  const { audioEnabled, toggleAudio } = useMovie();

  return (
    <>
      {/* Top Letterbox Bar */}
      <div className="fixed top-0 inset-x-0 h-6 sm:h-8 bg-black z-20 pointer-events-none flex items-center justify-between px-4 sm:px-8 text-[10px] font-mono text-slate-500">
        <span>ANIME CINEMA SCOPE &bull; 2.39:1</span>
        <span className="hidden sm:inline">KRISHNA KAUSHIK &bull; THE ANIME JOURNEY (旅の始まり)</span>
        <span className="flex items-center space-x-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-rose-400">REC</span>
        </span>
      </div>

      {/* Audio Unlock Pill when audio is muted */}
      {!audioEnabled && (
        <div className="fixed top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
          <button
            onClick={toggleAudio}
            className="px-4 py-1.5 rounded-full bg-black/80 border border-[#38bdf8]/40 hover:border-[#38bdf8] text-[#38bdf8] text-xs font-mono tracking-wider backdrop-blur-md transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center space-x-2 animate-bounce"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>ENABLE CINEMATIC SOUNDTRACK</span>
          </button>
        </div>
      )}

      {/* Bottom Letterbox Bar */}
      <div className="fixed bottom-0 inset-x-0 h-6 sm:h-8 bg-black z-20 pointer-events-none flex items-center justify-between px-4 sm:px-8 text-[10px] font-mono text-slate-600">
        <span>4K UHD &bull; HDR MASTER</span>
        <span>SCROLL TO SCRUB &bull; SPACE TO PAUSE</span>
      </div>
    </>
  );
}
