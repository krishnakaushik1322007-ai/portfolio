'use client';

import React from 'react';
import { 
  Briefcase, 
  Cpu, 
  Database, 
  Atom, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ShieldAlert 
} from 'lucide-react';
import { internshipExperience } from '@/data/experience';

export default function ExperienceSection() {
  const getModuleIcon = (number: number) => {
    switch (number) {
      case 1:
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 2:
        return <Database className="w-5 h-5 text-violet-400" />;
      case 3:
        return <Atom className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="experience" className="relative py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-sky-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // TECHNICAL INTERNSHIP TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Structured Engineering <span className="text-gradient-violet">Internship Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl">
            A comprehensive 9-month multi-disciplinary engineering programme focused on emerging hardware, data analytics, and nanoscale technologies.
          </p>
        </div>

        {/* Master Programme Card */}
        <div className="p-8 rounded-2xl bg-[#0b0e14] border border-white/10 shadow-2xl space-y-8">
          
          {/* Programme Identity & Attribution */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center space-x-2.5 mb-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                  {internshipExperience.organization}
                </span>
                <span className="text-slate-600 font-mono text-xs">&bull;</span>
                <span className="text-xs font-mono text-slate-300">
                  {internshipExperience.programmeTitle}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {internshipExperience.collaboration}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                {internshipExperience.totalDuration} &bull; {internshipExperience.format}
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300 self-start md:self-auto flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Current Status: In Progress (Module 1 Active)</span>
            </div>
          </div>

          {/* Explicit Attribution & Transparency Note */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start space-x-3 text-xs font-mono text-slate-400 leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-300 font-semibold block mb-0.5">
                Official Programme Attribution & Ethics:
              </strong>
              {internshipExperience.attributionDisclaimer}
            </div>
          </div>

          {/* Three Modules Breakdown Timeline */}
          <div className="space-y-6 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Curriculum Architecture (3 Specialized Quarters)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {internshipExperience.modules.map((mod) => {
                const isOngoing = mod.status === 'Ongoing';
                return (
                  <div
                    key={mod.id}
                    className={`p-6 rounded-xl border flex flex-col justify-between space-y-4 transition-all duration-300 ${
                      isOngoing
                        ? 'bg-sky-500/[0.04] border-sky-500/30 shadow-[0_0_25px_rgba(56,189,248,0.12)]'
                        : 'bg-white/[0.02] border-white/[0.06] opacity-80'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                          {getModuleIcon(mod.number)}
                        </div>
                        {isOngoing ? (
                          <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
                            <span>CURRENTLY ONGOING</span>
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded text-[10px] font-mono bg-white/[0.05] text-slate-400 border border-white/10 flex items-center space-x-1.5">
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span>UPCOMING</span>
                          </span>
                        )}
                      </div>

                      <div>
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                          Module 0{mod.number} &bull; {mod.duration}
                        </div>
                        <h5 className="text-lg font-bold text-white mt-0.5">
                          {mod.title}
                        </h5>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-mono">
                        {mod.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/[0.06] space-y-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        Focus Areas:
                      </span>
                      <ul className="space-y-1.5">
                        {mod.focus.map((item, i) => (
                          <li
                            key={i}
                            className="text-[11px] font-mono text-slate-300 flex items-start space-x-1.5"
                          >
                            <span className="text-sky-400 shrink-0 mt-0.5">&rsaquo;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
