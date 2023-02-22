import React from "react";
import BtnGoBack from "../../components/BtnGoBack/BtnGoBack";
import Skills from "../../components/Skills/Skills";
import Training from "../../components/Training.jsx/Training";

const About = () => {
  return (
    <div className=" h-full bg-black ">
      <section className=" h-h-9-screen">
        <div className="flex justify-end">
          <BtnGoBack />
        </div>
        <div className="flex flex-col items-center justify-center mt-32 sm:mt-44">
          <h1 className=" text-white text-center text-4xl sm:text-8xl">
            Soy desarrollador Front End{" "}
          </h1>
        </div>
      </section>
      <section>
        <img src="https://i.imgur.com/IFGeWYX.jpg" alt="santiago ruiz" />
      </section>

      <section className='flex flex-col items-center'>
        <h3 className=' text-white text-center mt-32 mb-10 text-5xl sm:text-5xl font-bold w-8/12'>
          Sobre mí
        </h3>
        <p className="text-white text-xl xl:text-2xl text-center w-11/12 sm:w-8/12">
          Hi, I’m Dejan. I'm a multi-talented human with over 10+ years of
          experiences in wide range of design disciplines. You can also call me
          a product designer, experience designer, interaction, UI, UX or by any
          other market defined function-title. I'm also a multi-disciplinary
          maker with over 10 years of experiences in wide range of design
          disciplines, manager, advisor, entrepreneur, front-end developer,
          music enthusiast, traveler, photographer and more. I don’t like to
          define myself by the work I’ve done. I define myself by the work I
          want to do. Skills can be taught, personality is inherent. I prefer to
          keep learning, continue challenging myself, and do interesting things
          that matter.
        </p>
      </section>
      <Training />
      <Skills />
    </div>
  );
};

export default About;
