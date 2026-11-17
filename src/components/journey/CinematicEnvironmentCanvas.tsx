'use client';

import React, { useEffect, useRef } from 'react';
import { useJourney } from '@/context/JourneyContext';

export default function CinematicEnvironmentCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { activeChapter } = useJourney();
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const chapterRef = useRef(activeChapter);

  useEffect(() => {
    chapterRef.current = activeChapter;
  }, [activeChapter]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX / width;
      mouseRef.current.targetY = e.clientY / height;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Procedural Particle System
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }

    const particles: Particle[] = Array.from({ length: 48 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -0.2 - Math.random() * 0.5,
      size: 1 + Math.random() * 2.5,
      alpha: 0.15 + Math.random() * 0.4,
      color: Math.random() > 0.5 ? '#38bdf8' : '#e5b061'
    }));

    let time = 0;

    const render = () => {
      time += 0.012;
      const currentCh = chapterRef.current;

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;
      const mx = (mouseRef.current.x - 0.5) * 40;
      const my = (mouseRef.current.y - 0.5) * 30;

      ctx.clearRect(0, 0, width, height);

      // 1. Base Atmospheric Sky Gradient based on active chapter
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      if (currentCh === 0) {
        // Sunrise Mountain Dawn
        skyGrad.addColorStop(0, '#040711');
        skyGrad.addColorStop(0.55, '#0c1326');
        skyGrad.addColorStop(0.85, '#2a1a1c');
        skyGrad.addColorStop(1, '#1b120c');
      } else if (currentCh === 1) {
        // University Campus Morning
        skyGrad.addColorStop(0, '#040711');
        skyGrad.addColorStop(0.6, '#0b1622');
        skyGrad.addColorStop(0.9, '#122227');
        skyGrad.addColorStop(1, '#071015');
      } else if (currentCh === 2) {
        // Futuristic Cybernetic World
        skyGrad.addColorStop(0, '#040711');
        skyGrad.addColorStop(0.6, '#081024');
        skyGrad.addColorStop(0.9, '#140c24');
        skyGrad.addColorStop(1, '#070914');
      } else if (currentCh === 3) {
        // High-Tech Engineering Foundry
        skyGrad.addColorStop(0, '#040711');
        skyGrad.addColorStop(0.5, '#06121f');
        skyGrad.addColorStop(0.85, '#191812');
        skyGrad.addColorStop(1, '#0c0e14');
      } else if (currentCh === 4) {
        // Research Telemetry Horizon
        skyGrad.addColorStop(0, '#040711');
        skyGrad.addColorStop(0.6, '#071322');
        skyGrad.addColorStop(1, '#05101a');
      } else if (currentCh === 5) {
        // Mountain Summit Viewpoint
        skyGrad.addColorStop(0, '#040711');
        skyGrad.addColorStop(0.5, '#15102a');
        skyGrad.addColorStop(0.85, '#2e1c1e');
        skyGrad.addColorStop(1, '#0e0b17');
      } else {
        // Futuristic Metropolis Sunrise
        skyGrad.addColorStop(0, '#040711');
        skyGrad.addColorStop(0.45, '#0b162c');
        skyGrad.addColorStop(0.8, '#261b17');
        skyGrad.addColorStop(1, '#15100d');
      }

      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Horizon Sun Orb / Dawn Glow
      const sunY = height * 0.7 + my * 0.5;
      const sunGrad = ctx.createRadialGradient(
        width * 0.5 + mx * 0.8,
        sunY,
        10,
        width * 0.5 + mx * 0.8,
        sunY,
        width * 0.45
      );

      if (currentCh === 0 || currentCh === 6) {
        sunGrad.addColorStop(0, 'rgba(254, 215, 170, 0.28)');
        sunGrad.addColorStop(0.3, 'rgba(229, 176, 97, 0.12)');
        sunGrad.addColorStop(0.7, 'rgba(244, 63, 94, 0.05)');
        sunGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else if (currentCh === 3) {
        sunGrad.addColorStop(0, 'rgba(56, 189, 248, 0.22)');
        sunGrad.addColorStop(0.4, 'rgba(16, 185, 129, 0.08)');
        sunGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        sunGrad.addColorStop(0, 'rgba(56, 189, 248, 0.15)');
        sunGrad.addColorStop(0.5, 'rgba(139, 92, 246, 0.06)');
        sunGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }

      ctx.fillStyle = sunGrad;
      ctx.fillRect(0, 0, width, height);

      // 3. Environmental Mountain / Architecture Silhouettes
      if (currentCh === 0 || currentCh === 5) {
        // Layer 1: Distant Mountain Silhouettes
        ctx.fillStyle = 'rgba(15, 19, 36, 0.75)';
        ctx.beginPath();
        ctx.moveTo(0, height * 0.75);
        ctx.lineTo(width * 0.2, height * 0.62 + my * 0.3);
        ctx.lineTo(width * 0.45, height * 0.72 + my * 0.2);
        ctx.lineTo(width * 0.7, height * 0.58 + my * 0.4);
        ctx.lineTo(width * 0.88, height * 0.68 + my * 0.3);
        ctx.lineTo(width, height * 0.64);
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();

        // Layer 2: Near Ridge Silhouettes
        ctx.fillStyle = 'rgba(9, 12, 24, 0.9)';
        ctx.beginPath();
        ctx.moveTo(0, height * 0.82);
        ctx.lineTo(width * 0.3, height * 0.73 + my * 0.6);
        ctx.lineTo(width * 0.55, height * 0.84 + my * 0.4);
        ctx.lineTo(width * 0.82, height * 0.74 + my * 0.7);
        ctx.lineTo(width, height * 0.85);
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();

        // The Winding Golden Road in Chapter 01
        if (currentCh === 0) {
          ctx.strokeStyle = 'rgba(229, 176, 97, 0.25)';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(width * 0.5 + mx * 0.2, height * 0.75);
          ctx.bezierCurveTo(
            width * 0.42 + mx * 0.4,
            height * 0.82,
            width * 0.58 + mx * 0.6,
            height * 0.9,
            width * 0.5,
            height
          );
          ctx.stroke();

          // Golden Road Glow
          ctx.strokeStyle = 'rgba(229, 176, 97, 0.08)';
          ctx.lineWidth = 14;
          ctx.stroke();
        }
      } else if (currentCh === 3 || currentCh === 2) {
        // Holographic Blueprint Grid Perspective
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.07)';
        ctx.lineWidth = 1;
        const horizon = height * 0.68;
        const lines = 16;
        for (let i = 0; i <= lines; i++) {
          const x = (width / lines) * i;
          ctx.beginPath();
          ctx.moveTo(width * 0.5 + (x - width * 0.5) * 0.1, horizon);
          ctx.lineTo(x + mx * 0.8, height);
          ctx.stroke();
        }
      }

      // 4. Floating Atmospheric Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.5 + Math.sin(time + p.x) * 0.5);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // 5. Subtle Vignette
      const vigGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        width * 0.35,
        width * 0.5,
        height * 0.5,
        width * 0.8
      );
      vigGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vigGrad.addColorStop(1, 'rgba(4, 7, 17, 0.7)');
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
