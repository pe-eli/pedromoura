/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { AppPage, Locale } from "../data/types";

const STORAGE_KEY = "portfolio-locale";

const text = {
  pt: {
    nav: {
      home: "Início",
      skills: "Competências",
      portfolio: "Portfólio",
      education: "Formação",
      languages: "Idiomas",
    },
    hero: {
      welcome: "BEM-VINDO AO MEU MUNDO",
      roles: ["Desenvolvedor Front-end", "Especialista em React", "Entusiasta de UI/UX"],
      viewWork: "VER MEUS PROJETOS",
      downloadCv: "BAIXAR CV",
    },
    skills: {
      title: "Especialidades",
      subtitle: "Tecnologias e ferramentas que domino para criar soluções de ponta.",
      all: "TODAS",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Ferramentas",
        design: "Design",
        ai: "IA & Automação",
      },
    },
    portfolio: {
      title: "Portfólio",
      subtitle: "Projetos selecionados que demonstram minha expertise em diferentes domínios.",
      viewProject: "Ver projeto",
      viewCode: "Ver código",
    },
    education: {
      title: "Formação & Certificações",
      subtitle: "Minha jornada acadêmica e certificações profissionais.",
      educationLabel: "FORMAÇÃO",
      certificationsLabel: "CERTIFICAÇÕES",
      inProgress: "EM ANDAMENTO",
      present: "Presente",
      viewCredential: "Ver credencial",
    },
    languages: {
      title: "Idiomas",
      subtitle: "Idiomas que utilizo para comunicação global.",
      levels: {
        "Nativo": "Nativo",
        "Fluente (C1)": "Fluente (C1)",
        "Intermediário (B2)": "Intermediário (B2)",
        "Básico (A2)": "Básico (A2)",
      },
    },
    toggleLanguage: "Mudar para inglês",
  },
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      portfolio: "Portfolio",
      education: "Education",
      languages: "Languages",
    },
    hero: {
      welcome: "WELCOME TO MY WORLD",
      roles: ["Front-end Developer", "React Specialist", "UI/UX Enthusiast"],
      viewWork: "VIEW MY WORK",
      downloadCv: "DOWNLOAD CV",
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "Technologies and tools I master to build high-impact solutions.",
      all: "ALL",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
        design: "Design",
        ai: "AI & Automation",
      },
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Selected projects that demonstrate my expertise across multiple domains.",
      viewProject: "View project",
      viewCode: "View code",
    },
    education: {
      title: "Education & Certifications",
      subtitle: "My academic journey and professional certifications.",
      educationLabel: "EDUCATION",
      certificationsLabel: "CERTIFICATIONS",
      inProgress: "IN PROGRESS",
      present: "Present",
      viewCredential: "View credential",
    },
    languages: {
      title: "Languages",
      subtitle: "Languages I use for global communication.",
      levels: {
        "Nativo": "Native",
        "Fluente (C1)": "Fluent (C1)",
        "Intermediário (B2)": "Intermediate (B2)",
        "Básico (A2)": "Basic (A2)",
      },
    },
    toggleLanguage: "Switch to Portuguese",
  },
} as const;

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  text: (typeof text)[Locale];
  getPageTitle: (page: AppPage) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "en" ? "en" : "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => {
    const currentText = text[locale];

    return {
      locale,
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === "pt" ? "en" : "pt")),
      text: currentText,
      getPageTitle: (page) => {
        const pageLabels = currentText.nav;
        const suffix = "Pedro Moura";
        switch (page) {
          case "home":
            return `${pageLabels.home} | ${suffix}`;
          case "skills":
            return `${pageLabels.skills} | ${suffix}`;
          case "portfolio":
            return `${pageLabels.portfolio} | ${suffix}`;
          case "education":
            return `${pageLabels.education} | ${suffix}`;
          case "languages":
            return `${pageLabels.languages} | ${suffix}`;
          default:
            return suffix;
        }
      },
    };
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
