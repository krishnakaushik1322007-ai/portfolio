'use client';

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

export interface ChapterData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  theme: string;
  targetId: string;
  environmentDescription: string;
  iconName: string;
  coords: { x: number; y: number }; // Visual map coordinate (0-100%)
  highlights: string[];
}

export const CHAPTERS: ChapterData[] = [
  {
    id: 'beginning',
    number: '01',
    title: 'The Beginning',
    subtitle: 'Every Great Journey Begins With Curiosity',
    theme: 'Curiosity & Exploration',
    targetId: 'beginning',
    environmentDescription: 'A cinematic mountain sunrise with a winding road leading into the horizon.',
    iconName: 'Compass',
    coords: { x: 15, y: 15 },
    highlights: ['Curiosity Manifesto', 'Verified Portrait', 'Engineering Philosophy']
  },
  {
    id: 'foundation',
    number: '02',
    title: 'The Foundation',
    subtitle: 'Every Engineer Needs a Strong Foundation',
    theme: 'Education & Academic Rigor',
    targetId: 'foundation',
    environmentDescription: 'Collegiate academic quad surrounded by architecture and morning light.',
    iconName: 'GraduationCap',
    coords: { x: 30, y: 35 },
    highlights: ['Shoolini University', '9.05 / 10.0 CGPA', 'Core Computer Science & AI Coursework']
  },
  {
    id: 'learning',
    number: '03',
    title: 'The Learning Phase',
    subtitle: 'The Discovery of Tools and Technologies',
    theme: 'Technology Discovery',
    targetId: 'learning',
    environmentDescription: 'Futuristic technology world with interactive holographic nodes and code streams.',
    iconName: 'Cpu',
    coords: { x: 50, y: 25 },
    highlights: ['AI & LLM Systems', 'Core Programming Languages', 'FastAPI & Next.js Stacks']
  },
  {
    id: 'building',
    number: '04',
    title: 'The Building Phase',
    subtitle: 'Ideas Become Meaningful When We Build Them',
    theme: 'Turning Ideas Into Reality (Flagship Lab)',
    targetId: 'building',
    environmentDescription: 'Cinematic engineering laboratory with large displays, 510 QA suites, and project portals.',
    iconName: 'Layers',
    coords: { x: 65, y: 55 },
    highlights: ['CampusOS AI (Flagship)', 'Gyanix Socratic Engine', 'CivicLens & PostGIS ST_DWithin', 'ZENETH C++ <1ms']
  },
  {
    id: 'experience',
    number: '05',
    title: 'The Professional Journey',
    subtitle: 'Expanding Technical Horizons',
    theme: 'Industry Apprenticeship',
    targetId: 'experience',
    environmentDescription: 'Modern research workspace with telemetry streams and hardware robotics.',
    iconName: 'Briefcase',
    coords: { x: 50, y: 75 },
    highlights: ['Corizo / IIT Bombay Collaboration', 'Module 1: IoT & Robotics (Ongoing)', 'Upcoming: Data Science & Nano']
  },
  {
    id: 'milestones',
    number: '06',
    title: 'The Milestones',
    subtitle: 'Progress, Validation & Recognition',
    theme: 'Competitive Milestones',
    targetId: 'milestones',
    environmentDescription: 'Cinematic mountain viewpoint bathed in dawn light with milestone beacons.',
    iconName: 'Award',
    coords: { x: 75, y: 85 },
    highlights: ['Anveshan Hackathon Round 2', 'Verified Participation Certificate', 'Architecture Defense']
  },
  {
    id: 'destination',
    number: '07',
    title: 'What Comes Next?',
    subtitle: 'This Isn’t the Destination. It’s Just the Beginning.',
    theme: 'Ambition & Continuous Learning',
    targetId: 'destination',
    environmentDescription: 'Futuristic sunrise metropolis representing continuous learning and global impact.',
    iconName: 'Sparkles',
    coords: { x: 88, y: 92 },
    highlights: ['Direct Contact Channels', 'Verified Resume PDF', 'Global Engineering Opportunities']
  }
];

