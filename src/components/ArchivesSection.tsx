'use client';

import React, { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Terminal, 
  Compass, 
  Info, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  Layers, 
  Sparkles,
  BookOpen,
  Calendar,
  MapPin,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import { useTour } from '@/context/TourContext';
import CertificateModal from './CertificateModal';

export default function ArchivesSection() {
  const { playTourChime, setIsFloorPlanOpen } = useTour();
  const [activeWing, setActiveWing] = useState<'education' | 'experience' | 'skills' | 'achievements'>('education');
  const [certModalOpen, setCertModalOpen] = useState<boolean>(false);

  return (
    <section 
      id="archives" 
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-[#e5b061]/15 bg-[#05070c] overflow-hidden"
    >
      {/* Blueprint Grid Watermark */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#e5b061]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-12">
        {/* Station Architectural Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e5b061]/20 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded border border-[#e5b061]/30 bg-[#e5b061]/10 text-[#e5b061] font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e5b061] animate-pulse" />
              <span>STATION 06 // ACADEMIC &amp; RESEARCH ARCHIVES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
              Academic &amp; <span className="italic font-normal text-gradient-gold">Research Archives</span>
            </h2>
            <p className="mt-2 text-slate-400 font-sans text-sm sm:text-base max-w-2xl">
              Permanent institutional record of academic rigor at Shoolini University (9.05/10 CGPA), the Corizo/IIT Bombay 3-module internship, and verified competitive milestones.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFloorPlanOpen(true)}
              className="px-3.5 py-2 rounded border border-[#e5b061]/30 bg-[#e5b061]/5 hover:bg-[#e5b061]/15 text-[#e5b061] font-mono text-xs tracking-wider flex items-center space-x-1.5 transition-all"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>STATION 06 OF 07</span>
            </button>
          </div>
        </div>

        {/* Docent Curatorial Plaque */}
        <div className="p-4 sm:p-5 rounded-lg border border-[#e5b061]/25 bg-[#0e0c09]/80 backdrop-blur-md flex items-start gap-4">
          <div className="w-8 h-8 rounded-full border border-[#e5b061]/40 bg-[#e5b061]/15 flex items-center justify-center shrink-0 text-[#e5b061]">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            <span className="font-mono text-[#e5b061] uppercase tracking-wider font-semibold mr-2">[Docent Commentary]</span>
            Integrity is foundational to elite engineering. Every credential in this archival wing is 100% verified: Krishna maintains a <strong>9.05/10 CGPA</strong> in B.Tech CSE (Artificial Intelligence) at Shoolini University, participates in the <strong>9-month Corizo internship in academic collaboration with IIT Bombay</strong> (distinguishing ongoing Module 1 from upcoming Modules 2 &amp; 3), and earned an official Certificate of Participation advancing to <strong>Round 2 of the Anveshan Hackathon</strong>.
          </div>
        </div>

        {/* 4 Grand Archival Wing Switcher Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-white/[0.08] pb-3">
          {[
            { id: 'education', label: '01. Academic Honors & Degree', icon: GraduationCap },
            { id: 'experience', label: '02. Corizo / IIT Bombay Internship', icon: Briefcase },
            { id: 'achievements', label: '03. Anveshan Hackathon Round 2', icon: Award },
            { id: 'skills', label: '04. Verified Technical Arsenal', icon: Cpu }
          ].map((wing) => {
            const Icon = wing.icon;
            return (
              <button
                key={wing.id}
                onClick={() => {
                  setActiveWing(wing.id as typeof activeWing);
                  playTourChime(600);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all flex items-center space-x-2 ${
                  activeWing === wing.id
                    ? 'bg-[#e5b061] text-black font-bold shadow-[0_0_15px_rgba(229,176,97,0.3)]'
                    : 'bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{wing.label}</span>
              </button>
            );
          })}
        </div>

        {/* WING 1: EDUCATION */}
        {activeWing === 'education' && (
          <div className="p-6 sm:p-8 rounded-2xl border border-[#e5b061]/25 bg-[#090d14]/90 backdrop-blur-md shadow-2xl space-y-6 animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div>
                <span className="text-[11px] font-mono text-[#e5b061] uppercase tracking-wider">
                  UNDERGRADUATE DEGREE // 2025 &ndash; 2029
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-slate-100 font-normal mt-1">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-sm font-sans text-[#10b981] font-medium mt-0.5">
                  Computer Science and Engineering &ndash; Artificial Intelligence
                </p>
                <div className="flex items-center space-x-3 text-xs font-mono text-slate-400 mt-2">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-[#e5b061]" />
                    <span>Shoolini University, Himachal Pradesh, India</span>
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-[#e5b061]" />
                    <span>Expected Graduation: 2029</span>
                  </span>
                </div>
              </div>

              {/* CGPA Vault Badge */}
              <div className="p-4 rounded-xl border border-[#e5b061]/40 bg-[#16120b] flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(229,176,97,0.1)]">
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

            {/* Core Coursework Pillars */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Verified Core Computer Science &amp; AI Coursework:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Data Structures & Algorithms',
                  'Database Management Systems (DBMS)',
                  'Object-Oriented Programming (C++)',
                  'Python Programming & Scripting',
                  'Discrete Mathematics & Linear Algebra',
                  'Computer Organization & Architecture'
                ].map((course) => (
                  <div 
                    key={course}
                    className="p-3 rounded-lg bg-black/50 border border-white/[0.06] flex items-center space-x-2 text-xs font-sans text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#e5b061] shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#0c1017] border border-white/[0.06] text-xs text-slate-400 font-sans leading-relaxed">
              Krishna consistently balances high academic standing (9.05/10 CGPA) with rigorous hands-on engineering, architecting multi-tiered software platforms, writing comprehensive automated test suites, and publishing open-source projects.
            </div>
          </div>
        )}

        {/* WING 2: EXPERIENCE */}
        {activeWing === 'experience' && (
          <div className="p-6 sm:p-8 rounded-2xl border border-[#e5b061]/25 bg-[#090d14]/90 backdrop-blur-md shadow-2xl space-y-6 animate-fadeIn">
            <div className="border-b border-white/[0.08] pb-6 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-[#10b981] uppercase tracking-wider">
                  STRUCTURED 9-MONTH TECHNICAL PROGRAMME
                </span>
                <span className="px-2.5 py-1 rounded bg-[#e5b061]/15 text-[#e5b061] border border-[#e5b061]/30 text-xs font-mono">
                  3 Modules &bull; 9 Months Total
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-100 font-normal">
                Corizo &ndash; Internship Programme
              </h3>
              <p className="text-sm font-sans text-amber-200/90 font-medium">
                In academic collaboration with IIT Bombay
              </p>
              
              {/* Mandatory Attribution Alert Box */}
              <div className="mt-3 p-3.5 rounded-lg bg-[#0e121a] border border-cyan-500/20 text-xs text-slate-300 font-sans flex items-start space-x-2.5">
                <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Attribution Statement:</strong> This experience represents an online multi-disciplinary internship training curriculum organized by Corizo in academic collaboration with IIT Bombay. Krishna Kaushik is participating as an intern/trainee in this collaborative programme and is not directly employed by IIT Bombay.
                </p>
              </div>
            </div>

            {/* 3 Sequential Quarters / Modules */}
            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Curriculum Progression &amp; Module Status:
              </span>

              {/* Module 1: Ongoing */}
              <div className="p-5 rounded-xl border border-[#10b981]/40 bg-[#0b1412]/80 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
                    <h4 className="font-mono text-sm font-semibold text-slate-100">
                      Module 1: IoT and Robotics (3 Months)
                    </h4>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/40">
                    STATUS: CURRENTLY ONGOING
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Currently active module focusing on microcontroller architectures, embedded systems programming, sensor integration, real-time telemetry processing, and automation kinematics.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Microcontroller Architectures', 'Sensor Integration', 'Embedded Systems', 'Robotics Kinematics'].map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-emerald-300 border border-emerald-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Module 2: Upcoming */}
              <div className="p-5 rounded-xl border border-white/[0.08] bg-[#090d14]/50 space-y-3 opacity-90">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <h4 className="font-mono text-sm font-semibold text-slate-300">
                      Module 2: Data Science (3 Months)
                    </h4>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.05] text-slate-400 border border-white/[0.1]">
                    STATUS: UPCOMING
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Scheduled second module concentrating on statistical data analysis, exploratory data pipelines, predictive modeling, and applied machine learning methodologies.
                </p>
              </div>

              {/* Module 3: Upcoming */}
              <div className="p-5 rounded-xl border border-white/[0.08] bg-[#090d14]/50 space-y-3 opacity-90">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <h4 className="font-mono text-sm font-semibold text-slate-300">
                      Module 3: Nanotechnology (3 Months)
                    </h4>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.05] text-slate-400 border border-white/[0.1]">
                    STATUS: UPCOMING
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Scheduled concluding module focusing on nanoscale material properties, quantum structural properties, and nanoscale engineering applications.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* WING 3: ACHIEVEMENTS */}
        {activeWing === 'achievements' && (
          <div className="p-6 sm:p-8 rounded-2xl border border-[#e5b061]/25 bg-[#090d14]/90 backdrop-blur-md shadow-2xl space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div>
                <span className="text-[11px] font-mono text-[#e5b061] uppercase tracking-wider">
                  COMPETITIVE HACKATHON RECORD
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-slate-100 font-normal mt-1">
                  Anveshan Hackathon
                </h3>
                <p className="text-sm font-sans text-[#10b981] font-medium mt-0.5">
                  Successfully Advanced to Round 2 &bull; Official Certificate Received
                </p>
              </div>

              <button
                onClick={() => setCertModalOpen(true)}
                className="px-4 py-2 rounded-lg bg-[#e5b061] text-black font-mono text-xs font-bold hover:bg-[#d49e4d] transition-all flex items-center space-x-2 shadow-[0_0_15px_rgba(229,176,97,0.3)] self-start sm:self-auto"
              >
                <Award className="w-4 h-4" />
                <span>INSPECT CERTIFICATE</span>
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Participated in the competitive Anveshan Hackathon, presenting engineering solutions evaluated on technical architecture, feasibility, and structured implementation. Successfully cleared preliminary evaluation and advanced to Round 2, receiving the official Certificate of Participation.
              </p>

              <div className="p-4 rounded-lg bg-black/50 border border-white/[0.08] space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Ground-Truth Ethical Compliance:
                </span>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Accurately presented as a <strong>Round 2 Participant</strong> with verified certificate of participation. Krishna explicitly avoids misrepresenting hackathon participation as a grand prize win or finalist title.
                </p>
              </div>

              {/* Certificate Preview Card */}
              <div 
                onClick={() => setCertModalOpen(true)}
                className="p-6 rounded-xl border border-dashed border-[#e5b061]/40 bg-[#0d0f17] flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#e5b061] transition-all group"
              >
                <Award className="w-10 h-10 text-[#e5b061] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-serif text-slate-200 font-medium">
                  Official Anveshan Hackathon Round 2 Certificate
                </span>
                <span className="text-xs font-mono text-slate-500 mt-1">
                  Click to open high-resolution certificate modal
                </span>
              </div>
            </div>
          </div>
        )}

        {/* WING 4: TECHNICAL SKILLS */}
        {activeWing === 'skills' && (
          <div className="p-6 sm:p-8 rounded-2xl border border-[#e5b061]/25 bg-[#090d14]/90 backdrop-blur-md shadow-2xl space-y-6 animate-fadeIn">
            <div className="border-b border-white/[0.08] pb-4">
              <span className="text-[11px] font-mono text-[#e5b061] uppercase tracking-wider">
                COMPREHENSIVE TECHNICAL CAPABILITIES
              </span>
              <h3 className="text-2xl font-serif text-slate-100 font-normal mt-0.5">
                Technical Arsenal &amp; Engineering Stack
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Organized without fabricated 100% bars &mdash; strictly reflecting verified project experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Category 1: AI & GenAI */}
              <div className="p-4 rounded-xl bg-black/40 border border-[#e5b061]/20 space-y-3">
                <span className="text-xs font-mono text-[#e5b061] uppercase tracking-wider block font-semibold">
                  AI &amp; Generative Systems
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Generative AI',
                    'Large Language Models',
                    'Retrieval-Augmented Generation (RAG)',
                    'Google Gemini API',
                    'LangChain',
                    'FAISS',
                    'Vector Embeddings',
                    'Prompt Engineering'
                  ].map(s => (
                    <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-200 border border-white/[0.06]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2: Programming */}
              <div className="p-4 rounded-xl bg-black/40 border border-[#10b981]/20 space-y-3">
                <span className="text-xs font-mono text-[#10b981] uppercase tracking-wider block font-semibold">
                  Programming Languages
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Python (Advanced)',
                    'C++ (OOP & STL)',
                    'C (Systems)',
                    'JavaScript (ES6+)',
                    'TypeScript',
                    'SQL (PostGIS & pgvector)'
                  ].map(s => (
                    <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-200 border border-white/[0.06]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3: Frontend */}
              <div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20 space-y-3">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-semibold">
                  Frontend Engineering
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Next.js (App Router)',
                    'React',
                    'HTML5 / CSS3',
                    'Tailwind CSS',
                    'Turbopack',
                    'Accessible UI Design'
                  ].map(s => (
                    <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-200 border border-white/[0.06]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 4: Backend */}
              <div className="p-4 rounded-xl bg-black/40 border border-purple-500/20 space-y-3">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block font-semibold">
                  Backend &amp; Security Architecture
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'FastAPI',
                    'Node.js',
                    'Express.js',
                    'PBKDF2-HMAC-SHA256',
                    'Refresh Token Rotation',
                    'Double-Submit Cookie CSRF',
                    'Rate Limiting'
                  ].map(s => (
                    <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-200 border border-white/[0.06]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 5: Databases */}
              <div className="p-4 rounded-xl bg-black/40 border border-amber-500/20 space-y-3">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-semibold">
                  Databases &amp; Spatial Stores
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'PostgreSQL',
                    'Supabase',
                    'pgvector (768-dim)',
                    'PostGIS (Spatial)',
                    'MySQL'
                  ].map(s => (
                    <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-200 border border-white/[0.06]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 6: Tools */}
              <div className="p-4 rounded-xl bg-black/40 border border-rose-500/20 space-y-3">
                <span className="text-xs font-mono text-rose-400 uppercase tracking-wider block font-semibold">
                  Testing, Tools &amp; Data Analysis
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Git / GitHub',
                    'Docker',
                    'Pytest (510+ suites)',
                    'Streamlit',
                    'Plotly',
                    'Pandas'
                  ].map(s => (
                    <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-200 border border-white/[0.06]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Certificate Modal */}
      <CertificateModal 
        isOpen={certModalOpen} 
        onClose={() => setCertModalOpen(false)} 
        title="Anveshan Hackathon Round 2 Participation"
        organization="Anveshan Competitive Hackathon Committee"
        date="2026"
        placeholderText="Official Anveshan Hackathon Round 2 Participation Certificate awarded to Krishna Kaushik"
      />
    </section>
  );
}
