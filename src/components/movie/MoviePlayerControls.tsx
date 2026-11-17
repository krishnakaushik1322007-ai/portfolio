'use client';

import React from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  Layers, 
  FileText, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useMovie, MOVIE_SCENES } from '@/context/MovieContext';

export default function MoviePlayerControls() {
  const {
    progress,
    isPlaying,
    audioEnabled,
    currentScene,
    currentSceneIndex,
    togglePlay,
    toggleAudio,
    seekProgress,
    nextScene,
    prevScene,
    replayJourney,
    openProjectModal
  } = useMovie();

  const handleScrubberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    seekProgress(val);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
    }
  };

  // Convert 0.0 - 1.0 to 00:00 - 01:35
  const totalSeconds = 95;
  const currentSec = Math.floor(progress * totalSeconds);
  const curM = String(Math.floor(currentSec / 60)).padStart(2, '0');
  const curS = String(currentSec % 60).padStart(2, '0');
  const totM = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const totS = String(totalSeconds % 60).padStart(2, '0');

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 p-3 sm:p-5 pointer-events-none">
      <div className="max-w-5xl mx-auto rounded-2xl border border-white/[0.12] bg-[#050813]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.85)] p-3 sm:p-4 space-y-2 pointer-events-auto">
        
        {/* Scrubber Track with Scene Markers */}
        <div className="relative flex items-center group">
          <input
            type="range"
            min="0"
            max="1"
            step="0.001"
            value={progress}
            onChange={handleScrubberChange}
            className="w-full h-1.5 sm:h-2 bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#38bdf8] focus:outline-none"
            title="Scrub Cinematic Timeline"
          />

          {/* Scene Marker Ticks */}
          {MOVIE_SCENES.map((sc) => (
            <div
              key={sc.id}
              onClick={() => seekProgress(sc.startProgress + 0.005)}
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-3 bg-white/30 hover:bg-[#38bdf8] cursor-pointer rounded-full transition-colors"
              style={{ left: `${sc.startProgress * 100}%` }}
              title={`${sc.title} (${(sc.startProgress * 100).toFixed(0)}%)`}
            />
          ))}
        </div>

        {/* Transport Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          
          {/* Left Transport Cluster: Play/Pause, Prev, Next, Replay, Timecode */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={togglePlay}
              className={`p-2.5 rounded-xl font-mono text-xs transition-all flex items-center justify-center ${
                isPlaying
                  ? 'bg-white/[0.08] text-white hover:bg-white/[0.15] border border-white/[0.1]'
                  : 'bg-[#38bdf8] text-black hover:bg-[#7dd3fc] shadow-[0_0_15px_rgba(56,189,248,0.4)] font-bold'
              }`}
              title={isPlaying ? 'Pause Film (Space)' : 'Play Film (Space)'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            <button
              onClick={prevScene}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              title="Previous Scene"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={nextScene}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              title="Next Scene"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            <button
              onClick={replayJourney}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              title="Replay Journey from Scene 01"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Timecode */}
            <div className="hidden sm:flex items-center space-x-1.5 text-xs font-mono text-slate-300 pl-2">
              <span className="text-[#38bdf8] font-bold">{curM}:{curS}</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">{totM}:{totS}</span>
            </div>
          </div>

          {/* Center: Active Scene Name */}
          <div className="hidden md:flex items-center space-x-2 text-xs font-mono">
            <span className="text-slate-500">SCENE 0{currentSceneIndex + 1}:</span>
            <span className="text-slate-200 font-semibold uppercase">{currentScene.title}</span>
          </div>

          {/* Right Action Cluster: Projects, Sound, Fullscreen */}
          <div className="flex items-center space-x-2">
            
            {/* Quick Explore Projects Trigger */}
            <button
              onClick={() => openProjectModal('campusos-ai')}
              className="px-3 py-1.5 rounded-lg border border-[#e5b061]/40 bg-[#e5b061]/10 hover:bg-[#e5b061]/20 text-[#e5b061] font-mono text-xs tracking-wider flex items-center space-x-1.5 transition-all shadow-[0_0_10px_rgba(229,176,97,0.15)]"
              title="Pause movie and explore 6 project case studies"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>PROJECTS</span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-lg border transition-all ${
                audioEnabled
                  ? 'border-[#38bdf8]/50 text-[#38bdf8] bg-[#38bdf8]/10'
                  : 'border-white/[0.08] text-slate-500 hover:text-slate-300'
              }`}
              title={audioEnabled ? 'Mute Audio' : 'Unmute Cinematic Sound'}
            >
              {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              title="Toggle Cinematic Fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
