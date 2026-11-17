'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LiveAgentPrototypeStudio from '@/components/LiveAgentPrototypeStudio';
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

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#050508] text-slate-100 overflow-hidden flex flex-col justify-between selection:bg-red-500/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero />

        {/* Live Autonomous Agent Prototype Studio (Interactive agent build workbench) */}
        <LiveAgentPrototypeStudio />

        {/* 7-Layer Autonomous Engineering Stack (Flagships) */}
        <ConstitutionalStack />

        {/* The Systems Matrix Project Showcase */}
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

        {/* Direct Connect */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
