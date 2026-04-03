Di Mouras – Catálogo Digital com Integração de Pagamentos
Projeto de portfólio / E-commerce para hamburgueria e pizzaria

Link: dimouras.com.br/catalogo

Descrição
Desenvolvi um catálogo digital completo para uma hamburgueria e pizzaria, permitindo que os clientes visualizem os produtos, montem combos e finalizem pedidos com pagamento integrado. O projeto simula um ambiente de e-commerce real, com foco em usabilidade mobile e fluxo de checkout simplificado.

Tecnologias utilizadas
React com TypeScript – para construção de componentes tipados, garantindo maior segurança e manutenibilidade no gerenciamento dos produtos e estados do carrinho.

CSS puro (ou módulos CSS) – estilização customizada, com foco em design responsivo e fiel à identidade visual da marca.

Node.js (backend próprio) – API desenvolvida para gerenciar os produtos (burgers, pizzas, combos) e processar as requisições do frontend.

API do Mercado Pago – integração completa para pagamentos via Pix, cartão de crédito e boleto, com geração de preferências de pagamento e tratamento de webhooks para confirmação de pedidos.

Principais features e decisões de frontend
Listagem dinâmica de produtos – consumo da API em Node para exibir burgers, pizzas e combos. A seção “Combos” apresenta um estado de carregamento (Carregando...) enquanto os dados são buscados, garantindo feedback visual para o usuário.

Cards de produto com informações – cada item exibe nome, ingredientes principais e preço (inferido pela estrutura). Desenvolvi componentes reutilizáveis para garantir consistência entre categorias.

Monte sua pizza – funcionalidade interativa que permite ao cliente escolher ingredientes adicionais, com cálculo de preço em tempo real e atualização do carrinho.

Carrinho de compras – gerenciado com estado global (Context API ou similar), permitindo adicionar/remover itens, alterar quantidades e visualizar resumo antes do pagamento.

Checkout integrado com Mercado Pago – ao finalizar, o frontend envia os dados do pedido para a API em Node, que cria uma preferência de pagamento no Mercado Pago. O usuário é redirecionado para o ambiente seguro do Mercado Pago ou finaliza via Pix/QR Code diretamente na página.

Webhook de confirmação – o backend recebe notificações do Mercado Pago após o pagamento, atualizando o status do pedido e permitindo envio de confirmação por e-mail/whatsapp.

Design responsivo – adaptação completa para dispositivos móveis, essencial para um cardápio digital acessível via celular no próprio restaurante.

Resultados e aprendizados
A integração com o Mercado Pago foi o grande desafio do projeto, exigindo compreensão de fluxos assíncronos, tokens de acesso, criação de preferências e tratamento seguro de callbacks.

Aprimorei meus conhecimentos em TypeScript ao tipar as respostas da API e os objetos de produto/pagamento.

Desenvolvi uma estrutura de backend simples com Node.js para servir os dados e intermediar a comunicação com o gateway de pagamento, separando responsabilidades de forma clara.

Alcancei uma experiência de checkout fluida, reduzindo ao mínimo o atrito para o cliente final.