'use client';

import * as THREE from 'three';

export interface KrishnaAnimationState {
  action: 'walk' | 'sit_study' | 'type_code' | 'work_campusos' | 'inspect_projects' | 'inspect_robotics' | 'summit_view' | 'future_look';
  headTurn: number; // -1 to 1 (left to right)
  armReach: number; // 0 to 1
  lookUp: number; // -1 to 1 (down to up)
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

  // Meshes
  private headMesh: THREE.Mesh;
  private hairGroup: THREE.Group;
  private glassesGroup: THREE.Group;
  private coatMesh: THREE.Mesh;
  private coatTailsMesh: THREE.Mesh;
  private laptopMesh: THREE.Group;

  private textureLoader = new THREE.TextureLoader();

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'Krishna_Character';

    // Materials
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xdeb887,
      roughness: 0.65,
      metalness: 0.05
    });
    const skinMat = headMat;

    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x140e0a,
      roughness: 0.85,
      metalness: 0.1
    });

    const turtleneckMat = new THREE.MeshStandardMaterial({
      color: 0x07090f,
      roughness: 0.8
    });

    const coatMat = new THREE.MeshStandardMaterial({
      color: 0x0b0d14,
      roughness: 0.55,
      metalness: 0.1
    });

    const scarfMat = new THREE.MeshStandardMaterial({
      color: 0x2d3442,
      roughness: 0.9
    });

    const silverMat = new THREE.MeshStandardMaterial({
      color: 0xd8d8d8,
      metalness: 0.95,
      roughness: 0.2
    });

    const glassesLensMat = new THREE.MeshPhysicalMaterial({
      color: 0xffeedd,
      transmission: 0.75,
      opacity: 0.85,
      transparent: true,
      roughness: 0.1,
      ior: 1.5
    });

    const pantsMat = new THREE.MeshStandardMaterial({
      color: 0x08090d,
      roughness: 0.7
    });

    const bootMat = new THREE.MeshStandardMaterial({
      color: 0x030407,
      roughness: 0.3,
      metalness: 0.3
    });

    // 1. Root & Pelvis
    this.rootBone = new THREE.Group();
    this.group.add(this.rootBone);

    this.pelvisBone = new THREE.Group();
    this.pelvisBone.position.y = 0.98;
    this.rootBone.add(this.pelvisBone);

    // Pelvis geometry
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

    // Upper Torso / Coat body
    const chestMesh = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.32, 0.24), coatMat);
    chestMesh.position.y = 0.16;
    chestMesh.castShadow = true;
    this.chestBone.add(chestMesh);

    // Scarf wrapped around neck/chest
    const scarfMesh = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.05, 8, 16), scarfMat);
    scarfMesh.rotation.x = Math.PI / 2;
    scarfMesh.position.set(0, 0.32, 0.02);
    this.chestBone.add(scarfMesh);

    // Silver Pendant Necklace
    const pendant = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.04, 0.008), silverMat);
    pendant.position.set(0, 0.2, 0.13);
    this.chestBone.add(pendant);

    // Trench coat lower tails
    const coatTailsGeo = new THREE.CylinderGeometry(0.22, 0.32, 0.7, 12, 1, true);
    this.coatTailsMesh = new THREE.Mesh(coatTailsGeo, coatMat);
    this.coatTailsMesh.position.set(0, -0.28, 0);
    this.pelvisBone.add(this.coatTailsMesh);
    this.coatMesh = chestMesh;

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
    const headGeo = new THREE.SphereGeometry(0.18, 24, 24);
    headGeo.scale(0.85, 1.05, 0.95);
    
    // Load Krishna's face texture
    this.textureLoader.load(
      '/krishna_kaushik.jpg',
      (tex) => {
        tex.wrapS = THREE.ClampToEdgeWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        tex.center.set(0.5, 0.5);
        tex.repeat.set(1.1, 1.1);
        headMat.map = tex;
        headMat.needsUpdate = true;
      },
      undefined,
      () => {
        // Fallback skin material
      }
    );

    this.headMesh = new THREE.Mesh(headGeo, headMat);
    this.headMesh.position.set(0, 0.14, 0);
    this.headMesh.castShadow = true;
    this.headBone.add(this.headMesh);

    // Voluminous Wavy Dark Hair (Layered curls geometry matching photo)
    this.hairGroup = new THREE.Group();
    
    // Top volume
    const hairTop = new THREE.Mesh(new THREE.SphereGeometry(0.19, 16, 16), hairMat);
    hairTop.scale.set(1.0, 0.65, 1.15);
    hairTop.position.set(0, 0.22, -0.02);
    this.hairGroup.add(hairTop);

    // Left and Right volume curls
    const hairSideGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const hairL = new THREE.Mesh(hairSideGeo, hairMat);
    hairL.position.set(-0.11, 0.18, -0.02);
    hairL.scale.set(0.9, 1.2, 0.9);
    this.hairGroup.add(hairL);

    const hairR = new THREE.Mesh(hairSideGeo, hairMat);
    hairR.position.set(0.11, 0.18, -0.02);
    hairR.scale.set(0.9, 1.2, 0.9);
    this.hairGroup.add(hairR);

    // Back hair curls
    const hairBack = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 12), hairMat);
    hairBack.position.set(0, 0.12, -0.1);
    hairBack.scale.set(1.0, 1.1, 0.7);
    this.hairGroup.add(hairBack);

    this.headBone.add(this.hairGroup);

    // Wire-Rim Aviator Glasses (Matching reference photograph)
    this.glassesGroup = new THREE.Group();
    
    // Left Lens & Frame
    const lensGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.005, 16);
    const lensL = new THREE.Mesh(lensGeo, glassesLensMat);
    lensL.rotation.x = Math.PI / 2;
    lensL.position.set(-0.065, 0.14, 0.17);
    this.glassesGroup.add(lensL);

    const frameL = new THREE.Mesh(new THREE.TorusGeometry(0.046, 0.004, 8, 16), silverMat);
    frameL.position.copy(lensL.position);
    this.glassesGroup.add(frameL);

    // Right Lens & Frame
    const lensR = new THREE.Mesh(lensGeo, glassesLensMat);
    lensR.rotation.x = Math.PI / 2;
    lensR.position.set(0.065, 0.14, 0.17);
    this.glassesGroup.add(lensR);

    const frameR = new THREE.Mesh(new THREE.TorusGeometry(0.046, 0.004, 8, 16), silverMat);
    frameR.position.copy(lensR.position);
    this.glassesGroup.add(frameR);

    // Double bridge bars
    const bridge1 = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.05, 8), silverMat);
    bridge1.rotation.z = Math.PI / 2;
    bridge1.position.set(0, 0.155, 0.17);
    this.glassesGroup.add(bridge1);

    const bridge2 = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.04, 8), silverMat);
    bridge2.rotation.z = Math.PI / 2;
    bridge2.position.set(0, 0.138, 0.17);
    this.glassesGroup.add(bridge2);

    this.headBone.add(this.glassesGroup);

    // 4. Arms
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

    // 5. Legs
    // Left Leg
    this.leftHip = new THREE.Group();
    this.leftHip.position.set(-0.11, -0.05, 0);
    this.pelvisBone.add(this.leftHip);

    this.leftThigh = new THREE.Group();
    this.leftHip.add(this.leftThigh);
    const thighL = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.44, 8), pantsMat);
    thighL.position.y = -0.22;
    this.leftThigh.add(thighL);

    this.leftShin = new THREE.Group();
    this.leftShin.position.y = -0.44;
    this.leftThigh.add(this.leftShin);
    const shinL = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.42, 8), pantsMat);
    shinL.position.y = -0.21;
    this.leftShin.add(shinL);

    this.leftFoot = new THREE.Group();
    this.leftFoot.position.y = -0.42;
    this.leftShin.add(this.leftFoot);
    const footL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.18), bootMat);
    footL.position.set(0, -0.03, 0.04);
    this.leftFoot.add(footL);

    // Right Leg
    this.rightHip = new THREE.Group();
    this.rightHip.position.set(0.11, -0.05, 0);
    this.pelvisBone.add(this.rightHip);

    this.rightThigh = new THREE.Group();
    this.rightHip.add(this.rightThigh);
    const thighR = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.44, 8), pantsMat);
    thighR.position.y = -0.22;
    this.rightThigh.add(thighR);

    this.rightShin = new THREE.Group();
    this.rightShin.position.y = -0.44;
    this.rightThigh.add(this.rightShin);
    const shinR = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.42, 8), pantsMat);
    shinR.position.y = -0.21;
    this.rightShin.add(shinR);

    this.rightFoot = new THREE.Group();
    this.rightFoot.position.y = -0.42;
    this.rightShin.add(this.rightFoot);
    const footR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.18), bootMat);
    footR.position.set(0, -0.03, 0.04);
    this.rightFoot.add(footR);

    // Prop: Sleek Laptop (for coding/studying scenes)
    this.laptopMesh = new THREE.Group();
    const laptopBase = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.015, 0.22), silverMat);
    const laptopScreen = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.22, 0.012), coatMat);
    laptopScreen.position.set(0, 0.11, -0.11);
    laptopScreen.rotation.x = -0.25;

    const codeDisplay = new THREE.Mesh(
      new THREE.PlaneGeometry(0.29, 0.19),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
    );
    codeDisplay.position.set(0, 0.11, -0.103);
    codeDisplay.rotation.x = -0.25;

    this.laptopMesh.add(laptopBase);
    this.laptopMesh.add(laptopScreen);
    this.laptopMesh.add(codeDisplay);
    this.laptopMesh.visible = false;
    this.group.add(this.laptopMesh);
  }

  // Animation Blending & Execution
  public update(time: number, state: KrishnaAnimationState) {
    this.animate(time, state);
  }

  public animate(time: number, state: KrishnaAnimationState) {
    const { action, headTurn, armReach, lookUp } = state;

    // Reset baseline joint rotations
    this.resetPose();

    // Head orientation
    this.headBone.rotation.y = THREE.MathUtils.lerp(this.headBone.rotation.y, headTurn * 0.7, 0.1);
    this.headBone.rotation.x = THREE.MathUtils.lerp(this.headBone.rotation.x, -lookUp * 0.4, 0.1);

    if (action === 'walk') {
      this.laptopMesh.visible = false;
      const speed = 7.5;
      const stride = Math.sin(time * speed);
      const armStride = Math.cos(time * speed);

      // Thigh & Shin swing
      this.leftThigh.rotation.x = stride * 0.55;
      this.rightThigh.rotation.x = -stride * 0.55;
      this.leftShin.rotation.x = Math.max(0, -stride * 0.55);
      this.rightShin.rotation.x = Math.max(0, stride * 0.55);

      // Counter-arm swing
      this.leftUpperArm.rotation.x = -armStride * 0.4;
      this.rightUpperArm.rotation.x = armStride * 0.4;
      this.leftForearm.rotation.x = 0.2 + Math.abs(armStride) * 0.25;
      this.rightForearm.rotation.x = 0.2 + Math.abs(armStride) * 0.25;

      // Pelvis / Spine natural bobbing & twist
      this.pelvisBone.position.y = 0.98 + Math.abs(Math.sin(time * speed * 2)) * 0.04;
      this.spineBone.rotation.y = stride * 0.08;
      this.coatTailsMesh.rotation.x = 0.1 + Math.abs(stride) * 0.15;
    } 
    else if (action === 'sit_study' || action === 'type_code' || action === 'work_campusos') {
      // Natural Seated Pose in Chair
      this.pelvisBone.position.y = 0.58; // Lowered to chair height
      this.leftThigh.rotation.x = -Math.PI / 2 + 0.1;
      this.rightThigh.rotation.x = -Math.PI / 2 + 0.1;
      this.leftShin.rotation.x = Math.PI / 2;
      this.rightShin.rotation.x = Math.PI / 2;
      this.spineBone.rotation.x = 0.15; // Leaning slightly forward into desk

      if (action === 'type_code' || action === 'work_campusos') {
        this.laptopMesh.visible = true;
        this.laptopMesh.position.set(0, 0.68, 0.45);

        // Realistic Typing Arms (Elbows bent at 85°, hands oscillating over keyboard)
        const typeL = Math.sin(time * 14) * 0.05;
        const typeR = Math.cos(time * 14 + 1) * 0.05;

        this.leftUpperArm.rotation.x = -0.55;
        this.leftUpperArm.rotation.z = 0.2;
        this.leftForearm.rotation.x = 1.35 + typeL;
        this.leftHand.rotation.x = -0.4;

        this.rightUpperArm.rotation.x = -0.55;
        this.rightUpperArm.rotation.z = -0.2;
        this.rightForearm.rotation.x = 1.35 + typeR;
        this.rightHand.rotation.x = -0.4;
      } else {
        // Study Notebook pose
        this.laptopMesh.visible = false;
        this.leftUpperArm.rotation.x = -0.4;
        this.leftForearm.rotation.x = 1.1;
        this.rightUpperArm.rotation.x = -0.45;
        this.rightForearm.rotation.x = 1.25;
      }
    } 
    else if (action === 'inspect_robotics' || action === 'inspect_projects') {
      this.laptopMesh.visible = false;
      this.pelvisBone.position.y = 0.98;

      // Standing inspect gesture (right arm extended examining object/monitor)
      const reach = THREE.MathUtils.lerp(0.4, 0.95, armReach);
      this.rightUpperArm.rotation.x = -reach;
      this.rightUpperArm.rotation.z = -0.3;
      this.rightForearm.rotation.x = 0.45;
      this.leftUpperArm.rotation.x = -0.15;
      this.leftForearm.rotation.x = 0.3;

      // Subtle breathing
      this.chestBone.position.y = 0.25 + Math.sin(time * 2) * 0.01;
    }
    else if (action === 'summit_view' || action === 'future_look') {
      this.laptopMesh.visible = false;
      this.pelvisBone.position.y = 0.98;

      // Hands slightly in pockets / sides, deep breathing chest expansion
      this.leftUpperArm.rotation.x = 0.15;
      this.rightUpperArm.rotation.x = 0.15;
      this.leftForearm.rotation.x = 0.35;
      this.rightForearm.rotation.x = 0.35;
      this.chestBone.position.y = 0.25 + Math.sin(time * 1.5) * 0.02;
      this.spineBone.rotation.x = -0.05; // Upright, confident stance
    }
  }

  private resetPose() {
    this.pelvisBone.position.set(0, 0.98, 0);
    this.spineBone.rotation.set(0, 0, 0);
    this.chestBone.rotation.set(0, 0, 0);
    this.neckBone.rotation.set(0, 0, 0);
    this.headBone.rotation.set(0, 0, 0);

    this.leftUpperArm.rotation.set(0, 0, 0);
    this.leftForearm.rotation.set(0, 0, 0);
    this.leftHand.rotation.set(0, 0, 0);

    this.rightUpperArm.rotation.set(0, 0, 0);
    this.rightForearm.rotation.set(0, 0, 0);
    this.rightHand.rotation.set(0, 0, 0);

    this.leftThigh.rotation.set(0, 0, 0);
    this.leftShin.rotation.set(0, 0, 0);
    this.rightThigh.rotation.set(0, 0, 0);
    this.rightShin.rotation.set(0, 0, 0);
  }
}
