Prottocode – Landing Page para Soluções com IA
Projeto pessoal / Portfólio de frontend

Link: prottocode.com.br

Descrição
Desenvolvi uma landing page moderna e responsiva para uma empresa fictícia de automação com IA. O objetivo foi criar uma experiência visualmente atraente, focada em conversão, que comunicasse de forma clara os benefícios e diferenciais dos serviços oferecidos. O projeto serviu para consolidar meus conhecimentos em componentes reutilizáveis, design system e otimização de performance.

Tecnologias utilizadas
React com TypeScript – para garantir tipagem estática e componentes modulares.

Next.js – escolhido por sua estrutura de rotas simplificada e renderização estática (SSG), garantindo carregamento rápido e SEO amigável.

Tailwind CSS – para estilização rápida e consistente, utilizando classes utilitárias que mantêm o código limpo e facilitam a responsividade.

Figma – para prototipagem e definição do design system antes da implementação.

Ícones SVG – integrados via biblioteca Simple Icons para as ferramentas e ícones customizados para diferenciais, garantindo leveza e escalabilidade.

Principais features e decisões de frontend
Hero section com métricas em destaque – utilizei um grid flexível para exibir indicadores de impacto (+12,4%, +8,7%, +23,1%), criando um elemento de prova social visual.

Cards de serviços – desenvolvi um componente <ServiceCard /> reutilizável que recebe título, descrição, ícone, tag (ex: “Mais popular”) e botão de CTA. Os cards são responsivos e exibem efeito hover sutil para melhorar a interação.

Seção de diferenciais (3 pilares) – implementada com ícones vetoriais e textos explicativos, utilizando Flexbox para alinhamento e espaçamento consistentes em diferentes breakpoints.

Múltiplos CTAs – estrategicamente posicionados ao longo da página (header, após os cards, no footer), todos estilizados com gradiente e transição suave para aumentar a taxa de conversão.

Layout totalmente responsivo – com abordagem mobile-first, reorganizando os cards em coluna única e ajustando tipografia e paddings para telas pequenas.

Otimização de performance – imagens otimizadas com o componente next/image, ícones carregados como SVG inline para evitar requisições adicionais, e código dividido em chunks dinâmicos.

Resultados e aprendizados
O projeto reforçou minha capacidade de traduzir um design do Figma para código limpo e semântico.

Apliquei boas práticas de acessibilidade (contraste, hierarquia de headings, labels para leitores de tela).

Alcancei pontuação alta no Lighthouse (Performance > 95, Acessibilidade > 90, SEO > 100) graças ao uso de Next.js e Tailwind.