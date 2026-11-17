'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ConstitutionalStack from '@/components/ConstitutionalStack';
import FeaturedProjects from '@/components/FeaturedProjects';
import ProofMetrics from '@/components/ProofMetrics';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import AchievementsSection from '@/components/AchievementsSection';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AgentSwarmCursors from '@/components/AgentSwarmCursors';
import FloatingHUDDock from '@/components/FloatingHUDDock';

export default function HomePage() {
  const [swarmActive, setSwarmActive] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  return (
    <div className="relative min-h-screen bg-[#050508] text-slate-100 overflow-hidden flex flex-col justify-between selection:bg-red-500/30 selection:text-white">
      {/* Autonomous Multi-Agent Swarm Cursors (Matching Video Live Effect) */}
      <AgentSwarmCursors active={swarmActive} speedMultiplier={speedMultiplier} />

      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero />

        {/* 7-Layer Autonomous Engineering Stack (From Video) */}
        <ConstitutionalStack />

        {/* The Systems Matrix Project Showcase (From Video) */}
        <FeaturedProjects />

        {/* Ground-Truth Metrics */}
        <ProofMetrics />

        {/* Engineering Profile & Philosophy */}
        <AboutSection />

        {/* Technical Arsenal Matrix */}
        <SkillsSection />

        {/* Structured Internship Timeline */}
        <ExperienceSection />

        {/* Academic Credentials */}
        <EducationSection />

        {/* Competitive Milestones & Hackathons */}
        <AchievementsSection />

        {/* Recruiter CLI Sandbox */}
        <InteractiveTerminal />

        {/* Direct Connect (From Video) */}
        <ContactSection />
      </main>

      <Footer />

      {/* Floating HUD Controller Dock (From Video) */}
      <FloatingHUDDock
        onTogglePlay={(isPlaying) => setSwarmActive(isPlaying)}
        onSpeedChange={(spd) => setSpeedMultiplier(spd)}
      />
    </div>
  );
}
