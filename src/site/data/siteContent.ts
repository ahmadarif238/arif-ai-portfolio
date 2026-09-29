/**
 * Copy for the redesigned sections. Everything factual (projects, metrics,
 * services, experience) still comes from genz/data/portfolioData.ts; this file
 * only arranges it into the new page's structure.
 */

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Blog', to: '/blog' }
];

/** Words flashed across the stage while the hero is held down. */
export const HOLD_WORDS = ['Build', 'Automate', 'Scale'];

export const TECH_MARQUEE = [
  'LangGraph',
  'OpenAI',
  'Anthropic',
  'Groq',
  'Pinecone',
  'FastAPI',
  'React',
  'Next.js',
  'n8n',
  'Vapi',
  'Deepgram',
  'Twilio',
  'Supabase',
  'Docker',
  'Azure'
];

export type UseCaseTab = 'voice' | 'agents' | 'automation' | 'web';

export interface UseCase {
  tab: UseCaseTab;
  title: string;
  description: string;
  icon: string;
  projectId?: string;
  service: string;
}

export const USE_CASE_TABS: { value: UseCaseTab; label: string }[] = [
  { value: 'voice', label: 'Voice' },
  { value: 'agents', label: 'AI Agents' },
  { value: 'automation', label: 'Automation' },
  { value: 'web', label: 'Web & Apps' }
];

export const USE_CASES: UseCase[] = [
  { tab: 'voice', title: 'AI receptionist for inbound calls', description: 'Answers every call, qualifies the enquiry and books straight into your calendar.', icon: 'PhoneIncoming', service: 'AI Voice Calling Bot' },
  { tab: 'voice', title: 'Outbound lead qualification', description: 'Calls new leads within minutes and logs the conversation to your CRM.', icon: 'PhoneOutgoing', service: 'AI Voice Calling Bot' },
  { tab: 'voice', title: 'Voice-first executive assistant', description: 'Email, calendar and web lookups handled through ordinary spoken requests.', icon: 'AudioLines', projectId: 'voice-enabled-executive-agent', service: 'AI Voice Calling Bot' },
  { tab: 'voice', title: 'Oral exam & interview simulator', description: 'An examiner that shifts persona and scores confidence, hesitation and filler words.', icon: 'GraduationCap', projectId: 'vivagraph-ai', service: 'AI Voice Calling Bot' },

  { tab: 'agents', title: 'Zero-hallucination contract review', description: 'Flags risky clauses and compares agreements, with every answer cited to its source.', icon: 'FileSearch', projectId: 'contract-iq', service: 'Autonomous AI Agents' },
  { tab: 'agents', title: 'Internal policy copilot', description: 'Staff ask in plain language and get answers from your own SOPs, instantly.', icon: 'BotMessageSquare', projectId: 'ai-operations-copilot', service: 'Autonomous AI Agents' },
  { tab: 'agents', title: 'Market news sentiment alerts', description: 'Reads breaking financial news, scores sentiment and pushes it to Telegram.', icon: 'TrendingUp', projectId: 'stock-news-alert-agent', service: 'Autonomous AI Agents' },
  { tab: 'agents', title: 'Knowledge base over your documents', description: 'PDFs, Notion and contracts turned into a searchable, cited intelligence layer.', icon: 'Library', service: 'Autonomous AI Agents' },

  { tab: 'automation', title: 'Search query to qualified lead', description: 'One search finds, verifies, scores and writes outreach for your prospects.', icon: 'Target', projectId: 'ai-sales-automation-agent', service: 'Workflow Automation (n8n/Make)' },
  { tab: 'automation', title: 'Inventory that manages itself', description: 'Forecasts demand and places purchase orders within the budget you set.', icon: 'Boxes', projectId: 'smart-supply-chain-agent', service: 'Workflow Automation (n8n/Make)' },
  { tab: 'automation', title: 'CRM, email & sheets in sync', description: 'n8n and Make pipelines that move data between your tools without copy-paste.', icon: 'Workflow', service: 'Workflow Automation (n8n/Make)' },
  { tab: 'automation', title: 'Document & invoice processing', description: 'Extracts fields from incoming documents and routes them for approval.', icon: 'ScanText', service: 'Workflow Automation (n8n/Make)' },

  { tab: 'web', title: 'Websites that bring in customers', description: 'Fast, modern business sites built to convert visitors into enquiries.', icon: 'Globe', service: 'Full-Stack Web App' },
  { tab: 'web', title: 'Client portals & dashboards', description: 'Secure, role-based apps your team and customers work in every day.', icon: 'LayoutDashboard', service: 'Full-Stack Web App' },
  { tab: 'web', title: 'Chatbot built into your site', description: 'An assistant trained on your business that answers visitors around the clock.', icon: 'MessagesSquare', service: 'Full-Stack Web App' },
  { tab: 'web', title: 'APIs that connect your stack', description: 'FastAPI and Express services that tie cloud tools and AI models together.', icon: 'Cable', service: 'API & Cloud Microservices' }
];

export const WHY_ITEMS = [
  {
    key: 'speed',
    label: 'Sub-2s AI Answers',
    title: 'Fast from the very first request.',
    body: 'Systems are built on low-latency inference (Groq LPU, Cerebras) with retrieval tuned for speed, so answers arrive while the user is still looking at the screen, not after they have given up.'
  },
  {
    key: 'ownership',
    label: 'No Lock-ins',
    title: 'You own everything. No lock-ins.',
    body: 'Every line of code, prompt architecture, schema and document is yours on delivery. You get the full repository and cloud credentials, so you are never tied to me to keep things running.'
  },
  {
    key: 'stack',
    label: 'Your Stack, Your Way',
    title: 'Bring your own tools. I will wire them in.',
    body: 'No rip-and-replace. HubSpot, Slack, Google Workspace, Microsoft 365, Airtable or a custom database: I connect AI to the tools your team already uses, versioned and ready to scale.'
  },
  {
    key: 'visibility',
    label: 'Full Visibility',
    title: 'End-to-end visibility for every workflow.',
    body: 'Logs, alerts and usage tracking come built in. You can see what every agent decided and why, what it cost, and get told about a problem before your customers notice it.'
  }
];

export const PROCESS_ICONS = ['Search', 'PenTool', 'Code2', 'Gauge', 'Rocket', 'TrendingUp'];

export const SERVICE_OPTIONS = [
  'Autonomous AI Agents',
  'Full-Stack Web App',
  'Workflow Automation (n8n/Make)',
  'AI Voice Calling Bot',
  'API & Cloud Microservices',
  'Technical Advisory / Audit'
];
