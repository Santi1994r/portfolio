import { Link } from "react-router-dom";
import BtnGoBack from "../../components/BtnGoBack/BtnGoBack";
import Skills from "../../components/Skills/Skills";
import Training from "../../components/Training.jsx/Training";

const About = () => {
  return (
    <div id="About" className="bg-black">
      <section className="h-screen">
        <div className="flex justify-end">
          <BtnGoBack />
        </div>
        <div className="flex flex-col items-center justify-center mt-32 sm:mt-44">
          <h1 className=" text-white text-center text-4xl sm:text-8xl">
            I am a front-end developer{" "}
          </h1>
        </div>
      </section>
      {/* <section>
        <img src="https://i.imgur.com/IFGeWYX.jpg" alt="santiago ruiz" />
      </section> */}

      <section className="flex flex-col items-center">
        <h3 className=" text-white text-center mb-10 text-5xl sm:text-5xl font-bold w-8/12">
          About me
        </h3>
        <p className="text-white text-xl xl:text-2xl text-center w-11/12 sm:w-8/12">
          I considerer myself a technology lover,
          with an open mind to learn new technologies. All the knowledge i
          acquire i traslate it into projects, either on my own or working in a
          group through the SCRUM methodology, management of good practices.
        </p>
      </section>
      <section className="flex justify-center mt-10">
        <Link
          to="https://drive.google.com/file/d/1-fE4MNHW6ad1XQp-aLmtj_q2mKNwG6vQ/view?usp=sharing"
          target="_blank"
        >
          <button className=" bg-indigo-300 p-3 text-black rounded-lg hover:bg-indigo-500 hover:text-white">
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
