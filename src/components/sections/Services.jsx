import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { WebCube, CloudParticles, AICore, MobileShape } from '../3d/ServiceIcons';

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group relative bg-[#050505]/80 backdrop-blur-md p-8 sm:p-10 lg:p-12 rounded-[1.5rem] sm:rounded-[2rem] border border-[#FFD700]/10 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-6 sm:mb-8">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <service.Icon3D isHovered={isHovered} />
          </Canvas>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 tracking-tight group-hover:text-[#FFD700] transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-white/60 text-base sm:text-lg leading-relaxed group-hover:text-white/80 transition-colors duration-300">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Web Architecture',
      description: 'Modern, scalable, and high-performance applications built with next-gen web technologies.',
      Icon3D: WebCube,
    },
    {
      title: 'Cloud Solutions',
      description: 'Resilient and secure cloud infrastructures leveraging modern tools for maximum uptime.',
      Icon3D: CloudParticles,
    },
    {
      title: 'AI Integration',
      description: 'Intelligent systems, workflow automation, and predictive analytics to keep you ahead.',
      Icon3D: AICore,
    },
    {
      title: 'Mobile Experiences',
      description: 'Native and cross-platform mobile applications crafted for seamless user experiences.',
      Icon3D: MobileShape,
    },
  ];

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-transparent pointer-events-none" id="services">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pointer-events-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-20 gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-4 sm:mb-6 leading-tight">
              Engineering <br/><span className="gold-text-gradient">Excellence.</span>
            </h2>
            <p className="text-white/60 text-base sm:text-xl font-light leading-relaxed px-1">
              We provide comprehensive technology solutions designed to accelerate your growth and future-proof your digital presence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
