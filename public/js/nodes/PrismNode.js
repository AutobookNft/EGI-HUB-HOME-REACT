
import * as THREE from 'three';
import { magmaVShader, magmaFShader } from '../shaders/MagmaShader.js';
import { createGlassMaterial } from '../utils/Materials.js';

// HELPER: Create Text Texture (same as SphereNode)
function createTextTexture(text, subtext) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 2048; 
    canvas.height = 1024;
    // Clear background for transparency
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(`Generating Texture for PRISM: ${text}`);
    
    // Title - ⭐ BLACK text for better contrast
    ctx.font = 'bold 180px "Rajdhani"'; 
    ctx.fillStyle = '#000000';  // Black instead of white
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = "rgba(255, 255, 255, 0.8)";  // White shadow for depth
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    
    ctx.fillText(text.toUpperCase(), canvas.width / 2, canvas.height / 2);
    
    // Subtext - also black
    if(subtext) {
        ctx.font = '100px "Share Tech Mono"';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';  // Black subtext
        ctx.shadowBlur = 4;
        ctx.fillText(subtext.substring(0, 30).toUpperCase(), canvas.width / 2, canvas.height / 2 + 140);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 16;
    return tex;
}

/**
 * Create a Prism Node (Mobile version of SphereNode)
 * Uses high-segment BoxGeometry for smooth appearance
 * Maintains same PBR materials (magma core + glass shell)
 */
export function createPrismNode(id, data, radius, commonUniforms) {
    const root = new THREE.Group();
    
    // Prism dimensions (taller and thinner than sphere)
    const width = radius * 1.5;
    const height = radius * 2.5;
    const depth = radius * 0.8;
    
    // ❌ MAGMA CORE REMOVED - Creates visual confusion during rotation
    // Keeping only glass shell + label for clean look
    
    // 1. INTERNAL LABEL (Billboard Plane)
    const textTex = createTextTexture(data.label, data.tagline);
    const labelGeo = new THREE.PlaneGeometry(width * 1.8, height * 0.6); 
    const labelMat = new THREE.MeshBasicMaterial({ 
        map: textTex, 
        transparent: true, 
        side: THREE.DoubleSide,
        depthTest: false,
        depthWrite: false
    });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    labelMesh.position.z = depth * 0.3; // Slightly forward
    labelMesh.renderOrder = 999;
    root.add(labelMesh);

    // 2. GLASS SHELL (High-segment box for smooth appearance)
    const glassGeo = new THREE.BoxGeometry(width, height, depth, 6, 6, 6);
    const glassMat = createGlassMaterial(data.color);
    
    // ⭐ MOBILE: Much MORE OPAQUE than desktop spheres
    glassMat.opacity = 0.6; // Increased from 0.35 (default) to 0.6
    glassMat.transparent = true;
    
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.renderOrder = 2;
    root.add(glassMesh);

    // 3. HIT BOX (invisible, for click detection)
    const hitMesh = new THREE.Mesh(
        new THREE.BoxGeometry(width * 1.5, height * 1.5, depth * 1.5),
        new THREE.MeshBasicMaterial({ visible: false })
    );
    hitMesh.userData = { id: id };
    root.add(hitMesh);

    return { root, hitMesh, labelMesh, glassMesh };
