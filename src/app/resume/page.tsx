import React from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Download, 
  ArrowLeft, 
  CheckCircle2, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Code 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Krishna Kaushik | AI & Software Engineer',
  description:
    'Official engineering resume of Krishna Kaushik. B.Tech Computer Science & Artificial Intelligence undergraduate at Shoolini University (9.05/10 CGPA).',
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-sky-400 flex items-center space-x-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-white">Curriculum Vitae</span>
        </div>

        {/* Header & Download Bar */}
        <div className="p-8 rounded-2xl bg-[#0b0e14] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-sky-400">
              <FileText className="w-3.5 h-3.5" />
              <span>OFFICIAL CANDIDATE RESUME</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Krishna Kaushik
            </h1>
            <p className="text-xs sm:text-sm font-mono text-slate-400">
              AI Engineer &bull; Software Developer &bull; CSE Artificial Intelligence Student
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Krishna_Kaushik_Resume.pdf"
              download="Krishna_Kaushik_Resume.pdf"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href="/Krishna_Kaushik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 text-xs font-mono border border-white/10 transition-colors"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Embedded Interactive PDF Viewer */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl">
          <div className="px-4 py-3 bg-[#0d111a] border-b border-white/[0.08] flex items-center justify-between font-mono text-xs text-slate-400">
            <span>Krishna_Kaushik_Resume.pdf</span>
            <span className="text-emerald-400">&bull; Verified Authentic Academic Document</span>
          </div>
          <iframe
            src="/Krishna_Kaushik_Resume.pdf#toolbar=0&navpanes=0"
            className="w-full h-[850px] border-none bg-slate-900"
            title="Krishna Kaushik Resume PDF"
          />
        </div>

      </main>

      <Footer />
    </div>
  );
}
