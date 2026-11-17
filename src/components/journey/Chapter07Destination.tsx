'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ArrowUpRight, 
  RotateCcw, 
  ShieldCheck, 
  FileText,
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../BrandIcons';
import { useJourney } from '@/context/JourneyContext';

export default function Chapter07Destination() {
  const { goToChapter, playCinematicChime } = useJourney();
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI Engineering & Full-Stack Systems Initiative',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('krishnakaushik1322007@gmail.com');
    setCopiedEmail(true);
    playCinematicChime(750);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91 9650246706');
    setCopiedPhone(true);
    playCinematicChime(750);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    playCinematicChime(850);
  };

  return (
    <section 
      id="destination"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-28 sm:py-36 overflow-hidden bg-gradient-to-b from-transparent via-[#070b16]/60 to-[#040711]"
    >
      <div className="relative max-w-6xl mx-auto w-full space-y-12 z-10">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#38bdf8]/40 bg-[#38bdf8]/10 text-[#38bdf8] font-mono text-xs uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>CHAPTER 07 // WHAT COMES NEXT? &bull; THEME: AMBITION &amp; FUTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-slate-100 tracking-tight leading-tight">
              &ldquo;This Isn&apos;t the Destination. <br />
              <span className="italic font-normal text-gradient-journey">It&apos;s Just the Beginning.&rdquo;</span>
            </h2>
            <p className="mt-2 text-slate-300 font-sans text-sm sm:text-base max-w-2xl">
              Learning continuously. Building intelligently. Creating solutions that matter. Connect directly with Krishna Kaushik for AI engineering roles, research collaboration, and systems initiatives.
            </p>
          </div>

          <button
            onClick={() => {
              goToChapter(0);
              playCinematicChime(440);
            }}
            className="px-4 py-2.5 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-mono text-xs tracking-wider flex items-center space-x-2 transition-all self-start md:self-auto shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>RETURN TO THE BEGINNING</span>
          </button>
        </div>

        {/* Dual Layout: Direct Channels & Direct Transmission Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Wing: Official Channels & Quick Action Pills */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-6">
              <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider block font-semibold">
                Direct Communication Channels
              </span>

              {/* Email Pill with One-Click Copy */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>PRIMARY EMAIL</span>
                  </span>
                  <span className="text-[10px] text-[#10b981]">ONE-CLICK COPY</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm font-mono text-slate-100 select-all font-semibold truncate mr-2">
                    krishnakaushik1322007@gmail.com
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/[0.06] hover:bg-[#38bdf8]/20 text-[#38bdf8] transition-all shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Pill with One-Click Copy */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
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
                    className="p-2 rounded-lg bg-white/[0.06] hover:bg-[#e5b061]/20 text-[#e5b061] transition-all shrink-0"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location Pill */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="flex items-center space-x-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-[#38bdf8]" />
                  <span>LOCATION</span>
                </span>
                <span className="text-slate-200 font-semibold">India &bull; Global Remote / Relocation</span>
              </div>

              {/* Resume Download Pill */}
              <a
                href="/Krishna_Kaushik_Resume.pdf"
                download="Krishna_Kaushik_Resume.pdf"
                className="w-full p-4 rounded-xl bg-gradient-to-r from-[#38bdf8]/15 to-[#8b5cf6]/15 border border-[#38bdf8]/35 hover:border-[#38bdf8]/60 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-[#38bdf8]" />
                  <div>
                    <span className="text-sm font-serif text-slate-100 font-medium block">
                      Download Verified Resume
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Krishna_Kaushik_Resume.pdf
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#38bdf8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

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
                    className="p-3.5 rounded-xl bg-black/60 border border-white/[0.08] hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all flex items-center justify-between group"
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
                    className="p-3.5 rounded-xl bg-black/60 border border-white/[0.08] hover:border-[#e5b061]/50 hover:bg-[#e5b061]/5 transition-all flex items-center justify-between group"
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

          {/* Right Wing: Direct Message Transmission Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-[#070b16]/95 backdrop-blur-xl shadow-2xl space-y-6">
              
              <div className="border-b border-white/[0.08] pb-4">
                <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider block font-semibold">
                  Direct Dispatch Transmission
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-slate-100 font-normal mt-0.5">
                  Send a Direct Message to Krishna
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Routes directly to krishnakaushik1322007@gmail.com
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-[#0b1410] border border-[#10b981]/40 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center mx-auto text-[#10b981]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-serif text-slate-100 font-medium">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs text-slate-300 font-sans max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || 'Friend'}. Your transmission has been queued to <code>krishnakaushik1322007@gmail.com</code>. Krishna will review your message promptly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 rounded bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-slate-300 hover:text-white transition-all"
                  >
                    Send Another Message
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
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/[0.1] focus:border-[#38bdf8] focus:outline-none text-xs font-sans text-slate-100 transition-colors"
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
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/[0.1] focus:border-[#38bdf8] focus:outline-none text-xs font-sans text-slate-100 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Subject / Engineering Topic *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/[0.1] focus:border-[#38bdf8] focus:outline-none text-xs font-sans text-slate-100 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share details regarding your team, engineering role, or technical collaboration..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/[0.1] focus:border-[#38bdf8] focus:outline-none text-xs font-sans text-slate-100 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                      <span>Direct TLS Transmission</span>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-white font-mono text-xs font-bold uppercase tracking-wider hover:from-[#60a5fa] hover:to-[#1d4ed8] transition-all flex items-center space-x-2 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
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

        {/* Closing Narrative Signature */}
        <div className="pt-8 border-t border-white/[0.08] text-center space-y-2">
          <p className="font-serif italic text-base sm:text-lg text-slate-300">
            &ldquo;Building systems that stand on mathematical foundations and engineering integrity.&rdquo;
          </p>
          <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest block">
            &mdash; KRISHNA KAUSHIK &bull; AI ENGINEER &bull; 2026
          </span>
        </div>

      </div>
    </section>
  );
}
