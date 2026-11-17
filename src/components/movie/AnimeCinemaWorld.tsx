'use client';

import React, { useEffect, useRef } from 'react';
import { useMovie, MOVIE_SCENES } from '@/context/MovieContext';
import { soundEngine } from './CinematicSoundEngine';

interface ScenePlate {
  src: string;
  charScreenX: number; // Normalized -1 to +1 coordinate for Krishna in this frame
  panDirection: number; // 1 for right pan, -1 for left pan
  zoomStyle: 'in' | 'out' | 'pulse';
}

const SCENE_PLATES: Record<number, ScenePlate> = {
  0: {
    src: '/anime/anime_scene1_mountain_dawn.jpg',
    charScreenX: -0.22,
    panDirection: 1,
    zoomStyle: 'in'
  },
  1: {
    src: '/anime/anime_scene2_university_classroom.jpg',
    charScreenX: 0.18,
    panDirection: -1,
    zoomStyle: 'out'
  },
  2: {
    src: '/anime/anime_scene3_coding_lab.jpg',
    charScreenX: -0.15,
    panDirection: 1,
    zoomStyle: 'in'
  },
  3: {
    src: '/anime/anime_scene4_campusos_foundry.jpg',
    charScreenX: -0.25,
    panDirection: -1,
    zoomStyle: 'pulse'
  },
  4: {
    src: '/anime/anime_scene4_campusos_foundry.jpg',
    charScreenX: -0.2,
    panDirection: 1,
    zoomStyle: 'in'
  },
  5: {
    src: '/anime/anime_scene3_coding_lab.jpg',
    charScreenX: 0.1,
    panDirection: -1,
    zoomStyle: 'out'
  },
  6: {
    src: '/anime/anime_scene5_robotics_iot.jpg',
    charScreenX: -0.12,
    panDirection: 1,
    zoomStyle: 'in'
  },
  7: {
    src: '/anime/anime_scene6_mountain_summit.jpg',
    charScreenX: -0.28,
    panDirection: 1,
    zoomStyle: 'in'
  },
  8: {
    src: '/anime/anime_scene7_city_sunrise.jpg',
    charScreenX: -0.18,
    panDirection: 1,
    zoomStyle: 'out'
  }
};

