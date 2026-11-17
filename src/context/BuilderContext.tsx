'use client';

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

export type BuildPhase = 'scanning' | 'assembling' | 'completed';
export type SectionName = 'hero' | 'about' | 'flagships' | 'matrix' | 'contact' | 'completed';

interface BuilderContextType {
  buildPhase: BuildPhase;
  layersBuilt: number;
  totalLayers: number;
  activeSection: SectionName;
  isTouring: boolean;
  setIsTouring: (touring: boolean) => void;
  speed: 1 | 2;
  setSpeed: (s: 1 | 2) => void;
  isAudioEnabled: boolean;
  setIsAudioEnabled: (audio: boolean) => void;
  buildTime: number;
  agentCount: number;
  restartBuild: () => void;
  playClickSound: (freq?: number) => void;
  getSectionProgress: (section: SectionName) => number;
  isBuilt: (threshold: number) => boolean;
}

const BuilderContext = createContext<BuilderContextType | null>(null);

export function BuilderProvider({ children }: { children: React.ReactNode }) {
  const [buildPhase, setBuildPhase] = useState<BuildPhase>('scanning');
  const [layersBuilt, setLayersBuilt] = useState(0);
  const totalLayers = 252; // Exact count from the reference video
  const [activeSection, setActiveSection] = useState<SectionName>('hero');
  const [isTouring, setIsTouring] = useState(true);
  const [speed, setSpeed] = useState<1 | 2>(1);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [buildTime, setBuildTime] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Dynamic agent count matching the video progression: 18 -> 20 -> 23 -> 28
  const agentCount = layersBuilt < 80 ? 18 : layersBuilt < 150 ? 20 : layersBuilt < 210 ? 23 : 28;

  // Web Audio synthesizer for crisp mechanical tactile click / keypress sounds
  const playClickSound = useCallback((freq = 750) => {
    if (!isAudioEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 80, ctx.currentTime);
      gain.gain.setValueAtTime(0.035, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Audio context silenced or unsupported
    }
  }, [isAudioEnabled]);

  // Restart build from scratch
  const restartBuild = useCallback(() => {
    setBuildPhase('scanning');
    setLayersBuilt(0);
    setBuildTime(0);
    setActiveSection('hero');
    setIsTouring(true);

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setTimeout(() => {
      setBuildPhase('assembling');
    }, 1500);
  }, []);

  // Initial scan sequence (1.5s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setBuildPhase('assembling');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Main build loop
  useEffect(() => {
    if (buildPhase !== 'assembling') return;

    const intervalTime = speed === 2 ? 35 : 70;
    const interval = setInterval(() => {
      setLayersBuilt((prev) => {
        if (prev >= totalLayers) {
          setBuildPhase('completed');
          setActiveSection('completed');
          clearInterval(interval);
          return totalLayers;
        }

        const next = Math.min(totalLayers, prev + Math.floor(Math.random() * 3 + 2));

        // Determine current active section based on layer milestone
        if (next < 65) {
          setActiveSection('hero');
        } else if (next < 115) {
          setActiveSection('about');
        } else if (next < 175) {
          setActiveSection('flagships');
        } else if (next < 225) {
          setActiveSection('matrix');
        } else {
          setActiveSection('contact');
        }

        if (next % 6 === 0) {
          playClickSound(550 + next * 2);
        }

        return next;
      });

      setBuildTime((t) => Number((t + (speed === 2 ? 0.07 : 0.14)).toFixed(1)));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [buildPhase, speed, playClickSound, totalLayers]);

  // Tour Auto-scroll Controller: follows construction down the page!
  useEffect(() => {
    if (!isTouring || buildPhase !== 'assembling' || typeof window === 'undefined') return;

    let targetElementId = '';
    if (activeSection === 'hero') {
      targetElementId = '';
    } else if (activeSection === 'about') {
      targetElementId = 'about';
    } else if (activeSection === 'flagships') {
      targetElementId = 'flagships';
    } else if (activeSection === 'matrix') {
      targetElementId = 'projects';
    } else if (activeSection === 'contact') {
      targetElementId = 'contact';
    }

    if (targetElementId) {
      const el = document.getElementById(targetElementId);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else if (activeSection === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection, isTouring, buildPhase]);

  // Section completion progress helper (0.0 to 1.0)
  const getSectionProgress = useCallback(
    (section: SectionName): number => {
      if (buildPhase === 'completed') return 1;
      if (buildPhase === 'scanning') return 0;

      switch (section) {
        case 'hero':
          return Math.min(1, Math.max(0, layersBuilt / 65));
        case 'about':
          return Math.min(1, Math.max(0, (layersBuilt - 65) / 50));
        case 'flagships':
          return Math.min(1, Math.max(0, (layersBuilt - 115) / 60));
        case 'matrix':
          return Math.min(1, Math.max(0, (layersBuilt - 175) / 50));
        case 'contact':
          return Math.min(1, Math.max(0, (layersBuilt - 225) / 27));
        default:
          return 1;
      }
    },
    [buildPhase, layersBuilt]
  );

  const isBuilt = useCallback(
    (threshold: number): boolean => {
      return buildPhase === 'completed' || layersBuilt >= threshold;
    },
    [buildPhase, layersBuilt]
  );

  return (
    <BuilderContext.Provider
      value={{
        buildPhase,
        layersBuilt,
        totalLayers,
        activeSection,
        isTouring,
        setIsTouring,
        speed,
        setSpeed,
        isAudioEnabled,
        setIsAudioEnabled,
        buildTime,
        agentCount,
        restartBuild,
        playClickSound,
        getSectionProgress,
        isBuilt
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
}

export function useBuilder() {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error('useBuilder must be used within a BuilderProvider');
  }
  return context;
}
