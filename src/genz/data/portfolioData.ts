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
  tagline: 'Software Engineer for Web, Apps and AI Automation',
  headline: 'Building Intelligent Software That Works For You',
  shortBio: 'I build websites, web apps, AI chatbots, and calling agents that take repetitive work off your team so you can focus on growth. Each detail balances robust architecture and real business impact.',
  extendedBio: "I'm a Software Engineer who builds websites, applications, and AI systems for businesses. That covers everything from a site that brings in customers, to an app your team works in daily, to chatbots and calling agents that handle enquiries around the clock. I work across the whole build, from the interface to the backend to the automation that ties it together, so you get one person accountable for the result rather than a handoff between three.",
  location: 'Pakistan',
  status: 'AVAILABLE FOR WORK',
  year: '2026',
  email: 'ahmadarif238@gmail.com',
  phone: '+92 343 8992587',
  whatsappNumber: '923438992587',
  whatsappUrl: 'https://wa.me/923438992587?text=Hi%20Arif,%20I%20found%20you%20through%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
  githubUrl: 'https://github.com/ahmadarif238',
  linkedinUrl: 'https://www.linkedin.com/in/arif-a-0b853580',
  avatarUrl: '/profile.jpg',
  caseStudies: '7',
  completedProjects: '10+',
  hoursSavedWeekly: '10+',
  automationUptime: '24/7'
};

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
  'Web Development',
  'App Development',
  'AI Agents',
  'Chatbot Development',
  'AI Calling Agents',
  'Workflow Automation',
  'AI Integration',
  'Multi-Agent Systems',
  'RAG Knowledge Bases',
  'FastAPI & Next.js'
];

