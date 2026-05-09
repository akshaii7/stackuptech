import React from 'react';
import { getAssetPath } from '../utils/pathHelper';

const TwitterIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 sm:pt-20 pb-8 sm:pb-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-16 mb-12 sm:mb-16">
          <div className="sm:col-span-2">
            <a href="#" className="block mb-6">
              <img src={getAssetPath('/stackup_logo.png')} alt="Stackup Tech Logo" className="h-10 sm:h-16 md:h-20 w-auto object-contain mix-blend-screen" />
            </a>
            <p className="text-white/60 max-w-sm mb-8 text-sm sm:text-base leading-relaxed">
              We build scalable web applications, craft digital experiences, and architect cloud solutions that empower businesses to grow and succeed.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[TwitterIcon, LinkedinIcon, GithubIcon, InstagramIcon].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-white hover:text-[#FFD700] hover:border-[#FFD700]/50 transition-all duration-300 min-w-[40px] min-h-[40px]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:flex lg:justify-around gap-8 sm:col-span-2 md:col-span-2">
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 text-white uppercase tracking-wider">Services</h4>
              <ul className="space-y-2 sm:space-y-4">
                <li><a href="#" className="text-white/60 hover:text-[#FFD700] transition-colors text-sm sm:text-base py-1 inline-block">Web Development</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#FFD700] transition-colors text-sm sm:text-base py-1 inline-block">Cloud Solutions</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#FFD700] transition-colors text-sm sm:text-base py-1 inline-block">AI & Automation</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#FFD700] transition-colors text-sm sm:text-base py-1 inline-block">Mobile Apps</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 text-white uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 sm:space-y-4">
                <li><a href="#about" className="text-white/60 hover:text-[#FFD700] transition-colors text-sm sm:text-base py-1 inline-block">About Us</a></li>
                <li><a href="#projects" className="text-white/60 hover:text-[#FFD700] transition-colors text-sm sm:text-base py-1 inline-block">Portfolio</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#FFD700] transition-colors text-sm sm:text-base py-1 inline-block">Careers</a></li>
                <li><a href="#contact" className="text-white/60 hover:text-[#FFD700] transition-colors text-sm sm:text-base py-1 inline-block">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-4 text-center md:text-left">
          <p className="text-white/40 text-[10px] sm:text-sm order-2 md:order-1">
            &copy; {currentYear} Stackup Tech. All rights reserved.
          </p>
          <div className="flex gap-6 sm:gap-8 text-[10px] sm:text-sm text-white/40 order-1 md:order-2">
            <a href="#" className="hover:text-white transition-colors py-1">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors py-1">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
