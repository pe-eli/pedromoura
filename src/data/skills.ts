import type { Skill, SkillCategory } from "./types";

export const skills: Skill[] = [
  // Frontend — seu core, projetos em produção comprovam
  { name: "React", level: 90, icon: "react", category: "frontend" },
  { name: "TypeScript", level: 85, icon: "typescript", category: "frontend" },
  { name: "HTML & CSS", level: 90, icon: "html5", category: "frontend" },
  { name: "Tailwind CSS", level: 85, icon: "tailwindcss", category: "frontend" },
  { name: "Responsive Design", level: 88, icon: "responsive", category: "frontend" },

  // Backend / Integration — usado nos projetos reais
  { name: "Node.js", level: 85, icon: "nodedotjs", category: "backend" },
  { name: "Express", level: 72, icon: "express", category: "backend" },
  { name: "REST APIs", level: 82, icon: "api", category: "backend" },
  { name: "Firebase", level: 78, icon: "firebase", category: "backend" },

  { name: "Git & GitHub", level: 85, icon: "github", category: "tools" },
  { name: "Vercel", level: 80, icon: "vercel", category: "tools" },

  { name: "AI Agents", level: 90, icon: "ai", category: "ai" },
  { name: "Make (Automação)", level: 65, icon: "automation", category: "ai" },

  { name: "Figma", level: 65, icon: "figma", category: "design" },
  { name: "Canva", level: 65, icon: "canva", category: "design" },
];

export const skillCategories: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "DevOps & Tools",
  design: "Design",
  ai: "IA & Automação",
};
