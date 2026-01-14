import * as THREE from 'three';
import { RoundedBoxGeometry } from '../geometries/RoundedBoxGeometry.js';
import { createGlassMaterial } from '../utils/Materials.js';

// HELPER: Create Tech HUD Texture (Corners + Scanlines)
function createTechHUDTexture(color) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    
    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const c = new THREE.Color(color);
    const colorStyle = `rgba(${c.r*255}, ${c.g*255}, ${c.b*255}, 0.8)`;
    const faintStyle = `rgba(${c.r*255}, ${c.g*255}, ${c.b*255}, 0.15)`;
    
    // 1. CORNER BRACKETS (Tech Look)
    ctx.lineWidth = 12;
    ctx.strokeStyle = '#ffffff'; // White highlights
    ctx.lineCap = 'square';
    
    const len = 80;
    const pad = 20;
    
    // Top Left
    ctx.beginPath(); ctx.moveTo(pad, pad+len); ctx.lineTo(pad, pad); ctx.lineTo(pad+len, pad); ctx.stroke();
    // Top Right
    ctx.beginPath(); ctx.moveTo(canvas.width-pad-len, pad); ctx.lineTo(canvas.width-pad, pad); ctx.lineTo(canvas.width-pad, pad+len); ctx.stroke();
    // Bottom Left
    ctx.beginPath(); ctx.moveTo(pad, canvas.height-pad-len); ctx.lineTo(pad, canvas.height-pad); ctx.lineTo(pad+len, canvas.height-pad); ctx.stroke();
    // Bottom Right
    ctx.beginPath(); ctx.moveTo(canvas.width-pad-len, canvas.height-pad); ctx.lineTo(canvas.width-pad, canvas.height-pad); ctx.lineTo(canvas.width-pad, canvas.height-pad-len); ctx.stroke();

    // 2. SCANLINES
    ctx.fillStyle = faintStyle;
    for(let i=0; i<canvas.height; i+=20) {
        ctx.fillRect(40, i, canvas.width-80, 2);
    }
    
    // 3. VERTICAL SIDE BARS
    ctx.fillStyle = colorStyle;
    ctx.fillRect(0, canvas.height*0.3, 6, canvas.height*0.4); // Left bar
    ctx.fillRect(canvas.width-6, canvas.height*0.3, 6, canvas.height*0.4); // Right bar

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 16;
    return tex;
}

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
 */
export function createPrismNode(id, data, radius, commonUniforms) {
    const root = new THREE.Group();
    
    // Prism dimensions (MONOLITH STYLE - Large & Thin)
    // Target: ~70% screen width when frontal
    const width = radius * 2.2;  
    const height = radius * 4.5; // Even taller to reduce top gap
    const depth = radius * 0.1;  
    const cornerRadius = width * 0.05; // Smooth corners
    
    // 1. INNER WIREFRAME CORE (The "Brain/Data" inside)
    // Slightly smaller than glass
    const innerGeo = new RoundedBoxGeometry(width * 0.85, height * 0.85, depth * 0.8, 2, cornerRadius);
    const innerMat = new THREE.MeshBasicMaterial({
        color: data.color,
        wireframe: true,
        transparent: true,
        opacity: 0.15, // Faint holographic structure
        side: THREE.DoubleSide
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    root.add(innerMesh);

    // 2. GLASS SHELL
    const glassGeo = new RoundedBoxGeometry(width, height, depth, 4, cornerRadius);
    const glassMat = createGlassMaterial(data.color);
    
    // ⭐ MOBILE: Opaque glass
    glassMat.opacity = 0.85; 
    glassMat.transparent = true;
    glassMat.side = THREE.FrontSide; 
    
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.renderOrder = 1;
    root.add(glassMesh);
    
    // 3. TECH HUD OVERLAY (Brackets & Details)
    // Placed slightly in front of glass
    const hudTex = createTechHUDTexture(data.color);
    const hudGeo = new THREE.PlaneGeometry(width * 1.05, height * 1.02);
    const hudMat = new THREE.MeshBasicMaterial({
        map: hudTex,
        transparent: true,
        opacity: 0.9,
        side: THREE.FrontSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending // Glow effect
    });
    const hudMesh = new THREE.Mesh(hudGeo, hudMat);
    hudMesh.position.z = depth * 0.5 + 0.5; // Just on surface
    hudMesh.renderOrder = 2;
    root.add(hudMesh);

    // 4. EXTERNAL LABEL (Floating freely)
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
    
    // Move label further out
    labelMesh.position.z = depth * 0.5 + 5; 
    labelMesh.renderOrder = 3; 
    root.add(labelMesh);

    // 5. HIT BOX
    const hitMesh = new THREE.Mesh(
        new THREE.BoxGeometry(width * 1.5, height * 1.5, depth * 2),
        new THREE.MeshBasicMaterial({ visible: false })
    );
    hitMesh.userData = { id: id };
    root.add(hitMesh);

    return { root, hitMesh, labelMesh, glassMesh, innerMesh };
}
