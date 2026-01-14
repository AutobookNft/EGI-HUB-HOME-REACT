import * as THREE from 'three';
import { RoundedBoxGeometry } from '../geometries/RoundedBoxGeometry.js';
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
 * Uses RoundedBoxGeometry for premium look
 * DECORATION: Clean glowing edges only (Hardware style)
 */
export function createPrismNode(id, data, radius, commonUniforms) {
    const root = new THREE.Group();
    
    // Prism dimensions (MONOLITH STYLE - Large & Thin)
    // Target: ~70% screen width when frontal
    const width = radius * 2.2;  
    const height = radius * 4.5; 
    const depth = radius * 0.1;  
    const cornerRadius = width * 0.05; 
    
    // 1. GLASS SHELL (RoundedBoxGeometry)
    const glassGeo = new RoundedBoxGeometry(width, height, depth, 4, cornerRadius);
    const glassMat = createGlassMaterial(data.color);
    
    // ⭐ MOBILE: Elegant Opaque Glass
    glassMat.opacity = 0.9; // Solid presence
    glassMat.transparent = true;
    glassMat.side = THREE.FrontSide; 
    // Emissive glow for "active" look
    glassMat.emissive = new THREE.Color(data.color);
    glassMat.emissiveIntensity = 0.15; 
    
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.renderOrder = 1;
    root.add(glassMesh);

    // 2. ELEGANT EDGES (The "Adornment")
    // Creates a clean, high-tech outline around the rounded shape
    const edgesGeo = new THREE.EdgesGeometry(glassGeo); // Automatically finds sharp edges (might need adjusting for rounded box)
    // For RoundedBox, EdgesGeometry might show internal triangles if angle threshold is low.
    // Better strategy for RoundedBox: Create a slightly larger wireframe or specific edges? 
    // Actually, RoundedBoxGeometry is well structured. Let's try standard edges first with high threshold.
    
    const edgesMat = new THREE.LineBasicMaterial({ 
        color: 0xffffff, 
        transparent: true, 
        opacity: 0.3 // Subtle
    });
    const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
    root.add(edgesMesh);

    // 3. EXTERNAL LABEL (Floating freely)
    const textTex = createTextTexture(data.label, data.tagline);
    const labelGeo = new THREE.PlaneGeometry(width * 1.5, height * 0.5); 
    const labelMat = new THREE.MeshBasicMaterial({ 
        map: textTex, 
        transparent: true, 
        side: THREE.FrontSide, 
        depthTest: true,
        depthWrite: false
    });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    
    // Move label out
    labelMesh.position.z = depth * 0.5 + 4; 
    labelMesh.renderOrder = 3; 
    root.add(labelMesh);

    // 4. HIT BOX
    const hitMesh = new THREE.Mesh(
        new THREE.BoxGeometry(width * 1.5, height * 1.5, depth * 2),
        new THREE.MeshBasicMaterial({ visible: false })
    );
    hitMesh.userData = { id: id };
    root.add(hitMesh);

    return { root, hitMesh, labelMesh, glassMesh };
}
