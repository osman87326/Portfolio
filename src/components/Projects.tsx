'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ children, className, isFeatured = false }: { children: React.ReactNode, className: string, isFeatured?: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`${className} project-card`}
    >
      <div style={{ transform: "translateZ(50px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

import { projects } from '@/data/projects';
import Link from 'next/link';

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card');
    
    const ctx = gsap.context(() => {
      cards.forEach((card: any) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Floating animation for featured
      gsap.to('.featured-project', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="px-8 py-section-padding bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16 border-b-4 border-black pb-4">
          <h2 className="font-bebas text-6xl text-white">SELECTED_LOGS</h2>
          <span className="font-bebas text-2xl text-primary-container">001 - 003</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {projects.map((project, index) => {
            const isFeatured = index === 0;
            const gridClass = isFeatured ? "md:col-span-8" : "md:col-span-4";
            const heightClass = isFeatured ? "h-[500px]" : "h-[500px]";
            
            return (
              <ProjectCard 
                key={project.id}
                className={`${gridClass} bg-surface-container-high neo-border neo-shadow group relative overflow-hidden ${heightClass} ${isFeatured ? 'featured-project' : ''}`}
              >
                <img 
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" 
                  src={project.image} 
                  alt={project.name}
                />
                <div className="absolute bottom-0 left-0 p-8 bg-black/80 backdrop-blur-md w-full border-t-4 border-black transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-bebas text-4xl text-white mb-2">{project.name}</h3>
                  <div className="flex justify-between items-end">
                    <p className="text-on-surface-variant uppercase text-xs tracking-widest font-bold">{project.subtitle}</p>
                    <Link href={`/project/${project.id}`}>
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        className="bg-primary-container text-black px-4 py-1 font-bebas text-lg neo-border"
                      >
                        VIEW_DETAILS
                      </motion.button>
                    </Link>
                  </div>
                </div>
                {isFeatured && (
                  <div className="absolute top-4 right-4 bg-primary-container text-black px-4 py-1 font-bebas text-xl neo-border">
                    FEATURED
                  </div>
                )}
              </ProjectCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default Projects;

