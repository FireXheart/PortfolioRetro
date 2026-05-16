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

function TypingText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let currentText = '';
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        setDisplayedText(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40); // Fast typing speed

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="inline-block min-w-[200px]">
      {displayedText}
      <span className="animate-pulse bg-black w-2 h-4 inline-block ml-1 align-middle" />
    </span>
  );
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState('intro');
  const [statusText, setStatusText] = useState('WELCOME TO MY WORLD!');
  const [isMouseInWindow, setIsMouseInWindow] = useState(true);
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

    // Mouse Presence Tracking
    const handleMouseLeave = () => setIsMouseInWindow(false);
    const handleMouseEnter = () => setIsMouseInWindow(true);
    
    // Global Status Hint Tracking
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hint = target.closest('[data-status-hint]')?.getAttribute('data-status-hint');
      
      if (hint) {
        setStatusText(hint);
      } else {
        // Fallback to section based text
        switch (activeSection) {
          case 'skills': setStatusText('THESE ARE MY SUPERPOWERS!'); break;
          case 'experience': setStatusText('STATUS: PROFESSIONAL GRIND'); break;
          case 'achievements': setStatusText('CHECK OUT MY EPIC LOOT!'); break;
          case 'projects': setStatusText('MISSION LOGS ARCHIVED'); break;
          default: setStatusText('WELCOME TO MY WORLD!'); break;
        }
      }
    };

    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeSection]);

  useEffect(() => {
    const activeButton = scrollRef.current?.querySelector(`[data-section="${activeSection}"]`);
    if (activeButton && scrollRef.current) {
      activeButton.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeSection]);

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
        <div className="hidden lg:block bg-white text-black px-4 py-2 border-2 border-[#333] font-bold min-w-[280px]">
          <TypingText text={isMouseInWindow ? statusText : '...'} />
        </div>
        <div className="flex items-center gap-2 border-2 border-primary p-1 bg-card">
          <PixelArtAvatar size={42} />
          <div className="w-2 h-2 bg-primary animate-pulse" />
        </div>
      </div>
    </nav>
  );
}