import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "di-mouras-catalogo-digital",
    title: "Di Mouras",
    titleEn: "Di Mouras",
    description:
      "Catálogo digital para hamburgueria e pizzaria com checkout simplificado, carrinho dinâmico e integração de pagamentos via Mercado Pago.",
    descriptionEn:
      "Digital catalog for a burger and pizza restaurant with simplified checkout, dynamic cart, and Mercado Pago payment integration.",
    imageUrl:
      "/portfolio/dimouras.png",
    tags: ["Node.js","React", "TypeScript", "Mercado Pago", "CSS"],
    liveUrl: "https://dimouras.com.br/catalogo",
  },
  {
    id: "melsol-ecommerce",
    title: "MelSol",
    titleEn: "MelSol",
    description:
      "E-commerce de moda praia com vitrine responsiva, cupons, painel administrativo e checkout integrado para Pix, boleto e cartão.",
    descriptionEn:
      "Beachwear e-commerce with responsive product showcase, coupons, admin dashboard, and integrated checkout for Pix, boleto, and credit card.",
    imageUrl:
      "/portfolio/melsol.png",
    tags: ["Node.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"],
    liveUrl: "https://melsol-demo.vercel.app",
  },
  {
    id: "nutricionista-landing-page",
    title: "Landing Page Nutricionista",
    titleEn: "Nutritionist Landing Page",
    description:
      "Landing page profissional com foco em conversão de leads, SEO e prova social para apresentação de serviços de nutrição.",
    descriptionEn:
      "Professional landing page focused on lead conversion, SEO, and social proof to present nutrition services.",
    imageUrl:
      "/portfolio/nutri.png",
    tags: ["Node.js", "React", "TypeScript", "Tailwind", "SEO"],
    liveUrl: "https://demo-nutri-five.vercel.app",
  },
  {
    id: "barbearia-elite",
    title: "Barbearia Elite",
    titleEn: "Elite Barbershop",
    description:
      "Landing page para barbearia com agendamento online, exibição de serviços e prova social para negócio local.",
    descriptionEn:
      "Barbershop landing page with online booking, service showcase, and social proof for a local business.",
    imageUrl:
      "/portfolio/barb.png",
    tags: ["Node.js", "React", "TypeScript", "Node.js", "Tailwind"],
    liveUrl: "https://prottocode-barb.vercel.app",
  },
  {
    id: "prottocode-landing-ia",
    title: "Prottocode",
    titleEn: "Prottocode",
    description:
      "Landing page de alta conversão para soluções com IA, com design system próprio, múltiplos CTAs e foco em performance.",
    descriptionEn:
      "High-conversion landing page for AI solutions with a custom design system, multiple CTAs, and performance focus.",
    imageUrl:
      "/portfolio/prottocode.png",
    tags: ["Node.js", "React", "TypeScript", "Tailwind", "Figma"],
    liveUrl: "https://prottocode.com.br",
  },
  {
    id: "prottoset-saas",
    title: "Prottoset",
    titleEn: "Prottoset",
    description:
      "Plataforma SaaS para prospecção, disparo de WhatsApp e criação de propostas comerciais com automações e IA.",
    descriptionEn:
      "SaaS platform for lead prospecting, WhatsApp outreach, and commercial proposal creation with automation and AI.",
    imageUrl:
      "/portfolio/prottoset.png",
    tags: ["Node.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"],
    liveUrl: "https://prottoset.vercel.app",
  },
  {
    id: "tatflow-saas-tattoo",
    title: "TatFlow",
    titleEn: "TatFlow",
    description:
      "SaaS para estúdios de tatuagem com fluxo completo de solicitação, orçamento, aprovação e agendamento em painel único.",
    descriptionEn:
      "SaaS for tattoo studios with an end-to-end flow for requests, quoting, approval, and scheduling in a single dashboard.",
    imageUrl:
      "/portfolio/tatflow.png",
    tags: ["Node.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "https://tatflow.vercel.app",
  },
];
