/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedPlane() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Subtle rotation animation
    meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    meshRef.current.rotation.y = Math.cos(time * 0.3) * 0.1;
    
    // Follow mouse pointer slightly
    const x = (state.pointer.x * state.viewport.width) / 4;
    const y = (state.pointer.y * state.viewport.height) / 4;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x, 0.1);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y, 0.1);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[8, 8, 32, 32]} />
      <MeshTransmissionMaterial
        background={new THREE.Color('#020617')}
        transmission={0.9}
        thickness={2}
        roughness={0.2}
        chromaticAberration={0.5}
        anisotropy={0.3}
        distortion={0.5}
        distortionScale={0.2}
        temporalDistortion={0.1}
      />
    </mesh>
  );
}

export default function FluidGlassSimple() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      <AnimatedPlane />
    </Canvas>
  );
}
