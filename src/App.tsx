import { useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRightIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import StarBackground from "./StarBackground";
import CustomCursor from "./CustomCursor";
import "./stars.css";
import pc from "./assets/pc.png";
import devLeandro from "./assets/184451565.jpg";
import astro from "./assets/astro.png";
import deep from "./assets/lua-cheia-10190448164475-removebg-preview.png";
import deep2 from "./assets/deep.png";
import ovini from "./assets/ovini.png";
import { projectsData } from "./data/projects";

const sentence = "OLÁ, BEM VINDO(A)!";

// Variantes para a animação do texto digitado
const containerVariants = {
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
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.5 },
  },
};

// Variantes de animação para o portfólio (entrada com slide)
const portfolioVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }
};

// Variantes para as seções do portfólio (entrada com fade e slide)
const animationVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
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
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Aumentamos o tempo para 3 segundos para que a digitação seja visível
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const createInViewHook = () => useInView({ threshold: 0.1 });
  const [refHome, inViewHome] = createInViewHook();
  const [refSobre, inViewSobre] = createInViewHook();
  const [refProjetos, inViewProjetos] = createInViewHook();
  const [refHabilidades, inViewHabilidades] = createInViewHook();
  const [refContato, inViewContato] = createInViewHook();

  return (
    <div className="h-screen bg-black flex justify-center items-center flex-col relative overflow-hidden">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {showWelcome && (
          <motion.div
            key="welcome"
            className="welcome-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center absolute inset-0 flex justify-center items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {sentence.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={childVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!showWelcome && (
          <motion.div
            key="portfolio"
            className="text-white w-full h-full z-10 overflow-x-hidden"
            variants={portfolioVariants}
            initial="initial"
            animate="animate"
          >
            <div className="m-0">
              <header className="bg-sky-400 fixed w-full px-5 top-0 z-20">
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
                ref={refHome}
                initial="hidden"
                animate={inViewHome ? "visible" : "hidden"}
                variants={animationVariants}
                transition={{ duration: 1, ease: "easeOut" }}
                className="container mx-auto px-4 py-10 w-screen min-h-screen bg-center relative bg-no-repeat flex items-center justify-between pt-20"
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
  ref={refSobre}
  initial="hidden"
  animate={inViewSobre ? "visible" : "hidden"}
  variants={animationVariants}
  transition={{ duration: 1, ease: "easeOut" }}
  className="container mx-auto px-4 py-10 w-screen min-h-screen relative overflow-hidden flex items-center justify-center bg-black/70"
>
  {/* Fundo animado com o astro */}
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

  {/* Contêiner do texto, centralizado e com as melhorias de estilo */}
  <div className="relative w-full max-w-4xl p-6 md:p-12 bg-black/80 rounded-2xl border-b-4 border-cyan-400 shadow-xl shadow-cyan-400/20 text-center">
    
    <motion.h1
      className="text-4xl sm:text-5xl font-bold text-sky-400 mb-5"
      style={{ fontFamily: "Orbitron, sans-serif" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Sobre mim
    </motion.h1>
    <motion.p
      className="text-lg text-gray-300"
      style={{ fontFamily: "Orbitron, sans-serif" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Sou Leandro, um desenvolvedor front-end de Cachoeirinha, RS, apaixonado por transformar ideias em interfaces digitais de alta performance. Com um domínio sólido em React e TypeScript, construo soluções visuais que não apenas encantam, mas também oferecem uma experiência de usuário impecável e segura.

      Minha stack inclui ferramentas modernas como Next.js, Tailwind CSS, Context API e GraphQL, que utilizo para criar aplicações completas e escaláveis. Adoro o desafio de construir projetos como meu primeiro full-stack e dominar a autenticação de usuários com Firebase e validações robustas com Zod, sempre com foco em código limpo e arquitetura de componentes reutilizáveis.

      Estou em constante evolução e pronto para integrar equipes que valorizam a inovação e a entrega de valor.
    </motion.p>
  </div>
</motion.section>

              <motion.section
                id="Projetos"
                ref={refProjetos}
                initial="hidden"
                animate={inViewProjetos ? "visible" : "hidden"}
                variants={animationVariants}
                transition={{ duration: 1, ease: "easeOut" }}
                className="container mx-auto px-4 py-10 w-screen min-h-screen bg-left bg-no-repeat flex items-center justify-center pt-20"
                style={{ backgroundImage: `url(${deep})` }}
              >
                <div className=" max-w-6xl w-full gap-20">
                  <h2
                    className="text-4xl font-bold text-sky-400 mb-10"
                    style={{ fontFamily: "Orbitron, sans-serif" }}
                  >
                    Projetos em Destaque
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                      <div
                        key={index}
                        className="bg-black/70 border border-cyan-500 rounded-2xl p-6 shadow-lg hover:scale-105 hover:-translate-y-2 hover:shadow-cyan-400/50 transition-transform duration-300"
                      >
                        <h3 className="text-2xl font-semibold text-cyan-400">{project.title}</h3>
                        <div className="relative overflow-hidden rounded-md mt-2">
                          {project.image && (
                            <img
                              src={project.image}
                              className="w-full h-auto object-cover border border-cyan-500 rounded-md"
                              alt={project.title}
                            />
                          )}
                          <div className="absolute top-0 left-0 w-full h-full bg-black/60 opacity-0 transition-opacity duration-300 hover:opacity-80 flex items-center justify-center">
                            <p className="text-white text-center px-4">{project.teaser}</p>
                          </div>
                        </div>
                        <div className="flex justify-between mt-4 gap-2">
                          <button
                            onClick={() => setModalProject(project)}
                            className="button-fill bg-cyan-500 text-white font-black p-2 rounded-md hover:text-cyan-500 hover:bg-white flex-grow flex items-center justify-center"
                          >
                            <InformationCircleIcon className="h-5 w-5 mr-2" />
                            Descrição
                          </button>
                          <a
                            href={project.link}
                            className="button-fill bg-white text-cyan-500 font-black p-2 rounded-md hover:text-white hover:bg-cyan-500 flex-grow text-center flex items-center justify-center"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Deploy
                            <ArrowUpRightIcon className="h-5 w-5 ml-2" />
                          </a>
                        </div>
                      </div>
                    ))}
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
                id="Habilidades"
                ref={refHabilidades}
                initial="hidden"
                animate={inViewHabilidades ? "visible" : "hidden"}
                variants={animationVariants}
                transition={{ duration: 1, ease: "easeOut" }}
                className="container mx-auto px-4 py-10 w-screen relative min-h-screen overflow-hidden flex bg-black/70"
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
                      {
                        name: "Next JS",
                        icon: "devicon-nextjs-plain colored",
                      },
                      {
                        name: "Vercel",
                        icon: "devicon-vercel-original colored",
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
  ref={refContato}
  initial="hidden"
  animate={inViewContato ? "visible" : "hidden"}
  variants={animationVariants}
  transition={{ duration: 1, ease: "easeOut" }}
  className="container mx-auto px-4 py-10 w-screen bg-cover min-h-screen relative overflow-hidden flex items-center justify-center"
  style={{ backgroundImage: `url(${deep2})` }}
>
  <div className="mt-30 -top-1 w-full max-w-4xl p-6 sm:p-12 text-center ">
    <h1
      className="text-center text-4xl sm:text-5xl font-black text-sky-400 mb-10"
      style={{ fontFamily: "Orbitron, sans-serif" }}
    >
      Vamos conversar!
    </h1>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 mb-12">
      
      <a
        href="https://github.com/leandrowork03"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card group"
      >
        <i className="devicon-github-original colored text-5xl group-hover:text-cyan-400 transition-colors duration-300"></i>
        <span className="text-white mt-2 group-hover:text-cyan-400 transition-colors duration-300 text-lg font-bold">GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/leandro-santos-front-end/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card group"
      >
        <i className="devicon-linkedin-plain colored text-5xl group-hover:text-cyan-400 transition-colors duration-300"></i>
        <span className="text-white mt-2 group-hover:text-cyan-400 transition-colors duration-300 text-lg font-bold">LinkedIn</span>
      </a>
    </div>
    
    
    <a
      href="https://wa.me/5551982126888"
      target="_blank"
      rel="noopener noreferrer"
      className="button-fill bg-green-500 text-white font-black py-4 px-8 rounded-full text-xl hover:bg-green-600 transition-colors duration-300 transform hover:scale-105 flex items-center justify-center mx-auto max-w-sm shadow-lg hover:shadow-green-500/50"
    >
      <i className="fa-brands fa-whatsapp text-2xl mr-4"></i>
      +55 51 98212-6888
    </a>
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