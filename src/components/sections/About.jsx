import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const secondaryTextRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      const ctx = gsap.context(() => {
        // Text fade in and parallax
        gsap.fromTo(textRef.current, 
          { opacity: 0, y: 100 },
          { 
            opacity: 1, 
            y: 0, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "center center",
              scrub: 1,
            }
          }
        );

        gsap.fromTo(secondaryTextRef.current, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "center center",
              end: "bottom center",
              scrub: 1,
            }
          }
        );
      }, containerRef);
      
      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={containerRef} className="min-h-[120vh] md:min-h-[150vh] w-full flex flex-col items-center justify-center relative bg-transparent pointer-events-none" id="about">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center h-screen sticky top-0">
        
        <div ref={textRef} className="text-center max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-tight">
            We build <br className="hidden xs:block"/>
            <span className="gold-text-gradient">next-gen</span> <br className="hidden sm:block"/>
            digital solutions
          </h2>
        </div>

        <div ref={secondaryTextRef} className="text-center max-w-2xl mt-6 sm:mt-12 px-6 sm:px-8">
          <p className="text-sm sm:text-xl md:text-2xl text-white/70 font-light leading-relaxed">
            A seamless blend of cutting-edge technology and unparalleled design, crafted to elevate your business into the future.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;
