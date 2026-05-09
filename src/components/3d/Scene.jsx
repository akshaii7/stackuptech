import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import Lights from './Lights';
import HeroModel from './HeroModel';
import * as THREE from 'three';

const ScrollRig = ({ isMobile }) => {
  useFrame((state) => {
    // Basic parallax effect based on scroll position
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / (maxScroll || 1);
    
    // Move camera or scene slightly based on scroll
    // Adjust camera movement for mobile
    const cameraY = isMobile ? -scrollProgress * 6 : -scrollProgress * 4;
    const cameraZ = isMobile ? 7 - scrollProgress * 2 : 5 - scrollProgress * 2;
    
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, cameraY, 0.1);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, cameraZ, 0.1);
    state.camera.lookAt(0, -scrollProgress * 2, 0);
  });
  return null;
};

const Scene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, isMobile ? 7 : 5], fov: isMobile ? 55 : 45 }}>
        <Lights />
        <Suspense fallback={null}>
          <HeroModel isMobile={isMobile} />
          <Environment preset="city" />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.7} scale={15} blur={2.5} far={4} color="#D4AF37" />
        </Suspense>
        {/* We disable OrbitControls pan/zoom so it doesn't break scrolling */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2 + 0.2} minPolarAngle={Math.PI / 2 - 0.2} />
        <ScrollRig isMobile={isMobile} />
      </Canvas>
    </div>
  );
};

export default Scene;
