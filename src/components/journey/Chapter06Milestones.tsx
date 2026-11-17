'use client';

import React, { useState } from 'react';
import { 
  Award, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink, 
  Info 
} from 'lucide-react';
import { useJourney } from '@/context/JourneyContext';
import CertificateModal from '../CertificateModal';

export default function Chapter06Milestones() {
  const { goToChapter, playCinematicChime } = useJourney();
  const [certModalOpen, setCertModalOpen] = useState<boolean>(false);

  return (
    <section 
      id="milestones"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-28 sm:py-36 border-b border-white/[0.06] overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto w-full space-y-12 z-10">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 font-mono text-xs uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5 animate-pulse" />
              <span>CHAPTER 06 // THE MILESTONES &bull; THEME: PROGRESS AND RECOGNITION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
              Milestones &amp; <span className="italic font-normal text-gradient-journey">Competitive Progress.</span>
            </h2>
            <p className="mt-2 text-slate-300 font-sans text-sm sm:text-base max-w-2xl">
              Competitive validation of technical architecture and problem-solving methodology evaluated under real contest constraints.
            </p>
          </div>
        </div>

        {/* Anveshan Hackathon Showcase Card */}
        <div className="p-6 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div>
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block">
                COMPETITIVE HACKATHON RECORD // 2026
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-100 font-normal mt-1">
                Anveshan Hackathon
              </h3>
              <p className="text-sm font-sans text-[#38bdf8] font-medium mt-0.5">
                Successfully Advanced to Round 2 &bull; Official Certificate of Participation Received
              </p>
            </div>

            <button
              onClick={() => {
                setCertModalOpen(true);
                playCinematicChime(700);
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-[#38bdf8] hover:from-purple-400 hover:to-[#60a5fa] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-2 shadow-[0_0_20px_rgba(168,85,247,0.3)] self-start sm:self-auto"
            >
              <Award className="w-4 h-4" />
              <span>INSPECT CERTIFICATE</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              <p>
                Participated in the competitive Anveshan Hackathon, presenting engineering solutions evaluated on technical feasibility, architectural design, and structured implementation. Successfully cleared preliminary evaluation and advanced to Round 2, earning an official Certificate of Participation.
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
                <span className="text-[10px] font-mono text-[#e5b061] uppercase tracking-wider block font-semibold">
                  Grounded Truth Compliance:
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Strictly and honestly presented as a <strong>Round 2 Participant</strong> with an official participation certificate. Krishna explicitly refrains from claiming winner, champion, or finalist designations without evidence.
                </p>
              </div>
            </div>

            {/* Interactive Certificate Plaque Clickable Preview */}
            <div className="md:col-span-5">
              <div 
                onClick={() => {
                  setCertModalOpen(true);
                  playCinematicChime(700);
                }}
                className="p-6 rounded-2xl border border-dashed border-purple-500/40 bg-gradient-to-b from-purple-950/20 to-black/60 flex flex-col items-center justify-center text-center cursor-pointer hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 mb-3 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-slate-100 font-medium text-base">
                  Anveshan Hackathon Round 2
                </h4>
                <span className="text-xs font-mono text-purple-300 mt-0.5">
                  Official Certificate of Participation
                </span>
                <span className="text-[10px] font-mono text-slate-500 mt-2 block">
                  Click to inspect full certificate view modal
                </span>
              </div>
            </div>

          </div>

          {/* Continue Prompt to Chapter 07 (Destination) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
            <div className="text-xs font-mono text-slate-400 flex items-center space-x-2">
              <Info className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Next up: The final chapter &mdash; What Comes Next? (Destination &amp; Contact)</span>
            </div>

            <button
              onClick={() => {
                goToChapter(6);
                playCinematicChime(640);
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-white font-mono text-xs font-bold uppercase tracking-wider hover:from-[#60a5fa] transition-all flex items-center space-x-2 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            >
              <span>TRAVEL TO THE DESTINATION (CHAPTER 07)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      <CertificateModal 
        isOpen={certModalOpen} 
        onClose={() => setCertModalOpen(false)} 
        title="Anveshan Hackathon Round 2 Participation"
        organization="Anveshan Competitive Hackathon Committee"
        date="2026"
        placeholderText="Official Anveshan Hackathon Round 2 Participation Certificate awarded to Krishna Kaushik"
      />
    </section>
  );
}
