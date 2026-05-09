import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const ref = useRef();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 300; i++) {
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 15;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#FFD700" size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
    </Points>
  );
};

const Contact = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-transparent" id="contact">
      {/* Subtle particle background for contact section */}
      <div className="absolute inset-0 z-0 opacity-30 sm:opacity-50 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ParticleBackground />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-4 sm:mb-6">
              Let's Build Something <span className="gold-text-gradient">Great</span>
            </h2>
            <p className="text-white/60 text-base sm:text-xl mb-8 sm:mb-12 max-w-md font-light px-1">
              Ready to take your digital presence to the next level? Reach out to us and let's discuss how we can help your business grow.
            </p>
            
            <div className="space-y-5 sm:space-y-8">
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full glass flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 group-hover:bg-[#FFD700] group-hover:text-black group-hover:border-transparent transition-all duration-300 shadow-lg group-hover:gold-glow flex-shrink-0">
                  <Mail size={18} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-white/40 text-[9px] sm:text-xs mb-0.5 sm:mb-1 uppercase tracking-widest font-semibold">Email Us</div>
                  <div className="text-white text-sm xs:text-base sm:text-lg font-medium group-hover:text-[#FFD700] transition-colors break-all">hello@stackup.tech</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full glass flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 group-hover:bg-[#FFD700] group-hover:text-black group-hover:border-transparent transition-all duration-300 shadow-lg group-hover:gold-glow flex-shrink-0">
                  <Phone size={18} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-white/40 text-[9px] sm:text-xs mb-0.5 sm:mb-1 uppercase tracking-widest font-semibold">Call Us</div>
                  <div className="text-white text-sm xs:text-base sm:text-lg font-medium group-hover:text-[#FFD700] transition-colors">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full glass flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 group-hover:bg-[#FFD700] group-hover:text-black group-hover:border-transparent transition-all duration-300 shadow-lg group-hover:gold-glow flex-shrink-0">
                  <MapPin size={18} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-white/40 text-[9px] sm:text-xs mb-0.5 sm:mb-1 uppercase tracking-widest font-semibold">Visit Us</div>
                  <div className="text-white text-sm xs:text-base sm:text-lg font-medium group-hover:text-[#FFD700] transition-colors">Technopark , Trivandrum kerala</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <form className="glass p-5 xs:p-6 sm:p-8 md:p-12 rounded-[1.25rem] sm:rounded-[2rem] border border-[#FFD700]/10 shadow-2xl relative overflow-hidden" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none" />
              
              <h3 className="text-xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 relative z-10">Send a Message</h3>
              
              <div className="space-y-4 sm:space-y-6 relative z-10">
                <div>
                  <input 
                    type="text" 
                    className="w-full bg-[#0A0A0A]/50 border-b border-white/20 px-3 py-3 sm:px-4 sm:py-4 text-white focus:outline-none focus:border-[#FFD700] focus:bg-[#0A0A0A] transition-all duration-300 placeholder-white/30 hover:border-white/40 focus:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.2)] rounded-t-lg text-sm sm:text-base min-h-[48px]"
                    placeholder="Full Name"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    className="w-full bg-[#0A0A0A]/50 border-b border-white/20 px-3 py-3 sm:px-4 sm:py-4 text-white focus:outline-none focus:border-[#FFD700] focus:bg-[#0A0A0A] transition-all duration-300 placeholder-white/30 hover:border-white/40 focus:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.2)] rounded-t-lg text-sm sm:text-base min-h-[48px]"
                    placeholder="Email Address"
                  />
                </div>
                
                <div>
                  <textarea 
                    rows={4}
                    className="w-full bg-[#0A0A0A]/50 border-b border-white/20 px-3 py-3 sm:px-4 sm:py-4 text-white focus:outline-none focus:border-[#FFD700] focus:bg-[#0A0A0A] transition-all duration-300 placeholder-white/30 hover:border-white/40 focus:shadow-[0_10px_20px_-10px_rgba(255,215,0,0.2)] rounded-t-lg resize-none text-sm sm:text-base min-h-[100px]"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <Button variant="primary" className="w-full py-4 sm:py-5 text-base sm:text-lg mt-4 sm:mt-6 font-bold bg-[#D4AF37] text-black gold-glow hover:bg-[#FFD700] transition-colors duration-500 rounded-xl min-h-[56px]">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
