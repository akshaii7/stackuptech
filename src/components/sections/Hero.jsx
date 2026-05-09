import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Button from '../ui/Button';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      const ctx = gsap.context(() => {
        // Simple parallax effect for hero content
        gsap.to(textRef.current, {
          y: '30%',
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        });
      }, containerRef);
      
      return () => ctx.revert();
    }
  }, []);

  const titleWords = ["Build", "•", "Grow", "•", "Succeed"];

  return (
    <section ref={containerRef} className="relative min-h-screen h-screen w-full flex flex-col justify-center overflow-hidden bg-transparent" id="hero">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/20 via-transparent to-[#0A0A0A] pointer-events-none z-10" />
      
      {/* Content overlay */}
      <div ref={textRef} className="container mx-auto px-4 sm:px-6 md:px-12 relative z-20 pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 rounded-full border border-[#FFD700]/20 glass inline-flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFD700] gold-glow animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-white/80 uppercase">STACKUP TECH</span>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1 sm:gap-y-2 mb-6 sm:mb-8 perspective-1000 w-full">
            {titleWords.map((word, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 + index * 0.1 }}
                className={`text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] font-extrabold tracking-tighter ${
                  word === '•' ? 'gold-text-gradient px-1' : 'text-white'
                }`}
                style={{ transformOrigin: "bottom center" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm sm:text-lg md:text-2xl lg:text-3xl text-white/70 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4"
          >
            We build <span className="text-white font-semibold gold-text-gradient">next-gen</span> digital solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pointer-events-auto w-full sm:w-auto px-6 sm:px-0"
          >
            <Button variant="primary" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold bg-[#D4AF37] text-black gold-glow hover:bg-[#FFD700] transition-colors duration-500 rounded-lg min-h-[56px]">
              Start Building
            </Button>
            <Button variant="outline" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg glass border-[#D4AF37]/50 text-[#FFD700] hover:bg-[#D4AF37]/10 transition-colors duration-500 rounded-lg min-h-[56px]">
              Explore Work
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator - hidden on very small screens */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 z-20 pointer-events-none hidden sm:flex"
      >
        <span className="text-[#FFD700]/60 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-bold">Scroll to explore</span>
        <div className="w-[1px] h-10 sm:h-16 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 gold-gradient-bg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
