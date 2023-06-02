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
          Mi objetivo es poder conseguir un trabajo en el que pueda demostrar todo mi conocimiento y en el que pueda seguir formandome y creciendo como desarrollador. Me gustan los desafíos y el trabajo en equipo. Hago uso de buenas prácticas y soy muy responsable, tengo experiencia con la metodología SCRUM y git flow. 
        </p>
        <p className="text-white text-xl xl:text-2xl text-center w-11/12 sm:w-8/12">Actualmente me encuentro en la realización de diversos proyectos y en algunos casos para reforzar mis habilidades blandas.</p>
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
