'use client';

import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/portfolioData';
import { Button } from './ui/button';

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0d0d0d]/50">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl text-primary text-center mb-16 glitch-text">
          WHERE DID MY TIME GO?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-card border-2 border-primary p-8 flex flex-col h-[380px] hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(224,90,30,0.3)] transition-all duration-300"
            >
              <div className="space-y-4 flex-grow">
                <span className="text-[10px] font-headline text-[#888] block tracking-widest uppercase">
                  {project.category}
                </span>
                <h3 className="font-headline text-sm text-primary leading-relaxed">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-[#cccccc] line-height-[1.8]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[8px] font-headline bg-primary/10 text-primary px-2 py-1 border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  variant="outline" 
                  className="w-full font-headline text-[9px] border-2 border-primary text-primary hover:bg-primary hover:text-black"
                >
                  VIEW DETAILS
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
