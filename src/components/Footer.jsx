import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-navy-700/80 bg-navy-950 py-12 text-slate-400 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left branding */}
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-semibold text-sm">{portfolioData.personal.name}</span>
              <span className="text-slate-500 block text-[11px]">Associate Software Engineer • NSBM Green University</span>
            </div>
          </div>

          {/* Socials & Tech Note */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-slate-500 text-[11px]">Built with React, Tailwind CSS & Vite</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-navy-900 hover:bg-navy-850 text-slate-300 hover:text-blue-400 border border-navy-700 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-navy-800 text-center text-[11px] text-slate-600">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
