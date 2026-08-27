export const services = [
    {
        title: 'Agentic AI Systems',
        icon: 'agents',
        description:
            'Multi-agent architectures on LangGraph and LangChain where specialised agents plan, delegate, and validate each other instead of one prompt doing everything.',
        deliverables: ['Graph-based orchestration', 'Tool & function calling', 'Self-correcting agent loops'],
    },
    {
        title: 'RAG & Retrieval',
        icon: 'retrieval',
        description:
            'Production retrieval pipelines grounded in vector stores, with citation enforcement so every answer the system gives is traceable back to a source document.',
        deliverables: ['Pinecone / pgvector indexing', 'Hybrid semantic search', 'Zero-hallucination guardrails'],
    },
    {
        title: 'Workflow Automation',
        icon: 'automation',
        description:
            'End-to-end operational automation across n8n, Power Automate, and custom FastAPI services — connecting business tools to AI models without brittle glue code.',
        deliverables: ['n8n & Power Platform', 'FastAPI microservices', 'Scheduled agent pipelines'],
    },
];

export const process = [
    {
        step: '01',
        title: 'Discovery',
        description:
            'Map the actual operational bottleneck, the data available, and where an agent genuinely beats a script. We define the blueprint before a line of code.',
    },
    {
        step: '02',
        title: 'Architecture',
        description:
            'Design the agent graph, retrieval strategy, and evaluation criteria. Every agent has to justify its cost in latency and tokens.',
    },
    {
        step: '03',
        title: 'Engineering',
        description:
            'Build the system on FastAPI with typed contracts, vector-grounded retrieval, and observability wired in from the first commit — not bolted on later.',
    },
    {
        step: '04',
        title: 'Deployment',
        description:
            'Containerise, load-test, and ship. Then monitor grounding accuracy and response latency so regressions surface before your users find them.',
    },
];
