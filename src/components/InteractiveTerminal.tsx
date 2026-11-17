'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, CornerDownLeft, RotateCcw } from 'lucide-react';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'sys.status',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">
            &gt; KRISHNA KAUSHIK DIAGNOSTIC TERMINAL v2.6.4 [ONLINE]
          </p>
          <p className="text-slate-400">
            Node: Shoolini University &bull; B.Tech CSE (AI) &bull; CGPA: 9.05/10.0
          </p>
          <p className="text-sky-300">
            Type <span className="text-white font-bold">&apos;help&apos;</span> to list available commands or click the preset chips below.
          </p>
        </div>
      )
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let response: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-sky-400 font-bold">Available System Commands:</p>
            <p>&bull; <span className="text-white font-semibold">whoami</span> — Identity, specialization & engineering philosophy</p>
            <p>&bull; <span className="text-white font-semibold">skills</span> — Applied technologies & systems breakdown</p>
            <p>&bull; <span className="text-white font-semibold">projects</span> — Summary of all 6 verified projects</p>
            <p>&bull; <span className="text-white font-semibold">campusos</span> — Deep teardown of flagship CampusOS AI</p>
            <p>&bull; <span className="text-white font-semibold">civiclens</span> — PostGIS & Gemini 2.5 Flash architecture</p>
            <p>&bull; <span className="text-white font-semibold">edu</span> — Academic credentials, institution & CGPA</p>
            <p>&bull; <span className="text-white font-semibold">experience</span> — Corizo (IIT Bombay Collab) internship details</p>
            <p>&bull; <span className="text-white font-semibold">contact</span> — Email, phone, GitHub, LinkedIn</p>
            <p>&bull; <span className="text-white font-semibold">clear</span> — Reset terminal logs</p>
          </div>
        );
        break;

      case 'whoami':
        response = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-white font-bold">Krishna Kaushik</p>
            <p className="text-sky-400">AI Engineer | Software Developer | CSE (Artificial Intelligence)</p>
            <p className="text-slate-400 mt-1">
              Focused on building practical, testable, and ground-truth AI systems (RAG, multimodal vision, Socratic pedagogy) coupled with scalable full-stack and systems engineering (Next.js, FastAPI, PostgreSQL, C++).
            </p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-sky-400 font-bold">&gt; Technical Arsenal:</p>
            <p><span className="text-white font-semibold">Languages:</span> Python, C++, C, JavaScript, TypeScript, SQL</p>
            <p><span className="text-white font-semibold">AI & GenAI:</span> RAG, Gemini API, LangChain, FAISS, Embeddings, Prompt Eng</p>
            <p><span className="text-white font-semibold">Full-Stack:</span> Next.js (App Router), React, FastAPI, Node.js, Express</p>
            <p><span className="text-white font-semibold">Data & Storage:</span> PostgreSQL, Supabase, pgvector, PostGIS, MySQL</p>
            <p><span className="text-white font-semibold">Testing:</span> Pytest (100 tests in CivicLens, 510 in CampusOS)</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-sky-400 font-bold">&gt; Verified Projects:</p>
            <p>1. <span className="text-white font-bold">CampusOS AI:</span> Role-aware school intelligence OS (Next.js + FastAPI + Gemini RAG)</p>
            <p>2. <span className="text-white font-bold">CivicLens:</span> Civic infrastructure intelligence (PostGIS + Gemini 2.5 Flash vision)</p>
            <p>3. <span className="text-white font-bold">Gyanix:</span> Socratic CBSE Class 12 Physics dataset engine (41 state moves)</p>
            <p>4. <span className="text-white font-bold">Agentic RAG Engine:</span> Self-reflective RAG with semantic intent routing & Docker</p>
            <p>5. <span className="text-white font-bold">ZENETH:</span> Native C++ crop disease rule expert system (9 crops, offline)</p>
            <p>6. <span className="text-white font-bold">Financial Advisor AI:</span> RAG-based financial research assistant (FAISS + Plotly)</p>
          </div>
        );
        break;

      case 'campusos':
        response = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-sky-400 font-bold">&gt; Flagship: CampusOS AI</p>
            <p>• Five Isolated Workspaces: Admin, Teacher, Student, Parent, Operations</p>
            <p>• Parent Sahayak: Grounded bilingual AI explaining school daily records</p>
            <p>• Security: PBKDF2-HMAC-SHA256, Refresh Token Rotation, Double-Submit CSRF</p>
            <p>• Test Matrix: 510 QA suites (487 passed, 23 skipped)</p>
          </div>
        );
        break;

      case 'civiclens':
        response = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-emerald-400 font-bold">&gt; CivicLens Municipal Platform</p>
            <p>• PostGIS spatial clustering (ST_DWithin &le; 50m) &rarr; 40.4% noise reduction</p>
            <p>• Google Gemini 2.5 Flash sub-500ms multimodal vision damage triage</p>
            <p>• 6-Factor deterministic mathematical priority scoring formula</p>
            <p>• 100/100 tests passing across 12 automated test modules</p>
          </div>
        );
        break;

      case 'edu':
        response = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-sky-400 font-bold">&gt; Academic Standing:</p>
            <p>• Degree: B.Tech Computer Science & Engineering (Artificial Intelligence)</p>
            <p>• University: Shoolini University (2025 – 2029 Expected)</p>
            <p className="text-emerald-400 font-bold">• Current CGPA: 9.05 / 10.0</p>
            <p>• Coursework: Data Structures & Algorithms, DBMS, OOP (C++), Python</p>
          </div>
        );
        break;

      case 'experience':
        response = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-violet-400 font-bold">&gt; Internship Experience:</p>
            <p>• Organization: Corizo (In academic collaboration with IIT Bombay)</p>
            <p>• Total Structure: 9 Months across 3 Quarters</p>
            <p className="text-cyan-300 font-semibold">• Module 1: IoT & Robotics (3 Months) &mdash; Currently Ongoing</p>
            <p>• Module 2: Data Science (3 Months) &mdash; Upcoming</p>
            <p>• Module 3: Nanotechnology (3 Months) &mdash; Upcoming</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-sky-400 font-bold">&gt; Communication Channels:</p>
            <p>• Email: <a href="mailto:krishnakaushik1322007@gmail.com" className="text-sky-300 underline">krishnakaushik1322007@gmail.com</a></p>
            <p>• Phone: <a href="tel:+919650246706" className="text-sky-300 underline">+91 9650246706</a></p>
            <p>• LinkedIn: <a href="https://www.linkedin.com/in/krishna-kaushik-559239366/" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline">linkedin.com/in/krishna-kaushik-559239366</a></p>
            <p>• GitHub: <a href="https://github.com/krishnakaushik1322007-ai" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline">github.com/krishnakaushik1322007-ai</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        response = (
          <p className="text-rose-400 font-mono text-xs">
            Command not recognized: &quot;{trimmed}&quot;. Type &apos;help&apos; for list of commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: response }]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  const presetCommands = ['help', 'whoami', 'skills', 'projects', 'campusos', 'civiclens', 'edu', 'contact'];

  return (
    <section id="terminal" className="relative py-20 border-b border-white/[0.06] bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-sky-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>07 // INTERACTIVE RECRUITER SANDBOX</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            System Diagnostics & <span className="text-gradient-cyan">Command Shell</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Execute simulated diagnostics to directly query my technical stack, automated test suites, and project architecture.
          </p>
        </div>

        {/* Preset Command Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-500 mr-1">Quick Run:</span>
          {presetCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] hover:bg-sky-500/15 border border-white/[0.08] hover:border-sky-500/30 text-slate-300 hover:text-sky-300 transition-colors"
            >
              ${cmd}
            </button>
          ))}
          <button
            onClick={() => handleCommand('clear')}
            className="px-2.5 py-1 rounded-md text-xs font-mono bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 transition-colors ml-auto flex items-center space-x-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>clear</span>
          </button>
        </div>

        {/* Terminal Screen Container */}
        <div className="rounded-2xl bg-[#0a0d14] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Header Bar */}
          <div className="px-4 py-3 bg-[#0d111a] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-xs text-slate-400">krishna@kaushik-core: ~/portfolio</span>
            </div>
            <div className="flex items-center space-x-2 font-mono text-[10px] text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>TLS_ENCRYPTED</span>
            </div>
          </div>

          {/* Console Log Area */}
          <div className="p-6 font-mono text-xs space-y-4 max-h-[380px] overflow-y-auto">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center space-x-2 text-sky-400">
                  <span className="text-slate-500">&lambda;</span>
                  <span className="text-slate-400">~/krishna</span>
                  <span className="text-slate-600">&gt;</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-white/[0.08]">
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="px-4 py-3 bg-[#080a0f] border-t border-white/[0.08] flex items-center space-x-3"
          >
            <div className="flex items-center space-x-2 text-sky-400 font-mono text-xs">
              <span className="text-slate-500">&lambda;</span>
              <span className="text-slate-400 hidden sm:inline">~/krishna</span>
              <span className="text-slate-600">&gt;</span>
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('help', 'projects', 'skills', 'contact')..."
              className="flex-1 bg-transparent text-xs font-mono text-white placeholder-slate-600 focus:outline-none"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 transition-colors"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
