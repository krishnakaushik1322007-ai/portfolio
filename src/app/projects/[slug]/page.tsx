import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Terminal, 
  FileText, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { GithubIcon } from '@/components/BrandIcons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import { projectsData } from '@/data/projects';
import type { Metadata } from 'next';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found | Krishna Kaushik' };

  return {
    title: `${project.title} | Engineering Case Study | Krishna Kaushik`,
    description: project.overview,
  };
}

export default async function ProjectCaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        
        {/* Breadcrumb Bar */}
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-sky-400 flex items-center space-x-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-sky-400">
            Projects
          </Link>
          <span>/</span>
          <span className="text-white">{project.title}</span>
        </div>

        {/* Hero Teardown Header */}
        <div className="space-y-6 pb-10 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-sky-500/15 text-sky-300 border border-sky-500/30">
              {project.status.toUpperCase()}
            </span>
            <span className="text-xs font-mono text-slate-500">&bull;</span>
            <span className="text-xs font-mono text-slate-400">{project.category}</span>
            <span className="text-xs font-mono text-slate-500">&bull;</span>
            <span className="text-xs font-mono text-slate-500">{project.period}</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl font-mono text-sky-400/90 font-medium">
              {project.subtitle}
            </p>
          </div>

          <p className="text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed">
            {project.overview}
          </p>

          {/* Quick Action Bar */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 text-xs font-mono font-bold tracking-wider transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Inspect GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}

            <Link
              href="/projects"
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-transparent hover:bg-white/[0.04] text-slate-400 hover:text-white text-xs font-mono transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all projects</span>
            </Link>
          </div>
        </div>

        {/* Metrics Grid (if present) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Verified Technical Benchmarks &amp; Scope
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0b0e14] border border-white/10 space-y-1 font-mono"
                >
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                    {m.label}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {m.value}
                  </div>
                  <p className="text-[11px] text-slate-400 pt-1">
                    {m.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Problem & Solution Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-rose-500/20 space-y-4">
            <div className="flex items-center space-x-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
              <span>01 // THE ARCHITECTURAL CHALLENGE</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              The Operational Problem
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-sky-500/20 space-y-4">
            <div className="flex items-center space-x-2 text-sky-400 font-mono text-xs font-bold uppercase tracking-wider">
              <span>02 // THE ENGINEERING RESOLUTION</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              The System Solution
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

        </div>

        {/* Interactive Architecture Flow Diagram */}
        <ArchitectureDiagram
          title={`${project.title} — System Architecture & Data Flow`}
          summary={project.architectureSummary}
          nodes={project.architectureNodes}
        />

        {/* Key Features & System Capabilities */}
        <div className="p-8 rounded-2xl bg-[#0b0e14] border border-white/10 space-y-6">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-sky-400">
            <Terminal className="w-4 h-4" />
            <span>Core Engineered Capabilities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start space-x-3 text-xs sm:text-sm text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Real Screenshots Gallery (if available) */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Screenshots &amp; Interface Artifacts
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  Verified visual captures from local workspace environments.
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {project.screenshots.length} Artifacts
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border border-white/10 bg-black/60 group hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-black/40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.url}
                      alt={s.caption}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-sky-300 border border-white/20">
                      {s.tag}
                    </div>
                  </div>

                  <div className="p-4 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="truncate pr-2">{s.caption}</span>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 shrink-0 flex items-center space-x-1"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* My Engineering Contribution */}
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-violet-400">
            <Cpu className="w-4 h-4" />
            <span>My Engineering Ownership &amp; Contributions</span>
          </div>

          <div className="space-y-3">
            {project.myContribution.map((point, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/30 border border-white/[0.04] text-xs sm:text-sm text-slate-300 flex items-start space-x-3"
              >
                <span className="font-mono text-sky-400 font-bold shrink-0 mt-0.5">
                  0{idx + 1}.
                </span>
                <span className="leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Engineered Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:border-sky-500/30 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Verification & Academic Integrity Notice */}
        <div className="p-5 rounded-xl bg-sky-500/[0.04] border border-sky-500/20 flex items-start space-x-3 text-xs font-mono text-slate-400 leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-200 font-semibold block mb-0.5">
              Technical Verification &amp; Ethical Attribution:
            </strong>
            {project.verificationNotes}
          </div>
        </div>

        {/* Next / Prev Project Navigation Strip */}
        <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Prev: {prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center space-x-2 text-xs font-mono text-sky-400 hover:text-sky-300 font-bold transition-colors"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>

      </main>

      <Footer />
    </div>
  );
}
