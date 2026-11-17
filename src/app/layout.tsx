import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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
  title: 'THE JOURNEY | Krishna Kaushik — AI Engineer & Software Developer',
  description:
    'THE JOURNEY: From Curiosity to Engineering. An interactive cinematic portfolio by Krishna Kaushik — AI Engineer and CSE (AI) undergraduate at Shoolini University (9.05/10 CGPA). Building grounded intelligence, RAG engines, full-stack platforms, and deterministic C++ systems.',
  keywords: [
    'Krishna Kaushik',
    'The Journey',
    'AI Engineer',
    'Software Developer',
    'Large Language Models',
    'Retrieval-Augmented Generation',
    'CampusOS AI',
    'CivicLens',
    'Gyanix',
    'ZENETH',
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
    title: 'THE JOURNEY | Krishna Kaushik — AI Engineer & Software Developer',
    description:
      'From Curiosity to Engineering. An interactive storytelling experience exploring AI systems, institutional platforms, and high-performance engineering.',
    siteName: 'Krishna Kaushik — The Journey',
    images: [
      {
        url: '/krishna_kaushik.jpg',
        width: 1024,
        height: 1024,
        alt: 'Krishna Kaushik - AI Engineer & Software Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE JOURNEY | Krishna Kaushik — AI Engineer & Software Developer',
    description:
      'From Curiosity to Engineering. An interactive storytelling portfolio exploring AI platforms, RAG engines, and deterministic C++ systems.',
    images: ['/krishna_kaushik.jpg']
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
        {children}
      </body>
    </html>
  );
}
