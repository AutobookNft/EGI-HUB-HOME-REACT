
import * as THREE from 'three';
import { createGlassMaterial } from '../utils/Materials.js';

/**
 * Creates a text texture for a cube face.
 * Matches the visual style of EGI cards (clean text).
 */
function createFaceTexture(text, subtext, color) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 1024;
    
    // Background: Dark match for inner mesh 0x1a1a2e
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Text Style
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Main Text
    ctx.font = 'bold 200px "Rajdhani"'; 
    ctx.fillStyle = '#ffffff';
    // Glow effect
    ctx.shadowColor = new THREE.Color(color).getStyle();
    ctx.shadowBlur = 20;
    
    ctx.fillText(text.toUpperCase(), canvas.width / 2, canvas.height / 2 - (subtext ? 60 : 0));
    
    // Subtext
    if(subtext) {
        ctx.font = 'bold 80px "Share Tech Mono"';
        ctx.fillStyle = '#cccccc';
        ctx.shadowBlur = 0;
        ctx.fillText(subtext.toUpperCase(), canvas.width / 2, canvas.height / 2 + 120);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
}

/**
 * CREATE CUBE NODE
 * Replicates logic from CollectionCube.js exactly:
 * 1. Inner Box (MeshStandardMaterial) -> Holds Content/Text
 * 2. Glass Shell (MeshPhysicalMaterial) -> Holds Color/Refraction
 * 3. Edges (LineSegments)
 */
export function createCubeNode(id, data, radius, commonUniforms) {
    const root = new THREE.Group();
    
    // Size scaling to match volume of original spheres
    // Cylinder/Cube size approx radius * 1.5
    const size = radius * 1.4; 

    // --- 1. INNER CUBE (Content) ---
    const innerGeo = new THREE.BoxGeometry(size, size, size);
    const innerMaterials = [];
    
    // Prepare Label Splitting (Front/Back)
    const labelParts = data.label.split(' ');
    const labelFront = labelParts[0];
    const labelBack = labelParts.length > 1 ? labelParts.slice(1).join(' ') : data.tagline?.split(' ')[0] || data.label;
    
    // Face Textures
    const texFront = createFaceTexture(labelFront, null, data.color);
    const texBack = createFaceTexture(labelBack, null, data.color);
    
    // Base Material (Dark, Rough) - "0x1a1a2e" from reference
    const baseMatParams = {
        color: 0x1a1a2e,
        roughness: 0.8,
        metalness: 0.2,
        side: THREE.FrontSide
    };

    // Text Material (Emissive for readability)
    const textMatParams = {
        ...baseMatParams,
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 0.8  // Glowy text
    };

    // Order: [+X, -X, +Y, -Y, +Z, -Z] => [Right, Left, Top, Bottom, Front, Back]
    // We put text on Front (4) and Back (5)
    // Sides get base material
    
    for(let i=0; i<6; i++) {
        if(i === 4) { // Front
            const m = new THREE.MeshStandardMaterial(textMatParams);
            m.map = texFront;
            m.emissiveMap = texFront;
            innerMaterials.push(m);
        } else if(i === 5) { // Back
             const m = new THREE.MeshStandardMaterial(textMatParams);
            m.map = texBack;
            m.emissiveMap = texBack;
            innerMaterials.push(m);
        } else {
            innerMaterials.push(new THREE.MeshStandardMaterial(baseMatParams));
        }
    }

    const innerMesh = new THREE.Mesh(innerGeo, innerMaterials);
    innerMesh.renderOrder = 1;
    root.add(innerMesh);

    // --- 2. GLASS SHELL (Outer) ---
    const glassSize = size * 1.05;
    const glassGeo = new THREE.BoxGeometry(glassSize, glassSize, glassSize);
    
    // Logic from CollectionCube.js options defaults
    const glassMat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(data.color), // Dynamic Color
        metalness: 0.9,
        roughness: 0.05,
        transparent: true,
        opacity: 0.25, // Slightly more opaque for visibility
        side: THREE.FrontSide,
        depthWrite: false,
        envMapIntensity: 0.5,
        clearcoat: 1.0,
        transmission: 0 // Explicitly 0 per code reference (alpha blend only)
    });
    
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.renderOrder = 2;
    root.add(glassMesh);

    // --- 3. EDGES ---
    const edgesGeo = new THREE.EdgesGeometry(glassGeo);
    const edgesMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.4,
        linewidth: 1
    });
    const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
    edgesMesh.renderOrder = 3;
    root.add(edgesMesh);

    // --- 4. GYRO RINGS (Dynamic Animation Support) ---
    // Square frames to match cube theme
    const frameGeo = new THREE.BoxGeometry(size * 1.5, size * 1.5, size * 0.1);
    const frameEdges = new THREE.EdgesGeometry(frameGeo);
    const ringMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
    });
    
    // Ring 1
    const r1 = new THREE.LineSegments(frameEdges, ringMat);
    root.add(r1);

    // Ring 2 (Larger, Rotated)
    const frameGeo2 = new THREE.BoxGeometry(size * 1.7, size * 1.7, size * 0.1);
    const frameEdges2 = new THREE.EdgesGeometry(frameGeo2);
    const r2 = new THREE.LineSegments(frameEdges2, ringMat);
    r2.rotation.y = Math.PI / 2; // Perpendicular
    root.add(r2);

    // --- 4. HIT BOX ---
    const hitMesh = new THREE.Mesh(
        new THREE.BoxGeometry(size * 1.5, size * 1.5, size * 1.5),
        new THREE.MeshBasicMaterial({ visible: false })
    );
    hitMesh.userData = { id: id };
    root.add(hitMesh);
    
    // Initial specific rotation from reference
    // root.rotation.x = Math.PI * 0.15;
    // root.rotation.y = Math.PI * 0.25;
    // BUT engine.js handles rotation in animate loop. We leave it zero here.

    return { root, innerMesh, glassMesh, edgesMesh, hitMesh, r1, r2 };
}
