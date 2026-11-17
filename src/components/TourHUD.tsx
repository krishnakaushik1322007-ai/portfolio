'use client';

import React, { useState } from 'react';
import { 
  Compass, 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  VolumeX, 
  Map, 
  Sparkles,
  Info,
  Maximize2
} from 'lucide-react';
import { useTour } from '@/context/TourContext';

export default function TourHUD() {
  const {
    currentStation,
    stations,
    isAutoTouring,
    tourTimer,
    audioEnabled,
    isFloorPlanOpen,
    setIsFloorPlanOpen,
    toggleAutoTour,
    goToStation,
    nextStation,
    prevStation,
    toggleAudio
  } = useTour();

  const [isCommentaryExpanded, setIsCommentaryExpanded] = useState<boolean>(false);
  const activeStation = stations[currentStation];

  return (
    <>
      {/* Floating Bottom Spatial Tour HUD */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[96vw]">
        
        {/* Expanded Docent Commentary Popover */}
        {isCommentaryExpanded && (
          <div className="mb-3 p-4 rounded-2xl bg-[#090d16]/95 border border-[#e5b061]/30 backdrop-blur-2xl shadow-[0_15px_45px_rgba(0,0,0,0.8)] font-mono text-xs max-w-lg animate-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
              <span className="text-[#e5b061] font-bold text-[11px] flex items-center space-x-1.5">
                <Compass className="w-3.5 h-3.5 text-[#e5b061] animate-spin" />
                <span>TOUR GUIDE COMMENTARY // STATION {activeStation.number}</span>
              </span>
              <button
                onClick={() => setIsCommentaryExpanded(false)}
                className="text-slate-400 hover:text-white text-[10px] uppercase font-bold"
              >
                Close &times;
              </button>
            </div>
            <p className="text-slate-200 leading-relaxed text-xs">
              {activeStation.docentNote}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {activeStation.features.map((feat, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded bg-[#e5b061]/10 text-[#e5b061] border border-[#e5b061]/20 text-[10px]"
                >
                  &bull; {feat}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Main Dock Container */}
        <div className="flex items-center space-x-2 sm:space-x-3.5 px-3.5 sm:px-5 py-2.5 rounded-full bg-[#080c14]/95 border border-[#e5b061]/25 backdrop-blur-2xl shadow-[0_12px_45px_rgba(0,0,0,0.9)] text-xs font-mono text-slate-200">
          
          {/* Station Identity & Progress */}
          <div className="flex items-center space-x-2 border-r border-white/10 pr-3">
            <span className="text-[#e5b061] font-black text-xs sm:text-sm">
              STOP {activeStation.number}
            </span>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-white text-xs truncate max-w-[140px] md:max-w-[180px]">
                {activeStation.name}
              </span>
              <span className="text-[9px] text-[#e5b061]/70 truncate max-w-[140px]">
                {activeStation.roomType}
              </span>
            </div>

            {/* Auto-tour progress line */}
            {isAutoTouring && (
              <div className="w-12 h-1 rounded-full bg-white/10 overflow-hidden ml-1">
                <div
                  className="h-full bg-gradient-to-r from-[#e5b061] to-emerald-400 transition-all duration-100"
                  style={{ width: `${tourTimer}%` }}
                />
              </div>
            )}
          </div>

          {/* Quick Station Navigation Dots */}
          <div className="hidden md:flex items-center space-x-1 border-r border-white/10 pr-3">
            {stations.map((st, idx) => (
              <button
                key={st.id}
                onClick={() => goToStation(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentStation
                    ? 'w-5 bg-[#e5b061] shadow-[0_0_10px_#e5b061]'
                    : 'bg-white/20 hover:bg-white/50'
                }`}
                title={`Jump to Station ${st.number}: ${st.name}`}
              />
            ))}
          </div>

          {/* Previous / Next Arrows */}
          <div className="flex items-center space-x-1">
            <button
              onClick={prevStation}
              className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="Previous Station"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextStation}
              className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="Next Station"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Auto Tour Play/Pause Toggle */}
          <button
            onClick={toggleAutoTour}
            className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all flex items-center space-x-1.5 border ${
              isAutoTouring
                ? 'bg-[#e5b061] text-[#07090e] border-[#e5b061] shadow-[0_0_15px_rgba(229,176,97,0.4)]'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border-white/10'
            }`}
          >
            {isAutoTouring ? (
              <>
                <Pause className="w-3 h-3 fill-current" />
                <span>Touring</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-current" />
                <span>Auto Tour</span>
              </>
            )}
          </button>

          {/* Docent Commentary Toggle */}
          <button
            onClick={() => setIsCommentaryExpanded(!isCommentaryExpanded)}
            className={`p-1.5 rounded-full transition-colors ${
              isCommentaryExpanded
                ? 'bg-[#e5b061]/20 text-[#e5b061]'
                : 'hover:bg-white/10 text-slate-400 hover:text-white'
            }`}
            title="Tour Guide Narrative"
          >
            <Info className="w-4 h-4" />
          </button>

          {/* Campus Blueprint Map Button */}
          <button
            onClick={() => setIsFloorPlanOpen(true)}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-[#e5b061] transition-colors"
            title="View Estate Floor Plan Blueprint"
          >
            <Map className="w-4 h-4" />
          </button>

          {/* Audio Chime Toggle */}
          <button
            onClick={toggleAudio}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title={audioEnabled ? 'Mute Spatial Chimes' : 'Enable Spatial Audio Chimes'}
          >
            {audioEnabled ? (
              <Volume2 className="w-4 h-4 text-[#e5b061]" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

        </div>
      </div>
    </>
  );
}
