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
        this.carouselGroup.position.y = 0; // Center vertically
        this.scene.add(this.carouselGroup);
        
        console.log('📱 CarouselController initialized');
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
            
            // Find min/max distances for normalization
            const minDist = this.camera.position.length() - this.radius; // Closest possible
            const maxDist = this.camera.position.length() + this.radius; // Farthest possible
            
            // Scale based on DISTANCE (closer = LARGER)
            const scaleFactor = THREE.MathUtils.mapLinear(
                distanceFromCamera,
                minDist,       // Closest to camera
                maxDist,       // Farthest from camera
                2.0,           // LARGE (close)
                0.5            // SMALL (far)
            );
            
            prism.node.root.scale.set(scaleFactor, scaleFactor, scaleFactor);
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
            this.velocity = 0; // Stop inertia
        });
        
        // Touch move
        canvas.addEventListener('touchmove', (e) => {
            if (!this.isSwiping) return;
            
            const deltaX = e.touches[0].clientX - this.touchStartX;
            const rotationDelta = (deltaX / window.innerWidth) * Math.PI * 1.5; // Sensitivity
            
            this.targetRotation = this.touchStartRotation + rotationDelta;
            this.velocity = rotationDelta * 0.1; // Track velocity for inertia
        });
        
        // Touch end - apply inertia
        canvas.addEventListener('touchend', () => {
            this.isSwiping = false;
            // Velocity will decay naturally in update loop
        });
        
        console.log('👆 Touch swipe controls enabled');
    }
    
    /**
     * Update carousel (call in animation loop)
     * @param {number} deltaTime - Time since last frame
     */
    update(deltaTime) {
        // Smooth interpolation towards target rotation
        if (!this.isSwiping) {
            // Apply inertia (velocity decay)
            this.velocity *= 0.95; // Damping
            this.targetRotation += this.velocity;
            
            // Interpolate current rotation towards target
            this.currentRotation += (this.targetRotation - this.currentRotation) * 0.1;
        } else {
            // Direct follow during swipe
            this.currentRotation = this.targetRotation;
        }
        
        // Update positions
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
    
    /**
     * Snap to nearest prism (optional, for crisp positioning)
     */
    snapToNearest() {
        // Find nearest prism
        const targetAngle = Math.round(this.currentRotation / this.angleStep) * this.angleStep;
        
        // Use GSAP if available, otherwise direct
        if (window.gsap) {
            window.gsap.to(this, {
                targetRotation: targetAngle,
                duration: 0.3,
                ease: "power2.out"
            });
        } else {
            this.targetRotation = targetAngle;
        }
    }
}
