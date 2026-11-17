'use client';

import React from 'react';
import { JourneyProvider } from '@/context/JourneyContext';
import CinematicEnvironmentCanvas from '@/components/journey/CinematicEnvironmentCanvas';
import JourneyHUD from '@/components/journey/JourneyHUD';
import Chapter01Beginning from '@/components/journey/Chapter01Beginning';
import Chapter02Foundation from '@/components/journey/Chapter02Foundation';
import Chapter03Learning from '@/components/journey/Chapter03Learning';
import Chapter04Building from '@/components/journey/Chapter04Building';
import Chapter05Experience from '@/components/journey/Chapter05Experience';
import Chapter06Milestones from '@/components/journey/Chapter06Milestones';
import Chapter07Destination from '@/components/journey/Chapter07Destination';
import JourneyFooter from '@/components/journey/JourneyFooter';
import JourneyWaypointModal from '@/components/journey/JourneyWaypointModal';

export default function HomePage() {
  return (
    <JourneyProvider>
      <div className="relative min-h-screen bg-[#040711] text-slate-100 overflow-x-hidden flex flex-col justify-between selection:bg-[#38bdf8]/30 selection:text-white">
        
        {/* Dynamic Procedural Ambient Canvas (Sunrise Mountains to Cybernetic Metropolis) */}
        <CinematicEnvironmentCanvas />

        {/* Persistent Journey Navigation & Recruiter Fast-Access HUD */}
        <JourneyHUD />

        <main className="relative flex-1 z-10">
          {/* CHAPTER 01 — THE BEGINNING (Theme: Curiosity) */}
          <Chapter01Beginning />

          {/* CHAPTER 02 — THE FOUNDATION (Theme: Education & Shoolini University 9.05 CGPA) */}
          <Chapter02Foundation />

          {/* CHAPTER 03 — THE LEARNING PHASE (Theme: Discovering Technology & Skills) */}
          <Chapter03Learning />

          {/* CHAPTER 04 — THE BUILDING PHASE (Theme: Turning Ideas Into Reality - CampusOS AI, Gyanix, CivicLens) */}
          <Chapter04Building />

          {/* CHAPTER 05 — THE PROFESSIONAL JOURNEY (Theme: Expanding Technical Horizons - Corizo / IIT Bombay) */}
          <Chapter05Experience />

          {/* CHAPTER 06 — THE MILESTONES (Theme: Progress and Recognition - Anveshan Hackathon Round 2) */}
          <Chapter06Milestones />

          {/* CHAPTER 07 — WHAT COMES NEXT? (Theme: Ambition & Direct Dispatch Contact) */}
          <Chapter07Destination />
        </main>

        {/* Narrative Journey Footer */}
        <JourneyFooter />

        {/* Interactive 2D Visual Route Map Modal */}
        <JourneyWaypointModal />
      </div>
    </JourneyProvider>
  );
}
