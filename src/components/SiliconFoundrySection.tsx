'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Cpu, 
  Terminal, 
  ExternalLink, 
  Compass, 
  Sparkles, 
  Info, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Database,
  ArrowRight,
  TrendingUp,
  Brain,
  Search
} from 'lucide-react';
import { useTour } from '@/context/TourContext';

export default function SiliconFoundrySection() {
  const { playTourChime, setIsFloorPlanOpen } = useTour();
  const [selectedCrop, setSelectedCrop] = useState<string>('Wheat');
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'cpp' | 'research'>('all');

  const crops = [
    { 
      name: 'Wheat', 
      disease: 'Yellow Rust (Puccinia striiformis)', 
      severity: 'High / Critical', 
      symptoms: 'Yellow stripe-like pustules on leaf surface, stunted growth',
      remedy: 'Propiconazole 25% EC @ 0.1% spray; sow resistant varieties (HD-3086, DBW-187)' 
    },
    { 
      name: 'Rice', 
      disease: 'Bacterial Leaf Blight (Xanthomonas oryzae)', 
      severity: 'Severe', 
      symptoms: 'Water-soaked lesions on leaf margins turning straw-yellow and wavy',
      remedy: 'Streptocycline (1g/10L) + Copper Oxychloride (2.5g/L); drain excess water' 
    },
    { 
      name: 'Cotton', 
      disease: 'Bacterial Blight / Angular Leaf Spot', 
      severity: 'Moderate to High', 
      symptoms: 'Water-soaked angular spots delimited by veinlets, dark brown lesions',
      remedy: 'Copper Oxychloride (2.5g/L) + Streptocycline; seed delinting with H2SO4' 
    },
    { 
      name: 'Potato', 
      disease: 'Late Blight (Phytophthora infestans)', 
      severity: 'Critical / Urgent', 
      symptoms: 'Water-soaked black-brown patches on leaves, white fungal growth underneath',
      remedy: 'Mancozeb 75% WP (2.5g/L) preventive, followed by Metalaxyl + Mancozeb' 
    },
    { 
      name: 'Tomato', 
      disease: 'Early Blight (Alternaria solani)', 
      severity: 'Moderate', 
      symptoms: 'Concentric target-board rings on older foliage, stem cankers',
      remedy: 'Chlorothalonil or Mancozeb spray; prune lower diseased foliage' 
    },
    { 
      name: 'Maize', 
      disease: 'Maydis Leaf Blight', 
      severity: 'Moderate', 
      symptoms: 'Elongated rectangular grayish-tan lesions between leaf veins',
      remedy: 'Mancozeb @ 2.5g/L; use certified hybrid seed stocks' 
    },
    { 
      name: 'Sugarcane', 
      disease: 'Red Rot (Colletotrichum falcatum)', 
      severity: 'Critical', 
      symptoms: 'Internal stalk tissues turn red with white cross-patches, sour alcohol odor',
      remedy: 'Hot water set treatment (52°C, 30 min); rogue out infected clumps' 
    },
    { 
      name: 'Mustard', 
      disease: 'White Rust (Albugo candida)', 
      severity: 'Moderate', 
      symptoms: 'White or creamy raised pustules on lower leaf surface, staghead floral malformation',
      remedy: 'Metalaxyl 35 WS seed dress + Ridomil MZ spray @ 2g/L' 
    },
    { 
      name: 'Gram', 
      disease: 'Fusarium Wilt (Fusarium oxysporum f. sp. ciceris)', 
      severity: 'High', 
      symptoms: 'Sudden drooping of leaves, internal xylem browning of taproot',
      remedy: 'Trichoderma viride seed treatment; deep summer ploughing; crop rotation' 
    }
  ];

  const currentCropData = crops.find(c => c.name === selectedCrop) || crops[0];

  const systemsMatrix = [
    {
      title: 'Agentic RAG Engine',
      category: 'ai',
      badge: 'Production Prototype',
      stack: ['Python', 'FastAPI', 'FAISS', 'BM25', 'Cross-Encoders', 'Docker'],
      desc: 'Self-reflective RAG with semantic intent routing, hybrid vector/lexical retrieval, cross-encoder reranking, and automated hallucination verification.',
      metrics: '8 / 8 Tests Passing &bull; Hybrid BM25+FAISS',
      repo: 'https://github.com/krishnakaushik1322007-ai/Agentic-RAG-Engine',
      internalSlug: 'agentic-rag-engine'
    },
    {
      title: 'Financial Research Assistant AI',
      category: 'research',
      badge: 'Research Prototype',
      stack: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Google GenAI', 'Plotly'],
      desc: 'Retrieval-augmented financial analysis assistant parsing corporate balance sheets, quarterly 10-K filings, and footnotes into verifiable insights with Plotly charts.',
      metrics: 'Analytical Research Tool &bull; Grounded Citations',
      repo: 'https://github.com/krishnakaushik1322007-ai',
      internalSlug: 'financial-advisor-ai'
    },
    {
      title: 'ZENETH C++ Crop Expert System',
      category: 'cpp',
      badge: 'Offline Rule Engine',
      stack: ['C++', 'STL Containers', 'OOP', 'Algorithm Design'],
      desc: 'Native deterministic expert system for agricultural disease diagnosis across 9 crops. Sub-millisecond latency with zero cloud dependencies.',
      metrics: '< 1ms Latency &bull; 9 Major Crops &bull; 0 Cloud Ops',
      repo: 'https://github.com/krishnakaushik1322007-ai/Cpp-Project-build-2nd-Sem',
      internalSlug: 'zeneth-crop-expert'
    },
    {
      title: 'Generative AI & Neural Modeling Suite',
      category: 'ai',
      badge: 'Deep Learning Suite',
      stack: ['Python', 'PyTorch', 'TensorFlow', 'Hugging Face', 'BART', 'Autoencoders'],
      desc: 'Applied deep learning architectures for sequence-to-sequence text summarization (BART) and deep convolutional autoencoders for spatial latent denoising.',
      metrics: 'BART Seq2Seq &bull; Conv2D Autoencoders',
      repo: 'https://github.com/krishnakaushik1322007-ai/Generative-AI',
      internalSlug: 'generative-ai-suite'
    }
  ];

  const filteredSystems = activeFilter === 'all' 
    ? systemsMatrix 
    : systemsMatrix.filter(s => s.category === activeFilter);

  return (
    <section 
      id="foundry" 
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-[#e5b061]/15 bg-[#07090e] overflow-hidden"
    >
      {/* Blueprint Grid Watermark */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-12">
        {/* Station Architectural Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e5b061]/20 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>STATION 05 // SILICON FOUNDRY &amp; THE SYSTEMS MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
              Silicon Foundry &amp; <span className="italic font-normal text-gradient-gold">Systems Arsenal</span>
            </h2>
            <p className="mt-2 text-slate-400 font-sans text-sm sm:text-base max-w-2xl">
              From deterministic sub-millisecond C++ rule engines to hybrid vector RAG and deep neural sequence models. Rigorously engineered for offline reliability and computational efficiency.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFloorPlanOpen(true)}
              className="px-3.5 py-2 rounded border border-[#e5b061]/30 bg-[#e5b061]/5 hover:bg-[#e5b061]/15 text-[#e5b061] font-mono text-xs tracking-wider flex items-center space-x-1.5 transition-all"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>STATION 05 OF 07</span>
            </button>
            <a
              href="https://github.com/krishnakaushik1322007-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-mono text-xs font-semibold tracking-wider flex items-center space-x-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>GITHUB PROFILE</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Docent Curatorial Plaque */}
        <div className="p-4 sm:p-5 rounded-lg border border-cyan-500/25 bg-[#091016]/80 backdrop-blur-md flex items-start gap-4">
          <div className="w-8 h-8 rounded-full border border-cyan-500/40 bg-cyan-500/15 flex items-center justify-center shrink-0 text-cyan-400">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            <span className="font-mono text-cyan-400 uppercase tracking-wider font-semibold mr-2">[Docent Commentary]</span>
            You are inspecting the systems engineering foundry. Here, Krishna addresses scenarios where heavy cloud LLMs fail: <strong>ZENETH</strong> runs entirely in offline native <strong>C++ STL</strong> with <strong>&lt;1ms diagnostic search</strong> for rural field terminals, while the <strong>Agentic RAG Engine</strong> introduces hybrid FAISS/BM25 retrieval and self-reflective hallucination verification.
          </div>
        </div>

        {/* ZENETH C++ Flagship Showcase Workbench */}
        <div className="p-6 sm:p-8 rounded-2xl border border-[#e5b061]/30 bg-[#090d14]/90 backdrop-blur-md shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
            <div>
              <div className="text-[11px] font-mono text-[#e5b061] uppercase tracking-wider">
                FEATURED LOW-LATENCY HARDWARE EMBEDDED SYSTEM
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-slate-100 font-normal mt-0.5">
                ZENETH &mdash; C++ Crop Disease Expert System
              </h3>
            </div>

            <div className="flex items-center space-x-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30">
                &lt; 1ms Latency
              </span>
              <span className="px-2.5 py-1 rounded bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                0 Cloud Dependencies
              </span>
            </div>
          </div>

          {/* Interactive Crop Selector Carousel */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Select Agricultural Crop to Simulate Diagnostic Engine:
            </div>
            <div className="flex flex-wrap gap-2">
              {crops.map((c) => (
                <button
                  key={c.name}
                  onClick={() => {
                    setSelectedCrop(c.name);
                    playTourChime(650);
                  }}
                  className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                    selectedCrop === c.name
                      ? 'bg-[#e5b061] text-black font-bold shadow-[0_0_12px_rgba(229,176,97,0.35)]'
                      : 'bg-white/[0.04] text-slate-300 border border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Diagnostics Simulator Screen */}
          <div className="p-5 rounded-xl bg-black/90 border border-white/[0.1] font-mono text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-slate-500 text-[11px]">
              <div className="flex items-center space-x-2">
                <Terminal className="w-3.5 h-3.5 text-[#10b981]" />
                <span>zeneth_cli --crop {currentCropData.name.toLowerCase()} --mode rule_eval</span>
              </div>
              <span className="text-[#10b981]">BENCHMARK: 0.42ms</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="space-y-2">
                <div>
                  <span className="text-slate-500 block text-[10px]">DIAGNOSED PATHOGEN:</span>
                  <span className="text-amber-200 font-semibold">{currentCropData.disease}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">SEVERITY INDEX:</span>
                  <span className="text-rose-400 font-semibold">{currentCropData.severity}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">SYMPTOM SIGNATURE:</span>
                  <span className="text-slate-300 text-[11px]">{currentCropData.symptoms}</span>
                </div>
              </div>

              <div className="p-3.5 rounded bg-[#091016] border border-cyan-500/20 space-y-2">
                <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-wider block">
                  C++ KNOWLEDGE BASE REMEDY &amp; CULTURAL PROTOCOL:
                </span>
                <p className="text-[11px] text-slate-200 leading-relaxed font-sans">
                  {currentCropData.remedy}
                </p>
              </div>
            </div>
          </div>

          {/* Codebase Link */}
          <div className="flex justify-between items-center text-xs font-mono pt-2">
            <span className="text-slate-400">
              Verified against: <code className="text-[#e5b061]">chatbot.cpp</code> &bull; <code className="text-[#e5b061]">KnowledgeBase.h</code>
            </span>
            <a
              href="https://github.com/krishnakaushik1322007-ai/Cpp-Project-build-2nd-Sem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e5b061] hover:underline flex items-center space-x-1"
            >
              <span>View C++ Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* The Systems Matrix Catalog with Filter Pills */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-serif text-slate-100 font-normal">
                The Systems Matrix
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Explore individual research projects, architectures, and open repositories
              </p>
            </div>

            <div className="flex gap-2">
              {[
                { id: 'all', label: 'All Systems' },
                { id: 'ai', label: 'AI & RAG' },
                { id: 'cpp', label: 'C++ Systems' },
                { id: 'research', label: 'Research & FinTech' }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setActiveFilter(f.id as typeof activeFilter);
                    playTourChime(550);
                  }}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                    activeFilter === f.id
                      ? 'bg-[#e5b061]/20 border border-[#e5b061]/50 text-[#e5b061]'
                      : 'bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Matrix Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSystems.map((sys) => (
              <div 
                key={sys.title}
                className="p-6 rounded-xl border border-white/[0.08] bg-[#090d14]/80 hover:border-[#e5b061]/40 transition-all space-y-4 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.1] text-slate-300">
                      {sys.badge}
                    </span>
                    <a
                      href={sys.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 group-hover:text-[#e5b061] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <h4 className="text-lg font-serif text-slate-100 font-medium group-hover:text-[#e5b061] transition-colors">
                    {sys.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {sys.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {sys.stack.map(tag => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span 
                      className="text-emerald-400" 
                      dangerouslySetInnerHTML={{ __html: sys.metrics }} 
                    />
                    <Link
                      href={`/projects/${sys.internalSlug}`}
                      className="text-[#e5b061] hover:underline flex items-center space-x-1"
                    >
                      <span>Deep Dive</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
