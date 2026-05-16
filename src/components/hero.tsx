'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/data/portfolioData';
import { Button } from './ui/button';
import { PixelArtAvatar } from './pixel-art-avatar';

export function Hero() {
  return (
    <section id="intro" className="relative min-h-screen flex items-center pt-[60px] overflow-hidden">
      {/* Background Moon */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#1a0800] opacity-40 blur-3xl pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm <span className="block mt-2">Sourav Kumar Lenka!</span>
          </h1>
          <p className="font-body text-xl text-[#cccccc] max-w-lg leading-relaxed">
            I can do whatever you need, as long as I'm learning something 
            or getting paid well enough for my time — preferably both.
          </p>
          <div className="space-y-4">
            <p className="font-body text-sm text-[#888]">Don't Have Much Time?</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="font-headline text-[9px] px-8 py-6 border-2 hover:border-primary">
                VIEW RESUME
              </Button>
              <Button className="font-headline text-[9px] px-8 py-6 bg-primary text-black hover:bg-orange-600 shadow-[4px_4px_0px_#8b3a12]">
                HIRE ME
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[320px] bg-card border-2 border-primary p-6 font-body">
            <div className="flex items-center gap-4 mb-6">
              <div className="border-2 border-primary p-1">
                <PixelArtAvatar size={48} />
              </div>
              <div>
                <h3 className="font-headline text-xs text-primary uppercase">SOURAV KUMAR LENKA</h3>
                <p className="text-[10px] text-muted-foreground">Quick Stats</p>
              </div>
            </div>

            <div className="space-y-0 text-sm">
              {[
                { label: 'Total Experience', value: STATS.experience },
                { label: 'Projects Completed', value: STATS.projects },
                { label: 'XP Earned', value: STATS.xpEarned },
                { label: 'YouTube Subs', value: STATS.youtubeSubs },
              ].map((stat, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 border-b border-[#333]">
                  <span className="font-bold text-white">{stat.label}</span>
                  <span className="font-bold text-primary">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