interface JourneyContextType {
  activeChapter: number;
  chapters: ChapterData[];
  isGuided: boolean;
  audioEnabled: boolean;
  isWaypointMapOpen: boolean;
  scrollProgress: number;
  setIsWaypointMapOpen: (open: boolean) => void;
  toggleGuidedMode: () => void;
  toggleAudio: () => void;
  goToChapter: (index: number) => void;
  nextChapter: () => void;
  prevChapter: () => void;
  playCinematicChime: (freq?: number) => void;
}

const DEFAULT_JOURNEY_CONTEXT: JourneyContextType = {
  activeChapter: 0,
  chapters: CHAPTERS,
  isGuided: false,
  audioEnabled: false,
  isWaypointMapOpen: false,
  scrollProgress: 0,
  setIsWaypointMapOpen: () => {},
  toggleGuidedMode: () => {},
  toggleAudio: () => {},
  goToChapter: () => {},
  nextChapter: () => {},
  prevChapter: () => {},
  playCinematicChime: () => {}
};

const JourneyContext = createContext<JourneyContextType>(DEFAULT_JOURNEY_CONTEXT);

export function JourneyProvider({ children }: { children: React.ReactNode }) {
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [isGuided, setIsGuided] = useState<boolean>(false);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [isWaypointMapOpen, setIsWaypointMapOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Atmospheric Cinematic Chime (Warm, cinematic chord)
  const playCinematicChime = useCallback((freq = 440) => {
    if (!audioEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const osc3 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'sine';
      osc3.type = 'triangle';

      osc1.frequency.setValueAtTime(freq, ctx.currentTime);
      osc2.frequency.setValueAtTime(freq * 1.5, ctx.currentTime); // Perfect fifth
      osc3.frequency.setValueAtTime(freq * 2.0, ctx.currentTime); // Octave

      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      osc1.connect(gain);
      osc2.connect(gain);
      osc3.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc3.start();

      osc1.stop(ctx.currentTime + 1.2);
      osc2.stop(ctx.currentTime + 1.2);
      osc3.stop(ctx.currentTime + 1.2);
    } catch {
      // Audio not permitted
    }
  }, [audioEnabled]);

  const goToChapter = useCallback((index: number) => {
    const targetIdx = Math.max(0, Math.min(CHAPTERS.length - 1, index));
    setActiveChapter(targetIdx);
    playCinematicChime(360 + targetIdx * 45);

    const chapter = CHAPTERS[targetIdx];
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== '/') {
        window.location.href = `/#${chapter.targetId}`;
        return;
      }
      const el = document.getElementById(chapter.targetId);
      if (el) {
        const yOffset = -72;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [playCinematicChime]);

  const nextChapter = useCallback(() => {
    goToChapter((activeChapter + 1) % CHAPTERS.length);
  }, [activeChapter, goToChapter]);

  const prevChapter = useCallback(() => {
    goToChapter((activeChapter - 1 + CHAPTERS.length) % CHAPTERS.length);
  }, [activeChapter, goToChapter]);

  const toggleGuidedMode = useCallback(() => {
    setIsGuided(prev => {
      const next = !prev;
      if (next) playCinematicChime(540);
      return next;
    });
  }, [playCinematicChime]);

  const toggleAudio = useCallback(() => {
    setAudioEnabled(prev => {
      const next = !prev;
      if (next) playCinematicChime(580);
      return next;
    });
  }, [playCinematicChime]);

  // Track overall scroll progress & synchronize active chapter via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const current = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, current)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            const idx = CHAPTERS.findIndex((c) => c.targetId === entry.target.id);
            if (idx !== -1) {
              setActiveChapter(idx);
            }
          }
        });
      },
      { threshold: [0.25, 0.5], rootMargin: '-70px 0px -40% 0px' }
    );

    CHAPTERS.forEach((c) => {
      const el = document.getElementById(c.targetId);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <JourneyContext.Provider
      value={{
        activeChapter,
        chapters: CHAPTERS,
        isGuided,
        audioEnabled,
        isWaypointMapOpen,
        scrollProgress,
        setIsWaypointMapOpen,
        toggleGuidedMode,
        toggleAudio,
        goToChapter,
        nextChapter,
        prevChapter,
        playCinematicChime
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
}

export function useJourney() {
  const context = useContext(JourneyContext);
  return context || DEFAULT_JOURNEY_CONTEXT;
}
