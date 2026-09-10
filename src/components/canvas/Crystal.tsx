import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../layout/Loader";

const CrystalMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.4}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#FAF8F5"
          emissive="#8C7A6B"
          emissiveIntensity={0.25}
          roughness={0.1}
          metalness={0.2}
          transmission={0.9}
          thickness={1.5}
          ior={1.5}
          clearcoat={1}
        />
      </mesh>
    </Float>
  );
};

const CrystalCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <ambientLight intensity={1.2} color="#FAF8F5" />
      <directionalLight position={[5, 5, 5]} intensity={2.2} color="#FAF8F5" />
      <pointLight position={[-5, -5, -5]} intensity={1.8} color="#AF9D8E" />
      <pointLight position={[3, -2, 3]} intensity={1.5} color="#8C7A6B" />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate autoRotateSpeed={1.2} enableZoom={false} enablePan={false} />
        <CrystalMesh />
      </Suspense>
    </Canvas>
  );
};

export default CrystalCanvas;
