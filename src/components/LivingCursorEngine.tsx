'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  decay: number;
}

interface SparkTendril {
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  progress: number;
  color: string;
  alpha: number;
}

export default function LivingCursorEngine() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only non-touch and non-reduced-motion
    if (typeof window === 'undefined') return;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

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

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let ringVx = 0;
    let ringVy = 0;

    let lastScrollY = window.scrollY;
    let scrollDelta = 0;
    let scrollVelocity = 0;

    const particles: Particle[] = [];
    const maxParticles = 60;
    const tendrils: SparkTendril[] = [];

    // Colors matching the video: Crimson/Red, Electric Cyan, Gold, Violet
    const particleColors = ['#ef4444', '#ff3344', '#38bdf8', '#fbbf24', '#f43f5e', '#a855f7'];

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      // Set global CSS variables on document root for instant card spotlighting
      document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);

      // Check if hovering clickable
      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = Boolean(
          target.closest('a, button, [role="button"], input, textarea, select, .interactive-card, .glass-panel-hover')
        );
        setIsPointer(clickable);

        // If hovering an interactive card or button, spawn subtle electric tendril to its center
        if (clickable && Math.random() > 0.7 && tendrils.length < 4) {
          const rect = target.getBoundingClientRect();
          tendrils.push({
            startX: mouseX,
            startY: mouseY,
            targetX: rect.left + rect.width / 2,
            targetY: rect.top + rect.height / 2,
            progress: 0,
            color: '#ef4444',
            alpha: 0.8
          });
        }
      }

      // Spawn movement wake particles
      if (particles.length < maxParticles && Math.random() > 0.3) {
        particles.push({
          x: mouseX + (Math.random() - 0.5) * 8,
          y: mouseY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.8,
          vy: (Math.random() - 0.5) * 1.8,
          size: Math.random() * 3 + 1.5,
          alpha: 0.85,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          decay: Math.random() * 0.03 + 0.02
        });
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      // Burst click particles
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x: mouseX,
          y: mouseY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 3.5 + 2,
          alpha: 1,
          color: '#ef4444',
          decay: 0.04
        });
      }
    };

    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDelta = currentScrollY - lastScrollY;
      scrollVelocity = scrollDelta * 0.4;
      lastScrollY = currentScrollY;

      // Update CSS scroll velocity variable
      document.documentElement.style.setProperty('--scroll-velocity', `${scrollVelocity}px`);

      // WHEN SCROLLING: The cursor breathes life into the page!
      // Emit a glowing stream of energy cascading across whatever the user is scrolling past!
      if (Math.abs(scrollDelta) > 1 && particles.length < maxParticles) {
        const count = Math.min(Math.floor(Math.abs(scrollDelta) / 4) + 2, 6);
        for (let k = 0; k < count; k++) {
          particles.push({
            x: mouseX + (Math.random() - 0.5) * 24,
            y: mouseY + (Math.random() - 0.5) * 24,
            vx: (Math.random() - 0.5) * 3,
            vy: -Math.sign(scrollDelta) * (Math.random() * 3 + 2),
            size: Math.random() * 4 + 2,
            alpha: 0.95,
            color: particleColors[Math.floor(Math.random() * particleColors.length)],
            decay: 0.025
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Spring physics for trailing cursor ring
      const spring = 0.24;
      const friction = 0.72;
      const ax = (mouseX - ringX) * spring;
      const ay = (mouseY - ringY) * spring;
      ringVx = (ringVx + ax) * friction;
      ringVy = (ringVy + ay) * friction;
      ringX += ringVx;
      ringY += ringVy;

      // Update cursor DOM elements
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (cursorRingRef.current) {
        const speed = Math.hypot(ringVx, ringVy);
        const stretch = Math.min(speed * 0.035, 0.45);
        const angle = Math.atan2(ringVy, ringVx);
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) rotate(${angle}rad) scale(${1 + stretch}, ${1 - stretch * 0.5})`;
      }

      // 1. Draw Global Ambient Cursor Spotlight / Light Cone
      if (isVisible) {
        const lightRadius = isPointer ? 170 : 120;
        const grad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, lightRadius);
        grad.addColorStop(0, 'rgba(239, 68, 68, 0.16)');
        grad.addColorStop(0.4, 'rgba(239, 68, 68, 0.06)');
        grad.addColorStop(0.8, 'rgba(56, 189, 248, 0.02)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, lightRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Animate and Draw Electric Tendrils to Nearby Elements
      for (let i = tendrils.length - 1; i >= 0; i--) {
        const t = tendrils[i];
        t.progress += 0.06;
        t.alpha -= 0.025;

        if (t.progress >= 1 || t.alpha <= 0) {
          tendrils.splice(i, 1);
          continue;
        }

        const midX = (t.startX + t.targetX) / 2 + (Math.random() - 0.5) * 20;
        const midY = (t.startY + t.targetY) / 2 + (Math.random() - 0.5) * 20;

        ctx.beginPath();
        ctx.moveTo(t.startX, t.startY);
        ctx.quadraticCurveTo(midX, midY, t.targetX, t.targetY);
        ctx.strokeStyle = t.color;
        ctx.lineWidth = 1.2;
        ctx.shadowColor = t.color;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = t.alpha;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // 3. Animate and Draw Scroll Energy Wake Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.size *= 0.96;

        if (p.alpha <= 0.02 || p.size <= 0.4) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.globalAlpha = 1.0;
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Living Energy Canvas (Spotlight, tendrils, scroll-wake cascade) */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9990] mix-blend-screen"
        aria-hidden="true"
      />

      {/* Center Precise Dot */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`rounded-full transition-transform duration-100 ${
            isClicking
              ? 'w-2 h-2 bg-red-400 scale-75'
              : isPointer
              ? 'w-3 h-3 bg-red-500 shadow-[0_0_15px_#ef4444]'
              : 'w-2 h-2 bg-white shadow-[0_0_10px_#ef4444]'
          }`}
        />
      </div>

      {/* Trailing Elastic Energy Ring */}
      <div
        ref={cursorRingRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`rounded-full border transition-all duration-150 ease-out ${
            isClicking
              ? 'w-10 h-10 border-red-500 bg-red-500/25 scale-90'
              : isPointer
              ? 'w-14 h-14 border-red-500 bg-red-500/15 shadow-[0_0_25px_rgba(239,68,68,0.35)]'
              : 'w-8 h-8 border-red-500/50 bg-red-500/5 shadow-[0_0_12px_rgba(239,68,68,0.15)]'
          }`}
        />
      </div>
    </>
  );
}
