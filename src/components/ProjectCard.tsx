'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Maximize2 
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { Project } from '@/types';
import ImageLightbox from './ImageLightbox';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const primaryScreenshot = project.screenshots && project.screenshots.length > 0 ? project.screenshots[0] : null;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Flagship':
        return (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-sky-500/15 text-sky-300 border border-sky-500/30 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            ★ FLAGSHIP ARCHITECTURE
          </span>
        );
      case 'Pilot Research':
        return (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-teal-500/15 text-teal-300 border border-teal-500/30">
            RESEARCH PILOT
          </span>
        );
      case 'Hackathon Concept':
        return (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
            HACKATHON PLATFORM
          </span>
        );
      case 'Production Prototype':
        return (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-violet-500/15 text-violet-300 border border-violet-500/30">
            PRODUCTION PROTOTYPE
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-slate-500/15 text-slate-300 border border-slate-500/30">
            RULE-BASED ENGINE
          </span>
        );
    }
  };

  return (
    <>
      <div
        className={`relative rounded-2xl cursor-spotlight border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 ${
          project.isFlagship
            ? 'border-red-500/40 shadow-[0_10px_40px_-15px_rgba(239,68,68,0.2)] hover:border-red-500'
            : 'border-white/[0.08] hover:border-red-500/40 shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
        }`}
      >
        {/* Red accent glow top border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        <div className="p-6 sm:p-8 space-y-6 relative z-10">
          
          {/* Top Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              {getStatusBadge(project.status)}
              <span className="text-xs font-mono text-slate-500">&bull;</span>
              <span className="text-xs font-mono text-slate-400">{project.category}</span>
            </div>
            <span className="text-xs font-mono text-slate-500">{project.period}</span>
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-1.5">
            <Link
              href={`/projects/${project.slug}`}
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-sky-300 transition-colors flex items-center justify-between"
            >
              <span>{project.title}</span>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
            </Link>
            <p className="text-sm font-mono text-sky-400/90 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Screenshot Preview (if available) */}
          {primaryScreenshot && (
            <div 
              onClick={() => setLightboxOpen(true)}
              className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer group/img"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={primaryScreenshot.url}
                alt={primaryScreenshot.caption}
                className="w-full h-full object-cover object-top opacity-85 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-200">
                <span className="truncate pr-2">{primaryScreenshot.caption}</span>
                <span className="p-1 rounded-md bg-black/70 border border-white/20 text-sky-300 shrink-0 flex items-center space-x-1">
                  <Maximize2 className="w-3 h-3" />
                  <span className="text-[10px]">Inspect</span>
                </span>
              </div>
            </div>
          )}

          {/* Overview Text */}
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.overview}
          </p>

          {/* Metrics Pills (if available) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {project.metrics.slice(0, 4).map((m, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] font-mono text-xs"
                >
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">{m.label}</div>
                  <div className="text-sm font-bold text-white mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.08] text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-500">
                +{project.technologies.length - 6} more
              </span>
            )}
          </div>

        </div>

        {/* Card Footer / Action Links */}
        <div className="px-6 py-4 sm:px-8 border-t border-white/[0.06] bg-black/20 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>Explore Engineering Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
              aria-label={`${project.title} GitHub Source`}
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source</span>
            </a>
          )}
        </div>

      </div>

      {/* Lightbox for primary screenshot */}
      {primaryScreenshot && (
        <ImageLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          imageUrl={primaryScreenshot.url}
          caption={primaryScreenshot.caption}
          tag={primaryScreenshot.tag}
        />
      )}
    </>
  );
}
