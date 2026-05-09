import React from 'react';

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFFFFF" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#FFB703" />
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#FFB703" />
    </>
  );
};

export default Lights;
