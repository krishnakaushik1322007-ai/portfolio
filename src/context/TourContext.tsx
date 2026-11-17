'use client';

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

export interface StationData {
  id: string;
  number: string;
  name: string;
  roomType: string;
  tagline: string;
  targetId: string;
  docentNote: string;
  coords: { x: number; y: number }; // Percentage on 2D floor plan
  features: string[];
}

export const STATIONS: StationData[] = [
  {
    id: 'foyer',
    number: '01',
    name: 'The Grand Foyer',
    roomType: 'RECEPTION & EXECUTIVE PORTRAIT',
    tagline: 'Introduction & Sovereign Vision',
    targetId: 'foyer',
    docentNote: 'Welcome to the estate. You are meeting Krishna Kaushik — AI Engineer, Systems Architect, and B.Tech CSE (AI) scholar with a 9.05/10 CGPA at Shoolini University.',
    coords: { x: 50, y: 15 },
    features: ['High-Res Studio Portrait', 'Executive Manifesto', 'Core Credentials']
  },
  {
    id: 'campusos',
    number: '02',
    name: 'Autonomous Systems Lab',
    roomType: 'FLAGSHIP R&D FACILITY',
    tagline: 'CampusOS AI & 7-Layer Architecture',
    targetId: 'campusos',
    docentNote: 'Entering the flagship laboratory. CampusOS AI modernizes institutional school administration across 5 user tiers, verified by 510 automated QA suites and pgvector RAG.',
    coords: { x: 25, y: 35 },
    features: ['510 QA Test Suites', '7-Layer Constitutional Stack', 'pgvector 768-dim RAG']
  },
  {
    id: 'civiclens',
    number: '03',
    name: 'Vision & Geospatial Observatory',
    roomType: 'MUNICIPAL INTELLIGENCE WING',
    tagline: 'CivicLens & PostGIS ST_DWithin',
    targetId: 'civiclens',
    docentNote: 'Passing into the observatory. CivicLens deduplicates citizen grievances within 50 meters, eliminating 40.4% noise using PostGIS spatial clustering and Gemini 2.5 Flash Vision.',
    coords: { x: 75, y: 35 },
    features: ['PostGIS Spatial Deduplication', 'Gemini Vision <500ms', '100/100 Test Pass']
  },
  {
    id: 'gyanix',
    number: '04',
    name: 'Socratic Learning Pavilion',
    roomType: 'PEDAGOGICAL COGNITIVE LAB',
    tagline: 'Gyanix Curriculum-Aware Dialogue',
    targetId: 'gyanix',
    docentNote: 'Entering the educational pavilion. Gyanix models 41 verified state transitions for CBSE Class 12 Physics, guiding students through conceptual discovery without hallucination.',
    coords: { x: 25, y: 65 },
    features: ['41 State Transitions', 'NCERT Curriculum Alignment', '0 Schema Errors']
  },
  {
    id: 'foundry',
    number: '05',
    name: 'Silicon Foundry & Matrix',
    roomType: 'LOW-LATENCY EMBEDDED VAULT',
    tagline: 'ZENETH C++ & Systems Arsenal',
    targetId: 'foundry',
    docentNote: 'Descending into the high-performance foundry. ZENETH runs offline crop disease tokenization in native C++ in under 1 millisecond across 9 crops with zero cloud overhead.',
    coords: { x: 75, y: 65 },
    features: ['Native C++ STL Search <1ms', '100% Offline (0 Cloud B)', 'The Systems Matrix']
  },
  {
    id: 'archives',
    number: '06',
    name: 'Academic & Research Archives',
    roomType: 'HONORS & INSTITUTIONAL WING',
    tagline: 'Shoolini 9.05 CGPA & Corizo/IIT Bombay',
    targetId: 'archives',
    docentNote: 'Step into the library of record. Verified credentials: 9.05/10 CGPA at Shoolini University, 9-month Corizo internship in academic collaboration with IIT Bombay, and Anveshan Hackathon Round 2.',
    coords: { x: 50, y: 80 },
    features: ['9.05 / 10 CGPA Transcript', 'IIT Bombay Collaboration (Corizo)', 'Anveshan Round 2']
  },
  {
    id: 'lounge',
    number: '07',
    name: 'Executive Boardroom & Dispatch',
    roomType: 'COMMUNICATION & ADVISORY LOUNGE',
    tagline: 'Direct Connect & Transmissions',
    targetId: 'lounge',
    docentNote: 'You have arrived at the executive lounge. Direct channels to collaborate with Krishna Kaushik on autonomous AI engineering, enterprise RAG, and high-performance software.',
    coords: { x: 50, y: 95 },
    features: ['One-Click Email Copy', 'Direct Form Dispatch', 'Global Opportunities']
  }
];

