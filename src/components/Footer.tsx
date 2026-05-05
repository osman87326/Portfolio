'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black py-20 px-6 lg:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="font-bebas text-5xl text-white tracking-widest uppercase">KAZI_MD_OSMAN_GONI</h2>
            <p className="text-on-surface-variant font-bold tracking-[0.4em] uppercase text-[10px]">
              FULLSTACK_DEVELOPER
            </p>
          </div>

          <div className="flex gap-8 font-bebas text-2xl">
            <a href="#projects" className="text-white/40 hover:text-primary-container transition-colors">WORK</a>
            <a href="#about" className="text-white/40 hover:text-primary-container transition-colors">ABOUT</a>
            <a href="#contact" className="text-white/40 hover:text-primary-container transition-colors">CONTACT</a>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/osman87326" target="_blank" className="w-12 h-12 bg-surface-container neo-border flex items-center justify-center hover:bg-primary-container hover:text-black transition-all">
              <span className="material-symbols-outlined">code</span>
            </a>
            <a href="https://www.linkedin.com/in/kazimdosmangoni/" target="_blank" className="w-12 h-12 bg-surface-container neo-border flex items-center justify-center hover:bg-primary-container hover:text-black transition-all">
              <span className="material-symbols-outlined">work</span>
            </a>
            <a href="https://www.facebook.com/kazi.osman.191808" target="_blank" className="w-12 h-12 bg-surface-container neo-border flex items-center justify-center hover:bg-primary-container hover:text-black transition-all">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="https://www.instagram.com/kazi__osman" target="_blank" className="w-12 h-12 bg-surface-container neo-border flex items-center justify-center hover:bg-primary-container hover:text-black transition-all">
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold text-white/20 tracking-[0.3em] uppercase">
            © 2024 KAZI MD OSMAN GONI. ALL SYSTEM RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-white/20 tracking-[0.3em] uppercase">
            <span className="hover:text-primary-container cursor-pointer transition-colors">PRIVACY_PROTOCOL</span>
            <span className="hover:text-primary-container cursor-pointer transition-colors">TERMS_OF_SERVICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
