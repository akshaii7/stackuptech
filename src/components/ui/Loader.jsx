import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (in a real app, tie this to Three.js useProgress or window.onload)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Animated Gold Arrow Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#FFD700] blur-3xl opacity-20 rounded-full scale-150 animate-pulse"></div>
            
            <svg 
              width="60" 
              height="75" 
              viewBox="0 0 80 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 sm:w-20 sm:h-24"
            >
              <motion.path
                d="M40 10 L70 50 L55 50 L55 90 L25 90 L25 50 L10 50 Z"
                fill="url(#goldGradient)"
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={{ pathLength: 1, fillOpacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0px 0px 10px rgba(255,215,0,0.6))" }}
              />
              <defs>
                <linearGradient id="goldGradient" x1="40" y1="10" x2="40" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD700" />
                  <stop offset="1" stopColor="#D4AF37" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 sm:mt-8 relative px-4 text-center"
          >
            <div className="text-[#FFD700] text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold">Stackup Tech</div>
            {/* Progress Bar Line */}
            <div className="w-40 sm:w-48 h-1 bg-[#D4AF37]/20 mt-4 overflow-hidden rounded-full mx-auto">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-[#FFD700] gold-glow"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
