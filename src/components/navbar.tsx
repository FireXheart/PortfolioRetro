'use client';

import { useState, useEffect } from 'react';
import { PixelArtAvatar } from './pixel-art-avatar';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = [
  { id: 'intro', label: 'INTRO' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'achievements', label: 'ACHIEVEMENTS' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '-20% 0px -60% 0px' // Adjust margins to trigger section changes more reliably
      }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getStatusText = () => {
    switch (activeSection) {
      case 'skills': return 'THESE ARE MY SUPERPOWERS!';
      case 'experience': return 'STATUS: PROFESSIONAL GRIND';
      case 'achievements': return 'CHECK OUT MY EPIC LOOT!';
      case 'projects': return 'MISSION LOGS ARCHIVED';
      default: return 'WELCOME TO MY WORLD!';
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-background/80 backdrop-blur-sm z-[100] border-b-2 border-dashed border-primary px-4 md:px-8 flex items-center justify-between font-headline text-[10px]">
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-2">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              const el = document.getElementById(section.id);
              if (el) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = el.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className={`flex items-center gap-2 flex-shrink-0 transition-all duration-300 ${
              activeSection === section.id ? 'text-primary' : 'text-muted-foreground hover:text-primary/70'
            }`}
          >
            <div className={`w-4 h-4 border-2 transition-colors duration-300 ${
              activeSection === section.id 
                ? 'bg-primary border-primary shadow-[0_0_8px_var(--primary)]' 
                : 'bg-transparent border-[#333]'
            }`} />
            
            <AnimatePresence mode="wait">
              {activeSection === section.id && (
                <motion.span
                  key={section.id}
                  initial={{ opacity: 0, x: -10, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: 'auto' }}
                  exit={{ opacity: 0, x: -10, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap overflow-hidden"
                >
                  {section.label}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 flex-shrink-0 ml-4">
        <div className="hidden lg:block bg-white text-black px-3 py-2 border-2 border-[#333] font-bold">
          {getStatusText()}
        </div>
        <div className="flex items-center gap-2 border-2 border-primary p-1 bg-card">
          <PixelArtAvatar size={42} />
          <div className="w-2 h-2 bg-primary animate-pulse" />
        </div>
      </div>
    </nav>
  );
}
