'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -80 });
      } else {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      // Update URL hash
      window.history.pushState(null, '', href);
    } else {
      window.location.href = '/' + href;
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-0 w-full z-[100] bg-black/60 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-8 h-20"
      >
        <a href="/" className="text-2xl font-bebas text-white tracking-widest uppercase hover:text-primary-container transition-colors">
          KAZI MD OSMAN GONI
        </a>

        <nav className="hidden lg:flex items-center gap-10 font-inter font-bold tracking-widest uppercase text-[10px]">
          {menuItems.map((item) => (
            <a
              key={item.name}
              className="text-white/60 hover:text-primary-container transition-all duration-300 relative group cursor-pointer"
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-container transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block bg-primary-container text-black px-6 py-2 font-bebas text-lg neo-border neo-shadow transition-all"
          >
            HIRE_ME
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 z-[101]"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-white block"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-8 h-0.5 bg-white block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-white block"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-black flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <div className="absolute inset-0 blueprint-bg opacity-20" />
            {menuItems.map((item, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="font-bebas text-6xl text-white hover:text-primary-container transition-colors cursor-pointer"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

