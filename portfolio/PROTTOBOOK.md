Barbearia Elite – Landing Page com Agendamento Online
Projeto de portfólio / Site para barbearia

Link: prottocode-barb.vercel.app

Descrição
Desenvolvi uma landing page completa para uma barbearia fictícia, com foco em apresentar os serviços, construir credibilidade através de métricas e depoimentos, e permitir agendamento online de forma simples e rápida. O projeto simula um ambiente real de negócio local, com design moderno que combina o charme de barbearias tradicionais com funcionalidades digitais.

Tecnologias utilizadas
React com TypeScript – para construção de componentes modulares (cards de serviços, depoimentos, seção de diferenciais) e tipagem estática dos dados, garantindo segurança e facilidade de manutenção.

Next.js – utilizado para geração estática (SSG) e otimização de SEO, permitindo carregamento rápido e boa indexação nos mecanismos de busca.

CSS Modules / Tailwind CSS – estilização responsiva e consistente, com abordagem mobile-first para garantir boa experiência em todos os dispositivos.

Node.js (backend próprio) – API desenvolvida para gerenciar os agendamentos, armazenar horários disponíveis e processar as reservas.

Integração com API de pagamentos (opcional) – para permitir pagamento antecipado dos serviços (caso implementado, poderia utilizar Mercado Pago ou similar, conforme experiência anterior).

Principais features e decisões de frontend
Hero com informações de contato – título, endereço, horário de funcionamento e badge de “Agendamento online disponível” para destacar a principal funcionalidade.

Métricas de credibilidade – exibição de 2.000+ clientes, nota 4.9, 4 barbeiros e ano de fundação (2018), utilizando ícones e números em destaque para gerar confiança.

Cards de serviços – dois cards principais (Corte Masculino e Corte + Barba) com duração, preço e botão de agendamento. Estrutura preparada para expansão com novos serviços.

Seção “Sobre nós” – lista de diferenciais (profissionais certificados, produtos premium, Wi-Fi, estacionamento, etc.) com ícones, reforçando a proposta de valor.

Depoimentos em cards – três avaliações reais de clientes fictícios, com nome, data e texto, incluindo uma média geral (4.9 com +200 avaliações) como prova social.

Localização e mapa – seção com endereço completo e espaço reservado para incorporação de mapa (Google Maps ou similar), facilitando a localização física.

CTA final para agendamento – botão de destaque que leva o usuário ao sistema de reservas, com mensagem reforçando a facilidade (“em menos de 2 minutos, sem ligações, sem fila”).

Sistema de agendamento integrado – API em Node que gerencia datas e horários disponíveis, evita conflitos de reservas e armazena os dados do cliente. O frontend consome essa API e fornece feedback em tempo real.

Design responsivo – layout adaptado para celulares, tablets e desktops, essencial para um negócio local onde a maioria dos acessos ocorre via smartphone.

Resultados e aprendizados
O projeto consolidou minha experiência em criar sistemas de agendamento com backend próprio, lidando com validações, regras de negócio (horários, capacidade) e comunicação assíncrona com o frontend.

Utilizei TypeScript para tipar tanto os dados dos serviços quanto as respostas da API de agendamento, reduzindo erros e facilitando a evolução do sistema.

Apliquei SEO on-page com Next.js (meta tags, estrutura de headings, URLs semânticas) para maximizar a visibilidade orgânica do site.

Desenvolvi um design acolhedor e alinhado à identidade visual de barbearias, combinando elementos tradicionais com uma interface moderna e intuitiva.