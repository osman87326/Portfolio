'use client';

import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const MagneticButton = ({ children, className }: { children: React.ReactNode, className: string }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * 0.4);
    y.set(distanceY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const Contact = () => {
  return (
    <section className="px-8 py-section-padding blueprint-bg">
      <motion.div 
        initial={{ filter: "blur(20px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-surface neo-border neo-shadow-primary p-12 relative"
      >
        <div className="absolute -top-10 -right-5 bg-tertiary-container text-black px-6 py-2 font-bebas text-3xl neo-border transform rotate-3">
          INCOMING_SIGNAL
        </div>
        <h2 className="font-bebas text-8xl text-white mb-12">CONNECT_</h2>
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-bebas text-xl text-primary-container">IDENTIFIER_</label>
              <motion.input 
                whileFocus={{ scale: 1.01, borderColor: "#38bdf8" }}
                className="w-full bg-black border-2 border-zinc-800 text-white p-4 outline-none transition-all neo-shadow" 
                placeholder="WHO ARE YOU?" 
                type="text" 
              />
            </div>
            <div className="space-y-2">
              <label className="font-bebas text-xl text-primary-container">COORDINATES_</label>
              <motion.input 
                whileFocus={{ scale: 1.01, borderColor: "#38bdf8" }}
                className="w-full bg-black border-2 border-zinc-800 text-white p-4 outline-none transition-all neo-shadow" 
                placeholder="EMAIL@VOID.COM" 
                type="email" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-bebas text-xl text-primary-container">MESSAGE_</label>
            <motion.textarea 
              whileFocus={{ scale: 1.01, borderColor: "#38bdf8" }}
              className="w-full bg-black border-2 border-zinc-800 text-white p-4 outline-none transition-all neo-shadow" 
              placeholder="STATE YOUR PURPOSE" 
              rows={4} 
            ></motion.textarea>
          </div>
          <MagneticButton className="w-full bg-primary-container text-black p-6 font-bebas text-4xl neo-border hover:bg-white transition-colors">
            BROADCAST_MESSAGE
          </MagneticButton>
        </form>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16 pt-16 border-t-2 border-zinc-800">
          <div className="flex items-center gap-6 group">
            <div className="p-4 bg-surface-container neo-border neo-shadow group-hover:bg-primary-container group-hover:text-black transition-all">
              <span className="material-symbols-outlined text-4xl">mail</span>
            </div>
            <div>
              <div className="font-bebas text-xl text-primary-container">EMAIL_NODE</div>
              <div className="text-white font-bold">osman.goni@void.com</div>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="p-4 bg-surface-container neo-border neo-shadow group-hover:bg-primary-container group-hover:text-black transition-all">
              <span className="material-symbols-outlined text-4xl">call</span>
            </div>
            <div>
              <div className="font-bebas text-xl text-primary-container">VOICE_CHANNEL</div>
              <div className="text-white font-bold">+880 1234-567890</div>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="p-4 bg-surface-container neo-border neo-shadow group-hover:bg-primary-container group-hover:text-black transition-all">
              <span className="material-symbols-outlined text-4xl">chat</span>
            </div>
            <div>
              <div className="font-bebas text-xl text-primary-container">WHATSAPP_LINK</div>
              <div className="text-white font-bold">+880 1234-567890</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};


export default Contact;

