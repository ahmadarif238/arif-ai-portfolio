export interface ArchitectureNode {
  id: string;
  label: string;
  name?: string;
  role?: string;
  details?: string;
  type: 'input' | 'process' | 'agent' | 'output';
  color: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI Agents' | 'Automation' | 'Voice AI' | 'Chatbots' | 'Web Apps';
  description: string;
  problem: string;
  solution: string;
  metrics: Metric[];
  workflow: string[];
  architecture: ArchitectureNode[];
  features: string[];
  techStack: string[];
  liveUrl: string | null;
  demoUrl?: string | null;
  githubUrl: string | null;
  stats: string;
  featured?: boolean;
  thumbnailUrl?: string;
  timeline?: string;
}

export interface Service {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  summary: string;
  keyPoints: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  description?: string;
  technologies?: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  grade?: string;
  description?: string;
}

export interface CertificationItem {
  name: string;
  title?: string;
  issuer: string;
  year?: string;
}

export interface SkillItem {
  name: string;
  proficiency: number;
  highlight: string;
  level?: string;
}

export interface TechCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice: string | number;
  annualPrice: string | number;
  periodLabel: string;
  period?: string;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ThemeColorPreset {
  id: string;
  name: string;
  primary: string;
  hover: string;
  rgb: string;
}
