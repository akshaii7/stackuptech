import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const HeroModel = ({ isMobile }) => {
  const meshRef = useRef();
  const innerRef = useRef();
  const groupRef = useRef();
  
  // Track mouse position
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    // Only track mouse movement on desktop for performance and because mobile doesn't have a mouse
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.1;
      innerRef.current.rotation.y -= delta * 0.15;
    }
    if (groupRef.current) {
      // Parallax effect based on mouse movement (only on desktop)
      if (!isMobile) {
        const targetX = mouse.current.x * 0.5;
        const targetY = mouse.current.y * 0.5;
        
        groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.1);
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.1);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY * 0.2, 0.1);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, -targetX * 0.2, 0.1);
      } else {
        // Subtle automatic floating movement for mobile
        const time = state.clock.getElapsedTime();
        groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
      }
    }
  });

  const baseScale = isMobile ? 1.2 : 1.8;
  const innerScale = isMobile ? 0.8 : 1.2;

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2.5}>
        {/* Outer tech wireframe */}
        <mesh ref={meshRef} scale={baseScale}>
          <icosahedronGeometry args={[1, 2]} />
          <MeshDistortMaterial
            color="#D4AF37"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.1}
            metalness={1}
            wireframe={true}
            emissive="#D4AF37"
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Inner glowing core */}
        <mesh ref={innerRef} scale={innerScale}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#0A0A0A"
            roughness={0.2}
            metalness={0.9}
            envMapIntensity={2}
            emissive="#FFD700"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>
    </group>
  );
};

export default HeroModel;
