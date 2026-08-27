export const projects = [
    {
        id: 'contract-iq',
        title: 'ContractIQ',
        tagline: 'Contract Review, Handled Automatically',
        description: 'An AI system that reads, checks, and compares legal agreements so legal teams stop searching through files by hand. It flags risky clauses, pulls out key dates, and puts contracts side by side. Every answer links back to the exact paragraph it came from, so nothing is ever invented.',
        problem: 'Lawyers waste hours searching for specific clauses across thousands of files. Comparing vendor drafts against company standards is manual and error-prone, and AI tools often invent numbers and dates.',
        solution: 'A multi-agent system with Vault Intelligence for global semantic search, Intelligent Benchmarking for side-by-side comparison, and a custom "Factual Enforcer" layer that prevents the agent from inventing data.',
        metrics: [
            { value: '100%', label: 'Sourced Answers' },
            { value: '4', label: 'Review Stages' },
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
        type: 'AI Agents'
    },
    {
        id: 'vivagraph-ai',
        title: 'VivaGraph AI',
        tagline: 'Practice Interviews That Feel Real',
        description: 'A voice-based practice platform that recreates the pressure of a real oral exam or interview. The AI examiner changes character on the fly, from encouraging coach to demanding professor, while listening for hesitation, filler words, and confidence. It then hands back a full performance report.',
        problem: 'Most students fail oral exams not because they don\'t know the material, but because they panic under questioning. Current AI tools like ChatGPT are too nice and don\'t simulate real examiner pressure.',
        solution: 'A multi-agent system with 7 specialized agents (Chief Examiner, Researcher, Personality, Psychology, Teacher) that simulates realistic exam pressure with voice analysis and adaptive difficulty.',
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
        type: 'AI Assistants'
    },
    {
        id: 'ai-sales-automation-agent',
        title: 'SalesAI: B2B Sales Automation',
        tagline: 'From Search Query to Qualified Lead',
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
        type: 'Automation'
    },
    {
        id: 'smart-supply-chain-agent',
        title: 'Smart Supply Chain Management Agent',
        tagline: 'Inventory That Manages Itself',
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
        type: 'Automation'
    },
    {
        id: 'stock-news-alert-agent',
        title: 'Stock News Alert Agent',
        tagline: 'Market News, Filtered and Delivered',
        description: 'An assistant that reads financial news as it breaks, judges whether the sentiment is positive or negative, summarises what it means for the market, and pushes the alert straight to Telegram, so nothing important gets buried in the noise.',
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
        type: 'AI Assistants'
    },
    {
        id: 'ai-operations-copilot',
        title: 'AI Operations Copilot',
        tagline: 'An Assistant for Your Internal Team',
        description: 'An internal assistant trained on a company\'s own policies and procedures. Staff ask questions in plain language and get accurate answers instantly, while the system watches system logs in the background and raises support tickets before anyone notices a problem.',
        problem: 'Internal IT teams are overwhelmed with repetitive tickets, policy questions, and manual log monitoring.',
        solution: 'A multi-agent RAG system that answers policy questions, monitors logs, and identifies issues automatically.',
        metrics: [
            { value: 'Instant', label: 'Policy Answers' },
            { value: 'Auto', label: 'Ticket Generation' },
            { value: '3', label: 'Automated Modules' }
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
        type: 'Chatbots'
    },
    {
        id: 'voice-enabled-executive-agent',
        title: 'Voice-Enabled Executive Agent',
        tagline: 'Run Your Day by Voice',
        description: 'A voice assistant that handles email, calendar bookings, and web lookups through ordinary spoken requests. Ask it to clear your inbox or move a meeting and it does it, with no clicking through menus and no switching between apps.',
        problem: 'Executives need a hands-free, efficient way to manage their digital workspace while on the move.',
        solution: 'A voice-first agent that executes complex tasks like scheduling and emailing through natural conversation.',
        metrics: [
            { value: 'Voice', label: 'First Interface' },
            { value: '3', label: 'Connected Apps' },
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
        type: 'Voice AI'
    }
];