export const PROJECTS: Project[] = [
  {
    id: 'contract-iq',
    title: 'ContractIQ',
    tagline: 'Contract Review, Handled Automatically',
    category: 'AI Agents',
    description: 'An AI system that reads, checks, and compares legal agreements so legal teams stop searching through files by hand. It flags risky clauses, pulls out key dates, and puts contracts side by side. Every answer links back to the exact paragraph it came from, so nothing is ever invented.',
    problem: 'Lawyers waste hours searching for specific clauses across thousands of files. Comparing vendor drafts against company standards is manual and error-prone, and traditional AI tools often invent numbers and dates.',
    solution: 'A multi-agent system with Vault Intelligence for global semantic search, Intelligent Benchmarking for side-by-side comparison, and a custom "Factual Enforcer" layer that prevents the agent from inventing data.',
    metrics: [
      { value: '100%', label: 'Sourced Answers' },
      { value: '4', label: 'Review Stages' },
      { value: '<2s', label: 'Query Response Time' }
    ],
    workflow: [
      'Index entire contract repository into Pinecone Vector Store.',
      'Perform global semantic search across all indexed legal documents.',
      'Compare contracts side-by-side to identify deviations and risk mismatches.',
      'Enforce strict factual grounding with clickable source citations.'
    ],
    architecture: [
      { id: 'upload', label: 'Document Upload', type: 'input', color: '#6366f1' },
      { id: 'indexer', label: 'Pinecone Indexer', type: 'process', color: '#8b5cf6' },
      { id: 'vault', label: 'Vault Intelligence', type: 'agent', color: '#6366f1' },
      { id: 'benchmark', label: 'Benchmarking Agent', type: 'agent', color: '#a855f7' },
      { id: 'enforcer', label: 'Factual Enforcer', type: 'agent', color: '#22c55e' },
      { id: 'output', label: 'Cited Report', type: 'output', color: '#10b981' }
    ],
    features: [
      'Vault Intelligence (RAG at Scale)',
      'Intelligent Benchmarking & Comparison',
      'Zero-Hallucination Architecture',
      'Clickable Source Citations'
    ],
    techStack: ['LangGraph', 'FastAPI', 'Pinecone', 'Cerebras', 'React', 'Docker'],
    liveUrl: 'https://contract-iq-six.vercel.app',
    githubUrl: 'https://github.com/ahmadarif238/contract-iq',
    stats: 'Zero-Hallucination Legal AI',
    featured: true
  },
  {
    id: 'vivagraph-ai',
    title: 'VivaGraph AI',
    tagline: 'Practice Interviews That Feel Real',
    category: 'Voice AI',
    description: 'A voice-based practice platform that recreates the pressure of a real oral exam or interview. The AI examiner changes character on the fly, from encouraging coach to demanding professor, while listening for hesitation, filler words, and confidence. It then hands back a full performance report.',
    problem: "Most students fail oral exams not because they don't know the material, but because they panic under questioning. Current AI tools like ChatGPT are too polite and don't simulate real examiner pressure.",
    solution: 'A multi-agent system with 7 specialized cognitive agents (Chief Examiner, Researcher, Personality, Psychology, Teacher) that simulates realistic exam pressure with voice analysis and adaptive difficulty.',
    metrics: [
      { value: '7', label: 'Examiner Personas' },
      { value: 'Real-time', label: 'Voice Analysis' },
      { value: '3', label: 'Difficulty Modes' }
    ],
    workflow: [
      'Upload study materials for RAG-based question generation.',
      'Engage in voice-based examination with adaptive AI examiner.',
      'Real-time analysis of voice confidence, filler words, and response latency.',
      'Receive detailed performance report card with coaching feedback.'
    ],
    architecture: [
      { id: 'materials', label: 'Study Materials', type: 'input', color: '#a855f7' },
      { id: 'rag', label: 'RAG Engine', type: 'process', color: '#8b5cf6' },
      { id: 'chief', label: 'Chief Examiner', type: 'agent', color: '#c084fc' },
      { id: 'psychology', label: 'Psychology Agent', type: 'agent', color: '#a855f7' },
      { id: 'voice', label: 'Voice Analyzer', type: 'agent', color: '#7c3aed' },
      { id: 'report', label: 'Report Card', type: 'output', color: '#10b981' }
    ],
    features: [
      'Dynamic Difficulty Adjustment',
      'Voice & Filler Word Analysis',
      '7-Agent Cognitive Core',
      'Strict Mode Stress Testing'
    ],
    techStack: ['LangGraph', 'Groq LPU', 'Cerebras', 'Pinecone', 'Supabase', 'React'],
    liveUrl: 'https://vivagraph-ai.vercel.app',
    githubUrl: 'https://github.com/ahmadarif238/vivagraph-ai',
    stats: '7-Agent Cognitive Architecture',
    featured: true
  },
  {
    id: 'ai-sales-automation-agent',
    title: 'SalesAI: B2B Pipeline',
    tagline: 'From Search Query to Qualified Lead',
    category: 'Automation',
    description: 'A sales system that turns one search into a finished pipeline. It finds prospects, verifies and scores them, then writes personalised outreach. That cuts roughly 60% of the manual research a sales team would otherwise do by hand.',
    problem: 'Sales teams spend 60% of their time on manual research, finding emails, and qualifying leads instead of actually selling.',
    solution: 'An agent-of-agents architecture where a single search query triggers a deterministic pipeline of specialized sub-agents that deliver a qualified, scored, and engaged list of prospects.',
    metrics: [
      { value: '60%', label: 'Research Time Saved' },
      { value: '<30s', label: 'Pipeline Execution' },
      { value: '4', label: 'Pipeline Stages' }
    ],
    workflow: [
      'Input a single search query for target prospects.',
      'Lead Generation Agent scrapes and aggregates verified data.',
      'Scoring Agent qualifies and ranks leads based on ICP fit.',
      'Engagement Agent crafts personalized outreach and follow-ups.'
    ],
    architecture: [
      { id: 'query', label: 'Search Query', type: 'input', color: '#0ea5e9' },
      { id: 'orchestrator', label: 'Orchestrator Agent', type: 'agent', color: '#38bdf8' },
      { id: 'leadgen', label: 'Lead Gen Agent', type: 'agent', color: '#0ea5e9' },
      { id: 'scorer', label: 'Scoring Agent', type: 'agent', color: '#0284c7' },
      { id: 'engage', label: 'Engagement Agent', type: 'agent', color: '#0369a1' },
      { id: 'dashboard', label: 'Analytics Dashboard', type: 'output', color: '#22c55e' }
    ],
    features: [
      'Agent-of-Agents Architecture',
      'Automated Lead Scoring',
      'Personalized Outreach Generation',
      'Real-time Analytics Dashboard'
    ],
    techStack: ['FastAPI', 'LLaMA 3', 'Groq Cloud', 'React 19', 'TailwindCSS', 'Docker'],
    liveUrl: 'https://ai-sales-automation-agent.vercel.app',
    githubUrl: 'https://github.com/ahmadarif238/AI-Sales-Automation-Agent',
    stats: 'Full Pipeline Automation',
    featured: true
  },
  {
    id: 'smart-supply-chain-agent',
    title: 'Smart Supply Chain Agent',
    tagline: 'Inventory That Manages Itself',
    category: 'Automation',
    description: 'A system that watches stock levels around the clock, predicts what will run out and when, and places purchase orders on its own, negotiating within the budget limits you set, without anyone having to check a spreadsheet.',
    problem: 'Manual inventory management is prone to human error, leading to overstocking or stockouts and inefficient procurement processes.',
    solution: 'A 24/7 autonomous agent that forecasts demand using LLMs and Linear Programming, and automates negotiation and purchasing.',
    metrics: [
      { value: '24/7', label: 'Autonomous Operation' },
      { value: 'Smart', label: 'Demand Forecasting' },
      { value: 'Auto', label: 'Budget Negotiation' }
    ],
    workflow: [
      'Monitor inventory levels continuously.',
      'Forecast demand using hybrid LLM + Linear Programming engine.',
      'Autonomously negotiate purchase orders with suppliers.',
      'Execute procurement within strict budget constraints.'
    ],
    architecture: [
      { id: 'inventory', label: 'Inventory Monitor', type: 'input', color: '#eab308' },
      { id: 'forecaster', label: 'Demand Forecaster', type: 'agent', color: '#f59e0b' },
      { id: 'lp', label: 'LP Optimizer', type: 'process', color: '#d97706' },
      { id: 'negotiator', label: 'Negotiation Agent', type: 'agent', color: '#eab308' },
      { id: 'procure', label: 'Procurement Agent', type: 'agent', color: '#ca8a04' },
      { id: 'orders', label: 'Purchase Orders', type: 'output', color: '#22c55e' }
    ],
    features: [
      '24/7 Autonomous Operation',
      'Hybrid Forecasting Engine',
      'Automated Negotiation',
      'Budget-Aware Procurement'
    ],
    techStack: ['Agentic AI', 'LangGraph', 'FastAPI', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://smart-supply-chain-agent.vercel.app',
    githubUrl: 'https://github.com/ahmadarif238/Smart-Supply-Chain-Agent',
    stats: 'Autonomous Negotiation & Forecasting'
  },
  {
    id: 'stock-news-alert-agent',
    title: 'Stock News Alert Agent',
    tagline: 'Market News, Filtered and Delivered',
    category: 'AI Agents',
    description: 'An assistant that reads financial news as it breaks, judges whether the sentiment is positive or negative, summarises what it means for the market, and pushes the alert straight to Telegram, so nothing important gets buried in the noise.',
    problem: 'Traders miss critical market movements due to the sheer volume of financial news and delayed manual analysis.',
    solution: 'An agent that filters noise, analyzes sentiment instantly using fast inference, and pushes alerts directly to Telegram channels.',
    metrics: [
      { value: 'Instant', label: 'Alert Delivery' },
      { value: 'Real-time', label: 'RSS Monitoring' },
      { value: 'Auto', label: 'Sentiment Scoring' }
    ],
    workflow: [
      'Parse real-time RSS news feeds from major financial outlets.',
      'Analyze sentiment and market impact with Groq inference.',
      'Summarize key actionable insights into concise points.',
      'Dispatch instant Telegram alerts to dedicated channels.'
    ],
    architecture: [
      { id: 'rss', label: 'RSS News Feeds', type: 'input', color: '#ef4444' },
      { id: 'parser', label: 'Feed Parser', type: 'process', color: '#f59e0b' },
      { id: 'sentiment', label: 'Sentiment Analyzer', type: 'agent', color: '#22c55e' },
      { id: 'summarizer', label: 'Groq Summarizer', type: 'agent', color: '#eab308' },
      { id: 'telegram', label: 'Telegram Bot', type: 'output', color: '#0ea5e9' }
    ],
    features: [
      'Real-time RSS Parsing',
      'Groq-powered Sentiment Analysis',
      'Instant Telegram Notifications',
      'Market Impact Summaries'
    ],
    techStack: ['Python', 'Groq Models', 'Telegram Bot API', 'RSS'],
    liveUrl: 'https://stock-news-agent.vercel.app',
    githubUrl: 'https://github.com/ahmadarif238/stock-news-agent',
    stats: 'Instant Sentiment Alerts'
  },
  {
    id: 'ai-operations-copilot',
    title: 'AI Operations Copilot',
    tagline: 'An Assistant for Your Internal Team',
    category: 'Chatbots',
    description: "An internal assistant trained on a company's own policies and procedures. Staff ask questions in plain language and get accurate answers instantly, while the system watches system logs in the background and raises support tickets before anyone notices a problem.",
    problem: 'Internal IT teams are overwhelmed with repetitive tickets, policy questions, and manual log monitoring.',
    solution: 'A multi-agent RAG system that answers policy questions, monitors logs, and identifies issues automatically.',
    metrics: [
      { value: 'Instant', label: 'Policy Answers' },
      { value: 'Auto', label: 'Ticket Generation' },
      { value: '3', label: 'Automated Modules' }
    ],
    workflow: [
      'Ingest and index SOPs into Vector DB.',
      'Retrieve context using Groq Models for precise Q&A.',
      'Monitor system logs for anomalies and error spikes.',
      'Auto-generate support tickets for unresolved issues.'
    ],
    architecture: [
      { id: 'sops', label: 'SOP Documents', type: 'input', color: '#10b981' },
      { id: 'vectordb', label: 'Vector Database', type: 'process', color: '#34d399' },
      { id: 'qa', label: 'Q&A Agent', type: 'agent', color: '#10b981' },
      { id: 'monitor', label: 'Log Monitor', type: 'agent', color: '#059669' },
      { id: 'tickets', label: 'Ticket Generator', type: 'output', color: '#047857' }
    ],
    features: [
      'RAG-based Policy Q&A',
      'Automated Log Monitoring',
      'Ticket Generation',
      'Groq Model Integration'
    ],
    techStack: ['LangGraph', 'FastAPI', 'RAG', 'Groq Models', 'PostgreSQL', 'Redis'],
    liveUrl: null,
    githubUrl: 'https://github.com/ahmadarif238',
    stats: 'Scalable RAG Architecture'
  },
  {
    id: 'voice-enabled-executive-agent',
    title: 'Voice-Enabled Executive Agent',
    tagline: 'Run Your Day by Voice',
    category: 'Voice AI',
    description: 'A voice assistant that handles email, calendar bookings, and web lookups through ordinary spoken requests. Ask it to clear your inbox or move a meeting and it does it, with no clicking through menus and no switching between apps.',
    problem: 'Executives need a hands-free, efficient way to manage their digital workspace while on the move.',
    solution: 'A voice-first agent that executes complex tasks like scheduling and emailing through natural conversation.',
    metrics: [
      { value: 'Voice', label: 'First Interface' },
      { value: '3', label: 'Connected Apps' },
      { value: 'Real-time', label: 'Processing Speed' }
    ],
    workflow: [
      'Capture voice input via modern audio streaming interface.',
      'Transcribe and process commands using Groq LLM.',
      'Execute actions via Google APIs (Gmail, Calendar).',
      'Synthesize spoken voice confirmation in real-time.'
    ],
    architecture: [
      { id: 'mic', label: 'Voice Input', type: 'input', color: '#f43f5e' },
      { id: 'transcribe', label: 'Groq Transcriber', type: 'process', color: '#fb7185' },
      { id: 'planner', label: 'Task Planner', type: 'agent', color: '#f43f5e' },
      { id: 'gmail', label: 'Gmail API', type: 'process', color: '#e11d48' },
      { id: 'calendar', label: 'Calendar API', type: 'process', color: '#be123c' },
      { id: 'response', label: 'Voice Response', type: 'output', color: '#10b981' }
    ],
    features: [
      'Voice-to-Action Execution',
      'Email & Calendar Management',
      'Real-time Web Search',
      'Seamless Voice/Text Handoff'
    ],
    techStack: ['LangChain', 'Groq LLM', 'Streamlit', 'Google APIs'],
    liveUrl: null,
    githubUrl: 'https://github.com/ahmadarif238',
    stats: 'Real-time Voice Processing'
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
    role: 'AI Automation Engineer & Cloud Assistant',
    company: 'Int. Dublin Tax Company Ltd.',
    period: 'Present',
    location: 'Remote (International)',
    points: [
      'Design and implement AI-driven automation and cloud solutions across Microsoft Azure, Power Platform, and Power Automate.',
      'Build and manage workflow automations in n8n, adding AI capabilities to create agent-based systems.',
      'Develop and deploy API-based automation services that connect cloud platforms, business tools, and AI models.',
      'Support cloud operations and AI-powered process automation in a fully remote international environment.',
      'Collaborate on automation projects and contribute to scalable, production-ready cloud and AI infrastructure.'
    ],
    isCurrent: true
  },
  {
    role: 'Software Engineer & AI Developer',
    company: 'Freelance / Independent Projects',
    period: '2024 to Present',
    location: 'Pakistan / Worldwide (Remote)',
    points: [
      'Built websites, web applications, and AI assistants for clients across several industries.',
      'Developed chatbots and voice-based calling agents, integrated directly into client websites and CRMs.',
      'Delivered automation systems that replaced manual inventory, sales, and support workflows, cutting 60%+ of research time.',
      'Architected zero-hallucination RAG platforms with source citations for legal, financial, and operational use cases.'
    ]
  },
  {
    role: 'Computer Vision Intern',
    company: 'ITSOLERA Pvt. Ltd',
    period: 'Jul 2024 to Oct 2024',
    location: 'Pakistan',
    points: [
      'Developed real-time pedestrian detection systems using Python and OpenCV.',
      'Built object detection pipelines robust to low-light, rain, and fog conditions.'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'BSc Software Engineering',
    institution: 'University of Malakand',
    period: '2021 to 2025',
    gpa: '3.65 / 4.0'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Andrew Ng, Coursera',
    year: '2024'
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'Andrew Ng, Coursera',
    year: '2024'
  },
  {
    name: 'Understanding Agentic AI',
    issuer: 'AgentAcademy',
    year: '2025'
  },
  {
    name: 'Fundamentals of Agents',
    issuer: 'Hugging Face',
    year: '2025'
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: 'AI & Multi-Agent Frameworks',
    description: 'Architecting cognitive multi-agent workflows and high-speed inference',
    skills: [
      { name: 'LangGraph & LangChain', proficiency: 95, highlight: 'Deterministic agent-of-agents' },
      { name: 'Groq LPU & Cerebras', proficiency: 92, highlight: 'Sub-second inference' },
      { name: 'Claude (Anthropic) & OpenAI', proficiency: 95, highlight: 'Structured reasoning' },
      { name: 'LLaMA 3 & DeepSeek', proficiency: 88, highlight: 'Open-weight fine-tuning' },
      { name: 'Pinecone & Supabase Vector', proficiency: 92, highlight: 'RAG semantic search' }
    ]
  },
  {
    category: 'Backend & Cloud Engineering',
    description: 'High-concurrency microservices, APIs, and cloud containerization',
    skills: [
      { name: 'Python & FastAPI', proficiency: 95, highlight: 'Async API architectures' },
      { name: 'Node.js & Express', proficiency: 90, highlight: 'Event-driven servers' },
      { name: 'PostgreSQL & Redis', proficiency: 88, highlight: 'Relational & cache layers' },
      { name: 'Microsoft Azure & Power Platform', proficiency: 85, highlight: 'Enterprise cloud services' },
      { name: 'Docker & Linux', proficiency: 90, highlight: 'Containerized deployment' }
    ]
  },
  {
    category: 'Frontend & Modern Web',
    description: 'Ultra-fast interfaces, modern typography, and reactive user experiences',
    skills: [
      { name: 'React 19 & Next.js', proficiency: 92, highlight: 'Server components & SPA' },
      { name: 'TypeScript', proficiency: 94, highlight: 'Strict type safety' },
      { name: 'Tailwind CSS', proficiency: 96, highlight: 'Utility-first styling' },
      { name: 'Framer Motion & Animations', proficiency: 88, highlight: 'Fluid interactions' }
    ]
  },
  {
    category: 'Automation & Integration',
    description: 'Connecting fragmented software into autonomous digital workflows',
    skills: [
      { name: 'n8n & Make', proficiency: 96, highlight: 'Complex multi-step pipelines' },
      { name: 'Zapier & Webhooks', proficiency: 92, highlight: 'Ecosystem bridges' },
      { name: 'Twilio & Voice AI (Vapi)', proficiency: 86, highlight: 'Phone calling agents' },
      { name: 'Google & Microsoft APIs', proficiency: 92, highlight: 'Workspace automations' }
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
