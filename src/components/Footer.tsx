'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-12 border-t border-white/5 bg-transparent flex flex-col items-center gap-4 max-w-7xl mx-auto"
    >
      <div className="flex gap-8 mb-4">
        <a className="text-zinc-600 hover:text-sky-400 font-inter text-[10px] tracking-widest uppercase transition-opacity opacity-80 hover:opacity-100" href="#">Twitter</a>
        <a className="text-zinc-600 hover:text-sky-400 font-inter text-[10px] tracking-widest uppercase transition-opacity opacity-80 hover:opacity-100" href="#">GitHub</a>
        <a className="text-zinc-600 hover:text-sky-400 font-inter text-[10px] tracking-widest uppercase transition-opacity opacity-80 hover:opacity-100" href="#">LinkedIn</a>
      </div>
      <div className="font-inter text-[10px] tracking-widest text-zinc-600 uppercase">
        © 2024 ARCHITECT OF THE VOID
      </div>
      <div className="mt-8 font-bebas text-zinc-800 text-9xl pointer-events-none select-none opacity-20">
        VOID_SYSTEMS
      </div>
    </motion.footer>
  );
};

export default Footer;
