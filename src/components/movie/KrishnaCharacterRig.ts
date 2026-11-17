'use client';

import * as THREE from 'three';

export interface KrishnaAnimationState {
  action: 'walk' | 'sit_study' | 'type_code' | 'work_campusos' | 'inspect_projects' | 'inspect_robotics' | 'summit_view' | 'future_look';
  headTurn: number; // -1 to 1 (left to right)
  armReach: number; // 0 to 1
  lookUp: number; // -1 to 1 (down to up)
}

interface BoneTransform {
  pos: THREE.Vector3;
  rot: THREE.Euler;
}

export class KrishnaCharacterRig {
  public group: THREE.Group;
  
  // Skeleton Bones / Joint nodes
  public rootBone: THREE.Group;
  public pelvisBone: THREE.Group;
  public spineBone: THREE.Group;
  public chestBone: THREE.Group;
  public neckBone: THREE.Group;
  public headBone: THREE.Group;

  public leftShoulder: THREE.Group;
  public leftUpperArm: THREE.Group;
  public leftForearm: THREE.Group;
  public leftHand: THREE.Group;

  public rightShoulder: THREE.Group;
  public rightUpperArm: THREE.Group;
  public rightForearm: THREE.Group;
  public rightHand: THREE.Group;

  public leftHip: THREE.Group;
  public leftThigh: THREE.Group;
  public leftShin: THREE.Group;
  public leftFoot: THREE.Group;

  public rightHip: THREE.Group;
  public rightThigh: THREE.Group;
  public rightShin: THREE.Group;
  public rightFoot: THREE.Group;

  // Meshes & Props
  private headMesh: THREE.Mesh;
  private leftEyelid: THREE.Mesh;
  private rightEyelid: THREE.Mesh;
  private hairGroup: THREE.Group;
  private glassesGroup: THREE.Group;
  private coatTailsMesh: THREE.Mesh;
  private laptopMesh: THREE.Group;

  // Blending & Smoothing State (Prevents abrupt animation snapping)
  private boneTargets: Map<THREE.Group, BoneTransform> = new Map();
  private lastBlinkTime: number = 0;
  private isBlinking: boolean = false;
  private textureLoader = new THREE.TextureLoader();

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'Krishna_Character';

