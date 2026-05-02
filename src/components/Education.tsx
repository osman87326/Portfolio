'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, subtitle, description }: { year: string, title: string, subtitle: string, description: string }) => (
  <div className="relative pl-12 pb-12 border-l-4 border-primary-container last:border-0 last:pb-0">
    <div className="absolute left-[-12px] top-0 w-5 h-5 bg-primary-container neo-border"></div>
    <div className="font-bebas text-2xl text-primary-container mb-1">{year}</div>
    <h3 className="font-bebas text-4xl text-white mb-2">{title}</h3>
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
              year="2020 - 2024"
              title="BACHELOR OF COMPUTER SCIENCE"
              subtitle="International University of Tech"
              description="Focused on software engineering, algorithms, and human-computer interaction. Graduated with honors and a deep interest in modern web architectures."
            />
            <TimelineItem 
              year="2018 - 2020"
              title="HIGHER SECONDARY CERTIFICATE"
              subtitle="Science Division"
              description="Developed a strong foundation in mathematics and analytical thinking, which paved the way for my programming career."
            />
          </div>
        </div>
        <div>
          <h2 className="font-bebas text-7xl text-white mb-16">EXPERIENCE_PROTOCOLS</h2>
          <div className="space-y-0">
            <TimelineItem 
              year="2024 - PRESENT"
              title="JUNIOR FULLSTACK DEVELOPER"
              subtitle="TechNova Solutions"
              description="Developing full-cycle web applications, from high-performance frontends with Next.js to robust backend systems. Architecting scalable design systems and integrated database solutions."
            />
            <TimelineItem 
              year="2023 - 2024"
              title="WEB DEVELOPMENT INTERN"
              subtitle="Creative Digital Agency"
              description="Assisted in developing client websites and internal tools. Mastered the fundamentals of modern CSS and JavaScript frameworks."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
