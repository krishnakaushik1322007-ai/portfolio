'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useMovie } from '@/context/MovieContext';

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

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060b18, 0.006);

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
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Lighting System
    const ambientLight = new THREE.AmbientLight(0x223355, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffddaa, 2.5);
    sunLight.position.set(20, 60, -50);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 3, 150);
    scene.add(pointLight);

    // 3. The Protagonist Traveler (Stylized Faceless Adventurer Silhouette)
    const travelerGroup = new THREE.Group();
    
    // Head / Hood
    const headGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const headMat = new THREE.MeshStandardMaterial({ color: 0x111625, roughness: 0.8 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 1.8;
    travelerGroup.add(head);

    // Body / Trench Coat
    const coatGeo = new THREE.CylinderGeometry(0.25, 0.55, 1.3, 16);
    const coatMat = new THREE.MeshStandardMaterial({ color: 0x0a0f1d, roughness: 0.6 });
    const coat = new THREE.Mesh(coatGeo, coatMat);
    coat.position.y = 1.0;
    coat.castShadow = true;
    travelerGroup.add(coat);

    // Golden Scarf / Collar accent
    const scarfGeo = new THREE.TorusGeometry(0.3, 0.08, 8, 16);
    const scarfMat = new THREE.MeshStandardMaterial({ color: 0xe5b061, emissive: 0xe5b061, emissiveIntensity: 0.4 });
    const scarf = new THREE.Mesh(scarfGeo, scarfMat);
    scarf.rotation.x = Math.PI / 2;
    scarf.position.y = 1.6;
    travelerGroup.add(scarf);

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.9, 8);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x050811, roughness: 0.9 });
    const leftLeg = new THREE.Mesh(legGeo, legMat);
    leftLeg.position.set(-0.16, 0.45, 0);
    const rightLeg = new THREE.Mesh(legGeo, legMat);
    rightLeg.position.set(0.16, 0.45, 0);
    travelerGroup.add(leftLeg);
    travelerGroup.add(rightLeg);

    scene.add(travelerGroup);

    // 4. ZONE 01: Mountain Road at Dawn (Z: 0 to 90)
    const roadCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(4, 0, 30),
      new THREE.Vector3(-3, 0, 60),
      new THREE.Vector3(0, 0, 90)
    ]);
    const roadGeo = new THREE.TubeGeometry(roadCurve, 64, 2.5, 8, false);
    const roadMat = new THREE.MeshStandardMaterial({ color: 0x161c28, roughness: 0.9 });
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
    const mountainGeo = new THREE.ConeGeometry(25, 45, 5);
    const mountainMat = new THREE.MeshStandardMaterial({ color: 0x0a1020, flatShading: true });
    for (let i = 0; i < 18; i++) {
      const mt = new THREE.Mesh(mountainGeo, mountainMat);
      const side = i % 2 === 0 ? 1 : -1;
      mt.position.set(side * (30 + Math.random() * 25), 10, i * 6);
      mt.rotation.y = Math.random() * Math.PI;
      mt.scale.set(0.8 + Math.random() * 0.8, 0.7 + Math.random() * 0.6, 0.8 + Math.random() * 0.8);
      scene.add(mt);
    }

    // 5. ZONE 02: The Foundation - Shoolini University Quad (Z: 90 to 190)
    const quadPavementGeo = new THREE.PlaneGeometry(36, 100);
    const quadPavementMat = new THREE.MeshStandardMaterial({ color: 0x141824, roughness: 0.8 });
    const quadPavement = new THREE.Mesh(quadPavementGeo, quadPavementMat);
    quadPavement.rotation.x = -Math.PI / 2;
    quadPavement.position.set(0, -0.05, 140);
    scene.add(quadPavement);

    // Collegiate Colonnade Columns
    const colGeo = new THREE.CylinderGeometry(0.7, 0.7, 14, 16);
    const colMat = new THREE.MeshStandardMaterial({ color: 0x222a3d, roughness: 0.6 });
    for (let z = 100; z <= 180; z += 16) {
      const colL = new THREE.Mesh(colGeo, colMat);
      colL.position.set(-14, 7, z);
      scene.add(colL);

      const colR = new THREE.Mesh(colGeo, colMat);
      colR.position.set(14, 7, z);
      scene.add(colR);

      // Connecting arch lintels
      const lintelGeo = new THREE.BoxGeometry(30, 1.2, 2);
      const lintel = new THREE.Mesh(lintelGeo, colMat);
      lintel.position.set(0, 14, z);
      scene.add(lintel);
    }

    // 6. ZONE 03: The Awakening - Cybernetic Lab (Z: 190 to 290)
    const labFloorGeo = new THREE.PlaneGeometry(40, 100);
    const labFloorMat = new THREE.MeshStandardMaterial({ 
      color: 0x050c18, 
      roughness: 0.2, 
      metalness: 0.8 
    });
    const labFloor = new THREE.Mesh(labFloorGeo, labFloorMat);
    labFloor.rotation.x = -Math.PI / 2;
    labFloor.position.set(0, -0.05, 240);
    scene.add(labFloor);

    // Glowing server towers
    const serverGeo = new THREE.BoxGeometry(2, 9, 2);
    const serverMat = new THREE.MeshStandardMaterial({ color: 0x0d1629, roughness: 0.4 });
    const serverLedMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x38bdf8, emissiveIntensity: 1.5 });
    
    for (let z = 200; z <= 280; z += 12) {
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

    // 7. ZONE 04: The Creation - Massive Foundry & 6 Project Portals (Z: 290 to 440)
    const foundryCenterZ = 365;

    // Central illuminated reactor sphere
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
      { slug: 'campusos-ai', title: 'CampusOS AI (Flagship)', color: 0xe5b061, x: -14, z: 330 },
      { slug: 'gyanix', title: 'Gyanix (Socratic AI)', color: 0x38bdf8, x: 14, z: 330 },
      { slug: 'civiclens', title: 'CivicLens (Spatial AI)', color: 0x10b981, x: -16, z: 370 },
      { slug: 'agentic-rag-engine', title: 'Agentic RAG Engine', color: 0x06b6d4, x: 16, z: 370 },
      { slug: 'zeneth-crop-expert', title: 'ZENETH (Native C++)', color: 0xf43f5e, x: -13, z: 410 },
      { slug: 'financial-advisor-ai', title: 'Financial Advisor AI', color: 0xf59e0b, x: 13, z: 410 }
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

      // Glowing outer rim
      const rimGeo = new THREE.BoxGeometry(4.7, 7.7, 0.85);
      const rimMat = new THREE.MeshStandardMaterial({ color: p.color, emissive: p.color, emissiveIntensity: 0.8, wireframe: true });
      const rim = new THREE.Mesh(rimGeo, rimMat);
      portalMesh.add(rim);

      projectPortals.push({ mesh: portalMesh, slug: p.slug, title: p.title });
    });

    // 8. ZONE 05: Professional Journey - Corizo/IIT Bombay Facility (Z: 440 to 540)
    for (let k = 0; k < 3; k++) {
      const moduleZ = 460 + k * 30;
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

    // 9. ZONE 06: The Milestones - Mountain Summit (Z: 540 to 630)
    const summitGeo = new THREE.ConeGeometry(40, 25, 8);
    const summitMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, flatShading: true });
    const summit = new THREE.Mesh(summitGeo, summitMat);
    summit.position.set(0, 0, 590);
    scene.add(summit);

    // Glowing Achievement Monolith
    const monolithGeo = new THREE.BoxGeometry(3, 8, 1.2);
    const monolithMat = new THREE.MeshStandardMaterial({ 
      color: 0x8b5cf6, 
      emissive: 0x8b5cf6, 
      emissiveIntensity: 0.7 
    });
    const monolith = new THREE.Mesh(monolithGeo, monolithMat);
    monolith.position.set(0, 16, 590);
    scene.add(monolith);

    // 10. ZONE 07: The Destination - Futuristic Metropolis Skyline (Z: 630 to 720)
    // Tower skyscrapers on horizon
    for (let t = 0; t < 28; t++) {
      const h = 25 + Math.random() * 50;
      const towerGeo = new THREE.BoxGeometry(6 + Math.random() * 8, h, 6 + Math.random() * 8);
      const towerMat = new THREE.MeshStandardMaterial({ 
        color: 0x091428, 
        emissive: 0x38bdf8, 
        emissiveIntensity: 0.15 + Math.random() * 0.25,
        roughness: 0.3
      });
      const tower = new THREE.Mesh(towerGeo, towerMat);
      const tx = (Math.random() - 0.5) * 110;
      const tz = 680 + Math.random() * 70;
      tower.position.set(tx, h / 2, tz);
      scene.add(tower);
    }

    // Rooftop Observation Deck
    const deckGeo = new THREE.BoxGeometry(22, 2, 28);
    const deckMat = new THREE.MeshStandardMaterial({ color: 0x141f33, roughness: 0.5 });
    const deck = new THREE.Mesh(deckGeo, deckMat);
    deck.position.set(0, 8, 665);
    scene.add(deck);

    // 11. Raycaster for clicking project portals in 3D
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

      // Check monolith click for Certificate in Scene 06
      const monoIntersects = raycaster.intersectObject(monolith);
      if (monoIntersects.length > 0) {
        setIsCertificateModalOpen(true);
      }
    };

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);

    // 12. Main Animation & Render Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();
      const p = progressRef.current; // 0.0 to 1.0

      // Map progress to world Z position along spline (0 to 690)
      const currentZ = p * 680;

      // Traveler walk animation & positioning
      const walkSpeed = 8;
      const legAngle = Math.sin(time * walkSpeed) * 0.45;
      leftLeg.rotation.x = legAngle;
      rightLeg.rotation.x = -legAngle;
      coat.position.y = 1.0 + Math.abs(Math.sin(time * walkSpeed)) * 0.06;

      // Traveler leads camera by 16 units forward
      const charZ = Math.min(672, currentZ + 15);
      const charX = Math.sin(charZ * 0.04) * 2.5;
      const charY = (currentZ > 530 && currentZ < 630) ? (currentZ - 530) * 0.15 : (currentZ >= 630 ? 9.5 : 0);

      travelerGroup.position.set(charX, charY, charZ);
      travelerGroup.rotation.y = Math.cos(charZ * 0.04) * 0.2;

      // Camera Dolly & Follow Kinematics
      const camTargetZ = currentZ;
      const camTargetX = Math.sin(currentZ * 0.035) * 4.5;
      const camTargetY = (currentZ > 530 && currentZ < 630) 
        ? 6 + (currentZ - 530) * 0.18 
        : (currentZ >= 630 ? 12 : 3.8);

      camera.position.x += (camTargetX - camera.position.x) * 0.08;
      camera.position.y += (camTargetY - camera.position.y) * 0.08;
      camera.position.z += (camTargetZ - camera.position.z) * 0.1;

      // Dynamic lookAt point (focusing on traveler and horizon ahead)
      const lookAtTarget = new THREE.Vector3(charX * 0.5, charY + 1.6, charZ + 12);
      camera.lookAt(lookAtTarget);

      // Light tracking
      pointLight.position.set(charX, charY + 4, charZ + 2);

      // Reactor ring rotation in Foundry
      ring1.rotation.z = time * 0.4;
      ring2.rotation.y = time * 0.35;
      reactorCore.rotation.y = time * 0.2;

      // Rotate monolith in Scene 06
      monolith.rotation.y = time * 0.5;

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
