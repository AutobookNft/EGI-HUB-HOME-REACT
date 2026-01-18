/**
 * @file engine.js
 * @author Padmin D. Curtis (OS3.0)
 * @project FLORENCE EGI HUB
 * @description Core PBR Rendering Engine. Features Volumetric Magma, Glass Refraction, and Hybrid CSS2D HUD.
 * @version 3.1.0 (Implacable)
 * @license PROPRIETARY - ORACODE SYSTEMS
 */

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// CSS2D Removed
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import TWEEN from "@tweenjs/tween.js";

// 📱 MOBILE DETECTION (Must be defined first)
const isMobile = window.innerWidth < 768;
console.log(`📱 Device: ${isMobile ? "MOBILE" : "DESKTOP"}`);

// --- CONFIGURATION ---
const SYSTEM_CONFIG = {
  camera: { fov: 45, pos: [0, 15, 850] }, // CENTERED: Match scene yOffset for symmetrical view
  bloom: { threshold: 0.9, strength: 0.3, radius: 0.1 }, // REDUCED for readability
  physics: {
    metalness: 0.2,
    roughness: 0.1,
    transmission: 1.0,
    thickness: 1.5,
  },
  scene: { yOffset: 15 },
};

// --- DATA IMPORT ---
// Assuming ecosystem_data.js loaded before this and exposed via window
const data = window.ecosystemData;
const orbitConfig = window.orbitalConfig;

if (!data || !orbitConfig) {
  console.error("CRITICAL: Ecosystem Data not loaded!");
}

// --- ENGINE CORE ---
const scene = new THREE.Scene();
// FIX: Drastically pull back camera to fit large spheres in portrait
const camZ = isMobile ? 650 : SYSTEM_CONFIG.camera.pos[2];

const camera = new THREE.PerspectiveCamera(
  SYSTEM_CONFIG.camera.fov,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);
camera.position.set(
  SYSTEM_CONFIG.camera.pos[0],
  SYSTEM_CONFIG.camera.pos[1],
  camZ
);

// WEBGL RENDERER (PBR)
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  powerPreference: "high-performance",
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
document.body.appendChild(renderer.domElement);

// ENVIRONMENT & LIGHTING (PBR)
const pmremGenerator = new THREE.PMREMGenerator(renderer);
scene.environment = pmremGenerator.fromScene(
  new RoomEnvironment(),
  0.04
).texture;
scene.background = new THREE.Color(0x020202); // Deep Space Black

// POST-PROCESSING
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5,
  0.4,
  0.85
);
bloomPass.threshold = SYSTEM_CONFIG.bloom.threshold;
bloomPass.strength = SYSTEM_CONFIG.bloom.strength;
bloomPass.radius = SYSTEM_CONFIG.bloom.radius;
composer.addPass(bloomPass);

// CONTROLS
const controls = new OrbitControls(camera, renderer.domElement); // Control via WebGL canvas
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxDistance = 600;

// 🔒 LOCK VERTICAL ROTATION ON MOBILE
if (isMobile) {
  controls.minPolarAngle = Math.PI / 2; // Lock to horizon
  controls.maxPolarAngle = Math.PI / 2;
  controls.enableZoom = false; // Disable zoom too
  controls.enableRotate = false; // Disable camera rotation entirely, we use swipe for carousel
}

// --- IMPORT NODES ---
import { createSphereNode } from "./js/nodes/SphereNode.js";
import { createCubeNode } from "./js/nodes/CubeNode.js";
import { createPrismNode } from "./js/nodes/PrismNode.js";
import { HyperspaceEffect } from "./js/effects/HyperspaceEffect.js";
import { CarouselController } from "./js/mobile/CarouselController.js";

console.log(
  "ENGINE: Nodes loaded. Using CUBES by default (as per user request)."
);

// 📱 MOBILE DETECTION (Moved to top of file)

// CONFIG: Switch between SPHERE and CUBE
const USE_CUBES = false; // User requested to restore spheres

// --- COMPLEX NODE BUILDER WRAPPER ---
const commonUniforms = { uTime: { value: 0 } };

function createComplexNode(id, data, radius) {
  if (USE_CUBES) {
    return createCubeNode(id, data, radius, commonUniforms);
  } else {
    return createSphereNode(id, data, radius, commonUniforms);
  }
}

// --- SCENE GENERATION ---
const systemGroup = new THREE.Group();
systemGroup.position.y = SYSTEM_CONFIG.scene.yOffset;
scene.add(systemGroup);

let nodes = {}; // Exposed for animation loop
window.nodes = nodes; // ⭐ Expose to React for hyperspace effect
let carouselController = null; // Mobile carousel instance

