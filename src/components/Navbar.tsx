'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Compass, 
  Play, 
  Pause, 
  Menu, 
  X, 
  ArrowRight, 
  Volume2, 
  VolumeX,
  Layers,
  Sparkles
} from 'lucide-react';
import { useTour } from '@/context/TourContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const { 
    currentStation, 
    stations, 
    isAutoTouring, 
    toggleAutoTour, 
    goToStation, 
    setIsFloorPlanOpen,
    audioEnabled,
    toggleAudio
  } = useTour();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStations = [
    { name: '01 Foyer', id: 0, targetId: '#foyer' },
    { name: '02 CampusOS Lab', id: 1, targetId: '#campusos' },
    { name: '03 CivicLens', id: 2, targetId: '#civiclens' },
    { name: '04 Gyanix', id: 3, targetId: '#gyanix' },
    { name: '05 Foundry', id: 4, targetId: '#foundry' },
    { name: '06 Archives', id: 5, targetId: '#archives' },
    { name: '07 Lounge', id: 6, targetId: '#lounge' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090e]/95 backdrop-blur-md border-b border-[#e5b061]/20 shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Identity & Architectural Monogram */}
          <Link
            href="/"
            className="flex items-center space-x-3 group cursor-pointer focus:outline-none"
            aria-label="Krishna Kaushik Portfolio Home"
          >
            <div className="w-10 h-10 rounded border border-[#e5b061]/40 bg-[#e5b061]/10 flex items-center justify-center font-serif font-bold text-[#e5b061] text-sm shadow-[0_0_15px_rgba(229,176,97,0.2)] group-hover:scale-105 transition-transform">
              KK.
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-medium text-slate-100 tracking-tight text-sm uppercase group-hover:text-[#e5b061] transition-colors">
                KRISHNA KAUSHIK
              </span>
              <span className="text-[10px] font-mono text-[#e5b061]/80 tracking-wider">
                ARCHITECTURAL GUIDED TOUR
              </span>
            </div>
          </Link>

          {/* Center Desktop Station Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navStations.map((st) => (
              <button
                key={st.name}
                onClick={() => goToStation(st.id)}
                className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all flex items-center space-x-1 ${
                  currentStation === st.id
                    ? 'text-[#e5b061] font-bold bg-[#e5b061]/15 border border-[#e5b061]/40 shadow-[0_0_10px_rgba(229,176,97,0.2)]'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]'
                }`}
              >
                <span>{st.name}</span>
              </button>
            ))}
          </nav>

          {/* Right Action Cluster: Blueprint Modal + Auto Tour + Dispatch */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* 2D Blueprint Map Modal Trigger */}
            <button
              onClick={() => setIsFloorPlanOpen(true)}
              className="px-3 py-1.5 rounded border border-[#e5b061]/30 bg-[#e5b061]/5 hover:bg-[#e5b061]/15 text-[#e5b061] font-mono text-xs tracking-wider flex items-center space-x-1.5 transition-all shadow-[0_0_10px_rgba(229,176,97,0.1)]"
              title="Open 2D Architectural Estate Blueprint"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>BLUEPRINT</span>
            </button>

            {/* Auto Tour Play/Pause Toggle */}
            <button
              onClick={toggleAutoTour}
              className={`px-3 py-1.5 rounded font-mono text-xs tracking-wider flex items-center space-x-1.5 transition-all border ${
                isAutoTouring
                  ? 'bg-[#10b981]/20 border-[#10b981]/50 text-[#10b981] shadow-[0_0_12px_rgba(16,185,129,0.3)] animate-pulse'
                  : 'bg-white/[0.04] border-white/[0.1] text-slate-300 hover:text-white'
              }`}
              title="Toggle Automated Guided Tour (8s per room)"
            >
              {isAutoTouring ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>PAUSE TOUR</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>AUTO TOUR</span>
                </>
              )}
            </button>

            {/* Audio Chime Toggle */}
            <button
              onClick={toggleAudio}
              className={`p-2 rounded border transition-all ${
                audioEnabled
                  ? 'border-[#e5b061]/40 text-[#e5b061] bg-[#e5b061]/10'
                  : 'border-white/[0.08] text-slate-500 hover:text-slate-300'
              }`}
              title={audioEnabled ? 'Mute Spatial Audio Chimes' : 'Enable Spatial Audio Chimes'}
            >
              {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Dispatch / Contact Pill */}
            <a
              href="#lounge"
              className="px-4 py-2 rounded bg-[#e5b061] hover:bg-[#d49e4d] text-black font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(229,176,97,0.3)] hover:shadow-[0_0_25px_rgba(229,176,97,0.5)] flex items-center space-x-1.5"
            >
              <span>DISPATCH</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsFloorPlanOpen(true)}
              className="p-2 rounded border border-[#e5b061]/30 text-[#e5b061]"
              title="Open Blueprint Map"
            >
              <Compass className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090e]/95 backdrop-blur-xl border-b border-[#e5b061]/20 px-4 pt-3 pb-6 space-y-3">
          <div className="text-[10px] font-mono text-[#e5b061] uppercase tracking-wider px-2">
            Tour Stations Directory
          </div>
          <div className="grid grid-cols-1 gap-1">
            {navStations.map((st) => (
              <button
                key={st.name}
                onClick={() => {
                  goToStation(st.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full px-3 py-2 rounded text-left text-xs font-mono transition-colors flex items-center justify-between ${
                  currentStation === st.id
                    ? 'bg-[#e5b061]/15 text-[#e5b061] font-bold border border-[#e5b061]/30'
                    : 'text-slate-300 hover:bg-white/[0.05]'
                }`}
              >
                <span>{st.name}</span>
                {currentStation === st.id && <span className="text-[10px] text-[#10b981] font-mono">ACTIVE</span>}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <button
              onClick={() => {
                toggleAutoTour();
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 rounded bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-slate-300 flex items-center space-x-1.5"
            >
              {isAutoTouring ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isAutoTouring ? 'Pause Tour' : 'Start Auto Tour'}</span>
            </button>

            <a
              href="#lounge"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded bg-[#e5b061] text-black font-mono text-xs font-bold"
            >
              Dispatch Lounge &rarr;
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
