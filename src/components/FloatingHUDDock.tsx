'use client';

import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Gauge, 
  Compass, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

interface FloatingHUDDockProps {
  onTogglePlay?: (isPlaying: boolean) => void;
  onSpeedChange?: (speed: number) => void;
}

export default function FloatingHUDDock({
  onTogglePlay,
  onSpeedChange
}: FloatingHUDDockProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState<number>(1);
  const [isMuted, setIsMuted] = useState(true);
  const [isTouring, setIsTouring] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePlay = () => {
    const next = !isPlaying;
    setIsPlaying(next);
    onTogglePlay?.(next);
  };

  const cycleSpeed = () => {
    const nextSpeed = speed === 1 ? 2 : speed === 2 ? 0.5 : 1;
    setSpeed(nextSpeed);
    onSpeedChange?.(nextSpeed);
  };

  const toggleTour = () => {
    const next = !isTouring;
    setIsTouring(next);

    if (next) {
      // Auto-scroll tour down the page smoothly
      const interval = setInterval(() => {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setIsTouring(false);
          clearInterval(interval);
        } else {
          window.scrollBy({ top: 4, behavior: 'auto' });
        }
      }, 30);
      return () => clearInterval(interval);
    }
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9990] w-auto max-w-[95vw]">
      <div className="flex items-center space-x-3 sm:space-x-4 px-4 sm:px-5 py-2.5 rounded-full bg-[#08080d]/90 border border-white/10 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] text-xs font-mono text-slate-300">
        
        {/* Progress Tracker */}
        <div className="hidden md:flex items-center space-x-2 border-r border-white/10 pr-3">
          <span className="text-slate-400 font-bold">//01.</span>
          <div className="w-16 h-1 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 to-sky-400 transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <span className="text-[10px] text-slate-400">{Math.round(scrollProgress)}%</span>
        </div>

        {/* Live Swarm Telemetry */}
        <div className="flex items-center space-x-2 border-r border-white/10 pr-3">
          <div className="flex -space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block ring-1 ring-black" />
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block ring-1 ring-black" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block ring-1 ring-black" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block ring-1 ring-black" />
          </div>
          <span className="font-bold text-white whitespace-nowrap">
            14 Agents
          </span>
          <span className="text-slate-400 hidden lg:inline">
            87 / 252 layers
          </span>
        </div>

        {/* Touring Mode Toggle */}
        <button
          onClick={toggleTour}
          className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all flex items-center space-x-1 ${
            isTouring
              ? 'bg-red-500 text-white shadow-[0_0_12px_rgba(239,68,68,0.4)]'
              : 'bg-white/[0.06] hover:bg-white/[0.1] text-slate-300'
          }`}
        >
          <Compass className={`w-3 h-3 ${isTouring ? 'animate-spin' : ''}`} />
          <span>{isTouring ? 'Touring' : 'Tour'}</span>
        </button>

        {/* Speed Multiplier */}
        <button
          onClick={cycleSpeed}
          className="px-2 py-0.5 rounded bg-white/[0.05] hover:bg-white/10 text-[11px] text-sky-400 border border-sky-500/20 transition-colors"
          title="Adjust Swarm Velocity"
        >
          {speed}x
        </button>

        {/* Sound Toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          title={isMuted ? 'Telemetry Audio Off' : 'Telemetry Audio On'}
          aria-label="Toggle Sound"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-red-400" />}
        </button>

        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="p-1.5 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 transition-colors"
          title={isPlaying ? 'Pause Swarm Simulation' : 'Resume Swarm Simulation'}
          aria-label="Toggle Agent Swarm"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

      </div>
    </div>
  );
}
