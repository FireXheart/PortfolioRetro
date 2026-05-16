'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Achievements } from '@/components/achievements';
import { Footer } from '@/components/footer';
import { PixelCityBackground } from '@/components/pixel-city-background';
import { LoadingScreen } from '@/components/loading-screen';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative selection:bg-primary selection:text-black">
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <>
          <div className="fixed inset-0 z-[999] pointer-events-none scanlines opacity-30" />
          <PixelCityBackground />
          <Navbar />
          
          <div className="relative">
            <Hero />
            
            <div className="w-full border-t-2 border-dashed border-primary/40 my-12" />
            <Intro />
            
            <div className="w-full border-t-2 border-dashed border-primary/40 my-12" />
            <Projects />
            
            <div className="w-full border-t-2 border-dashed border-primary/40 my-12" />
            <Skills />
            
            <div className="w-full border-t-2 border-dashed border-primary/40 my-12" />
            <Experience />
            
            <div className="w-full border-t-2 border-dashed border-primary/40 my-12" />
            <Achievements />
            
            <Footer />
          </div>
        </>
      )}
    </main>
  );
}
