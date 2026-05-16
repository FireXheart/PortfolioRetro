'use client';

import { motion } from 'framer-motion';
import { ACHIEVEMENTS, STATS } from '@/data/portfolioData';

export function Achievements() {
  const getRarityStyle = (rarity: string) => {
    switch (rarity) {
      case 'LEGENDARY': return 'bg-[#ffd700] text-black border-none';
      case 'EPIC': return 'bg-primary text-black border-none';
      case 'RARE': return 'bg-transparent border border-primary text-primary';
      default: return 'bg-[#888] text-black border-none';
    }
  };

  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <h2 className="font-headline text-3xl text-primary">
            PRO GAMER, AREN'T I?
          </h2>
          <div className="inline-block border-2 border-primary px-8 py-3 font-headline text-sm text-primary">
            XP EARNED : {STATS.xpEarned}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-card border-2 border-primary p-8 relative flex flex-col group hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(224,90,30,0.4)] transition-all duration-300"
            >
              <div className={`absolute -top-1 -right-1 px-3 py-1 font-headline text-[7px] ${getRarityStyle(ach.rarity)} z-10`}>
                {ach.rarity}
              </div>

              <div className="flex-grow text-center space-y-4">
                <h3 className="font-headline text-xs text-primary pt-2">
                  {ach.title}
                </h3>
                <p className="font-body text-sm text-[#cccccc] leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <div className="w-full h-3 bg-[#333] relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="h-full bg-primary"
                  />
                </div>
                <div className="text-center font-headline text-[9px] text-primary">
                  +{ach.xp} XP
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
