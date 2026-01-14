
import * as THREE from 'three';
import { magmaVShader, magmaFShader } from '../shaders/MagmaShader.js';
import { createGlassMaterial } from '../utils/Materials.js';

// HELPER: Create Text Texture (Spherical mapping)
function createTextTexture(text, subtext) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 2048; 
    canvas.height = 1024;
    // Clear background for transparency
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(`Generating Texture for: ${text}`);
    
    // Title
    ctx.font = 'bold 180px "Rajdhani"'; 
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = "rgba(0, 0, 0, 1.0)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    
    ctx.fillText(text.toUpperCase(), canvas.width / 2, canvas.height / 2);
    
    // Subtext
    if(subtext) {
        ctx.font = '100px "Share Tech Mono"';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.shadowBlur = 0;
        ctx.fillText(subtext.substring(0, 30).toUpperCase(), canvas.width / 2, canvas.height / 2 + 140);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 16;
    return tex;
}

export function createSphereNode(id, data, radius, commonUniforms) {
    const root = new THREE.Group();
    
    // 1. MAGMA CORE (Volumetric)
    const coreGeo = new THREE.IcosahedronGeometry(radius * 0.5, 5); 
    const coreMat = new THREE.ShaderMaterial({
        uniforms: {
            uColor: { value: new THREE.Color(data.color) },
            uTime: commonUniforms.uTime
        },
        vertexShader: magmaVShader,
        fragmentShader: magmaFShader
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.renderOrder = 0; 
    root.add(coreMesh);

    // 2. INTERNAL LABEL (Billboard Plane)
    // Check if font is loaded before creating TextGeometry
    if (!globalFont) {
        console.warn("Font not loaded yet for TextGeometry. Falling back to CanvasTexture.");
        const textTex = createTextTexture(data.label, data.tagline);
        const labelGeo = new THREE.PlaneGeometry(radius * 2.5, radius * 1.25); 
        const labelMat = new THREE.MeshBasicMaterial({ 
            map: textTex, 
            transparent: true, 
            side: THREE.DoubleSide,
            depthTest: false, // FORCE VISIBILITY on top of magma
            depthWrite: false
        });
        const labelMesh = new THREE.Mesh(labelGeo, labelMat);
        labelMesh.renderOrder = 999; // EXTREME PRIORITY (Post-Process like)
        root.add(labelMesh);
    } else {
        const textGeometry = new TextGeometry(data.label, {
            font: globalFont,
            size: radius * 0.5, // Adjust size relative to sphere radius
            height: radius * 0.05, // Small height for 3D effect
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: radius * 0.01,
            bevelSize: radius * 0.01,
            bevelSegments: 3
        });
        textGeometry.computeBoundingBox();
        const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
        textGeometry.translate(-textWidth / 2, 0, 0); // Center the text

        // ⭐ BLACK text for contrast against reflections
        const textMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,  // Black instead of white
            transparent: true,
            opacity: 1.0,
            side: THREE.DoubleSide,
            depthTest: false, // FORCE VISIBILITY on top of magma
            depthWrite: false
        });
        const labelMesh = new THREE.Mesh(textGeometry, textMaterial);
        labelMesh.position.z = radius * 0.6; // Position slightly in front of the core
        labelMesh.renderOrder = 999; // EXTREME PRIORITY (Post-Process like)
        root.add(labelMesh);
    }

    // 3. GLASS SHELL
    const glassGeo = new THREE.IcosahedronGeometry(radius, 4);
    const glassMat = createGlassMaterial(data.color);
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.renderOrder = 2;
    root.add(glassMesh);

    // 4. GYROSCOPIC RINGS
    const ringMat = new THREE.MeshStandardMaterial({ 
        color: 0xffffff, 
        metalness: 0.8, 
        roughness: 0.2,
        transparent: true,
        opacity: 0.6
    });
    
    const r1 = new THREE.Mesh(new THREE.TorusGeometry(radius * 1.3, 0.15, 16, 100), ringMat);
    r1.rotation.x = Math.PI / 1.7;
    root.add(r1);

    const r2 = new THREE.Mesh(new THREE.TorusGeometry(radius * 1.5, 0.15, 16, 100), ringMat);
    r2.rotation.y = Math.PI / 0.5;
    root.add(r2);

    // 5. HIT SPHERE
    const hitMesh = new THREE.Mesh(
        new THREE.SphereGeometry(radius * 2, 16, 16),
        new THREE.MeshBasicMaterial({ visible: false })
    );
    hitMesh.userData = { id: id };
    root.add(hitMesh);

    return { root, coreMesh, r1, r2, hitMesh, labelMesh, glassMesh };
}