function constructEcosystem(newData, newOrbitConfig) {
  console.log(`🔧 [constructEcosystem] START - newData:`, newData);
  console.log(`🔧 [constructEcosystem] newOrbitConfig:`, newOrbitConfig);

  // 1. Clear existing group
  while (systemGroup.children.length > 0) {
    systemGroup.remove(systemGroup.children[0]);
  }
  nodes = {};
  window.nodes = nodes; // ⭐ Update window reference

  if (!newData || !newData.core) {
    console.error("❌ ConstructEcosystem: Invalid Data", newData);
    return;
  }

  console.log(`✅ [constructEcosystem] Valid data, building scene...`);

  // ========================================
  // 📱 MOBILE: Cylindrical Carousel
  // ========================================
  if (isMobile) {
    console.log("📱 Building MOBILE carousel layout");

    // 🗑️ CLEANUP: Destroy previous carousel if exists (prevent duplicates)
    if (carouselController) {
      carouselController.dispose();
      carouselController = null;
    }

    // Create carousel controller
    carouselController = new CarouselController(scene, camera, renderer);

    // Add 5 prisms to carousel (skip core, use only orbit nodes)
    if (newOrbitConfig && Array.isArray(newOrbitConfig)) {
      newOrbitConfig.forEach((cfg, index) => {
        const d = newData[cfg.id];
        if (!d) return;

        const prismNode = createPrismNode(cfg.id, d, 30, commonUniforms);
        carouselController.addPrism(prismNode, index);
        nodes[cfg.id] = prismNode; // Store for click detection
      });
    }

    // Enable touch swipe
    carouselController.enableSwipe(renderer.domElement);

    return; // Skip desktop logic
  }

  // ========================================
  // 🖥️ DESKTOP: Orbital Sphere System
  // ========================================
  console.log("🖥️ Building DESKTOP orbital layout");

  // 2. CORE SYSTEM
  // SCALE UP: Core must be 30% larger than satellites for visual hierarchy
  console.log(`🌟 [constructEcosystem] Creating CORE node:`, newData.core);
  const coreNode = createComplexNode("core", newData.core, 65);
  systemGroup.add(coreNode.root);
  nodes["core"] = coreNode;
  console.log(
    `✅ [constructEcosystem] CORE added to scene, position:`,
    coreNode.root.position
  );

  // 3. SATELLITES & CABLES
  if (newOrbitConfig && Array.isArray(newOrbitConfig)) {
    console.log(
      `🪐 [constructEcosystem] Creating ${newOrbitConfig.length} satellites`
    );
    newOrbitConfig.forEach((cfg, idx) => {
      const d = newData[cfg.id];
      if (!d) {
        console.warn(
          `⚠️ [constructEcosystem] No data for satellite: ${cfg.id}`
        );
        return;
      }

      console.log(`🪐 [constructEcosystem] Processing satellite: ${cfg.id}`, d);
      console.log(`📏 [constructEcosystem] Radius from data: ${d.radius}`);

      // Distribute planets in 2D circle
      // FIXED RADIUS: All satellites equidistant from HUB
      const orbitR = 150; // Reduced to fit all on screen
      const angle = (idx / newOrbitConfig.length) * Math.PI * 2; // Even distribution

      // ECLIPTIC FLATTENING: Remove vertical sine wave
      const zDepth = 0; // All on same Z plane (facing camera)

      // 2D CIRCLE LAYOUT: Satellites on X-Y plane (vertical circle facing camera)
      const x = Math.cos(angle) * orbitR;
      const y = Math.sin(angle) * orbitR; // Y varies (vertical circle)

      // SCALE UP SATELLITE: Force all satellites to same size (42)
      const nodeRadius = 42; // FORCED - ignore d.radius to ensure consistency
      console.log(
        `📏 [constructEcosystem] FORCED nodeRadius: ${nodeRadius} for ${cfg.id}`
      );

      const node = createComplexNode(cfg.id, d, nodeRadius);

      // Verify node scale after creation
      console.log(
        `🔍 [constructEcosystem] Node ${cfg.id} root.scale:`,
        node.root.scale
      );

      node.root.position.set(x, y, zDepth); // X-Y circle, Z=0
      node.root.lookAt(0, 0, 0); // Orient rings to center

      systemGroup.add(node.root);
      nodes[cfg.id] = node;
      console.log(
        `✅ [constructEcosystem] Satellite ${cfg.id} added at (${x.toFixed(
          2
        )}, ${y.toFixed(2)}, ${zDepth}) with FORCED radius ${nodeRadius}`
      );

      // FIBER OPTIC CABLE (Tube)
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x * 0.5, y * 0.5, zDepth + 20), // Small arc in Z
        new THREE.Vector3(x, y, zDepth),
      ]);
      const tubeGeo = new THREE.TubeGeometry(curve, 20, 0.3, 8, false); // Thinner
      const tube = new THREE.Mesh(
        tubeGeo,
        new THREE.MeshBasicMaterial({
          color: d.color,
          transparent: true,
          opacity: 0.05, // Dimmer
          blending: THREE.AdditiveBlending,
        })
      );
      systemGroup.add(tube);
    });
  }

  console.log(
    `✅ [constructEcosystem] COMPLETE - Total nodes:`,
    Object.keys(nodes).length
  );
  console.log(
    `✅ [constructEcosystem] systemGroup.children:`,
    systemGroup.children.length
  );

  // Reset camera to proper view
  camera.position.set(
    SYSTEM_CONFIG.camera.pos[0],
    SYSTEM_CONFIG.camera.pos[1],
    camZ
  );
  camera.lookAt(0, SYSTEM_CONFIG.scene.yOffset, 0);
  controls.update();
  console.log(`📷 [constructEcosystem] Camera reset to:`, camera.position);
}

