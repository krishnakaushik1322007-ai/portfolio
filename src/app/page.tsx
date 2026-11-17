'use client';

import React from 'react';
import { MovieProvider, useMovie } from '@/context/MovieContext';
import AnimeCinemaWorld from '@/components/movie/AnimeCinemaWorld';
import CinematicNarrativeOverlay from '@/components/movie/CinematicNarrativeOverlay';
import MoviePlayerControls from '@/components/movie/MoviePlayerControls';
import MovieProjectModal from '@/components/movie/MovieProjectModal';
import CinematicLetterbox from '@/components/movie/CinematicLetterbox';
import CertificateModal from '@/components/CertificateModal';

function MovieExperience() {
  const { isCertificateModalOpen, setIsCertificateModalOpen } = useMovie();

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#040711] text-slate-100 select-none">
      
      {/* Cinematic 2.39:1 Letterbox Scope & Audio Unlock */}
      <CinematicLetterbox />

      {/* The 2D Anime Cinematic Engine (Handcrafted Anime Krishna, 2.5D Parallax, Particle Atmosphere) */}
      <AnimeCinemaWorld />

      {/* Real-time Narrative Story Beats & Recruiter Fast-Access */}
      <CinematicNarrativeOverlay />

      {/* Floating Movie Player Transport Bar (Timeline scrubber, Play/Pause, Scene navigation) */}
      <MoviePlayerControls />

      {/* Interactive Project Case Study Modal (Pauses movie when inspected, resumes on close) */}
      <MovieProjectModal />

      {/* Anveshan Hackathon Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
        title="Anveshan Hackathon Round 2 Participation"
        organization="Anveshan Competitive Hackathon Committee"
        date="2026"
        placeholderText="Official Anveshan Hackathon Round 2 Participation Certificate awarded to Krishna Kaushik"
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <MovieProvider>
      <MovieExperience />
    </MovieProvider>
  );
}
