import {
  Project,
  Service,
  ProcessStep,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  TechCategory,
  PricingTier,
  FaqItem,
  ThemeColorPreset
} from '../types';

export const PERSONAL_INFO = {
  name: 'Arif Ahmad Khan',
  shortName: 'Arif Khan',
  monogram: 'AK',
  role: 'AI Engineer',
  tagline: 'AI Engineer | Agentic AI & RAG Systems',
  headline: 'Engineering Autonomous Agentic Systems and Enterprise RAG Architectures',
  shortBio: 'AI Engineer specializing in agentic systems, Retrieval-Augmented Generation, and large language model backends. Experienced in deploying production multi-agent architectures with LangGraph, scalable FastAPI services, and enterprise process automation on Microsoft Azure and Power Platform.',
  extendedBio: 'AI Engineer specializing in agentic systems, retrieval-augmented generation (RAG), and large language model application backends. Designs and deploys production multi-agent architectures using LangGraph and LangChain, with scalable FastAPI services grounded in vector search. Has independently built and deployed seven end-to-end agentic AI systems spanning computer vision, legal document analysis, sales automation, conversational ordering, and IT operations, several of which operate autonomously in live production environments.',
  researchInterests: 'Agentic reasoning and long-horizon autonomy in large language models, including planning, tool use, and self-correction across extended task execution; memory architectures and context management for persistent, stateful agents; multi-agent coordination protocols and emergent collaborative behavior; inference-time reasoning and test-time compute scaling; evaluation and interpretability of agentic systems, with emphasis on verifiable reasoning traces, reward model alignment, and reliability under real-world deployment conditions.',
  location: 'Pakistan',
  status: 'Available for Selected Projects',
  year: '2026',
  email: 'ahmadarif238@gmail.com',
  phone: '+92 343 8992587',
  whatsappNumber: '923438992587',
  whatsappUrl: 'https://wa.me/923438992587?text=Hello%20Arif,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20AI%20engineering%20engagement.',
  githubUrl: 'https://github.com/ahmadarif238',
  linkedinUrl: 'https://www.linkedin.com/in/arif-a-0b853580',
  avatarUrl: '/portrait.webp',
  avatarSmallUrl: '/portrait-sm.webp',
  avatarFallbackUrl: '/portrait.jpg',
  completedProjects: '7+ Autonomous Systems',
  hoursSavedWeekly: '60% Research Time Cut'
};

/** Headline numbers for the About section. Every one traces back to a line in the resume. */
export const ABOUT_STATS = [
  { value: '7+', label: 'Production AI Systems Deployed' },
  { value: '92 FPS', label: 'Computer Vision Edge Inference' },
  { value: '60%', label: 'Research and Processing Time Cut' },
  { value: '3.65', label: 'BS Software Engineering GPA' }
];

export const THEME_COLOR_PRESETS: ThemeColorPreset[] = [
  {
    id: 'green',
    name: 'Davies Green',
    primary: '#07C42C',
    hover: '#09db32',
    rgb: '7, 196, 44'
  },
  {
    id: 'gold',
    name: 'Solar Yellow',
    primary: '#f8c736',
    hover: '#fad257',
    rgb: '248, 199, 54'
  },
  {
    id: 'orange',
    name: 'Flame Orange',
    primary: '#f5772e',
    hover: '#f78a48',
    rgb: '245, 119, 46'
  },
  {
    id: 'cyan',
    name: 'Sky Cyan',
    primary: '#2ac6f8',
    hover: '#4ad0f9',
    rgb: '42, 198, 248'
  },
  {
    id: 'lime',
    name: 'Vivid Lime',
    primary: '#8dca37',
    hover: '#9dd74b',
    rgb: '141, 202, 55'
  },
  {
    id: 'purple',
    name: 'Deep Purple',
    primary: '#6c34fa',
    hover: '#7e4dfb',
    rgb: '108, 52, 250'
  },
  {
    id: 'red',
    name: 'Coral Red',
    primary: '#f14444',
    hover: '#f35d5d',
    rgb: '241, 68, 68'
  },
  {
    id: 'pink',
    name: 'Hot Pink',
    primary: '#e14392',
    hover: '#e65fa3',
    rgb: '225, 67, 146'
  }
];

export const MARQUEE_ITEMS = [
  'Multi-Agent Systems',
  'LangGraph & LangChain',
  'Enterprise RAG Architectures',
  'FastAPI Microservices',
  'Edge Computer Vision at 92 FPS',
  'Microsoft Power Platform & Azure',
  'Zero-Hallucination Grounding',
  'Autonomous Workflow Pipelines',
  'Vector Search & Pinecone',
  'React 19 & TypeScript'
];