// Initial Build (if window data exists)
if (data) {
  constructEcosystem(data, orbitConfig);
}

// --- ATMOSPHERE (STARS & DUST) ---
const starsGeo = new THREE.BufferGeometry();
const starsCount = 3000;
const starPos = new Float32Array(starsCount * 3);
for (let i = 0; i < starsCount * 3; i++) {
  starPos[i] = (Math.random() - 0.5) * 1200;
}
starsGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
const stars = new THREE.Points(
  starsGeo,
  new THREE.PointsMaterial({
    color: 0x888888,
    size: 0.7,
    transparent: true,
    opacity: 0.8,
  })
);
scene.add(stars);

const dustGeo = new THREE.BufferGeometry();
const dustCount = 2000;
const dustPos = new Float32Array(dustCount * 3);
for (let i = 0; i < dustCount * 3; i++) {
  dustPos[i] = (Math.random() - 0.5) * 400;
}
dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
const dustMat = new THREE.PointsMaterial({
  color: 0x00ffdd,
  size: 0.5,
  transparent: true,
  opacity: 0.3,
  blending: THREE.AdditiveBlending,
});
const dust = new THREE.Points(dustGeo, dustMat);
scene.add(dust);

// --- HYPERSPACE EFFECT SYSTEM ---
// ⭐ Initialize hyperspace navigation effect (Star Wars-style star trails)
let hyperspaceEffect = null;
hyperspaceEffect = new HyperspaceEffect(scene, camera, renderer);
window.hyperspaceEffect = hyperspaceEffect; // ⭐ Expose to React
console.log("✨ Hyperspace navigation system initialized");

// --- INTERACTION ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onPointerMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onClick(event) {
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(scene.children, true);
  const validHit = hits.find((h) => h.object.userData && h.object.userData.id);

  if (validHit) {
    const id = validHit.object.userData.id;
    console.log("CLICKED:", id);

    // Delegate click logic to React (Navigation vs Detail Panel)
    if (window.handleNodeClick) {
      window.handleNodeClick(id);
    } else if (window.openDetailPanel) {
      // Fallback
      window.openDetailPanel(id);
    }
  }
}

window.addEventListener("pointermove", onPointerMove);
window.addEventListener("click", onClick);

// --- ANIMATION ---
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  const time = clock.getElapsedTime();

  controls.update();
  TWEEN.update();
  commonUniforms.uTime.value = time;

  // 📱 Update mobile carousel
  if (isMobile && carouselController) {
    carouselController.update(delta);
  }

  Object.values(nodes).forEach((n) => {
    // 1. Magma Core / Inner Cube
    if (n.coreMesh && n.coreMesh.geometry.type === "IcosahedronGeometry") {
      n.coreMesh.rotation.y -= 0.005;
      n.coreMesh.rotation.x += 0.002;
    } else if (n.innerMesh) {
      n.innerMesh.rotation.y += 0.005;
      n.innerMesh.rotation.x = Math.sin(time * 0.2) * 0.1;
      if (n.glassMesh) n.glassMesh.rotation.copy(n.innerMesh.rotation);
      if (n.edgesMesh) n.edgesMesh.rotation.copy(n.innerMesh.rotation);
    }

    // 2. Gyro Rings
    if (n.r1) {
      n.r1.rotation.z += 0.01;
      n.r1.rotation.x = Math.sin(time * 0.5) * 0.2;
    }
    if (n.r2) {
      n.r2.rotation.y -= 0.015;
      n.r2.rotation.z = Math.cos(time * 0.3) * 0.2;
    }

    // 3. Labels (Billboard)
    if (n.labelMesh) {
      n.labelMesh.lookAt(camera.position);
    }
  });

  composer.render();
}

animate();

// --- REACT HOT RELOAD HOOK ---
window.updateEcosystem = function (newData) {
  // Only update colors (legacy, kept for minor updates)
  // ...
};

// --- REACT REBUILD HOOK (Full Scene Swap) ---
window.rebuildEcosystem = function (newData) {
  console.log("♻️ ENGINE: Rebuilding Ecosystem Scene...", newData);
  constructEcosystem(newData, newData.orbitalConfig || []);
};

// --- RESIZE ---
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
});
