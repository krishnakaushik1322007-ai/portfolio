import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-genai',
    name: 'Artificial Intelligence & GenAI',
    tagline: 'Grounded intelligence architectures, LLM reasoning, and retrieval systems',
    skills: [
      {
        name: 'Generative AI & LLMs',
        level: 'Proficient',
        highlight: true,
        description: 'Applied large language model architectures, instruction tuning, structured outputs, and agentic workflows.'
      },
      {
        name: 'Retrieval-Augmented Generation (RAG)',
        level: 'Advanced',
        highlight: true,
        description: 'Self-reflective RAG, semantic intent routing, hybrid search, reranking, and citation-grounded hallucination checks.'
      },
      {
        name: 'Google Gemini API',
        level: 'Advanced',
        highlight: true,
        description: 'Multimodal vision triage (Gemini 2.5 Flash), bilingual explanation engines, and structured JSON generation.'
      },
      {
        name: 'Vector Embeddings & Search',
        level: 'Proficient',
        highlight: true,
        description: 'Dense vector representation, cosine similarity indexing, and text chunking strategies.'
      },
      {
        name: 'LangChain & Orchestration',
        level: 'Proficient',
        highlight: false,
        description: 'Retrieval chains, prompt composition, document splitters, and vector store integration.'
      },
      {
        name: 'FAISS',
        level: 'Proficient',
        highlight: false,
        description: 'Local high-performance vector indexing and nearest-neighbor search for analytical research.'
      },
      {
        name: 'Prompt Engineering',
        level: 'Advanced',
        highlight: false,
        description: 'Few-shot prompting, chain-of-thought elicitation, structured JSON schema enforcement, and role simulation.'
      }
    ]
  },
  {
    id: 'programming',
    name: 'Core Programming',
    tagline: 'Algorithmic foundations, systems programming, and modern scripting',
    skills: [
      {
        name: 'Python',
        level: 'Advanced',
        highlight: true,
        description: 'Primary engineering language for AI pipelines, FastAPI microservices, automated validation, and data analysis.'
      },
      {
        name: 'C++',
        level: 'Proficient',
        highlight: true,
        description: 'Object-oriented systems, Standard Template Library (STL), memory management, and deterministic rule engines (ZENETH).'
      },
      {
        name: 'C',
        level: 'Working Knowledge',
        highlight: false,
        description: 'Foundational systems programming, pointers, low-level data structures, and computer architecture basics.'
      },
      {
        name: 'JavaScript / TypeScript',
        level: 'Advanced',
        highlight: true,
        description: 'Modern ES6+, strict TypeScript interfaces, async runtime architectures, and full-stack web platforms.'
      },
      {
        name: 'SQL',
        level: 'Proficient',
        highlight: false,
        description: 'Relational data modeling, spatial queries (PostGIS), vector indexing (pgvector), and complex join optimizations.'
      }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    tagline: 'High-performance web applications with refined, accessible UI systems',
    skills: [
      {
        name: 'Next.js (App Router)',
        level: 'Advanced',
        highlight: true,
        description: 'Server Components, Turbopack, dynamic routing, metadata optimization, and enterprise dashboard layouts.'
      },
      {
        name: 'React',
        level: 'Advanced',
        highlight: true,
        description: 'Custom hooks, state management, component lifecycle, concurrent UI rendering, and glassmorphism styling.'
      },
      {
        name: 'TypeScript',
        level: 'Proficient',
        highlight: true,
        description: 'Strict type safety, generic interfaces, API contract modeling, and zero-runtime error discipline.'
      },
      {
        name: 'Tailwind CSS',
        level: 'Advanced',
        highlight: false,
        description: 'Design systems, responsive mobile-first layouts, modern dark themes, and custom animations.'
      },
      {
        name: 'HTML5 & Modern CSS',
        level: 'Proficient',
        highlight: false,
        description: 'Semantic markup, accessibility (a11y), responsive container queries, and CSS grid layouts.'
      }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Architecture',
    tagline: 'Scalable RESTful microservices, role-based access control, and API security',
    skills: [
      {
        name: 'FastAPI (Python)',
        level: 'Advanced',
        highlight: true,
        description: 'High-performance async APIs, Pydantic request validation, Swagger docs, and background processing.'
      },
      {
        name: 'Node.js & Express.js',
        level: 'Proficient',
        highlight: false,
        description: 'Event-driven server logic, middleware chains, REST APIs, and authentication pipelines.'
      },
      {
        name: 'Security & Auth Hardening',
        level: 'Proficient',
        highlight: true,
        description: 'PBKDF2-HMAC-SHA256, Refresh Token Rotation, Double-Submit Cookie CSRF protection, and route rate limiting.'
      },
      {
        name: 'Role-Based Access Control (RBAC)',
        level: 'Advanced',
        highlight: true,
        description: 'Multi-tenant authorization schemas, guardian-child isolation boundaries, and audit logging.'
      }
    ]
  },
  {
    id: 'databases',
    name: 'Databases & Spatial Storage',
    tagline: 'Relational integrity, vector similarity engines, and geospatial indexing',
    skills: [
      {
        name: 'PostgreSQL',
        level: 'Proficient',
        highlight: true,
        description: 'Primary relational store, indexing strategies, ACID guarantees, and database schema migrations.'
      },
      {
        name: 'Supabase',
        level: 'Proficient',
        highlight: true,
        description: 'Managed PostgreSQL, authentication integration, Row-Level Security (RLS) policies, and storage.'
      },
      {
        name: 'pgvector',
        level: 'Proficient',
        highlight: true,
        description: 'Storing and querying dense 768-dimensional AI embeddings with fast cosine similarity inside Postgres.'
      },
      {
        name: 'PostGIS',
        level: 'Proficient',
        highlight: true,
        description: 'Geospatial queries, bounding clusters, and proximity deduplication (`ST_DWithin`) in CivicLens.'
      },
      {
        name: 'MySQL',
        level: 'Working Knowledge',
        highlight: false,
        description: 'Relational schema design, normalization, foreign key constraints, and standard query operations.'
      }
    ]
  },
  {
    id: 'tools',
    name: 'Developer Tools & Platforms',
    tagline: 'Productive development workflows, testing suites, and data visualization',
    skills: [
      {
        name: 'Git & GitHub',
        level: 'Advanced',
        highlight: true,
        description: 'Branch management, code reviews, automated CI/CD concepts, and public open-source project maintenance.'
      },
      {
        name: 'Docker',
        level: 'Working Knowledge',
        highlight: false,
        description: 'Multi-stage container builds, microservice isolation, and reproducible execution environments.'
      },
      {
        name: 'Streamlit & Plotly',
        level: 'Proficient',
        highlight: false,
        description: 'Rapid analytical dashboards, interactive financial metrics, and reactive data exploration apps.'
      },
      {
        name: 'JSON Schema Validation',
        level: 'Proficient',
        highlight: false,
        description: 'Strict schema specification, automated cross-validation, and entity provenance pipelines (Gyanix).'
      },
      {
        name: 'Pytest & Automated QA',
        level: 'Advanced',
        highlight: true,
        description: 'Comprehensive test suites (100-test CivicLens suite, 510-test CampusOS development matrix).'
      }
    ]
  }
];
