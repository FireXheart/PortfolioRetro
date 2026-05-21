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

export function MovingDivider() {
  return <div className="w-full h-[2px] animate-moving-line my-12" />;
}

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
            
            <MovingDivider />
            <Intro />
            
            <MovingDivider />
            <Projects />
            
            <MovingDivider />
            <Skills />
            
            <MovingDivider />
            <Experience />
            
            <MovingDivider />
            <Achievements />
            
            <Footer />
          </div>
        </>
      )}
    </main>
  );
}