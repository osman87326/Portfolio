'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills, details }: { title: string, skills: string[], details?: string }) => (
  <div className="p-8 bg-surface-container neo-border neo-shadow group hover:border-primary-container transition-colors">
    <h3 className="font-bebas text-4xl text-primary-container mb-4 border-b-2 border-black pb-2">{title}</h3>
    {details && <p className="text-xs text-secondary mb-4 tracking-widest uppercase font-bold">{details}</p>}
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <motion.span 
          key={index}
          whileHover={{ scale: 1.1, backgroundColor: "#38bdf8", color: "#000" }}
          className="px-4 py-2 bg-black text-on-surface-variant text-sm font-bold neo-border transition-all cursor-default"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="px-8 py-section-padding blueprint-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bebas text-8xl text-white mb-16">TECH_&_SOFT_NODES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <SkillCategory 
            title="COMPETITIVE_PRO" 
            details="CF: osman873 | Rating: 1151"
            skills={["C++", "Algorithms", "Data Structures", "Problem Solving"]} 
          />
          <SkillCategory 
            title="FRONTEND" 
            skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"]} 
          />
          <SkillCategory 
            title="SOFT_SKILLS" 
            skills={["Positive Disposition", "Workflow Prioritisation", "Leadership"]} 
          />
          <SkillCategory 
            title="LANGUAGES" 
            skills={["Bengali (Native)", "English", "Arabic"]} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
