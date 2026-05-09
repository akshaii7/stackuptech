import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import { getAssetPath } from '../utils/pathHelper';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Close mobile menu on scroll
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
  ];

  const handleNavClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-[90] transition-all duration-300 ${
        isScrolled ? 'glass py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          {/* Logo with responsive sizing */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#FFD700] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full scale-150"></div>
            <img 
              src={getAssetPath('/stackup_logo.png')} 
              alt="Stackup Tech Logo" 
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain relative z-10 mix-blend-screen" 
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-white/80 hover:text-[#FFD700] transition-colors text-sm uppercase tracking-wider font-medium">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="outline" className="text-sm px-6 py-2 glass border-[#D4AF37]/50 text-[#FFD700] hover:bg-[#D4AF37]/10 transition-colors duration-500 rounded-lg">Let's Talk</Button>
        </div>

        {/* Mobile Nav Toggle - 44px min touch target */}
        <button 
          className="md:hidden text-white hover:text-[#FFD700] transition-colors p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Menu - Full screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-[60px] left-0 w-full bg-[#0A0A0A]/98 backdrop-blur-2xl border-b border-[#D4AF37]/20 z-[80]"
            style={{ height: 'calc(100vh - 60px)' }}
          >
            <ul className="flex flex-col items-center justify-center py-10 gap-8 h-full">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="text-white text-2xl sm:text-3xl hover:text-[#FFD700] transition-colors uppercase tracking-wider font-medium block py-2"
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Button 
                  variant="primary" 
                  className="mt-4 px-12 py-4 text-lg bg-[#D4AF37] text-black gold-glow hover:bg-[#FFD700] font-bold min-h-[52px]"
                  onClick={handleNavClick}
                >
                  Let's Talk
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
