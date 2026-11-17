'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  Map, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  FileText, 
  ArrowRight, 
  Layers, 
  Mail, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react';
import { useJourney } from '@/context/JourneyContext';

export default function JourneyHUD() {
  const {
    activeChapter,
    chapters,
    isGuided,
    toggleGuidedMode,
    audioEnabled,
    toggleAudio,
    goToChapter,
    scrollProgress,
    setIsWaypointMapOpen
  } = useJourney();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Persistent Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/[0.06] z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-[#38bdf8] via-[#e5b061] to-[#8b5cf6] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#040711]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Identity & Monogram */}
            <button
              onClick={() => goToChapter(0)}
              className="flex items-center space-x-3 group cursor-pointer text-left focus:outline-none"
              aria-label="Return to Chapter 1: The Beginning"
            >
              <div className="w-10 h-10 rounded-lg border border-[#38bdf8]/40 bg-[#38bdf8]/10 flex items-center justify-center font-serif font-bold text-[#38bdf8] text-sm shadow-[0_0_15px_rgba(56,189,248,0.2)] group-hover:scale-105 transition-transform">
                KK.
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-slate-100 tracking-tight text-sm uppercase group-hover:text-[#38bdf8] transition-colors">
                  KRISHNA KAUSHIK
                </span>
                <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                  THE JOURNEY &bull; FROM CURIOSITY TO ENGINEERING
                </span>
              </div>
            </button>

            {/* Desktop Chapter Waypoint Links */}
            <nav className="hidden xl:flex items-center space-x-1">
              {chapters.map((ch, idx) => (
                <button
                  key={ch.id}
                  onClick={() => goToChapter(idx)}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-mono tracking-wider transition-all flex items-center space-x-1 ${
                    activeChapter === idx
                      ? 'text-[#38bdf8] font-bold bg-[#38bdf8]/15 border border-[#38bdf8]/40 shadow-[0_0_12px_rgba(56,189,248,0.25)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="text-[10px] opacity-60">{ch.number}</span>
                  <span>{ch.title}</span>
                </button>
              ))}
            </nav>

            {/* Recruiter Priority Actions (Always Immediate Access) */}
            <div className="hidden md:flex items-center space-x-2.5">
              
              {/* Waypoint Route Map Trigger */}
              <button
                onClick={() => setIsWaypointMapOpen(true)}
                className="px-3 py-1.5 rounded border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 font-mono text-xs tracking-wider flex items-center space-x-1.5 transition-all"
                title="Open Visual Journey Waypoint Map"
              >
                <Map className="w-3.5 h-3.5 text-[#e5b061]" />
                <span>ROUTE MAP</span>
              </button>

              {/* Instant Resume Download */}
              <a
                href="/Krishna_Kaushik_Resume.pdf"
                download="Krishna_Kaushik_Resume.pdf"
                className="px-3 py-1.5 rounded border border-[#38bdf8]/30 bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 text-[#38bdf8] font-mono text-xs tracking-wider flex items-center space-x-1.5 transition-all shadow-[0_0_10px_rgba(56,189,248,0.15)]"
                title="Download Verified Resume PDF"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>RESUME</span>
              </a>

              {/* Audio Atmosphere Toggle */}
              <button
                onClick={toggleAudio}
                className={`p-2 rounded border transition-all ${
                  audioEnabled
                    ? 'border-[#38bdf8]/50 text-[#38bdf8] bg-[#38bdf8]/10'
                    : 'border-white/[0.08] text-slate-500 hover:text-slate-300'
                }`}
                title={audioEnabled ? 'Mute Atmospheric Chimes' : 'Enable Atmospheric Chimes'}
              >
                {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* Quick Jump to Destination / Contact */}
              <button
                onClick={() => goToChapter(6)}
                className="px-4 py-2 rounded bg-gradient-to-r from-[#38bdf8] to-[#2563eb] hover:from-[#60a5fa] hover:to-[#1d4ed8] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(56,189,248,0.35)] flex items-center space-x-1.5"
              >
                <span>CONTACT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => setIsWaypointMapOpen(true)}
                className="p-2 rounded border border-[#38bdf8]/30 text-[#38bdf8]"
                title="Open Route Map"
              >
                <Map className="w-4 h-4" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#040711]/95 backdrop-blur-xl border-b border-white/[0.1] px-4 pt-3 pb-6 space-y-3">
            <div className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider px-2">
              Journey Chapters
            </div>
            <div className="grid grid-cols-1 gap-1">
              {chapters.map((ch, idx) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    goToChapter(idx);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full px-3 py-2 rounded text-left text-xs font-mono transition-colors flex items-center justify-between ${
                    activeChapter === idx
                      ? 'bg-[#38bdf8]/15 text-[#38bdf8] font-bold border border-[#38bdf8]/30'
                      : 'text-slate-300 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-500">{ch.number}</span>
                    <span>{ch.title}</span>
                  </div>
                  {activeChapter === idx && <span className="text-[10px] text-[#e5b061] font-mono">CURRENT</span>}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
              <a
                href="/Krishna_Kaushik_Resume.pdf"
                download="Krishna_Kaushik_Resume.pdf"
                className="px-3 py-2 rounded bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-slate-300 flex items-center space-x-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>Resume PDF</span>
              </a>

              <button
                onClick={() => {
                  goToChapter(6);
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2 rounded bg-[#38bdf8] text-black font-mono text-xs font-bold"
              >
                Reach Destination &rarr;
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
