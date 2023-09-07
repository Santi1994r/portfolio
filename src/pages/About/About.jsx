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
          HTML, CSS, JAVASCRIPT, REACT, TAILWIND, BOOTSTRAP, GIT, GITHUB, FIGMA, WORDPRESS,
          Metodologías ágiles (SCRUM). Mi objetivo es utilizar todas mis
          habilidades técnicas para realizar soluciones y poder mejorar la
          experiencia de usuario. Actualmente me encuentro trabajando en una startup realizando proyectos innovadores y aprendiendo nuevas tecnologías.
        </p>
        <p className="text-white text-xl xl:text-2xl text-center w-11/12 sm:w-8/12">
        Soy una persona motivada y proactiva, con muy buena comunicación y capacidad para trabajar en equipo. Cuento con experiencia previa en el rubro comercial y como vendedor de productos.
        </p>
        <Link
          to="https://drive.google.com/file/d/1XLnBnTyvqA-c2KllcMchtwHA6uKa025B/view?usp=sharing"
          target="_blank"
        >
          <button className=" bg-light-blue p-3 text-white font-bold rounded-lg hover:bg-blue-dark-hover hover:text-white mt-8">
            Ver CV
          </button>
        </Link>
      </section>

      <Training />
      <Skills />
    </div>
  );
};

export default About;
