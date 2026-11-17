'use client';

import React from 'react';
import { useBuilder } from '@/context/BuilderContext';

interface TypewriterTextProps {
  text: string;
  startLayer: number;
  endLayer: number;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'div';
  cursorColor?: 'cyan' | 'red' | 'white';
}

export default function TypewriterText({
  text,
  startLayer,
  endLayer,
  className = '',
  as: Component = 'span',
  cursorColor = 'cyan'
}: TypewriterTextProps) {
  const { buildPhase, layersBuilt } = useBuilder();

  // If completed, render full text immediately
  if (buildPhase === 'completed' || layersBuilt >= endLayer) {
    return <Component className={className}>{text}</Component>;
  }

  // If not started yet, return placeholder with same height or empty
  if (layersBuilt < startLayer) {
    return (
      <Component className={`${className} opacity-20`}>
        {text.slice(0, Math.min(3, text.length))}
      </Component>
    );
  }

  // Currently typing out
  const progress = Math.min(1, Math.max(0, (layersBuilt - startLayer) / (endLayer - startLayer)));
  const visibleCount = Math.max(1, Math.floor(text.length * progress));
  const displayText = text.slice(0, visibleCount);

  const cursorClass =
    cursorColor === 'cyan'
      ? 'bg-[#00F0FF]'
      : cursorColor === 'red'
      ? 'bg-red-500'
      : 'bg-white';

  return (
    <Component className={className}>
      {displayText}
      <span
        className={`inline-block w-1.5 h-[1.1em] ml-0.5 ${cursorClass} animate-pulse align-middle`}
        aria-hidden="true"
      />
    </Component>
  );
}
