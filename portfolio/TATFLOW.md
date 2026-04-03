TatFlow – SaaS para Gestão de Estúdios de Tatuagem
Projeto de portfólio / Plataforma completa para tatuadores e clientes

Link: tatflow.vercel.app

Descrição
Desenvolvi uma plataforma SaaS (Software as a Service) completa para conectar tatuadores e clientes, substituindo a comunicação desorganizada via WhatsApp por um fluxo profissional. O sistema permite que clientes enviem solicitações detalhadas e tatuadores gerenciem orçamentos, agendamentos e agenda em um único painel. O objetivo foi criar uma solução que otimiza o tempo dos artistas e melhora a experiência do cliente.

Tecnologias utilizadas
React com TypeScript – para construção de componentes reutilizáveis, tipagem forte das entidades (solicitações, orçamentos, usuários) e gerenciamento de estado global.

Next.js – utilizado para rotas, renderização estática das páginas públicas e SSR (Server-Side Rendering) no painel autenticado, garantindo performance e SEO.

Node.js (backend próprio) – API RESTful desenvolvida para gerenciar autenticação, solicitações, orçamentos, agenda e envio de notificações.

Banco de dados relacional (PostgreSQL) – para armazenar usuários, solicitações, orçamentos, sessões e relacionamentos.

API do Mercado Pago – integrada para processamento de pagamentos de planos de assinatura (mensalidade do SaaS) ou para permitir que tatuadores recebam pagamentos de clientes diretamente pela plataforma.

Tailwind CSS – estilização responsiva e consistente, com foco em usabilidade tanto para o cliente quanto para o painel administrativo.

Principais features e decisões de frontend
Landing page de apresentação – hero com proposta de valor clara, seções que destacam os principais benefícios (solicitações organizadas, orçamentos rápidos, agenda visual) e call-to-action para criação de conta.

Formulário de solicitação para clientes – interface que coleta todas as informações relevantes (localização, estilo, tamanho, referências, disponibilidade) de forma estruturada, eliminando o vai-e-vem do WhatsApp.

Painel do tatuador – área autenticada onde o profissional visualiza todas as solicitações, responde com orçamentos (valor estimado, duração da sessão) e gerencia a agenda. Construído com componentes modais, listas e calendário interativo.

Agenda visual – calendário integrado que exibe as sessões aprovadas, permitindo ao tatuador visualizar sua semana, disponibilidade e evitar conflitos de horário.

Fluxo de aprovação e notificações – o cliente recebe notificações (via e-mail/whatsapp simuladas) quando o orçamento é enviado; após aprovação, a sessão é automaticamente adicionada à agenda.

Sistema de autenticação – login e cadastro com JWT, separando papéis (cliente e tatuador) e garantindo acesso restrito às funcionalidades adequadas.

Integração com Mercado Pago – permite que tatuadores ofereçam pagamento antecipado da sessão (garantindo a reserva) e que a plataforma cobre assinatura mensal dos estúdios. Os webhooks atualizam automaticamente o status do pagamento.

Design responsivo e mobile-first – essencial para clientes que usam o celular para enviar solicitações e para tatuadores que consultam a agenda durante o expediente.

Resultados e aprendizados
O projeto foi um dos mais desafiadores, pois envolveu a construção de um sistema completo com múltiplos perfis de usuário, permissões e um fluxo de negócio complexo (solicitação → orçamento → aprovação → agendamento).

Aprendi a estruturar um backend em Node.js com rotas bem definidas, utilizando PostgreSQL para relações complexas entre usuários, solicitações, orçamentos e sessões.

Utilizei TypeScript tanto no frontend quanto no backend, garantindo consistência e segurança na comunicação entre as camadas.

A integração com Mercado Pago reforçou minha experiência com gateways de pagamento, especialmente no tratamento de webhooks e atualização de status em tempo real.

Aprimorei minha capacidade de criar dashboards administrativos com foco em usabilidade, oferecendo uma experiência fluida mesmo para usuários com pouca familiaridade com tecnologia.

