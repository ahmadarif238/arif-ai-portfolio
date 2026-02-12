export const projects = [
    {
        id: 'contract-iq',
        title: 'ContractIQ',
        tagline: 'Autonomous Legal Contract Analysis',
        description: 'An autonomous agentic system built to analyze, verify, and benchmark complex legal agreements. Uses a Multi-Agent Graph to actively reason about contract risks, extract lifecycle dates, and compare documents side-by-side with Zero-Hallucination architecture ensuring every insight is backed by clickable citations.',
        problem: 'Lawyers waste hours searching for specific clauses across thousands of files. Comparing vendor drafts against company standards is manual and error-prone, and LLMs often hallucinate numbers and dates.',
        solution: 'A multi-agent system with Vault Intelligence for global semantic search, Intelligent Benchmarking for side-by-side comparison, and a custom "Factual Enforcer" layer that prevents the agent from inventing data.',
        metrics: [
            { value: '0', label: 'Hallucination Incidents' },
            { value: '4', label: 'Specialized Agents' },
            { value: '<2s', label: 'Query Response Time' }
        ],
        workflow: [
            'Index entire contract repository into Pinecone Vector Store.',
            'Perform global semantic search across all documents.',
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
        type: 'Agentic AI'
    },
    {
        id: 'vivagraph-ai',
        title: 'VivaGraph AI',
        tagline: 'AI-Powered Oral Exam & Presentation Simulator',
        description: 'An advanced multi-agent platform designed to simulate the psychological pressure of real-world oral examinations. Features a Cognitive Core of 7 specialized AI Agents that can switch personas—from a helpful coach to a strict professor—with real-time voice analysis, filler word detection, and dynamic difficulty adjustment.',
        problem: 'Most students fail oral exams not because they don\'t know the material, but because they panic under questioning. Current AI tools like ChatGPT are too nice and don\'t simulate real examiner pressure.',
        solution: 'A multi-agent system with 7 specialized agents (Chief Examiner, Researcher, Personality, Psychology, Teacher) that simulates realistic exam pressure with voice analysis and adaptive difficulty.',
        metrics: [
            { value: '7', label: 'Cognitive Agents' },
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
        type: 'Generative AI'
    },
    {
        id: 'ai-sales-automation-agent',
        title: 'SalesAI: B2B Sales Automation',
        tagline: 'Agent-of-Agents Outbound Pipeline',
        description: 'A full-stack "Agent of Agents" system that coordinates multiple specialized sub-agents to automate the entire B2B sales pipeline. From a single search query, the system orchestrates lead generation, qualification, scoring, and personalized engagement—replacing 60% of manual sales research time.',
        problem: 'Sales teams spend 60% of their time on manual research, finding emails, and qualifying leads instead of actually selling.',
        solution: 'An agent-of-agents architecture where a single search query triggers a deterministic pipeline of specialized sub-agents that deliver a qualified, scored, and engaged list of prospects.',
        metrics: [
            { value: '60%', label: 'Research Time Saved' },
            { value: '<30s', label: 'Pipeline Execution' },
            { value: '4', label: 'Coordinated Agents' }
        ],
        workflow: [
            'Input a single search query for target prospects.',
            'Lead Generation Agent scrapes and aggregates data.',
            'Scoring Agent qualifies and ranks leads.',
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
        type: 'Agentic AI'
    },
    {
        id: 'smart-supply-chain-agent',
        title: 'Smart Supply Chain Management Agent',
        tagline: 'Autonomous Inventory & Demand Forecasting',
        description: 'Engineered an autonomous multi-agent system to manage inventory 24/7, replacing manual workflows with self-correcting AI agents. Implemented a hybrid engine combining Linear Programming and LLMs to forecast demand and autonomously negotiate purchase orders within budget.',
        problem: 'Manual inventory management is prone to human error, leading to overstocking or stockouts and inefficient procurement processes.',
        solution: 'A 24/7 autonomous agent that forecasts demand using LLMs and Linear Programming, and automates negotiation and purchasing.',
        metrics: [
            { value: '24/7', label: 'Autonomous Operation' },
            { value: 'Hybrid', label: 'LP + LLM Engine' },
            { value: 'Auto', label: 'Budget Negotiation' }
        ],
        workflow: [
            'Monitor inventory levels continuously.',
            'Forecast demand using hybrid LLM + Linear Programming engine.',
            'Autonomously negotiate purchase orders.',
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
        stats: 'Autonomous negotiation & forecasting',
        type: 'Agentic AI'
    },
    {
        id: 'stock-news-alert-agent',
        title: 'Stock News Alert Agent',
        tagline: 'Real-time Sentiment Analysis',
        description: 'Created an AI agent that monitors real-time financial news and delivers instant sentiment-analyzed alerts via Telegram. Integrated Groq Models to summarize market impact and Python for automated RSS parsing.',
        problem: 'Traders miss critical market movements due to the sheer volume of financial news and delayed analysis.',
        solution: 'An agent that filters noise, analyzes sentiment instantly, and pushes alerts directly to Telegram.',
        metrics: [
            { value: 'Instant', label: 'Alert Delivery' },
            { value: 'Real-time', label: 'RSS Monitoring' },
            { value: 'Auto', label: 'Sentiment Scoring' }
        ],
        workflow: [
            'Parse real-time RSS news feeds.',
            'Analyze sentiment and market impact with Groq.',
            'Summarize key insights.',
            'Dispatch instant Telegram alerts.'
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
        stats: 'Instant Sentiment Alerts',
        type: 'FinTech AI'
    },
    {
        id: 'ai-operations-copilot',
        title: 'AI Operations Copilot',
        tagline: 'Internal Ops Automation & RAG',
        description: 'Built a multi-agent system to automate IT operations, including policy Q&A, log monitoring, and ticket generation. Developed RAG architecture using Groq Models for intelligent retrieval from standard operating procedures (SOPs).',
        problem: 'Internal IT teams are overwhelmed with repetitive tickets, policy questions, and manual log monitoring.',
        solution: 'A multi-agent RAG system that answers policy questions, monitors logs, and identifies issues automatically.',
        metrics: [
            { value: 'RAG', label: 'Architecture' },
            { value: 'Auto', label: 'Ticket Generation' },
            { value: '3', label: 'Agent Modules' }
        ],
        workflow: [
            'Ingest and index SOPs into Vector DB.',
            'Retrieve context using Groq Models for Q&A.',
            'Monitor system logs for anomalies.',
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
        stats: 'Scalable RAG Architecture',
        type: 'Internal Tools'
    },
    {
        id: 'voice-enabled-executive-agent',
        title: 'Voice-Enabled Executive Agent',
        tagline: 'Real-time Voice Interaction & Automation',
        description: 'Developed a voice-enabled AI agent capable of managing emails, calendar events, and web searches via natural language commands. Integrated LangChain, Groq LLM, and Google APIs to enable seamless real-time voice and text interaction.',
        problem: 'Executives need a hands-free, efficient way to manage their digital workspace while on the move.',
        solution: 'A voice-first agent that executes complex tasks like scheduling and emailing through natural conversation.',
        metrics: [
            { value: 'Voice', label: 'First Interface' },
            { value: '3', label: 'Integrated APIs' },
            { value: 'Real-time', label: 'Processing Speed' }
        ],
        workflow: [
            'Capture voice input via Streamlit interface.',
            'Transcribe and process commands using Groq LLM.',
            'Execute actions via Google APIs (Gmail, Calendar).',
            'Provide real-time voice feedback.'
        ],
        architecture: [
            { id: 'voice', label: 'Voice Input', type: 'input', color: '#f43f5e' },
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
        stats: 'Real-time Voice Processing',
        type: 'Generative AI'
    }
];
