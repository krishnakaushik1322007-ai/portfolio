'use client';

import React, { useState } from 'react';
import { 
  Laptop, 
  ShieldCheck, 
  Server, 
  Brain, 
  Database, 
  Info,
  Layers
} from 'lucide-react';

interface ArchitectureNode {
  id: string;
  label: string;
  desc: string;
  role: 'client' | 'gateway' | 'ai' | 'storage' | 'security';
}

interface ArchitectureDiagramProps {
  title?: string;
  summary: string;
  nodes?: ArchitectureNode[];
}

export default function ArchitectureDiagram({ title, summary, nodes }: ArchitectureDiagramProps) {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode | null>(nodes && nodes.length > 0 ? nodes[0] : null);

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'client':
        return <Laptop className="w-4 h-4 text-sky-400" />;
      case 'security':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'gateway':
        return <Server className="w-4 h-4 text-violet-400" />;
      case 'ai':
        return <Brain className="w-4 h-4 text-pink-400" />;
      case 'storage':
        return <Database className="w-4 h-4 text-amber-400" />;
      default:
        return <Layers className="w-4 h-4 text-slate-400" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'client':
        return 'border-sky-500/40 bg-sky-500/10 text-sky-300';
      case 'security':
        return 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300';
      case 'gateway':
        return 'border-violet-500/40 bg-violet-500/10 text-violet-300';
      case 'ai':
        return 'border-pink-500/40 bg-pink-500/10 text-pink-300';
      case 'storage':
        return 'border-amber-500/40 bg-amber-500/10 text-amber-300';
      default:
        return 'border-white/20 bg-white/5 text-slate-300';
    }
  };

  return (
    <div className="rounded-2xl bg-[#090c12] border border-white/10 p-6 space-y-6">
      {/* Title & Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-3">
        <div className="flex items-center space-x-2">
          <Layers className="w-4 h-4 text-sky-400" />
          <h4 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
            {title || 'System Architecture & Data Pipeline'}
          </h4>
        </div>
        <span className="text-[11px] font-mono text-slate-400 flex items-center space-x-1">
          <Info className="w-3 h-3 text-sky-400" />
          <span>Click nodes to inspect data responsibility</span>
        </span>
      </div>

      <p className="text-xs text-slate-300 font-mono leading-relaxed bg-black/40 p-3 rounded-lg border border-white/[0.04]">
        {summary}
      </p>

      {/* Interactive Node Flow Diagram */}
      {nodes && nodes.length > 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 relative">
            {nodes.map((node, idx) => {
              const isSelected = selectedNode?.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between space-y-2 relative group focus:outline-none ${
                    isSelected
                      ? `${getRoleColor(node.role)} shadow-[0_0_20px_rgba(56,189,248,0.2)] scale-[1.02]`
                      : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="p-1 rounded-md bg-white/[0.05]">
                      {getRoleIcon(node.role)}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      STAGE 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-white block">
                      {node.label}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mt-0.5">
                      {node.role}
                    </span>
                  </div>

                  {isSelected && (
                    <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-[#090c12] animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Node Detail Inspector Box */}
          {selectedNode && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-sky-500/[0.05] via-violet-500/[0.04] to-transparent border border-sky-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in duration-200">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    {selectedNode.label} ({selectedNode.role.toUpperCase()})
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-mono">
                  {selectedNode.desc}
                </p>
              </div>
              <span className="px-2.5 py-1 rounded text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30 whitespace-nowrap self-start sm:self-auto">
                VERIFIED ARCHITECTURE
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
