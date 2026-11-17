'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  FileText, 
  ArrowUp, 
  ShieldCheck, 
  Compass, 
  MapPin, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { useTour } from '@/context/TourContext';

export default function Footer() {
  const { goToStation, setIsFloorPlanOpen } = useTour();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040609] border-t border-[#e5b061]/20 text-slate-400 py-16 overflow-hidden">
      {/* Blueprint Grid Watermark */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e5b061]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded border border-[#e5b061]/40 bg-[#e5b061]/10 flex items-center justify-center font-serif font-bold text-[#e5b061] text-base shadow-[0_0_15px_rgba(229,176,97,0.2)]">
                KK
              </div>
              <div>
                <span className="font-serif text-slate-100 text-lg tracking-tight block">
                  Krishna Kaushik
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  AI Engineer &bull; Systems Developer &bull; CSE (AI) Scholar
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-sm">
              Undergraduate scholar at Shoolini University (9.05/10 CGPA). Engineering verified, ground-truth AI systems, low-latency C++ rule engines, and role-governed software architectures.
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-[#10b981]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>Available for Global Engineering Opportunities</span>
            </div>
          </div>

          {/* Tour Station Directory Column */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="uppercase tracking-wider text-[#e5b061] font-semibold block">
                Tour Station Directory
              </span>
              <button
                onClick={() => setIsFloorPlanOpen(true)}
                className="text-[10px] text-slate-400 hover:text-[#e5b061] flex items-center space-x-1"
              >
                <Compass className="w-3 h-3" />
                <span>Map</span>
              </button>
            </div>
            
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <button onClick={() => goToStation(0)} className="hover:text-[#e5b061] transition-colors flex items-center space-x-1.5 text-left">
                  <span className="text-slate-500 font-mono">01</span>
                  <span>The Grand Foyer (Executive Welcome)</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToStation(1)} className="hover:text-[#e5b061] transition-colors flex items-center space-x-1.5 text-left">
                  <span className="text-slate-500 font-mono">02</span>
                  <span>Autonomous Systems Lab (CampusOS AI)</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToStation(2)} className="hover:text-[#e5b061] transition-colors flex items-center space-x-1.5 text-left">
                  <span className="text-slate-500 font-mono">03</span>
                  <span>Vision &amp; Geospatial Observatory (CivicLens)</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToStation(3)} className="hover:text-[#e5b061] transition-colors flex items-center space-x-1.5 text-left">
                  <span className="text-slate-500 font-mono">04</span>
                  <span>Socratic Learning Pavilion (Gyanix)</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToStation(4)} className="hover:text-[#e5b061] transition-colors flex items-center space-x-1.5 text-left">
                  <span className="text-slate-500 font-mono">05</span>
                  <span>Silicon Foundry &amp; Matrix (ZENETH C++)</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToStation(5)} className="hover:text-[#e5b061] transition-colors flex items-center space-x-1.5 text-left">
                  <span className="text-slate-500 font-mono">06</span>
                  <span>Academic Archives (Shoolini 9.05 CGPA)</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToStation(6)} className="hover:text-[#e5b061] transition-colors flex items-center space-x-1.5 text-left">
                  <span className="text-slate-500 font-mono">07</span>
                  <span>Executive Boardroom &amp; Dispatch</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Verification & Resume Column */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="uppercase tracking-wider text-[#e5b061] font-semibold block">
              Grounded Credentials
            </span>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Every metric on this site is verifiable via local codebase inspection, git commit histories, and official institutional documents.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href="/Krishna_Kaushik_Resume.pdf"
                download="Krishna_Kaushik_Resume.pdf"
                className="px-3 py-2 rounded border border-[#e5b061]/30 bg-[#e5b061]/5 hover:bg-[#e5b061]/15 text-[#e5b061] font-mono text-xs flex items-center justify-between transition-all"
              >
                <div className="flex items-center space-x-2">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Verified Resume</span>
                </div>
                <span className="text-[10px] text-slate-500">PDF</span>
              </a>

              <a
                href="mailto:krishnakaushik1322007@gmail.com"
                className="px-3 py-2 rounded border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] text-slate-300 font-mono text-xs flex items-center space-x-2 transition-all"
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
            <span>&copy; 2026 Krishna Kaushik. Architectural Guided Tour Edition.</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded border border-white/[0.08] hover:border-[#e5b061]/40 text-slate-400 hover:text-[#e5b061] transition-all flex items-center space-x-1"
              title="Return to the Grand Foyer"
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
