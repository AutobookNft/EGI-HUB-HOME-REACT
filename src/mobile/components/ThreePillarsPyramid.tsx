import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { homepageContent } from '../data/homepage';
import { useI18n } from '@/i18n';

// ------------------------------------------------------------------
// CONFIGURATION
// ------------------------------------------------------------------
const PILLAR_COLORS = [
    '#ffaa00', // P1: Gold (Concretezza)
    '#00ffdd', // P2: Cyan (Equilibrium)
    '#aa00ff', // P3: Purple (Accessibilità)
    '#b91d47', // P4: Florence Red (Branding) - Replaces "Dirty" White
];

const CUBE_SIZE = 2.5; // Base size for the cube

// ------------------------------------------------------------------
// CUBE MESH
// ------------------------------------------------------------------
function Cube() {
    const meshRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);
    const { locale } = useI18n();
    const content = homepageContent[locale].pillars.items;

    // Load Generative Textures
    const topTexture = useLoader(THREE.TextureLoader, '/img/cube_top.png');
    const bottomTexture = useLoader(THREE.TextureLoader, '/img/cube_bottom.png');

    // Data for the 4 faces
    const faces = [
        { title: content[0].title, desc: content[0].description, color: PILLAR_COLORS[0] }, // Front
        { title: content[1].title, desc: content[1].description, color: PILLAR_COLORS[1] }, // Right
        { title: content[2].title, desc: content[2].description, color: PILLAR_COLORS[2] }, // Back
        { title: 'FLORENCE EGI', desc: 'Certificazione di Valore', color: PILLAR_COLORS[3] }, // Left
    ];

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2;
        }
        if (groupRef.current && meshRef.current) {
            // Sync inner text group rotation with the shell
            groupRef.current.rotation.y = meshRef.current.rotation.y;
        }
    });

    const glassProps = {
        metalness: 0.1,
        roughness: 0.05,
        transmission: 0.99, // Crystal clear
        transparent: true,
        opacity: 0.2, // Subtle tint
        thickness: 0.5,
        envMapIntensity: 2,
        clearcoat: 1,
        side: THREE.DoubleSide
    };

    return (
        <group>
            {/* 1. GLASS SHELL (CUBE) - MULTI MATERIAL */}
            <mesh ref={meshRef} position={[0, 0, 0]}>
                <boxGeometry args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]} />

                {/* Material 0: Right (+x) -> Cyan */}
                <meshPhysicalMaterial attach="material-0" color={PILLAR_COLORS[1]} {...glassProps} />

                {/* Material 1: Left (-x) -> Florence Red */}
                <meshPhysicalMaterial attach="material-1" color={PILLAR_COLORS[3]} {...glassProps} />

                {/* Material 2: Top (+y) -> Clear */}
                {/* Make top/bottom glass purely transparent to not obscure the caps */}
                <meshPhysicalMaterial attach="material-2" color="white" {...glassProps} opacity={0} transmission={1} />

                {/* Material 3: Bottom (-y) -> Clear */}
                <meshPhysicalMaterial attach="material-3" color="white" {...glassProps} opacity={0} transmission={1} />

                {/* Material 4: Front (+z) -> Gold */}
                <meshPhysicalMaterial attach="material-4" color={PILLAR_COLORS[0]} {...glassProps} />

                {/* Material 5: Back (-z) -> Purple */}
                <meshPhysicalMaterial attach="material-5" color={PILLAR_COLORS[2]} {...glassProps} />
            </mesh>

            {/* 2. INNER TEXT CONTENT */}
            <group ref={groupRef} position={[0, 0, 0]}>
                {/* Side Faces (Variables) */}
                <InternalFaces faces={faces} />

                {/* Top Face (Generated Art) - Unlit Basic Material for max visibility */}
                {/* Positioned at 1.27 to sit just on top of the 2.5 size cube (1.25 radius) */}
                <mesh position={[0, 1.27, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[2.5, 2.5]} />
                    <meshBasicMaterial
                        map={topTexture}
                        color="white"
                        side={THREE.DoubleSide}
                    // Remove transparency if texture is solid to avoid depth issues
                    />
                </mesh>

                {/* Bottom Face (Generated Art) - Unlit Basic Material */}
                <mesh position={[0, -1.27, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[2.5, 2.5]} />
                    <meshBasicMaterial
                        map={bottomTexture}
                        color="white"
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </group>
        </group>
    );
}

function InternalFaces({ faces }: { faces: any[] }) {
    // Distance from center to face. 
    // Cube size is 2.5. Half size is 1.25.
    // Placing perfectly ON the surface (1.25) or slightly outside (1.26) 
    // to avoid z-fighting with the glass surface.
    const OFFSET = 1.26;

    return (
        <>
            {/* Face 1 (Front, +Z) */}
            <FaceText
                index={0} data={faces[0]}
                position={[0, 0, OFFSET]}
                rotation={[0, 0, 0]}
            />
            {/* Face 2 (Right, +X) */}
            <FaceText
                index={1} data={faces[1]}
                position={[OFFSET, 0, 0]}
                rotation={[0, Math.PI / 2, 0]} // Rotate Y +90 to face +X (Outward)
            />
            {/* Face 3 (Back, -Z) */}
            <FaceText
                index={2} data={faces[2]}
                position={[0, 0, -OFFSET]}
                rotation={[0, Math.PI, 0]} // Rotate Y 180 to face -Z (Outward)
            />
            {/* Face 4 (Left, -X) */}
            <FaceText
                index={3} data={faces[3]}
                position={[-OFFSET, 0, 0]}
                rotation={[0, -Math.PI / 2, 0]} // Rotate Y -90 to face -X (Outward)
            />
        </>
    );
}

function FaceText({ data, index, position, rotation }: any) {
    return (
        <group rotation={rotation} position={position}>
            {/* Title */}
            <Text
                fontSize={0.25}
                color={data.color}
                anchorX="center"
                anchorY="middle"
                position={[0, 0.5, 0]}
                maxWidth={2.0}
                textAlign="center"
                // Ensure material is emissive for bloom
                material-toneMapped={false}
            >
                {data.title.toUpperCase()}
            </Text>

            {/* Description */}
            <Text
                fontSize={0.1}
                color="white"
                anchorX="center"
                anchorY="top"
                position={[0, 0.2, 0]}
                maxWidth={1.8}
                textAlign="center"
                lineHeight={1.4}
                material-toneMapped={false}
            >
                {data.desc}
            </Text>

            {/* Number/Footer */}
            <Text
                fontSize={0.08}
                color={data.color}
                position={[0, -0.8, 0]}
                letterSpacing={0.1}
                material-toneMapped={false}
            >
                {index === 3 ? 'FLORENCE EGI' : `0${index + 1}`}
            </Text>
        </group>
    );
}

// ------------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------------
export function ThreePillarsPyramid() {
    return (
        <div className="w-full h-[500px] relative">
            <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
                <color attach="background" args={['#050510']} />

                {/* Lighting */}
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="white" />
                <directionalLight position={[-10, 10, 5]} intensity={1} color="white" />

                {/* Environment */}
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                {/* 3D Content */}
                <Cube />

                {/* Post Processing */}
                <EffectComposer enabled={true}>
                    <Bloom
                        luminanceThreshold={0.2}
                        mipmapBlur
                        intensity={1.2}
                        radius={0.5}
                    />
                </EffectComposer>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={true}
                    autoRotateSpeed={2}
                />
            </Canvas>

            {/* Overlay Gradient for integration */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </div>
    );
}
