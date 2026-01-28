import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Stars, Text, RenderTexture, PerspectiveCamera } from '@react-three/drei';
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
    '#ffffff', // Branding Face (White/Glass)
];

const PYRAMID_SIZE = 2.8;
const PYRAMID_HEIGHT = 4.0;

// ------------------------------------------------------------------
// TEXT TEXTURE COMPONENT (Canvas-based)
// ------------------------------------------------------------------
function FaceContent({ title, description, color, index }: { title: string; description: string; color: string; index: number }) {
    // We render this content into a texture
    return (
        <group>
            {/* Background glow for readability */}
            <mesh position={[0, 0, -0.1]}>
                <planeGeometry args={[4, 8]} />
                <meshBasicMaterial color="black" transparent opacity={0.4} />
            </mesh>

            <Text
                font="/fonts/Rajdhani-Bold.ttf" // Ensure this font exists or fallback
                fontSize={0.8}
                color={color}
                anchorX="center"
                anchorY="middle"
                position={[0, 1, 0]}
                maxWidth={3}
                textAlign="center"
            >
                {title.toUpperCase()}
            </Text>

            <Text
                font="/fonts/Rajdhani-Regular.ttf"
                fontSize={0.25}
                color="white"
                anchorX="center"
                anchorY="top"
                position={[0, 0.2, 0]}
                maxWidth={2.5}
                textAlign="center"
                lineHeight={1.4}
            >
                {description}
            </Text>

            <Text
                font="/fonts/ShareTechMono-Regular.ttf"
                fontSize={0.15}
                color={color}
                position={[0, -2, 0]}
                letterSpacing={0.2}
            >
                {index === 3 ? 'FLORENCE EGI' : `PILASTRO 0${index + 1}`}
            </Text>
        </group>
    );
}

// ------------------------------------------------------------------
// PYRAMID MESH
// ------------------------------------------------------------------
function Pyramid() {
    const meshRef = useRef<THREE.Mesh>(null);
    const { locale } = useI18n();
    const content = homepageContent[locale].pillars.items;

    // Data for the 4 faces
    const faces = [
        { title: content[0].title, desc: content[0].description, color: PILLAR_COLORS[0] },
        { title: content[1].title, desc: content[1].description, color: PILLAR_COLORS[1] },
        { title: content[2].title, desc: content[2].description, color: PILLAR_COLORS[2] },
        { title: 'FLORENCE EGI', desc: 'Certificazione di Valore', color: PILLAR_COLORS[3] },
    ];

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2; // Slow rotation
        }
    });

    // Create a Cone with 4 segments (Pyramid)
    // We will use 4 separate planes positioned as faces to handle text
    // BUT to keep the "Glass Shell" look from the reference, we need the actual Volume.
    // So we do BOTH: A glass shell volume + Inner text planes.

    return (
        <group>
            {/* 1. GLASS SHELL */}
            <mesh ref={meshRef} position={[0, -0.5, 0]}>
                <coneGeometry args={[PYRAMID_SIZE, PYRAMID_HEIGHT, 4]} />
                <meshPhysicalMaterial
                    color="#ffffff"
                    metalness={0.1}
                    roughness={0.05}
                    transmission={0.9} // Glass
                    transparent={true}
                    opacity={0.3}
                    thickness={1.5}
                    envMapIntensity={1.5}
                    clearcoat={1}
                />
            </mesh>

            {/* 2. INNER CONTENT (Rotated with the shell? yes/no? Let's rotate them too) */}
            <group ref={(g) => { if (g && meshRef.current) g.rotation.y = meshRef.current.rotation.y; }}>
                {/* We need to position 4 text planes to match the 4 faces of the pyramid */}
                {/* This requires some trigonometry or trial/error to align with the cone faces */}
                <InnerTriangularFaces faces={faces} />
            </group>
        </group>
    );
}
// Helper to position content on the faces of a 4-sided pyramid
function InnerTriangularFaces({ faces }: { faces: any[] }) {
    // A 4-sided cone geometry is aligned with corners at diagonals by default in Three.js?
    // Actually ConeGeometry(r, h, 4) usually aligns faces to X/Z axes if rotated correctly.
    // We'll attach the text to a group that rotates with the main mesh.

    // Calculated offsets for a pyramid of Height 4, Radius 2.8
    // The faces are slanted.

    const offset = 1.2; // Distance from center
    const yPos = -0.5;

    return (
        <group position={[0, -0.5, 0]}>
            {/* Face 1 (Front) */}
            <InnerFace index={0} data={faces[0]} position={[0, 0, offset]} rotation={[Math.PI / 8, 0, 0]} />
            {/* Face 2 (Right) */}
            <InnerFace index={1} data={faces[1]} position={[offset, 0, 0]} rotation={[0, -Math.PI / 2, Math.PI / 8]} />
            {/* Face 3 (Back) */}
            <InnerFace index={2} data={faces[2]} position={[0, 0, -offset]} rotation={[-Math.PI / 8, Math.PI, 0]} />
            {/* Face 4 (Left) */}
            <InnerFace index={3} data={faces[3]} position={[-offset, 0, 0]} rotation={[0, Math.PI / 2, Math.PI / 8]} />
        </group>
    )
}

function InnerFace({ data, position, rotation, index }: any) {
    // We render the text onto a texture used on a Plane
    return (
        <mesh position={position} rotation={rotation}>
            <planeGeometry args={[2.5, 3]} />
            <meshBasicMaterial transparent opacity={0.9} side={THREE.DoubleSide}>
                <RenderTexture attach="map">
                    <FaceContent
                        title={data.title}
                        description={data.desc}
                        color={data.color}
                        index={index}
                    />
                </RenderTexture>
            </meshBasicMaterial>
        </mesh>
    );
}


// ------------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------------
export function ThreePillarsPyramid() {
    return (
        <div className="w-full h-[500px] relative">
            <Canvas camera={{ position: [0, 1, 6], fov: 45 }}>
                <color attach="background" args={['#050510']} />

                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffdd" />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#aa00ff" />

                {/* Environment */}
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                {/* 3D Content */}
                <Pyramid />

                {/* Post Processing */}
                <EffectComposer disableNormalPass>
                    <Bloom
                        luminanceThreshold={0.2}
                        mipmapBlur
                        intensity={1.5}
                        radius={0.6}
                    />
                </EffectComposer>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 2}
                    autoRotate={true}
                    autoRotateSpeed={2}
                />
            </Canvas>

            {/* Overlay Gradient for integration */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </div>
    );
}
