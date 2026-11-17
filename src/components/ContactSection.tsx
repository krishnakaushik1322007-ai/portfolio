'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const emailAddress = 'krishnakaushik1322007@gmail.com';
  const phoneNumber = '+91 9650246706';

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || `Engineering Inquiry from ${name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n[Sent from Krishna Kaushik's Portfolio]`
    );
    window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="relative py-24 border-b border-white/[0.08] bg-[#050508]">
      {/* Red vertical accent line */}
      <div className="vertical-accent-line hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 md:pl-12">
        
        {/* Section Header (Matching video "DIRECT CONNECT") */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>DIRECT CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Let&apos;s Architect Something <span className="text-red-500">Extraordinary</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Available for production autonomous AI system design, institutional engineering infrastructure, and full-stack software development roles worldwide.
          </p>

          {/* High-Impact Solid Red Copy Email Button (Matching video center card) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${emailAddress}`}
              className="px-6 py-3.5 rounded-lg bg-black/60 border border-white/20 hover:border-red-500/50 text-white font-mono text-xs sm:text-sm font-semibold transition-colors"
            >
              {emailAddress}
            </a>

            <button
              onClick={() => copyToClipboard(emailAddress, 'email')}
              className="px-6 py-3.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] flex items-center space-x-2"
            >
              {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
            </button>
          </div>

          {/* Social Profiles Chips */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3 text-xs font-mono">
            <a
              href="https://github.com/krishnakaushik1322007-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-slate-400" />
              <span>github.com/krishnakaushik1322007-ai</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href="https://www.linkedin.com/in/krishna-kaushik-559239366/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-sky-300 border border-white/10 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" />
              <span>linkedin.com/in/krishna-kaushik-559239366</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>

            <button
              onClick={() => copyToClipboard(phoneNumber, 'phone')}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-emerald-300 border border-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{copiedPhone ? 'Phone Copied!' : phoneNumber}</span>
            </button>
          </div>
        </div>

        {/* Detailed Form Container */}
        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-[#09090f] border border-white/10 shadow-2xl space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">
              Transmit Encrypted Message
            </h3>
            <p className="text-xs font-mono text-slate-400">
              Direct client draft formatting for immediate transmission.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] text-slate-400 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Hiring Partner / Lead Architect"
                  className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-red-500/60"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] text-slate-400 uppercase tracking-wider">
                  Your Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. talent@company.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-red-500/60"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-slate-400 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. AI Engineering Role / Technical Collaboration"
                className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-red-500/60"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] text-slate-400 uppercase tracking-wider">
                Project / Message Scope
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Discuss systems architecture, role requirements, or project details..."
                className="w-full px-4 py-2.5 rounded-lg bg-black/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-red-500/60 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>DISPATCH MESSAGE</span>
            </button>
          </form>

          {/* Bottom Telemetry Note matching video */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
            <span>&copy; 2026 Krishna Kaushik &bull; Shoolini University B.Tech CSE (AI)</span>
            <span className="text-red-400">Response SLA: &lt; 24h</span>
          </div>

        </div>

      </div>
    </section>
  );
}
