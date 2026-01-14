
import * as THREE from 'three';

// HELPER: Create Glass Material (Shared)
// VISUALS: High-End Glass Material (Physical PBR)
export function createGlassMaterial(colorHex) {
    return new THREE.MeshPhysicalMaterial({
        color: colorHex,
        metalness: 0.2,   // Higher metal for reflection
        roughness: 0.0,   // Perfect polish
        transmission: 1.0, // Real glass refraction
        thickness: 2.5,   // Thick glass volume
        envMapIntensity: 2.5, // Strong reflections
        clearcoat: 1.0,   // Top coat
        clearcoatRoughness: 0.0,
        ior: 1.5,
        transparent: true,
        opacity: 0.5,
        side: THREE.FrontSide, // Front only for prisms
        attenuationColor: new THREE.Color(colorHex), // Tint volume
        attenuationDistance: 0.5
    });
}