export default function AnimeCinemaWorld() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { progress, openProjectModal, setIsCertificateModalOpen } = useMovie();
  const progressRef = useRef(progress);
  const imagesRef = useRef<Record<string, HTMLImageElement>>({});

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  // Preload all 7 Makoto Shinkai 2D Anime Movie Plates
  useEffect(() => {
    const uniqueSrcs = Array.from(new Set(Object.values(SCENE_PLATES).map((p) => p.src)));
    uniqueSrcs.forEach((src) => {
      if (!imagesRef.current[src]) {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          imagesRef.current[src] = img;
        };
      }
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Dynamic wind leaves & atmospheric light motes
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      angle: number;
      angleSpeed: number;
      opacity: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = ['#f59e0b', '#fbbf24', '#fcd34d', '#38bdf8', '#a7f3d0', '#f472b6', '#ffffff'];
    for (let i = 0; i < 48; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 3 + Math.random() * 6,
        speedX: 0.6 + Math.random() * 1.5,
        speedY: 0.2 + Math.random() * 0.9,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: (Math.random() - 0.5) * 0.05,
        opacity: 0.25 + Math.random() * 0.6,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let startTime = performance.now();
    let lastStepTime = 0;
    let lastKeyTime = 0;

    // Interactive clickable project bounds
    let clickableAreas: { x: number; y: number; w: number; h: number; action: () => void }[] = [];

    const handlePointerDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      for (const area of clickableAreas) {
        if (
          clickX >= area.x &&
          clickX <= area.x + area.w &&
          clickY >= area.y &&
          clickY <= area.y + area.h
        ) {
          area.action();
          break;
        }
      }
    };
    canvas.addEventListener('pointerdown', handlePointerDown);

    // =========================================================================
    // HELPER: DRAW ANIME FRAME (COVER MODE WITH CAMERA PAN & ZOOM)
    // =========================================================================
    const drawAnimePlate = (
      img: HTMLImageElement,
      panX: number,
      panY: number,
      zoom: number,
      alpha: number
    ) => {
      if (!img || !img.complete || img.naturalWidth === 0) return false;

      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));

      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = width / height;

      let drawW: number;
      let drawH: number;

      // Cover scaling with extra 8% bleed for camera dolly movement
      const bleedFactor = 1.08 * zoom;

      if (canvasRatio > imgRatio) {
        drawW = width * bleedFactor;
        drawH = drawW / imgRatio;
      } else {
        drawH = height * bleedFactor;
        drawW = drawH * imgRatio;
      }

      const drawX = (width - drawW) * 0.5 + panX;
      const drawY = (height - drawH) * 0.5 + panY;

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      ctx.restore();
      return true;
    };

    // =========================================================================
    // MAIN ANIME RENDERING LOOP
    // =========================================================================
    const render = (now: number) => {
      animId = requestAnimationFrame(render);
      const time = (now - startTime) / 1000;
      const p = Math.max(0, Math.min(0.9999, progressRef.current));

      clickableAreas = [];
      ctx.clearRect(0, 0, width, height);

      // Determine active scene
      let activeSceneIndex = 0;
      for (let i = 0; i < MOVIE_SCENES.length; i++) {
        if (p >= MOVIE_SCENES[i].startProgress && p < MOVIE_SCENES[i].endProgress) {
          activeSceneIndex = i;
          break;
        }
      }

      const curSceneMeta = MOVIE_SCENES[activeSceneIndex];
      const pRel = (p - curSceneMeta.startProgress) / (curSceneMeta.endProgress - curSceneMeta.startProgress);
      const curPlate = SCENE_PLATES[activeSceneIndex];

      // Update projected safe-zone position for Krishna in this scene
      if (typeof window !== 'undefined') {
        const win = window as unknown as { __krishnaScreenX?: number; __krishnaScreenY?: number };
        win.__krishnaScreenX = curPlate.charScreenX;
        win.__krishnaScreenY = 0;
      }

      // Audio cues based on scene action
      if (activeSceneIndex === 0 && pRel > 0.1 && pRel < 0.9) {
        if (time - lastStepTime > 0.55) {
          soundEngine.playFootstep();
          lastStepTime = time;
        }
      } else if ((activeSceneIndex === 2 || activeSceneIndex === 5) && pRel > 0.15 && pRel < 0.85) {
        if (time - lastKeyTime > 0.15) {
          soundEngine.playKeyClick();
          lastKeyTime = time;
        }
      }

      // -----------------------------------------------------------------------
      // 1. BASE LAYER: PROCEDURAL GRADIENT (ALWAYS PRESENT AS ROBUST FALLBACK)
      // -----------------------------------------------------------------------
      let skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      if (activeSceneIndex === 0) {
        skyGrad.addColorStop(0, '#090b1c');
        skyGrad.addColorStop(0.45, '#311b38');
        skyGrad.addColorStop(0.75, '#be5757');
        skyGrad.addColorStop(1, '#f6ad55');
      } else if (activeSceneIndex === 1) {
        skyGrad.addColorStop(0, '#0c1b33');
        skyGrad.addColorStop(0.5, '#1e3a5f');
        skyGrad.addColorStop(0.85, '#60a5fa');
        skyGrad.addColorStop(1, '#bfdbfe');
      } else if (activeSceneIndex === 2 || activeSceneIndex === 5) {
        skyGrad.addColorStop(0, '#040711');
        skyGrad.addColorStop(0.6, '#081124');
        skyGrad.addColorStop(1, '#0e203c');
      } else if (activeSceneIndex === 3 || activeSceneIndex === 4) {
        skyGrad.addColorStop(0, '#060612');
        skyGrad.addColorStop(0.6, '#141226');
        skyGrad.addColorStop(1, '#2b1b36');
      } else if (activeSceneIndex === 6) {
        skyGrad.addColorStop(0, '#050c12');
        skyGrad.addColorStop(0.7, '#091c1d');
        skyGrad.addColorStop(1, '#0f2f2e');
      } else if (activeSceneIndex === 7) {
        skyGrad.addColorStop(0, '#100e29');
        skyGrad.addColorStop(0.4, '#3b1c4a');
        skyGrad.addColorStop(0.75, '#c05621');
        skyGrad.addColorStop(1, '#fbd38d');
      } else {
        skyGrad.addColorStop(0, '#091024');
        skyGrad.addColorStop(0.4, '#24204b');
        skyGrad.addColorStop(0.7, '#dd6b20');
        skyGrad.addColorStop(1, '#fed7aa');
      }
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // -----------------------------------------------------------------------
      // 2. LAYER 1: CURRENT ANIME MOVIE PLATE WITH CAMERA PAN & DOLLY ZOOM
      // -----------------------------------------------------------------------
      const currentImg = imagesRef.current[curPlate.src];
      let zoom = 1.0;
      if (curPlate.zoomStyle === 'in') {
        zoom = 1.0 + pRel * 0.05;
      } else if (curPlate.zoomStyle === 'out') {
        zoom = 1.05 - pRel * 0.05;
      } else {
        zoom = 1.02 + Math.sin(pRel * Math.PI) * 0.03;
      }

      const panX = (pRel - 0.5) * 35 * curPlate.panDirection;
      const panY = Math.sin(pRel * Math.PI) * 10;

      // Calculate cross-fade alpha near scene transitions (last 16% of scene)
      const fadeThreshold = 0.84;
      let curAlpha = 1.0;
      let nextAlpha = 0.0;

      if (pRel > fadeThreshold && activeSceneIndex < MOVIE_SCENES.length - 1) {
        const transitionProgress = (pRel - fadeThreshold) / (1 - fadeThreshold);
        curAlpha = 1 - transitionProgress;
        nextAlpha = transitionProgress;
      }

      drawAnimePlate(currentImg, panX, panY, zoom, curAlpha);

      // Draw next scene if cross-fading
      if (nextAlpha > 0 && activeSceneIndex < MOVIE_SCENES.length - 1) {
        const nextScenePlate = SCENE_PLATES[activeSceneIndex + 1];
        const nextImg = imagesRef.current[nextScenePlate.src];
        drawAnimePlate(nextImg, 0, 0, 1.02, nextAlpha);
      }

      // -----------------------------------------------------------------------
      // 3. LAYER 2: INTERACTIVE SCENE-SPECIFIC HOLOGRAPHIC HOTSPOTS
      // -----------------------------------------------------------------------
      // Scene 4: CampusOS AI Stakeholder Nodes
      if (activeSceneIndex === 3) {
        const coreX = width * 0.72;
        const coreY = height * 0.44;

        // Pulsing AI Core
        ctx.save();
        const coreGrad = ctx.createRadialGradient(coreX, coreY, 0, coreX, coreY, 70);
        coreGrad.addColorStop(0, 'rgba(254, 240, 138, 0.45)');
        coreGrad.addColorStop(0.5, 'rgba(229, 176, 97, 0.25)');
        coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(coreX, coreY, 70, 0, Math.PI * 2);
        ctx.fill();

        // 5 Stakeholder Role Nodes connected by luminous data streams
        const roles = ['Students', 'Teachers', 'Admins', 'Accounts', 'Parents'];
        roles.forEach((r, idx) => {
          const angle = (idx / roles.length) * Math.PI * 2 + time * 0.35;
          const rx = coreX + Math.cos(angle) * 135;
          const ry = coreY + Math.sin(angle) * 80;

          ctx.strokeStyle = 'rgba(229, 176, 97, 0.45)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(coreX, coreY);
          ctx.lineTo(rx, ry);
          ctx.stroke();

          // Node pill
          ctx.fillStyle = 'rgba(11, 19, 38, 0.85)';
          ctx.fillRect(rx - 36, ry - 13, 72, 26);
          ctx.strokeStyle = '#e5b061';
          ctx.lineWidth = 1;
          ctx.strokeRect(rx - 36, ry - 13, 72, 26);

          ctx.fillStyle = '#fef08a';
          ctx.font = 'bold 10px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(r, rx, ry + 4);
        });

        // Clickable bounds to inspect CampusOS modal
        clickableAreas.push({
          x: coreX - 160,
          y: coreY - 110,
          w: 320,
          h: 220,
          action: () => openProjectModal('campusos')
        });
        ctx.restore();
      }

      // Scene 5: Gyanix Socratic Resonance Rings
      if (activeSceneIndex === 4) {
        const gX = width * 0.72;
        const gY = height * 0.46;
        ctx.save();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.ellipse(gX, gY, 120, 50, Math.PI / 4 + time * 0.1, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(229, 176, 97, 0.45)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(gX, gY, 100, 42, -Math.PI / 4 - time * 0.1, 0, Math.PI * 2);
        ctx.stroke();

        clickableAreas.push({
          x: gX - 120,
          y: gY - 60,
          w: 240,
          h: 120,
          action: () => openProjectModal('gyanix')
        });
        ctx.restore();
      }

      // Scene 6: Specialized Projects Interactive Portals
      if (activeSceneIndex === 5) {
        const px = width * 0.65;
        const py = height * 0.45;
        clickableAreas.push({
          x: px - 120,
          y: py - 80,
          w: 240,
          h: 160,
          action: () => openProjectModal('civiclens')
        });
      }

      // Scene 8: Mountain Summit Milestone Monolith
      if (activeSceneIndex === 7) {
        const monoX = width * 0.72;
        const monoY = height * 0.42;

        ctx.save();
        // Pulsing Anveshan Monolith Beacon
        const beaconGrad = ctx.createRadialGradient(monoX, monoY, 0, monoX, monoY, 90);
        beaconGrad.addColorStop(0, 'rgba(168, 85, 247, 0.35)');
        beaconGrad.addColorStop(0.6, 'rgba(192, 132, 252, 0.15)');
        beaconGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = beaconGrad;
        ctx.beginPath();
        ctx.arc(monoX, monoY, 90, 0, Math.PI * 2);
        ctx.fill();

        clickableAreas.push({
          x: monoX - 70,
          y: monoY - 70,
          w: 140,
          h: 140,
          action: () => setIsCertificateModalOpen(true)
        });
        ctx.restore();
      }

      // -----------------------------------------------------------------------
      // 4. LAYER 3: VOLUMETRIC SUN BEAMS & GOD RAYS (DAWN / SUNSET / SUMMIT)
      // -----------------------------------------------------------------------
      if (activeSceneIndex === 0 || activeSceneIndex === 7 || activeSceneIndex === 8) {
        const sunX = width * (activeSceneIndex === 0 ? 0.75 : activeSceneIndex === 7 ? 0.7 : 0.82);
        const sunY = height * 0.38;

        ctx.save();
        ctx.globalAlpha = 0.1;
        for (let r = 0; r < 7; r++) {
          const rayAngle = -0.35 + r * 0.16 + Math.sin(time * 0.2 + r) * 0.02;
          ctx.fillStyle = '#fef08a';
          ctx.beginPath();
          ctx.moveTo(sunX, sunY);
          ctx.lineTo(sunX + Math.cos(rayAngle) * width, sunY + Math.sin(rayAngle) * height);
          ctx.lineTo(sunX + Math.cos(rayAngle + 0.07) * width, sunY + Math.sin(rayAngle + 0.07) * height);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }

      // -----------------------------------------------------------------------
      // 5. LAYER 4: FLOATING ANIME PARTICLES (WIND-BLOWN LEAVES & LIGHT MOTES)
      // -----------------------------------------------------------------------
      ctx.save();
      particles.forEach((pt) => {
        pt.x += pt.speedX;
        pt.y += pt.speedY;
        pt.angle += pt.angleSpeed;

        if (pt.x > width + 20) pt.x = -20;
        if (pt.y > height + 20) pt.y = -20;

        ctx.translate(pt.x, pt.y);
        ctx.rotate(pt.angle);
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = pt.opacity;

        ctx.beginPath();
        ctx.ellipse(0, 0, pt.size, pt.size * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.setTransform(1, 0, 0, 1, 0, 0);
      });
      ctx.restore();

      // -----------------------------------------------------------------------
      // 6. LAYER 5: 2.39:1 CINEMATIC ANAMORPHIC VIGNETTE
      // -----------------------------------------------------------------------
      const vigGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        width * 0.32,
        width * 0.5,
        height * 0.5,
        width * 0.78
      );
      vigGrad.addColorStop(0, 'rgba(0,0,0,0)');
      vigGrad.addColorStop(1, 'rgba(4, 7, 17, 0.5)');
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, width, height);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [openProjectModal, setIsCertificateModalOpen]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-auto z-0 cursor-default"
      aria-label="Makoto Shinkai 2D Anime Movie World"
    />
  );
}