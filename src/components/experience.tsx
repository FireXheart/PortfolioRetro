'use client';

import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0d0d0d]/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-headline text-3xl text-primary text-center mb-16">
          THE GRIND SO FAR
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-12">
          {/* Level Tracker */}
          <div className="hidden md:flex flex-col items-center sticky top-24 h-fit">
            <div className="w-[2px] h-[600px] border-l-2 border-dashed border-primary relative">
              {EXPERIENCE.map((exp, i) => (
                <div 
                  key={i}
                  className="absolute left-[-21px] flex flex-col items-center gap-2"
                  style={{ top: `${i * 120}px` }}
                >
                  <div className="w-10 h-10 bg-card border-2 border-primary flex items-center justify-center font-headline text-[8px] text-primary">
                    LVL {exp.level}
                  </div>
                  <div className="w-5 h-5 bg-card border-2 border-primary flex items-center justify-center text-primary text-[10px]">
                    X
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border-2 border-primary p-8 relative"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="font-headline text-primary text-lg">
                    {exp.role}
                  </h3>
                  <span className="font-body text-[#888] text-sm">
                    {exp.duration}
                  </span>
                </div>
                
                <h4 className="font-body font-bold text-white text-md mb-6">
                  @ {exp.company}
                </h4>

                <ul className="space-y-4 font-body text-sm text-[#cccccc] mb-8">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="font-headline text-[7px] bg-primary text-black px-3 py-1.5 uppercase font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
