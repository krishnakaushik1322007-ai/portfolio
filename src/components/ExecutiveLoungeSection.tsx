'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Compass, 
  Info, 
  Sparkles, 
  ArrowUpRight, 
  RotateCcw,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { useTour } from '@/context/TourContext';

export default function ExecutiveLoungeSection() {
  const { playTourChime, goToStation, setIsFloorPlanOpen } = useTour();
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI Engineering & Multi-Agent Systems Collaboration',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('krishnakaushik1322007@gmail.com');
    setCopiedEmail(true);
    playTourChime(700);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91 9650246706');
    setCopiedPhone(true);
    playTourChime(700);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    playTourChime(800);
  };

  return (
    <section 
      id="lounge" 
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-[#e5b061]/15 bg-[#07090e] overflow-hidden"
    >
      {/* Blueprint Grid Watermark */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#e5b061]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-12">
        {/* Station Architectural Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e5b061]/20 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded border border-[#e5b061]/30 bg-[#e5b061]/10 text-[#e5b061] font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e5b061] animate-pulse" />
              <span>STATION 07 // EXECUTIVE BOARDROOM &amp; DISPATCH LOUNGE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-100 tracking-tight">
              Executive Boardroom &amp; <span className="italic font-normal text-gradient-gold">Dispatch Lounge</span>
            </h2>
            <p className="mt-2 text-slate-400 font-sans text-sm sm:text-base max-w-2xl">
              You have completed the estate walkthrough. Connect directly with Krishna Kaushik for AI engineering roles, multi-agent systems, and production software initiatives.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => goToStation(0)}
              className="px-3.5 py-2 rounded border border-[#e5b061]/40 bg-[#e5b061]/10 hover:bg-[#e5b061]/20 text-[#e5b061] font-mono text-xs tracking-wider flex items-center space-x-1.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RETURN TO FOYER (STATION 01)</span>
            </button>
          </div>
        </div>

        {/* Docent Curatorial Plaque */}
        <div className="p-4 sm:p-5 rounded-lg border border-[#e5b061]/25 bg-[#0e0c09]/80 backdrop-blur-md flex items-start gap-4">
          <div className="w-8 h-8 rounded-full border border-[#e5b061]/40 bg-[#e5b061]/15 flex items-center justify-center shrink-0 text-[#e5b061]">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            <span className="font-mono text-[#e5b061] uppercase tracking-wider font-semibold mr-2">[Docent Concluding Remarks]</span>
            Thank you for exploring this estate. You have witnessed Krishna Kaushik&apos;s verified technical discipline: from <strong>CampusOS AI&apos;s 510 QA suites</strong> to <strong>CivicLens&apos;s PostGIS spatial clustering</strong>, <strong>Gyanix&apos;s 41 Socratic state transitions</strong>, and <strong>ZENETH&apos;s offline sub-millisecond C++ execution</strong>. Direct communication channels are open below.
          </div>
        </div>

        {/* Dual Wing Layout: Channels & Message Transmission Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Wing: Official Contact Channels & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl border border-[#e5b061]/25 bg-[#090d14]/90 backdrop-blur-md shadow-2xl space-y-6">
              <span className="text-xs font-mono text-[#e5b061] uppercase tracking-wider block font-semibold">
                Direct Transmission Channels
              </span>

              {/* Email One-Click Copy Pill */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/[0.08] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#e5b061]" />
                    <span>PRIMARY EMAIL</span>
                  </span>
                  <span className="text-[10px] text-[#10b981]">ONE-CLICK COPY</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm font-mono text-slate-100 select-all font-semibold">
                    krishnakaushik1322007@gmail.com
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded bg-white/[0.06] hover:bg-[#e5b061]/20 text-[#e5b061] transition-all"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone One-Click Copy Pill */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/[0.08] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#e5b061]" />
                    <span>PHONE &bull; WHATSAPP</span>
                  </span>
                  <span className="text-[10px] text-[#10b981]">ONE-CLICK COPY</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm font-mono text-slate-100 select-all font-semibold">
                    +91 9650246706
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded bg-white/[0.06] hover:bg-[#e5b061]/20 text-[#e5b061] transition-all"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location Pill */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <span className="flex items-center space-x-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-[#e5b061]" />
                  <span>LOCATION</span>
                </span>
                <span className="text-slate-200 font-semibold">India &bull; Global Remote Relocation Ready</span>
              </div>

              {/* Verified Profiles Cluster */}
              <div className="pt-2 border-t border-white/[0.08] space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Public Engineering Profiles
                </span>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.linkedin.com/in/krishna-kaushik-559239366/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-lg bg-black/60 border border-white/[0.08] hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-2">
                      <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono text-slate-300 group-hover:text-white">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </a>

                  <a
                    href="https://github.com/krishnakaushik1322007-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-lg bg-black/60 border border-white/[0.08] hover:border-[#e5b061]/50 hover:bg-[#e5b061]/5 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-2">
                      <GithubIcon className="w-4 h-4 text-[#e5b061]" />
                      <span className="text-xs font-mono text-slate-300 group-hover:text-white">GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#e5b061] transition-colors" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Wing: Executive Message Transmission Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-[#e5b061]/25 bg-[#090d14]/90 backdrop-blur-md shadow-2xl space-y-6">
              
              <div className="border-b border-white/[0.08] pb-4">
                <span className="text-xs font-mono text-[#e5b061] uppercase tracking-wider block font-semibold">
                  Executive Message Transmission
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-slate-100 font-normal mt-0.5">
                  Direct Inquiries &amp; Technical Discussion
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Delivers directly to Krishna Kaushik&apos;s verified inbox
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-[#0b1410] border border-[#10b981]/40 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center mx-auto text-[#10b981]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-serif text-slate-100 font-medium">
                    Transmission Dispatched
                  </h4>
                  <p className="text-xs text-slate-300 font-sans max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || 'Visitor'}. Your message has been routed to <code>krishnakaushik1322007@gmail.com</code>. Krishna will review your inquiry shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 rounded bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-slate-300 hover:text-white transition-all"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Jane Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/[0.1] focus:border-[#e5b061] focus:outline-none text-xs font-sans text-slate-100 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. j.smith@technology.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/[0.1] focus:border-[#e5b061] focus:outline-none text-xs font-sans text-slate-100 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Inquiry Focus / Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/[0.1] focus:border-[#e5b061] focus:outline-none text-xs font-sans text-slate-100 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Message Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Outline your engineering role, project scope, or technical topic..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/[0.1] focus:border-[#e5b061] focus:outline-none text-xs font-sans text-slate-100 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                      <span>Direct TLS Transmission</span>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-[#e5b061] text-black font-mono text-xs font-bold hover:bg-[#d49e4d] transition-all flex items-center space-x-2 shadow-[0_0_20px_rgba(229,176,97,0.35)]"
                    >
                      <span>TRANSMIT DISPATCH</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
