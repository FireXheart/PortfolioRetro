'use client';

import { useState, useEffect, useRef } from 'react';
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Automatically scroll the navbar to show the active item on mobile
    const activeButton = scrollRef.current?.querySelector(`[data-section="${activeSection}"]`);
    if (activeButton && scrollRef.current) {
      activeButton.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeSection]);

  const getStatusText = () => {
    switch (activeSection) {
      case 'skills': return 'THESE ARE MY SUPERPOWERS!';
      case 'experience': return 'STATUS: PROFESSIONAL GRIND';
      case 'achievements': return 'CHECK OUT MY EPIC LOOT!';
      case 'projects': return 'MISSION LOGS ARCHIVED';
      default: return 'WELCOME TO MY WORLD!';
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-background/90 backdrop-blur-md z-[100] border-b-2 border-dashed border-primary px-4 md:px-8 flex items-center justify-between font-headline text-[10px]">
      <div 
        ref={scrollRef}
        className="flex items-center gap-4 overflow-x-auto no-scrollbar py-2 flex-grow max-w-[70%]"
      >
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            data-section={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`flex items-center gap-2 flex-shrink-0 transition-all duration-300 outline-none ${
              activeSection === section.id ? 'text-primary' : 'text-muted-foreground hover:text-primary/70'
            }`}
          >
            <div className={`w-4 h-4 border-2 transition-all duration-300 ${
              activeSection === section.id 
                ? 'bg-primary border-primary shadow-[0_0_8px_var(--primary)] scale-110' 
                : 'bg-transparent border-[#333]'
            }`} />
            
            <AnimatePresence mode="wait">
              {activeSection === section.id && (
                <motion.span
                  key={`label-${section.id}`}
                  initial={{ opacity: 0, x: -10, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: 'auto' }}
                  exit={{ opacity: 0, x: -10, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap overflow-hidden font-bold"
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