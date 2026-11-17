# 🌌 Krishna Kaushik — Elite Personal Engineering Portfolio

> **High-Performance Engineering Portfolio & Systems Showcase**  
> Designed for international technology opportunities (Google, Microsoft, NVIDIA, OpenAI).

[![Next.js](https://img.shields.io/badge/Next.js-16.4%20(Turbopack)-black.svg?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-61DAFB.svg?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-38B2AC.svg?logo=tailwind_css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-00F0FF?style=flat-square)](LICENSE)

---

## 🏛️ Executive Engineering Overview

This repository hosts the source code for the personal engineering portfolio of **Krishna Kaushik** — Computer Science & Engineering undergraduate specializing in **Artificial Intelligence** at **Shoolini University** (Current CGPA: **9.05 / 10.0**).

Rather than relying on generic student templates, this site was engineered from first principles as an **Apple-inspired, dark obsidian technology platform** featuring:
- **Interactive Cursor Physics Engine**: Sub-pixel precision dot, velocity-stretching spring ring, dynamic particle sparks, and ambient flashlight illuminating surrounding cards while scrolling.
- **Interactive Neural Matrix Canvas**: GPU-accelerated constellation particle field with mouse proximity physics.
- **Interactive System Diagnostic Terminal**: In-browser shell allowing recruiters to execute commands (`help`, `skills`, `projects`, `campusos`, `civiclens`, `edu`, `contact`, `clear`).
- **Grounded Project Case Studies**: Complete architectural teardowns with interactive SVG data-flow diagrams, verified local test suites, and authentic screenshot artifacts for:
  1. **CampusOS AI** (Flagship — Role-Aware School Intelligence Operating System, Next.js + FastAPI + Supabase pgvector + Gemini RAG, 510 QA test matrix)
  2. **CivicLens** (Enterprise Civic Infrastructure Intelligence & Municipal Orchestration, PostGIS `ST_DWithin` spatial clustering + Gemini 2.5 Flash vision, 100/100 tests passing)
  3. **Gyanix** (Curriculum-Grounded Socratic AI Learning Assistant & Dataset Engine, CBSE Class 12 Physics Drift Velocity, 12 structured dialogues, 41 state transitions, 0 cross-validation errors)
  4. **Agentic RAG Engine** (Self-Reflective RAG Engine, Semantic Intent Routing, Hybrid FAISS/BM25, Cross-Encoder Reranking, Grounded Hallucination Verification)
  5. **ZENETH** (Native C++ Rule-Based Agricultural Expert System, 9 crops, STL & OOP architecture, offline zero-dependency engine)
  6. **Financial Advisor AI** (RAG-based Financial Research Assistant, FAISS + Streamlit + Plotly)
  7. **Generative AI Suite** (BART Abstractive Text Summarization & Deep Convolutional Autoencoders)
- **Transparent Attribution**: Complete adherence to verified academic credentials and internship details (Corizo 9-month programme in collaboration with IIT Bombay: Module 1 IoT & Robotics ongoing, Modules 2 & 3 upcoming; Anveshan Hackathon Round 2 advancement).

---

## 📦 Directory Structure

```
portfolio/
├── public/
│   ├── Krishna_Kaushik_Resume.pdf       # Official verified resume
│   └── projects/
│       ├── campusos/                     # Authentic CampusOS UI screenshots
│       └── civiclens/                    # Authentic CivicLens vision screenshots
├── src/
│   ├── app/
│   │   ├── globals.css                   # Obsidian dark theme, glassmorphism, utilities
│   │   ├── layout.tsx                    # SEO metadata, OpenGraph, viewport, cursor wrapper
│   │   ├── page.tsx                      # Root landing page
│   │   ├── not-found.tsx                 # Cinematic 404 diagnostic screen
│   │   ├── projects/
│   │   │   ├── page.tsx                  # Dedicated projects catalog with filter & search
│   │   │   └── [slug]/page.tsx           # In-depth architectural case study pages
│   │   └── resume/page.tsx               # Dedicated PDF viewer & download portal
│   ├── components/
│   │   ├── InteractiveCursor.tsx         # Physics spring cursor with trails & scroll sparks
│   │   ├── NeuralCanvas.tsx              # GPU particle constellation canvas
│   │   ├── Navbar.tsx                    # Glassmorphic header with active status indicator
│   │   ├── Hero.tsx                      # Editorial headline & interactive technical card
│   │   ├── ProofMetrics.tsx              # Ground-truth metric proof bar (9.05 CGPA, 100 tests)
│   │   ├── AboutSection.tsx              # Background, journey & engineering philosophies
│   │   ├── SkillsSection.tsx             # Interactive matrix with qualitative levels & context
│   │   ├── FeaturedProjects.tsx          # Filterable project showcase
│   │   ├── ProjectCard.tsx               # Interactive card with lightbox & tech tags
│   │   ├── ExperienceSection.tsx         # Corizo (IIT Bombay Collab) 3-module timeline
│   │   ├── EducationSection.tsx          # Shoolini University B.Tech CSE AI & coursework
│   │   ├── AchievementsSection.tsx       # Anveshan Hackathon Round 2 with certificate modal
│   │   ├── InteractiveTerminal.tsx       # Recruiter diagnostic command-line sandbox
│   │   ├── ContactSection.tsx            # Formatted mailto generator & direct channels
│   │   ├── ArchitectureDiagram.tsx       # Interactive node & data pipeline visualizer
│   │   ├── ImageLightbox.tsx             # Fullscreen zoom modal for screenshots
│   │   ├── CertificateModal.tsx          # Clean authenticated credential lightbox
│   │   ├── BrandIcons.tsx                # High-fidelity GitHub & LinkedIn vector SVGs
│   │   └── Footer.tsx                    # System status, quick links & legal notice
│   ├── data/
│   │   ├── projects.ts                   # Structured verified project definitions
│   │   ├── skills.ts                     # Applied technology categories & qualitative ratings
│   │   ├── experience.ts                 # Internship timeline & explicit attribution
│   │   ├── education.ts                  # Academic distinction, CGPA & coursework
│   │   └── achievements.ts               # Hackathon credentials & participation records
│   └── types/
│       └── index.ts                      # Strict TypeScript interfaces
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or Node.js 20+ (Node v24 supported)
- npm 9+ or pnpm / yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/krishnakaushik1322007-ai/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```
The application will statically prerender all pages and start the production server with sub-millisecond response times.

---

## 🌐 Deploying to Vercel (1-Click)

The codebase is fully optimized for zero-configuration deployment on **Vercel**:

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete premium engineering portfolio for Krishna Kaushik"
   git remote add origin https://github.com/krishnakaushik1322007-ai/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Visit [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import `portfolio` from your GitHub account.
4. Framework Preset: **Next.js** (automatically detected).
5. Click **"Deploy"**.

---

## 🔒 Security & Content Integrity Standards

- **Zero Fake Statistics**: Every metric reflects actual development records (9.05 CGPA, 100/100 CivicLens tests, 510 QA suites in CampusOS, 41 states in Gyanix).
- **Accurate Institutional Attribution**: Corizo internship is explicitly designated as an online internship programme in academic collaboration with IIT Bombay.
- **Zero Exposed Secrets**: No hardcoded API keys or external server dependencies. Contact system leverages a resilient client-side mailto draft protocol.

---

## 📬 Contact & Author Information

**Krishna Kaushik**  
- **Email**: [krishnakaushik1322007@gmail.com](mailto:krishnakaushik1322007@gmail.com)  
- **Phone**: [+91 9650246706](tel:+919650246706)  
- **Location**: India (Open to Relocation & Remote Globally)  
- **LinkedIn**: [linkedin.com/in/krishna-kaushik-559239366](https://www.linkedin.com/in/krishna-kaushik-559239366/)  
- **GitHub**: [github.com/krishnakaushik1322007-ai](https://github.com/krishnakaushik1322007-ai)  
