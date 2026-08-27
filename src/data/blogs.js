export const blogPosts = [
    {
        slug: 'building-zero-hallucination-legal-ai',
        title: 'How I Built a Zero-Hallucination Legal AI Agent',
        date: '2026-02-10',
        readTime: '8 min read',
        excerpt: 'LLMs hallucinate. In legal contracts, that\'s a lawsuit waiting to happen. Here\'s how I engineered a system that never invents data, where every insight is backed by a clickable citation.',
        tags: ['Agentic AI', 'RAG', 'LangGraph'],
        relatedProject: 'contract-iq',
        content: [
            { type: 'heading', text: 'The Problem with LLMs in Legal' },
            { type: 'paragraph', text: 'Large Language Models are incredibly powerful at understanding and generating text. But they have a fatal flaw when applied to legal documents: they hallucinate. They confidently state things that aren\'t in the source material. In a courtroom, this isn\'t just wrong. It\'s dangerous.' },
            { type: 'paragraph', text: 'When I set out to build ContractIQ, the core requirement was absolute: zero hallucinations. Every single piece of information the system outputs must be directly traceable to a source document. No exceptions.' },
            { type: 'heading', text: 'The Factual Enforcer Architecture' },
            { type: 'paragraph', text: 'The solution was a multi-agent architecture built on LangGraph, where one component, the Factual Enforcer, has a single job: validate every claim against the source. Here\'s how it works:' },
            {
                type: 'list', items: [
                    'The Vault Intelligence agent performs semantic search across all indexed contracts using Pinecone',
                    'The Analysis agent generates insights and comparisons from the retrieved chunks',
                    'The Factual Enforcer intercepts every output, cross-references it against the original text, and rejects any claim that cannot be directly cited',
                    'Only validated, citation-backed responses reach the user'
                ]
            },
            { type: 'heading', text: 'Key Technical Decisions' },
            { type: 'paragraph', text: '1. Pinecone for vector storage: With thousands of contracts, traditional search fails. Pinecone\'s vector similarity search lets us find semantically related clauses across the entire repository in milliseconds.' },
            { type: 'paragraph', text: '2. Cerebras for inference speed: Legal professionals need fast responses. Cerebras\' hardware-accelerated inference brings query response times under 2 seconds.' },
            { type: 'paragraph', text: '3. LangGraph for orchestration: The multi-agent workflow requires precise control over execution order, retries, and conditional logic. LangGraph\'s graph-based approach was the perfect fit.' },
            { type: 'heading', text: 'Results' },
            { type: 'paragraph', text: 'After extensive testing across 500+ contracts, ContractIQ achieved zero hallucination incidents. Every insight is accompanied by a clickable citation to the exact source paragraph. The system processes queries in under 2 seconds using 4 specialized agents working in coordination.' },
            { type: 'paragraph', text: 'The lesson? When accuracy is non-negotiable, don\'t try to make one model do everything. Build a system of checks and balances where specialized agents validate each other\'s work.' }
        ]
    },
    {
        slug: 'multi-agent-architecture-patterns-langgraph',
        title: 'Multi-Agent Architecture Patterns in LangGraph',
        date: '2026-01-28',
        readTime: '10 min read',
        excerpt: 'After building 8+ agentic AI systems, I\'ve identified repeating patterns. Here are the three multi-agent architectures I use most and when to pick each one.',
        tags: ['LangGraph', 'Architecture', 'Multi-Agent'],
        relatedProject: null,
        content: [
            { type: 'heading', text: 'Why Multi-Agent?' },
            { type: 'paragraph', text: 'A single LLM call can answer a question. But real problems like processing contracts, automating sales pipelines, or simulating exams need systems that can plan, execute, validate, and recover from errors. That\'s where multi-agent architectures shine.' },
            { type: 'paragraph', text: 'After building 8+ production systems, I\'ve found three patterns that cover 90% of use cases:' },
            { type: 'heading', text: 'Pattern 1: The Pipeline' },
            { type: 'paragraph', text: 'The simplest pattern. Agents execute in a fixed sequence, each one transforming the output of the previous. I used this in the Stock News Alert Agent: RSS Parser → Sentiment Analyzer → Summarizer → Telegram Bot.' },
            { type: 'paragraph', text: 'When to use it: When your workflow is deterministic and each step has a clear input/output contract. Best for ETL-style data processing pipelines.' },
            { type: 'heading', text: 'Pattern 2: The Orchestrator' },
            { type: 'paragraph', text: 'A central "conductor" agent decides which sub-agents to call and in what order. The orchestrator has memory and can dynamically route tasks. I used this in the SalesAI system where the Orchestrator decides whether to call Lead Gen, Scoring, or Engagement agents based on the current pipeline state.' },
            { type: 'paragraph', text: 'When to use it: When the workflow has conditional branches, parallelism, or needs to adapt based on intermediate results.' },
            { type: 'heading', text: 'Pattern 3: The Cognitive Core' },
            { type: 'paragraph', text: 'The most complex pattern. Multiple specialized agents with distinct "personalities" or expertise collaborate through shared state. VivaGraph AI uses this with 7 agents (Chief Examiner, Researcher, Psychology, etc.) all contributing to a simulated exam experience.' },
            { type: 'paragraph', text: 'When to use it: When you need emergent behavior, rich interaction dynamics, or when the problem requires multiple perspectives to produce quality output.' },
            { type: 'heading', text: 'Implementation Tips' },
            {
                type: 'list', items: [
                    'Always define clear state schemas, because agents break when state contracts are ambiguous',
                    'Use LangGraph\'s conditional edges for dynamic routing instead of complex if/else chains',
                    'Implement timeout and retry logic at the graph level, not within individual agents',
                    'Log every state transition, because debugging these systems is hard without it'
                ]
            },
            { type: 'paragraph', text: 'Each pattern has its place. Start with the pipeline, graduate to orchestrator when you need flexibility, and reach for the cognitive core when you need multiple specialized perspectives working together.' }
        ]
    },
    {
        slug: 'voice-ai-under-pressure-viva-lessons',
        title: 'Voice AI Under Pressure: Building a Realistic Exam Simulator',
        date: '2026-01-15',
        readTime: '7 min read',
        excerpt: 'What happens when you need an AI that isn\'t nice? Lessons from building VivaGraph, a 7-agent system that simulates the psychological pressure of real oral exams.',
        tags: ['Voice AI', 'Multi-Agent', 'Psychology'],
        relatedProject: 'vivagraph-ai',
        content: [
            { type: 'heading', text: 'The Problem: AI Is Too Nice' },
            { type: 'paragraph', text: 'Students who prepare with ChatGPT for oral exams are in for a shock. ChatGPT is endlessly patient, always encouraging, and never interrupts. Real examiners? They push back. They challenge. They create pressure, and that pressure is exactly what makes oral exams so difficult.' },
            { type: 'paragraph', text: 'VivaGraph AI was born from a simple observation: students fail oral exams not because they lack knowledge, but because they crack under pressure. The solution wasn\'t better study tools. It was a more realistic simulation.' },
            { type: 'heading', text: 'The 7-Agent Cognitive Core' },
            { type: 'paragraph', text: 'The system uses 7 specialized agents, each with a distinct role:' },
            {
                type: 'list', items: [
                    'Chief Examiner: Controls the flow, decides when to push harder or ease off',
                    'Researcher Agent: Generates follow-up questions from uploaded study materials via RAG',
                    'Personality Agent: Adjusts the "personality" of questions between friendly, neutral, and strict',
                    'Psychology Agent: Monitors student confidence via voice analysis and adjusts difficulty',
                    'Teacher Agent: Steps in with coaching when the student is genuinely stuck',
                    'Voice Analyzer: Real-time detection of filler words, pauses, and confidence markers',
                    'Report Agent: Generates a detailed performance report card after each session'
                ]
            },
            { type: 'heading', text: 'The Voice Challenge' },
            { type: 'paragraph', text: 'The hardest technical challenge was real-time voice analysis on mobile devices. Browser-based speech recognition is unreliable on Android, where it often stops listening mid-sentence. We implemented a server-side transcription fallback using Groq\'s Whisper API that processes audio chunks in under 200ms.' },
            { type: 'paragraph', text: 'Another challenge: making the AI voice sound human. A robotic examiner breaks immersion. We explored ElevenLabs and OpenAI TTS to achieve natural intonation with emotional delivery that matches the current exam mood.' },
            { type: 'heading', text: 'What I Learned' },
            { type: 'paragraph', text: 'Building an AI system that intentionally creates pressure while staying ethical and educational is a fascinating design challenge. The key insight: the value of AI isn\'t always in being helpful. Sometimes it\'s in being realistically challenging.' }
        ]
    },
    {
        slug: 'automating-b2b-sales-with-agents',
        title: 'From Search Query to Closed Deal: Automating B2B Sales with AI Agents',
        date: '2026-01-05',
        readTime: '6 min read',
        excerpt: 'Sales teams spend 60% of their time researching instead of selling. Here\'s how I built an agent-of-agents system that automates the entire B2B pipeline from lead generation to personalized outreach.',
        tags: ['Sales Automation', 'Agentic AI', 'FastAPI'],
        relatedProject: 'ai-sales-automation-agent',
        content: [
            { type: 'heading', text: 'The 60% Problem' },
            { type: 'paragraph', text: 'Here\'s a stat that shocked me: B2B sales reps spend only 40% of their time actually selling. The rest goes to research, data entry, email drafting, and lead qualification. That\'s a massive waste of human potential on tasks that AI can do better and faster.' },
            { type: 'heading', text: 'The Agent-of-Agents Architecture' },
            { type: 'paragraph', text: 'SalesAI uses what I call an "agent-of-agents" pattern. A single Orchestrator agent coordinates four specialized sub-agents:' },
            {
                type: 'list', items: [
                    'Lead Generation Agent: Takes a search query and scrapes multiple data sources for prospects',
                    'Scoring Agent: evaluates each lead on fit, intent, and reachability, producing a composite score',
                    'Engagement Agent: Crafts personalized outreach copy using the prospect\'s public information',
                    'Analytics Agent: Tracks pipeline metrics and suggests optimization strategies'
                ]
            },
            { type: 'paragraph', text: 'The key design decision: the pipeline is deterministic. Unlike chat-based AI tools, SalesAI follows a strict sequence: Search → Generate → Score → Engage. This makes it predictable, testable, and reliable.' },
            { type: 'heading', text: 'Technical Stack Choices' },
            { type: 'paragraph', text: 'FastAPI for the backend was a natural choice, because async support is critical when making parallel API calls to data sources. LLaMA 3 via Groq Cloud handles the generation tasks, keeping costs low while maintaining quality. The React 19 frontend provides a real-time analytics dashboard.' },
            { type: 'heading', text: 'Results & Lessons' },
            { type: 'paragraph', text: 'The system processes an entire pipeline, from search query to personalised outreach, in under 30 seconds. The biggest lesson: in B2B automation, reliability beats intelligence. A system that works perfectly 95% of the time is worth more than one that\'s brilliant 60% of the time.' }
        ]
    }
];
