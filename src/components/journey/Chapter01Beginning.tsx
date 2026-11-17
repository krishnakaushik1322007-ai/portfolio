'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Compass, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { useJourney } from '@/context/JourneyContext';

export default function Chapter01Beginning() {
  const { goToChapter, playCinematicChime } = useJourney();
  const [photoLoaded, setPhotoLoaded] = useState(false);

  return (
    <section 
      id="beginning"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 overflow-hidden"
    >
      {/* Decorative Perspective Road Guide */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full space-y-12 z-10">
        
        {/* Cinematic Chapter Banner */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#e5b061]/40 bg-[#e5b061]/10 text-[#e5b061] font-mono text-xs uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>CHAPTER 01 // THE BEGINNING &bull; THEME: CURIOSITY</span>
        </div>

        {/* Main Hero Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story Opening & Headlines */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs sm:text-sm text-[#38bdf8] uppercase tracking-widest font-semibold block">
                AI ENGINEER &bull; SOFTWARE DEVELOPER &bull; CSE (AI) SCHOLAR
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-slate-100 tracking-tight leading-[1.08]">
                Every Great Journey <br />
                Begins With <span className="italic font-normal text-gradient-gold">Curiosity.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-xl">
              Exploring ideas, building intelligent systems and engineering solutions for the real world. From curiosity in the quiet of the morning to building role-governed AI architectures and low-latency systems.
            </p>

            {/* Core Verified Factoids */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-slate-300">
              <div className="px-3 py-1.5 rounded-lg bg-[#091224]/80 border border-white/[0.08] flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                <span>Shoolini University &bull; 9.05 CGPA</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#091224]/80 border border-white/[0.08] flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#e5b061]" />
                <span>CampusOS AI &bull; 510 QA Suites</span>
              </div>
            </div>

            {/* The Main Action Button: START THE JOURNEY */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => {
                  goToChapter(1);
                  playCinematicChime(480);
                }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#e5b061] to-[#f59e0b] hover:from-[#fef08a] hover:to-[#e5b061] text-black font-mono text-sm font-bold uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(229,176,97,0.4)] hover:shadow-[0_0_45px_rgba(229,176,97,0.6)] flex items-center justify-center space-x-3 group"
              >
                <span>START THE JOURNEY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="/Krishna_Kaushik_Resume.pdf"
                download="Krishna_Kaushik_Resume.pdf"
                className="px-6 py-4 rounded-xl border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 font-mono text-sm tracking-wider flex items-center justify-center space-x-2 transition-all"
              >
                <FileText className="w-4 h-4 text-[#38bdf8]" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            <div className="pt-4 text-xs font-mono text-slate-500 flex items-center space-x-2">
              <Compass className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Scroll down or use the Route Map to traverse chapters</span>
            </div>
          </div>

          {/* Right Column: Real Studio Photograph Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Golden Glow Framing */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#e5b061]/20 via-[#38bdf8]/10 to-transparent rounded-2xl blur-xl pointer-events-none" />

              <div className="relative rounded-2xl border border-[#e5b061]/30 bg-[#070b16]/95 backdrop-blur-xl p-5 shadow-2xl space-y-4">
                
                {/* Photo Reticle Container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-white/[0.1] bg-black/60 shadow-inner group">
                  <Image
                    src="/krishna_kaushik.jpg"
                    alt="Krishna Kaushik - AI Engineer & Software Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                    onLoad={() => setPhotoLoaded(true)}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040711]/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Corner Reticle Brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#e5b061]" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#e5b061]" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#e5b061]" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#e5b061]" />

                  {/* Lower Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                    <span className="px-2 py-0.5 rounded bg-black/75 border border-white/20 backdrop-blur-md">
                      KRISHNA KAUSHIK
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#10b981]/80 text-black font-bold">
                      VERIFIED
                    </span>
                  </div>
                </div>

                {/* Identity Summary Plaque */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-base font-serif text-slate-100 font-medium">
                        Krishna Kaushik
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        AI Engineer &bull; Full-Stack Systems
                      </div>
                    </div>
                    <div className="text-right font-mono text-xs text-[#e5b061]">
                      9.05 / 10 CGPA
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Undergraduate scholar at Shoolini University (2025&ndash;2029) building grounded AI models, institutional platforms, and offline deterministic systems.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Scroll Waypoint Prompt */}
        <div className="flex flex-col items-center justify-center pt-8 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
             onClick={() => goToChapter(1)}>
          <span className="text-[10px] font-mono uppercase tracking-widest mb-1">
            CONTINUE TO CHAPTER 02 &bull; THE FOUNDATION
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#38bdf8]" />
        </div>

      </div>
    </section>
  );
}
