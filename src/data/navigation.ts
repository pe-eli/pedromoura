import {
  Home,
  Layers,
  FolderKanban,
  GraduationCap,
  Globe,
} from "lucide-react";
import type { NavItem } from "./types";

const baseUrl = import.meta.env.BASE_URL;

function withBase(path: string) {
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}${path}`;
}

export const navItems: NavItem[] = [
  { page: "home", label: "Início", labelEn: "Home", href: withBase("index.html"), icon: Home },
  { page: "skills", label: "Competências", labelEn: "Skills", href: withBase("skills.html"), icon: Layers },
  { page: "portfolio", label: "Portfólio", labelEn: "Portfolio", href: withBase("portfolio.html"), icon: FolderKanban },
  { page: "education", label: "Formação", labelEn: "Education", href: withBase("education.html"), icon: GraduationCap },
  { page: "languages", label: "Idiomas", labelEn: "Languages", href: withBase("languages.html"), icon: Globe },
];
