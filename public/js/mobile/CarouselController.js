import * as THREE from 'three';

/**
 * CarouselController - Cylindrical carousel for mobile view
 * 
 * Features:
 * - 5 prisms arranged in a circle (carousel)
 * - Swipe left/right to rotate
 * - Billboard rotation (prisms always face camera)
 * - Smooth GSAP animations
 */
export class CarouselController {
    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        
        this.prisms = [];
        this.currentRotation = 0;  // Current carousel angle (radians)
        this.targetRotation = 0;   // Target angle for smooth animation
        this.radius = 80;          // Carousel radius
        this.angleStep = (Math.PI * 2) / 5; // 72° per prism
        
        // Touch state
        this.touchStartX = 0;
        this.touchStartRotation = 0;
        this.isSwiping = false;
        this.velocity = 0;
        
        // Create carousel group
        this.carouselGroup = new THREE.Group();
        this.carouselGroup.position.y = 25; // Move up significantly to reduce top gap
        this.scene.add(this.carouselGroup);
        
        console.log('📱 CarouselController initialized');
    }
    
    /**
     * Clean up resources and remove from scene
     */
    dispose() {
        if (this.carouselGroup) {
            this.scene.remove(this.carouselGroup);
            // Optional: dispose geometries/materials if needed
            this.carouselGroup.clear();
        }
        this.prisms = [];
        console.log('🗑️ CarouselController disposed');
    }
    
    /**
     * Add a prism to the carousel
     * @param {Object} prismNode - Prism created by createPrismNode()
     * @param {number} index - Position index (0-4)
     */
    addPrism(prismNode, index) {
        this.prisms.push({
            node: prismNode,
            index: index,
            baseAngle: index * this.angleStep
        });
        
        this.carouselGroup.add(prismNode.root);
        this.updatePrismPositions();
    }
    
    /**
     * Update prism positions based on current rotation
     */
    updatePrismPositions() {
        // Calculate min/max distances once for this frame
        const minDist = this.camera.position.length() - this.radius;
        const maxDist = this.camera.position.length() + this.radius;

        this.prisms.forEach((prism) => {
            // Calculate angle for this prism
            const angle = prism.baseAngle + this.currentRotation;
            
            // Position on circle (XZ plane)
            const x = Math.sin(angle) * this.radius;
            const z = Math.cos(angle) * this.radius;
            
            prism.node.root.position.set(x, 0, z);
            
            // ⭐ Billboard rotation: always face camera
            prism.node.root.lookAt(this.camera.position);
            
            // Calculate ACTUAL distance from camera (3D vector)
            const distanceFromCamera = prism.node.root.position.distanceTo(this.camera.position);
            
            // Scale based on DISTANCE (closer = LARGER)
            const scaleFactor = THREE.MathUtils.mapLinear(
                distanceFromCamera,
                minDist, maxDist,
                2.0, 0.5
            );
            prism.node.root.scale.set(scaleFactor, scaleFactor, scaleFactor);

            // 👁️ LABEL VISIBILITY LOGIC
            // Fade out label if prism is farther back
            const normalizedDist = (distanceFromCamera - minDist) / (maxDist - minDist);
            
            // Visible ONLY when very close to front (0.0 to 0.3 range)
            let labelOpacity = 1.0 - (normalizedDist * 3.0); 
            labelOpacity = Math.max(0, Math.min(1, labelOpacity));
            
            if (prism.node.labelMesh) {
                prism.node.labelMesh.material.opacity = labelOpacity;
                prism.node.labelMesh.visible = labelOpacity > 0.01;
            }
        });
    }

    /**
     * Enable touch swipe controls
     * @param {HTMLCanvasElement} canvas - Renderer canvas
     */
    enableSwipe(canvas) {
        // Touch start
        canvas.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
            this.touchStartRotation = this.currentRotation;
            this.isSwiping = true;
            // No velocity needed, strict 1:1 control
        });
        
        // Touch move
        canvas.addEventListener('touchmove', (e) => {
            if (!this.isSwiping) return;
            
            const deltaX = e.touches[0].clientX - this.touchStartX;
            // 🐢 SLOWER SENSITIVITY: Reduced factor to 0.8
            const rotationDelta = (deltaX / window.innerWidth) * Math.PI * 0.8; 
            
            this.currentRotation = this.touchStartRotation + rotationDelta;
        });
        
        // Touch end - strict stop & Detect Tap
        canvas.addEventListener('touchend', (e) => {
            this.isSwiping = false;
            
            // TAP DETECTION
            const touchEndX = e.changedTouches[0].clientX;
            const deltaX = Math.abs(touchEndX - this.touchStartX);
            const deltaTime = Date.now() - this.touchStartTime;
            
            // If movement is minimal and quick -> IT'S A CLICK/TAP
            if (deltaX < 10 && deltaTime < 300) {
                console.log('👆 Tap detected on Carousel');
                this.handleTap();
            }
        });
        
        console.log('👆 Touch swipe controls enabled (Strict control, No inertia)');
    }
    
    /**
     * Update carousel (call in animation loop)
     * @param {number} deltaTime - Time since last frame
     */
    update(deltaTime) {
        this.updatePrismPositions();
        
        // Animate magma cores (if they have uniforms)
        this.prisms.forEach(prism => {
            if (prism.node.coreMesh && prism.node.coreMesh.material.uniforms) {
                prism.node.coreMesh.material.uniforms.uTime.value += deltaTime;
            }
        });
    }
    
    /**
     * Get prism closest to front (for click detection)
     */
    getFrontPrism() {
        let frontPrism = null;
        let minZ = Infinity;
        
        this.prisms.forEach(prism => {
            const z = prism.node.root.position.z;
            if (z < minZ) {
                minZ = z;
                frontPrism = prism;
            }
        });
        
        return frontPrism;
    }
    
    handleTap() {
        // Find the prism closest to the camera (closest to angle 0 or PI*2)
        // Since we rotate the GROUP, we check the global Z position of children world position?
        // Simpler: Check the rotation angle modulo 2PI.
        // Even simpler: The one with largest Z value (closest to camera).
        
        let frontPrism = null;
        let maxZ = -Infinity; // Looking for largest Z (closest to camera at pos.z > 0)
        
        this.prisms.forEach(prism => {
            // Get World Position
            const vector = new THREE.Vector3();
            prism.node.root.getWorldPosition(vector);
            
            if (vector.z > maxZ) {
                maxZ = vector.z;
                frontPrism = prism;
            }
        });
        
        if (frontPrism && frontPrism.id) {
            console.log(`📱 Opening Detail for: ${frontPrism.id}`);
            if (window.openDetailPanel) {
                window.openDetailPanel(frontPrism.id);
            } else {
                console.error('❌ window.openDetailPanel not found!');
            }
        }
    }
    
    /**
     * Snap to nearest prism (optional, for crisp positioning)
     */
    snapToNearest() {
        // Find nearest prism
        const targetAngle = Math.round(this.currentRotation / this.angleStep) * this.angleStep;
        
        if (window.gsap) {
            window.gsap.to(this, {
                currentRotation: targetAngle,
                duration: 0.3,
                ease: "power2.out"
            });
        } else {
            this.currentRotation = targetAngle;
        }
    }
}
