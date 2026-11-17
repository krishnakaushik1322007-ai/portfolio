'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  caption: string;
  tag?: string;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  imageUrl,
  caption,
  tag
}: ImageLightboxProps) {
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
      aria-label="Image Preview"
      className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between max-w-7xl mx-auto w-full pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-3">
          {tag && (
            <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30">
              {tag}
            </span>
          )}
          <span className="text-sm font-semibold text-slate-200 truncate max-w-md sm:max-w-xl">
            {caption}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-auto overflow-hidden p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[80vh] max-w-full rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black/60">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={caption}
            className="max-h-[78vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div
        className="max-w-7xl mx-auto w-full pt-4 flex items-center justify-between text-xs font-mono text-slate-400"
        onClick={(e) => e.stopPropagation()}
      >
        <span>Verified Local Architecture Artifact &bull; Press ESC to close</span>
        <a
          href={imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 text-sky-400 hover:text-sky-300"
        >
          <span>Open raw image</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
