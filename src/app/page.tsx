import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProofMetrics from '@/components/ProofMetrics';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import AchievementsSection from '@/components/AchievementsSection';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 overflow-hidden flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProofMetrics />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjects />
        <ExperienceSection />
        <EducationSection />
        <AchievementsSection />
        <InteractiveTerminal />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
