import type { LucideIcon } from "lucide-react";

export type ContactLink = {
  label: string;
  href: string;
  value: string;
  icon: LucideIcon;
};

export type SkillCategory = {
  title: string;
  items: string[];
  icon: LucideIcon;
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
};

export type Project = {
  title: string;
  description: string;
  impact: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
};

export type Highlight = {
  label: string;
  value: string;
};

export type AboutCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};
