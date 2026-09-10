import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../layout/Loader";

const TorusKnotShape = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.8}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshPhysicalMaterial
          color="#AF9D8E"
          emissive="#AF9D8E"
          emissiveIntensity={0.25}
          roughness={0.2}
          metalness={0.8}
          clearcoat={0.6}
          clearcoatRoughness={0.1}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
};

const HeroGeometryCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full opacity-80 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        <ambientLight intensity={0.6} color="#FAF7F4" />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#D6C7B9" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#8C7A6B" />
        <pointLight position={[0, 0, 5]} intensity={1.2} color="#AF9D8E" />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
          <TorusKnotShape />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroGeometryCanvas;
