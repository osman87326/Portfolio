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
    <section id="projects" ref={containerRef} className="px-6 lg:px-12 py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full blueprint-bg opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="font-bebas text-8xl lg:text-9xl text-white tracking-tighter uppercase leading-none">
              SELECTED<br />
              <span className="text-primary-container">WORKS_</span>
            </h2>
            <div className="w-24 h-2 bg-primary-container" />
          </div>
          <p className="text-on-surface-variant max-w-md font-inter text-lg leading-relaxed border-l-2 border-white/10 pl-6 uppercase tracking-widest text-xs font-bold">
            A collection of radical digital architectures designed to push the boundaries of the modern web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              className="bg-surface-container-high neo-border neo-shadow-primary group relative overflow-hidden aspect-[4/5] h-full"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 group-hover:scale-110 transition-all duration-1000 ease-out" 
                  src={project.image} 
                  alt={project.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="bg-primary-container text-black px-3 py-1 font-bebas text-lg neo-border">
                    0{index + 1}
                  </div>
                  <div className="flex gap-2">
                    {project.techStack.slice(0, 2).map(tech => (
                      <span key={tech} className="bg-black/80 backdrop-blur-md text-[10px] text-white px-2 py-1 neo-border border-[1px] uppercase font-bold tracking-tighter">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <p className="text-primary-container font-bebas text-xl tracking-widest mb-1 uppercase">{project.subtitle}</p>
                    <h3 className="font-bebas text-5xl text-white leading-none tracking-tight uppercase">{project.name}</h3>
                  </div>
                  
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <Link href={`/project/${project.id}`} className="flex-1">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white text-black py-3 font-bebas text-2xl neo-border neo-shadow transition-all"
                      >
                        VIEW_DETAILS
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative scanline effect on hover */}
              <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </ProjectCard>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 text-white font-bebas text-3xl group"
          >
            <span className="w-12 h-[2px] bg-primary-container group-hover:w-20 transition-all" />
            EXPLORE_ALL_REPOSITORIES
            <span className="material-symbols-outlined text-primary-container group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};


export default Projects;

