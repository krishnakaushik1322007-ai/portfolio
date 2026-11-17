'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { soundEngine } from '@/components/movie/CinematicSoundEngine';

export interface SceneMeta {
  index: number;
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  startProgress: number;
  endProgress: number;
  durationLabel: string;
}

export const MOVIE_SCENES: SceneMeta[] = [
  {
    index: 0,
    id: 'opening',
    title: 'THE BEGINNING',
    subtitle: 'Every Journey Begins with Curiosity',
    theme: 'Curiosity & Mountain Road at Dawn',
    startProgress: 0.0,
    endProgress: 0.11,
    durationLabel: '10s'
  },
  {
    index: 1,
    id: 'university',
    title: 'THE FOUNDATION',
    subtitle: 'Academic Rigor & Shoolini University',
    theme: 'Collegiate Quad & 9.05 CGPA',
    startProgress: 0.11,
    endProgress: 0.22,
    durationLabel: '10s'
  },
  {
    index: 2,
    id: 'technology',
    title: 'LEARNING & TECHNOLOGY',
    subtitle: 'Curiosity Became Learning. Learning Became the Desire to Build.',
    theme: 'Cybernetic Lab & Software Stack',
    startProgress: 0.22,
    endProgress: 0.33,
    durationLabel: '12s'
  },
  {
    index: 3,
    id: 'campusos',
    title: 'CAMPUSOS AI',
    subtitle: 'An AI-Powered Institutional Operating Platform',
    theme: 'Flagship Architecture & 5 Stakeholders',
    startProgress: 0.33,
    endProgress: 0.46,
    durationLabel: '15s'
  },
  {
    index: 4,
    id: 'gyanix',
    title: 'GYANIX',
    subtitle: 'Curriculum-Aware Socratic AI Learning Assistant',
    theme: 'Educational AI & CBSE 11-12 Physics',
    startProgress: 0.46,
    endProgress: 0.58,
    durationLabel: '12s'
  },
  {
    index: 5,
    id: 'projects',
    title: 'SPECIALIZED ENGINEERING',
    subtitle: 'CivicLens, Financial Advisor, Agentic RAG & ZENETH',
    theme: 'Autonomous Systems & Native C++ Engine',
    startProgress: 0.58,
    endProgress: 0.70,
    durationLabel: '14s'
  },
  {
    index: 6,
    id: 'internship',
    title: 'PROFESSIONAL JOURNEY',
    subtitle: 'Corizo Programme (In Collaboration with IIT Bombay)',
    theme: 'IoT, Robotics & Advanced Hardware Labs',
    startProgress: 0.70,
    endProgress: 0.80,
    durationLabel: '12s'
  },
  {
    index: 7,
    id: 'hackathon',
    title: 'THE MILESTONES',
    subtitle: 'Anveshan Hackathon — Advanced to Round 2',
    theme: 'Mountain Summit & Architectural Validation',
    startProgress: 0.80,
    endProgress: 0.90,
    durationLabel: '10s'
  },
  {
    index: 8,
    id: 'destination',
    title: 'THE FINAL DESTINATION',
    subtitle: 'The Journey Has Just Begun',
    theme: 'Sunrise Metropolis & Recruiter Contact',
    startProgress: 0.90,
    endProgress: 1.0,
    durationLabel: '12s'
  }
];

interface MovieContextType {
  progress: number; // 0.0 to 1.0
  targetProgress: number;
  isPlaying: boolean;
  audioEnabled: boolean;
  currentScene: SceneMeta;
  currentSceneIndex: number;
  activeProjectModal: string | null;
  isCertificateModalOpen: boolean;
  isCreditsOpen: boolean;
  togglePlay: () => void;
  toggleAudio: () => void;
  seekProgress: (p: number) => void;
  jumpToScene: (index: number) => void;
  nextScene: () => void;
  prevScene: () => void;
  openProjectModal: (slug: string) => void;
  closeProjectModal: () => void;
  setIsCertificateModalOpen: (open: boolean) => void;
  setIsCreditsOpen: (open: boolean) => void;
  replayJourney: () => void;
}

const MovieContext = createContext<MovieContextType | null>(null);

