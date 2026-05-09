import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const WebCube = ({ isHovered }) => {
  const meshRef = useRef();
  const targetScale = isHovered ? 1.2 : 1;

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.5;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    
    if (isHovered) {
      meshRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(meshRef.current.material.emissiveIntensity, 0.5, 0.1);
    } else {
      meshRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(meshRef.current.material.emissiveIntensity, 0.1, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#D4AF37" wireframe={true} emissive="#FFD700" emissiveIntensity={0.1} />
      </mesh>
    </Float>
  );
};

export const AICore = ({ isHovered }) => {
  const meshRef = useRef();
  const targetScale = isHovered ? 1.2 : 1;

  useFrame((state, delta) => {
    meshRef.current.rotation.x -= delta * 0.3;
    meshRef.current.rotation.y += delta * 0.6;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

    if (isHovered) {
      meshRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(meshRef.current.material.emissiveIntensity, 0.5, 0.1);
    } else {
      meshRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(meshRef.current.material.emissiveIntensity, 0.1, 0.1);
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="#D4AF37" wireframe={true} emissive="#FFD700" emissiveIntensity={0.1} />
      </mesh>
    </Float>
  );
};

export const CloudParticles = ({ isHovered }) => {
  const ref = useRef();
  const targetScale = isHovered ? 1.2 : 1;

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 200; i++) {
      const x = (Math.random() - 0.5) * 4;
      const y = (Math.random() - 0.5) * 4;
      const z = (Math.random() - 0.5) * 4;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.y -= delta * 0.2;
    ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Points ref={ref} positions={particles} stride={3}>
        <PointMaterial transparent color="#FFD700" size={0.1} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </Float>
  );
};

export const MobileShape = ({ isHovered }) => {
  const meshRef = useRef();
  const targetScale = isHovered ? 1.2 : 1;

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.4;
    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    
    if (isHovered) {
      meshRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(meshRef.current.material.emissiveIntensity, 0.5, 0.1);
    } else {
      meshRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(meshRef.current.material.emissiveIntensity, 0.1, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[1, 1, 3, 16]} />
        <meshStandardMaterial color="#D4AF37" wireframe={true} emissive="#FFD700" emissiveIntensity={0.1} />
      </mesh>
    </Float>
  );
};
