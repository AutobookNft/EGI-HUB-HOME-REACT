
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
    
    // Prism dimensions (taller and thinner - Monolith style)
    const width = radius * 1.2;  // Slightly narrower
    const height = radius * 2.2; // Taller
    const depth = radius * 0.2;  // ⭐ MUCH THINNER (Glass slab)
    
    // 1. GLASS SHELL (High-segment box for smooth appearance)
    // Using 4 segments to simulate roundness via lighting
    const glassGeo = new THREE.BoxGeometry(width, height, depth, 4, 4, 4);
    const glassMat = createGlassMaterial(data.color);
    
    // ⭐ MOBILE: Opaque glass
    glassMat.opacity = 0.7; 
    glassMat.transparent = true;
    glassMat.side = THREE.FrontSide; // Only render front face to avoid internal confusion
    
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.renderOrder = 1;
    root.add(glassMesh);

    // 2. EXTERNAL LABEL (Floating slightly in front)
    const textTex = createTextTexture(data.label, data.tagline);
    const labelGeo = new THREE.PlaneGeometry(width * 1.8, height * 0.6); 
    const labelMat = new THREE.MeshBasicMaterial({ 
        map: textTex, 
        transparent: true, 
        side: THREE.FrontSide, // Only visible from front
        depthTest: true,
        depthWrite: false
    });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    
    // ⭐ Move label OUTSIDE the glass (prevent intersection/doubling)
    labelMesh.position.z = depth * 0.5 + 2; 
    labelMesh.renderOrder = 2; // Render after glass
    root.add(labelMesh);

    // 3. HIT BOX
    const hitMesh = new THREE.Mesh(
        new THREE.BoxGeometry(width * 1.5, height * 1.5, depth * 2),
        new THREE.MeshBasicMaterial({ visible: false })
    );
    hitMesh.userData = { id: id };
    root.add(hitMesh);

    return { root, hitMesh, labelMesh, glassMesh };
}
