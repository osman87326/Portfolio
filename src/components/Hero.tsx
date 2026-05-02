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
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center px-8 py-section-padding relative overflow-hidden">
      {/* Parallax Grid Background */}
      <div ref={gridRef} className="absolute inset-0 blueprint-bg opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="absolute -top-20 -left-10 opacity-10 font-bebas text-[200px] leading-none pointer-events-none select-none">
          SYSTEM_ERROR
        </div>
        <div className="flex flex-col md:flex-row items-start gap-gutter">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block bg-primary-container text-black px-4 py-2 neo-border neo-shadow mb-8 font-bebas text-2xl rotate-[-2deg]"
            >
              KAZI MD OSMAN GONI 👋 Fullstack Developer
            </motion.div>
            <h1 ref={titleRef} className="font-bebas text-[10vw] md:text-[12rem] leading-[0.8] text-white mix-blend-difference mb-8 tracking-tighter">
              BUILDING<br />
              <span className="text-primary-container">THE FUTURE</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-48 h-48 md:w-64 md:h-64 neo-border neo-shadow-primary overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500"
              >
                <img
                  src="/1.jpeg"
                  alt="Kazi Md Osman Goni"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex-1">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="text-lg text-on-surface-variant max-w-xl mb-8 border-l-4 border-primary-container pl-6"
                >
                  RADICAL ARCHITECTURES FOR A COLLAPSING DIGITAL LANDSCAPE. I BUILD TOOLS THAT BREAK THE MOLD AND INTERFACES THAT SPEAK TRUTH TO POWER.
                </motion.p>
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-4 bg-tertiary-container text-black px-8 py-4 font-bebas text-2xl neo-border neo-shadow hover:bg-white transition-all"
                >
                  <span className="material-symbols-outlined">download</span>
                  DOWNLOAD_RESUME
                </motion.a>
              </div>
            </div>
            <div className="flex flex-wrap gap-element-gap">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-12 py-6 text-2xl font-bebas neo-border neo-shadow transition-all"
              >
                VIEW THE VOID
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(56,189,248,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-12 py-6 text-2xl font-bebas neo-border neo-shadow-primary transition-all"
              >
                START REVOLUTION
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

