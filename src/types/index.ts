export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: 'AI & LLMs' | 'Full-Stack & Platforms' | 'Systems & C++' | 'Generative AI';
  status: 'Flagship' | 'Pilot Research' | 'Hackathon Concept' | 'Production Prototype' | 'Rule-Based System';
  period: string;
  overview: string;
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  metrics?: { label: string; value: string; detail: string }[];
  architectureSummary: string;
  architectureNodes?: { id: string; label: string; desc: string; role: 'client' | 'gateway' | 'ai' | 'storage' | 'security' }[];
  screenshots?: { url: string; caption: string; tag: string }[];
  githubUrl?: string;
  liveUrl?: string;
  verificationNotes: string;
  myContribution: string[];
  isFlagship?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  tagline: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Working Knowledge';
    highlight?: boolean;
    description: string;
  }[];
}

export interface InternshipModule {
  id: string;
  number: number;
  title: string;
  duration: string;
  status: 'Ongoing' | 'Upcoming';
  focus: string[];
  description: string;
}

export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: number;
  expectedGraduation: number;
  cgpa: string;
  scale: string;
  coursework: string[];
  academicFocus: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  level: string;
  description: string;
  certificateAvailable: boolean;
  certificatePlaceholderText: string;
  tags: string[];
}
