import { Link } from "react-router-dom";
import BtnGoBack from "../../components/BtnGoBack/BtnGoBack";
import Skills from "../../components/Skills/Skills";
import Training from "../../components/Training.jsx/Training";

const About = () => {
  return (
    <div className=" bg-blue-dark">
      <section id="About" className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-start mt-32 sm:mt-44">
          <h1 className=" text-white text-center text-4xl sm:text-7xl font-bold sm:animate-pulse">
            Soy desarrollador Front-End
          </h1>
        </div>
        <h3 className=" text-white text-center my-10 text-4xl sm:text-5xl font-bold w-8/12">
          Sobre mí
        </h3>
        <p className="text-white text-xl xl:text-2xl text-center w-11/12 sm:w-8/12">
          Desarrollador front-end con 2 años de experiencia en la creación de
          interfaces web atractivas y funcionales. Con muy buen conocimiento en
          HTML, CSS, JAVASCRIPT, REACT, TAILWIND, BOOTSTRAP, GIT, GITHUB, FIGMA,
          Metodologías ágiles (SCRUM). Mi objetivo es utilizar todas mis
          habilidades técnicas para realizar soluciones y poder mejorar la
          experiencia de usuario. Actualmente trabajando en una Startup sin
          fines de lucro, realizando proyectos medianos y grandes poniendo en
          práctica todo lo aprendido y de acuerdo a cada proyecto tuve que
          aprender diferentes tecnologías, trabajamos mediante la metodología
          SCRUM con sprints semanales.
        </p>
        <Link
          to="https://drive.google.com/file/d/1lQIiDrhulcefPkoesrTuit5hpPRfZMsI/view?usp=sharing"
          target="_blank"
        >
          <button className=" bg-light-blue p-3 text-white font-bold rounded-lg hover:bg-blue-dark-hover hover:text-white mt-8">
            Descargar CV
          </button>
        </Link>
      </section>

      <Training />
      <Skills />
    </div>
  );
};

export default About;
