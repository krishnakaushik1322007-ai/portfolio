'use client';

import React from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  GitBranch, 
  ShieldCheck 
} from 'lucide-react';

export default function ProofMetrics() {
  const metrics = [
    {
      icon: GraduationCap,
      value: '9.05 / 10',
      label: 'Academic Standing',
      subtext: 'B.Tech CSE (AI) • Shoolini University',
      color: 'from-sky-400 to-blue-500',
      border: 'hover:border-sky-500/40'
    },
    {
      icon: CheckCircle2,
      value: '100 / 100',
      label: 'CivicLens Test Suite',
      subtext: 'Automated tests passing across 12 modules',
      color: 'from-emerald-400 to-teal-500',
      border: 'hover:border-emerald-500/40'
    },
    {
      icon: ShieldCheck,
      value: '510',
      label: 'CampusOS QA Suite',
      subtext: '487 passed, 23 skipped test milestone',
      color: 'from-violet-400 to-purple-500',
      border: 'hover:border-violet-500/40'
    },
    {
      icon: Cpu,
      value: '9-Month',
      label: 'Internship Programme',
      subtext: 'Corizo (In Collab with IIT Bombay)',
      color: 'from-amber-400 to-orange-500',
      border: 'hover:border-amber-500/40'
    }
  ];

  return (
    <section className="relative py-10 border-y border-white/[0.06] bg-[#090b10]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-xl p-5 bg-white/[0.02] border border-white/[0.06] ${item.border} transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4 text-sky-400" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {item.label}
                  </span>
                </div>
                <div className="mt-1">
                  <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.value}
                  </div>
                  <p className="mt-1 text-xs text-slate-400 font-mono">
                    {item.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
