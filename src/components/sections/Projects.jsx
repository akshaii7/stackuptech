import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  panelsRef.current = [];

  const addToRefs = el => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      const ctx = gsap.context(() => {
        panelsRef.current.forEach((panel, i) => {
          gsap.fromTo(panel, 
            { y: 50, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "top bottom-=50",
                end: "center center",
                scrub: 1,
              }
            }
          );
        });
      }, containerRef);
      
      return () => ctx.revert();
    }
  }, []);

  const projects = [
    {
      title: 'E-Commerce Website',
      category: 'WEB APPLICATION',
      description: 'Modern responsive e-commerce platform built using React.js with dynamic product management, shopping cart features, and clean UI/UX.',
      tech: ['React.js', 'Responsive UI', 'API Integration', 'Shopping Cart System'],
      features: ['Product Listing', 'Add to Cart', 'Responsive Design', 'Product Details', 'Dynamic UI', 'API Integration'],
      demoLink: 'https://akshaii7.github.io/ecomerce',
      githubLink: 'https://github.com/akshaii7/ecomerce',
      image: '/ecommerce-mockup.png',
      isCustomLayout: true,
      theme: 'gold'
    },
    {
      title: 'Library Management System',
      category: 'Web Application',
      description: 'React.js • Python • CRUD Operations',
      tech: ['React', 'Python', 'CRUD'],
      features: ['Add Books', 'Update Books', 'Delete Books', 'Manage Users', 'Search Books', 'Responsive Design'],
      demoLink: 'https://akshaii7.github.io/lms/',
      githubLink: 'https://github.com/akshaii7/lms',
      image: '/lms-mockup.png',
      isCustomLayout: true,
      theme: 'blue'
    },
    {
      title: 'Stackup Tech',
      category: 'PORTFOLIO',
      description: 'A premium, high-performance developer portfolio featuring 3D animations, GSAP interactions, and a cinematic dark/gold theme.',
      tech: ['Next.js', 'Three.js', 'GSAP', 'Tailwind CSS'],
      features: ['3D Hero Scene', 'Smooth Parallax', 'Responsive Design', 'Glassmorphism UI', 'Modern Animations'],
      demoLink: 'https://akshaii7.github.io/stackuptech/',
      githubLink: 'https://github.com/akshaii7/stackuptech',
      image: '/stackup_logo.png',
      isCustomLayout: true,
      theme: 'gold'
    },
    {
      title: 'FinTech Mobile App',
      category: 'Mobile App',
      description: 'Secure personal finance tracking application with real-time banking API integrations.',
      tech: ['React Native', 'TypeScript', 'GraphQL', 'AWS'],
    }
  ];

  return (
    <section ref={containerRef} className="py-20 sm:py-32 relative bg-transparent" id="projects">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pointer-events-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-24 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-3 sm:mb-4">
              Featured <span className="gold-text-gradient">Work</span>
            </h2>
            <p className="text-white/60 max-w-xl text-base sm:text-xl font-light">
              Explore our portfolio of next-gen digital experiences.
            </p>
          </div>
          <button className="text-[#FFD700] hover:text-white transition-colors border-b border-[#D4AF37] pb-1 font-medium text-sm sm:text-lg self-start md:self-auto min-h-[44px]">
            View All Projects
          </button>
        </div>

        <div className="flex flex-col gap-12 sm:gap-24">
          {projects.map((project, index) => {
            if (project.isCustomLayout) {
              return (
                <div
                  key={index}
                  ref={addToRefs}
                  className={`flex flex-col lg:flex-row gap-8 sm:gap-12 items-center group relative w-full rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden p-5 sm:p-10 md:p-12 transition-all duration-700 shadow-2xl border glass ${
                    project.theme === 'gold' ? 'border-[#D4AF37]/20 shadow-[#D4AF37]/5' : 'border-blue-500/20 shadow-blue-500/5'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,27,75,0.95) 100%)'
                  }}
                >
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
                    <div className={`absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] via-transparent to-transparent ${
                      project.theme === 'gold' ? 'from-[#D4AF37]/20' : 'from-blue-600/30'
                    }`}></div>
                    <div className={`absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] via-transparent to-transparent ${
                      project.theme === 'gold' ? 'from-[#FFD700]/10' : 'from-purple-600/30'
                    }`}></div>
                  </div>

                  {/* Project Details */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
                    <h3 className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-2 tracking-tight ${
                      project.theme === 'gold' ? 'gold-text-gradient' : 'text-white'
                    }`}>{project.title}</h3>
                    <h4 className={`text-lg sm:text-2xl font-medium mb-6 sm:mb-8 tracking-wide ${
                      project.theme === 'gold' ? 'text-[#FFD700]' : 'text-blue-400'
                    }`}>{project.description}</h4>
                    
                    <ul className="grid grid-cols-1 xs:grid-cols-2 gap-y-3 gap-x-4 mb-8 sm:mb-10 text-white/80 font-light text-sm sm:text-lg">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 sm:gap-3">
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0 ${
                            project.theme === 'gold' 
                              ? 'bg-[#FFD700] shadow-[0_0_10px_rgba(212,175,55,1)]' 
                              : 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]'
                          }`}></div>
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col xs:flex-row gap-4 sm:gap-6">
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`flex items-center justify-center gap-2 text-white px-6 py-3 sm:py-4 rounded-full transition-all duration-300 font-bold text-sm sm:text-base min-h-[48px] ${
                          project.theme === 'gold' 
                            ? 'bg-[#D4AF37] hover:bg-[#FFD700] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]' 
                            : 'bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]'
                        }`}
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 sm:py-4 rounded-full transition-all duration-300 font-bold text-sm sm:text-base backdrop-blur-md hover:border-white/20 min-h-[48px]">
                        <GithubIcon size={18} /> View Source
                      </a>
                    </div>
                  </div>

                  {/* Mockup Image Area */}
                  <div className="w-full lg:w-1/2 relative z-10 h-56 xs:h-64 sm:h-80 md:h-[400px] lg:h-[500px] mt-8 lg:mt-0">
                    <div className={`w-full h-full rounded-xl sm:rounded-3xl overflow-hidden glass border shadow-2xl relative group-hover:scale-[1.02] transition-transform duration-700 ${
                      project.theme === 'gold' ? 'border-[#D4AF37]/20' : 'border-purple-500/20'
                    }`}>
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-40"></div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
            <div
              key={index}
              ref={addToRefs}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 sm:gap-12 items-center group`}
            >
              {/* Floating Panel Image */}
              <div className="w-full lg:w-3/5 h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden glass border border-[#FFD700]/10 hover:border-[#FFD700]/40 transition-all duration-700 relative shadow-2xl cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 z-10 pointer-events-none" />
                <div className="w-full h-full opacity-20 group-hover:opacity-60 transition-opacity duration-1000 group-hover:scale-105 transform"
                     style={{ 
                       background: `radial-gradient(circle at center, #D4AF37, transparent 70%)` 
                     }} 
                />
                
                {/* Overlay Text for "Zoom" feel */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-5 py-2 sm:px-6 sm:py-3 rounded-full glass border border-[#FFD700]/50 text-[#FFD700] font-medium tracking-widest uppercase text-xs sm:text-sm backdrop-blur-xl">
                    Explore Project
                  </span>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center px-2 sm:px-4 lg:px-12">
                <div className="text-[#D4AF37] text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-widest">{project.category}</div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 group-hover:gold-text-gradient transition-all duration-500">{project.title}</h3>
                <p className="text-white/60 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs sm:text-sm text-white/70 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 glass">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-6 sm:gap-8">
                  <a href="#" className="flex items-center gap-2 text-white hover:text-[#FFD700] transition-colors font-medium text-sm sm:text-base">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href="#" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-medium text-sm sm:text-base">
                    <GithubIcon size={18} /> View Source
                  </a>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
