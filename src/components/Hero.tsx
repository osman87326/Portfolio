'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    // Split text for animation
    const text = new SplitType(titleRef.current, { types: 'chars' });

    const ctx = gsap.context(() => {
      // Entry animation
      gsap.from(text.chars, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.02,
        ease: 'power4.out',
        delay: 0.5
      });

      // Parallax grid
      gsap.to(gridRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center px-6 lg:px-12 py-20 relative overflow-hidden bg-surface">
      {/* Parallax Grid Background */}
      <div ref={gridRef} className="absolute inset-0 blueprint-bg opacity-20 -z-10" />
      
      {/* Animated background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary-container/10 blur-[120px] rounded-full animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Content */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-surface-container-high px-4 py-2 rounded-full border border-white/10 mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-container"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase">AVAILABLE FOR NEW PROJECTS</span>
            </motion.div>
            
            <h1 ref={titleRef} className="font-bebas text-[15vw] lg:text-[9rem] leading-[0.85] text-white mb-8 tracking-tighter uppercase">
              I AM<br />
              <span className="text-primary-container drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">KAZI_MD_OSMAN_GONI</span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col gap-6 mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bebas text-on-surface-variant tracking-widest">
                FULLSTACK_DEVELOPER // UI_ARCHITECT
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed border-l-4 border-primary-container pl-6 py-2">
                Engineering radical digital experiences where high-end aesthetics meet robust performance. 
                I don't just build websites; I construct digital legacies.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-4 bg-primary-container text-black px-10 py-5 font-bebas text-3xl neo-border neo-shadow hover:bg-white transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="material-symbols-outlined text-3xl group-hover:animate-bounce">download</span>
                  RESUME.PDF
                </span>
              </motion.a>
              
              <div className="flex gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(56,189,248,0.1)" }}
                  className="w-16 h-16 rounded-2xl border-2 border-white/10 flex items-center justify-center text-white/50 hover:text-primary-container hover:border-primary-container transition-all"
                >
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </motion.a>
                <motion.a
                  href="https://github.com/osman87326"
                  target="_blank"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(56,189,248,0.1)" }}
                  className="w-16 h-16 rounded-2xl border-2 border-white/10 flex items-center justify-center text-white/50 hover:text-primary-container hover:border-primary-container transition-all"
                >
                  <span className="material-symbols-outlined text-3xl">code</span>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Side: Photo */}
          <div className="w-full lg:w-[500px] order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full aspect-[4/5] max-w-[400px]"
            >
              <div className="absolute inset-0 bg-primary-container neo-border neo-shadow-primary rotate-3 translate-x-4 translate-y-4 -z-10" />
              <div className="relative w-full h-full overflow-hidden neo-border bg-surface-container-high group">
                <img
                  src="/1.jpeg"
                  alt="Kazi Md Osman Goni"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                {/* Floating Tags */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[10px] font-bold text-primary-container neo-border border-[1px] uppercase tracking-tighter">REACT_NODE</span>
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[10px] font-bold text-white neo-border border-[1px] uppercase tracking-tighter">NEXT_JS_V15</span>
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[10px] font-bold text-tertiary-container neo-border border-[1px] uppercase tracking-tighter">TS_STRICT</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">SCROLL_DOWN</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

