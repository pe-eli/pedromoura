import type { EducationItem, Certification } from "./types";

export const education: EducationItem[] = [
  {
    id: "bsc-cs",
    institution: "Escola Técnica Pandiá Calógeras",
    degree: "Técnico em Mecatrônica",
    degreeEn: "Mechatronics Technician",
    field: "",
    startYear: 2021,
    endYear: 2023,
    description:
      "Formação técnica com base em eletrônica, programação embarcada e automação de sistemas. TCC com foco em integração de hardware e software, unindo engenharia física à lógica computacional — base que moldou o raciocínio analítico e orientado a performance no desenvolvimento de software.",
    descriptionEn:
      "Technical education focused on electronics, embedded programming, and systems automation. Final project centered on hardware and software integration, combining physical engineering with computational logic - a foundation that shaped my analytical and performance-oriented mindset in software development.",
  },
  {
    id: "mba-eng",
    institution: "Autodidata / Projetos Práticos",
    degree: "Desenvolvimento de Software & IA Aplicada",
    degreeEn: "Software Development & Applied AI",
    field: "",
    startYear: 2023,
    endYear: null,
    description:
      "Aprendizado contínuo em desenvolvimento frontend com React, TypeScript e Tailwind CSS. Exploração de arquitetura de sistemas modernos, automação de workflows e uso de agentes de IA para produtividade — incluindo orquestração de LLMs, integração com ferramentas como Claude e ChatGPT, e construção de pipelines inteligentes para acelerar o desenvolvimento.",
    descriptionEn:
      "Continuous learning in frontend development with React, TypeScript, and Tailwind CSS. Exploration of modern systems architecture, workflow automation, and AI agents for productivity - including LLM orchestration, integration with tools like Claude and ChatGPT, and intelligent pipelines to accelerate development.",
  },
];

export const certifications: Certification[] = [
  {
    id: "alura-ia",
    name: "Carreira Especialista em IA",
    nameEn: "AI Specialist Career Track",
    issuer: "Alura",
    year: 2024,
    credentialUrl: "#",
  },
  {
    id: "alura-python-ia",
    name: "Python: Inteligência Artificial Aplicada",
    nameEn: "Python: Applied Artificial Intelligence",
    issuer: "Alura",
    year: 2024,
    credentialUrl: "#",
  },
  {
    id: "alura-make",
    name: "Make: Automatizando Respostas de Clientes",
    nameEn: "Make: Automating Customer Responses",
    issuer: "Alura",
    year: 2024,
    credentialUrl: "#",
  },
  {
    id: "alura-mongodb",
    name: "MongoDB: Banco de Dados NoSQL",
    nameEn: "MongoDB: NoSQL Database",
    issuer: "Alura",
    year: 2024,
    credentialUrl: "#",
  },
];
