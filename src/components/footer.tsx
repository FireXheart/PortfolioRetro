'use client';

import { Github, Linkedin, Youtube, Twitter, Mail, FileText, Briefcase } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/portfolioData';

export function Footer() {
  const links = [
    { icon: FileText, label: 'Resume', href: '#' },
    { icon: Briefcase, label: 'Hire Me', href: '#' },
    { icon: Github, label: 'GitHub', href: SOCIAL_LINKS.github },
    { icon: Linkedin, label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
    { icon: Youtube, label: 'YouTube', href: SOCIAL_LINKS.youtube },
    { icon: Twitter, label: 'X.com', href: SOCIAL_LINKS.twitter },
    { icon: Mail, label: 'Email', href: SOCIAL_LINKS.email },
  ];

  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 mb-8 text-[#888] font-body text-sm">
          {links.map((link, i) => (
            <div key={i} className="flex items-center">
              <a 
                href={link.href}
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                <link.icon size={16} />
                <span>{link.label}</span>
              </a>
              {i < links.length - 1 && <span className="ml-6 hidden md:inline">|</span>}
            </div>
          ))}
        </div>

        <div className="text-center text-[#555] font-body text-xs space-y-2">
          <p>© 2026 Sourav Kumar Lenka. Built with <a href="https://react.dev" target="_blank" className="hover:text-primary underline">React</a> & lots of Creativity + Tokens.</p>
        </div>
      </div>
    </footer>
  );
}
