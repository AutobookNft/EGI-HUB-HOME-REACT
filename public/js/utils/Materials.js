
import * as THREE from 'three';

// HELPER: Create Glass Material (Shared)
export function createGlassMaterial(colorHex) {
    return new THREE.MeshPhysicalMaterial({
        color: colorHex,
        metalness: 0.1,
        roughness: 0.05,
        transparent: true,
        opacity: 0.35, // Semi-transparent glass
        envMapIntensity: 2.0,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        side: THREE.FrontSide
    });
}
