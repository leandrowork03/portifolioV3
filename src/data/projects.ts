// src/data/projects.ts
import animeZ from "../assets/cap1.png";
import cap2 from "../assets/cap2.png";
import cap3 from "../assets/cap3.png";
import cap4 from "../assets/fut.png";
import cap5 from "../assets/LDJ.png";
import m from "../assets/m.png";
import b from "../assets/b.png";
import cm from "../assets/cm.png";

export const projectsData = [
  {
    title: "Loja",
    image: cm,
    teaser: "Desenvolvi uma loja virtual moderna do zero! Com Next.js, GraphQL e Context API, criei uma experiência de compra ágil e otimizada.",
    description: `A Loja DevShop é um projeto que simula uma plataforma de e-commerce moderna e funcional. O objetivo foi criar uma aplicação robusta, com foco em uma arquitetura limpa e eficiente para a gestão de dados e estado global.

O projeto utiliza Next.js (App Router) para performance e roteamento otimizado, GraphQL com Apollo Client para a busca de dados de produtos de forma declarativa, e a React Context API para o gerenciamento centralizado do estado do carrinho de compras. A interface é desenvolvida com Tailwind CSS, garantindo um design responsivo e rápido.

Entre as funcionalidades implementadas estão páginas de produtos dinâmicas, uma busca com sugestões em tempo real, e um sistema de carrinho completo. O projeto demonstra a capacidade de integrar diferentes tecnologias para construir uma aplicação escalável e otimizada, com foco em uma excelente experiência de usuário e boas práticas de desenvolvimento.`,
    link: "https://devshop-phi.vercel.app/",
  },
  {
    title: "Mega man X",
    image: m,
    teaser: "Aplicação front-end interativa para fãs da série Mega Man X.",
    description:
      "O 'Mega Man X - Fan Site' é uma aplicação web interativa desenvolvida com React e TypeScript, oferecendo uma plataforma para os fãs explorarem a rica história da série. O projeto demonstra a construção de interfaces de usuário complexas e responsivas utilizando Tailwind CSS, garantindo uma experiência fluida em qualquer dispositivo. A aplicação consome uma API (simulada ou real) para exibir detalhes sobre personagens, chefes e fases, destacando a habilidade de gerenciamento de dados assíncronos e a criação de uma arquitetura de componentes reutilizáveis. Este projeto serviu como um excelente exercício para aplicar conceitos de roteamento (React Router DOM) e gerenciamento de estado, resultando em uma experiência de navegação envolvente e bem estruturada.",
    link: "https://megaman-x-mu.vercel.app/",
  },
  {
    title: "Blog",
    image: b,
    teaser:
      "Blog de projetos web, construído com Next.js, GraphQL e Tailwind CSS.",
    description:
      "Este blog é uma vitrine do meu trabalho como Desenvolvedor Front-End, construído com uma stack moderna e escalável. O projeto utiliza Next.js 14 (App Router) e React para a criação de interfaces dinâmicas, com TypeScript para garantir segurança e robustez no código. A arquitetura demonstra a integração com uma API GraphQL (mockada) através do Apollo Client e GraphQL Yoga, gerenciando dados de forma eficiente. O layout, estilizado com Tailwind CSS, é 100% responsivo e conta com uma galeria de projetos interativa com modais. O resultado é uma aplicação de alta performance que reflete minha paixão por design funcional e tecnologia de ponta.",
    link: "https://leandrosantos.vercel.app/",
  },
  {
    title: "LeagueBoard FullStack",
    image: cap4,
    teaser: "Meu primeiro projeto FullStack integrando front-end e back-end",
    description:
      "Projeto desenvolvido com React, com foco em performance, componentização e boa experiência do usuário. A aplicação conta com autenticação via Firebase, armazenamento em tempo real com Firestore e validações robustas com React Hook Form e Zod. Também criei uma API em Node.js para gerenciar parte dos dados, integrando front-end e back-end de forma coesa. O estado global é controlado com Context API, rotas protegidas com React Router DOM, notificações com React Toastify, estilização com CSS Modules e persistência de dados com LocalStorage.",
    link: "https://league-board-rho.vercel.app/",
  },

  {
    title: "Liga da Justiça",
    image: cap5,
    teaser:
      "Projeto desenvolvido com Next.js e React que simula uma plataforma de busca por heróis da Liga da Justiça.",
    description:
      "Projeto desenvolvido com Next.js e React que simula uma plataforma de busca por heróis da Liga da Justiça. A aplicação conta com design responsivo, animações suaves com Tailwind CSS e um sistema de busca com autocomplete adaptado para dispositivos móveis. Durante o desenvolvimento, foi necessário realizar um downgrade estratégico do Next.js 15 para a versão 14 e do React 19 para a 18, garantindo estabilidade, compatibilidade com bibliotecas e melhor controle do ambiente. O projeto entrega uma navegação fluida entre seções com transições animadas e demonstra domínio em arquitetura de aplicações modernas com foco em performance e experiência do usuário.",
    link: "https://liga-da-justica.vercel.app/",
  },
  {
    title: "Anime hype Z",
    image: animeZ,
    teaser: "Template moderno em React + TypeScript usando Vite...",
    description:
      "O AnimeHypez é uma aplicação web desenvolvida com React.js que simula uma área de login para fãs de animes, oferecendo uma experiência moderna e responsiva. O projeto utiliza Firebase Authentication para cadastro, login e gerenciamento de sessões, com rotas protegidas implementadas através do React Router DOM. A validação de formulários é feita com Zod, garantindo que os dados de entrada estejam corretos antes de serem enviados. A interface foi construída com Tailwind CSS, proporcionando um layout limpo e adaptado para dispositivos móveis. Toda a aplicação segue o modelo de SPA (Single Page Application) e foi publicada na Netlify, com deploy contínuo. Este projeto teve como foco a prática de autenticação segura, organização de componentes reutilizáveis, roteamento condicional e validação de dados no front-end.",
    link: "https://animehypez.netlify.app/",
  },

  {
    title: "Rick and Morty Explorer",
    image: cap2,
    teaser: "Projeto simples em React + TypeScript que consome a API...",
    description:
      "O Rick and Morty Explorer é uma aplicação web desenvolvida com React.js que consome a API pública da série Rick and Morty para exibir informações dos personagens em tempo real. Utilizando o método nativo fetch para realizar as requisições HTTP, a aplicação busca os dados da API e renderiza dinamicamente as informações na tela. O layout foi construído com Tailwind CSS, oferecendo uma interface moderna, limpa e responsiva. A aplicação segue a arquitetura baseada em componentes reutilizáveis do React e foi publicada na Netlify para acesso rápido. Este projeto teve como objetivo praticar o consumo de APIs REST usando fetch, organização de componentes e estilização com Tailwind CSS.",
    link: "https://rickandmorrty.netlify.app/",
  },
  {
    title: "Painel Financeiro",
    image: cap3,
    teaser: "Dashboard com cálculo de saldo, receitas e despesas.",
    description:
      "O Controle de Gastos é uma aplicação web desenvolvida com JavaScript puro (Vanilla JS), HTML5 e CSS3, que permite ao usuário cadastrar, visualizar e excluir transações financeiras, além de exibir automaticamente o saldo, total de receitas e despesas. O projeto utiliza LocalStorage para armazenar os dados de forma persistente no navegador, garantindo que as informações sejam mantidas mesmo após recarregar a página. A aplicação apresenta uma interface simples e intuitiva, com foco em usabilidade, e foi estruturada com boas práticas de organização de código, separando responsabilidades entre lógica, renderização e manipulação de dados. O projeto foi publicado na Netlify, permitindo acesso rápido e gratuito via navegador. O objetivo principal foi consolidar o domínio de JavaScript puro, manipulação do DOM, armazenamento local e construção de interfaces funcionais sem depender de frameworks.",
    link: "https://controle-de-gastosf.netlify.app/",
  },
];
