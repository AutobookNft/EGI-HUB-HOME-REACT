/**
 * HyperspaceEffect.js
 * Star Wars-style hyperspace transition effect for sphere navigation
 *
 * Features:
 * - Camera zoom animation towards target sphere
 * - Star trails particle system (motion blur effect)
 * - Light bloom and fade to white transition
 * - Smooth navigation to new page
 */

import * as THREE from "three";

// GSAP loaded globally from CDN (index.html)
const gsap = window.gsap;

export class HyperspaceEffect {
  constructor(scene, camera, renderer) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.isWarping = false;

    // Create star field particle system
    this.starField = this.createStarField();
    this.scene.add(this.starField);

    // Store original star positions
    this.originalPositions = new Float32Array(
      this.starField.geometry.attributes.position.array
    );

    console.log("✨ HyperspaceEffect initialized");
  }

  /**
   * Create star field with 1000 particles
   * Distributed in a sphere around the scene
   */
  createStarField() {
    const starCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const velocities = [];
    const colors = [];

    for (let i = 0; i < starCount; i++) {
      // Spherical distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 150 + Math.random() * 100;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.push(x, y, z);
      velocities.push(0, 0, 0);

      // Slight blue-white color variation
      const colorVariation = 0.8 + Math.random() * 0.2;
      colors.push(colorVariation, colorVariation, 1.0);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute(
      "velocity",
      new THREE.Float32BufferAttribute(velocities, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    return new THREE.Points(geometry, material);
  }

  /**
   * Main hyperspace warp effect
   * @param {THREE.Mesh} targetSphere - The sphere mesh to warp into
   * @param {string} targetURL - Destination URL or path
   * @param {boolean} isInternal - If true, use React Router instead of window.location
   * @returns {Promise} Resolves when transition completes
   */
  async warpToSphere(targetSphere, targetURL, isInternal = false) {
    if (this.isWarping) return;
    this.isWarping = true;

    console.log(
      `🚀 Initiating hyperspace jump to: ${targetURL} (internal: ${isInternal})`
    );

    const startPos = this.camera.position.clone();
    const targetPos = targetSphere.position.clone();
    const direction = new THREE.Vector3()
      .subVectors(targetPos, startPos)
      .normalize();

    // Calculate camera zoom position (slightly before sphere center)
    const zoomDistance = 2; // Distance from sphere center
    const endPos = targetPos
      .clone()
      .sub(direction.multiplyScalar(zoomDistance));

    return new Promise((resolve) => {
      // 1. Camera zoom animation
      gsap.to(this.camera.position, {
        x: endPos.x,
        y: endPos.y,
        z: endPos.z,
        duration: 1.2,
        ease: "power2.inOut",
        onUpdate: () => {
          this.camera.lookAt(targetPos);
          this.updateStarTrails(direction);
        },
      });

      // 2. Sphere scale animation (grows as we approach)
      gsap.to(targetSphere.scale, {
        x: 80,
        y: 80,
        z: 80,
        duration: 1.2,
        ease: "power2.in",
      });

      // 3. Star opacity fade (stars disappear as we enter warp)
      gsap.to(this.starField.material, {
        opacity: 0.2,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.in",
      });

      // 4. After 1s, trigger fade to white and navigate
      setTimeout(() => {
        this.fadeToWhite(() => {
          if (isInternal) {
            // Use React Router navigation (no page reload)
            console.log(`✅ [Hyperspace] Internal navigation to: ${targetURL}`);
            if (window.navigateInternal) {
              window.navigateInternal(targetURL);

              // Wait for React to mount new page, then remove overlay
              console.log(
                `⏳ [Hyperspace] Waiting 800ms for React to render new page...`
              );
              setTimeout(() => {
                const overlay = document.getElementById("hyperspace-overlay");
                console.log(
                  `🔍 [Hyperspace] Looking for overlay to remove...`,
                  overlay
                );
                if (overlay) {
                  console.log(`✨ [Hyperspace] Fading out overlay...`);
                  gsap.to(overlay, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                      console.log(`🗑️ [Hyperspace] Removing overlay from DOM`);
                      overlay.remove();
                    },
                  });
                } else {
                  console.warn(`⚠️ [Hyperspace] Overlay not found!`);
                }
                this.isWarping = false;
                this.resetStarField();
                console.log(`✅ [Hyperspace] Navigation complete`);
              }, 800); // Give React time to render new page
            } else if (window.useUIStore) {
              window.useUIStore.getState().navigate(targetURL);
            } else {
              console.error(
                "❌ [Hyperspace] No internal navigation method found!"
              );
              // Fallback: force page change
              window.history.pushState({}, "", targetURL);
              window.location.reload();
            }
          } else {
            // External navigation (page reload)
            console.log(`✅ [Hyperspace] External navigation to: ${targetURL}`);
            window.location.href = targetURL;
          }
          resolve();
        });
      }, 1000);
    });
  }

  /**
   * Update star trails effect
   * Stars stretch in the direction of movement (motion blur)
   */
  updateStarTrails(direction) {
    const positions = this.starField.geometry.attributes.position.array;
    const originalPos = this.originalPositions;

    // Camera speed multiplier for trail length
    const speed = 3.0;

    for (let i = 0; i < positions.length; i += 3) {
      // Move stars backward relative to camera direction (creates trail effect)
      const trailOffset = speed * (1 + Math.random() * 0.5);

      positions[i] = originalPos[i] - direction.x * trailOffset;
      positions[i + 1] = originalPos[i + 1] - direction.y * trailOffset;
      positions[i + 2] = originalPos[i + 2] - direction.z * trailOffset;
    }

    this.starField.geometry.attributes.position.needsUpdate = true;
  }

  /**
   * Reset star field to original positions
   */
  resetStarField() {
    const positions = this.starField.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i++) {
      positions[i] = this.originalPositions[i];
    }
    this.starField.geometry.attributes.position.needsUpdate = true;
    this.starField.material.opacity = 0.8;
  }

  /**
   * Fade to white overlay with radial gradient
   */
  fadeToWhite(callback) {
    // Remove any existing overlay first
    const existingOverlay = document.getElementById("hyperspace-overlay");
    if (existingOverlay) {
      console.log("🧹 [HyperspaceEffect] Removing existing overlay");
      existingOverlay.remove();
    }

    const overlay = document.createElement("div");
    overlay.id = "hyperspace-overlay";
    overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle at center, 
                rgba(255, 255, 255, 0) 0%, 
                rgba(255, 255, 255, 0.3) 30%,
                rgba(255, 255, 255, 1) 80%);
            opacity: 0;
            z-index: 9999;
            pointer-events: none;
        `;
    document.body.appendChild(overlay);
    console.log("✨ [HyperspaceEffect] Overlay created");

    // Fade in using GSAP
    gsap.to(overlay, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        console.log(
          "✅ [HyperspaceEffect] Fade to white complete, calling callback"
        );
        if (callback) callback();
      },
    });
  }

  /**
   * Cleanup method (call before removing from scene)
   */
  dispose() {
    if (this.starField) {
      this.starField.geometry.dispose();
      this.starField.material.dispose();
      this.scene.remove(this.starField);
    }
  }
}
