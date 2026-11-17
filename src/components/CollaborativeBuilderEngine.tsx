'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Compass, 
  Sparkles,
  Zap,
  Play,
  Pause,
  ExternalLink
} from 'lucide-react';
import { useBuilder } from '@/context/BuilderContext';

interface AgentState {
  id: string;
  name: string;
  color: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  angle: number;
  role: 'typing' | 'dragging' | 'resizing' | 'placing' | 'idle';
  tagLabel: string;
}

const AGENT_SPECS: { id: string; name: string; color: string; defaultRole: 'typing' | 'dragging' | 'resizing' | 'placing' }[] = [
  { id: 'ag-1', name: 'gemini-rag', color: '#ef4444', defaultRole: 'typing' },
  { id: 'ag-2', name: 'socratic-eval', color: '#38bdf8', defaultRole: 'typing' },
  { id: 'ag-3', name: 'auth-guardian', color: '#10b981', defaultRole: 'placing' },
  { id: 'ag-4', name: 'vision-triage', color: '#f59e0b', defaultRole: 'resizing' },
  { id: 'ag-5', name: 'cpp-expert', color: '#a855f7', defaultRole: 'placing' },
  { id: 'ag-6', name: 'postgis-cluster', color: '#06b6d4', defaultRole: 'dragging' },
  { id: 'ag-7', name: 'rerank-worker', color: '#ec4899', defaultRole: 'typing' },
  { id: 'ag-8', name: 'schema-validator', color: '#84cc16', defaultRole: 'resizing' },
  { id: 'ag-9', name: 'rate-limiter', color: '#f43f5e', defaultRole: 'placing' },
  { id: 'ag-10', name: 'telemetry-sync', color: '#3b82f6', defaultRole: 'dragging' },
  { id: 'ag-11', name: 'fastapi-core', color: '#14b8a6', defaultRole: 'typing' },
  { id: 'ag-12', name: 'vector-indexer', color: '#eab308', defaultRole: 'resizing' },
  { id: 'ag-13', name: 'circuit-breaker', color: '#f97316', defaultRole: 'placing' },
  { id: 'ag-14', name: 'faithfulness-gate', color: '#6366f1', defaultRole: 'typing' },
  { id: 'ag-15', name: 'pgvector-store', color: '#0284c7', defaultRole: 'dragging' },
  { id: 'ag-16', name: 'supa-migrator', color: '#22c55e', defaultRole: 'placing' },
  { id: 'ag-17', name: 'turbopack-jit', color: '#d946ef', defaultRole: 'typing' },
  { id: 'ag-18', name: 'a11y-auditor', color: '#e11d48', defaultRole: 'resizing' },
  { id: 'ag-19', name: 'model-router', color: '#8b5cf6', defaultRole: 'typing' },
  { id: 'ag-20', name: 'token-bucket', color: '#059669', defaultRole: 'placing' },
  { id: 'ag-21', name: 'state-machine', color: '#f43f5e', defaultRole: 'typing' },
  { id: 'ag-22', name: 'faiss-cluster', color: '#0ea5e9', defaultRole: 'dragging' },
  { id: 'ag-23', name: 'citation-grounder', color: '#10b981', defaultRole: 'typing' },
  { id: 'ag-24', name: 'spatial-triage', color: '#d97706', defaultRole: 'resizing' },
  { id: 'ag-25', name: 'stl-allocator', color: '#9333ea', defaultRole: 'placing' },
  { id: 'ag-26', name: 'anti-hallucination', color: '#0284c7', defaultRole: 'typing' },
  { id: 'ag-27', name: 'csrf-defender', color: '#16a34a', defaultRole: 'placing' },
  { id: 'ag-28', name: 'live-synchronizer', color: '#ec4899', defaultRole: 'dragging' }
];

