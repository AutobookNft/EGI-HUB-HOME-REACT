import * as THREE from 'three';
import { RoundedBoxGeometry } from '../geometries/RoundedBoxGeometry.js';
import { createGlassMaterial } from '../utils/Materials.js';


// HELPER: Create Vertical Text Texture (Optimized for Monoliths)
function createTextTexture(text, subtext) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 2048; // Vertical aspect ratio to match Prism face
    const ctx = canvas.getContext('2d');
    
    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Standard Horizontal Text (Stacked)
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Title - Large & Readable
    ctx.font = 'bold 140px "Rajdhani"'; // Slightly smaller to fit width
    ctx.fillStyle = '#ffffff'; 
    ctx.shadowColor = "rgba(0,0,0,0.8)";
    ctx.shadowBlur = 10;
    
    // Break layout into lines if needed or just center
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    ctx.fillText(text.toUpperCase(), centerX, centerY - 50);
    
    // Subtext
    if(subtext) {
        ctx.font = '80px "Share Tech Mono"';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillText(subtext.substring(0, 30).toUpperCase(), centerX, centerY + 80);
    }
    
    // DECORATIVE: Top/Bottom Bars on Texture to frame it
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(centerX - 100, centerY - 150, 200, 5); // Line above
    ctx.fillRect(centerX - 100, centerY + 180, 200, 5); // Line below

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 16;
    return tex;
}

/**
 * Create a Prism Node (Mobile version of SphereNode)
 * Uses RoundedBoxGeometry for premium look
 * DECORATION: Internal Bezel + Glossy Glass + Horizontal Stacked Text
 */
export function createPrismNode(id, data, radius, commonUniforms) {
    const root = new THREE.Group();
    
    // Prism dimensions (MONOLITH STYLE - Large & Thin)
    const width = radius * 2.5;  // Wider
    const height = radius * 5.0; // Taller
    const depth = radius * 0.15; // Slightly thicker
    const cornerRadius = width * 0.04; 
    
    // 1. GLASS SHELL
    const glassGeo = new RoundedBoxGeometry(width, height, depth, 4, cornerRadius);
    const glassMat = createGlassMaterial(data.color);
    
    // ⭐ MOBILE: Glossy Physical Glass
    glassMat.opacity = 0.5; // Transparent to see core
    glassMat.transmission = 1.0; 
    glassMat.metalness = 0.2;
    glassMat.roughness = 0.0; 
    glassMat.clearcoat = 1.0;
    glassMat.side = THREE.FrontSide;
    
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.renderOrder = 2; 
    root.add(glassMesh);

    // 2. INTERNAL FRAME / BEZEL (Technological Core)
    const innerWidth = width * 0.85;
    const innerHeight = height * 0.90;
    const innerDepth = depth * 0.5;
    
    const innerGeo = new RoundedBoxGeometry(innerWidth, innerHeight, innerDepth, 2, cornerRadius);
    const innerEdges = new THREE.EdgesGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
    });
    const bezelMesh = new THREE.LineSegments(innerEdges, innerMat);
    bezelMesh.renderOrder = 1; 
    root.add(bezelMesh);
    
    // 3. INTERNAL GLOW CORE
    // Central energy column
    const coreGeo = new THREE.BoxGeometry(width * 0.3, height * 0.6, depth * 0.2); // Wider core
    const coreMat = new THREE.MeshBasicMaterial({
        color: data.color,
        transparent: true,
        opacity: 0.25, // Subtle glow
        blending: THREE.AdditiveBlending 
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    root.add(coreMesh);

    // 4. EXTERNAL LABEL (Mapped to Face)
    const textTex = createTextTexture(data.label, data.tagline);
    // Texture is 1024x2048 (1:2 ratio). Prism face is width:height (1:2 ratio).
    // Perfect match.
    const labelPlaneGeo = new THREE.PlaneGeometry(width, height); 
    const labelMat = new THREE.MeshBasicMaterial({ 
        map: textTex, 
        transparent: true, 
        side: THREE.FrontSide,
        depthWrite: false,
        blending: THREE.NormalBlending
    });
    const labelMesh = new THREE.Mesh(labelPlaneGeo, labelMat);
    // Floating just off the surface
    labelMesh.position.z = depth * 0.5 + 0.1; 
    labelMesh.renderOrder = 3;
    root.add(labelMesh);

    // 5. HIT BOX
    const hitMesh = new THREE.Mesh(
        new THREE.BoxGeometry(width * 1.5, height * 1.5, depth * 2),
        new THREE.MeshBasicMaterial({ visible: false })
    );
    hitMesh.userData = { id: id };
    root.add(hitMesh);

    return { root, hitMesh, labelMesh, glassMesh };
}
