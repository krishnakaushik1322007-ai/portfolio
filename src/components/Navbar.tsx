'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FileText, 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight,
  Terminal
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
    { name: 'Flagships', href: '/projects' },
    { name: 'Matrix', href: pathname === '/' ? '#projects' : '/projects' },
    { name: 'Experience', href: pathname === '/' ? '#experience' : '/#experience' },
    { name: 'Education', href: pathname === '/' ? '#education' : '/#education' },
    { name: 'Achievements', href: pathname === '/' ? '#achievements' : '/#achievements' },
    { name: 'Contact', href: pathname === '/' ? '#contact' : '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050508]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Identity matching video red square badge */}
          <Link
            href="/"
            className="flex items-center space-x-3 group cursor-pointer focus:outline-none"
            aria-label="Krishna Kaushik Portfolio Home"
          >
            <div className="w-9 h-9 rounded bg-red-600 flex items-center justify-center font-mono font-black text-white text-sm shadow-[0_0_15px_rgba(239,68,68,0.4)] group-hover:scale-105 transition-transform">
              KK.
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white tracking-tight text-sm uppercase group-hover:text-red-400 transition-colors">
                KRISHNA KAUSHIK
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                AI &bull; SOFTWARE DEVELOPER
              </span>
            </div>
          </Link>

          {/* Center Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Cluster matching video red DISPATCH pill */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available</span>
            </div>

            <a
              href="#contact"
              className="px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] flex items-center space-x-1.5"
            >
              <span>DISPATCH</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="/Krishna_Kaushik_Resume.pdf"
              download
              className="p-2 rounded bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              title="Download Resume PDF"
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded bg-red-600 text-white text-xs font-mono font-bold uppercase"
            >
              DISPATCH
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-400 hover:text-white hover:bg-white/[0.05]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07070b]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-sm font-mono text-slate-300 hover:text-white hover:bg-white/[0.05]"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <a
              href="/Krishna_Kaushik_Resume.pdf"
              download
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded bg-red-600 text-white font-mono font-bold text-xs uppercase tracking-wider"
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
