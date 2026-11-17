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
  ShieldCheck 
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
    const mailtoSubject = encodeURIComponent(subject || `Portfolio Inquiry from ${name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n[Sent from Krishna Kaushik's Portfolio]`
    );
    window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="relative py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-sky-400">
            <Mail className="w-3.5 h-3.5" />
            <span>08 // INITIATE DIALOGUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let&apos;s Build Something <span className="text-gradient-cyan">Intelligent Together</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl">
            Open to software engineering internships, AI research roles, and technical collaborations at leading global technology organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#0b0e14] border border-white/10 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <span>Direct Contact Channels</span>
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-sky-500/30 transition-all space-y-2 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center space-x-2">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <span>PRIMARY EMAIL</span>
                  </span>
                  <button
                    onClick={() => copyToClipboard(emailAddress, 'email')}
                    className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-sm sm:text-base font-mono font-semibold text-white hover:text-sky-300 break-all transition-colors block"
                >
                  {emailAddress}
                </a>
                {copiedEmail && (
                  <span className="text-[11px] font-mono text-emerald-400 block">
                    &check; Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-sky-500/30 transition-all space-y-2 group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>TELEPHONE &amp; WHATSAPP</span>
                  </span>
                  <button
                    onClick={() => copyToClipboard(phoneNumber, 'phone')}
                    className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <a
                  href="tel:+919650246706"
                  className="text-sm sm:text-base font-mono font-semibold text-white hover:text-emerald-300 transition-colors block"
                >
                  {phoneNumber}
                </a>
                {copiedPhone && (
                  <span className="text-[11px] font-mono text-emerald-400 block">
                    &check; Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Location & Relocation */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <span className="text-xs font-mono text-slate-400 flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-violet-400" />
                  <span>LOCATION &amp; AVAILABILITY</span>
                </span>
                <p className="text-sm font-semibold text-white">
                  India (IST / UTC+5:30)
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  Available for in-person roles, relocation, and high-bandwidth distributed remote teams worldwide.
                </p>
              </div>

              {/* Social Profiles */}
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/krishna-kaushik-559239366/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#0077b5]/15 hover:bg-[#0077b5]/25 border border-[#0077b5]/30 text-sky-200 text-xs font-mono font-bold transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-sky-400" />
                </a>

                <a
                  href="https://github.com/krishnakaushik1322007-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 text-xs font-mono font-bold transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Reliable Mailto Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#0b0e14] border border-white/10 shadow-xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
                <p className="text-xs font-mono text-slate-400">
                  Submitting formats your request into a secure client mail draft to guarantee immediate delivery.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Satya Nadella / Hiring Manager"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Your Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Subject / Opportunity
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. AI Engineering Internship / Technical Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500/50 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Message Details
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Discuss project requirements, role scope, or technical questions..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Draft &amp; Dispatch Message</span>
                </button>
              </form>

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero tracking &bull; Privacy preserved</span>
                </span>
                <span>Response SLA: &lt; 24 Hours</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
