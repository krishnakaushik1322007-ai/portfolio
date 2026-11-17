'use client';

import React from 'react';
import { useBuilder } from '@/context/BuilderContext';

interface BuilderWireframeBoxProps {
  children: React.ReactNode;
  dimensionText: string;
  startLayer: number;
  endLayer: number;
  className?: string;
  color?: 'cyan' | 'red';
  showCrosshairs?: boolean;
}

export default function BuilderWireframeBox({
  children,
  dimensionText,
  startLayer,
  endLayer,
  className = '',
  color = 'cyan',
  showCrosshairs = true
}: BuilderWireframeBoxProps) {
  const { buildPhase, layersBuilt } = useBuilder();

  // Active during this element's build window
  const isCurrentlyBuilding =
    buildPhase === 'assembling' &&
    layersBuilt >= startLayer &&
    layersBuilt < endLayer;

  const isPending =
    buildPhase === 'assembling' && layersBuilt < startLayer;

  const isCompleted =
    buildPhase === 'completed' || layersBuilt >= endLayer;

  const borderColor = color === 'cyan' ? 'border-[#00F0FF]' : 'border-red-500';
  const badgeBg = color === 'cyan' ? 'bg-[#00F0FF] text-[#050508]' : 'bg-red-500 text-white';
  const handleColor = color === 'cyan' ? 'border-[#00F0FF] bg-white' : 'border-red-500 bg-white';

  return (
    <div
      className={`relative transition-all duration-300 ${className} ${
        isCurrentlyBuilding
          ? `ring-1 ring-[#00F0FF]/80 bg-[#00F0FF]/[0.03] shadow-[0_0_20px_rgba(0,240,255,0.12)]`
          : isPending
          ? 'opacity-40 filter blur-[0.3px]'
          : 'opacity-100'
      }`}
    >
      {/* Figma Selection Handles & Dimension Pill when currently being assembled */}
      {isCurrentlyBuilding && (
        <>
          {/* 8 Square Drag / Resize Handles */}
          {/* Top-Left */}
          <span className={`absolute -top-1 -left-1 w-2 h-2 ${handleColor} border z-30 pointer-events-none`} />
          {/* Top-Center */}
          <span className={`absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 ${handleColor} border z-30 pointer-events-none`} />
          {/* Top-Right */}
          <span className={`absolute -top-1 -right-1 w-2 h-2 ${handleColor} border z-30 pointer-events-none`} />
          {/* Middle-Left */}
          <span className={`absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 ${handleColor} border z-30 pointer-events-none`} />
          {/* Middle-Right */}
          <span className={`absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 ${handleColor} border z-30 pointer-events-none`} />
          {/* Bottom-Left */}
          <span className={`absolute -bottom-1 -left-1 w-2 h-2 ${handleColor} border z-30 pointer-events-none`} />
          {/* Bottom-Center */}
          <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 ${handleColor} border z-30 pointer-events-none`} />
          {/* Bottom-Right */}
          <span className={`absolute -bottom-1 -right-1 w-2 h-2 ${handleColor} border z-30 pointer-events-none`} />

          {/* Dimension Tag Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 pointer-events-none whitespace-nowrap">
            <span className={`px-1.5 py-0.5 text-[9px] font-mono font-bold tracking-tight rounded-sm shadow-sm ${badgeBg}`}>
              {dimensionText}
            </span>
          </div>

          {/* Corner Crosshairs */}
          {showCrosshairs && (
            <>
              <span className="absolute -top-3 -left-3 text-[#00F0FF]/60 text-[10px] font-mono pointer-events-none">+</span>
              <span className="absolute -bottom-3 -right-3 text-[#00F0FF]/60 text-[10px] font-mono pointer-events-none">+</span>
            </>
          )}
        </>
      )}

      {children}
    </div>
  );
}
