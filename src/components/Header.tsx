'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-8 h-16"
    >
      <div className="text-xl font-black text-white tracking-tighter uppercase">Kazi Md Osman Goni</div>
      <nav className="hidden md:flex items-center gap-8 font-inter font-light tracking-widest uppercase text-xs">
        <a className="text-white hover:text-sky-400 transition-colors duration-300" href="#projects">Work</a>
        <a className="text-white hover:text-sky-400 transition-colors duration-300" href="#about">About</a>
        <a className="text-white hover:text-sky-400 transition-colors duration-300" href="#skills">Skills</a>
        <a className="text-white hover:text-sky-400 transition-colors duration-300" href="#education">Education</a>
      </nav>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-primary-container text-on-primary-container px-6 py-2 font-bold uppercase text-xs scale-105 transition-transform neo-shadow border-2 border-black"
      >
        Hire Me
      </motion.button>
    </motion.header>
  );
};

export default Header;

