'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  return (
    <motion.aside 
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="hidden lg:flex fixed left-0 top-0 h-full w-20 flex-col items-center py-24 bg-zinc-950/80 backdrop-blur-2xl border-r border-white/10 z-40"
    >
      <div className="flex flex-col gap-12">
        <span className="material-symbols-outlined text-zinc-500 hover:text-sky-400 cursor-pointer">home</span>
        <span className="material-symbols-outlined text-sky-400 font-bold border-r-2 border-sky-400 pr-2">grid_view</span>
        <span className="material-symbols-outlined text-zinc-500 hover:text-sky-400 cursor-pointer">layers</span>
        <span className="material-symbols-outlined text-zinc-500 hover:text-sky-400 cursor-pointer">mail</span>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
