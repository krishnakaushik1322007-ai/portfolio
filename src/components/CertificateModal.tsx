'use client';

import React, { useEffect } from 'react';
import { X, Award, ExternalLink, ShieldCheck, Download } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  organization: string;
  date: string;
  placeholderText: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  title,
  organization,
  date,
  placeholderText
}: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Certificate Viewer"
      className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full rounded-2xl bg-[#0b0e14] border border-white/20 p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">{title}</h3>
              <p className="text-xs font-mono text-slate-400">{organization} &bull; {date}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display / Frame Placeholder */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-1 max-w-md">
            <div className="text-xs font-mono text-sky-400 uppercase tracking-widest">
              CERTIFICATE OF PARTICIPATION
            </div>
            <h4 className="text-lg font-bold text-white">
              Anveshan Hackathon — Round 2 Advancement
            </h4>
            <p className="text-xs font-mono text-slate-400 pt-1">
              Presented to <span className="text-white font-semibold">Krishna Kaushik</span> for successfully advancing to Round 2.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-black/60 border border-white/[0.08] text-[11px] font-mono text-slate-400 max-w-sm">
            <span>Verified Participation Credential &bull; Document placeholder ready for high-resolution certificate scan insertion.</span>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2">
          <span className="flex items-center space-x-1.5 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Authenticated Participation Record</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
