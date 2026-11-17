'use client';

import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  ExternalLink, 
  Calendar, 
  CheckCircle2, 
  Eye, 
  ShieldCheck 
} from 'lucide-react';
import { achievementsData } from '@/data/achievements';
import CertificateModal from './CertificateModal';

export default function AchievementsSection() {
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievementsData[0] | null>(null);

  return (
    <section id="achievements" className="relative py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-sky-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>06 // HONORS & COMPETITIVE MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Hackathons & <span className="text-gradient-cyan">Verified Credentials</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl">
            Documented participation and competitive advancements evaluated on technical execution, system design, and algorithmic problem-solving.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#0b0e14] border border-white/10 hover:border-sky-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      {item.level}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{item.date}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {item.organization}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.08] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action: Open Certificate Lightbox */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Participation Certificate Available</span>
                </span>

                <button
                  onClick={() => setSelectedAchievement(item)}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-sky-500/15 border border-white/10 hover:border-sky-500/40 text-xs font-mono text-slate-200 hover:text-sky-300 transition-all duration-200"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      {selectedAchievement && (
        <CertificateModal
          isOpen={Boolean(selectedAchievement)}
          onClose={() => setSelectedAchievement(null)}
          title={selectedAchievement.title}
          organization={selectedAchievement.organization}
          date={selectedAchievement.date}
          placeholderText={selectedAchievement.certificatePlaceholderText}
        />
      )}
    </section>
  );
}
