'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useMovie } from '@/context/MovieContext';
import { KrishnaCharacterRig, KrishnaAnimationState } from './KrishnaCharacterRig';

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
    scene.fog = new THREE.FogExp2(0x060b18, 0.0055);

    const camera = new THREE.PerspectiveCamera(
      52,
      container.clientWidth / container.clientHeight,
      0.1,
      1200
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Dynamic Lighting System
    const ambientLight = new THREE.AmbientLight(0x2a3b5c, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffdfba, 2.8);
    sunLight.position.set(30, 80, -60);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 3.5, 120);
    scene.add(pointLight);

    const textureLoader = new THREE.TextureLoader();

    // 3. Krishna Kaushik Character Rig (Human Protagonist)
    const krishna = new KrishnaCharacterRig();
    scene.add(krishna.group);

    // =========================================================================
    // ZONE 01: Mountain Road at Dawn (Z: 0 to 95)
    // =========================================================================
    const roadCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, -10),
      new THREE.Vector3(3, 0, 25),
      new THREE.Vector3(-2, 0, 60),
      new THREE.Vector3(0, 0, 95)
    ]);
    const roadGeo = new THREE.TubeGeometry(roadCurve, 64, 2.8, 8, false);
    const roadMat = new THREE.MeshStandardMaterial({ color: 0x141824, roughness: 0.9 });
    const roadMesh = new THREE.Mesh(roadGeo, roadMat);
    roadMesh.position.y = -0.1;
    scene.add(roadMesh);

    // Golden road center stripe
    const stripeGeo = new THREE.TubeGeometry(roadCurve, 64, 0.08, 6, false);
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0xe5b061, emissive: 0xe5b061, emissiveIntensity: 0.8 });
    const stripeMesh = new THREE.Mesh(stripeGeo, stripeMat);
    stripeMesh.position.y = 0.05;
    scene.add(stripeMesh);

    // Mountain silhouettes
    const mountainGeo = new THREE.ConeGeometry(28, 55, 5);
    const mountainMat = new THREE.MeshStandardMaterial({ color: 0x090f1d, flatShading: true });
    for (let i = 0; i < 20; i++) {
      const mt = new THREE.Mesh(mountainGeo, mountainMat);
      const side = i % 2 === 0 ? 1 : -1;
      mt.position.set(side * (32 + Math.random() * 30), 12, i * 5);
      mt.rotation.y = Math.random() * Math.PI;
      mt.scale.set(0.8 + Math.random() * 0.9, 0.7 + Math.random() * 0.7, 0.8 + Math.random() * 0.9);
      scene.add(mt);
    }

    // Zone 1 Cinematic Backdrop Plate
    textureLoader.load('/movie/scene1_mountain_road.jpg', (tex) => {
      const plateGeo = new THREE.PlaneGeometry(80, 45);
      const plateMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false });
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.position.set(0, 18, 50);
      plate.rotation.y = Math.PI;
      scene.add(plate);
    });

    // =========================================================================
    // ZONE 02: Shoolini University Quad & Classroom (Z: 95 to 195)
    // =========================================================================
    const quadPavementGeo = new THREE.PlaneGeometry(36, 100);
    const quadPavementMat = new THREE.MeshStandardMaterial({ color: 0x121722, roughness: 0.8 });
    const quadPavement = new THREE.Mesh(quadPavementGeo, quadPavementMat);
    quadPavement.rotation.x = -Math.PI / 2;
    quadPavement.position.set(0, -0.05, 145);
    scene.add(quadPavement);

    // Collegiate Colonnade Columns & Archways
    const colGeo = new THREE.CylinderGeometry(0.65, 0.65, 15, 16);
    const colMat = new THREE.MeshStandardMaterial({ color: 0x1e2738, roughness: 0.6 });
    for (let z = 105; z <= 185; z += 16) {
      const colL = new THREE.Mesh(colGeo, colMat);
      colL.position.set(-13, 7.5, z);
      scene.add(colL);

      const colR = new THREE.Mesh(colGeo, colMat);
      colR.position.set(13, 7.5, z);
      scene.add(colR);

      const lintelGeo = new THREE.BoxGeometry(28, 1.2, 1.8);
      const lintel = new THREE.Mesh(lintelGeo, colMat);
      lintel.position.set(0, 15, z);
      scene.add(lintel);
    }

    // Classroom Lecture Desk & Study Chair at Z = 145
    const deskGroup = new THREE.Group();
    deskGroup.position.set(0, 0, 145);
    
    // Wooden Desk
    const deskWoodMat = new THREE.MeshStandardMaterial({ color: 0x3d271d, roughness: 0.7 });
    const deskTop = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.08, 1.2), deskWoodMat);
    deskTop.position.set(0, 0.75, 0);
    deskGroup.add(deskTop);
    
    // Metal legs
    const deskLegMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.3 });
    const dl1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.75, 8), deskLegMat);
    dl1.position.set(-1.1, 0.375, -0.5);
    const dl2 = dl1.clone(); dl2.position.set(1.1, 0.375, -0.5);
    const dl3 = dl1.clone(); dl3.position.set(-1.1, 0.375, 0.5);
    const dl4 = dl1.clone(); dl4.position.set(1.1, 0.375, 0.5);
    deskGroup.add(dl1, dl2, dl3, dl4);

    // Open Study Notebook & Pen on desk
    const notebook = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.02, 0.45), new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.9 }));
    notebook.position.set(0, 0.8, 0);
    notebook.rotation.y = 0.15;
    deskGroup.add(notebook);

    // Chair
    const chairGroup = new THREE.Group();
    const chairSeat = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.06, 0.55), deskWoodMat);
    chairSeat.position.set(0, 0.48, -0.55);
    const chairBack = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.5, 0.05), deskWoodMat);
    chairBack.position.set(0, 0.75, -0.8);
    chairGroup.add(chairSeat, chairBack);
    deskGroup.add(chairGroup);
    scene.add(deskGroup);

    // Zone 2 Cinematic Backdrop Plate
    textureLoader.load('/movie/scene2_university.jpg', (tex) => {
      const plateGeo = new THREE.PlaneGeometry(80, 45);
      const plateMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false });
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.position.set(0, 18, 170);
      plate.rotation.y = Math.PI;
      scene.add(plate);
    });

    // =========================================================================
    // ZONE 03: Cybernetic R&D Computer Lab (Z: 195 to 295)
    // =========================================================================
    const labFloorGeo = new THREE.PlaneGeometry(38, 100);
    const labFloorMat = new THREE.MeshStandardMaterial({ color: 0x070e1b, roughness: 0.25, metalness: 0.8 });
    const labFloor = new THREE.Mesh(labFloorGeo, labFloorMat);
    labFloor.rotation.x = -Math.PI / 2;
    labFloor.position.set(0, -0.05, 245);
    scene.add(labFloor);

    // Glowing server racks
    const serverGeo = new THREE.BoxGeometry(2, 9, 2);
    const serverMat = new THREE.MeshStandardMaterial({ color: 0x0c1322, roughness: 0.4 });
    const serverLedMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x38bdf8, emissiveIntensity: 1.5 });
    
    for (let z = 205; z <= 285; z += 12) {
      const sL = new THREE.Mesh(serverGeo, serverMat);
      sL.position.set(-11, 4.5, z);
      scene.add(sL);

      const ledL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 7, 1.4), serverLedMat);
      ledL.position.set(-9.9, 4.5, z);
      scene.add(ledL);

      const sR = new THREE.Mesh(serverGeo, serverMat);
      sR.position.set(11, 4.5, z);
      scene.add(sR);

      const ledR = new THREE.Mesh(new THREE.BoxGeometry(0.1, 7, 1.4), serverLedMat);
      ledR.position.set(9.9, 4.5, z);
      scene.add(ledR);
    }

    // Workstation Desk at Z = 245 with glowing ultrawide monitors
    const labWorkstation = new THREE.Group();
    labWorkstation.position.set(0, 0, 245);
    const labDeskTop = new THREE.Mesh(new THREE.BoxGeometry(3, 0.08, 1.4), new THREE.MeshStandardMaterial({ color: 0x0a101d, metalness: 0.9, roughness: 0.3 }));
    labDeskTop.position.set(0, 0.75, 0);
    labWorkstation.add(labDeskTop);

    // Dual Glowing Monitors
    const monMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x38bdf8, emissiveIntensity: 1.2 });
    const screen1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.65, 0.04), monMat);
    screen1.position.set(-0.65, 1.25, 0.4);
    screen1.rotation.y = 0.15;
    const screen2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.65, 0.04), monMat);
    screen2.position.set(0.65, 1.25, 0.4);
    screen2.rotation.y = -0.15;
    labWorkstation.add(screen1, screen2);
    scene.add(labWorkstation);

    // Zone 3 Cinematic Backdrop Plate
    textureLoader.load('/movie/scene3_computer_lab.jpg', (tex) => {
      const plateGeo = new THREE.PlaneGeometry(80, 45);
      const plateMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false });
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.position.set(0, 18, 270);
      plate.rotation.y = Math.PI;
      scene.add(plate);
    });

    // =========================================================================
    // ZONE 04: The Creation & 6 Project Portals (Z: 295 to 445)
    // =========================================================================
    const foundryCenterZ = 370;

    // Central illuminated reactor core
    const reactorCoreGeo = new THREE.SphereGeometry(6, 32, 32);
    const reactorCoreMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.6,
      wireframe: true
    });
    const reactorCore = new THREE.Mesh(reactorCoreGeo, reactorCoreMat);
    reactorCore.position.set(0, 14, foundryCenterZ);
    scene.add(reactorCore);

    // Surrounding energy rings
    const ring1Geo = new THREE.TorusGeometry(10, 0.25, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xe5b061, emissive: 0xe5b061, emissiveIntensity: 0.9 });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat);
    ring1.position.copy(reactorCore.position);
    scene.add(ring1);

    const ring2 = new THREE.Mesh(ring1Geo, ringMat);
    ring2.position.copy(reactorCore.position);
    ring2.rotation.x = Math.PI / 2;
    scene.add(ring2);

    // 6 Interactive Project Monolith Portals around the central foundry
    const projectPortals: { mesh: THREE.Mesh; slug: string; title: string }[] = [];
    const projectList = [
      { slug: 'campusos-ai', title: 'CampusOS AI (Flagship)', color: 0xe5b061, x: -14, z: 335 },
      { slug: 'gyanix', title: 'Gyanix (Socratic AI)', color: 0x38bdf8, x: 14, z: 335 },
      { slug: 'civiclens', title: 'CivicLens (Spatial AI)', color: 0x10b981, x: -16, z: 375 },
      { slug: 'agentic-rag-engine', title: 'Agentic RAG Engine', color: 0x06b6d4, x: 16, z: 375 },
      { slug: 'zeneth-crop-expert', title: 'ZENETH (Native C++)', color: 0xf43f5e, x: -13, z: 415 },
      { slug: 'financial-advisor-ai', title: 'Financial Advisor AI', color: 0xf59e0b, x: 13, z: 415 }
    ];

    projectList.forEach((p) => {
      const portalGeo = new THREE.BoxGeometry(4.5, 7.5, 0.8);
      const portalMat = new THREE.MeshStandardMaterial({
        color: 0x091224,
        emissive: p.color,
        emissiveIntensity: 0.35,
        roughness: 0.3,
        metalness: 0.8
      });
      const portalMesh = new THREE.Mesh(portalGeo, portalMat);
      portalMesh.position.set(p.x, 4, p.z);
      portalMesh.castShadow = true;
      scene.add(portalMesh);

      const rimGeo = new THREE.BoxGeometry(4.7, 7.7, 0.85);
      const rimMat = new THREE.MeshStandardMaterial({ color: p.color, emissive: p.color, emissiveIntensity: 0.8, wireframe: true });
      const rim = new THREE.Mesh(rimGeo, rimMat);
      portalMesh.add(rim);

      projectPortals.push({ mesh: portalMesh, slug: p.slug, title: p.title });
    });

    // Zone 4 Cinematic Backdrop Plate (CampusOS Engineering)
    textureLoader.load('/movie/scene4_campusos.jpg', (tex) => {
      const plateGeo = new THREE.PlaneGeometry(80, 45);
      const plateMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false });
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.position.set(0, 18, 410);
      plate.rotation.y = Math.PI;
      scene.add(plate);
    });

    // =========================================================================
    // ZONE 05: Professional Journey - Corizo/IIT Bombay Robotics & IoT (Z: 445 to 545)
    // =========================================================================
    for (let k = 0; k < 3; k++) {
      const moduleZ = 465 + k * 30;
      const podGeo = new THREE.CylinderGeometry(7, 7, 8, 16, 1, true);
      const podMat = new THREE.MeshStandardMaterial({ 
        color: k === 0 ? 0x10b981 : 0x1e293b, 
        wireframe: true,
        emissive: k === 0 ? 0x10b981 : 0x000000,
        emissiveIntensity: 0.4
      });
      const pod = new THREE.Mesh(podGeo, podMat);
      pod.position.set(0, 4, moduleZ);
      scene.add(pod);
    }

    // Articulated Robotic Arm & IoT Circuit Workbench at Z = 495
    const roboticsBench = new THREE.Group();
    roboticsBench.position.set(0, 0, 495);
    const benchTop = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.1, 1.4), new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7 }));
    benchTop.position.set(0, 0.8, 0);
    roboticsBench.add(benchTop);

    // Robotic arm base & joints
    const armBase = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 0.2, 16), new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9 }));
    armBase.position.set(0.6, 0.95, 0);
    const armSegment1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.8, 8), new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.6 }));
    armSegment1.position.set(0.6, 1.45, 0.1);
    armSegment1.rotation.x = 0.4;
    const armSegment2 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.7, 8), new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.6 }));
    armSegment2.position.set(0.6, 1.9, -0.15);
    armSegment2.rotation.x = -0.5;
    roboticsBench.add(armBase, armSegment1, armSegment2);

    // Glowing green IoT microcontroller board
    const iotBoard = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.02, 0.5), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x10b981, emissiveIntensity: 0.9 }));
    iotBoard.position.set(-0.5, 0.86, 0);
    roboticsBench.add(iotBoard);
    scene.add(roboticsBench);

    // Zone 5 Cinematic Backdrop Plate (Robotics & IoT Lab)
    textureLoader.load('/movie/scene5_robotics.jpg', (tex) => {
      const plateGeo = new THREE.PlaneGeometry(80, 45);
      const plateMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false });
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.position.set(0, 18, 520);
      plate.rotation.y = Math.PI;
      scene.add(plate);
    });

    // =========================================================================
    // ZONE 06: Mountain Summit & Anveshan Hackathon (Z: 545 to 635)
    // =========================================================================
    const summitGeo = new THREE.ConeGeometry(40, 26, 8);
    const summitMat = new THREE.MeshStandardMaterial({ color: 0x0d1424, flatShading: true });
    const summit = new THREE.Mesh(summitGeo, summitMat);
    summit.position.set(0, 0, 595);
    scene.add(summit);

    // Glowing Achievement Monolith (Anveshan Round 2 Milestone)
    const monolithGeo = new THREE.BoxGeometry(3, 8, 1.2);
    const monolithMat = new THREE.MeshStandardMaterial({ 
      color: 0x8b5cf6, 
      emissive: 0x8b5cf6, 
      emissiveIntensity: 0.8 
    });
    const monolith = new THREE.Mesh(monolithGeo, monolithMat);
    monolith.position.set(0, 16.5, 595);
    scene.add(monolith);

    // Zone 6 Cinematic Backdrop Plate (Mountain Summit at Dawn)
    textureLoader.load('/movie/scene6_summit.jpg', (tex) => {
      const plateGeo = new THREE.PlaneGeometry(80, 45);
      const plateMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false });
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.position.set(0, 24, 615);
      plate.rotation.y = Math.PI;
      scene.add(plate);
    });

    // =========================================================================
    // ZONE 07: The Destination - Futuristic Skyline at Sunrise (Z: 635 to 730)
    // =========================================================================
    for (let t = 0; t < 30; t++) {
      const h = 28 + Math.random() * 55;
      const towerGeo = new THREE.BoxGeometry(6 + Math.random() * 8, h, 6 + Math.random() * 8);
      const towerMat = new THREE.MeshStandardMaterial({ 
        color: 0x081122, 
        emissive: 0x38bdf8, 
        emissiveIntensity: 0.15 + Math.random() * 0.25,
        roughness: 0.3
      });
      const tower = new THREE.Mesh(towerGeo, towerMat);
      const tx = (Math.random() - 0.5) * 120;
      const tz = 690 + Math.random() * 80;
      tower.position.set(tx, h / 2, tz);
      scene.add(tower);
    }

    // Rooftop Observation Deck
    const deckGeo = new THREE.BoxGeometry(24, 2, 30);
    const deckMat = new THREE.MeshStandardMaterial({ color: 0x121a2c, roughness: 0.5 });
    const deck = new THREE.Mesh(deckGeo, deckMat);
    deck.position.set(0, 8.5, 670);
    scene.add(deck);

    // Glass safety railing on terrace
    const railMat = new THREE.MeshPhysicalMaterial({ color: 0x93c5fd, transmission: 0.8, transparent: true, opacity: 0.5, roughness: 0.1 });
    const railFront = new THREE.Mesh(new THREE.BoxGeometry(24, 1.2, 0.1), railMat);
    railFront.position.set(0, 10.1, 684.8);
    scene.add(railFront);

    // Zone 7 Cinematic Backdrop Plate (Metropolis Rooftop Sunrise)
    textureLoader.load('/movie/scene7_city_sunrise.jpg', (tex) => {
      const plateGeo = new THREE.PlaneGeometry(90, 50);
      const plateMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false });
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.position.set(0, 24, 715);
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

      const monoIntersects = raycaster.intersectObject(monolith);
      if (monoIntersects.length > 0) {
        setIsCertificateModalOpen(true);
      }
    };

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);

    // =========================================================================
    // Main Cinema Loop & Character Skeletal Animation
    // =========================================================================
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const p = progressRef.current; // 0.0 to 1.0

      // Map progress to world coordinate Z (0 to 680)
      const currentZ = p * 680;

      // Determine Krishna's action, posture, and position depending on zone
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

      if (p < 0.14) {
        // ZONE 01: Lonely Mountain Road at Sunrise
        // Krishna walks on the road facing the horizon, stops to gaze
        animState.action = 'walk';
        charZ = currentZ + 12;
        charX = Math.sin(charZ * 0.04) * 2.2;
        charY = 0;
        charRotY = 0;
        animState.headTurn = Math.sin(time * 0.8) * 0.25; // glancing at mountains
      } 
      else if (p >= 0.14 && p < 0.28) {
        // ZONE 02: Shoolini University Quad & Classroom
        if (p < 0.21) {
          // Walking through colonnade archway
          animState.action = 'walk';
          charZ = currentZ + 10;
          charX = 0;
          charY = 0;
          charRotY = 0;
        } else {
          // Seated at study desk with notebook
          animState.action = 'sit_study';
          charZ = 145 - 0.45;
          charX = 0;
          charY = 0;
          charRotY = Math.PI; // facing desk and forward
          animState.lookUp = -0.25; // looking down at study notes
        }
      } 
      else if (p >= 0.28 && p < 0.42) {
        // ZONE 03: Cybernetic R&D Computer Lab
        if (p < 0.35) {
          // Walking into lab
          animState.action = 'walk';
          charZ = currentZ + 10;
          charX = 0;
          charY = 0;
          charRotY = 0;
        } else {
          // Seated at dual-monitor workstation typing code
          animState.action = 'type_code';
          charZ = 245 - 0.45;
          charX = 0;
          charY = 0;
          charRotY = Math.PI;
          animState.headTurn = Math.sin(time * 1.5) * 0.2; // glancing between dual monitors
        }
      } 
      else if (p >= 0.42 && p < 0.65) {
        // ZONE 04: The Creation & 6 Project Portals
        if (p < 0.52) {
          // Working at CampusOS multi-monitor foundry
          animState.action = 'work_campusos';
          charZ = 335;
          charX = -5;
          charY = 0;
          charRotY = 0.5;
        } else {
          // Inspecting project portals with arm gesture
          animState.action = 'inspect_projects';
          charZ = currentZ + 8;
          charX = Math.sin(charZ * 0.05) * 6;
          charY = 0;
          charRotY = -0.4;
          animState.armReach = 0.8;
        }
      } 
      else if (p >= 0.65 && p < 0.78) {
        // ZONE 05: Corizo / IIT Bombay Robotics & IoT Lab
        animState.action = 'inspect_robotics';
        charZ = 495 - 0.7;
        charX = -0.5;
        charY = 0;
        charRotY = 0.3;
        animState.armReach = 0.9;
        animState.lookUp = -0.15;
      } 
      else if (p >= 0.78 && p < 0.88) {
        // ZONE 06: Mountain Summit at Dawn (Anveshan Milestone)
        animState.action = 'summit_view';
        charZ = 595 - 2;
        charX = 0;
        charY = 13.5; // On the mountain peak
        charRotY = 0;
        animState.lookUp = 0.15; // Gazing upward at achievement monolith
      } 
      else {
        // ZONE 07: Futuristic Metropolis Skyline at Sunrise
        animState.action = 'future_look';
        charZ = 675;
        charX = 0;
        charY = 9.5; // Rooftop deck elevation
        charRotY = 0; // Looking out over skyline
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

      if (p >= 0.78 && p < 0.88) {
        // Summit elevation
        camTargetY = 16.5;
        camTargetZ = 582;
        camTargetX = Math.sin(time * 0.3) * 6;
      } else if (p >= 0.88) {
        // Rooftop observation elevation
        camTargetY = 11.5;
        camTargetZ = 660;
        camTargetX = Math.sin(time * 0.25) * 4;
      }

      camera.position.x += (camTargetX - camera.position.x) * 0.08;
      camera.position.y += (camTargetY - camera.position.y) * 0.08;
      camera.position.z += (camTargetZ - camera.position.z) * 0.1;

      // Camera looks directly at Krishna with slight forward offset
      const lookAtTarget = new THREE.Vector3(charX * 0.5, charY + 1.6, charZ + 8);
      camera.lookAt(lookAtTarget);

      // Dynamic light tracking protagonist
      pointLight.position.set(charX, charY + 4, charZ + 2);

      // Reactor ring rotation in Foundry
      ring1.rotation.z = time * 0.4;
      ring2.rotation.y = time * 0.35;
      reactorCore.rotation.y = time * 0.2;

      // Monolith floating rotation in Zone 6
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
