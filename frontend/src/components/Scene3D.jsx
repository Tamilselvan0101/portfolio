import { useRef, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

const FONT_URL = 'https://cdn.jsdelivr.net/npm/three@0.182.0/examples/fonts/helvetiker_regular.typeface.json';

// Shared mouse position — updated from window-level listener (bypasses pointer-events: none)
const globalMouse = { x: 0, y: 0 };

// Floating geometric text component with cursor repulsion
const FloatingText = ({ position, text, color, speed = 1, floatIntensity = 1, scale = 0.35 }) => {
    const outerRef = useRef();
    const { camera } = useThree();
    const originalPos = useMemo(() => new THREE.Vector3(...position), [position]);
    const offset = useRef({ x: 0, y: 0 });
    const velocity = useRef({ x: 0, y: 0 });
    const repulsionRadius = 6;
    const repulsionStrength = 2.5;

    useFrame(() => {
        if (!outerRef.current) return;

        // Project mouse (NDC) into 3D space at the z-depth of this text
        const mouseNDC = new THREE.Vector3(globalMouse.x, globalMouse.y, 0.5);
        mouseNDC.unproject(camera);
        const dir = mouseNDC.clone().sub(camera.position).normalize();
        const t = (originalPos.z - camera.position.z) / dir.z;
        const mouseAt = camera.position.clone().add(dir.clone().multiplyScalar(t));

        // Calculate distance between mouse and text
        const dx = originalPos.x - mouseAt.x;
        const dy = originalPos.y - mouseAt.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = 0;
        let targetY = 0;

        if (dist < repulsionRadius) {
            // Quadratic easing — gentle ramp, not abrupt
            const ratio = 1 - dist / repulsionRadius;
            const force = ratio * ratio * repulsionStrength;
            const angle = Math.atan2(dy, dx);
            targetX = Math.cos(angle) * force;
            targetY = Math.sin(angle) * force;
        }

        // Smooth spring-like interpolation
        velocity.current.x += (targetX - offset.current.x) * 0.04;
        velocity.current.y += (targetY - offset.current.y) * 0.04;
        velocity.current.x *= 0.85; // damping
        velocity.current.y *= 0.85;
        offset.current.x += velocity.current.x;
        offset.current.y += velocity.current.y;

        // Apply offset to the outer group (above Float, so Float can't override it)
        outerRef.current.position.x = originalPos.x + offset.current.x;
        outerRef.current.position.y = originalPos.y + offset.current.y;
        outerRef.current.position.z = originalPos.z;
    });

    return (
        <group ref={outerRef} position={position}>
            <Float speed={speed * 2} rotationIntensity={0} floatIntensity={floatIntensity * 2}>
                <group scale={scale}>
                    <Center>
                        <Text3D
                            font={FONT_URL}
                            size={1}
                            height={0.3}
                            curveSegments={3}
                            bevelEnabled={false}
                        >
                            {text}
                            <meshStandardMaterial
                                color={color}
                                wireframe
                                transparent
                                opacity={0.3}
                                emissive={color}
                                emissiveIntensity={0.3}
                            />
                        </Text3D>
                    </Center>
                </group>
            </Float>
        </group>
    );
};

// Ambient particles
const Particles = ({ count = 200 }) => {
    const points = useRef();

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 30;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
        }
        return positions;
    }, [count]);

    const particlesColors = useMemo(() => {
        const colors = new Float32Array(count * 3);
        const palette = [
            new THREE.Color('#f59e0b'), // amber
            new THREE.Color('#f43f5e'), // rose
            new THREE.Color('#8b5cf6'), // purple
            new THREE.Color('#14b8a6'), // teal
            new THREE.Color('#d4a574'), // gold
        ];
        for (let i = 0; i < count; i++) {
            const color = palette[Math.floor(Math.random() * palette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return colors;
    }, [count]);

    useFrame(() => {
        if (points.current) {
            points.current.rotation.y += 0.0005;
            points.current.rotation.x += 0.0002;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={particlesPosition}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={particlesColors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
};

// Skill labels configuration
const skillLabels = [
    // Row 1 - AI/ML Core
    { text: 'AI Developer', position: [-7, 4, -10], color: '#f59e0b', speed: 0.5, floatIntensity: 1.3, scale: 0.55 },
    { text: 'LLMs', position: [6, 3, -8], color: '#f43f5e', speed: 0.7, floatIntensity: 1.1, scale: 0.7 },
    { text: 'Data Scientist', position: [-3, -3, -12], color: '#8b5cf6', speed: 0.4, floatIntensity: 1.0, scale: 0.45 },
    { text: 'ML Engineer', position: [8, -1, -9], color: '#14b8a6', speed: 0.6, floatIntensity: 1.4, scale: 0.5 },
    { text: 'Deep Learning', position: [-8, -5, -11], color: '#d4a574', speed: 0.5, floatIntensity: 0.9, scale: 0.42 },
    { text: 'NLP', position: [4, 5, -7], color: '#f59e0b', speed: 0.8, floatIntensity: 1.5, scale: 0.75 },

    // Row 2 - Web Technologies
    { text: 'React', position: [-5, 1, -6], color: '#f43f5e', speed: 0.6, floatIntensity: 1.2, scale: 0.6 },
    { text: 'Node.js', position: [3, -4, -14], color: '#8b5cf6', speed: 0.3, floatIntensity: 1.0, scale: 0.55 },
    { text: 'RAG', position: [9, 2, -13], color: '#14b8a6', speed: 0.7, floatIntensity: 1.3, scale: 0.7 },
    { text: 'TypeScript', position: [-6, -2, -15], color: '#d4a574', speed: 0.4, floatIntensity: 0.8, scale: 0.45 },
    { text: 'Python', position: [2, 6, -10], color: '#f59e0b', speed: 0.9, floatIntensity: 1.1, scale: 0.6 },

    // Row 3 - Infrastructure & Data
    { text: 'Statistics', position: [-9, 3, -16], color: '#f43f5e', speed: 0.5, floatIntensity: 1.4, scale: 0.42 },
    { text: 'Linux', position: [7, -5, -11], color: '#8b5cf6', speed: 0.6, floatIntensity: 0.9, scale: 0.55 },
    { text: 'MySQL', position: [-4, 5, -13], color: '#14b8a6', speed: 0.3, floatIntensity: 1.2, scale: 0.5 },
    { text: 'REST APIs', position: [5, -3, -16], color: '#d4a574', speed: 0.7, floatIntensity: 1.0, scale: 0.45 },
    { text: 'WebSockets', position: [-7, -4, -8], color: '#f59e0b', speed: 0.4, floatIntensity: 1.3, scale: 0.4 },
    { text: 'System Design', position: [1, 0, -18], color: '#f43f5e', speed: 0.5, floatIntensity: 1.1, scale: 0.38 },
];

// Main 3D Scene
const SceneContent = () => {
    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} color="#f59e0b" />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
            <pointLight position={[0, 10, -10]} intensity={0.3} color="#f43f5e" />

            <Particles count={300} />

            <Suspense fallback={null}>
                {skillLabels.map((label, i) => (
                    <FloatingText
                        key={i}
                        text={label.text}
                        position={label.position}
                        color={label.color}
                        speed={label.speed}
                        floatIntensity={label.floatIntensity}
                        scale={label.scale}
                    />
                ))}
            </Suspense>
        </>
    );
};

const Scene3D = () => {
    // Track mouse at the window level — bypasses pointer-events: none on the container
    useEffect(() => {
        const handleMouseMove = (e) => {
            // Convert to NDC (-1 to 1)
            globalMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            globalMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="scene3d-container">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <SceneContent />
            </Canvas>
        </div>
    );
};

export default Scene3D;
