/**
 * Art direction for every baked cover in public/covers.
 *
 * Each cover is the stage's ribbon set shot from its own angle, with a white
 * line icon that says what the project does. Rebake with `npm run covers`
 * after changing anything here.
 */
export interface CoverSpec {
  id: string;
  icon: string; // lucide-react export name
  seed: number;
  cam: [number, number, number];
  look: [number, number, number];
  roll?: number;
}

export const COVERS: CoverSpec[] = [
  // projects
  { id: 'contract-iq', icon: 'FileSearch', seed: 11, cam: [2, 1, 10], look: [3, 1, 0], roll: 0.2 },
  { id: 'vivagraph-ai', icon: 'AudioLines', seed: 23, cam: [-1, 2, 11], look: [2, 2, -1], roll: -0.15 },
  { id: 'ai-sales-automation-agent', icon: 'Target', seed: 5, cam: [4, -1, 9], look: [4, 2, -2], roll: 0.4 },
  { id: 'smart-supply-chain-agent', icon: 'Boxes', seed: 42, cam: [0, 3, 12], look: [3, 0, -2], roll: -0.35 },
  { id: 'stock-news-alert-agent', icon: 'TrendingUp', seed: 77, cam: [5, 2, 10], look: [2, 3, -1], roll: 0.1 },
  { id: 'ai-operations-copilot', icon: 'BotMessageSquare', seed: 8, cam: [-2, 0, 9], look: [3, 2, 0], roll: 0.55 },
  { id: 'voice-enabled-executive-agent', icon: 'CalendarClock', seed: 64, cam: [3, 4, 11], look: [3, 1, -2], roll: -0.25 },
  // blog
  { id: 'blog-building-zero-hallucination-legal-ai', icon: 'ShieldCheck', seed: 101, cam: [1, 2, 10], look: [3, 2, -1], roll: 0.3 },
  { id: 'blog-multi-agent-architecture-patterns-langgraph', icon: 'Network', seed: 202, cam: [4, 0, 9], look: [3, 2, -2], roll: -0.2 },
  { id: 'blog-voice-ai-under-pressure-viva-lessons', icon: 'Mic', seed: 303, cam: [-1, 3, 11], look: [2, 1, -1], roll: 0.45 },
  { id: 'blog-automating-b2b-sales-with-agents', icon: 'Workflow', seed: 404, cam: [2, -1, 10], look: [4, 2, 0], roll: -0.4 },
  // about
  { id: 'about', icon: 'none', seed: 9, cam: [0, 1, 12], look: [3, 1, -1], roll: 0 }
];

export const coverUrl = (id: string) => `/covers/${id}.jpg`;
