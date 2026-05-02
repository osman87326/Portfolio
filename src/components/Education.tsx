'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, subtitle, description }: { year: string, title: string, subtitle: string, description: string }) => (
  <div className="relative pl-12 pb-12 border-l-4 border-primary-container last:border-0 last:pb-0">
    <div className="absolute left-[-12px] top-0 w-5 h-5 bg-primary-container neo-border"></div>
    <div className="font-bebas text-2xl text-primary-container mb-1">{year}</div>
    <h3 className="font-bebas text-4xl text-white mb-2 uppercase">{title}</h3>
    <div className="text-secondary font-bold text-sm uppercase mb-4 tracking-widest">{subtitle}</div>
    <p className="text-on-surface-variant max-w-2xl">{description}</p>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="px-8 py-section-padding bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h2 className="font-bebas text-7xl text-white mb-16">EDUCATION_LOGS</h2>
          <div className="space-y-0">
            <TimelineItem 
              year="2023 - PRESENT"
              title="Electrical and Computer Engineering"
              subtitle="Rajshahi University of Engineering & Technology"
              description="Deep diving into the intersection of hardware and software. Pursuing core engineering principles with a focus on computing systems."
            />
            <TimelineItem 
              year="2022"
              title="H.S.C"
              subtitle="BAF Shaheen College Dhaka"
              description="Completed Higher Secondary Certificate with a focus on science and analytical studies."
            />
            <TimelineItem 
              year="2020"
              title="S.S.C"
              subtitle="Motijheel Ideal School And College"
              description="Foundational secondary education with a strong academic record."
            />
          </div>
        </div>
        <div>
          <h2 className="font-bebas text-7xl text-white mb-16">ACHIEVEMENTS_&_ECO</h2>
          <div className="space-y-0">
            <TimelineItem 
              year="LEADERSHIP"
              title="Cadet Under Officer (B.N.C.C)"
              subtitle="Bangladesh National Cadet Corps"
              description="Awarded Best Cadet (2018, 2020). Leading through discipline and strategic coordination."
            />
            <TimelineItem 
              year="SCIENCE CLUBS"
              title="Panel & Sub-Panel Member"
              subtitle="BAF Shaheen & Ideal Science Club"
              description="Actively managed club activities and coordinated science-focused events."
            />
            <TimelineItem 
              year="PARTICIPATION"
              title="Techfest & Olympiads"
              subtitle="IIT Bombay, RUET, National Olympiads"
              description="Runner-up in Wall Magazine at BUET Space Carnival (2019). Participated in IIT Bombay Techfest and various National Olympiads."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