export const PROJECTS: Project[] = [
  {
    id: 'spatial-ai-vision-assistant',
    title: 'Spatial AI Vision Assistant',
    tagline: 'Real-Time Hazard Detection and Edge Scene Reasoning for the Visually Impaired',
    category: 'Computer Vision',
    description: 'A real-time hazard detection pipeline combining quantized YOLO architectures with Depth Anything V2 INT8 ONNX monocular depth estimation to detect obstacles and ground drop-offs across left, center, and right spatial corridors. Optimized for CPU inference using OpenVINO and ONNX Runtime to reach 92 FPS with sub-15ms latency over WebSockets. Deployed as a WCAG AAA compliant Progressive Web App with Groq scene reasoning and a specialized Silent Until Danger alert engine.',
    problem: 'Visual assistance tools require sub-second latency to prevent real-world collisions, but executing depth estimation alongside multi-class object detection on consumer edge hardware typically causes severe latency, device overheating, and excessive false alerts.',
    solution: 'Engineered an asynchronous edge-optimized inference pipeline pairing INT8 quantized models with OpenVINO acceleration, streaming video frames over WebSockets at 92 FPS and activating scene reasoning alerts strictly when obstacles enter immediate navigation corridors.',
    metrics: [
      { value: '92 FPS', label: 'CPU Inference Speed' },
      { value: '<15 ms', label: 'End-to-End Latency' },
      { value: 'WCAG AAA', label: 'Accessibility Standard' }
    ],
    workflow: [
      'Capture video streams directly on client hardware via high-throughput WebSockets.',
      'Execute quantized YOLO obstacle detection and Depth Anything V2 monocular depth estimation in parallel.',
      'Segment obstacles into spatial navigation corridors and detect elevation drop-offs.',
      'Trigger Groq scene reasoning and contextual audio guidance via the Silent Until Danger heuristic.'
    ],
    architecture: [
      { id: 'cam', label: 'Camera Input / WebSockets', type: 'input', color: '#10b981' },
      { id: 'yolo', label: 'Quantized YOLO Detection', type: 'process', color: '#0ea5ea' },
      { id: 'depth', label: 'Depth Anything V2 INT8', type: 'process', color: '#0ea5ea' },
      { id: 'corridor', label: 'Spatial Corridor Mapper', type: 'agent', color: '#0bd1d1' },
      { id: 'groq', label: 'Groq Scene Reasoning', type: 'agent', color: '#0ea5ea' },
      { id: 'alert', label: 'Audio Alert Engine', type: 'output', color: '#10b981' }
    ],
    features: [
      'Sub-15ms inference latency at 92 FPS using OpenVINO and ONNX Runtime',
      'Dual-model architecture with monocular depth estimation and spatial corridor hazard mapping',
      'WCAG AAA accessible progressive web app interface',
      'Contextual Groq LLM scene reasoning for complex environment interpretation'
    ],
    techStack: ['Python', 'OpenCV', 'OpenVINO', 'ONNX Runtime', 'FastAPI', 'Groq', 'WebSockets', 'React'],
    liveUrl: 'https://ai-vision-assistant-fyp.vercel.app',
    githubUrl: 'https://github.com/ahmadarif238/ai-vision-assistant-fyp',
    stats: 'Final Year Engineering Project',
    featured: true
  },
  {
    id: 'contract-iq',
    title: 'ContractIQ: Legal Agreement Analysis',
    tagline: 'Autonomous Multi-Agent System with Zero-Hallucination Legal Grounding',
    category: 'AI Agents',
    description: 'An autonomous multi-agent system engineered with a zero-hallucination architecture to analyze, verify, and benchmark complex legal agreements. Specialized sub-agents decouple risk evaluation from clause and lifecycle extraction, ensuring every output remains strictly traceable to source paragraphs and substantially reducing false positives.',
    problem: 'Legal professionals expend significant time manually verifying clauses across large document repositories. Comparing counterparty drafts against standard playbooks is error-prone, while standard language models frequently hallucinate clauses, dates, and liability caps.',
    solution: 'Constructed an agentic workflow featuring Vault Intelligence for high-dimensional semantic search, an automated Benchmarking Agent for side-by-side deviations, and a deterministic Factual Enforcer layer that validates all claims against source citations before presentation.',
    metrics: [
      { value: '100%', label: 'Traceable Citations' },
      { value: '4', label: 'Specialized Agent Stages' },
      { value: '<2s', label: 'Query Response Latency' }
    ],
    workflow: [
      'Ingest and chunk complex legal contracts into Pinecone Vector Store.',
      'Execute high-recall semantic search across indexed agreement repositories.',
      'Conduct side-by-side clause benchmarking against predefined risk playbooks.',
      'Validate outputs through a deterministic Factual Enforcer with clickable line-item citations.'
    ],
    architecture: [
      { id: 'upload', label: 'Document Ingestion', type: 'input', color: '#6366f1' },
      { id: 'indexer', label: 'Pinecone Vector Indexer', type: 'process', color: '#8b5cf6' },
      { id: 'vault', label: 'Vault Intelligence Agent', type: 'agent', color: '#6366f1' },
      { id: 'benchmark', label: 'Benchmarking Agent', type: 'agent', color: '#a855f7' },
      { id: 'enforcer', label: 'Factual Enforcer Layer', type: 'agent', color: '#22c55e' },
      { id: 'output', label: 'Verified Report', type: 'output', color: '#10b981' }
    ],
    features: [
      'Vault Intelligence semantic retrieval at scale',
      'Side-by-side contract benchmarking and deviation scoring',
      'Zero-hallucination architecture with verifiable reasoning traces',
      'Direct line-level paragraph citations'
    ],
    techStack: ['LangGraph', 'FastAPI', 'Pinecone', 'Cerebras', 'React', 'Docker'],
    liveUrl: 'https://contract-iq-six.vercel.app',
    githubUrl: 'https://github.com/ahmadarif238/contract-iq',
    stats: 'Zero-Hallucination Architecture',
    featured: true
  },
  {
    id: 'agentcraft-lead-agent',
    title: 'Autonomous Client-Hunting Agent',
    tagline: 'Production Pipeline Automating Prospect Discovery, Analysis, and Outreach',
    category: 'Automation',
    description: 'A production autonomous agent engineered for AgentCraft AI Automations. The system extracts business listings from Google Maps across target US commercial sectors, evaluates each target web property to diagnose technical and operational automation deficits, drafts contextually grounded personalized outreach, and dispatches real-time alerts to decision-makers upon prospect engagement.',
    problem: 'Target identification, individualized capability auditing, and drafting bespoke outreach across thousands of commercial prospects requires extensive manual labor, creating a severe operational bottleneck in business development.',
    solution: 'Built an autonomous multi-stage pipeline coordinating web scraping, LLM-based technical gap evaluation, dynamic email personalization, and automated follow-up cadences with instant human-in-the-loop escalation upon prospect response.',
    metrics: [
      { value: '~80', label: 'Personalized Dispatches / Day' },
      { value: 'Daily', label: 'Live Production Operation' },
      { value: 'Instant', label: 'Reply Escalation' }
    ],
    workflow: [
      'Scrape Google Maps listings across commercial target sectors.',
      'Extract target websites and execute structured technical audits for automation opportunities.',
      'Generate context-aware personalized outreach and structured follow-up cadences.',
      'Persist contact records and route replies directly to decision-maker communication channels.'
    ],
    architecture: [
      { id: 'maps', label: 'Google Maps Pipeline', type: 'input', color: '#0ea5ea' },
      { id: 'site', label: 'Web Scraper & Parser', type: 'process', color: '#0ea5ea' },
      { id: 'audit', label: 'Opportunity Evaluator Agent', type: 'agent', color: '#0bd1d1' },
      { id: 'writer', label: 'Personalization Agent', type: 'agent', color: '#0ea5ea' },
      { id: 'crm', label: 'Data Persistence Layer', type: 'process', color: '#0ea5ea' },
      { id: 'alert', label: 'Decision-Maker Alert Router', type: 'output', color: '#10b981' }
    ],
    features: [
      'Targeted geographical and vertical business prospecting',
      'Automated site audit for technical and conversational deficits',
      'Context-grounded LLM email generation and scheduling',
      'Immediate reply notification and CRM synchronization'
    ],
    techStack: ['Python', 'FastAPI', 'BeautifulSoup', 'LLM Personalization', 'Email Automation', 'PostgreSQL'],
    liveUrl: null,
    githubUrl: 'https://github.com/ahmadarif238',
    stats: 'Primary Acquisition Channel',
    featured: true
  },
  {
    id: 'whatsapp-ordering-agent',
    title: 'WhatsApp Conversational Ordering Agent',
    tagline: 'Production Conversational Ordering System with Voice Transcription and Operations Dashboard',
    category: 'Chatbots',
    description: 'A production conversational agent deployed for a high-volume food service business. The system maintains complete domain knowledge across menus, dynamic pricing, and promotional media, conversing natively with customers across English, Urdu, and Roman Urdu. Features automated voice-note transcription through to complete order execution, paired with a companion React and Node.js operations dashboard for live kitchen confirmation and real-time customer status messaging.',
    problem: 'High-volume incoming orders across voice messages and fragmented multilingual text chats created severe manual bottlenecks during peak operating hours, leading to delayed order confirmation and fulfillment errors.',
    solution: 'Constructed an end-to-end conversational pipeline on the WhatsApp Business API integrating automated speech-to-text transcription, context-aware menu reasoning, and an operational React/Node.js fulfillment dashboard with real-time customer push updates.',
    metrics: [
      { value: '3', label: 'Languages Supported' },
      { value: 'Voice-to-Order', label: 'Audio Transcription' },
      { value: 'Real-time', label: 'Kitchen Synchronization' }
    ],
    workflow: [
      'Ingest customer text messages and audio voice notes via WhatsApp Business Webhooks.',
      'Transcribe voice notes to text and parse customer intent against menu catalog data.',
      'Calculate line-item pricing, confirm delivery details, and submit structured order state.',
      'Relay confirmed order tickets to the kitchen operations dashboard with real-time status dispatch.'
    ],
    architecture: [
      { id: 'wa', label: 'WhatsApp API Gateway', type: 'input', color: '#10b981' },
      { id: 'stt', label: 'Speech-to-Text Pipeline', type: 'process', color: '#0ea5ea' },
      { id: 'agent', label: 'Conversational Reasoning Engine', type: 'agent', color: '#0bd1d1' },
      { id: 'menu', label: 'Menu Catalog & Pricing Store', type: 'process', color: '#0ea5ea' },
      { id: 'dash', label: 'Kitchen Operations Dashboard', type: 'output', color: '#10b981' }
    ],
    features: [
      'Native multilingual support for English, Urdu, and Roman Urdu',
      'Automated voice-note audio transcription to structured order tickets',
      'Context-grounded menu, pricing, and media asset retrieval',
      'Bidirectional kitchen operations dashboard with live status dispatch'
    ],
    techStack: ['WhatsApp API', 'FastAPI', 'Node.js', 'React', 'Speech-to-Text', 'PostgreSQL'],
    liveUrl: null,
    githubUrl: null,
    stats: 'Production Ordering Pipeline',
    featured: true
  },
  {
    id: 'vivagraph-ai',
    title: 'VivaGraph AI: Oral Examination Simulator',
    tagline: 'Multi-Agent Cognitive System with Real-Time Acoustic & Semantic Evaluation',
    category: 'Voice AI',
    description: 'A multi-agent cognitive architecture featuring a seven-agent core designed to simulate academic oral examinations. The system integrates real-time vocal analysis, filler-word frequency tracking, and dynamic difficulty adjustment, where specialized agents manage questioning, behavioral observation, evaluation, and psychological pressure while sharing a unified state machine.',
    problem: 'Oral examination preparation lacks scalable, objective simulation tools that accurately emulate panel examination dynamics, cognitive stress, and adaptive technical follow-up questions under time constraints.',
    solution: 'Designed an interconnected multi-agent framework comprising seven cognitive personas (Chief Examiner, Domain Researcher, Behavioral Assessor, Dynamic Difficulty Tuner) that collaborate across a shared LangGraph session state.',
    metrics: [
      { value: '7', label: 'Specialized Cognitive Agents' },
      { value: 'Real-Time', label: 'Speech & Semantic Analytics' },
      { value: 'Adaptive', label: 'Dynamic Difficulty Engine' }
    ],
    workflow: [
      'Ingest candidate syllabus documents and domain literature into vector storage.',
      'Generate contextual examination questions using multi-agent deliberation.',
      'Perform real-time audio analysis measuring latency, vocal confidence, and filler words.',
      'Synthesize structured multi-parameter performance evaluations and diagnostic feedback.'
    ],
    architecture: [
      { id: 'materials', label: 'Curriculum Ingestion', type: 'input', color: '#a855f7' },
      { id: 'rag', label: 'Domain Retrieval Engine', type: 'process', color: '#8b5cf6' },
      { id: 'chief', label: 'Chief Examiner Agent', type: 'agent', color: '#c084fc' },
      { id: 'psychology', label: 'Behavioral Assessor Agent', type: 'agent', color: '#a855f7' },
      { id: 'voice', label: 'Acoustic Feature Analyzer', type: 'agent', color: '#7c3aed' },
      { id: 'report', label: 'Diagnostic Performance Dossier', type: 'output', color: '#10b981' }
    ],
    features: [
      'Dynamic multi-agent difficulty adjustment based on candidate mastery',
      'Real-time acoustic analysis covering cadence and filler-word frequency',
      'Seven-agent collaborative cognitive core architecture',
      'Comprehensive analytical scorecard and targeted revision roadmaps'
    ],
    techStack: ['LangGraph', 'Groq LPU', 'Cerebras', 'Pinecone', 'Supabase', 'React'],
    liveUrl: 'https://vivagraph-ai.vercel.app',
    githubUrl: 'https://github.com/ahmadarif238/vivagraph-ai',
    stats: '7-Agent Cognitive Architecture',
    featured: true
  },
  {
    id: 'ai-sales-automation-agent',
    title: 'SalesAI: B2B Pipeline Orchestrator',
    tagline: 'Autonomous 4-Agent Pipeline for Prospect Discovery, Qualification, and Outreach',
    category: 'Automation',
    description: 'An autonomous multi-agent system coordinating four specialized sub-agents to automate B2B prospect discovery, ICP qualification scoring, and context-personalized outreach generation. The architecture reduced manual prospecting research duration by 60% while maintaining strict data verification standards.',
    problem: 'Enterprise sales teams commit over 60% of their operational hours to manual prospect identification, verification, and drafting bespoke outreach, constraining actual engagement bandwidth.',
    solution: 'Constructed an orchestrator-driven multi-agent system executing high-speed web research, firmographic qualification against ideal customer profiles, and personalized outreach synthesis.',
    metrics: [
      { value: '60%', label: 'Manual Research Reduction' },
      { value: '<30s', label: 'Pipeline Cycle Latency' },
      { value: '4', label: 'Specialized Sub-Agents' }
    ],
    workflow: [
      'Ingest target industry specifications and Ideal Customer Profile parameters.',
      'Scrape and aggregate verified firmographic data across web sources.',
      'Score and rank candidate prospects via deterministic ICP qualification rules.',
      'Synthesize contextually personalized outreach drafts and schedule engagement cadences.'
    ],
    architecture: [
      { id: 'query', label: 'ICP & Search Ingestion', type: 'input', color: '#0ea5e9' },
      { id: 'orchestrator', label: 'Pipeline Orchestrator', type: 'agent', color: '#38bdf8' },
      { id: 'leadgen', label: 'Prospect Discovery Agent', type: 'agent', color: '#0ea5e9' },
      { id: 'scorer', label: 'ICP Qualification Agent', type: 'agent', color: '#0284c7' },
      { id: 'engage', label: 'Personalization Agent', type: 'agent', color: '#0369a1' },
      { id: 'dashboard', label: 'Operations & Analytics UI', type: 'output', color: '#22c55e' }
    ],
    features: [
      'Deterministic agent-of-agents orchestration architecture',
      'Automated qualification scoring aligned with enterprise ICP definitions',
      'Grounded personalized email synthesis with verifiable company references',
      'Real-time pipeline analytics dashboard'
    ],
    techStack: ['FastAPI', 'LLaMA 3', 'Groq Cloud', 'React 19', 'TailwindCSS', 'Docker'],
    liveUrl: 'https://ai-sales-automation-agent.vercel.app',
    githubUrl: 'https://github.com/ahmadarif238/AI-Sales-Automation-Agent',
    stats: 'Full Pipeline Automation',
    featured: true
  },
  {
    id: 'smart-supply-chain-agent',
    title: 'Autonomous Supply Chain & Procurement Agent',
    tagline: 'Predictive Stock Replenishment and Algorithmic Negotiation Engine',
    category: 'Automation',
    description: 'An autonomous multi-stage system that continuously monitors enterprise inventory levels, forecasts replenishment deficits using hybrid linear programming models and LLM reasoning, and conducts automated vendor negotiation within strict capital constraints.',
    problem: 'Manual inventory monitoring and purchase order negotiation introduce supply latency, stockout vulnerabilities, and capital inefficiencies.',
    solution: 'Engineered an autonomous agent combining quantitative demand forecasting with dynamic supplier negotiation heuristics and automated ERP synchronization.',
    metrics: [
      { value: '24/7', label: 'Continuous Telemetry' },
      { value: 'Linear Prog', label: 'Optimization Engine' },
      { value: 'Automated', label: 'Procurement Dispatch' }
    ],
    workflow: [
      'Ingest continuous stock telemetry across warehouse nodes.',
      'Forecast replenishment thresholds using linear programming and historical consumption.',
      'Generate deterministic purchase parameters and conduct structured supplier negotiations.',
      'Execute verified purchase orders and commit transaction state to relational databases.'
    ],
    architecture: [
      { id: 'inventory', label: 'Warehouse Telemetry Feed', type: 'input', color: '#eab308' },
      { id: 'forecaster', label: 'Demand Forecasting Model', type: 'agent', color: '#f59e0b' },
      { id: 'lp', label: 'Linear Programming Optimizer', type: 'process', color: '#d97706' },
      { id: 'negotiator', label: 'Vendor Negotiation Agent', type: 'agent', color: '#eab308' },
      { id: 'procure', label: 'Order Execution Agent', type: 'agent', color: '#ca8a04' },
      { id: 'orders', label: 'ERP Commit / Dispatch', type: 'output', color: '#22c55e' }
    ],
    features: [
      'Continuous warehouse telemetry monitoring',
      'Hybrid demand forecasting integrating linear programming',
      'Algorithmic vendor negotiation adhering to budget constraints',
      'Direct ERP order commitment and audit logging'
    ],
    techStack: ['Agentic AI', 'LangGraph', 'FastAPI', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://smart-supply-chain-agent.vercel.app',
    githubUrl: 'https://github.com/ahmadarif238/Smart-Supply-Chain-Agent',
    stats: 'Autonomous Procurement System'
  },
  {
    id: 'stock-news-alert-agent',
    title: 'High-Throughput Financial News Sentiment Pipeline',
    tagline: 'Real-Time Financial Telemetry Ingestion and Low-Latency Impact Scoring',
    category: 'AI Agents',
    description: 'A streaming financial intelligence pipeline that ingests continuous market RSS feeds, computes sentiment polarity using accelerated Groq LPU inference, and dispatches structured impact briefs to high-frequency communication channels.',
    problem: 'Financial decision-makers confront continuous data overload from real-time news wires, where delayed extraction of directional market signals results in missed execution opportunities.',
    solution: 'Architected a low-latency sentiment analysis pipeline combining asynchronous RSS scrapers, sub-second LLM inference, and structured telemetry broadcast.',
    metrics: [
      { value: '<500ms', label: 'Inference Latency' },
      { value: 'Real-time', label: 'Feed Monitoring' },
      { value: 'Automated', label: 'Sentiment Classification' }
    ],
    workflow: [
      'Ingest real-time financial RSS wires via asynchronous event listeners.',
      'Normalize unstructured articles and dispatch to accelerated Groq inference.',
      'Compute directional market sentiment and extract high-signal tickers.',
      'Broadcast structured analytical briefs to designated operational channels.'
    ],
    architecture: [
      { id: 'rss', label: 'Financial Wire Feeds', type: 'input', color: '#ef4444' },
      { id: 'parser', label: 'Asynchronous Normalizer', type: 'process', color: '#f59e0b' },
      { id: 'sentiment', label: 'Sentiment Analysis Engine', type: 'agent', color: '#22c55e' },
      { id: 'summarizer', label: 'Signal Extraction Agent', type: 'agent', color: '#eab308' },
      { id: 'telegram', label: 'Channel Broadcast Dispatcher', type: 'output', color: '#0ea5e9' }
    ],
    features: [
      'Asynchronous financial RSS parsing and deduplication',
      'Accelerated sentiment scoring using high-speed LPU inference',
      'Real-time automated Telegram channel alert dissemination',
      'Concise macro and micro impact synthesis'
    ],
    techStack: ['Python', 'Groq Models', 'FastAPI', 'Telegram API', 'AsyncIO'],
    liveUrl: 'https://stock-news-agent.vercel.app',
    githubUrl: 'https://github.com/ahmadarif238/stock-news-agent',
    stats: 'Low-Latency Sentiment Pipeline'
  },
  {
    id: 'ai-operations-copilot',
    title: 'AI Operations Copilot: Multi-Agent RAG System',
    tagline: 'Enterprise SOP Retrieval, Log Anomaly Detection, and Automated Ticket Dispatch',
    category: 'Chatbots',
    description: 'An enterprise multi-agent RAG system built for internal IT and operational infrastructure. Resolves internal standard operating procedure queries through semantic retrieval, continuously monitors system event logs for anomaly signatures, and automatically synthesizes structured support tickets.',
    problem: 'Internal engineering and operational teams face high ticket resolution overhead and repetitive procedural queries, while anomalies in production log streams frequently go undetected until service disruption.',
    solution: 'Deployed a multi-agent RAG platform integrating vector-indexed enterprise SOPs, automated log anomaly detection, and automated ticket synthesis.',
    metrics: [
      { value: 'Real-Time', label: 'SOP Grounding' },
      { value: 'Automated', label: 'Anomaly Ticket Generation' },
      { value: '3', label: 'Coordinated Modules' }
    ],
    workflow: [
      'Ingest and chunk internal SOPs and technical documentation into vector indexes.',
      'Execute high-precision semantic retrieval for contextual operational answers.',
      'Continuously parse application log streams to isolate anomaly patterns.',
      'Auto-generate structured incident tickets with source diagnostic context.'
    ],
    architecture: [
      { id: 'sops', label: 'Operational Documentation', type: 'input', color: '#10b981' },
      { id: 'vectordb', label: 'Vector Knowledge Store', type: 'process', color: '#34d399' },
      { id: 'qa', label: 'Contextual Retrieval Agent', type: 'agent', color: '#10b981' },
      { id: 'monitor', label: 'Telemetry Log Auditor', type: 'agent', color: '#059669' },
      { id: 'tickets', label: 'Incident Ticket Router', type: 'output', color: '#047857' }
    ],
    features: [
      'Semantic retrieval grounded strictly in enterprise documentation',
      'Automated log anomaly classification and severity scoring',
      'Structured incident ticket synthesis with diagnostic traces',
      'FastAPI backend with Redis caching and PostgreSQL persistence'
    ],
    techStack: ['LangGraph', 'FastAPI', 'Pinecone', 'Groq Models', 'PostgreSQL', 'Redis'],
    liveUrl: null,
    githubUrl: 'https://github.com/ahmadarif238',
    stats: 'Enterprise Operations RAG'
  },
  {
    id: 'voice-enabled-executive-agent',
    title: 'Voice-Enabled Executive Automation Agent',
    tagline: 'Acoustic Command Processing and Autonomous Workspace Orchestration',
    category: 'Voice AI',
    description: 'A voice-first automation agent combining speech transcription, natural language task decomposition, and Google Workspace API orchestration to execute email triage, calendar conflict resolution, and information retrieval via spoken commands.',
    problem: 'Knowledge workers lose significant daily bandwidth navigating fragmented user interfaces for routine scheduling, email drafting, and calendar management.',
    solution: 'Engineered an end-to-end voice processing interface coupling low-latency speech-to-text models with an LLM task execution agent connected to enterprise APIs.',
    metrics: [
      { value: 'Voice-First', label: 'Acoustic Interface' },
      { value: 'Sub-Second', label: 'Execution Latency' },
      { value: 'Zero-Click', label: 'Calendar Automation' }
    ],
    workflow: [
      'Stream user audio through acoustic ingestion pipeline.',
      'Transcribe spoken requests and extract structured action intents.',
      'Execute corresponding API mutations across email and calendar services.',
      'Synthesize spoken audio confirmation and update state.'
    ],
    architecture: [
      { id: 'mic', label: 'Audio Ingestion Stream', type: 'input', color: '#f43f5e' },
      { id: 'transcribe', label: 'Whisper Transcription Engine', type: 'process', color: '#fb7185' },
      { id: 'planner', label: 'Intent Decomposition Agent', type: 'agent', color: '#f43f5e' },
      { id: 'gmail', label: 'Email API Bridge', type: 'process', color: '#e11d48' },
      { id: 'calendar', label: 'Calendar API Bridge', type: 'process', color: '#be123c' },
      { id: 'response', label: 'Audio Feedback Engine', type: 'output', color: '#10b981' }
    ],
    features: [
      'Spoken audio command decomposition and intent extraction',
      'Automated email inbox triage and drafted responses',
      'Calendar conflict detection and automated slot scheduling',
      'Streaming voice confirmation loop'
    ],
    techStack: ['LangChain', 'Groq Whisper', 'FastAPI', 'Google Workspace APIs', 'Python'],
    liveUrl: null,
    githubUrl: 'https://github.com/ahmadarif238',
    stats: 'Voice Task Orchestration'
  }
];

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Workflow & Business Automation',
    tagline: 'End-to-end automation that eliminates repetitive manual tasks',
    description: 'Transform manual, spreadsheet-heavy processes into autonomous background workflows. Connecting your CRM, email, accounting, and cloud tools through n8n, Make, and custom APIs.',
    deliverables: [
      'Custom n8n & Make orchestration pipelines',
      'Automated lead qualification and CRM syncing',
      'Webhook & API bridge development',
      'Migration of manual workflows into SaaS products'
    ],
    technologies: ['n8n', 'Make', 'Zapier', 'Power Automate', 'FastAPI', 'Webhooks'],
    icon: 'Cpu'
  },
  {
    number: '02',
    title: 'Autonomous AI Agents Development',
    tagline: 'Multi-agent cognitive systems for complex business logic',
    description: 'Design and build goal-oriented AI agent systems that collaborate, research, synthesize data, and execute deterministic actions with zero hallucination.',
    deliverables: [
      'Multi-agent systems built on LangGraph & LangChain',
      'Agent-of-Agents architecture with strict guardrails',
      'Autonomous scheduling, data extraction, and synthesis',
      'Self-correcting verification loops ("Factual Enforcer")'
    ],
    technologies: ['LangGraph', 'Python', 'Claude 3.7', 'OpenAI', 'Llama 3', 'Groq LPU'],
    icon: 'Bot'
  },
  {
    number: '03',
    title: 'RAG & Enterprise Knowledge Bases',
    tagline: 'Grounding LLMs on your proprietary files with strict citations',
    description: 'Turn your PDFs, Notion docs, legal contracts, and SOPs into an interactive, cited intelligence layer that your team or customers can query in real-time.',
    deliverables: [
      'Vector database setup & chunking optimization (Pinecone, Supabase)',
      'Hybrid semantic & lexical search engines',
      'Zero-hallucination factual enforcer layers with source links',
      'Automated knowledge synchronization pipelines'
    ],
    technologies: ['Pinecone', 'Supabase Vector', 'ChromaDB', 'FastAPI', 'Python'],
    icon: 'Database'
  },
  {
    number: '04',
    title: 'AI Calling & Voice Agents',
    tagline: 'Natural conversational phone agents that book calls and answer inquiries',
    description: 'Voice bots that speak fluently with sub-second latency, handle inbound customer inquiries, qualify leads over the phone, and update your calendar or CRM live.',
    deliverables: [
      'Inbound and outbound voice agent configuration',
      'Sub-second latency voice pipelines (Vapi / Retell / Deepgram)',
      'Calendar and CRM real-time booking integrations',
      'Full call transcription, sentiment scoring, and analytics'
    ],
    technologies: ['Vapi', 'Deepgram', 'ElevenLabs', 'Twilio', 'Groq Whisper', 'Python'],
    icon: 'PhoneCall'
  },
  {
    number: '05',
    title: 'Full-Stack Web & Mobile Applications',
    tagline: 'High-performance digital products engineered for growth',
    description: 'From high-converting modern landing pages to complex web platforms and client dashboards. Clean code, responsive mobile layouts, and enterprise-grade performance.',
    deliverables: [
      'Modern web apps using React 19, Next.js, and TypeScript',
      'Interactive customer portals and analytics dashboards',
      'Secure authentication and role-based access control',
      'Pixel-perfect, accessible UI with Tailwind CSS and Motion'
    ],
    technologies: ['TypeScript', 'React 19', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    icon: 'Code2'
  },
  {
    number: '06',
    title: 'Data Integration & Custom APIs',
    tagline: 'Connecting your fragmented software stack into one cohesive engine',
    description: 'Build secure, high-throughput REST and GraphQL APIs that sync data between disparate tools, third-party services, cloud databases, and AI pipelines.',
    deliverables: [
      'High-performance asynchronous backend services in FastAPI / Express',
      'PostgreSQL & Redis caching infrastructure',
      'Stripe, Google Workspace, and Microsoft 365 integrations',
      'Containerized deployments with Docker and CI/CD pipelines'
    ],
    technologies: ['FastAPI', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'Azure'],
    icon: 'Layers'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover & Audit',
    duration: 'Week 1',
    summary: 'We analyze your current manual bottlenecks, workflows, and business goals to identify high-ROI automation and AI opportunities.',
    keyPoints: [
      'Free workflow and automation audit',
      'Mapping out data flows and manual touchpoints',
      'Scoping target KPIs (time saved, error reduction)',
      'Feasibility and technology stack selection'
    ]
  },
  {
    step: '02',
    title: 'Architecture & Design',
    duration: 'Week 1-2',
    summary: 'We design the complete system blueprint: agent roles, deterministic guardrails, database schemas, and intuitive UI wireframes.',
    keyPoints: [
      'Agentic workflow diagrams & state machines',
      'RAG chunking strategies and indexing models',
      'Factual grounding and anti-hallucination layers',
      'User interface mockups and feedback loops'
    ]
  },
  {
    step: '03',
    title: 'Build & Implementation',
    duration: 'Weeks 2-4',
    summary: 'Engineering the solution with clean, maintainable TypeScript, Python, FastAPI, and robust multi-agent orchestration frameworks.',
    keyPoints: [
      'Multi-agent pipeline and tool integration',
      'FastAPI async backend and vector store configuration',
      'Modern React/Next.js frontend with live feedback',
      'Secure authentication and environment isolation'
    ]
  },
  {
    step: '04',
    title: 'Benchmark & Stress Test',
    duration: 'Week 4',
    summary: 'Rigorous testing under edge-case conditions, stress-testing LLM outputs, verifying source citations, and measuring execution latency.',
    keyPoints: [
      'Ground-truth evaluation datasets',
      'Latency optimization with Groq LPU inference',
      'Security review and prompt injection defense',
      'Client stakeholder review and staging validation'
    ]
  },
  {
    step: '05',
    title: 'Deploy & Integrate',
    duration: 'Week 5',
    summary: 'Seamless production deployment to cloud infrastructure (Docker, Cloud Run, Azure, Vercel) connected directly to your existing tools.',
    keyPoints: [
      'Production deployment with automated CI/CD',
      'Direct webhook connections to CRM, Email, Slack, etc.',
      'Team onboarding walkthrough and documentation',
      'Monitoring and alerting set up for continuous uptime'
    ]
  },
  {
    step: '06',
    title: 'Optimize & Scale',
    duration: 'Ongoing',
    summary: 'Continuous monitoring, token cost reduction, accuracy tracking, and proactive feature upgrades as your business operations grow.',
    keyPoints: [
      'Real-time analytics on agent decisions and query counts',
      'Model distillation and prompt refinement to reduce API costs',
      'Iterative improvements based on user feedback',
      'Priority ongoing maintenance and support'
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'AI Engineer',
    company: 'Int. Dublin Tax Company Ltd.',
    period: 'Present',
    location: 'Remote (International)',
    points: [
      'Build and manage AI-driven automation workflows on Microsoft Power Automate and Power Platform, reducing manual processing across internal tax and accounting operations.',
      'Develop AI-powered virtual agents and support enterprise cloud infrastructure on Microsoft Azure.',
      'Design and deploy intelligent process-automation assistants used across internal operational teams.',
      'Develop and ship proprietary AI agents, workflows, and custom copilots supporting internal tax and financial operations.'
    ],
    isCurrent: true
  },
  {
    role: 'Founder & AI Engineer',
    company: 'AgentCraft AI Automations',
    period: '2025 to Present',
    location: 'Pakistan',
    points: [
      'Founded and operate an AI automation studio delivering custom agentic systems, RAG assistants, and workflow automation for client businesses.',
      'Own the complete delivery lifecycle across discovery, system architecture, implementation, testing, and deployment using LangGraph, FastAPI, and workflow integration platforms.'
    ],
    isCurrent: true
  },
  {
    role: 'Computer Vision Intern',
    company: 'ITSOLERA Pvt. Ltd.',
    period: 'Jul 2024 to Oct 2024',
    location: 'Pakistan',
    points: [
      'Developed real-time pedestrian detection systems in Python and OpenCV, robust to low-light, rain, and fog conditions.',
      'Built resilient object detection pipelines for complex edge scenarios.',
      'Contributed to 3D medical imaging reconstruction and cardiovascular disease risk assessment projects based on AI-driven medical image analysis.'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.S., Software Engineering',
    institution: 'University of Malakand, Pakistan',
    period: '2021 to 2025',
    gpa: '3.65 / 4.00'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Stanford Online & DeepLearning.AI (Andrew Ng)',
    year: '2023'
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI (Andrew Ng)',
    year: '2023'
  },
  {
    name: 'Advanced TensorFlow Coursework',
    issuer: 'DeepLearning.AI (Google Laurence Moroney)',
    year: '2024'
  },
  {
    name: 'Agentic AI Training',
    issuer: 'AgentAcademy & Hugging Face',
    year: '2025'
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: 'Agentic AI & LLMs',
    description: 'Multi-agent workflows, retrieval and model orchestration',
    skills: [
      { name: 'LangGraph', proficiency: 90, highlight: 'Stateful multi-agent graphs' },
      { name: 'LangChain', proficiency: 90, highlight: 'Tooling and chains' },
      { name: 'RAG & Vector Search', proficiency: 90, highlight: 'Grounded, cited answers' },
      { name: 'Ollama & Hugging Face Transformers', proficiency: 90, highlight: 'Open-weight models' },
      { name: 'Groq & Cerebras', proficiency: 90, highlight: 'Low-latency inference' },
      { name: 'OpenAI, Anthropic Claude & Google Gemini', proficiency: 90, highlight: 'Frontier models' },
      { name: 'Prompt Engineering', proficiency: 90, highlight: 'Reliable structured output' }
    ]
  },
  {
    category: 'Backend, Cloud & DevOps',
    description: 'APIs, data stores and deployment',
    skills: [
      { name: 'Python & SQL', proficiency: 90, highlight: 'Core languages' },
      { name: 'FastAPI', proficiency: 90, highlight: 'Async APIs' },
      { name: 'AWS, Microsoft Azure & Vercel', proficiency: 90, highlight: 'Cloud platforms' },
      { name: 'Docker, Git & Azure DevOps', proficiency: 90, highlight: 'Build and ship' },
      { name: 'Pinecone, Weaviate & FAISS', proficiency: 90, highlight: 'Vector databases' },
      { name: 'PostgreSQL, MySQL & Supabase', proficiency: 90, highlight: 'Relational data' }
    ]
  },
  {
    category: 'Web Development',
    description: 'Dashboards and customer-facing interfaces for agents',
    skills: [
      { name: 'React', proficiency: 90, highlight: 'Agent dashboards' },
      { name: 'Node.js', proficiency: 90, highlight: 'Realtime backends' },
      { name: 'TypeScript & JavaScript', proficiency: 90, highlight: 'Typed front ends' }
    ]
  },
  {
    category: 'ML & Automation',
    description: 'Classic ML and automation platforms',
    skills: [
      { name: 'TensorFlow, Keras & Scikit-learn', proficiency: 90, highlight: 'Model training' },
      { name: 'Pandas & NumPy', proficiency: 90, highlight: 'Data work' },
      { name: 'n8n, Zapier & Make', proficiency: 90, highlight: 'Workflow automation' },
      { name: 'Microsoft Power Automate & Power Platform', proficiency: 90, highlight: 'Enterprise automation' }
    ]
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'audit-sprint',
    name: 'Automation Audit Sprint',
    monthlyPrice: 'On request',
    annualPrice: 'On request',
    periodLabel: 'fixed scope',
    description: 'Deep dive into your manual business bottlenecks with an actionable automation architecture roadmap.',
    features: [
      'Comprehensive workflow & toolchain audit',
      'Identification of top 3 high-ROI AI agent opportunities',
      'Step-by-step technical architecture blueprint',
      'Cost-benefit & API token expense projections',
      '60-minute strategy & implementation walkthrough',
      '48-hour delivery timeline'
    ],
    ctaText: 'Book Audit Sprint'
  },
  {
    id: 'custom-agent',
    name: 'Custom AI Agent Build',
    badge: 'MOST POPULAR',
    monthlyPrice: 'Custom quote',
    annualPrice: 'Custom quote',
    periodLabel: 'per project',
    description: 'End-to-end production-ready AI Agent or automated RAG platform built specifically for your business.',
    features: [
      'Custom LangGraph / Multi-Agent architecture',
      'Anti-hallucination verification & source citation',
      'Full API & CRM integration (n8n, HubSpot, Slack, etc.)',
      'Interactive dashboard or chat / voice interface',
      'Staging environment & thorough benchmark testing',
      'Dockerized deployment & cloud hosting setup',
      '30 days of post-launch priority support'
    ],
    ctaText: 'Start Custom Build',
    popular: true
  },
  {
    id: 'retainer',
    name: 'Dedicated Automation Retainer',
    monthlyPrice: 'Talk to me',
    annualPrice: 'Talk to me',
    periodLabel: 'monthly retainer',
    description: 'Full-time software engineering and AI automation partnership for ongoing builds, optimizations, and scaling.',
    features: [
      'Dedicated development capacity (up to 20 hrs/week)',
      'Continuous workflow automation builds & maintenance',
      'New AI features, voice bots, and chatbot development',
      'Proactive monitoring, error alerts, and token optimization',
      'Direct Slack / WhatsApp channel with Arif',
      'Same-day response & rapid turnaround',
      'Pause or cancel anytime'
    ],
    ctaText: 'Hire on Retainer'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How do your AI agents prevent hallucinations?',
    answer: 'We build systems with strict architectural guardrails—such as our custom "Factual Enforcer" layer. Agents are strictly bound to vector database documents or verified database records, with every answer linking back to the exact source paragraph or row. If information is missing, the agent explicitly flags it rather than guessing.'
  },
  {
    question: 'Can you integrate AI agents into our existing CRM and tools?',
    answer: 'Yes, absolutely. We regularly integrate agents with HubSpot, Salesforce, Notion, Slack, Telegram, Google Workspace, Microsoft 365, Airtable, PostgreSQL, and custom REST APIs using n8n, Make, or custom FastAPI webhooks.'
  },
  {
    question: 'What is the typical delivery timeline for an AI automation project?',
    answer: 'It depends on scope, and I give you a realistic timeline before any work starts. A focused automation or chatbot build is usually a matter of weeks rather than months, covering design, development, testing, and deployment.'
  },
  {
    question: 'How much do LLM API calls and infrastructure typically cost?',
    answer: 'Solutions are architected for token efficiency, using fast, cost-effective inference and open-weight models for the heavy processing, plus caching to avoid repeat calls. I estimate your expected running costs up front so there are no surprises on the monthly bill.'
  },
  {
    question: 'Do I get full ownership of the code and intellectual property?',
    answer: 'Yes. 100% of all code, prompt architectures, database schemas, and documentation belong to you upon project delivery. We hand over the complete repository and cloud credentials.'
  }
];
