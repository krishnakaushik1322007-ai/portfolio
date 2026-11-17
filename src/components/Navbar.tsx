'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Terminal, 
  FileText, 
  Menu, 
  X, 
  Sparkles, 
  ExternalLink,
  Code2,
  FolderGit2
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: pathname === '/' ? '#about' : '/#about' },
    { name: 'Skills', href: pathname === '/' ? '#skills' : '/#skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: pathname === '/' ? '#experience' : '/#experience' },
    { name: 'Education', href: pathname === '/' ? '#education' : '/#education' },
    { name: 'Achievements', href: pathname === '/' ? '#achievements' : '/#achievements' },
    { name: 'Contact', href: pathname === '/' ? '#contact' : '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090d]/80 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <Link
            href="/"
            className="flex items-center space-x-3 group cursor-pointer focus:outline-none"
            aria-label="Krishna Kaushik Portfolio Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 via-violet-500/10 to-transparent border border-sky-500/30 flex items-center justify-center font-mono font-bold text-sky-400 group-hover:border-sky-400 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300">
              <span className="text-sm tracking-wider">KK</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100 tracking-tight text-base group-hover:text-sky-300 transition-colors">
                Krishna Kaushik
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                AI & Systems Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-sky-400 bg-sky-500/10 border border-sky-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Status Indicator */}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-xs font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for AI Roles</span>
            </div>

            {/* Resume Button */}
            <a
              href="/Krishna_Kaushik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 hover:border-sky-400 text-xs font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="/Krishna_Kaushik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/30 text-xs font-mono"
            >
              Resume
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d14]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Navigation</span>
            <div className="flex items-center space-x-1.5 text-xs font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire</span>
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-sky-300 hover:bg-white/[0.05] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <a
              href="/Krishna_Kaushik_Resume.pdf"
              download
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-sky-500 text-slate-950 font-semibold text-sm hover:bg-sky-400 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Download Official Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