export function MovieProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<number>(0.0);
  const [targetProgress, setTargetProgress] = useState<number>(0.0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true); // Starts autoplaying as a movie
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [activeProjectModal, setActiveProjectModal] = useState<string | null>(null);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState<boolean>(false);
  const [isCreditsOpen, setIsCreditsOpen] = useState<boolean>(false);

  const wasPlayingBeforeModalRef = useRef<boolean>(false);

  // Compute active scene from progress
  const currentSceneIndex = Math.min(
    MOVIE_SCENES.length - 1,
    Math.max(
      0,
      MOVIE_SCENES.findIndex((s) => progress >= s.startProgress && progress < s.endProgress)
    ) !== -1
      ? MOVIE_SCENES.findIndex((s) => progress >= s.startProgress && progress < s.endProgress)
      : MOVIE_SCENES.length - 1
  );

  const currentScene = MOVIE_SCENES[currentSceneIndex] || MOVIE_SCENES[0];

  // Auto-play RAF loop (~95s total movie run time)
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (isPlaying && !activeProjectModal && !isCertificateModalOpen) {
        setTargetProgress((prev) => {
          // Total film duration: 95 seconds -> progress moves at ~0.0105/sec
          const next = prev + (delta / 95);
          if (next >= 1.0) {
            setIsPlaying(false);
            return 1.0;
          }
          return next;
        });
      }

      // Smooth progress lerp
      setProgress((curr) => {
        const diff = targetProgress - curr;
        if (Math.abs(diff) < 0.0001) return targetProgress;
        return curr + diff * 0.12;
      });

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, targetProgress, activeProjectModal, isCertificateModalOpen]);

  // Synchronize audio drone and scene chords
  useEffect(() => {
    soundEngine.onSceneChange(currentSceneIndex);
  }, [currentSceneIndex]);

  // Scroll wheel scrubber integration
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Don't hijack scroll if inspecting a modal
      if (activeProjectModal || isCertificateModalOpen) return;

      const delta = e.deltaY * 0.00045;
      setTargetProgress((prev) => Math.min(1.0, Math.max(0.0, prev + delta)));
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeProjectModal, isCertificateModalOpen]);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
    soundEngine.playInteractionChime(580);
  }, []);

  const toggleAudio = useCallback(() => {
    setAudioEnabled((prev) => {
      const next = !prev;
      soundEngine.setMuted(!next);
      return next;
    });
  }, []);

  const seekProgress = useCallback((p: number) => {
    const clamped = Math.min(1.0, Math.max(0.0, p));
    setTargetProgress(clamped);
    setProgress(clamped);
  }, []);

  const jumpToScene = useCallback((index: number) => {
    const sc = MOVIE_SCENES[index];
    if (sc) {
      soundEngine.playWhoosh();
      setTargetProgress(sc.startProgress + 0.01);
      setProgress(sc.startProgress + 0.01);
    }
  }, []);

  const nextScene = useCallback(() => {
    const nextIdx = Math.min(MOVIE_SCENES.length - 1, currentSceneIndex + 1);
    jumpToScene(nextIdx);
  }, [currentSceneIndex, jumpToScene]);

  const prevScene = useCallback(() => {
    const prevIdx = Math.max(0, currentSceneIndex - 1);
    jumpToScene(prevIdx);
  }, [currentSceneIndex, jumpToScene]);

  const openProjectModal = useCallback((slug: string) => {
    wasPlayingBeforeModalRef.current = isPlaying;
    setIsPlaying(false);
    setActiveProjectModal(slug);
    soundEngine.playInteractionChime(720);
  }, [isPlaying]);

  const closeProjectModal = useCallback(() => {
    setActiveProjectModal(null);
    if (wasPlayingBeforeModalRef.current) {
      setIsPlaying(true);
    }
  }, []);

  const replayJourney = useCallback(() => {
    seekProgress(0.0);
    setIsPlaying(true);
    soundEngine.playWhoosh();
  }, [seekProgress]);

  return (
    <MovieContext.Provider
      value={{
        progress,
        targetProgress,
        isPlaying,
        audioEnabled,
        currentScene,
        currentSceneIndex,
        activeProjectModal,
        isCertificateModalOpen,
        isCreditsOpen,
        togglePlay,
        toggleAudio,
        seekProgress,
        jumpToScene,
        nextScene,
        prevScene,
        openProjectModal,
        closeProjectModal,
        setIsCertificateModalOpen,
        setIsCreditsOpen,
        replayJourney
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovie() {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovie must be used within a MovieProvider');
  }
  return context;
}
