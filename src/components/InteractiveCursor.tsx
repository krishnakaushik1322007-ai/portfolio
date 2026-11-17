'use client';

import React, { useEffect, useRef, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  size: number;
  alpha: number;
  vx: number;
  vy: number;
  hue: number;
}

export default function InteractiveCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only run on client and non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isTouch || prefersReducedMotion) {
      return;
    }

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

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let ringVelocityX = 0;
    let ringVelocityY = 0;
    let lastScrollY = window.scrollY;
    let scrollDelta = 0;

    const trail: TrailPoint[] = [];
    const maxTrailPoints = 30;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      // Check if hovering over clickable/interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a, button, [role="button"], input, textarea, select, .interactive-card, .glass-panel-hover')
        );
        setIsPointer(isClickable);
      }

      // Add trail point with physics velocity
      if (trail.length < maxTrailPoints) {
        trail.push({
          x: mouseX,
          y: mouseY,
          size: Math.random() * 3 + 2,
          alpha: 0.85,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          hue: 195 + Math.random() * 45 // Cyan to subtle violet
        });
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // When user scrolls, eject a burst of micro-particles from cursor to make the page feel alive!
      if (Math.abs(scrollDelta) > 1 && trail.length < maxTrailPoints) {
        for (let k = 0; k < 2; k++) {
          trail.push({
            x: mouseX + (Math.random() - 0.5) * 16,
            y: mouseY + (Math.random() - 0.5) * 16,
            size: Math.random() * 3.5 + 1.5,
            alpha: 0.9,
            vx: (Math.random() - 0.5) * 2,
            vy: -Math.sign(scrollDelta) * (Math.random() * 2 + 1),
            hue: 185 + Math.random() * 50
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    let animationFrameId: number;

    const render = () => {
      // Smooth ring lerp with elastic spring damping
      const spring = 0.22;
      const friction = 0.76;

      const ax = (mouseX - ringX) * spring;
      const ay = (mouseY - ringY) * spring;

      ringVelocityX = (ringVelocityX + ax) * friction;
      ringVelocityY = (ringVelocityY + ay) * friction;

      ringX += ringVelocityX;
      ringY += ringVelocityY;

      // Update DOM cursor elements
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (cursorRingRef.current) {
        // Stretch the ring dynamically along velocity direction
        const speed = Math.hypot(ringVelocityX, ringVelocityY);
        const stretch = Math.min(speed * 0.03, 0.4);
        const angle = Math.atan2(ringVelocityY, ringVelocityX);

        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) rotate(${angle}rad) scale(${1 + stretch}, ${1 - stretch * 0.5})`;
      }

      // Draw particle trail canvas
      ctx.clearRect(0, 0, width, height);

      // Ambient dynamic cursor light beam
      if (mouseX > 0 && mouseY > 0 && isVisible) {
        const glowRadius = isPointer ? 130 : 90;
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, glowRadius);
        gradient.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Animate and render living cursor trails
      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha *= 0.92;
        p.size *= 0.96;

        if (p.alpha <= 0.05 || p.size <= 0.5) {
          trail.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, ${p.alpha})`;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 65%, ${p.alpha * 0.8})`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Dynamic Cursor Light & Trail Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9990] mix-blend-screen"
        aria-hidden="true"
      />

      {/* Primary Tiny Precise Dot */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`rounded-full transition-transform duration-150 ${
            isClicking
              ? 'w-1.5 h-1.5 bg-cyan-300 scale-75'
              : isPointer
              ? 'w-2.5 h-2.5 bg-cyan-400 shadow-[0_0_12px_#38bdf8]'
              : 'w-2 h-2 bg-white shadow-[0_0_8px_#38bdf8]'
          }`}
        />
      </div>

      {/* Smooth Trailing Elastic Ring */}
      <div
        ref={cursorRingRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`rounded-full border transition-all duration-200 ease-out ${
            isClicking
              ? 'w-9 h-9 border-cyan-400/80 bg-cyan-500/20 scale-90'
              : isPointer
              ? 'w-12 h-12 border-cyan-400/90 bg-cyan-500/10 shadow-[0_0_20px_rgba(56,189,248,0.25)]'
              : 'w-8 h-8 border-sky-400/40 bg-sky-500/5'
          }`}
        />
      </div>
    </>
  );
}
