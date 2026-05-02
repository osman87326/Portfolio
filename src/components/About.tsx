'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="px-8 py-section-padding bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1">
            <h2 className="font-bebas text-8xl text-white mb-12">ABOUT_ME</h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>
                My programming journey began with a curiosity about how the digital world functions. 
                What started as a simple "Hello World" evolved into a deep passion for crafting high-performance, 
                visually stunning web applications. I specialize in Fullstack Development, ensuring that 
                robust backend architectures meet seamless, high-end user interfaces.
              </p>
              <p>
                I enjoy the challenge of solving complex architectural problems and breaking the mold 
                of traditional UI design. For me, every project is an opportunity to build something 
                radical and true to the user's needs.
              </p>
              <p className="border-t-2 border-primary-container pt-6">
                Outside of the digital void, you'll find me **Cycling** through the city or **Traveling** to explore new terrains. These interests 
                fuel my creativity and help me bring a unique perspective to every line of code I write.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 space-y-8">
            <div className="p-8 bg-surface-container neo-border neo-shadow">
              <h3 className="font-bebas text-3xl text-primary-container mb-4">PERSONALITY_PROTOCOL</h3>
              <ul className="space-y-2 font-inter text-sm tracking-widest uppercase">
                <li>• RADICAL PROBLEM SOLVER</li>
                <li>• CADET UNDER OFFICER</li>
                <li>• CYCLIST & TRAVELER</li>
                <li>• COMPETITIVE PROGRAMMER</li>
              </ul>
            </div>
            <div className="p-8 bg-primary-container text-black neo-border neo-shadow">
              <h3 className="font-bebas text-3xl mb-4">SOCIAL_NODES</h3>
              <div className="flex gap-4">
                <a href="https://github.com" className="hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">code</span>
                </a>
                <a href="https://linkedin.com" className="hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">work</span>
                </a>
                <a href="https://twitter.com" className="hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">share</span>
                </a>
                <a href="https://facebook.com" className="hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">public</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
