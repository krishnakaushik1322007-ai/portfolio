'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface SwarmAgent {
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
  speed: number;
  actionTimer: number;
  state: 'wandering' | 'inspecting' | 'clicking';
  clickPulse: number;
}

const AGENT_COLORS = [
  '#ef4444', // Crimson / Coral
  '#38bdf8', // Cyan
  '#10b981', // Emerald
  '#f59e0b', // Amber / Gold
  '#a855f7', // Violet
  '#ec4899', // Pink
  '#06b6d4', // Teal
  '#6366f1', // Indigo
  '#f43f5e', // Rose
  '#84cc16'  // Lime
];

const AGENT_NAMES = [
  'gemini-rag',
  'vision-triage',
  'postgis-cluster',
  'socratic-eval',
  'auth-guardian',
  'schema-validator',
  'cpp-expert',
  'faiss-indexer',
  'rerank-worker',
  'rate-limiter',
  'audit-ledger',
  'telemetry-sync'
];

interface AgentSwarmCursorsProps {
  speedMultiplier?: number;
  active?: boolean;
}

export default function AgentSwarmCursors({
  speedMultiplier = 1,
  active = true
}: AgentSwarmCursorsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only on client and non-reduced-motion
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    setMounted(true);
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

    // Initialize 14 swarm agents
    const agents: SwarmAgent[] = Array.from({ length: 14 }).map((_, i) => ({
      id: `agent-${i + 1}`,
      name: AGENT_NAMES[i % AGENT_NAMES.length],
      color: AGENT_COLORS[i % AGENT_COLORS.length],
      x: Math.random() * width,
      y: Math.random() * height,
      targetX: Math.random() * width,
      targetY: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      angle: 0,
      speed: Math.random() * 0.8 + 0.6,
      actionTimer: Math.random() * 120 + 60,
      state: 'wandering',
      clickPulse: 0
    }));

    let lastScrollY = window.scrollY;
    let scrollVelY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      scrollVelY = delta * 0.35;
      lastScrollY = currentScrollY;

      // React to scroll velocity by scattering swarm agents along the flow
      agents.forEach((ag) => {
        ag.vy -= scrollVelY * 0.25;
        ag.targetY -= scrollVelY * 0.6;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationId: number;

    const drawCursorArrow = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      angle: number,
      color: string,
      name: string,
      clickPulse: number
    ) => {
      context.save();
      context.translate(x, y);

      // Draw click ring ripple if pulsing
      if (clickPulse > 0) {
        context.beginPath();
        context.arc(0, 0, (1 - clickPulse) * 22, 0, Math.PI * 2);
        context.strokeStyle = color;
        context.lineWidth = 1.5;
        context.globalAlpha = clickPulse;
        context.stroke();
      }

      // Rotate arrow
      context.rotate(angle);

      // Draw Sharp Cursor Arrow Shape
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(14, 5);
      context.lineTo(8, 8);
      context.lineTo(13, 15);
      context.lineTo(10, 16);
      context.lineTo(5, 9);
      context.lineTo(1, 14);
      context.closePath();

      // Shadow glow
      context.shadowColor = color;
      context.shadowBlur = 10;
      context.fillStyle = color;
      context.globalAlpha = 0.95;
      context.fill();

      // Sharp white interior accent
      context.strokeStyle = '#ffffff';
      context.lineWidth = 0.8;
      context.stroke();

      context.restore();

      // Draw subtle agent name label tag
      context.save();
      context.translate(x + 14, y + 14);
      context.font = '9px monospace';
      context.fillStyle = 'rgba(5, 5, 8, 0.75)';
      const textWidth = context.measureText(name).width;
      context.fillRect(-2, -8, textWidth + 6, 12);
      context.strokeStyle = color;
      context.lineWidth = 0.7;
      context.strokeRect(-2, -8, textWidth + 6, 12);

      context.fillStyle = '#ffffff';
      context.fillText(name, 1, 1);
      context.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Damped scroll velocity
      scrollVelY *= 0.9;

      if (active) {
        agents.forEach((ag) => {
          // Timer state transitions
          ag.actionTimer -= 1;
          if (ag.actionTimer <= 0) {
            // Pick a new interesting target on the page
            ag.targetX = Math.random() * (width - 100) + 50;
            ag.targetY = Math.random() * (height - 100) + 50;
            ag.actionTimer = Math.random() * 180 + 90;
            ag.state = Math.random() > 0.4 ? 'wandering' : 'clicking';
            if (ag.state === 'clicking') {
              ag.clickPulse = 1.0;
            }
          }

          if (ag.clickPulse > 0) {
            ag.clickPulse -= 0.04;
          }

          // Seek target smoothly
          const dx = ag.targetX - ag.x;
          const dy = ag.targetY - ag.y;
          const dist = Math.hypot(dx, dy);

          const maxSpd = ag.speed * speedMultiplier * (dist > 300 ? 2.5 : 1.2);
          const force = 0.035 * speedMultiplier;

          if (dist > 5) {
            ag.vx += (dx / dist) * force;
            ag.vy += (dy / dist) * force;
          }

          // Friction damping
          ag.vx *= 0.94;
          ag.vy *= 0.94;

          ag.x += ag.vx;
          ag.y += ag.vy;

          // Screen wrap bounds
          if (ag.x < -30) ag.x = width + 20;
          if (ag.x > width + 30) ag.x = -20;
          if (ag.y < -30) ag.y = height + 20;
          if (ag.y > height + 30) ag.y = -20;

          // Compute angle towards movement
          ag.angle = Math.atan2(ag.vy, ag.vx) + Math.PI / 4;

          // Render agent cursor
          drawCursorArrow(
            ctx,
            ag.x,
            ag.y,
            ag.angle,
            ag.color,
            ag.name,
            Math.max(ag.clickPulse, 0)
          );
        });
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [active, speedMultiplier]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9995] opacity-90"
      aria-hidden="true"
    />
  );
}
