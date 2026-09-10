import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../layout/Loader";

const GamingSetup: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const setup = useGLTF("./planet/modern_gaming_setup_ultimate_desk_pc_accessories.glb");

  const { center, maxDim } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(setup.scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const maxDim = Math.max(size.x, size.y, size.z);
    return { center, maxDim };
  }, [setup]);

  // Target size adjusted so the 3D model fits comfortably with generous margin on all sides, avoiding clipping edges when rotated
  const targetSize = isMobile ? 2.7 : 3.5;
  const computedScale = maxDim > 0 ? targetSize / maxDim : 0.04;

  return (
    <>
      {/* Studio Lighting Rig tailored for AF9D8E Cashmere Palette */}
      <ambientLight intensity={1.6} color="#FAF8F5" />
      <hemisphereLight intensity={1.1} color="#FAF8F5" groundColor="#8C7A6B" />
      
      {/* Key Light */}
      <directionalLight
        position={[10, 14, 10]}
        intensity={2.8}
        color="#FAF8F5"
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* Soft Warm Taupe Fill */}
      <directionalLight
        position={[-10, 10, 6]}
        intensity={1.8}
        color="#F5F1EB"
      />
      
      {/* Refined Cashmere Backlight / Rim */}
      <directionalLight
        position={[6, 8, -10]}
        intensity={2.2}
        color="#EAE3DB"
      />

      {/* Aesthetic Accent Glow Lights */}
      <pointLight position={[-4, 4, 4]} intensity={1.8} color="#AF9D8E" />
      <pointLight position={[4, 2, 2]} intensity={1.5} color="#8C7A6B" />
      <pointLight position={[0, -2, 3]} intensity={1.2} color="#C4B5A5" />

      {/* Model centered facing straight forward at a clean 180-degree horizontal alignment */}
      <group rotation={[0, 0, 0]} position={[0, -0.15, 0]}>
        <primitive
          object={setup.scene}
          scale={computedScale}
          position={[
            -center.x * computedScale,
            -center.y * computedScale,
            -center.z * computedScale,
          ]}
        />
      </group>
    </>
  );
};

const GamingSetupCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[550px] cursor-grab active:cursor-grabbing">
      <Canvas
        shadows
        frameloop="always"
        dpr={[1, 2]}
        camera={{ position: [0, 0.6, 7.8], fov: 38 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.8}
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.05}
            minPolarAngle={Math.PI / 6}
          />
          <GamingSetup isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default GamingSetupCanvas;

