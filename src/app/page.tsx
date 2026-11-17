'use client';

import React from 'react';
import { TourProvider } from '@/context/TourContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ConstitutionalStack from '@/components/ConstitutionalStack';
import CivicLensSection from '@/components/CivicLensSection';
import GyanixSection from '@/components/GyanixSection';
import SiliconFoundrySection from '@/components/SiliconFoundrySection';
import ArchivesSection from '@/components/ArchivesSection';
import ExecutiveLoungeSection from '@/components/ExecutiveLoungeSection';
import Footer from '@/components/Footer';
import TourHUD from '@/components/TourHUD';
import FloorPlanModal from '@/components/FloorPlanModal';

export default function HomePage() {
  return (
    <TourProvider>
      <div className="relative min-h-screen bg-[#07090e] text-slate-100 overflow-x-hidden flex flex-col justify-between selection:bg-[#e5b061]/30 selection:text-white">
        
        {/* Architectural Blueprint Navigation Bar */}
        <Navbar />

        <main className="flex-1">
          {/* STATION 01: The Grand Foyer (Executive Welcome & Studio Portrait) */}
          <Hero />

          {/* STATION 02: Autonomous Systems Lab (CampusOS AI & 7-Layer Stack) */}
          <ConstitutionalStack />

          {/* STATION 03: Vision & Geospatial Observatory (CivicLens & PostGIS ST_DWithin) */}
          <CivicLensSection />

          {/* STATION 04: Socratic Learning Pavilion (Gyanix Socratic Engine) */}
          <GyanixSection />

          {/* STATION 05: Silicon Foundry & The Systems Matrix (ZENETH C++ & Systems Arsenal) */}
          <SiliconFoundrySection />

          {/* STATION 06: Academic & Research Archives (Shoolini 9.05 CGPA, Corizo/IIT Bombay) */}
          <ArchivesSection />

          {/* STATION 07: Executive Boardroom & Dispatch Lounge (Direct Connect & Transmissions) */}
          <ExecutiveLoungeSection />
        </main>

        {/* Estate Curatorial Footer */}
        <Footer />

        {/* Floating Spatial Tour HUD Dock */}
        <TourHUD />

        {/* 2D Architectural Estate Blueprint Modal */}
        <FloorPlanModal />
      </div>
    </TourProvider>
  );
}
