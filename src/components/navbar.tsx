'use client';

import { useState, useEffect } from 'react';
import { PixelArtAvatar } from './pixel-art-avatar';
import { motion } from 'framer-motion';

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
      { threshold: 0.5 }
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
      case 'experience': return 'MY PROFESSIONAL JOURNEY!';
      case 'achievements': return 'CHECK OUT MY EPIC LOOT!';
      case 'projects': return 'MISSION LOGS ARCHIVED';
      default: return 'WELCOME TO MY WORLD!';
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-background/80 backdrop-blur-sm z-[100] border-b-2 border-dashed border-primary px-4 md:px-8 flex items-center justify-between font-headline text-[10px]">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
            className={`flex items-center gap-1 transition-all ${
              activeSection === section.id ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <div className={`w-4 h-4 border-2 transition-colors ${activeSection === section.id ? 'bg-primary border-primary' : 'bg-transparent border-[#333]'}`} />
            <span className={activeSection === section.id ? 'block' : 'hidden'}>
              {section.label}
            </span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:block bg-white text-black px-3 py-2 border-2 border-[#333]">
          {getStatusText()}
        </div>
        <div className="flex items-center gap-2 border-2 border-primary p-1">
          <PixelArtAvatar size={42} />
          <div className="w-2 h-2 bg-primary animate-pulse" />
        </div>
      </div>
    </nav>
  );
}
