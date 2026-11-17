'use client';

import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ChevronDown,
  Info
} from 'lucide-react';
import { useJourney } from '@/context/JourneyContext';

export default function Chapter02Foundation() {
  const { goToChapter, playCinematicChime } = useJourney();
  const [selectedTopic, setSelectedTopic] = useState<number>(0);

  const coursework = [
    {
      title: 'Data Structures & Algorithms',
      code: 'CS-DSA',
      desc: 'Computational complexity (Big-O), binary search trees, graph traversals, and dynamic programming optimization in C++.'
    },
    {
      title: 'Database Management Systems (DBMS)',
      code: 'CS-DBMS',
      desc: 'Relational algebra, normalization (3NF/BCNF), transactional ACID guarantees, PostGIS spatial indexing, and pgvector embeddings.'
    },
    {
      title: 'Object-Oriented Programming (C++)',
      code: 'CS-OOP',
      desc: 'Pointers, memory management, STL containers (vector, map, set), virtual functions, and rule-based expert engines (ZENETH).'
    },
    {
      title: 'Python Programming & Scripting',
      code: 'CS-PY',
      desc: 'High-concurrency async runtimes with FastAPI, Pytest test suites, LangChain orchestration, and FAISS vector math.'
    },
    {
      title: 'Discrete Mathematics & Linear Algebra',
      code: 'MATH-DISC',
      desc: 'Set theory, predicate calculus, graph theory, matrix transformations, eigenvalues, and cosine similarity geometric projections.'
    },
    {
      title: 'Computer Organization & Architecture',
      code: 'CS-COA',
      desc: 'Instruction cycle, ALU design, memory hierarchy, cache coherency, and low-latency systems optimization.'
    }
  ];

  return (
    <section 
      id="foundation"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-28 sm:py-36 border-t border-b border-white/[0.06] overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto w-full space-y-12 z-10">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#38bdf8]/40 bg-[#38bdf8]/10 text-[#38bdf8] font-mono text-xs uppercase tracking-widest mb-3">
              <GraduationCap className="w-3.5 h-3.5 animate-pulse" />
              <span>CHAPTER 02 // THE FOUNDATION &bull; THEME: ACADEMIC GROWTH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
              Every Engineer Needs a <span className="italic font-normal text-gradient-cyan">Strong Foundation.</span>
            </h2>
            <p className="mt-2 text-slate-300 font-sans text-sm sm:text-base max-w-2xl">
              Academic rigor at Shoolini University. Grounding theoretical computer science in mathematics, data structures, and intelligent systems architecture.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#e5b061]/40 bg-[#12141f] shadow-[0_0_25px_rgba(229,176,97,0.15)] flex flex-col items-center justify-center text-center shrink-0 min-w-[160px]">
            <span className="text-[10px] font-mono text-[#e5b061] uppercase tracking-wider">CUMULATIVE CGPA</span>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-slate-100 mt-0.5">
              9.05 <span className="text-xs font-mono text-slate-400 font-normal">/ 10.0</span>
            </div>
            <span className="text-[10px] font-mono text-[#10b981] mt-1 flex items-center space-x-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>ACADEMIC DISTINCTION</span>
            </span>
          </div>
        </div>

        {/* Narrative University Card */}
        <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-[#070b16]/90 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-2">
              <span className="text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider block">
                DEGREE PROGRAMME // 2025 &ndash; 2029
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-100 font-normal">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-base text-cyan-200 font-medium font-sans">
                Computer Science and Engineering &ndash; Artificial Intelligence
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
                <span className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#e5b061]" />
                  <span>Shoolini University, Himachal Pradesh, India</span>
                </span>
                <span>&bull;</span>
                <span className="flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>2025 &ndash; 2029 (Expected)</span>
                </span>
              </div>
            </div>

            <div className="md:col-span-4 p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2 text-xs text-slate-300 font-sans">
              <span className="text-[10px] font-mono text-[#e5b061] uppercase tracking-wider block font-semibold">
                Academic Rigor &amp; Philosophy
              </span>
              <p>
                Maintaining a <strong>9.05/10 CGPA</strong> while actively architecting full-stack software, writing automated test suites, and publishing open-source projects.
              </p>
            </div>

          </div>

          {/* Interactive Coursework Matrix */}
          <div className="space-y-4 pt-4 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Core Technical Coursework &amp; Conceptual Foundations:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {coursework.map((course, idx) => (
                <div
                  key={course.code}
                  onClick={() => {
                    setSelectedTopic(idx);
                    playCinematicChime(500 + idx * 30);
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer space-y-2 ${
                    selectedTopic === idx
                      ? 'border-[#38bdf8] bg-[#0c1a33] shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                      : 'border-white/[0.06] bg-black/40 hover:border-white/20 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#e5b061]">
                      {course.code}
                    </span>
                    {selectedTopic === idx && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
                    )}
                  </div>
                  <h4 className="text-sm font-serif font-medium text-slate-100">
                    {course.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {course.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Step Forward Prompt */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
            <div className="text-xs font-mono text-slate-400 flex items-center space-x-2">
              <Info className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Next up: Discovering technologies, frameworks &amp; programming languages</span>
            </div>

            <button
              onClick={() => {
                goToChapter(2);
                playCinematicChime(520);
              }}
              className="px-6 py-2.5 rounded-xl bg-[#38bdf8] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#7dd3fc] transition-all flex items-center space-x-2 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            >
              <span>CONTINUE TO CHAPTER 03</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
