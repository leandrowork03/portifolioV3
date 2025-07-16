import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarBackground from "./StarBackground";
import CustomCursor from "./CustomCursor";
import "./stars.css";
import pc from "./assets/pc.png";
import devLeandro from "./assets/184451565.jpg";
import astro from "./assets/astro.png";
import deep from "./assets/lua-cheia-10190448164475-removebg-preview.png";
import animeZ from "./assets/cap1.png";
import deep2 from "./assets/deep.png";
import cap2 from "./assets/cap2.png";
import ovini from "./assets/ovini.png";
import cap3 from "./assets/cap3.png";
import cap4 from './assets/fut.png'

const sentence = "OLÁ, BEM VINDO(A)!";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
      delayChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
      delayChildren: 0,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.5 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { type: "tween", ease: "easeIn", duration: 0.5 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

type Project = {
  title: string;
  image?: string;
  teaser: string;
  description: string;
  link: string;
};

export default function App() {
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [showText, setShowText] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    if (!showText) {
      const timer = setTimeout(() => setShowWelcome(true), 500);
      return () => clearTimeout(timer);
    }
  }, [showText]);

  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => setShowWelcome(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  useEffect(() => {
    if (!showWelcome && !showText) {
      const timer = setTimeout(() => setShowPortfolio(true), 300);
      return () => clearTimeout(timer);
    }
  }, [showWelcome, showText]);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="h-screen bg-black flex justify-center items-center flex-col relative overflow-hidden">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {showText && (
          <motion.div
            key="text"
            className="welcome-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationComplete={() => {
              setTimeout(() => setShowText(false), 3000);
            }}
          >
            {sentence.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={child}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPortfolio && (
          <motion.div
            key="portfolio"
            className="text-white w-full h-full z-10 overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="m-0">
              <header className="bg-sky-400 fixed w-full  px-5 top-0 z-20">
                <nav className="mx-auto flex items-center justify-between p-4 ">
                  <h2
                    className="text-xl"
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    Dev.Leandro
                  </h2>

                  <button
                    aria-label="Abrir menu"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      width: "30px",
                      height: "25px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: 0,
                      zIndex: 40,
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        height: "3px",
                        background: "black",
                        borderRadius: "2px",
                        transition: "all 0.3s ease",
                        transformOrigin: "center",
                        transform: menuOpen
                          ? "rotate(45deg) translate(5px, 5px)"
                          : "none",
                      }}
                    />
                    <span
                      style={{
                        display: "block",
                        height: "3px",
                        background: "black",
                        borderRadius: "2px",
                        opacity: menuOpen ? 0 : 1,
                        transition: "opacity 0.3s ease",
                      }}
                    />
                    <span
                      style={{
                        display: "block",
                        height: "3px",
                        background: "black",
                        borderRadius: "2px",
                        transition: "all 0.3s ease",
                        transformOrigin: "center",
                        transform: menuOpen
                          ? "rotate(-45deg) translate(5px, -5px)"
                          : "none",
                      }}
                    />
                  </button>

                  <AnimatePresence>
                    {menuOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                          listStyle: "none",
                          margin: 0,

                          padding: "10px 0 500px",
                          position: "absolute",
                          top: "100%",
                          left: "75%",
                          right: 0,
                          background: "#eee",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                          borderRadius: "0 0 5px 5px",
                          overflow: "hidden",
                          zIndex: 30,
                        }}
                      >
                        {["home", "Sobre", "Projetos", "Contato"].map(
                          (sectionId) => (
                            <li key={sectionId} style={{ margin: 0 }}>
                              <button
                                onClick={() => handleScrollTo(sectionId)}
                                style={{
                                  border: "none",
                                  padding: "12px 20px",
                                  width: "100%",
                                  textAlign: "left",
                                  fontSize: "1rem",
                                  cursor: "pointer",
                                  color: "#000",
                                  background: "transparent",
                                  transition:
                                    "background 0.3s ease, color 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background =
                                    "rgba(0, 255, 255, 0.2)";
                                  e.currentTarget.style.color = "#000";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background =
                                    "transparent";
                                  e.currentTarget.style.color = "#000";
                                }}
                              >
                                {sectionId.charAt(0).toUpperCase() +
                                  sectionId.slice(1)}
                              </button>
                            </li>
                          )
                        )}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </nav>
              </header>

              <StarBackground />

              <motion.section
                id="home"
                key="section1"
                className="w-screen min-h-screen bg-center relative bg-no-repeat flex items-center justify-between px-10 pt-20"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true }}
              >
                <motion.img
                  src={pc}
                  alt="Nave flutuante"
                  className="absolute w-[600px] z-0"
                  style={{ top: "20%", right: "15%" }}
                  animate={{ y: ["50px", "100px", "50px"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "easeInOut",
                  }}
                />
                <div className="sec1 w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mx-auto px-4 md:px-10">
                  <div className="bg-black/80 p-4 sm:p-6 md:p-8 rounded-xl border-b-4 border-cyan-400 relative overflow-hidden w-full md:w-[45%] text-center md:text-left space-y-4 mb-6 md:mb-0">
                    <h1 className="font-black text-sky-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                      Programador
                    </h1>
                    <h1 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                      Front-End
                    </h1>
                    <p className="typewriter wrap-anywhere text-sm sm:text-base md:text-lg lg:text-xl">
                      A imaginação é meu framework favorito!
                    </p>
                  </div>

                  <div className="z-10 w-full md:w-auto flex flex-col items-center md:items-end">
                    <img
                      src={devLeandro}
                      alt="dev avatar"
                      className="glow-border2 rounded-full"
                      style={{ width: "220px" }}
                    />
                    <p className="typewriter bg-black/80 p-6 rounded-xl text-center mt-4 md:mt-6">
                      Dev.Leandro
                    </p>
                  </div>
                </div>
              </motion.section>

              <motion.section
                id="Sobre"
                key="section4"
                className="w-screen min-h-screen relative overflow-hidden flex items-center justify-center bg-black/70"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.img
                  src={astro}
                  alt="Nave flutuante"
                  className="absolute w-[100px] z-0"
                  style={{ top: "30%", right: "20%" }}
                  animate={{ x: ["50px", "100px", "50px"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "easeInOut",
                  }}
                />
                <section className="relative w-full max-w-4xl flex items-center gap-15 bg-black/80 p-6 rounded-xl border-b-4 border-cyan-400 overflow-hidden">
                  <div className="z-10">
                    <h1
                      className="text-2xl mb-5"
                      style={{ fontFamily: "Orbitron, sans-serif" }}
                    >
                      Sobre mim
                    </h1>
                    <p style={{ fontFamily: "Orbitron, sans-serif" }}>
                      Sou um desenvolvedor front-end com domínio em React e
                      TypeScript, especializado em construir interfaces
                      modernas, responsivas e com ótima experiência de usuário.
                      Trabalho com ferramentas como Tailwind CSS, React Hook
                      Form, Zod, Context API e Firebase, sempre com foco em
                      código limpo, validações robustas e segurança. Tenho
                      familiaridade com roteamento, controle de estado global e
                      design responsivo, e estou em constante evolução para
                      entregar soluções completas e escaláveis no front-end.
                    </p>
                  </div>
                </section>
              </motion.section>

              <motion.section
                id="Projetos"
                key="section3"
                className="w-screen min-h-screen bg-left bg-no-repeat flex items-center justify-center pt-20 px-10"
                style={{ backgroundImage: `url(${deep})` }}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true }}
              >
                <div className=" max-w-6xl w-full gap-20">
                  <h2
                    className="text-4xl font-bold text-sky-400 mb-10"
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    Projetos em Destaque
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                      {
                        title: "Anime hype Z",
                        image: animeZ,
                        teaser:
                          "Template moderno em React + TypeScript usando Vite...",
                        description:
                          "O AnimeHypez é uma aplicação web desenvolvida com React.js que simula uma área de login para fãs de animes, oferecendo uma experiência moderna e responsiva. O projeto utiliza Firebase Authentication para cadastro, login e gerenciamento de sessões, com rotas protegidas implementadas através do React Router DOM. A validação de formulários é feita com Zod, garantindo que os dados de entrada estejam corretos antes de serem enviados. A interface foi construída com Tailwind CSS, proporcionando um layout limpo e adaptado para dispositivos móveis. Toda a aplicação segue o modelo de SPA (Single Page Application) e foi publicada na Netlify, com deploy contínuo. Este projeto teve como foco a prática de autenticação segura, organização de componentes reutilizáveis, roteamento condicional e validação de dados no front-end.",
                        link: "https://animehypez.netlify.app/",
                      },
                         {
                        title: "Painel Financeiro",
                        image: cap3,
                        teaser:
                          "Dashboard com cálculo de saldo, receitas e despesas.",
                        description:
                          "O Controle de Gastos é uma aplicação web desenvolvida com JavaScript puro (Vanilla JS), HTML5 e CSS3, que permite ao usuário cadastrar, visualizar e excluir transações financeiras, além de exibir automaticamente o saldo, total de receitas e despesas. O projeto utiliza LocalStorage para armazenar os dados de forma persistente no navegador, garantindo que as informações sejam mantidas mesmo após recarregar a página. A aplicação apresenta uma interface simples e intuitiva, com foco em usabilidade, e foi estruturada com boas práticas de organização de código, separando responsabilidades entre lógica, renderização e manipulação de dados. O projeto foi publicado na Netlify, permitindo acesso rápido e gratuito via navegador. O objetivo principal foi consolidar o domínio de JavaScript puro, manipulação do DOM, armazenamento local e construção de interfaces funcionais sem depender de frameworks.",
                        link: "https://controle-de-gastosf.netlify.app/",
                      },
                        {
                        title: "LeagueBoard FullStack",
                        image: cap4,
                        teaser:
                          "Meu primeiro projeto FullStack integrando front-end e back-end",
                        description: "Este projeto foi desenvolvido utilizando React no front-end, com foco em componentização, performance e experiência do usuário. A autenticação de usuários foi implementada com Firebase Authentication, garantindo segurança e integração direta com o back-end baseado no Firebase. Os dados do usuário são armazenados e gerenciados em tempo real com o Firebase Firestore, permitindo sincronização eficiente e escalável. Para os formulários, foi utilizado React Hook Form em conjunto com a biblioteca Zod para realizar validações robustas e eficientes de forma declarativa. As mensagens de feedback e notificações ao usuário foram tratadas com React Toastify, proporcionando uma comunicação clara e amigável dentro da aplicação. O gerenciamento global de estado, especialmente para controle de autenticação, foi feito com a Context API do React, garantindo que as informações do usuário estejam disponíveis em toda a aplicação de forma segura e organizada. Além disso, foi utilizado React Router DOM para a navegação entre páginas e rotas protegidas, garantindo uma experiência de navegação fluida e segura. A estilização foi feita com CSS Modules, permitindo escopo local de estilos e melhor manutenção do código. Também foi implementado o uso de LocalStorage para persistência de dados importantes mesmo após o fechamento do navegador, melhorando a usabilidade do sistema. Este projeto reflete minha capacidade de trabalhar com tecnologias modernas do ecossistema React, integrando front-end e back-end de forma coesa e escalável.",

                        link: "https://league-board-rho.vercel.app/",
                      },
                      {
                        title: "Rick and Morty Explorer",
                        image: cap2,
                        teaser:
                          "Projeto simples em React + TypeScript que consome a API...",
                        description:
                          "O Rick and Morty Explorer é uma aplicação web desenvolvida com React.js que consome a API pública da série Rick and Morty para exibir informações dos personagens em tempo real. Utilizando o método nativo fetch para realizar as requisições HTTP, a aplicação busca os dados da API e renderiza dinamicamente as informações na tela. O layout foi construído com Tailwind CSS, oferecendo uma interface moderna, limpa e responsiva. A aplicação segue a arquitetura baseada em componentes reutilizáveis do React e foi publicada na Netlify para acesso rápido. Este projeto teve como objetivo praticar o consumo de APIs REST usando fetch, organização de componentes e estilização com Tailwind CSS.",
                        link: "https://rickandmorrty.netlify.app/",
                      },
                   
                    ].map((project, index) => (
                      <div
                        key={index}
                        className="bg-black/70 border border-cyan-500 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        <h3 className="text-2xl font-semibold text-cyan-400">
                          {project.title}
                        </h3>
                        <div>
                          {project.image && (
                            <img
                              src={project.image}
                              className="border border-cyan-500 rounded-2xl"
                            />
                          )}
                        </div>
                        <p className="mt-2 text-sm">{project.teaser}</p>
                        <div className="flex justify-between mt-4">
                          <button
                            onClick={() => setModalProject(project!)}
                            className= "bg-cyan-500 text-white font-black p-1 px-2 rounded-2xl hover:text-cyan-500 hover:bg-white"
                          >
                            Descrição
                          </button>
                          <a
                            href={project.link}
                            className= "bg-white text-cyan-500 font-black p-1 px-2 rounded-2xl hover:text-white hover:bg-cyan-500"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Deploy →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full py-20">
                    <a
                      href="https://github.com/leandrowork03"
                      target="_blank"
                      className="w-full sm:w-fit bg-black/70 border border-cyan-500 
             rounded-2xl sm:rounded-lg 
             p-6 sm:p-2 
             text-lg sm:text-xs 
             shadow-lg
             text-center mx-auto block"
                    >
                      veja mais projetos no meu github
                    </a>
                  </div>
                </div>

                {modalProject && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
                    <div className="bg-[#0f172a] max-w-xl w-full p-6 rounded-lg shadow-2xl border border-cyan-500">
                      <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                        {modalProject.title}
                      </h3>
                      <p className="text-white text-sm whitespace-pre-line">
                        {modalProject.description}
                      </p>
                      <div className="mt-6 text-right">
                        <button
                          onClick={() => setModalProject(null)}
                          className="text-cyan-300 hover:underline"
                        >
                          Fechar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.section>

              <motion.section
                key="section4"
                className="w-screen relative min-h-screen overflow-hidden flex bg-black/70"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.img
                  src={ovini}
                  alt="Nave flutuante"
                  className="absolute w-[300px] z-0"
                  style={{ top: "15%", left: "5%" }}
                  animate={{ x: ["50px", "100px", "50px"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "easeInOut",
                  }}
                />

                <div className="flex z-10 flex-col max-w-7xl mx-auto items-center justify-around">
                  <h1 className="text-white text-5xl m-5">Habilidades</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {[
                      { name: "HTML", icon: "devicon-html5-plain colored" },
                      { name: "CSS", icon: "devicon-css3-plain colored" },
                      {
                        name: "JavaScript",
                        icon: "devicon-javascript-plain colored",
                      },
                      { name: "React", icon: "devicon-react-original colored" },
                      {
                        name: "Tailwind CSS",
                        icon: "devicon-tailwindcss-plain colored",
                      },
                      {
                        name: "Firebase",
                        icon: "devicon-firebase-plain colored",
                      },
                      {
                        name: "Supabase",
                        icon: "devicon-supabase-plain colored",
                      },
                      {
                        name: "Material UI",
                        icon: "devicon-materialui-plain colored",
                      },
                      { name: "Axios", icon: "devicon-axios-plain colored" },
                      {
                        name: "Netlify",
                        icon: "devicon-netlify-plain colored",
                      },
                      {
                        name: "Framer motion",
                        icon: "devicon-framermotion-original",
                      },
                      {
                        name: "React Router",
                        icon: "devicon-reactrouter-plain colored",
                      },
                      {
                        name: "Git",
                        icon: "devicon-git-plain colored",
                      },
                      {
                        name: "Github",
                        icon: "devicon-github-original colored",
                      },
                    ].map((skill, index) => (
                      <div
                        className="tec flex-col gap-2 text-white items-center flex"
                        key={index}
                      >
                        <p>{skill.name}</p>
                        <p className="text-5xl">
                          <i className={skill.icon}></i>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              <motion.section
                id="Contato"
                key="section4"
                className="w-screen bg-cover min-h-screen relative overflow-hidden flex items-center justify-center"
                style={{ backgroundImage: `url(${deep2})` }}
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className=" mt-30 -top-0">
                  <h1 className="text-center text-4xl m-15 font-black text-sky-400  ">
                    Contatos
                  </h1>
                  <div className="flex flex-col justify-center items-center sm:flex-row  gap-15">
                    <div className="cont bg-zinc-600 text-sky-400 flex flex-col items-center justify-center h-25 w-25 rounded-full">
                      <a
                        href="https://github.com/seu-usuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 text-3xl"
                      >
                        <i className="devicon-github-original"></i>
                      </a>

                      <p>GitHuB</p>
                    </div>
                    <div className="cont bg-zinc-600 text-sky-400 flex flex-col items-center justify-center h-25 w-25 rounded-full">
                      <a
                        href="https://www.linkedin.com/in/leandro-santos-front-end/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 text-3xl"
                      >
                        <i className="devicon-linkedin-plain"></i>
                      </a>

                      <p>Linkedin</p>
                    </div>
                    <div className="cont bg-zinc-600 text-sky-400 flex flex-col items-center justify-center h-25 w-25 rounded-full">
                      <a
                        href="https://wa.me/555194089203"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 text-3xl"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>

                      <p>Whatsapp</p>
                    </div>
                  </div>
                  <div className=" text-center items-center font-bold text-sky-500 text-3xl mt-10">
                    <a href="https://wa.me/5551982126888" target="_blank">
                      +55 51 98212-6888
                    </a>
                  </div>
                </div>
              </motion.section>
            </div>
            <footer className="bg-sky-900 text-white p-2 text-center">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Leandro. Todos os direitos
                reservados.
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
