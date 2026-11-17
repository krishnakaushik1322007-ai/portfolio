import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Terminal, Home, FolderGit2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 flex flex-col items-center justify-center p-6 text-center space-y-8">
      {/* Visual Glitch Radar Box */}
      <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-violet-500/10 to-transparent border border-sky-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(56,189,248,0.2)]">
        <Terminal className="w-12 h-12 text-sky-400" />
        <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-rose-500 animate-ping" />
        <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-rose-500" />
      </div>

      <div className="space-y-3 max-w-md">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300">
          <span>STATUS: 404 &bull; ADDRESS_SPACE_FAULT</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Route Not Found
        </h1>
        <p className="text-sm font-mono text-slate-400 leading-relaxed">
          The requested system route does not exist in the active application routing table.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(56,189,248,0.3)]"
        >
          <Home className="w-4 h-4" />
          <span>Return to Safe Gateway</span>
        </Link>

        <Link
          href="/projects"
          className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/10 text-xs font-mono transition-colors"
        >
          <FolderGit2 className="w-4 h-4 text-sky-400" />
          <span>Explore Projects</span>
        </Link>
      </div>

      <div className="text-[11px] font-mono text-slate-600 pt-8">
        Krishna Kaushik Portfolio Core &bull; Node Diagnostic Service
      </div>
    </div>
  );
}
