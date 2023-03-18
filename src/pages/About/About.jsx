import { Link } from "react-router-dom";
import BtnGoBack from "../../components/BtnGoBack/BtnGoBack";
import Skills from "../../components/Skills/Skills";
import Training from "../../components/Training.jsx/Training";

const About = () => {
  return (
    <div className="bg-black">
      <section id="About" className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-start mt-32 sm:mt-44">
          <h1 className=" text-white text-center text-6xl sm:text-8xl font-bold text-shadow shadow-xl animate-pulse">
            I am a front-end developer{" "}
          </h1>
        </div>
        <h3 className=" text-white text-center my-10 text-4xl sm:text-5xl font-bold w-8/12">
          About me
        </h3>
        <p className="text-white text-xl xl:text-2xl text-center w-11/12 sm:w-8/12">
          My goal is to get a job in a company where I can demonstrate
          everything I have learned and continue to grow as a developer, I like
          challenges and working in a group. I use good practices and I am very
          responsible. Student to be a future full stack.
        </p>
        <Link
          to="https://drive.google.com/file/d/15GsHAfhapBlZ5jitgA5Z4Q-zdEiLqmgt/view?usp=sharing"
          target="_blank"
        >
          <button className=" bg-indigo-300 p-3 text-black rounded-lg hover:bg-indigo-500 hover:text-white mt-8">
            Download CV
          </button>
        </Link>
      </section>

      <Training />
      <Skills />
    </div>
  );
};

export default About;
