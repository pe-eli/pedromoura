import type { LucideIcon } from "lucide-react";

export interface Profile {
  name: string;
  title: string;
  titleEn?: string;
  bio: string;
  bioEn?: string;
  avatarUrl: string;
  cvUrl: string;
  socials: SocialLink[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: SkillCategory;
}

export type SkillCategory = "frontend" | "backend" | "tools" | "design" | "ai";

export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  degreeEn?: string;
  field: string;
  startYear: number;
  endYear: number | null;
  description: string;
  descriptionEn?: string;
}

export interface Certification {
  id: string;
  name: string;
  nameEn?: string;
  issuer: string;
  year: number;
  credentialUrl?: string;
}

export interface Language {
  name: string;
  nameEn?: string;
  level: string;
  levelEn?: string;
  proficiency: number;
  flag: string;
}

export interface NavItem {
  page: AppPage;
  label: string;
  labelEn?: string;
  href: string;
  icon: LucideIcon;
}

export type AppPage = "home" | "skills" | "portfolio" | "education" | "languages";
export type Locale = "pt" | "en";
