'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowUp, 
  FileText, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Compass, 
  Map 
} from 'lucide-react';
import { useJourney } from '@/context/JourneyContext';

export default function JourneyFooter() {
  const { goToChapter, setIsWaypointMapOpen } = useJourney();

  const scrollToBeginning = () => {
    goToChapter(0);
  };

  return (
    <footer className="relative bg-[#020409] border-t border-white/[0.08] text-slate-400 py-16 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg border border-[#38bdf8]/40 bg-[#38bdf8]/10 flex items-center justify-center font-serif font-bold text-[#38bdf8] text-base shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                KK
              </div>
              <div>
                <span className="font-serif text-slate-100 text-lg tracking-tight block">
                  Krishna Kaushik
                </span>
                <span className="text-[11px] font-mono text-[#38bdf8]">
                  THE JOURNEY &bull; FROM CURIOSITY TO ENGINEERING
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-sm">
              Computer Science &amp; Artificial Intelligence undergraduate at Shoolini University (9.05/10 CGPA). Engineering intelligent systems, low-latency C++ rule engines, and role-governed software platforms.
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-[#10b981]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>Available for Global Engineering Opportunities</span>
            </div>
          </div>

          {/* Chapters Directory */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="uppercase tracking-wider text-[#38bdf8] font-semibold block">
                Journey Waypoints
              </span>
              <button
                onClick={() => setIsWaypointMapOpen(true)}
                className="text-[10px] text-slate-400 hover:text-[#38bdf8] flex items-center space-x-1"
              >
                <Map className="w-3 h-3 text-[#e5b061]" />
                <span>Open Route Map</span>
              </button>
            </div>
            
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <button onClick={() => goToChapter(0)} className="hover:text-[#38bdf8] transition-colors flex items-center space-x-1.5 text-left">
                  <span className="text-slate-500 font-mono">01</span>
                  <span>The Beginning (Theme: Curiosity)</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToChapter(1)} className="hover:text-[#38bdf8] transition-colors flex items-center space-x-1.5 text-left">
                  <span className="text-slate-500 font-mono">02</span>
                  <span>The Foundation (Shoolini University 9.05 CGPA)</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToChapter(2)} className="hover:text-[#38bdf8] transition-colors flex items-center space-x-1.5 text-left">
                  <span className="text-slate-500 font-mono">03</span>
                  <span>The Learning Phase (Tools &amp; Technologies)</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToChapter(3)} className="hover:text-[#38bdf8] transition-colors flex items-center space-x-1.5 text-left">
                  <span className="text-slate-500 font-mono">04</span>
                  <span>The Building Phase (CampusOS AI &amp; Projects)</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToChapter(4)} className="hover:text-[#38bdf8] transition-colors flex items-center space-x-1.5 text-left">
                  <span className="text-slate-500 font-mono">05</span>
                  <span>The Professional Journey (Corizo / IIT-B)</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToChapter(5)} className="hover:text-[#38bdf8] transition-colors flex items-center space-x-1.5 text-left">
                  <span className="text-slate-500 font-mono">06</span>
                  <span>The Milestones (Anveshan Round 2)</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToChapter(6)} className="hover:text-[#38bdf8] transition-colors flex items-center space-x-1.5 text-left">
                  <span className="text-slate-500 font-mono">07</span>
                  <span>What Comes Next? (Destination &amp; Contact)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Verification & Resume PDF */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="uppercase tracking-wider text-[#38bdf8] font-semibold block">
              Grounded Credentials
            </span>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Every detail is verifiable via public GitHub repositories, automated test suites, and official university records.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href="/Krishna_Kaushik_Resume.pdf"
                download="Krishna_Kaushik_Resume.pdf"
                className="px-3 py-2 rounded-lg border border-[#38bdf8]/30 bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 text-[#38bdf8] font-mono text-xs flex items-center justify-between transition-all"
              >
                <div className="flex items-center space-x-2">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Verified Resume</span>
                </div>
                <span className="text-[10px] text-slate-400">PDF</span>
              </a>

              <a
                href="mailto:krishnakaushik1322007@gmail.com"
                className="px-3 py-2 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] text-slate-300 font-mono text-xs flex items-center space-x-2 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#e5b061]" />
                <span className="truncate">krishnakaushik1322007@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#10b981]" />
            <span>&copy; 2026 Krishna Kaushik. THE JOURNEY: From Curiosity to Engineering.</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToBeginning}
              className="p-2 rounded-lg border border-white/[0.08] hover:border-[#38bdf8]/40 text-slate-400 hover:text-[#38bdf8] transition-all flex items-center space-x-1"
              title="Return to Chapter 1: The Beginning"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
