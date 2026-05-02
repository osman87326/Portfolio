'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ value, label }: { value: string, label: string }) => {
  const numberRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const val = parseFloat(value);
    const ctx = gsap.context(() => {
      gsap.from(numberRef.current, {
        innerText: 0,
        duration: 2,
        snap: { innerText: 0.1 },
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom-=50',
        },
        onUpdate: function() {
          if (numberRef.current) {
            numberRef.current.innerText = parseFloat(this.targets()[0].innerText).toFixed(value.includes('.') ? 1 : 0) + (value.includes('+') ? '+' : '');
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [value]);

  return (
    <div ref={containerRef} className="p-8 border-4 border-white/10 neo-shadow group hover:border-primary-container transition-colors">
      <div ref={numberRef} className="font-bebas text-8xl text-white group-hover:text-primary-container mb-4">{value}</div>
      <div className="font-bebas text-3xl text-zinc-500">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-section-padding px-8 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <StatCard value="120+" label="DEVOPS_FLIPS" />
        <StatCard value="08" label="CORE_PROTOCOLS" />
        <StatCard value="99.9" label="UPTIME_RELAY" />
      </div>
    </section>
  );
};

export default Stats;

