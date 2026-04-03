Prottoset – Plataforma de Gestão, Prospecção e Vendas
Projeto de portfólio / SaaS para negócios

Link: prottoset.vercel.app

Descrição
Desenvolvi uma plataforma SaaS completa para gestão de negócios, com foco em automação de prospecção, disparo de mensagens via WhatsApp e criação de propostas comerciais estruturadas. O sistema centraliza leads, orçamentos, produtividade e vendas, oferecendo ferramentas que vão desde a captação de contatos até o fechamento de contratos.

Tecnologias utilizadas
React com TypeScript – componentes modulares, tipagem forte das entidades (leads, orçamentos, planos) e gerenciamento de estado global.

Next.js – rotas, renderização estática e SSR, além de API routes para integração com serviços externos.

Node.js (backend próprio) – API RESTful para autenticação, gestão de leads, disparo de mensagens, criação de propostas e integrações.

PostgreSQL – armazenamento relacional de leads, clientes, orçamentos, planos e históricos de interação.

Tailwind CSS – estilização responsiva e moderna, com foco em usabilidade em dashboards e formulários.

Integrações externas – Google Maps (scraping de contatos), Evolution API (disparo de WhatsApp) e IA para geração de mensagens.

Principais features e decisões de frontend
1. Módulo de Prospecção de Leads

Busca no Google Maps – permite buscar por nicho + cidade, mapear bairros e extrair contatos (telefone, site, etc.) automaticamente.

Filtros e organização – leads categorizados em abas (Total, Sem site, Alta prioridade, Convertidos).

Pipeline visual – cards organizados em colunas para acompanhamento do funil de vendas.

Pastas personalizadas – o usuário pode criar pastas para agrupar leads por campanha ou critério.

Geração de leads com parâmetros – definição de máximo de resultados, opção de adicionar telefones automaticamente a uma fila de disparo.

2. Módulo de Disparo de WhatsApp

Integração com Evolution API – envio de mensagens automatizadas sem necessidade de dispositivos intermediários.

Mensagem gerada por IA – cada lote utiliza uma mensagem inicial definida no backend (WA_SYSTEM_PROMPT), personalizável por campanha.

Configurações anti-spam – intervalo aleatório entre mensagens (ex: 15s a 45s) e controle de mensagens por lote.

Gerenciamento de destinatários – lista de números importada por texto (separadores aceitos: vírgula, ponto-e-vírgula, quebra de linha).

Simulação de envio – antes do disparo, o sistema informa quantas mensagens serão enviadas e em quantos lotes.

3. Módulo de Proposta por Pacotes

Criação de propostas com três níveis – Básico, Profissional e Premium (configuráveis).

Preços flexíveis – possibilidade de definir valor à vista (PIX), parcelado e mensalidade.

Destaque de plano – opção de marcar um dos planos como “Mais Popular” para facilitar a decisão do cliente.

Recursos por plano – lista de itens inclusos (ex: Suporte 24h, design personalizado, etc.).

Informações do projeto – campos para nome do cliente, nome do projeto, descrição e link de referência visual.

Geração de proposta profissional – a partir dos dados preenchidos, o sistema gera um documento ou link compartilhável.

4. Dashboard e módulos complementares

Visão geral de orçamentos – listagem e criação de orçamentos tradicionais (não por pacotes).

Produtividade – métricas e indicadores de desempenho (ex: leads convertidos, propostas enviadas).

Integração entre módulos – leads podem ser convertidos em clientes e vinculados a propostas; disparos de WhatsApp podem ser agendados com base em ações do usuário.

Resultados e aprendizados
O projeto exigiu a construção de fluxos complexos de automação, incluindo integração com APIs externas (Google Maps, Evolution API) e geração de conteúdo via IA.

Aprendi a estruturar permissões e ambientes multi-tenancy (opcional) para que diferentes empresas possam usar a plataforma isoladamente.

Aprimorei a criação de componentes de pipeline (drag-and-drop) e tabelas dinâmicas para gestão de leads.

Desenvolvi formulários inteligentes para criação de propostas, com validações e preview em tempo real.

Consolidei meu conhecimento em TypeScript no backend e frontend, garantindo consistência nas entidades de negócio e nas respostas das APIs.