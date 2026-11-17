import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import LivingCursorEngine from '@/components/LivingCursorEngine';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://krishnakaushik.dev'),
  title: 'Krishna Kaushik | AI Engineer & Software Developer',
  description:
    'Personal portfolio of Krishna Kaushik — AI Engineer and CSE (AI) undergraduate at Shoolini University (9.05/10 CGPA). Building grounded intelligence, RAG engines, full-stack platforms, and deterministic C++ systems.',
  keywords: [
    'Krishna Kaushik',
    'AI Engineer',
    'Software Developer',
    'Large Language Models',
    'Retrieval-Augmented Generation',
    'CampusOS AI',
    'CivicLens',
    'Gyanix',
    'FastAPI',
    'Next.js',
    'PostgreSQL',
    'pgvector',
    'PostGIS',
    'Shoolini University'
  ],
  authors: [{ name: 'Krishna Kaushik', url: 'https://github.com/krishnakaushik1322007-ai' }],
  creator: 'Krishna Kaushik',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://krishnakaushik.dev',
    title: 'Krishna Kaushik | AI Engineer & Software Developer',
    description:
      'Building Intelligent Systems. Engineering Real-World Solutions. Flagship projects in institutional AI, civic infrastructure intelligence, and self-reflective RAG.',
    siteName: 'Krishna Kaushik Portfolio',
    images: [
      {
        url: '/projects/campusos/00_platform_ecosystem.png',
        width: 1200,
        height: 630,
        alt: 'Krishna Kaushik Engineering Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishna Kaushik | AI Engineer & Software Developer',
    description:
      'Building Intelligent Systems. Engineering Real-World Solutions. Portfolio & Case Studies.',
    images: ['/projects/campusos/00_platform_ecosystem.png']
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export const viewport: Viewport = {
  themeColor: '#08090d',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#050508] text-slate-100 antialiased selection:bg-red-500/25 selection:text-white">
        <LivingCursorEngine />
        {children}
      </body>
    </html>
  );
}
