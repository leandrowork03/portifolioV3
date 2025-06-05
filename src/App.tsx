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

// Variants para todas as sections com entrada e saída suave
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

export default function App() {
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
              <header className="bg-sky-400 m-0 fixed w-full top-0 z-20">
                <nav className="h-15 max-w-7xl mx-auto flex items-center justify-between">
                  <h2>Dev.Leandro</h2>
                </nav>
              </header>

              <StarBackground />

              {/* Sessão 1 - Apresentação */}
              <motion.section
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

              {/* Sessão 2 - Sobre mim */}
              <motion.section
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
                  {/* Brilho animado */}
                  <span className="shine" />
                </section>
              </motion.section>

              {/* Sessão 3 - Projetos */}
              <motion.section
                key="section3"
                className="w-screen min-h-screen bg-left bg-center bg-no-repeat flex items-center justify-center px-8 pt-20 px-10"
                style={{ backgroundImage: `url(${deep})` }}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true }}
              >
                <div className="max-w-6xl w-full">
                  <h2
                    className="text-4xl font-bold text-sky-400 mb-10"
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    Projetos em Destaque
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[{
                      title: "Anime hype Z",
                      image: animeZ,
                      description: "Template moderno em React + TypeScript usando Vite...",
                      link: "https://animehypez.netlify.app/"
                    }, {
                      title: "Rick and Morty Explorer",
                      image: cap2,
                      description: "Projeto simples em React + TypeScript que consome a API...",
                      link: "https://rickandmorrty.netlify.app/"
                    }, {
                      title: "Painel Financeiro",
                      description: "Dashboard com cálculo de saldo, receitas e despesas.",
                      link: "#"
                    }].map((project, index) => (
                      <div key={index} className="bg-black/70 border border-cyan-500 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-semibold text-cyan-400">{project.title}</h3>
                        <div>
                          {project.image && (
                            <img src={project.image} className=" border  border-cyan-500 rounded-2xl" />
                          )}
                        </div>
                        <p className="mt-2 text-sm">{project.description}</p>
                        <a
                          href={project.link}
                          className="mt-4 inline-block text-cyan-300 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver Projeto →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="shine" />
              </motion.section>

              {/* Sessão 4 - Habilidades */}
              <motion.section
                key="section4"
                className="w-screen relative min-h-screen relative overflow-hidden flex  bg-black/70"
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
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React",
                      "tailwindcss",
                      "Firebase",
                      "Supabase",
                      "Material UI",
                      "Axios",
                      "Netlify",
                    ].map((name, index) => (
                      <div className="tec flex-col gap-2" key={index}>
                        <p>{name}</p>
                        <p className="text-5xl">
                          <i className={`devicon-${name.toLowerCase()}-plain`}></i>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Sessão 5 - Fundo animado */}
              <motion.section
                key="section4"
                className="w-screen bg-cover min-h-screen relative overflow-hidden flex items-center justify-center"
                style={{ backgroundImage: `url(${deep2})` }}
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div>
                
                <h1 className="text-white text-2xl">Contatos</h1>
                <div className="bg-zinc-600 text-sky-400 flex flex-col items-center justify-center h-20 w-20 rounded-full">
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
                <div className="bg-zinc-600 text-sky-400 flex flex-col items-center justify-center h-20 w-20 rounded-full">
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
                <div className="bg-zinc-600 text-sky-400 flex flex-col items-center justify-center h-20 w-20 rounded-full">
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
              </div>
              </motion.section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
