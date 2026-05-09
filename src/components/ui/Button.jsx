import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] md:min-h-0 text-base cursor-pointer active:scale-95";
  
  const variants = {
    primary: "bg-gold text-black hover:bg-white hover:scale-105",
    outline: "border border-gold text-gold hover:bg-gold hover:text-black",
    ghost: "text-white hover:text-gold"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
