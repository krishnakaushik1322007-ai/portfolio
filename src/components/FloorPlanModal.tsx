'use client';

import React from 'react';
import { X, Compass, ExternalLink, MapPin } from 'lucide-react';
import { useTour } from '@/context/TourContext';

export default function FloorPlanModal() {
  const { isFloorPlanOpen, setIsFloorPlanOpen, stations, currentStation, goToStation } = useTour();

  if (!isFloorPlanOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#090d16] border border-[#e5b061]/30 shadow-[0_25px_80px_rgba(0,0,0,0.95)] p-6 sm:p-8 font-mono overflow-hidden">
        
        {/* Background Blueprint Grid */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />

        {/* Modal Header */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs text-[#e5b061] font-bold tracking-wider uppercase">
              <Compass className="w-4 h-4 animate-spin" />
              <span>SPATIAL BLUEPRINT &bull; ESTATE MAP</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Krishna Kaushik Engineering Facility
            </h3>
          </div>

          <button
            onClick={() => setIsFloorPlanOpen(false)}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
            aria-label="Close Blueprint"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2D Interactive Blueprint Map */}
        <div className="relative z-10 aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl bg-[#06080e] border border-[#e5b061]/20 p-4 sm:p-6 flex flex-col justify-between">
          
          <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-widest border-b border-white/[0.06] pb-2">
            <span>LEVEL 01 // ARCHITECTURAL ELEVATION</span>
            <span>GRID: X_284 Y_902</span>
            <span>TOTAL STATIONS: 07</span>
          </div>

          {/* Interactive Room Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 my-auto pt-2">
            
            {/* Room 01: Foyer (Top Center) */}
            <div className="col-span-3 flex justify-center">
              <button
                onClick={() => {
                  goToStation(0);
                  setIsFloorPlanOpen(false);
                }}
                className={`w-full max-w-xs p-3 rounded-lg border text-left transition-all ${
                  currentStation === 0
                    ? 'bg-[#e5b061]/20 border-[#e5b061] shadow-[0_0_20px_rgba(229,176,97,0.3)]'
                    : 'bg-white/[0.03] border-white/10 hover:border-[#e5b061]/50'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-[#e5b061] font-bold">
                  <span>ROOM 01</span>
                  <span>{currentStation === 0 ? '● CURRENT' : 'VISIT &rarr;'}</span>
                </div>
                <div className="text-xs font-bold text-white mt-0.5">The Grand Foyer</div>
                <div className="text-[10px] text-slate-400 truncate">Executive Portrait &amp; Introduction</div>
              </button>
            </div>

            {/* Room 02: CampusOS Lab & Room 03: CivicLens Observatory */}
            <button
              onClick={() => {
                goToStation(1);
                setIsFloorPlanOpen(false);
              }}
              className={`p-3 rounded-lg border text-left transition-all ${
                currentStation === 1
                  ? 'bg-[#e5b061]/20 border-[#e5b061] shadow-[0_0_20px_rgba(229,176,97,0.3)]'
                  : 'bg-white/[0.03] border-white/10 hover:border-[#e5b061]/50'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-[#e5b061] font-bold">
                <span>ROOM 02</span>
                <span>{currentStation === 1 ? '● CURRENT' : 'VISIT &rarr;'}</span>
              </div>
              <div className="text-xs font-bold text-white mt-0.5">Autonomous Systems Lab</div>
              <div className="text-[10px] text-slate-400 truncate">CampusOS AI (510 QA Suites)</div>
            </button>

            {/* Central Courtyard */}
            <div className="p-3 rounded-lg border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
              <span className="text-[9px] text-[#e5b061] font-bold uppercase tracking-wider">CAMPUS COURTYARD</span>
              <span className="text-[10px] text-slate-500">Autonomous Core</span>
            </div>

            <button
              onClick={() => {
                goToStation(2);
                setIsFloorPlanOpen(false);
              }}
              className={`p-3 rounded-lg border text-left transition-all ${
                currentStation === 2
                  ? 'bg-[#e5b061]/20 border-[#e5b061] shadow-[0_0_20px_rgba(229,176,97,0.3)]'
                  : 'bg-white/[0.03] border-white/10 hover:border-[#e5b061]/50'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-[#e5b061] font-bold">
                <span>ROOM 03</span>
                <span>{currentStation === 2 ? '● CURRENT' : 'VISIT &rarr;'}</span>
              </div>
              <div className="text-xs font-bold text-white mt-0.5">Geospatial Observatory</div>
              <div className="text-[10px] text-slate-400 truncate">CivicLens &amp; PostGIS ST_DWithin</div>
            </button>

            {/* Room 04: Gyanix & Room 05: Foundry */}
            <button
              onClick={() => {
                goToStation(3);
                setIsFloorPlanOpen(false);
              }}
              className={`p-3 rounded-lg border text-left transition-all ${
                currentStation === 3
                  ? 'bg-[#e5b061]/20 border-[#e5b061] shadow-[0_0_20px_rgba(229,176,97,0.3)]'
                  : 'bg-white/[0.03] border-white/10 hover:border-[#e5b061]/50'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-[#e5b061] font-bold">
                <span>ROOM 04</span>
                <span>{currentStation === 3 ? '● CURRENT' : 'VISIT &rarr;'}</span>
              </div>
              <div className="text-xs font-bold text-white mt-0.5">Socratic Pavilion</div>
              <div className="text-[10px] text-slate-400 truncate">Gyanix (41 State Transitions)</div>
            </button>

            {/* Room 06: Academic Archives (Center) */}
            <button
              onClick={() => {
                goToStation(5);
                setIsFloorPlanOpen(false);
              }}
              className={`p-3 rounded-lg border text-left transition-all ${
                currentStation === 5
                  ? 'bg-[#e5b061]/20 border-[#e5b061] shadow-[0_0_20px_rgba(229,176,97,0.3)]'
                  : 'bg-white/[0.03] border-white/10 hover:border-[#e5b061]/50'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-[#e5b061] font-bold">
                <span>ROOM 06</span>
                <span>{currentStation === 5 ? '● CURRENT' : 'VISIT &rarr;'}</span>
              </div>
              <div className="text-xs font-bold text-white mt-0.5">Academic Archives</div>
              <div className="text-[10px] text-slate-400 truncate">Shoolini 9.05 CGPA &bull; IIT Bombay Collab</div>
            </button>

            <button
              onClick={() => {
                goToStation(4);
                setIsFloorPlanOpen(false);
              }}
              className={`p-3 rounded-lg border text-left transition-all ${
                currentStation === 4
                  ? 'bg-[#e5b061]/20 border-[#e5b061] shadow-[0_0_20px_rgba(229,176,97,0.3)]'
                  : 'bg-white/[0.03] border-white/10 hover:border-[#e5b061]/50'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-[#e5b061] font-bold">
                <span>ROOM 05</span>
                <span>{currentStation === 4 ? '● CURRENT' : 'VISIT &rarr;'}</span>
              </div>
              <div className="text-xs font-bold text-white mt-0.5">Silicon Foundry</div>
              <div className="text-[10px] text-slate-400 truncate">ZENETH C++ &bull; The Systems Matrix</div>
            </button>

            {/* Room 07: Dispatch Lounge (Bottom Full) */}
            <div className="col-span-3">
              <button
                onClick={() => {
                  goToStation(6);
                  setIsFloorPlanOpen(false);
                }}
                className={`w-full p-3 rounded-lg border text-left transition-all ${
                  currentStation === 6
                    ? 'bg-[#e5b061]/20 border-[#e5b061] shadow-[0_0_20px_rgba(229,176,97,0.3)]'
                    : 'bg-white/[0.03] border-white/10 hover:border-[#e5b061]/50'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-[#e5b061] font-bold">
                  <span>ROOM 07 // FINAL STOP</span>
                  <span>{currentStation === 6 ? '● CURRENT' : 'VISIT &rarr;'}</span>
                </div>
                <div className="text-xs font-bold text-white mt-0.5">Executive Boardroom &amp; Dispatch Lounge</div>
                <div className="text-[10px] text-slate-400">Direct Inquiries, Copy Email, Social Profiles</div>
              </button>
            </div>

          </div>

          <div className="text-[10px] text-slate-500 pt-2 border-t border-white/[0.06] flex items-center justify-between">
            <span>Click any room pin to immediately navigate to that station</span>
            <span className="text-[#e5b061]">Krishna Kaushik Portfolio Facility</span>
          </div>

        </div>

      </div>
    </div>
  );
}
