import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Scene from '../components/3d/Scene';
import Loader from '../components/ui/Loader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    // Basic smooth scroll setup for Lenis/Locomotive if added later, 
    // or just default GSAP timeline setup.
    let ctx = gsap.context(() => {
      // Future global animations
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Stackup Tech | Build • Grow • Succeed</title>
        <meta name="description" content="Stackup Tech delivers world-class web applications, cloud solutions, and digital experiences that elevate your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Loader />
      
      {/* Global 3D Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Scene />
      </div>

      <main ref={mainRef} className="relative z-10 bg-transparent text-white font-sans overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