interface TourContextType {
  currentStation: number;
  stations: StationData[];
  isAutoTouring: boolean;
  tourTimer: number; // 0 to 100% of current station hold
  audioEnabled: boolean;
  isFloorPlanOpen: boolean;
  setIsFloorPlanOpen: (open: boolean) => void;
  toggleAutoTour: () => void;
  goToStation: (index: number) => void;
  nextStation: () => void;
  prevStation: () => void;
  toggleAudio: () => void;
  playTourChime: (freq?: number) => void;
}

const TourContext = createContext<TourContextType | null>(null);

export function TourProvider({ children }: { children: React.ReactNode }) {
  const [currentStation, setCurrentStation] = useState<number>(0);
  const [isAutoTouring, setIsAutoTouring] = useState<boolean>(false);
  const [tourTimer, setTourTimer] = useState<number>(0);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState<boolean>(false);

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Luxury spatial audio chime using Web Audio API
  const playTourChime = useCallback((freq = 520) => {
    if (!audioEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      // Dual harmonic chime (warm champagne chime)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, ctx.currentTime);
      osc2.frequency.setValueAtTime(freq * 1.5, ctx.currentTime);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.6);
      osc2.stop(ctx.currentTime + 0.6);
    } catch {
      // Audio unsupported or blocked
    }
  }, [audioEnabled]);

  // Navigate to a specific station
  const goToStation = useCallback((index: number) => {
    const targetIdx = Math.max(0, Math.min(STATIONS.length - 1, index));
    setCurrentStation(targetIdx);
    setTourTimer(0);
    playTourChime(440 + targetIdx * 60);

    const station = STATIONS[targetIdx];
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== '/') {
        window.location.href = `/#${station.targetId}`;
        return;
      }
      const el = document.getElementById(station.targetId);
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [playTourChime]);

  const nextStation = useCallback(() => {
    goToStation((currentStation + 1) % STATIONS.length);
  }, [currentStation, goToStation]);

  const prevStation = useCallback(() => {
    goToStation((currentStation - 1 + STATIONS.length) % STATIONS.length);
  }, [currentStation, goToStation]);

  const toggleAutoTour = useCallback(() => {
    setIsAutoTouring((prev) => {
      const next = !prev;
      if (next) {
        setTourTimer(0);
        playTourChime(660);
      }
      return next;
    });
  }, [playTourChime]);

  const toggleAudio = useCallback(() => {
    setAudioEnabled((prev) => {
      const next = !prev;
      if (next) playTourChime(580);
      return next;
    });
  }, [playTourChime]);

  // Auto-tour timer loop (8 seconds per station)
  useEffect(() => {
    if (!isAutoTouring) return;

    const interval = setInterval(() => {
      setTourTimer((prev) => {
        if (prev >= 100) {
          // Advance to next station
          setCurrentStation((curr) => {
            const nextIdx = (curr + 1) % STATIONS.length;
            const station = STATIONS[nextIdx];
            if (typeof window !== 'undefined') {
              const el = document.getElementById(station.targetId);
              if (el) {
                const yOffset = -70;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }
            playTourChime(440 + nextIdx * 60);
            return nextIdx;
          });
          return 0;
        }
        return prev + 1.25; // Reaches 100% in 8 seconds (80 * 100ms)
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isAutoTouring, playTourChime]);

  // IntersectionObserver to auto-update station based on user scroll
  useEffect(() => {
    if (typeof window === 'undefined' || isAutoTouring) return;

    const observers: IntersectionObserver[] = [];

    STATIONS.forEach((st, idx) => {
      const el = document.getElementById(st.targetId);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentStation(idx);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [isAutoTouring]);

  return (
    <TourContext.Provider
      value={{
        currentStation,
        stations: STATIONS,
        isAutoTouring,
        tourTimer,
        audioEnabled,
        isFloorPlanOpen,
        setIsFloorPlanOpen,
        toggleAutoTour,
        goToStation,
        nextStation,
        prevStation,
        toggleAudio,
        playTourChime
      }}
    >
      {children}
    </TourContext.Provider>
  );
}

const DEFAULT_TOUR_CONTEXT: TourContextType = {
  currentStation: 0,
  stations: STATIONS,
  isAutoTouring: false,
  tourTimer: 0,
  audioEnabled: false,
  isFloorPlanOpen: false,
  setIsFloorPlanOpen: () => {},
  toggleAutoTour: () => {},
  goToStation: () => {},
  nextStation: () => {},
  prevStation: () => {},
  toggleAudio: () => {},
  playTourChime: () => {}
};

export function useTour() {
  const context = useContext(TourContext);
  return context || DEFAULT_TOUR_CONTEXT;
}
