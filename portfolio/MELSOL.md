MelSol – E-commerce de Moda Praia
Projeto de portfólio / Loja virtual completa

Link: melsol-demo.vercel.app

Descrição
Desenvolvi um e-commerce completo para uma marca fictícia de moda praia, com vitrine de produtos, carrinho de compras, checkout integrado e painel administrativo. O projeto simula uma loja real, com foco em experiência de usuário fluida, design que evoca a identidade da marca (verão, praia, liberdade) e funcionalidades essenciais para conversão de vendas.

Tecnologias utilizadas
React com TypeScript – para construção de componentes reutilizáveis (cards de produto, carrinho, modais) e tipagem estática dos dados de produtos, variantes e pedidos.

Next.js – utilizado para rotas, renderização estática (SSG) das páginas de produtos e otimização de SEO, garantindo carregamento rápido e boa indexação.

Node.js (backend próprio) – API RESTful desenvolvida para gerenciar produtos, carrinho, pedidos, cupons de desconto e autenticação de usuários.

PostgreSQL – banco de dados relacional para armazenar produtos, categorias, pedidos, clientes e relacionamentos.

API do Mercado Pago – integração completa para pagamentos via Pix, cartão de crédito e boleto, com geração de preferências de pagamento e tratamento de webhooks para confirmação de pedidos.

Tailwind CSS – estilização responsiva e moderna, com foco em apresentação visual que reflete a identidade da marca (cores claras, tipografia leve, espaçamentos arejados).

Principais features e decisões de frontend
Landing page com coleção em destaque – hero com título impactante e chamada para a nova coleção; seção com produtos em destaque, exibindo imagem, nome, preço, badge de “Novo” e descontos percentuais.

Vitrine de produtos – grid responsivo de produtos consumindo a API em Node. Cada card possui hover sutil, botão de compra rápida e link para página de detalhes.

Carrinho de compras – gerenciado com estado global (Context API ou Zustand), permitindo adicionar/remover itens, alterar quantidades e aplicar cupons de desconto. Modal ou página separada para visualização.

Checkout integrado com Mercado Pago – fluxo que coleta dados de entrega (simulados), aplica frete, calcula total e redireciona para pagamento via Pix ou cartão. Webhooks atualizam o status do pedido automaticamente.

Sistema de cupons de desconto – funcionalidade que valida códigos promocionais no backend e aplica percentual ou valor fixo ao carrinho.

Painel administrativo (simulado ou completo) – área restrita para gerenciar produtos, pedidos e cupons. Desenvolvido com componentes de tabela, formulários e modais para edição.

Página de produto detalhada – exibição com imagens ampliadas, descrição, opções de tamanho/cor, preço e botão de adicionar ao carrinho.

Seção “Nossa História” e diferenciais – conteúdo institucional com três pilares (Feito com Amor, Sustentável, Qualidade Premium) para reforçar a identidade da marca e gerar conexão emocional.

Design responsivo e mobile-first – essencial para e-commerce, onde a maioria das compras ocorre via smartphone. Layout adaptado com menu hambúrguer e carrossel para coleções.

Resultados e aprendizados
O projeto consolidou minha experiência em e-commerce completo, desde a vitrine até o checkout, incluindo integração com gateway de pagamento e gestão de estoque.

Aprimorei o uso de TypeScript para tipar produtos, variantes e respostas da API, reduzindo erros e facilitando a evolução do sistema.

Implementei lógica de cupons de desconto e frete no backend, com validações e cálculo dinâmico no frontend.

A integração com Mercado Pago foi estendida para incluir Pix com QR Code dinâmico e tratamento de webhooks para confirmação automática de pagamento.

Desenvolvi um design visualmente atraente e alinhado à identidade da marca, utilizando Tailwind CSS para criar uma experiência que evoca praia, leveza e verão.