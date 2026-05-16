'use client';

import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/data/portfolioData';
import { Github, Linkedin, Youtube, Twitter, Mail, Code } from 'lucide-react';

export function Intro() {
  const qa = [
    { q: "What I do?", a: "Backend systems, AI agents, Python automation, and low-latency magic." },
    { q: "Prove Your Interest in Coding!", a: "Check my YouTube channel for deep dives. Click Here.", link: SOCIAL_LINKS.youtube },
    { q: "My passions?", a: "Building things that survive high traffic and pixel gaming." },
    { q: "When not coding?", a: "Hitting the gym, playing retro RPGs, or exploring synthwave tracks." },
    { q: "Coding philosophy?", a: "Make it work -> make it right -> make it fast -> make it beautiful." },
    { q: "My weakness?", a: "Übermensch don't have weaknesses. Okay, maybe coffee." },
    { q: "How I code?", a: "Late nights with phonk music at max volume." },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 text-center mb-16">
        <h2 className="font-headline text-2xl text-primary leading-normal">
          LET'S START WITH MY NAME — SOURAV KUMAR LENKA
        </h2>
      </div>

      <div className="max-w-3xl mx-auto px-4 space-y-6">
        {qa.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start gap-4 font-body text-lg leading-loose"
          >
            <span className="text-primary text-2xl flex-shrink-0 mt-1">•</span>
            <p>
              <span className="font-bold text-white">{item.q}</span>{' '}
              <span className="text-[#cccccc]">
                {item.link ? (
                  <a href={item.link} className="text-primary underline hover:text-orange-400 transition-colors">
                    {item.a}
                  </a>
                ) : item.a}
              </span>
            </p>
          </motion.div>
        ))}

        <div className="pt-12 border-t border-[#333] mt-12">
          <p className="text-[#888] mb-6 text-center">Find Me on:</p>
          <div className="flex justify-center flex-wrap gap-8 text-[#888]">
            {[
              { icon: Github, label: 'GitHub', href: SOCIAL_LINKS.github },
              { icon: Linkedin, label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
              { icon: Youtube, label: 'YouTube', href: SOCIAL_LINKS.youtube },
              { icon: Twitter, label: 'X.com', href: SOCIAL_LINKS.twitter },
              { icon: Mail, label: 'Email', href: SOCIAL_LINKS.email },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs font-headline uppercase">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
