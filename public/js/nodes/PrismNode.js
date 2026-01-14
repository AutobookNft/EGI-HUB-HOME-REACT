import * as THREE from 'three';
import { RoundedBoxGeometry } from '../geometries/RoundedBoxGeometry.js';
import { createGlassMaterial } from '../utils/Materials.js';


// HELPER: Create Vertical Text Texture (Optimized for Monoliths)
function createTextTexture(text, subtext) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 2048; // Vertical aspect ratio
    const ctx = canvas.getContext('2d');
    
    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 1. Title - Vertical Orientation or Stacked?
    // Let's do STACKED and ROTATED for style
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.rotate(-Math.PI/2); // Read from bottom-up or just normal stacked? 
    // User said "sfruttando altezza". Let's keep it horizontal but LARGE and stacked, 
    // OR actually rotate 90deg to read sideways like a book spine?
    // Let's try Standard Horizontal but Filling the Vertical space with multiple lines if possible,
    // OR just rotated 90 degrees which is very "Prism/Monolith" styled.
    
    // Let's try ROTATED 90 degrees text (Sideways) -> Common in tall banners.
    // Text reads bottom to top.
    
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Text styling
    ctx.font = 'bold 160px "Rajdhani"'; 
    ctx.fillStyle = '#ffffff';  // White for max contrast on glass
    ctx.shadowColor = "rgba(0,0,0,0.8)";
    ctx.shadowBlur = 10;
    
    // Draw Text (Rotated)
    ctx.fillText(text.toUpperCase(), 0, -50);
    
    // Subtext
    if(subtext) {
        ctx.font = '80px "Share Tech Mono"';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillText(subtext.substring(0, 20).toUpperCase(), 0, 80);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 16;
    return tex;
}

/**
 * Create a Prism Node (Mobile version of SphereNode)
 * Uses RoundedBoxGeometry for premium look
 * DECORATION: Internal Bezel + Glossy Glass + Vertical Text
 */
export function createPrismNode(id, data, radius, commonUniforms) {
    const root = new THREE.Group();
    
    // Prism dimensions (MONOLITH STYLE - Large & Thin)
    const width = radius * 2.5;  // Wider
    const height = radius * 5.0; // Taller
    const depth = radius * 0.15; // Slightly thicker for glass refractions
    const cornerRadius = width * 0.04; 
    
    // 1. GLASS SHELL
    const glassGeo = new RoundedBoxGeometry(width, height, depth, 4, cornerRadius);
    const glassMat = createGlassMaterial(data.color);
    
    // ⭐ MOBILE: Glossy Physical Glass
    glassMat.opacity = 0.6; // More transparent to show internal structure
    glassMat.transmission = 1.0; // Real refraction
    glassMat.metalness = 0.2;
    glassMat.roughness = 0.0; // Polish
    glassMat.clearcoat = 1.0;
    glassMat.side = THREE.FrontSide;
    
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.renderOrder = 2; // Render after inner
    root.add(glassMesh);

    // 2. INTERNAL FRAME / BEZEL (The "Technological Core")
    // A simplified RoundedBox inside, slightly smaller
    const innerWidth = width * 0.9;
    const innerHeight = height * 0.95;
    const innerDepth = depth * 0.5;
    
    // We create a visible "Border" texture or just a wireframe of the inner box?
    // User liked "Cornice". Let's create a thicker wireframe or edge geometry.
    const innerGeo = new RoundedBoxGeometry(innerWidth, innerHeight, innerDepth, 2, cornerRadius);
    const innerEdges = new THREE.EdgesGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5,
        linewidth: 2
    });
    const bezelMesh = new THREE.LineSegments(innerEdges, innerMat);
    bezelMesh.renderOrder = 1; // Inside glass
    root.add(bezelMesh);
    
    // 3. INTERNAL GLOW COLUMN (Center of power)
    // A thin cylinder/box in the very center to give "energy"
    const coreGeo = new THREE.BoxGeometry(width * 0.05, height * 0.8, depth * 0.4);
    const coreMat = new THREE.MeshBasicMaterial({
        color: data.color,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending // Glow
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    root.add(coreMesh);

    // 4. VERTICAL LABEL (Sideways on the prism)
    const textTex = createTextTexture(data.label, data.tagline);
    // Texture is 1024x2048 (Vertical).
    // Plane should match ratio.
    const labelGeo = new THREE.PlaneGeometry(height * 0.4, width * 0.8); // Swapped for rotation? No, texture is rotated inside.
    // Wait, if texture is rotated 90deg in canvas, width/height ratio changes.
    // Canvas: 1024w x 2048h. Text is drawn rotated. 
    // Actually simpler: Keep canvas horizontal 2048x1024, draw horizontal text, 
    // BUT rotate the MESH 90 degrees?
    // Let's try the canvas rotation method above first, mapping to a vertical plane.
    const labelPlaneGeo = new THREE.PlaneGeometry(width, height); 
    const labelMat = new THREE.MeshBasicMaterial({ 
        map: textTex, 
        transparent: true, 
        side: THREE.FrontSide,
        depthWrite: false
    });
    const labelMesh = new THREE.Mesh(labelPlaneGeo, labelMat);
    labelMesh.position.z = depth * 0.5 + 2; 
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
