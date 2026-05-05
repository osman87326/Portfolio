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
    <section id="contact" className="px-6 lg:pl-32 lg:pr-12 py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full blueprint-bg opacity-5 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-surface-container-high neo-border neo-shadow-primary p-8 lg:p-20 relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-5 bg-primary-container text-black px-8 py-3 font-bebas text-4xl neo-border transform rotate-6 z-20">
          ESTABLISH_LINK
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="font-bebas text-[clamp(4rem,15vw,9rem)] text-white tracking-tighter uppercase leading-none">
                GET_IN<br />
                <span className="text-primary-container">TOUCH_</span>
              </h2>
              <p className="text-on-surface-variant text-xl leading-relaxed font-inter max-w-sm">
                Ready to architect the next radical digital experience? Send a signal into the void.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: 'mail', label: 'EMAIL_NODE', value: 'kaziosman873@gmail.com', href: 'mailto:kaziosman873@gmail.com' },
                { icon: 'call', label: 'VOICE_CHANNEL', value: '01871-211687', href: 'tel:01871211687' },
                { icon: 'chat', label: 'WHATSAPP_LINK', value: '01871-211687', href: 'https://wa.me/8801871211687' },
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-6 group hover:translate-x-2 transition-transform"
                >
                  <div className="w-16 h-16 bg-surface neo-border flex items-center justify-center group-hover:bg-primary-container group-hover:text-black transition-all">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-bebas text-xl text-primary-container tracking-widest">{item.label}</div>
                    <div className="text-white font-bold text-lg">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-8 bg-black/40 p-6 lg:p-10 neo-border border-white/5 backdrop-blur-md">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="font-bebas text-xl text-primary-container tracking-widest uppercase">IDENTIFIER_</label>
                <input 
                  className="w-full bg-black/60 border-2 border-white/10 text-white p-5 outline-none focus:border-primary-container transition-all neo-shadow text-lg" 
                  placeholder="WHO ARE YOU?" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="font-bebas text-xl text-primary-container tracking-widest uppercase">COORDINATES_</label>
                <input 
                  className="w-full bg-black/60 border-2 border-white/10 text-white p-5 outline-none focus:border-primary-container transition-all neo-shadow text-lg" 
                  placeholder="EMAIL@VOID.COM" 
                  type="email" 
                />
              </div>
              <div className="space-y-2">
                <label className="font-bebas text-xl text-primary-container tracking-widest uppercase">MESSAGE_</label>
                <textarea 
                  className="w-full bg-black/60 border-2 border-white/10 text-white p-5 outline-none focus:border-primary-container transition-all neo-shadow text-lg resize-none" 
                  placeholder="STATE YOUR PURPOSE" 
                  rows={4} 
                ></textarea>
              </div>
            </div>
            
            <MagneticButton className="w-full bg-primary-container text-black p-6 font-bebas text-4xl neo-border hover:bg-white transition-colors relative overflow-hidden group">
              <span className="relative z-10 flex items-center justify-center gap-4">
                BROADCAST_SIGNAL
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">send</span>
              </span>
            </MagneticButton>
          </form>
        </div>
      </motion.div>
    </section>
  );
};


export default Contact;

