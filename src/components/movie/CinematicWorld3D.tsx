'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useMovie } from '@/context/MovieContext';
import { KrishnaCharacterRig, KrishnaAnimationState } from './KrishnaCharacterRig';

// Dynamic 2D Canvas-based crisp diegetic texture generator for 3D signage
function createDiegeticSign(title: string, subtitle?: string, accentColor = '#38bdf8', borderColor = 'rgba(56, 189, 248, 0.4)') {
  if (typeof document === 'undefined') return new THREE.Texture();
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 320;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    // Backdrop panel
    ctx.fillStyle = 'rgba(5, 10, 22, 0.9)';
    ctx.fillRect(0, 0, 1024, 320);

    // Glowing border frame
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 6;
    ctx.strokeRect(8, 8, 1008, 304);

    // Top status tick
    ctx.fillStyle = accentColor;
    ctx.fillRect(40, 24, 60, 6);

    // Title
    ctx.fillStyle = accentColor;
    ctx.font = 'bold 52px "Cinzel", "Times New Roman", serif';
    ctx.textAlign = 'center';
    ctx.fillText(title, 512, 135);

    // Subtitle
    if (subtitle) {
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '28px "Courier New", monospace';
      ctx.fillText(subtitle, 512, 215);
    }

    // Bottom telemetry line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(80, 265);
    ctx.lineTo(944, 265);
    ctx.stroke();

    ctx.fillStyle = 'rgba(148, 163, 184, 0.8)';
    ctx.font = '18px monospace';
    ctx.fillText('DIEGETIC TELEMETRY // KRISHNA KAUSHIK PORTFOLIO FILM', 512, 295);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

export default function CinematicWorld3D() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { progress, openProjectModal, setIsCertificateModalOpen } = useMovie();
  const progressRef = useRef(progress);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Atmosphere Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050914, 0.005);

    const camera = new THREE.PerspectiveCamera(
      52,
      container.clientWidth / container.clientHeight,
      0.1,
      1300
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Lighting System
    const ambientLight = new THREE.AmbientLight(0x283854, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffdfba, 2.8);
    sunLight.position.set(30, 80, -60);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 3.5, 130);
    scene.add(pointLight);

    const textureLoader = new THREE.TextureLoader();

    // 3. Krishna Kaushik 3D Character Rig (Protagonist)
    const krishna = new KrishnaCharacterRig();
    scene.add(krishna.group);

    // Interactive clickable project mesh registration
    const projectPortals: { mesh: THREE.Mesh; slug: string; title: string }[] = [];

    // =========================================================================
    // ZONE 01: The Beginning — Mountain Road at Dawn (Z: 0 to 80, p: 0.00 to 0.11)
    // =========================================================================
    const roadCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, -10),
      new THREE.Vector3(3, 0, 25),
      new THREE.Vector3(-2, 0, 50),
      new THREE.Vector3(0, 0, 80)
    ]);
    const roadGeo = new THREE.TubeGeometry(roadCurve, 64, 2.8, 8, false);
    const roadMat = new THREE.MeshStandardMaterial({ color: 0x141824, roughness: 0.9 });
    const roadMesh = new THREE.Mesh(roadGeo, roadMat);
    roadMesh.position.y = -0.1;
    scene.add(roadMesh);

    const stripeGeo = new THREE.TubeGeometry(roadCurve, 64, 0.08, 6, false);
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0xe5b061, emissive: 0xe5b061, emissiveIntensity: 0.8 });
    const stripeMesh = new THREE.Mesh(stripeGeo, stripeMat);
    stripeMesh.position.y = 0.05;
    scene.add(stripeMesh);

    // Mountain silhouettes
    const mountainGeo = new THREE.ConeGeometry(28, 55, 5);
    const mountainMat = new THREE.MeshStandardMaterial({ color: 0x090f1d, flatShading: true });
    for (let i = 0; i < 18; i++) {
      const mt = new THREE.Mesh(mountainGeo, mountainMat);
      const side = i % 2 === 0 ? 1 : -1;
      mt.position.set(side * (32 + Math.random() * 28), 12, i * 4.5);
      mt.rotation.y = Math.random() * Math.PI;
      scene.add(mt);
    }

    // Zone 1 Backdrop Plate
    textureLoader.load('/movie/scene1_mountain_road.jpg', (tex) => {
      const plateGeo = new THREE.PlaneGeometry(80, 45);
      const plateMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false });
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.position.set(0, 18, 40);
      plate.rotation.y = Math.PI;
      scene.add(plate);
    });

    // =========================================================================
    // ZONE 02: The Foundation — Shoolini University Quad (Z: 80 to 170, p: 0.11 to 0.22)
    // =========================================================================
    const quadPavement = new THREE.Mesh(
      new THREE.PlaneGeometry(36, 90),
      new THREE.MeshStandardMaterial({ color: 0x121722, roughness: 0.8 })
    );
    quadPavement.rotation.x = -Math.PI / 2;
    quadPavement.position.set(0, -0.05, 125);
    scene.add(quadPavement);

    // Colonnade Columns & Archway
    const colGeo = new THREE.CylinderGeometry(0.65, 0.65, 15, 16);
    const colMat = new THREE.MeshStandardMaterial({ color: 0x1e2738, roughness: 0.6 });
    for (let z = 90; z <= 165; z += 16) {
      const colL = new THREE.Mesh(colGeo, colMat);
      colL.position.set(-13, 7.5, z);
      const colR = new THREE.Mesh(colGeo, colMat);
      colR.position.set(13, 7.5, z);
      const lintel = new THREE.Mesh(new THREE.BoxGeometry(28, 1.2, 1.8), colMat);
      lintel.position.set(0, 15, z);
      scene.add(colL, colR, lintel);
    }

    // Diegetic 3D Sign on University Gateway Arch at Z = 92
    const univSignTex = createDiegeticSign('SHOOLINI UNIVERSITY', 'Faculty of Engineering & Artificial Intelligence', '#e5b061', 'rgba(229,176,97,0.5)');
    const univSignMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 5),
      new THREE.MeshBasicMaterial({ map: univSignTex, transparent: true })
    );
    univSignMesh.position.set(0, 11, 92);
    scene.add(univSignMesh);

    // Classroom Lecture Desk & Study Chair at Z = 135
    const deskGroup = new THREE.Group();
    deskGroup.position.set(0, 0, 135);
    const deskWoodMat = new THREE.MeshStandardMaterial({ color: 0x3d271d, roughness: 0.7 });
    const deskTop = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.08, 1.2), deskWoodMat);
    deskTop.position.set(0, 0.75, 0);
    deskGroup.add(deskTop);

    // Open Study Notebook & Pen (CGPA 9.05 / 10)
    const notebook = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.02, 0.45), new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.9 }));
    notebook.position.set(0, 0.8, 0);
    notebook.rotation.y = 0.15;
    deskGroup.add(notebook);

    // Chair
    const chairSeat = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.06, 0.55), deskWoodMat);
    chairSeat.position.set(0, 0.48, -0.55);
    deskGroup.add(chairSeat);
    scene.add(deskGroup);

    // Zone 2 Backdrop Plate
    textureLoader.load('/movie/scene2_university.jpg', (tex) => {
      const plate = new THREE.Mesh(
        new THREE.PlaneGeometry(80, 45),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false })
      );
      plate.position.set(0, 18, 155);
      plate.rotation.y = Math.PI;
      scene.add(plate);
    });

    // =========================================================================
    // ZONE 03: Learning & Technology — Cybernetic Lab (Z: 170 to 260, p: 0.22 to 0.33)
    // =========================================================================
    const labFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(38, 90),
      new THREE.MeshStandardMaterial({ color: 0x070e1b, roughness: 0.25, metalness: 0.8 })
    );
    labFloor.rotation.x = -Math.PI / 2;
    labFloor.position.set(0, -0.05, 215);
    scene.add(labFloor);

    // Glowing server racks
    const serverGeo = new THREE.BoxGeometry(2, 9, 2);
    const serverMat = new THREE.MeshStandardMaterial({ color: 0x0c1322, roughness: 0.4 });
    const serverLedMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x38bdf8, emissiveIntensity: 1.5 });
    for (let z = 180; z <= 250; z += 14) {
      const sL = new THREE.Mesh(serverGeo, serverMat);
      sL.position.set(-11, 4.5, z);
      const ledL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 7, 1.4), serverLedMat);
      ledL.position.set(-9.9, 4.5, z);
      const sR = new THREE.Mesh(serverGeo, serverMat);
      sR.position.set(11, 4.5, z);
      const ledR = new THREE.Mesh(new THREE.BoxGeometry(0.1, 7, 1.4), serverLedMat);
      ledR.position.set(9.9, 4.5, z);
      scene.add(sL, ledL, sR, ledR);
    }

    // Workstation Desk at Z = 230 with Dual Monitors
    const labWorkstation = new THREE.Group();
    labWorkstation.position.set(0, 0, 230);
    const labDeskTop = new THREE.Mesh(new THREE.BoxGeometry(3, 0.08, 1.4), new THREE.MeshStandardMaterial({ color: 0x0a101d, metalness: 0.9, roughness: 0.3 }));
    labDeskTop.position.set(0, 0.75, 0);
    labWorkstation.add(labDeskTop);

    // Dual Glowing Monitors with dynamic textures
    const codeScreenTex = createDiegeticSign('PYTHON // C++ // SQL', 'NEXT.JS // GEMINI RAG // FAISS', '#38bdf8', 'rgba(56,189,248,0.6)');
    const monMat = new THREE.MeshBasicMaterial({ map: codeScreenTex });
    const screen1 = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.9), monMat);
    screen1.position.set(-0.9, 1.35, 0.4);
    screen1.rotation.y = 0.15;
    const screen2 = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.9), monMat);
    screen2.position.set(0.9, 1.35, 0.4);
    screen2.rotation.y = -0.15;
    labWorkstation.add(screen1, screen2);
    scene.add(labWorkstation);

    // Zone 3 Backdrop Plate
    textureLoader.load('/movie/scene3_computer_lab.jpg', (tex) => {
      const plate = new THREE.Mesh(
        new THREE.PlaneGeometry(80, 45),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false })
      );
      plate.position.set(0, 18, 250);
      plate.rotation.y = Math.PI;
      scene.add(plate);
    });

    // =========================================================================
    // ZONE 04: CampusOS AI Flagship Foundry (Z: 260 to 370, p: 0.33 to 0.46)
    // =========================================================================
    const foundryZ = 330;
    const reactorCore = new THREE.Mesh(
      new THREE.SphereGeometry(6, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0xe5b061, emissive: 0xe5b061, emissiveIntensity: 0.6, wireframe: true })
    );
    reactorCore.position.set(0, 14, foundryZ);
    scene.add(reactorCore);

    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(10, 0.25, 16, 64),
      new THREE.MeshStandardMaterial({ color: 0xe5b061, emissive: 0xe5b061, emissiveIntensity: 0.9 })
    );
    ring1.position.copy(reactorCore.position);
    const ring2 = ring1.clone();
    ring2.rotation.x = Math.PI / 2;
    scene.add(ring1, ring2);

    // CampusOS 3D Diegetic Architecture Sign
    const campusosSignTex = createDiegeticSign('CAMPUSOS AI // FLAGSHIP', '5 Stakeholders • 510 QA Suites • PostgreSQL + Gemini RAG', '#e5b061', 'rgba(229,176,97,0.7)');
    const campusosSign = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 5.5),
      new THREE.MeshBasicMaterial({ map: campusosSignTex, transparent: true })
    );
    campusosSign.position.set(0, 8, foundryZ + 15);
    scene.add(campusosSign);

    // Clickable CampusOS Monolith Portal
    const campusosPortal = new THREE.Mesh(
      new THREE.BoxGeometry(5.5, 9, 1),
      new THREE.MeshStandardMaterial({ color: 0x081220, emissive: 0xe5b061, emissiveIntensity: 0.4, metalness: 0.8 })
    );
    campusosPortal.position.set(0, 4.5, foundryZ);
    scene.add(campusosPortal);
    projectPortals.push({ mesh: campusosPortal, slug: 'campusos-ai', title: 'CampusOS AI' });

    // Zone 4 Backdrop Plate
    textureLoader.load('/movie/scene4_campusos.jpg', (tex) => {
      const plate = new THREE.Mesh(
        new THREE.PlaneGeometry(80, 45),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false })
      );
      plate.position.set(0, 18, 360);
      plate.rotation.y = Math.PI;
      scene.add(plate);
    });

    // =========================================================================
    // ZONE 05: Gyanix Socratic AI Environment (Z: 370 to 480, p: 0.46 to 0.58)
    // =========================================================================
    const gyanixZ = 435;
    const gyanixSignTex = createDiegeticSign('GYANIX // SOCRATIC AI', 'CBSE Class 11 & 12 • 41 States • Multi-turn STEM Reasoning', '#38bdf8', 'rgba(56,189,248,0.7)');
    const gyanixSign = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 5),
      new THREE.MeshBasicMaterial({ map: gyanixSignTex, transparent: true })
    );
    gyanixSign.position.set(0, 8.5, gyanixZ + 15);
    scene.add(gyanixSign);

    // Clickable Gyanix Portal
    const gyanixPortal = new THREE.Mesh(
      new THREE.BoxGeometry(5, 8.5, 1),
      new THREE.MeshStandardMaterial({ color: 0x061122, emissive: 0x38bdf8, emissiveIntensity: 0.45, metalness: 0.8 })
    );
    gyanixPortal.position.set(0, 4.25, gyanixZ);
    scene.add(gyanixPortal);
    projectPortals.push({ mesh: gyanixPortal, slug: 'gyanix', title: 'Gyanix' });

    // Glowing curriculum rings around Gyanix
    const gRing = new THREE.Mesh(
      new THREE.TorusGeometry(7, 0.15, 16, 48),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x38bdf8, emissiveIntensity: 0.8 })
    );
    gRing.position.set(0, 5, gyanixZ);
    gRing.rotation.x = Math.PI / 3;
    scene.add(gRing);

    // =========================================================================
    // ZONE 06: Specialized Projects — 4 Portals (Z: 480 to 590, p: 0.58 to 0.70)
    // =========================================================================
    const specialProjects = [
      { slug: 'civiclens', title: 'CivicLens (Spatial AI)', color: 0x10b981, x: -9, z: 515, sub: 'PostGIS <=50m • 100/100 Tests' },
      { slug: 'financial-advisor-ai', title: 'Financial Advisor AI', color: 0xf59e0b, x: 9, z: 515, sub: 'SEC 10-K Parsing • Plotly RAG' },
      { slug: 'agentic-rag-engine', title: 'Agentic RAG Engine', color: 0x06b6d4, x: -9, z: 555, sub: 'FAISS+BM25 Hybrid • 8/8 Tests' },
      { slug: 'zeneth-crop-expert', title: 'ZENETH (Native C++)', color: 0xf43f5e, x: 9, z: 555, sub: '<1ms STL Engine • 9 Crops' }
    ];

    specialProjects.forEach((p) => {
      const pMat = new THREE.MeshStandardMaterial({ color: 0x07111e, emissive: p.color, emissiveIntensity: 0.45, metalness: 0.85 });
      const pMesh = new THREE.Mesh(new THREE.BoxGeometry(4.2, 7.2, 0.8), pMat);
      pMesh.position.set(p.x, 3.8, p.z);
      scene.add(pMesh);

      // Glowing outer edge
      const rim = new THREE.Mesh(
        new THREE.BoxGeometry(4.4, 7.4, 0.85),
        new THREE.MeshStandardMaterial({ color: p.color, emissive: p.color, emissiveIntensity: 0.9, wireframe: true })
      );
      pMesh.add(rim);

      // Diegetic name sign above portal
      const pSignTex = createDiegeticSign(p.title, p.sub, `#${p.color.toString(16).padStart(6, '0')}`, 'rgba(255,255,255,0.3)');
      const pSign = new THREE.Mesh(new THREE.PlaneGeometry(8, 2.5), new THREE.MeshBasicMaterial({ map: pSignTex, transparent: true }));
      pSign.position.set(p.x, 8.2, p.z);
      scene.add(pSign);

      projectPortals.push({ mesh: pMesh, slug: p.slug, title: p.title });
    });

    // =========================================================================
    // ZONE 07: Professional Journey — Corizo / IIT Bombay Robotics (Z: 590 to 690, p: 0.70 to 0.80)
    // =========================================================================
    for (let k = 0; k < 3; k++) {
      const moduleZ = 610 + k * 26;
      const pod = new THREE.Mesh(
        new THREE.CylinderGeometry(7, 7, 8, 16, 1, true),
        new THREE.MeshStandardMaterial({
          color: k === 0 ? 0x10b981 : 0x1e293b,
          wireframe: true,
          emissive: k === 0 ? 0x10b981 : 0x000000,
          emissiveIntensity: 0.4
        })
      );
      pod.position.set(0, 4, moduleZ);
      scene.add(pod);
    }

    // Diegetic Facility Sign at Z = 605
    const corizoSignTex = createDiegeticSign('CORIZO // COLLABORATIVE PROGRAMME', 'In Collaboration with IIT Bombay • Stage 1: IoT & Robotics (Active)', '#10b981', 'rgba(16,185,129,0.7)');
    const corizoSign = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 5.5),
      new THREE.MeshBasicMaterial({ map: corizoSignTex, transparent: true })
    );
    corizoSign.position.set(0, 9, 605);
    scene.add(corizoSign);

    // Robotic Arm & IoT Workbench at Z = 645
    const roboticsBench = new THREE.Group();
    roboticsBench.position.set(0, 0, 645);
    const benchTop = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.1, 1.4), new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7 }));
    benchTop.position.set(0, 0.8, 0);
    roboticsBench.add(benchTop);

    const armBase = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 0.2, 16), new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9 }));
    armBase.position.set(0.6, 0.95, 0);
    const armSegment1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.8, 8), new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.6 }));
    armSegment1.position.set(0.6, 1.45, 0.1);
    armSegment1.rotation.x = 0.4;
    const armSegment2 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.7, 8), new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.6 }));
    armSegment2.position.set(0.6, 1.9, -0.15);
    armSegment2.rotation.x = -0.5;
    roboticsBench.add(armBase, armSegment1, armSegment2);

    const iotBoard = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.02, 0.5), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x10b981, emissiveIntensity: 0.9 }));
    iotBoard.position.set(-0.5, 0.86, 0);
    roboticsBench.add(iotBoard);
    scene.add(roboticsBench);

    // Zone 7 Backdrop Plate
    textureLoader.load('/movie/scene5_robotics.jpg', (tex) => {
      const plate = new THREE.Mesh(
        new THREE.PlaneGeometry(80, 45),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false })
      );
      plate.position.set(0, 18, 680);
      plate.rotation.y = Math.PI;
      scene.add(plate);
    });

    // =========================================================================
    // ZONE 08: Mountain Summit & Anveshan Hackathon (Z: 690 to 790, p: 0.80 to 0.90)
    // =========================================================================
    const summitZ = 745;
    const summit = new THREE.Mesh(
      new THREE.ConeGeometry(40, 26, 8),
      new THREE.MeshStandardMaterial({ color: 0x0d1424, flatShading: true })
    );
    summit.position.set(0, 0, summitZ);
    scene.add(summit);

    // Glowing Achievement Monolith (Anveshan Round 2 Milestone)
    const monolith = new THREE.Mesh(
      new THREE.BoxGeometry(3.5, 9, 1.2),
      new THREE.MeshStandardMaterial({ color: 0x8b5cf6, emissive: 0x8b5cf6, emissiveIntensity: 0.85 })
    );
    monolith.position.set(0, 16.5, summitZ);
    scene.add(monolith);

    // Diegetic Milestone Sign
    const anveshanSignTex = createDiegeticSign('ANVESHAN HACKATHON // MILESTONE', 'Participant • Advanced to Round 2 (Click to Inspect Certificate)', '#c084fc', 'rgba(192,132,252,0.8)');
    const anveshanSign = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 5),
      new THREE.MeshBasicMaterial({ map: anveshanSignTex, transparent: true })
    );
    anveshanSign.position.set(0, 22.5, summitZ - 2);
    scene.add(anveshanSign);

    // Zone 8 Backdrop Plate
    textureLoader.load('/movie/scene6_summit.jpg', (tex) => {
      const plate = new THREE.Mesh(
        new THREE.PlaneGeometry(80, 45),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false })
      );
      plate.position.set(0, 24, 775);
      plate.rotation.y = Math.PI;
      scene.add(plate);
    });

    // =========================================================================
    // ZONE 09: The Final Destination — Futuristic Metropolis (Z: 790 to 890, p: 0.90 to 1.00)
    // =========================================================================
    for (let t = 0; t < 32; t++) {
      const h = 30 + Math.random() * 60;
      const tower = new THREE.Mesh(
        new THREE.BoxGeometry(7 + Math.random() * 9, h, 7 + Math.random() * 9),
        new THREE.MeshStandardMaterial({ color: 0x081122, emissive: 0x38bdf8, emissiveIntensity: 0.2 + Math.random() * 0.3, roughness: 0.3 })
      );
      const tx = (Math.random() - 0.5) * 130;
      const tz = 840 + Math.random() * 80;
      tower.position.set(tx, h / 2, tz);
      scene.add(tower);
    }

    // Rooftop Observation Deck at Z = 835
    const deck = new THREE.Mesh(
      new THREE.BoxGeometry(26, 2, 32),
      new THREE.MeshStandardMaterial({ color: 0x121a2c, roughness: 0.5 })
    );
    deck.position.set(0, 8.5, 835);
    scene.add(deck);

    // Glass safety railing
    const railMat = new THREE.MeshPhysicalMaterial({ color: 0x93c5fd, transmission: 0.8, transparent: true, opacity: 0.5, roughness: 0.1 });
    const railFront = new THREE.Mesh(new THREE.BoxGeometry(26, 1.2, 0.1), railMat);
    railFront.position.set(0, 10.1, 850.8);
    scene.add(railFront);

    // Zone 9 Backdrop Plate
    textureLoader.load('/movie/scene7_city_sunrise.jpg', (tex) => {
      const plate = new THREE.Mesh(
        new THREE.PlaneGeometry(90, 50),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false })
      );
      plate.position.set(0, 25, 880);
      plate.rotation.y = Math.PI;
      scene.add(plate);
    });

    // =========================================================================
    // Pointer Interactivity (Clicking Project Portals & Achievement Monolith)
    // =========================================================================
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(projectPortals.map(p => p.mesh), true);

      if (intersects.length > 0) {
        const hit = projectPortals.find(p => p.mesh === intersects[0].object || p.mesh.children.includes(intersects[0].object as THREE.Mesh));
        if (hit) {
          openProjectModal(hit.slug);
        }
      }

      // Check monolith click for Certificate in Zone 8
      const monoIntersects = raycaster.intersectObject(monolith);
      if (monoIntersects.length > 0) {
        setIsCertificateModalOpen(true);
      }
    };

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);

    // =========================================================================
    // Cinema Loop & Character Skeletal Animation Across 9 Scenes
    // =========================================================================
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const p = progressRef.current; // 0.0 to 1.0

      // Map progress to world coordinate Z (0 to 840)
      const currentZ = p * 840;

      let animState: KrishnaAnimationState = {
        action: 'walk',
        headTurn: 0,
        armReach: 0,
        lookUp: 0
      };

      let charX = 0;
      let charY = 0;
      let charZ = 0;
      let charRotY = 0;

      if (p < 0.11) {
        // ZONE 01: The Beginning — Mountain Road at Sunrise
        animState.action = 'walk';
        charZ = currentZ + 12;
        charX = Math.sin(charZ * 0.04) * 2.2;
        charY = 0;
        charRotY = 0;
        animState.headTurn = Math.sin(time * 0.8) * 0.25;
      } 
      else if (p >= 0.11 && p < 0.22) {
        // ZONE 02: University Quad & Classroom
        if (p < 0.16) {
          animState.action = 'walk';
          charZ = currentZ + 10;
          charX = 0;
          charY = 0;
          charRotY = 0;
        } else {
          animState.action = 'sit_study';
          charZ = 135 - 0.45;
          charX = 0;
          charY = 0;
          charRotY = Math.PI;
          animState.lookUp = -0.25;
        }
      } 
      else if (p >= 0.22 && p < 0.33) {
        // ZONE 03: Learning & Technology Lab
        if (p < 0.27) {
          animState.action = 'walk';
          charZ = currentZ + 10;
          charX = 0;
          charY = 0;
          charRotY = 0;
        } else {
          animState.action = 'type_code';
          charZ = 230 - 0.45;
          charX = 0;
          charY = 0;
          charRotY = Math.PI;
          animState.headTurn = Math.sin(time * 1.5) * 0.2;
        }
      } 
      else if (p >= 0.33 && p < 0.46) {
        // ZONE 04: CampusOS AI Flagship Foundry
        animState.action = 'work_campusos';
        charZ = 330 - 1.5;
        charX = -2;
        charY = 0;
        charRotY = 0.4;
      } 
      else if (p >= 0.46 && p < 0.58) {
        // ZONE 05: Gyanix Socratic AI Environment
        animState.action = 'inspect_projects';
        charZ = 435 - 1.5;
        charX = -1.5;
        charY = 0;
        charRotY = 0.3;
        animState.armReach = 0.75;
      } 
      else if (p >= 0.58 && p < 0.70) {
        // ZONE 06: Specialized Projects (CivicLens, Financial Advisor, RAG, ZENETH)
        animState.action = 'inspect_projects';
        charZ = currentZ + 8;
        charX = Math.sin(charZ * 0.05) * 5;
        charY = 0;
        charRotY = -0.3;
        animState.armReach = 0.85;
      } 
      else if (p >= 0.70 && p < 0.80) {
        // ZONE 07: Professional Journey — Corizo / IIT Bombay Robotics & IoT
        animState.action = 'inspect_robotics';
        charZ = 645 - 0.7;
        charX = -0.5;
        charY = 0;
        charRotY = 0.3;
        animState.armReach = 0.9;
        animState.lookUp = -0.15;
      } 
      else if (p >= 0.80 && p < 0.90) {
        // ZONE 08: Mountain Summit & Anveshan Hackathon
        animState.action = 'summit_view';
        charZ = 745 - 2;
        charX = 0;
        charY = 13.5;
        charRotY = 0;
        animState.lookUp = 0.15;
      } 
      else {
        // ZONE 09: The Final Destination — Futuristic Metropolis
        animState.action = 'future_look';
        charZ = 835;
        charX = 0;
        charY = 9.5;
        charRotY = 0;
        animState.lookUp = 0.1;
      }

      // Smoothly update Krishna Character Rig position & bones
      krishna.group.position.set(charX, charY, charZ);
      krishna.group.rotation.y = charRotY;
      krishna.update(time, animState);

      // Camera Kinematics (Follow dolly, orbit, framing)
      let camTargetZ = currentZ;
      let camTargetX = Math.sin(currentZ * 0.035) * 4.2;
      let camTargetY = 3.6;

      if (p < 0.11) {
        // Zone 1 camera approach & face reveal orbit
        if (p > 0.04 && p < 0.09) {
          // Camera arcs slightly around to front-left to reveal Krishna's face and glasses
          camTargetX = Math.sin(time * 0.4) * 3.5;
          camTargetZ = charZ - 4.5;
          camTargetY = 2.4;
        }
      } else if (p >= 0.80 && p < 0.90) {
        // Summit elevation
        camTargetY = 17.5;
        camTargetZ = 732;
        camTargetX = Math.sin(time * 0.3) * 6;
      } else if (p >= 0.90) {
        // Observation deck elevation
        camTargetY = 12.5;
        camTargetZ = 820;
        camTargetX = Math.sin(time * 0.25) * 4;
      }

      camera.position.x += (camTargetX - camera.position.x) * 0.08;
      camera.position.y += (camTargetY - camera.position.y) * 0.08;
      camera.position.z += (camTargetZ - camera.position.z) * 0.1;

      const lookAtTarget = new THREE.Vector3(charX * 0.5, charY + 1.6, charZ + 8);
      camera.lookAt(lookAtTarget);

      // Dynamic light tracking protagonist
      pointLight.position.set(charX, charY + 4, charZ + 2);

      // Reactor ring rotation in Foundry
      ring1.rotation.z = time * 0.4;
      ring2.rotation.y = time * 0.35;
      reactorCore.rotation.y = time * 0.2;

      // Monolith floating rotation in Zone 8
      monolith.rotation.y = time * 0.5;

      // Arm segment micro-articulation
      armSegment2.rotation.x = -0.5 + Math.sin(time * 2) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, [openProjectModal, setIsCertificateModalOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-auto z-0 cursor-grab active:cursor-grabbing"
      aria-hidden="true"
    />
  );
}
