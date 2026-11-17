'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  FileText, 
  ArrowUp, 
  Terminal, 
  ShieldCheck, 
  Heart 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06070a] border-t border-white/[0.08] text-slate-400 py-16 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-500/10 border border-sky-500/30 flex items-center justify-center font-mono font-bold text-sky-400">
                KK
              </div>
              <div>
                <span className="font-bold text-white text-base tracking-tight block">
                  Krishna Kaushik
                </span>
                <span className="text-xs font-mono text-slate-500">
                  AI Engineer &bull; Software Developer &bull; CSE (AI)
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Computer Science &amp; Artificial Intelligence undergraduate at Shoolini University (9.05/10 CGPA) building verified, ground-truth AI systems and full-stack software.
            </p>

            <div className="flex items-center space-x-3 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Global Engineering Opportunities</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="uppercase tracking-wider text-slate-300 font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="hover:text-sky-300 transition-colors">
                  &rsaquo; All Projects (6 Case Studies)
                </Link>
              </li>
              <li>
                <Link href="/projects/campusos-ai" className="hover:text-sky-300 transition-colors">
                  &rsaquo; CampusOS AI (Flagship)
                </Link>
              </li>
              <li>
                <Link href="/projects/civiclens" className="hover:text-sky-300 transition-colors">
                  &rsaquo; CivicLens Municipal AI
                </Link>
              </li>
              <li>
                <Link href="/projects/gyanix" className="hover:text-sky-300 transition-colors">
                  &rsaquo; Gyanix Socratic Dataset
                </Link>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-300 transition-colors">
                  &rsaquo; Applied Technical Arsenal
                </a>
              </li>
            </ul>
          </div>

          {/* Verification & Resume Column */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="uppercase tracking-wider text-slate-300 font-semibold block">
              Documentation &amp; Source
            </span>
            <p className="text-slate-400">
              Built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Grounded in authentic codebase inspection and verified academic records.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="/Krishna_Kaushik_Resume.pdf"
                download
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30 hover:bg-sky-500/20 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Official Resume (PDF)</span>
              </a>
              <a
                href="https://github.com/krishnakaushik1322007-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] text-slate-300 border border-white/10 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repositories</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div>
            &copy; 2026 Krishna Kaushik. All engineering rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/krishna-kaushik-559239366/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/krishnakaushik1322007-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:krishnakaushik1322007@gmail.com"
              className="hover:text-sky-400 transition-colors"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-white transition-colors ml-2"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