    // Premium Materials with Subsurface & Specular Qualities
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xdeb887,
      roughness: 0.55,
      metalness: 0.05
    });

    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x110d0a,
      roughness: 0.8,
      metalness: 0.15
    });

    const turtleneckMat = new THREE.MeshStandardMaterial({
      color: 0x06080e,
      roughness: 0.85
    });

    const coatMat = new THREE.MeshStandardMaterial({
      color: 0x0a0c13,
      roughness: 0.5,
      metalness: 0.15
    });

    const scarfMat = new THREE.MeshStandardMaterial({
      color: 0x272e3b,
      roughness: 0.88
    });

    const silverMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.95,
      roughness: 0.15
    });

    const glassesLensMat = new THREE.MeshPhysicalMaterial({
      color: 0xffedd5,
      transmission: 0.8,
      opacity: 0.9,
      transparent: true,
      roughness: 0.08,
      ior: 1.52,
      reflectivity: 0.6
    });

    const pantsMat = new THREE.MeshStandardMaterial({
      color: 0x07080c,
      roughness: 0.75
    });

    const bootMat = new THREE.MeshStandardMaterial({
      color: 0x030407,
      roughness: 0.25,
      metalness: 0.4
    });

    // 1. Root & Pelvis
    this.rootBone = new THREE.Group();
    this.group.add(this.rootBone);

    this.pelvisBone = new THREE.Group();
    this.pelvisBone.position.y = 0.98;
    this.rootBone.add(this.pelvisBone);

    const pelvisMesh = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.2, 0.22), pantsMat);
    this.pelvisBone.add(pelvisMesh);

    // 2. Spine & Torso
    this.spineBone = new THREE.Group();
    this.spineBone.position.y = 0.12;
    this.pelvisBone.add(this.spineBone);

    const spineMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.25, 12), turtleneckMat);
    spineMesh.position.y = 0.125;
    this.spineBone.add(spineMesh);

    this.chestBone = new THREE.Group();
    this.chestBone.position.y = 0.25;
    this.spineBone.add(this.chestBone);

    const chestMesh = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.32, 0.24), coatMat);
    chestMesh.position.y = 0.16;
    chestMesh.castShadow = true;
    this.chestBone.add(chestMesh);

    // Dark grey wool scarf wrapped around neck/chest
    const scarfMesh = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.052, 8, 16), scarfMat);
    scarfMesh.rotation.x = Math.PI / 2;
    scarfMesh.position.set(0, 0.32, 0.02);
    this.chestBone.add(scarfMesh);

    // Silver rectangular pendant necklace
    const pendant = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.045, 0.008), silverMat);
    pendant.position.set(0, 0.2, 0.13);
    this.chestBone.add(pendant);

    // Trench coat lower tails with natural flare
    const coatTailsGeo = new THREE.CylinderGeometry(0.22, 0.34, 0.72, 14, 1, true);
    this.coatTailsMesh = new THREE.Mesh(coatTailsGeo, coatMat);
    this.coatTailsMesh.position.set(0, -0.28, 0);
    this.pelvisBone.add(this.coatTailsMesh);

    // 3. Neck & Head
    this.neckBone = new THREE.Group();
    this.neckBone.position.y = 0.34;
    this.chestBone.add(this.neckBone);

    const neckMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.12, 12), turtleneckMat);
    neckMesh.position.y = 0.06;
    this.neckBone.add(neckMesh);

    this.headBone = new THREE.Group();
    this.headBone.position.y = 0.12;
    this.neckBone.add(this.headBone);

    // Realistic Head Mesh with face texture
    const headGeo = new THREE.SphereGeometry(0.18, 28, 28);
    headGeo.scale(0.85, 1.05, 0.95);
    
    this.textureLoader.load(
      '/krishna_kaushik.jpg',
      (tex) => {
        tex.wrapS = THREE.ClampToEdgeWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        tex.center.set(0.5, 0.5);
        tex.repeat.set(1.1, 1.1);
        skinMat.map = tex;
        skinMat.needsUpdate = true;
      },
      undefined,
      () => {}
    );

    this.headMesh = new THREE.Mesh(headGeo, skinMat);
    this.headMesh.position.set(0, 0.14, 0);
    this.headMesh.castShadow = true;
    this.headBone.add(this.headMesh);

    // Blinking Eyelid Meshes
    const eyelidGeo = new THREE.SphereGeometry(0.046, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2);
    this.leftEyelid = new THREE.Mesh(eyelidGeo, skinMat);
    this.leftEyelid.position.set(-0.065, 0.155, 0.165);
    this.leftEyelid.rotation.x = -Math.PI / 2;
    this.leftEyelid.scale.set(1, 0.05, 1); // Open by default
    this.headBone.add(this.leftEyelid);

    this.rightEyelid = this.leftEyelid.clone();
    this.rightEyelid.position.set(0.065, 0.155, 0.165);
    this.headBone.add(this.rightEyelid);

    // Voluminous Wavy Dark Hair (Layered curls matching reference photo)
    this.hairGroup = new THREE.Group();
    
    // Top volume
    const hairTop = new THREE.Mesh(new THREE.SphereGeometry(0.19, 16, 16), hairMat);
    hairTop.scale.set(1.02, 0.68, 1.18);
    hairTop.position.set(0, 0.22, -0.02);
    this.hairGroup.add(hairTop);

    // Side curls
    const hairSideGeo = new THREE.SphereGeometry(0.125, 12, 12);
    const hairL = new THREE.Mesh(hairSideGeo, hairMat);
    hairL.position.set(-0.115, 0.18, -0.02);
    hairL.scale.set(0.9, 1.25, 0.9);
    const hairR = new THREE.Mesh(hairSideGeo, hairMat);
    hairR.position.set(0.115, 0.18, -0.02);
    hairR.scale.set(0.9, 1.25, 0.9);
    this.hairGroup.add(hairL, hairR);

    // Back hair volume
    const hairBack = new THREE.Mesh(new THREE.SphereGeometry(0.165, 12, 12), hairMat);
    hairBack.position.set(0, 0.12, -0.1);
    hairBack.scale.set(1.0, 1.15, 0.75);
    this.hairGroup.add(hairBack);

    this.headBone.add(this.hairGroup);

    // Silver Double-Bridge Wire-Rim Aviator Glasses
    this.glassesGroup = new THREE.Group();
    
    // Left Lens & Frame
    const lensGeo = new THREE.CylinderGeometry(0.046, 0.046, 0.005, 16);
    const lensL = new THREE.Mesh(lensGeo, glassesLensMat);
    lensL.rotation.x = Math.PI / 2;
    lensL.position.set(-0.065, 0.14, 0.17);
    const frameL = new THREE.Mesh(new THREE.TorusGeometry(0.047, 0.004, 8, 16), silverMat);
    frameL.position.copy(lensL.position);
    this.glassesGroup.add(lensL, frameL);

    // Right Lens & Frame
    const lensR = new THREE.Mesh(lensGeo, glassesLensMat);
    lensR.rotation.x = Math.PI / 2;
    lensR.position.set(0.065, 0.14, 0.17);
    const frameR = new THREE.Mesh(new THREE.TorusGeometry(0.047, 0.004, 8, 16), silverMat);
    frameR.position.copy(lensR.position);
    this.glassesGroup.add(lensR, frameR);

    // Double bridge bars
    const bridge1 = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.05, 8), silverMat);
    bridge1.rotation.z = Math.PI / 2;
    bridge1.position.set(0, 0.155, 0.17);
    const bridge2 = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.04, 8), silverMat);
    bridge2.rotation.z = Math.PI / 2;
    bridge2.position.set(0, 0.138, 0.17);
    this.glassesGroup.add(bridge1, bridge2);

    this.headBone.add(this.glassesGroup);

    // 4. Arms & Hands
    // Left Arm
    this.leftShoulder = new THREE.Group();
    this.leftShoulder.position.set(-0.21, 0.28, 0);
    this.chestBone.add(this.leftShoulder);

    this.leftUpperArm = new THREE.Group();
    this.leftShoulder.add(this.leftUpperArm);
    const upperArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.055, 0.28, 8), coatMat);
    upperArmL.position.y = -0.14;
    this.leftUpperArm.add(upperArmL);

    this.leftForearm = new THREE.Group();
    this.leftForearm.position.y = -0.28;
    this.leftUpperArm.add(this.leftForearm);
    const forearmL = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.048, 0.26, 8), coatMat);
    forearmL.position.y = -0.13;
    this.leftForearm.add(forearmL);

    this.leftHand = new THREE.Group();
    this.leftHand.position.y = -0.26;
    this.leftForearm.add(this.leftHand);
    const handL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.07, 0.03), skinMat);
    handL.position.y = -0.035;
    this.leftHand.add(handL);

    // Right Arm
    this.rightShoulder = new THREE.Group();
    this.rightShoulder.position.set(0.21, 0.28, 0);
    this.chestBone.add(this.rightShoulder);

    this.rightUpperArm = new THREE.Group();
    this.rightShoulder.add(this.rightUpperArm);
    const upperArmR = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.055, 0.28, 8), coatMat);
    upperArmR.position.y = -0.14;
    this.rightUpperArm.add(upperArmR);

    this.rightForearm = new THREE.Group();
    this.rightForearm.position.y = -0.28;
    this.rightUpperArm.add(this.rightForearm);
    const forearmR = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.048, 0.26, 8), coatMat);
    forearmR.position.y = -0.13;
    this.rightForearm.add(forearmR);

    this.rightHand = new THREE.Group();
    this.rightHand.position.y = -0.26;
    this.rightForearm.add(this.rightHand);
    const handR = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.07, 0.03), skinMat);
    handR.position.y = -0.035;
    this.rightHand.add(handR);

    // 5. Legs & Boots (Realistic proportions)
    // Left Leg
    this.leftHip = new THREE.Group();
    this.leftHip.position.set(-0.11, -0.08, 0);
    this.pelvisBone.add(this.leftHip);

    this.leftThigh = new THREE.Group();
    this.leftHip.add(this.leftThigh);
    const thighL = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.42, 8), pantsMat);
    thighL.position.y = -0.21;
    this.leftThigh.add(thighL);

    this.leftShin = new THREE.Group();
    this.leftShin.position.y = -0.42;
    this.leftThigh.add(this.leftShin);
    const shinL = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.048, 0.42, 8), pantsMat);
    shinL.position.y = -0.21;
    this.leftShin.add(shinL);

    this.leftFoot = new THREE.Group();
    this.leftFoot.position.y = -0.42;
    this.leftShin.add(this.leftFoot);
    const bootL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.18), bootMat);
    bootL.position.set(0, -0.04, 0.04);
    this.leftFoot.add(bootL);

    // Right Leg
    this.rightHip = new THREE.Group();
    this.rightHip.position.set(0.11, -0.08, 0);
    this.pelvisBone.add(this.rightHip);

    this.rightThigh = new THREE.Group();
    this.rightHip.add(this.rightThigh);
    const thighR = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.42, 8), pantsMat);
    thighR.position.y = -0.21;
    this.rightThigh.add(thighR);

    this.rightShin = new THREE.Group();
    this.rightShin.position.y = -0.42;
    this.rightThigh.add(this.rightShin);
    const shinR = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.048, 0.42, 8), pantsMat);
    shinR.position.y = -0.21;
    this.rightShin.add(shinR);

    this.rightFoot = new THREE.Group();
    this.rightFoot.position.y = -0.42;
    this.rightShin.add(this.rightFoot);
    const bootR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.18), bootMat);
    bootR.position.set(0, -0.04, 0.04);
    this.rightFoot.add(bootR);

    // 6. Laptop Prop
    this.laptopMesh = new THREE.Group();
    const laptopBase = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.012, 0.25),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.3 })
    );
    const laptopScreen = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.24, 0.008),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.3 })
    );
    laptopScreen.position.set(0, 0.12, -0.12);
    laptopScreen.rotation.x = -0.25;

    const codeDisplay = new THREE.Mesh(
      new THREE.PlaneGeometry(0.34, 0.2),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x38bdf8, emissiveIntensity: 1.2 })
    );
    codeDisplay.position.set(0, 0.11, -0.103);
    codeDisplay.rotation.x = -0.25;

    this.laptopMesh.add(laptopBase, laptopScreen, codeDisplay);
    this.laptopMesh.visible = false;
    this.group.add(this.laptopMesh);

    // Initialize all bone transform targets
    this.initTargets();
  }

  private initTargets() {
    const bones = [
      this.pelvisBone, this.spineBone, this.chestBone, this.neckBone, this.headBone,
      this.leftShoulder, this.leftUpperArm, this.leftForearm, this.leftHand,
      this.rightShoulder, this.rightUpperArm, this.rightForearm, this.rightHand,
      this.leftThigh, this.leftShin, this.leftFoot,
      this.rightThigh, this.rightShin, this.rightFoot
    ];
    bones.forEach((b) => {
      this.boneTargets.set(b, {
        pos: b.position.clone(),
        rot: b.rotation.clone()
      });
    });
  }

  private setTargetRot(bone: THREE.Group, x: number, y: number, z: number) {
    const t = this.boneTargets.get(bone);
    if (t) t.rot.set(x, y, z);
  }

  private setTargetPos(bone: THREE.Group, x: number, y: number, z: number) {
    const t = this.boneTargets.get(bone);
    if (t) t.pos.set(x, y, z);
  }

  // Animation Update with Smooth Delta-Time Slerp/Lerp
  public update(time: number, state: KrishnaAnimationState, delta = 0.016) {
    this.animate(time, state);

    // Periodic Natural Eye Blinking (Every ~3.5s for 0.12s)
    if (time - this.lastBlinkTime > 3.8) {
      this.isBlinking = true;
      this.lastBlinkTime = time;
    }
    if (this.isBlinking) {
      const blinkProgress = (time - this.lastBlinkTime) / 0.14;
      if (blinkProgress < 0.5) {
        this.leftEyelid.scale.y = THREE.MathUtils.lerp(0.05, 1.0, blinkProgress * 2);
        this.rightEyelid.scale.y = this.leftEyelid.scale.y;
      } else if (blinkProgress <= 1.0) {
        this.leftEyelid.scale.y = THREE.MathUtils.lerp(1.0, 0.05, (blinkProgress - 0.5) * 2);
        this.rightEyelid.scale.y = this.leftEyelid.scale.y;
      } else {
        this.leftEyelid.scale.y = 0.05;
        this.rightEyelid.scale.y = 0.05;
        this.isBlinking = false;
      }
    }

    // Smooth Bone Blending (Prevents mechanical snapping)
    const blendRate = Math.min(1, delta * 12);
    this.boneTargets.forEach((target, bone) => {
      bone.position.lerp(target.pos, blendRate);
      bone.rotation.x = THREE.MathUtils.lerp(bone.rotation.x, target.rot.x, blendRate);
      bone.rotation.y = THREE.MathUtils.lerp(bone.rotation.y, target.rot.y, blendRate);
      bone.rotation.z = THREE.MathUtils.lerp(bone.rotation.z, target.rot.z, blendRate);
    });
  }

  public animate(time: number, state: KrishnaAnimationState) {
    const { action, headTurn, armReach, lookUp } = state;

    // Head Orientation & Natural Look Tracking
    this.setTargetRot(this.headBone, -lookUp * 0.4, headTurn * 0.65, 0);

    // Idle Subtle Breathing (Chest expansion & slight shoulder rise)
    const breath = Math.sin(time * 2.2) * 0.012;
    this.setTargetPos(this.chestBone, 0, 0.25 + breath, 0);

    if (action === 'walk') {
      this.laptopMesh.visible = false;
      const walkSpeed = 7.2;
      const stride = Math.sin(time * walkSpeed);
      const armStride = Math.cos(time * walkSpeed);

      // Biomechanical Weight Transfer: Pelvis drops on plant, sways side-to-side
      const swayX = Math.sin(time * walkSpeed) * 0.035;
      const bobY = 0.98 + Math.abs(Math.sin(time * walkSpeed * 2)) * 0.045;
      this.setTargetPos(this.pelvisBone, swayX, bobY, 0);

      // Coronal Hip tilt (drop on swing leg, rise on plant leg)
      this.setTargetRot(this.pelvisBone, 0, stride * 0.08, -stride * 0.04);

      // Thoracic Counter-Rotation (Spine twists opposite to hips)
      this.setTargetRot(this.spineBone, 0.03, -stride * 0.09, 0);

      // Legs: Thigh swing, Shin knee flex, and Foot heel-to-toe roll
      const thighAngleL = stride * 0.58;
      const thighAngleR = -stride * 0.58;
      this.setTargetRot(this.leftThigh, thighAngleL, 0, 0);
      this.setTargetRot(this.rightThigh, thighAngleR, 0, 0);

      const kneeFlexL = Math.max(0, -stride * 0.65);
      const kneeFlexR = Math.max(0, stride * 0.65);
      this.setTargetRot(this.leftShin, kneeFlexL, 0, 0);
      this.setTargetRot(this.rightShin, kneeFlexR, 0, 0);

      // Foot ground roll (Heel strike -> toe push off)
      this.setTargetRot(this.leftFoot, stride > 0 ? stride * 0.25 : -stride * 0.15, 0, 0);
      this.setTargetRot(this.rightFoot, stride < 0 ? -stride * 0.25 : stride * 0.15, 0, 0);

      // Natural Arm Swing with Forearm Lag
      this.setTargetRot(this.leftUpperArm, -armStride * 0.42, 0, 0.08);
      this.setTargetRot(this.rightUpperArm, armStride * 0.42, 0, -0.08);
      this.setTargetRot(this.leftForearm, 0.25 + Math.abs(armStride) * 0.3, 0, 0);
      this.setTargetRot(this.rightForearm, 0.25 + Math.abs(armStride) * 0.3, 0, 0);

      // Dynamic Trench Coat Aerodynamics
      this.coatTailsMesh.rotation.x = 0.12 + Math.abs(stride) * 0.18;
      this.coatTailsMesh.rotation.z = -swayX * 2.5;
    } 
    else if (action === 'sit_study' || action === 'type_code' || action === 'work_campusos') {
      // Natural Seated Posture
      this.setTargetPos(this.pelvisBone, 0, 0.56, 0);
      this.setTargetRot(this.pelvisBone, 0, 0, 0);
      this.setTargetRot(this.spineBone, 0.18, 0, 0); // Slight ergonomic forward lean
      this.setTargetRot(this.leftThigh, -Math.PI / 2 + 0.12, 0, -0.06);
      this.setTargetRot(this.rightThigh, -Math.PI / 2 + 0.12, 0, 0.06);
      this.setTargetRot(this.leftShin, Math.PI / 2 - 0.05, 0, 0);
      this.setTargetRot(this.rightShin, Math.PI / 2 - 0.05, 0, 0);
      this.setTargetRot(this.leftFoot, 0, 0, 0);
      this.setTargetRot(this.rightFoot, 0, 0, 0);
      this.coatTailsMesh.rotation.x = 0.35;

      if (action === 'type_code' || action === 'work_campusos') {
        this.laptopMesh.visible = true;
        this.laptopMesh.position.set(0, 0.68, 0.45);

        // Realistic Alternating Hand Keystrokes & Wrist Micro-Movement
        const typeL = Math.sin(time * 16) * 0.045;
        const typeR = Math.cos(time * 16 + 1.2) * 0.045;

        this.setTargetRot(this.leftUpperArm, -0.52, 0, 0.22);
        this.setTargetRot(this.leftForearm, 1.32 + typeL, 0.1, 0);
        this.setTargetRot(this.leftHand, -0.38 + typeL * 1.5, 0, 0);

        this.setTargetRot(this.rightUpperArm, -0.52, 0, -0.22);
        this.setTargetRot(this.rightForearm, 1.32 + typeR, -0.1, 0);
        this.setTargetRot(this.rightHand, -0.38 + typeR * 1.5, 0, 0);
      } else {
        // Study Notebook Pose (Pen holding & note examination)
        this.laptopMesh.visible = false;
        this.setTargetRot(this.leftUpperArm, -0.38, 0, 0.18);
        this.setTargetRot(this.leftForearm, 1.15, 0.1, 0);
        this.setTargetRot(this.rightUpperArm, -0.44, 0, -0.15);
        this.setTargetRot(this.rightForearm, 1.28, -0.1, 0);
      }
    } 
    else if (action === 'inspect_robotics' || action === 'inspect_projects') {
      this.laptopMesh.visible = false;
      this.setTargetPos(this.pelvisBone, 0, 0.98, 0);
      this.setTargetRot(this.pelvisBone, 0, 0.15, 0);
      this.setTargetRot(this.leftThigh, 0, 0, -0.05);
      this.setTargetRot(this.rightThigh, 0, 0, 0.05);
      this.setTargetRot(this.leftShin, 0, 0, 0);
      this.setTargetRot(this.rightShin, 0, 0, 0);

      // Organic gesture examining equipment/monitors
      const reach = THREE.MathUtils.lerp(0.45, 0.92, armReach);
      this.setTargetRot(this.rightUpperArm, -reach, 0.2, -0.25);
      this.setTargetRot(this.rightForearm, 0.48, 0.2, 0);
      this.setTargetRot(this.leftUpperArm, -0.15, 0, 0.12);
      this.setTargetRot(this.leftForearm, 0.35, 0, 0);
    } 
    else if (action === 'summit_view' || action === 'future_look') {
      this.laptopMesh.visible = false;
      this.setTargetPos(this.pelvisBone, 0, 0.98, 0);
      this.setTargetRot(this.pelvisBone, 0, 0, 0);
      this.setTargetRot(this.spineBone, -0.04, 0, 0); // Upright confident stance
      this.setTargetRot(this.leftThigh, 0, 0, -0.08);
      this.setTargetRot(this.rightThigh, 0, 0, 0.08);
      this.setTargetRot(this.leftShin, 0, 0, 0);
      this.setTargetRot(this.rightShin, 0, 0, 0);

      // Relaxed arms at sides, deep breathing
      this.setTargetRot(this.leftUpperArm, 0.12, 0, 0.08);
      this.setTargetRot(this.rightUpperArm, 0.12, 0, -0.08);
      this.setTargetRot(this.leftForearm, 0.28, 0, 0);
      this.setTargetRot(this.rightForearm, 0.28, 0, 0);

      // Subtle coat flutter in mountain / city breeze
      this.coatTailsMesh.rotation.x = 0.14 + Math.sin(time * 3.5) * 0.08;
      this.coatTailsMesh.rotation.z = Math.cos(time * 2.8) * 0.06;
    }
  }
}
