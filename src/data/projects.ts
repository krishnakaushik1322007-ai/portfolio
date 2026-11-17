import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    slug: 'campusos-ai',
    title: 'CampusOS AI',
    subtitle: 'Role-Aware Institutional School Intelligence & Governance Platform',
    category: 'Full-Stack & Platforms',
    status: 'Flagship',
    period: '2025 – Present',
    isFlagship: true,
    overview:
      'CampusOS AI is an institutional operating platform designed to bridge information fragmentation across school administrations, teachers, students, parents, and operations teams. Built with role-aware security boundaries, grounded Gemini AI retrieval, and deterministic verification workflows.',
    problemStatement:
      'Modern educational institutions face severe data and communication fragmentation: academic records, attendance logs, notices, fee structures, and daily assignments exist across disparate portals and manual sheets. Concurrently, parents receive generic updates without contextual understanding, while teachers and administrators lack permission-isolated, auditable channels for institutional oversight.',
    solution:
      'Architected a unified five-persona operating system (Admin, Teacher, Student, Parent, Operations) powered by Next.js, FastAPI, Supabase PostgreSQL, and pgvector. Integrated Google Gemini with retrieval-grounded context, strict guardian-child relationship checks, and offline deterministic fallbacks to guarantee reliability without vendor lock-in.',
    keyFeatures: [
      'Five Role-Isolated Workspaces: Distinct views and permission models for Administrator, Teacher, Student, Parent, and Operations staff.',
      'Parent Sahayak AI: Grounded bilingual (English/Hindi) school day assistant providing contextual explanations directly linked to source citations.',
      'Verified Security Hardening: PBKDF2-HMAC-SHA256 password hashing, Refresh Token Rotation, Double-Submit Cookie CSRF protection, and route-level rate limiting.',
      'Curriculum & Attendance Intelligence: Class attendance workflows, timetable scheduling, and role-restricted academic record inspection.',
      'Evidence-First Trust Model: Built-in citations and labelled deterministic fallback mode ensuring no ungrounded hallucination in academic records.',
      'Extensive Automated QA: Validated with 510 automated test suites (487 passing, 23 skipped across unit, integration, and E2E browser flows).'
    ],
    technologies: [
      'Next.js 14/15',
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'Supabase',
      'PostgreSQL',
      'pgvector',
      'Google Gemini API',
      'RAG',
      'Tailwind CSS'
    ],
    metrics: [
      { label: 'QA Test Matrix', value: '510', detail: '487 passed, 23 skipped in development test suites' },
      { label: 'Institutional Roles', value: '5', detail: 'Admin, Teacher, Student, Parent, Operations' },
      { label: 'Explain Flow', value: '6 / 6', detail: 'Contextual Explain E2E tests verified' },
      { label: 'API Verification', value: '10 / 10', detail: 'Teacher-attendance endpoints validated' }
    ],
    architectureSummary:
      'Decoupled Next.js client communicating over TLS with FastAPI microservices and Supabase PostgreSQL. RAG queries route via pgvector embeddings to Google Gemini with strict guardian-to-child authorization filtering and human-in-the-loop administrative checkpoints.',
    architectureNodes: [
      { id: '1', label: 'Role-Based Web Client', desc: 'Next.js 14 App Router, dynamic RBAC views', role: 'client' },
      { id: '2', label: 'Security & Auth Gateway', desc: 'PBKDF2-HMAC-SHA256, Refresh Token Rotation, CSRF guards', role: 'security' },
      { id: '3', label: 'FastAPI Backend Engine', desc: 'High-concurrency async RESTful API, tenant isolation', role: 'gateway' },
      { id: '4', label: 'PostgreSQL + pgvector', desc: 'Relational student data & 768-dim semantic embeddings', role: 'storage' },
      { id: '5', label: 'Grounded Gemini RAG Layer', desc: 'Document chunk retrieval, evidence citation, fallback', role: 'ai' }
    ],
    screenshots: [
      { url: '/projects/campusos/00_platform_ecosystem.png', caption: 'CampusOS Platform Ecosystem & Unified Dashboard', tag: 'Overview' },
      { url: '/projects/campusos/01_administrator_workspace.png', caption: 'Administrator Governance & Oversight Console', tag: 'Admin' },
      { url: '/projects/campusos/02_teacher_workspace.png', caption: 'Teacher Academic Management & Attendance Portal', tag: 'Teacher' },
      { url: '/projects/campusos/03_student_portal.png', caption: 'Student Academic Schedule & Coursework Interface', tag: 'Student' },
      { url: '/projects/campusos/04_parent_my_child_today.png', caption: 'Parent "My Child Today" Daily Digest & Timeline', tag: 'Parent' },
      { url: '/projects/campusos/05_parent_sahayak_evidence.png', caption: 'Parent Sahayak Grounded AI Citation & Evidence View', tag: 'AI Engine' },
      { url: '/projects/campusos/06_school_operations.png', caption: 'School Operations & Scheduled Transport Timetable', tag: 'Operations' },
      { url: '/projects/campusos/09_platform_architecture_concept.png', caption: 'Platform Layer Architecture & Multi-Tenant Data Flow', tag: 'Architecture' }
    ],
    githubUrl: 'https://github.com/krishnakaushik1322007-ai',
    verificationNotes:
      'Architecture, test metrics (510 QA suite: 487 passed, 23 skipped), and role security are verified from local codebase and engineering documentation. Real school deployment or live GPS transport hardware are roadmap concepts and are explicitly not claimed as deployed.',
    myContribution: [
      'Engineered backend schema and database migrations for 5 institutional roles in Supabase PostgreSQL.',
      'Implemented PBKDF2-HMAC-SHA256 authentication pipeline, refresh token rotation, and double-submit CSRF cookie protection.',
      'Constructed the Parent Sahayak grounded RAG workflow using Google Gemini API with deterministic fallback responses.',
      'Designed and executed 500+ automated tests covering teacher attendance, parent child isolation, and contextual explain flows.'
    ]
  },
  {
    slug: 'civiclens',
    title: 'CivicLens',
    subtitle: 'Enterprise Civic Infrastructure Intelligence & Municipal Workflow Orchestration',
    category: 'AI & LLMs',
    status: 'Hackathon Concept',
    period: '2026',
    overview:
      'An enterprise civic intelligence platform engineered to eliminate 311 report inflation and municipal dispatcher paralysis by converting unstructured citizen complaints into verified, prioritized, and auditable municipal actions.',
    problemStatement:
      'When acute civic hazards occur (e.g. collapsed sewer lids or major road cavities), dozens of citizens post redundant photos and complaints across portals and social media. Municipal dispatchers are paralyzed by duplicated tickets, missing location data, and lack of objective severity scoring.',
    solution:
      'Engineered a spatial and AI ingestion pipeline that clusters duplicate citizen reports within 50m using PostGIS spatial indexing (`ST_DWithin`) and 384-dimensional text embeddings, while Google Gemini 2.5 Flash performs sub-500ms multimodal vision triage and computes an explainable 6-factor mathematical priority score.',
    keyFeatures: [
      '40.4% Duplicate Noise Consolidation: PostGIS spatial bounding combined with semantic embeddings merges multi-citizen submissions into unified canonical issues.',
      'Sub-500ms Multimodal Vision Triage: Google Gemini 2.5 Flash analyzes citizen photos to classify damage, assess hazards, and detect department routes with offline mock fallback.',
      'Deterministic 6-Factor Priority Scoring: Objective mathematical algorithm (0.0 to 1.0) evaluating physical severity, hazard risk, crowd velocity, school/hospital proximity, and SLA deadlines.',
      'Closed-Loop State Machine: Strict status transitions (`reported` → `triaged` → `dispatched` → `in_progress` → `resolved` → `verified`) requiring photographic evidence before closure.',
      '100% Automated Test Reliability: 100/100 passing tests across 12 test modules covering async database lifecycles, spatial clustering, and RBAC.',
      'Real-Time Spatial Analytics: Live SQL aggregation computing ward-level resolution velocity, departmental SLA compliance, and PostGIS density heatmaps.'
    ],
    technologies: [
      'FastAPI',
      'Python 3.11',
      'PostgreSQL 15+',
      'PostGIS 3.6',
      'Next.js 16 (Turbopack)',
      'TypeScript 5.0+',
      'Google Gemini 2.5 Flash',
      'Docker',
      'Pytest'
    ],
    metrics: [
      { label: 'Automated Tests', value: '100 / 100', detail: 'Passing across 12 test modules' },
      { label: 'Noise Reduction', value: '40.4%', detail: 'Consolidation of duplicate reports via PostGIS clustering' },
      { label: 'Vision Triage', value: '<500ms', detail: 'Multimodal damage & severity analysis latency' },
      { label: 'Priority Scoring', value: '6 Factors', detail: 'Deterministic mathematical audit-compliant formula' }
    ],
    architectureSummary:
      'Citizen photo & GPS payload ingested by FastAPI, triaged by Gemini 2.5 Flash for damage classification, consolidated by PostGIS spatial clustering (ST_DWithin <= 50m), prioritized via 6-factor score, and dispatched to field crews via closed-loop state machine.',
    architectureNodes: [
      { id: '1', label: 'Citizen Ingestion', desc: 'FastAPI async endpoint, EXIF/GPS extraction, 10MB payload validation', role: 'client' },
      { id: '2', label: 'Multimodal Vision Triage', desc: 'Gemini 2.5 Flash damage category & hazard severity extraction', role: 'ai' },
      { id: '3', label: 'PostGIS Spatial Engine', desc: 'ST_DWithin <= 50m clustering & dynamic centroid recalculation', role: 'storage' },
      { id: '4', label: 'Deterministic Scorer', desc: '6-factor mathematical formula evaluating safety, SLA, proximity', role: 'security' },
      { id: '5', label: 'Municipal Dispatch UI', desc: 'Next.js 16 dashboard with real-time ward analytics & ticket tracking', role: 'gateway' }
    ],
    screenshots: [
      { url: '/projects/civiclens/Gemini_Final_ Visual.png', caption: 'CivicLens AI Vision Analysis & Damage Classification Output', tag: 'AI Vision' },
      { url: '/projects/civiclens/Gemini_visual_01.png', caption: 'Incident Verification & Spatial Geometry Inspection', tag: 'Spatial Pipeline' }
    ],
    githubUrl: 'https://github.com/krishnakaushik1322007-ai',
    verificationNotes:
      'Developed as an advanced engineering hackathon prototype. Verified by 100 passing automated pytest suites and local architectural documentation. Real municipal deployment is not claimed.',
    myContribution: [
      'Architected the FastAPI async backend and PostGIS spatial clustering queries (`ST_DWithin`).',
      'Implemented the multimodal Gemini 2.5 Flash prompt orchestration and resilient offline fallback mocks.',
      'Authored the complete 100-test automated suite across 12 test modules covering spatial and RBAC operations.',
      'Engineered the mathematical 6-factor deterministic priority scoring formula.'
    ]
  },
  {
    slug: 'gyanix',
    title: 'Gyanix',
    subtitle: 'Curriculum-Aware Socratic AI Learning Assistant & Pedagogy Dataset Engine',
    category: 'AI & LLMs',
    status: 'Pilot Research',
    period: '2026',
    overview:
      'Gyanix is a curriculum-grounded Socratic learning engine designed around CBSE Class 11 and Class 12. Unlike generic conversational chatbots that spoon-feed answers, Gyanix guides students through concept discovery with rigorous pedagogical state tracking and strict curriculum provenance.',
    problemStatement:
      'General-purpose LLMs behave like generic text predictors: when asked a physics or math question, they provide completed solutions without diagnosing the student’s underlying misconceptions. Furthermore, they lack alignment with specific board curricula (such as CBSE/NCERT), leading to out-of-syllabus tangents and hallucinated derivations.',
    solution:
      'Designed a structured knowledge-graph and dialogue engine grounded in NCERT/CBSE curriculum standards. Built a comprehensive pilot on CBSE Class 12 Physics (Drift Velocity) featuring structured entity schemas, concept dependency graphs, source provenance tracking, and multi-turn Socratic diagnostic dialogues.',
    keyFeatures: [
      'Curriculum Provenance: Every concept and formula is indexed to official NCERT chapters, topics, and source references (e.g. CBSE 2026-27 syllabus).',
      'Socratic Dialogue State Machine: Manages multi-turn pedagogical dialogues with 41 tracked states, diagnosing student misunderstandings before providing hints.',
      'Strict Schema Validation: Validates concept entities, diagnostic questions, relationships, and student dialogues against custom JSON Schema definitions.',
      'Misconception Diagnostics: Identifies specific physics misconceptions (e.g. confusing drift velocity with thermal velocity) and triggers targeted cognitive interventions.',
      'Golden Review Dataset: Structured test, train, validation, and expert-review datasets ready for fine-tuning educational reasoning models.'
    ],
    technologies: [
      'Python',
      'JSON Schema',
      'Curriculum Provenance Engineering',
      'Pedagogical Graph Modeling',
      'Automated Schema Validation',
      'Google Gemini API'
    ],
    metrics: [
      { label: 'Structured Dialogues', value: '12', detail: 'In-depth multi-turn Socratic pilot interactions' },
      { label: 'Tracked State Transitions', value: '41', detail: 'Pedagogical state moves verified' },
      { label: 'Cross-Validation Errors', value: '0', detail: 'Automated schema validation across all entities' },
      { label: 'Curriculum Grounding', value: 'CBSE 12', detail: 'Physics Current Electricity (Drift Velocity)' }
    ],
    architectureSummary:
      'Hierarchical dataset engine containing entity schemas (concepts, topics, units), relation graphs (prerequisites, misconceptions), and dialogue state controllers that enforce Socratic questioning over direct answer generation.',
    architectureNodes: [
      { id: '1', label: 'Curriculum Knowledge Graph', desc: 'NCERT Class 12 Physics concept hierarchy & prerequisites', role: 'storage' },
      { id: '2', label: 'Schema Validation Engine', desc: 'Automated JSON Schema validator ensuring 0 cross-entity errors', role: 'security' },
      { id: '3', label: 'Socratic Dialogue Controller', desc: 'Multi-turn state machine managing hint progression & scaffolding', role: 'gateway' },
      { id: '4', label: 'Misconception Diagnostic', desc: 'Identifies conceptual traps (thermal vs drift velocity)', role: 'ai' },
      { id: '5', label: 'Golden Review Pipeline', desc: 'Curated dataset splits for model fine-tuning and expert audit', role: 'client' }
    ],
    githubUrl: 'https://github.com/krishnakaushik1322007-ai',
    verificationNotes:
      'Gyanix Class 12 Physics Drift Velocity pilot implementation is verified from the local dataset repository (12 dialogues, 41 state transitions, 0 schema errors). Full human expert pedagogical review remains in progress as documented.',
    myContribution: [
      'Designed the entity schemas for concepts, misconceptions, diagnostic questions, and Socratic dialogues.',
      'Engineered the CBSE Class 12 Physics Drift Velocity pilot dataset linking syllabus codes to concept nodes.',
      'Developed automated validation scripts verifying zero circular references or dangling entity relationships.',
      'Formulated the Socratic questioning state machine governing pedagogical guidance.'
    ]
  },
  {
    slug: 'agentic-rag-engine',
    title: 'Agentic RAG Engine',
    subtitle: 'Self-Reflective Retrieval-Augmented Generation with Grounded Verification',
    category: 'AI & LLMs',
    status: 'Production Prototype',
    period: '2026',
    overview:
      'An enterprise-grade, modular Agentic RAG engine engineered with semantic intent routing, hybrid dense/lexical vector retrieval, cross-interaction reranking, and self-reflective hallucination verification.',
    problemStatement:
      'Standard ("Naive") RAG systems blindly embed every query, retrieve top-k chunks regardless of relevance, and produce unchecked outputs prone to hallucination, citation mismatch, and out-of-domain degradation.',
    solution:
      'Architected a resilient multi-stage pipeline in Python and FastAPI. The engine classifies query intent via semantic routing, combines dense vector embeddings with BM25 lexical search, reranks candidate documents with cross-encoders, and performs a dedicated self-reflection verification step before serving the final answer.',
    keyFeatures: [
      'Semantic Intent Routing: Dynamically classifies incoming queries to determine retrieval strategies (vector search, web lookup, or direct response).',
      'Hybrid Dense & Lexical Retrieval: Merges FAISS/vector similarity scores with BM25 keyword matching for optimal recall on domain-specific terminology.',
      'Cross-Interaction Reranking: Re-scores top retrieved passages with high-precision cross-encoder models to filter out semantic noise.',
      'Grounded Hallucination Verification: Post-generation validation stage that evaluates answer faithfulness against retrieved source passages.',
      'Dockerized Microservice Architecture: Packaged with production Dockerfile and verified with 8 automated test suites.'
    ],
    technologies: [
      'Python 3.10/3.11',
      'FastAPI',
      'LangChain',
      'FAISS',
      'Cross-Encoders',
      'BM25',
      'Docker',
      'Pytest'
    ],
    metrics: [
      { label: 'Automated Tests', value: '8 / 8', detail: 'All pytest test suites passing' },
      { label: 'Retrieval Mode', value: 'Hybrid', detail: 'Dense vector embeddings + BM25 lexical search' },
      { label: 'Containerization', value: 'Docker', detail: 'Production-ready container build' },
      { label: 'Verification', value: 'Self-Reflect', detail: 'Automated hallucination check before output' }
    ],
    architectureSummary:
      'Query → Semantic Intent Router → Hybrid Retrieval (FAISS + BM25) → Cross-Encoder Reranker → Grounded LLM Generation → Verification & Citation Gate → Client Response.',
    architectureNodes: [
      { id: '1', label: 'Semantic Router', desc: 'Analyzes query complexity and routes to specialized retrieval chains', role: 'gateway' },
      { id: '2', label: 'Hybrid Retriever', desc: 'Combines FAISS vector embeddings with BM25 lexical keyword matching', role: 'storage' },
      { id: '3', label: 'Reranker Engine', desc: 'Cross-encoder scoring to prioritize high-relevance source chunks', role: 'ai' },
      { id: '4', label: 'Synthesis Generator', desc: 'LLM synthesis incorporating strictly bounded context tokens', role: 'ai' },
      { id: '5', label: 'Hallucination Verifier', desc: 'Faithfulness evaluation comparing claims to source passages', role: 'security' }
    ],
    githubUrl: 'https://github.com/krishnakaushik1322007-ai/Agentic-RAG-Engine',
    verificationNotes:
      'Public GitHub repository verified. Source code includes FastAPI endpoints, hybrid retriever, reranking stage, and 8 passing tests.',
    myContribution: [
      'Architected the entire pipeline from scratch in Python and FastAPI.',
      'Implemented hybrid FAISS + BM25 retrieval fusion and cross-encoder reranking logic.',
      'Constructed the grounded verification step to detect hallucinated statements.',
      'Configured Docker build environment and authored automated test suite.'
    ]
  },
  {
    slug: 'zeneth-crop-expert',
    title: 'ZENETH – Crop Disease Expert System',
    subtitle: 'High-Performance C++ Rule-Based Agricultural Diagnosis Engine',
    category: 'Systems & C++',
    status: 'Rule-Based System',
    period: '2026',
    overview:
      'ZENETH is a deterministic, high-performance C++ rule-based expert system developed to diagnose crop diseases, calculate severity levels, and provide actionable remedies and prevention protocols across 9 essential crops.',
    problemStatement:
      'Farmers and agricultural field agents often lack immediate internet access or reliable cloud connectivity when assessing infected crops in rural environments. Heavy deep learning models are often impractical for offline embedded devices or low-power field terminals.',
    solution:
      'Built a fast, deterministic C++ expert system using Object-Oriented Programming and Standard Template Library (STL). Features an extensible KnowledgeBase that matches symptom keywords against multi-attribute disease rules with case-insensitive tokenization and diagnosis tracking.',
    keyFeatures: [
      'Multi-Crop Knowledge Base: Built-in rule dictionary supporting 9 major agricultural crops (Wheat, Rice, Maize, Cotton, Potato, Tomato, Sugarcane, Mustard, Gram).',
      'Symptom & Keyword Matching: Fast tokenization and substring matching mapping user-described symptoms to pathogen profiles.',
      'Severity & Remediation Guidance: Classifies severity (Mild, Moderate, Severe, Critical) and outputs actionable chemical/organic treatments and preventive cultural practices.',
      'Interactive Console Shell: Built-in command interpreter with `help`, crop listing, known disease querying, and session diagnostics tracking.',
      'Zero Cloud Dependency: Pure native C++ executable requiring zero external libraries or active network connectivity.'
    ],
    technologies: [
      'C++',
      'Object-Oriented Programming (OOP)',
      'Standard Template Library (STL)',
      'Data Structures',
      'Rule-Based Knowledge Representation',
      'Algorithm Design'
    ],
    metrics: [
      { label: 'Supported Crops', value: '9 Crops', detail: 'Wheat, Rice, Maize, Cotton, Potato, Tomato, Sugarcane, Mustard, Gram' },
      { label: 'Runtime Dependency', value: '0', detail: 'Native binary execution with zero cloud or GPU overhead' },
      { label: 'Diagnostic Speed', value: '<1ms', detail: 'Sub-millisecond memory-resident knowledge search' },
      { label: 'Architecture', value: 'C++ STL', detail: 'Object-oriented vectors, structs, and string algorithms' }
    ],
    architectureSummary:
      'User symptom text → Tokenizer & normalizer → KnowledgeBase rule scanner → Crop identifier & disease matcher → Treatment & Prevention output formatter.',
    architectureNodes: [
      { id: '1', label: 'CLI Input Shell', desc: 'Case-insensitive command and symptom parser in C++', role: 'client' },
      { id: '2', label: 'Symptom Tokenizer', desc: 'String transformation & keyword extraction algorithms', role: 'gateway' },
      { id: '3', label: 'KnowledgeBase Engine', desc: 'Structured STL disease rule registry across 9 crops', role: 'storage' },
      { id: '4', label: 'Diagnostic Evaluator', desc: 'Matches symptoms to disease severity, treatment, and prevention', role: 'security' }
    ],
    githubUrl: 'https://github.com/krishnakaushik1322007-ai/Cpp-Project-build-2nd-Sem',
    verificationNotes:
      'Verified directly against local C++ codebase (`chatbot.cpp`, `KnowledgeBase.h`, `Disease.h`) and public GitHub repository `Cpp-Project-build-2nd-Sem`.',
    myContribution: [
      'Designed the object-oriented C++ classes (`Disease`, `KnowledgeBase`) and STL data containers.',
      'Compiled and structured disease profiles, symptoms, treatments, and prevention rules across 9 crops.',
      'Implemented token matching algorithms and session tracking diagnostics in `chatbot.cpp`.',
      'Built native standalone executables optimized for resource-constrained environments.'
    ]
  },
  {
    slug: 'financial-advisor-ai',
    title: 'Financial Research Assistant AI',
    subtitle: 'RAG-Powered Financial Document Retrieval & Analytical Intelligence',
    category: 'AI & LLMs',
    status: 'Production Prototype',
    period: '2025 – 2026',
    overview:
      'A retrieval-augmented financial intelligence assistant engineered to parse balance sheets, quarterly reports, and corporate filings, enabling analysts to extract quantitative insights and verify underlying financial claims.',
    problemStatement:
      'Corporate 10-K filings, annual statements, and investor disclosures contain hundreds of dense pages. Analysts spend extensive hours locating footnote disclosures, cash-flow reconciliation, and revenue segment breakdowns.',
    solution:
      'Engineered a RAG-based analytical research platform using Python, Streamlit, LangChain, FAISS vector embeddings, and Google Generative AI, complemented by Plotly interactive charts for financial metrics visualization.',
    keyFeatures: [
      'Financial Document Parsing: Ingests earnings reports, PDFs, and financial statements with chunking optimized for numerical tables.',
      'Vector Semantic Search: Uses FAISS vector indexing to quickly retrieve relevant disclosures and footnote contexts.',
      'Contextual Q&A: Synthesizes plain-language financial answers grounded in cited paragraphs from the uploaded documents.',
      'Interactive Financial Visualizations: Plots balance sheet trends and revenue ratios using Plotly interactive charts.',
      'Clear Compliance Boundaries: Designed strictly as an analytical research assistant, with built-in disclaimers distinguishing research insights from certified investment advice.'
    ],
    technologies: [
      'Python',
      'Streamlit',
      'LangChain',
      'FAISS',
      'Google Generative AI',
      'Plotly',
      'Pandas'
    ],
    metrics: [
      { label: 'Role Framing', value: 'Research', detail: 'Analytical document research tool, not certified investment advice' },
      { label: 'Retrieval Engine', value: 'FAISS', detail: 'High-speed local dense vector similarity search' },
      { label: 'Visualization', value: 'Plotly', detail: 'Interactive financial metrics charting' }
    ],
    architectureSummary:
      'Financial Document Ingestion → Chunking & Embedding → FAISS Vector Store → LangChain Query Retriever → Google Generative AI Synthesis → Streamlit & Plotly Analytical UI.',
    architectureNodes: [
      { id: '1', label: 'Document Ingestion', desc: 'Parses PDF & financial tables with tabular preservation', role: 'client' },
      { id: '2', label: 'FAISS Vector Index', desc: 'Vector embeddings representing dense semantic document chunks', role: 'storage' },
      { id: '3', label: 'LangChain Retriever', desc: 'Orchestrates similarity search and context window assembly', role: 'gateway' },
      { id: '4', label: 'Generative AI Synthesis', desc: 'Google Gemini generates grounded financial explanations', role: 'ai' },
      { id: '5', label: 'Interactive Dashboard', desc: 'Streamlit UI with Plotly charts and source citations', role: 'security' }
    ],
    githubUrl: 'https://github.com/krishnakaushik1322007-ai',
    verificationNotes:
      'Developed as an applied generative AI financial analysis project. Explicitly framed as an analytical research assistant and document retrieval tool.',
    myContribution: [
      'Built the Streamlit analytical interface and integrated Plotly financial data visualizations.',
      'Implemented document chunking and FAISS vector similarity search using LangChain.',
      'Integrated Google Generative AI API with grounding prompts to minimize numeric hallucinations.'
    ]
  },
  {
    slug: 'generative-ai-suite',
    title: 'Generative AI & Neural Modeling Suite',
    subtitle: 'Deep Learning Architectures for Sequence Summarization & Autoencoding',
    category: 'Generative AI',
    status: 'Production Prototype',
    period: '2026',
    overview:
      'An applied deep learning exploration suite covering sequence-to-sequence transformer modeling for abstractive text summarization and deep convolutional autoencoders for image latent representation and denoising.',
    problemStatement:
      'Understanding foundational neural network architectures requires going beyond black-box APIs to explore transformer attention mechanisms, encoder-decoder representations, and convolutional latent manifolds.',
    solution:
      'Implemented neural model pipelines using PyTorch, TensorFlow/Keras, and Hugging Face Transformers. Explored abstractive text summarization via fine-tuned BART and developed convolutional autoencoders for noise reduction and image feature reconstruction.',
    keyFeatures: [
      'BART Sequence-to-Sequence Modeling: Abstractive summarization generating concise summaries from complex technical text.',
      'Deep Convolutional Autoencoders: Multi-layer encoder-decoder architectures with bottleneck latent spaces for image denoising.',
      'Comparative Framework Analysis: Benchmarking PyTorch and TensorFlow implementations for training stability and inference latency.',
      'Evaluation Metrics: Measuring ROUGE score distributions for text summarization and MSE/PSNR for autoencoder reconstruction.'
    ],
    technologies: [
      'Python',
      'PyTorch',
      'TensorFlow / Keras',
      'Hugging Face Transformers',
      'BART',
      'Convolutional Neural Networks'
    ],
    metrics: [
      { label: 'Architectures', value: '2 Classes', detail: 'Seq2Seq Transformers + Deep Convolutional Autoencoders' },
      { label: 'Frameworks', value: 'Dual', detail: 'PyTorch and TensorFlow / Keras implementations' },
      { label: 'Repository', value: 'Verified', detail: 'Public GitHub open-source code' }
    ],
    architectureSummary:
      'Transformer Encoder-Decoder for text summarization alongside symmetrical Convolutional Encoder-Decoder for spatial latent feature reconstruction.',
    architectureNodes: [
      { id: '1', label: 'Transformer Attention', desc: 'Bidirectional encoder and autoregressive decoder (BART)', role: 'ai' },
      { id: '2', label: 'Convolutional Autoencoder', desc: 'Spatial downsampling via Conv2D to compressed latent bottleneck', role: 'gateway' },
      { id: '3', label: 'Latent Deconvolution', desc: 'Transpose convolutions reconstructing denoised representations', role: 'storage' }
    ],
    githubUrl: 'https://github.com/krishnakaushik1322007-ai/Generative-AI',
    verificationNotes:
      'Verified directly against public GitHub repository `Generative-AI`.',
    myContribution: [
      'Configured sequence-to-sequence training pipelines using Hugging Face Transformers.',
      'Constructed deep convolutional autoencoder layers in TensorFlow/Keras for image reconstruction.',
      'Documented comparative benchmarks and architectural evaluation.'
    ]
  }
];
