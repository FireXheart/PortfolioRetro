'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/data/portfolioData';

function PlayingCard({ skill, index }: { skill: any; index: number }) {
  const isJoker = skill.type === 'JOKER';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: 'spring' }}
      whileHover={{ scale: 1.1, rotate: 3, zIndex: 50 }}
      className={`relative w-[140px] h-[190px] bg-card border-2 border-primary pixel-shadow-sm p-4 flex flex-col items-center justify-center cursor-pointer group transition-all`}
    >
      {/* Top Left Rank */}
      <div className="absolute top-2 left-2 flex flex-col items-center font-headline text-[8px] text-primary">
        <span>{skill.cardRank}</span>
        <span>{skill.suit}</span>
      </div>

      {/* Center Icon/Face */}
      <div className="text-4xl mb-2 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110">
        {isJoker ? '🃏' : skill.name === 'PYTHON' ? '🐍' : skill.name === 'FASTAPI' ? '⚡' : skill.name === 'DOCKER' ? '🐳' : '⚙️'}
      </div>

      <div className="font-headline text-[8px] text-primary text-center mt-2 px-1">
        {skill.name}
      </div>

      {/* Bottom Right Rank */}
      <div className="absolute bottom-2 right-2 flex flex-col items-center font-headline text-[8px] text-primary rotate-180">
        <span>{skill.cardRank}</span>
        <span>{skill.suit}</span>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl text-primary text-center mb-16">
          MY SKILL DECK
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {SKILLS.map((skill, idx) => (
            <PlayingCard key={idx} skill={skill} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
