'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, subtitle, description, icon }: { year: string, title: string, subtitle: string, description: string, icon?: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-16 pb-16 border-l-2 border-white/10 last:border-0 last:pb-0"
  >
    <div className="absolute left-[-21px] top-0 w-10 h-10 bg-surface neo-border flex items-center justify-center">
      <span className="material-symbols-outlined text-primary-container text-xl">{icon || 'school'}</span>
    </div>
    <div className="font-bebas text-2xl text-primary-container mb-2 tracking-widest">{year}</div>
    <h3 className="font-bebas text-5xl text-white mb-2 uppercase leading-none tracking-tight">{title}</h3>
    <div className="text-on-surface-variant font-bold text-xs uppercase mb-6 tracking-[0.3em] flex items-center gap-2">
      <span className="w-4 h-[1px] bg-primary-container" />
      {subtitle}
    </div>
    <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl bg-surface-container-high/50 p-6 neo-border border-white/5">
      {description}
    </p>
  </motion.div>
);

const Education = () => {
  return (
    <section id="education" className="px-6 lg:px-12 py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full blueprint-bg opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="flex-1">
            <div className="mb-20">
              <h2 className="font-bebas text-8xl text-white tracking-tighter uppercase mb-4">
                ACADEMIC_LOGS
              </h2>
              <p className="text-primary-container font-bold tracking-[0.4em] uppercase text-xs">
                The foundation of my digital consciousness
              </p>
            </div>
            
            <div className="space-y-0">
              <TimelineItem 
                year="2023 - PRESENT"
                title="Electrical and Computer Engineering"
                subtitle="Rajshahi University of Engineering & Technology"
                description="Deep diving into the intersection of hardware and software. Pursuing core engineering principles with a focus on computing systems, architecture, and advanced problem-solving."
              />
              <TimelineItem 
                year="2022"
                title="Higher Secondary Certificate"
                subtitle="BAF Shaheen College Dhaka"
                description="Completed H.S.C with a focus on Science. Developed strong analytical skills and a passion for engineering during these foundational years."
              />
              <TimelineItem 
                year="2020"
                title="Secondary School Certificate"
                subtitle="Motijheel Ideal School And College"
                description="Graduated with a focus on Science. This is where my curiosity for technology and competition first ignited."
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-20">
              <h2 className="font-bebas text-8xl text-white tracking-tighter uppercase mb-4">
                PROFESSIONAL_LOGS
              </h2>
              <p className="text-tertiary-container font-bold tracking-[0.4em] uppercase text-xs">
                Real-world deployment of soft skills
              </p>
            </div>
            
            <div className="space-y-0">
              <TimelineItem 
                year="JUL 2023 - SEP 2023"
                icon="work"
                title="Sales Executive"
                subtitle="Gadget Dreamland, Basabo Dhaka"
                description="Honed communication and problem-solving skills in a fast-paced retail environment. Developed a customer-centric approach to problem-solving and teamwork."
              />
              <TimelineItem 
                year="LEADERSHIP"
                icon="military_tech"
                title="Cadet Under Officer (B.N.C.C)"
                subtitle="Bangladesh National Cadet Corps"
                description="Awarded Best Cadet in 2018 and 2020. Developed discipline, strategic coordination, and leadership skills."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