export default function CollaborativeBuilderEngine() {
  const {
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
    restartBuild
  } = useBuilder();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(1440);
  const [windowHeight, setWindowHeight] = useState(900);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      const onResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      };
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }
  }, []);

  // Multi-agent canvas loop
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Initialize 28 agent states
    const agents: AgentState[] = AGENT_SPECS.map((spec, i) => ({
      id: spec.id,
      name: spec.name,
      color: spec.color,
      x: width / 2 + (Math.random() - 0.5) * 400,
      y: height / 2 + (Math.random() - 0.5) * 300,
      targetX: width / 2,
      targetY: height / 2,
      vx: 0,
      vy: 0,
      angle: 0,
      role: spec.defaultRole,
      tagLabel: `${spec.name} [${spec.defaultRole}]`
    }));

    let animId: number;

    const drawAgent = (c: CanvasRenderingContext2D, ag: AgentState) => {
      // Draw Cursor Arrow
      c.save();
      c.translate(ag.x, ag.y);
      c.rotate(ag.angle);

      c.beginPath();
      c.moveTo(0, 0);
      c.lineTo(13, 5);
      c.lineTo(8, 8);
      c.lineTo(12, 14);
      c.lineTo(9, 15);
      c.lineTo(5, 9);
      c.lineTo(1, 13);
      c.closePath();

      c.shadowColor = ag.color;
      c.shadowBlur = 8;
      c.fillStyle = ag.color;
      c.fill();
      c.strokeStyle = '#ffffff';
      c.lineWidth = 0.8;
      c.stroke();
      c.restore();

      // Agent Tag with Role Label
      c.save();
      c.translate(ag.x + 12, ag.y + 12);
      c.font = '9px monospace';
      const label = ag.tagLabel;
      const tw = c.measureText(label).width;

      c.fillStyle = 'rgba(5, 5, 8, 0.88)';
      c.fillRect(-2, -8, tw + 6, 13);
      c.strokeStyle = ag.color;
      c.lineWidth = 0.8;
      c.strokeRect(-2, -8, tw + 6, 13);

      c.fillStyle = '#ffffff';
      c.fillText(label, 1, 2);
      c.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now() * 0.0025;

      // ==========================================
      // PHASE 0: SCANNING ORBIT (matching sec 0 - 1.5s)
      // ==========================================
      if (buildPhase === 'scanning') {
        const cx = width / 2;
        const cy = height / 2;

        // Center Pulsing Circle with "KK"
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, 38, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(239, 68, 68, 0.12)';
        ctx.fill();
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.font = 'bold 16px monospace';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('KK', cx, cy);
        ctx.restore();

        // 18 Cursors Orbiting in Elliptical Swarm
        agents.slice(0, 18).forEach((ag, i) => {
          const orbitAngle = time * 1.5 + (i / 18) * Math.PI * 2;
          const rx = 100 + Math.sin(time + i) * 15;
          const ry = 60 + Math.cos(time + i) * 10;
          ag.x = cx + Math.cos(orbitAngle) * rx;
          ag.y = cy + Math.sin(orbitAngle) * ry;
          ag.angle = orbitAngle + Math.PI / 2;
          drawAgent(ctx, ag);
        });
      }

      // ==========================================
      // PHASE 1: ASSEMBLING (matching sec 2s - 50s)
      // ==========================================
      else if (buildPhase === 'assembling') {
        // Cursors swarm the visible active section
        const activeCount = agentCount;

        // Anchor targets based on active section
        let targetAnchors: { x: number; y: number; role: 'typing' | 'dragging' | 'resizing' | 'placing' }[] = [];

        if (activeSection === 'hero') {
          targetAnchors = [
            { x: width * 0.22, y: height * 0.28, role: 'typing' }, // Script
            { x: width * 0.22, y: height * 0.35, role: 'typing' }, // Name
            { x: width * 0.25, y: height * 0.42, role: 'resizing' }, // Pill
            { x: width * 0.28, y: height * 0.52, role: 'typing' }, // Bio
            { x: width * 0.2, y: height * 0.65, role: 'placing' }, // Buttons
            { x: width * 0.5, y: height * 0.45, role: 'resizing' }, // Avatar
            { x: width * 0.78, y: height * 0.35, role: 'placing' }, // Feed 1
            { x: width * 0.78, y: height * 0.48, role: 'typing' }, // Feed 2
            { x: width * 0.78, y: height * 0.62, role: 'resizing' }  // Feed 3
          ];
        } else if (activeSection === 'about') {
          targetAnchors = [
            { x: width * 0.35, y: height * 0.32, role: 'typing' }, // Paragraph 1
            { x: width * 0.35, y: height * 0.52, role: 'typing' }, // Paragraph 2
            { x: width * 0.75, y: height * 0.35, role: 'placing' }, // Distinction 1
            { x: width * 0.75, y: height * 0.52, role: 'placing' }, // Distinction 2
            { x: width * 0.75, y: height * 0.7, role: 'resizing' }  // Distinction 3
          ];
        } else if (activeSection === 'flagships') {
          targetAnchors = [
            { x: width * 0.3, y: height * 0.25, role: 'resizing' }, // CampusOS Card
            { x: width * 0.35, y: height * 0.38, role: 'typing' }, // Title
            { x: width * 0.2, y: height * 0.5, role: 'placing' }, // Tab L1
            { x: width * 0.32, y: height * 0.5, role: 'placing' }, // Tab L2
            { x: width * 0.44, y: height * 0.5, role: 'placing' }, // Tab L3
            { x: width * 0.56, y: height * 0.5, role: 'placing' }, // Tab L4
            { x: width * 0.68, y: height * 0.5, role: 'placing' }, // Tab L5
            { x: width * 0.8, y: height * 0.5, role: 'placing' }, // Tab L6
            { x: width * 0.3, y: height * 0.75, role: 'typing' }, // CivicLens
            { x: width * 0.65, y: height * 0.75, role: 'typing' }  // Gyanix
          ];
        } else if (activeSection === 'matrix') {
          targetAnchors = [
            { x: width * 0.25, y: height * 0.25, role: 'placing' }, // Filter
            { x: width * 0.3, y: height * 0.45, role: 'resizing' }, // Card 1
            { x: width * 0.7, y: height * 0.45, role: 'typing' }, // Card 2
            { x: width * 0.3, y: height * 0.75, role: 'typing' }, // Card 3
            { x: width * 0.7, y: height * 0.75, role: 'placing' }  // Card 4
          ];
        } else {
          // Contact section
          targetAnchors = [
            { x: width * 0.5, y: height * 0.35, role: 'typing' }, // Title
            { x: width * 0.5, y: height * 0.5, role: 'typing' }, // Email button
            { x: width * 0.35, y: height * 0.65, role: 'placing' }, // Social 1
            { x: width * 0.5, y: height * 0.65, role: 'placing' }, // Social 2
            { x: width * 0.65, y: height * 0.65, role: 'resizing' }  // Social 3
          ];
        }

        agents.slice(0, activeCount).forEach((ag, i) => {
          const anchor = targetAnchors[i % targetAnchors.length];
          const jitterX = Math.sin(time * 3 + i * 2) * 22;
          const jitterY = Math.cos(time * 3 + i * 2) * 16;

          const targetX = anchor.x + jitterX;
          const targetY = anchor.y + jitterY;

          ag.vx = (targetX - ag.x) * 0.1;
          ag.vy = (targetY - ag.y) * 0.1;
          ag.x += ag.vx;
          ag.y += ag.vy;
          ag.angle = Math.atan2(ag.vy, ag.vx) + Math.PI / 4;
          ag.role = anchor.role;
          ag.tagLabel = `${ag.name} [${ag.role}]`;

          drawAgent(ctx, ag);
        });
      }

      // ==========================================
      // PHASE 2: COMPLETED FLOCKING ARC (matching sec 55.0s)
      // ==========================================
      else {
        // All 28 agents form a celebratory arc in top-right corner
        const cornerX = width - 120;
        const cornerY = 90;

        agents.forEach((ag, i) => {
          // Curved arc formation
          const angle = (i / agents.length) * Math.PI * 0.8 + Math.PI * 0.9;
          const radius = 70 + (i % 3) * 14;
          const targetX = cornerX + Math.cos(angle) * radius + Math.sin(time * 2 + i) * 6;
          const targetY = cornerY + Math.sin(angle) * radius + Math.cos(time * 2 + i) * 6;

          ag.vx = (targetX - ag.x) * 0.08;
          ag.vy = (targetY - ag.y) * 0.08;
          ag.x += ag.vx;
          ag.y += ag.vy;
          ag.angle = Math.atan2(ag.vy, ag.vx) + Math.PI / 4;
          ag.role = 'idle';
          ag.tagLabel = `${ag.name} [verified]`;

          drawAgent(ctx, ag);
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [buildPhase, activeSection, agentCount]);

  return (
    <>
      {/* 1. Transparent Canvas Overlay for Multi-Agent Cursors */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9995]"
        aria-hidden="true"
      />

      {/* 2. Scanning Mode Fullscreen Backdrop (0 - 1.5s) */}
      {buildPhase === 'scanning' && (
        <div className="fixed inset-0 bg-[#050508]/90 backdrop-blur-md z-[9990] pointer-events-none flex items-center justify-center">
          <div className="text-center font-mono space-y-2 select-none">
            <div className="text-xs uppercase tracking-widest text-slate-500">
              Initializing Collaborative Swarm
            </div>
          </div>
        </div>
      )}

      {/* 3. Figma / IDE Canvas Rulers (Top & Left) matching the video */}
      <div className="fixed top-0 left-0 right-0 h-4 bg-[#08080d]/80 border-b border-white/[0.05] z-[9991] pointer-events-none select-none hidden md:flex items-center text-[8px] font-mono text-slate-600 pl-16 overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="flex-1 flex items-center justify-between border-l border-white/[0.08] pl-1">
            <span>{i * 100}</span>
            <span className="w-px h-1.5 bg-white/[0.05]" />
          </div>
        ))}
      </div>

      <div className="fixed top-0 bottom-0 left-0 w-6 bg-[#08080d]/80 border-r border-white/[0.05] z-[9991] pointer-events-none select-none hidden md:flex flex-col pt-16 text-[8px] font-mono text-slate-600 overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-16 border-t border-white/[0.08] pt-0.5 pl-0.5">
            <span>{i * 100}</span>
          </div>
        ))}
      </div>

      {/* 4. Left Vertical Red Alignment Line from Video */}
      <div 
        className="fixed top-0 bottom-0 left-12 w-px bg-red-600/30 z-[9992] pointer-events-none hidden lg:block shadow-[0_0_8px_rgba(239,68,68,0.2)]" 
        aria-hidden="true"
      />

      {/* 5. Floating Bottom HUD Dock matching the reference video exactly */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9998] w-auto max-w-[95vw]">
        <div className="flex items-center space-x-2.5 sm:space-x-4 px-3.5 sm:px-5 py-2.5 rounded-full bg-[#08080d]/95 border border-white/10 backdrop-blur-2xl shadow-[0_12px_45px_rgba(0,0,0,0.9)] text-xs font-mono text-slate-300">
          
          {/* Progress / Rebuilt status */}
          <div className="flex items-center space-x-2 border-r border-white/10 pr-3">
            <span className="text-red-500 font-bold">//01.</span>
            <div className="w-16 sm:w-20 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 via-sky-400 to-emerald-400 transition-all duration-150"
                style={{ width: `${(layersBuilt / totalLayers) * 100}%` }}
              />
            </div>
            <span className="text-[10px] sm:text-xs text-slate-300 font-medium whitespace-nowrap">
              {buildPhase === 'completed'
                ? `Rebuilt by ${agentCount} agents in ${buildTime.toFixed(1)}s`
                : `${layersBuilt} / ${totalLayers} layers`}
            </span>
          </div>

          {/* Dynamic Agent Count */}
          <div className="flex items-center space-x-1.5 border-r border-white/10 pr-3 hidden sm:flex">
            <div className="flex -space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block ring-1 ring-black" />
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block ring-1 ring-black" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block ring-1 ring-black" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block ring-1 ring-black" />
            </div>
            <span className="font-bold text-white whitespace-nowrap text-xs">
              {agentCount} Agents
            </span>
          </div>

          {/* Tour Mode Toggle */}
          <button
            onClick={() => setIsTouring(!isTouring)}
            className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all flex items-center space-x-1 border ${
              isTouring
                ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-[0_0_10px_rgba(56,189,248,0.25)]'
                : 'bg-white/5 text-slate-400 hover:text-white border-white/10'
            }`}
            title="Auto-scroll tour through the build"
          >
            <Compass className={`w-3 h-3 ${isTouring ? 'animate-spin' : ''}`} />
            <span>{isTouring ? 'Touring' : 'Manual'}</span>
          </button>

          {/* Speed Toggle (1x / 2x) */}
          <button
            onClick={() => setSpeed(speed === 1 ? 2 : 1)}
            className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
            title="Toggle Build Speed"
          >
            {speed}x
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            onClick={() => setIsAudioEnabled(!isAudioEnabled)}
            className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title={isAudioEnabled ? 'Mute Mechanical Click Audio' : 'Enable Mechanical Audio'}
            aria-label="Toggle Audio"
          >
            {isAudioEnabled ? <Volume2 className="w-3.5 h-3.5 text-red-400" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Replay Build Button */}
          {buildPhase === 'completed' ? (
            <button
              onClick={restartBuild}
              className="px-3 py-1 rounded-full bg-red-600 hover:bg-red-500 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all flex items-center space-x-1 shadow-[0_0_14px_rgba(239,68,68,0.4)]"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Replay</span>
            </button>
          ) : (
            <span className="text-[10px] text-sky-400 font-mono animate-pulse hidden md:inline">
              [live build active]
            </span>
          )}

        </div>
      </div>
    </>
  );
}
