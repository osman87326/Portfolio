'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills }: { title: string, skills: { name: string, level: number }[] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 bg-surface-container neo-border neo-shadow-primary group hover:-translate-y-2 transition-all duration-500"
  >
    <h3 className="font-bebas text-4xl text-white mb-8 border-b-2 border-primary-container pb-2 inline-block uppercase tracking-wider">{title}</h3>
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">{skill.name}</span>
            <span className="font-bebas text-xl text-primary-container">{skill.level}%</span>
          </div>
          <div className="h-3 bg-black neo-border overflow-hidden p-[2px]">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full bg-primary-container"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="px-6 lg:px-12 py-32 blueprint-bg relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="font-bebas text-8xl lg:text-[10rem] text-white leading-none tracking-tighter uppercase mb-4">
            TECH_STACK
          </h2>
          <p className="text-on-surface-variant font-bold tracking-[0.4em] uppercase text-xs">
            Orchestrating radical digital architectures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard 
            title="COMPETITIVE_PRO" 
            skills={[
              { name: "C++ / Algorithms", level: 95 },
              { name: "Handle: osman873", level: 1151 / 20 }, // Visual representation
              { name: "Rating: 1151", level: 60 },
              { name: "Data Structures", level: 90 }
            ]} 
          />
          <SkillCard 
            title="CORE_STRENGTHS" 
            skills={[
              { name: "Positive Disposition", level: 100 },
              { name: "Workflow Prioritisation", level: 95 },
              { name: "Adaptability", level: 90 },
              { name: "Team Collaboration", level: 95 }
            ]} 
          />
          <SkillCard 
            title="LANGUAGES" 
            skills={[
              { name: "Bengali (Native)", level: 100 },
              { name: "English (Fluent)", level: 90 },
              { name: "Arabic (Basic)", level: 40 },
              { name: "C++ / JS / TS", level: 95 }
            ]} 
          />
        </div>

        {/* Soft Skills Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Problem Solving", "Leadership", "Competitive Pro", "Adaptability"].map((skill, i) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="p-6 bg-surface-container-high neo-border text-center group"
            >
              <div className="font-bebas text-2xl text-on-surface-variant group-hover:text-primary-container transition-colors uppercase tracking-widest">{skill}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
