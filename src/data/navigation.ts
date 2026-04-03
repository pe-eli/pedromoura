import {
  Home,
  Layers,
  FolderKanban,
  GraduationCap,
  Globe,
} from "lucide-react";
import type { NavItem } from "./types";

export const navItems: NavItem[] = [
  { page: "home", label: "Início", labelEn: "Home", href: "/", icon: Home },
  { page: "skills", label: "Competências", labelEn: "Skills", href: "/skills.html", icon: Layers },
  { page: "portfolio", label: "Portfólio", labelEn: "Portfolio", href: "/portfolio.html", icon: FolderKanban },
  { page: "education", label: "Formação", labelEn: "Education", href: "/education.html", icon: GraduationCap },
  { page: "languages", label: "Idiomas", labelEn: "Languages", href: "/languages.html", icon: Globe },
];
