'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="px-6 lg:px-12 py-32 bg-surface-container-lowest relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full blueprint-bg opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <h2 className="font-bebas text-8xl lg:text-9xl text-white tracking-tighter uppercase leading-none">
                WHO_IS<br />
                <span className="text-primary-container">KAZI MD OSMAN GONI?</span>
              </h2>
              <div className="w-24 h-2 bg-primary-container" />
            </div>

            <div className="space-y-8 text-on-surface-variant text-xl leading-relaxed font-inter">
              <p>
                I am a confident communicator with a knack for solving complex problems and a collaborative approach to teamwork. 
                Versatile and a quick learner with engineering principles and a commitment to quality and innovation. 
                Adaptable and ready to tackle new challenges while contributing to team success.
              </p>
              
              <div className="p-8 bg-surface-container-high border-l-8 border-primary-container neo-shadow">
                <p className="italic text-white font-medium">
                  "My journey is defined by a passion for competitive programming and a drive to build tools that speak truth to power."
                </p>
              </div>

              <p>
                My programming journey began with the thrill of **Competitive Programming**. 
                Starting with C++ and complex algorithms, I learned to think in binary, optimizing every millisecond of execution time. 
                This foundation of efficiency and logic now fuels my work as a Fullstack Developer.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <h3 className="font-bebas text-3xl text-white uppercase flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary-container">pedal_bike</span>
                    BEYOND_THE_VOID
                  </h3>
                  <p className="text-base">
                    When I'm not orchestrating pixels, you'll find me **Cycling** through the neon-lit city streets or **Traveling** to explore new architectural marvels. These physical journeys inspire the digital ones I build.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bebas text-3xl text-white uppercase flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary-container">military_tech</span>
                    DISCIPLINE_CORE
                  </h3>
                  <p className="text-base">
                    As a **Cadet Under Officer** in the B.N.C.C., discipline is hardcoded into my personality. I lead teams with the same precision I use to refactor a legacy codebase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8 w-full">
            <div className="p-10 bg-surface-container neo-border neo-shadow-primary relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-primary-container">terminal</span>
              </div>
              <h3 className="font-bebas text-4xl text-primary-container mb-8 border-b border-white/10 pb-4 uppercase">SYSTEM_SPECS</h3>
              <ul className="space-y-6 font-inter">
                {[
                  { label: "COGNITIVE_MODE", value: "RADICAL PROBLEM SOLVER" },
                  { label: "RANK", value: "CUO / BEST CADET (2018, 2020)" },
                  { label: "TERRAIN", value: "CYCLIST & GLOBAL EXPLORER" },
                  { label: "FOUNDATION", value: "ELECTRICAL & COMPUTER ENG" },
                ].map((spec, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">{spec.label}</span>
                    <span className="text-lg font-bold text-white">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 bg-primary-container text-black neo-border neo-shadow relative overflow-hidden group">
              <h3 className="font-bebas text-4xl mb-8 border-b border-black/20 pb-4 uppercase">CONNECT_NODES</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'code', label: 'GITHUB', href: 'https://github.com/osman87326' },
                  { icon: 'work', label: 'LINKEDIN', href: 'https://www.linkedin.com/in/kazimdosmangoni/' },
                  { icon: 'public', label: 'FACEBOOK', href: 'https://www.facebook.com/kazi.osman.191808' },
                  { icon: 'photo_camera', label: 'INSTAGRAM', href: 'https://www.instagram.com/kazi__osman' },
                ].map((node) => (
                  <a 
                    key={node.label}
                    href={node.href} 
                    className="flex items-center gap-3 p-3 bg-black/5 hover:bg-black/10 transition-colors border border-black/10 rounded-lg group/link"
                  >
                    <span className="material-symbols-outlined text-3xl group-hover/link:scale-110 transition-transform">{node.icon}</span>
                    <span className="font-bebas text-xl">{node.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
