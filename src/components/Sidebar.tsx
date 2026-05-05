'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const socialLinks = [
    { icon: 'code', href: 'https://github.com/osman87326', label: 'GITHUB' },
    { icon: 'work', href: 'https://www.linkedin.com/in/kazimdosmangoni/', label: 'LINKEDIN' },
    { icon: 'public', href: 'https://www.facebook.com/kazi.osman.191808', label: 'FACEBOOK' },
    { icon: 'photo_camera', href: 'https://www.instagram.com/kazi__osman', label: 'INSTAGRAM' },
  ];

  return (
    <motion.aside 
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="hidden lg:flex fixed left-0 top-0 h-full w-20 flex-col items-center justify-between py-12 bg-black/80 backdrop-blur-2xl border-r border-white/10 z-[80]"
    >
      <div className="flex flex-col gap-10">
        <a href="#" className="p-3 hover:bg-white/5 transition-colors rounded-lg group relative">
          <span className="material-symbols-outlined text-white/40 group-hover:text-primary-container transition-colors">home</span>
          <span className="absolute left-full ml-4 px-2 py-1 bg-primary-container text-black text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none neo-border">HOME</span>
        </a>
        <a href="#projects" className="p-3 hover:bg-white/5 transition-colors rounded-lg group relative">
          <span className="material-symbols-outlined text-white/40 group-hover:text-primary-container transition-colors">grid_view</span>
          <span className="absolute left-full ml-4 px-2 py-1 bg-primary-container text-black text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none neo-border">WORK</span>
        </a>
        <a href="#about" className="p-3 hover:bg-white/5 transition-colors rounded-lg group relative">
          <span className="material-symbols-outlined text-white/40 group-hover:text-primary-container transition-colors">person</span>
          <span className="absolute left-full ml-4 px-2 py-1 bg-primary-container text-black text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none neo-border">ABOUT</span>
        </a>
        <a href="#contact" className="p-3 hover:bg-white/5 transition-colors rounded-lg group relative">
          <span className="material-symbols-outlined text-white/40 group-hover:text-primary-container transition-colors">mail</span>
          <span className="absolute left-full ml-4 px-2 py-1 bg-primary-container text-black text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none neo-border">CONTACT</span>
        </a>
      </div>

      <div className="flex flex-col gap-6">
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            whileHover={{ scale: 1.2, color: "#38bdf8" }}
            className="text-white/20 hover:text-primary-container transition-colors relative group"
          >
            <span className="material-symbols-outlined text-2xl">{link.icon}</span>
            <span className="absolute left-full ml-4 px-2 py-1 bg-white text-black text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none neo-border">{link.label}</span>
          </motion.a>
        ))}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
