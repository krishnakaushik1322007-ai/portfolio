'use client';

import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { educationData } from '@/data/education';

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-sky-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05 // ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Undergraduate Computer Science & <span className="text-gradient-cyan">Artificial Intelligence</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl">
            Rigorous university education emphasizing computational foundations, algorithmic analysis, intelligent systems, and scalable database architectures.
          </p>
        </div>

        {/* Master Education Display Card */}
        <div className="p-8 rounded-2xl bg-[#0b0e14] border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Degree & Institutional Identity */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-sky-500/10 text-sky-300 border border-sky-500/30">
                    UNDERGRADUATE DEGREE
                  </span>
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{educationData.startYear} – {educationData.expectedGraduation} (Expected)</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-1">
                  {educationData.degree}
                </h3>
                <p className="text-lg text-sky-400 font-mono font-medium">
                  {educationData.field}
                </p>
              </div>

              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <span className="font-semibold text-white">{educationData.institution}</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-slate-400 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{educationData.location}</span>
                </span>
              </div>

              {/* Coursework Tags */}
              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                  <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                  <span>Core Academic Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {educationData.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:border-sky-500/30 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: CGPA Spotlight & Focus Box */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {/* CGPA Display Pill */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-sky-500/[0.08] via-violet-500/[0.05] to-transparent border border-sky-500/30 shadow-[0_0_30px_rgba(56,189,248,0.12)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Cumulative Grade Point Average
                  </span>
                  <Award className="w-5 h-5 text-sky-400" />
                </div>
                <div className="mt-2 flex items-baseline space-x-2">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
                    {educationData.cgpa}
                  </span>
                  <span className="text-lg text-slate-400 font-mono">
                    / {educationData.scale}
                  </span>
                </div>
                <div className="mt-3 flex items-center space-x-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Consistently High Academic Distinction</span>
                </div>
              </div>

              {/* Focus List */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Academic Focus & Highlights:
                </span>
                <ul className="space-y-2">
                  {educationData.academicFocus.map((point, i) => (
                    <li
                      key={i}
                      className="text-xs text-slate-300 font-mono leading-relaxed flex items-start space-x-2"
                    >
                      <span className="text-sky-400 shrink-0 mt-0.5">&bull;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
