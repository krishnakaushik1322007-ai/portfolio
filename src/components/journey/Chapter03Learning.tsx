'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  Terminal, 
  Layers, 
  Database, 
  Wrench, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Info,
  ExternalLink
} from 'lucide-react';
import { useJourney } from '@/context/JourneyContext';

export default function Chapter03Learning() {
  const { goToChapter, playCinematicChime } = useJourney();
  const [activeCategory, setActiveCategory] = useState<'ai' | 'prog' | 'web' | 'db' | 'tools'>('ai');
  const [selectedTech, setSelectedTech] = useState<string>('Google Gemini API');

  const categories = {
    ai: {
      title: 'Artificial Intelligence & Generative AI',
      subtitle: 'LLMs, RAG engines, vector search, and multimodal prompt architectures',
      icon: Sparkles,
      techs: [
        {
          name: 'Generative AI',
          status: 'Applied Work',
          context: 'Used in CampusOS AI & CivicLens for role-aware assistants and multimodal damage triage.',
          verifiedIn: ['CampusOS AI', 'CivicLens', 'Financial Advisor AI']
        },
        {
          name: 'Large Language Models (LLMs)',
          status: 'Applied Work',
          context: 'Instruction tuning, structured JSON generation, and pedagogical state tracking in Gyanix.',
          verifiedIn: ['Gyanix', 'CampusOS AI']
        },
        {
          name: 'Retrieval-Augmented Generation (RAG)',
          status: 'Applied Work',
          context: 'Self-reflective RAG, semantic intent routing, hybrid search, and citation grounding.',
          verifiedIn: ['Agentic RAG Engine', 'CampusOS AI', 'Financial Advisor AI']
        },
        {
          name: 'Google Gemini API',
          status: 'Applied Work',
          context: 'Multimodal vision triage (Gemini 2.5 Flash), bilingual explanation engines, and fast inference.',
          verifiedIn: ['CivicLens', 'CampusOS AI']
        },
        {
          name: 'Vector Embeddings',
          status: 'Applied Work',
          context: 'Dense semantic representations, cosine similarity, and chunking strategies in pgvector & FAISS.',
          verifiedIn: ['CampusOS AI', 'Agentic RAG Engine']
        },
        {
          name: 'Prompt Engineering',
          status: 'Applied Work',
          context: 'Few-shot prompting, chain-of-thought elicitation, and strict JSON Schema validation.',
          verifiedIn: ['Gyanix', 'CivicLens']
        },
        {
          name: 'LangChain',
          status: 'Working Knowledge',
          context: 'Document chunking, prompt composition, and vector index retrieval chains.',
          verifiedIn: ['Financial Advisor AI', 'Agentic RAG Engine']
        },
        {
          name: 'FAISS',
          status: 'Working Knowledge',
          context: 'Local high-performance vector indexing and nearest-neighbor search.',
          verifiedIn: ['Agentic RAG Engine', 'Financial Advisor AI']
        }
      ]
    },
    prog: {
      title: 'Programming Languages',
      subtitle: 'Algorithmic foundations, systems engineering, and modern scripting',
      icon: Terminal,
      techs: [
        {
          name: 'Python',
          status: 'Primary Language',
          context: 'FastAPI microservices, Pytest automated test suites, dataset modeling, and AI orchestration.',
          verifiedIn: ['CampusOS AI', 'CivicLens', 'Gyanix', 'Agentic RAG Engine']
        },
        {
          name: 'C++',
          status: 'Applied Work',
          context: 'Object-Oriented Programming, Standard Template Library (STL), and deterministic rule engines.',
          verifiedIn: ['ZENETH Crop Expert System']
        },
        {
          name: 'C',
          status: 'Working Knowledge',
          context: 'Low-level pointer manipulation, memory management, and computer architecture fundamentals.',
          verifiedIn: ['Academic Curriculum', 'Systems Labs']
        },
        {
          name: 'JavaScript / TypeScript',
          status: 'Primary Language',
          context: 'Modern ES6+, strict TypeScript interfaces, async runtime architectures, and Next.js full-stack.',
          verifiedIn: ['CampusOS AI', 'Portfolio System', 'Web Applications']
        },
        {
          name: 'SQL',
          status: 'Applied Work',
          context: 'Relational data modeling, spatial PostGIS queries, and vector similarity indexing.',
          verifiedIn: ['CampusOS AI (Supabase)', 'CivicLens (PostGIS)']
        }
      ]
    },
    web: {
      title: 'Web & Backend Development',
      subtitle: 'Server components, reactive user interfaces, and security gateways',
      icon: Layers,
      techs: [
        {
          name: 'Next.js (App Router)',
          status: 'Primary Framework',
          context: 'Server Components, Turbopack, dynamic routing, metadata optimization, and institutional dashboards.',
          verifiedIn: ['CampusOS AI', 'Portfolio Guided Experience']
        },
        {
          name: 'React',
          status: 'Primary Framework',
          context: 'Component lifecycles, custom hooks, state synchronization, and accessible UI interactions.',
          verifiedIn: ['Next.js Ecosystem', 'Web Applications']
        },
        {
          name: 'HTML & CSS',
          status: 'Foundational',
          context: 'Semantic markup, accessible tree structure, responsive layouts, and Tailwind design tokens.',
          verifiedIn: ['All Web Projects']
        },
        {
          name: 'Node.js & Express.js',
          status: 'Working Knowledge',
          context: 'RESTful API middleware, asynchronous event loops, and authentication token handling.',
          verifiedIn: ['Backend Services', 'Microservices']
        }
      ]
    },
    db: {
      title: 'Databases & Spatial Storage',
      subtitle: 'Relational integrity, high-dimensional vectors, and geospatial queries',
      icon: Database,
      techs: [
        {
          name: 'PostgreSQL',
          status: 'Applied Work',
          context: 'Multi-tenant relational schemas, role isolation, transactional safety, and indexing.',
          verifiedIn: ['CampusOS AI', 'CivicLens']
        },
        {
          name: 'Supabase',
          status: 'Applied Work',
          context: 'Managed PostgreSQL, authentication gateways, row-level security policies, and migrations.',
          verifiedIn: ['CampusOS AI Platform']
        },
        {
          name: 'pgvector',
          status: 'Applied Work',
          context: '768-dimensional semantic embeddings, HNSW index optimization, and semantic search.',
          verifiedIn: ['CampusOS AI RAG Pipeline']
        },
        {
          name: 'MySQL',
          status: 'Working Knowledge',
          context: 'Relational table design, foreign key constraints, and SQL query optimizations.',
          verifiedIn: ['Academic DBMS Coursework']
        }
      ]
    },
    tools: {
      title: 'Tools & Development Ecosystem',
      subtitle: 'Version control, containerization, testing, and data visualization',
      icon: Wrench,
      techs: [
        {
          name: 'Git & GitHub',
          status: 'Daily Workflow',
          context: 'Branch management, pull requests, commit history provenance, and open-source releases.',
          verifiedIn: ['All Repositories']
        },
        {
          name: 'Streamlit',
          status: 'Applied Work',
          context: 'Rapid prototyping for AI research dashboards and analytical document inspection.',
          verifiedIn: ['Financial Advisor AI']
        },
        {
          name: 'Plotly',
          status: 'Applied Work',
          context: 'Interactive balance sheet charting and quantitative financial visualizations.',
          verifiedIn: ['Financial Advisor AI']
        }
      ]
    }
  };

  const currentCategoryData = categories[activeCategory];
  const activeTechData = currentCategoryData.techs.find(t => t.name === selectedTech) || currentCategoryData.techs[0];

  return (
    <section 
      id="learning"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-28 sm:py-36 border-b border-white/[0.06] overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto w-full space-y-12 z-10">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-300 font-mono text-xs uppercase tracking-widest mb-3">
              <Cpu className="w-3.5 h-3.5 animate-pulse" />
              <span>CHAPTER 03 // THE LEARNING PHASE &bull; THEME: DISCOVERING TECHNOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
              The Discovery of <span className="italic font-normal text-gradient-journey">Tools and Technologies.</span>
            </h2>
            <p className="mt-2 text-slate-300 font-sans text-sm sm:text-base max-w-2xl">
              Moving beyond theory into hands-on implementation. Represented honestly as technologies worked with across real projects &mdash; without artificial percentage bars or exaggerated claims.
            </p>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'ai', label: 'Artificial Intelligence', icon: Sparkles },
            { id: 'prog', label: 'Programming', icon: Terminal },
            { id: 'web', label: 'Web & Backend', icon: Layers },
            { id: 'db', label: 'Databases & Spatial', icon: Database },
            { id: 'tools', label: 'Tools & Visualization', icon: Wrench }
          ].map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as typeof activeCategory);
                  const firstTech = categories[cat.id as typeof activeCategory].techs[0].name;
                  setSelectedTech(firstTech);
                  playCinematicChime(550);
                }}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs tracking-wider transition-all flex items-center space-x-2 ${
                  isSelected
                    ? 'bg-[#38bdf8] text-black font-bold shadow-[0_0_20px_rgba(56,189,248,0.35)]'
                    : 'bg-white/[0.04] text-slate-300 border border-white/[0.08] hover:border-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dual Workbench: Interactive Tech Grid & Deep Context Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Wing: Technologies in Current Category */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Select technology to inspect real project implementation:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentCategoryData.techs.map((tech) => {
                const isSelected = selectedTech === tech.name;
                return (
                  <div
                    key={tech.name}
                    onClick={() => {
                      setSelectedTech(tech.name);
                      playCinematicChime(620);
                    }}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                      isSelected
                        ? 'border-[#38bdf8] bg-[#0d1830] shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                        : 'border-white/[0.06] bg-[#070b16]/80 hover:border-white/20 hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-sm font-medium text-slate-100">
                        {tech.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-[#e5b061] border border-white/[0.08]">
                        {tech.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-sans line-clamp-2">
                      {tech.context}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Wing: Deep Inspection Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl border border-white/[0.1] bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-5">
              <div className="border-b border-white/[0.08] pb-4">
                <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider block">
                  TECHNICAL ARSENAL INSPECTOR
                </span>
                <h3 className="text-2xl font-serif text-slate-100 font-normal mt-1">
                  {activeTechData.name}
                </h3>
                <span className="inline-block mt-1 text-xs font-mono text-[#e5b061]">
                  Proficiency Classification: {activeTechData.status}
                </span>
              </div>

              <div className="space-y-3 text-xs font-sans text-slate-300 leading-relaxed">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Engineering Scope &amp; Usage:
                </span>
                <p className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06]">
                  {activeTechData.context}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Verified In Real Codebases:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeTechData.verifiedIn.map((proj) => (
                    <span
                      key={proj}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/25"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#0e1610] border border-[#10b981]/25 text-[11px] font-sans text-slate-300 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Zero fake percentage bars. Grounded in actual repository code.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Step Forward Prompt to Chapter 04 (Flagship) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <div className="text-xs font-mono text-slate-400 flex items-center space-x-2">
            <Info className="w-3.5 h-3.5 text-[#e5b061]" />
            <span>Next up: The most important chapter &mdash; The Building Phase</span>
          </div>

          <button
            onClick={() => {
              goToChapter(3);
              playCinematicChime(560);
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#e5b061] to-[#f59e0b] text-black font-mono text-xs font-bold uppercase tracking-wider hover:from-[#fef08a] transition-all flex items-center space-x-2 shadow-[0_0_20px_rgba(229,176,97,0.3)]"
          >
            <span>ENTER THE BUILDING PHASE (CHAPTER 04)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
