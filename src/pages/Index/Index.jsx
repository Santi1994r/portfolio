import { useState } from "react";
import { Link } from "react-scroll";

const Index = () => {
  const [hello, setHello] = useState(false);
  const [iAm, setIAm] = useState(false);
  const [Santiago, setSantiago] = useState(false);
  const [transition, setTransition] = useState(false);

  const handleText = (index) => {
    setTransition(true);
    index === 1
      ? setHello(!hello)
      : index === 2
      ? setIAm(!iAm)
      : index === 3 && setSantiago(!Santiago);
  };
  return (
    <section id="index"
      className="sm:relative bg-[url(https://imgur.com/8bVtXbv)] bg-cover bg-center bg-no-repeat"
    >
    <div className="sm:absolute inset-0 bg-gray/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-gray-800/25"></div>
    
      <div className="sm:relative flex flex-col items-start justify-start sm:justify-center pt-2 pb-10 h-screen mx-auto max-w-screen-xl px-4 py-32 sm:px-6  lg:h-screen lg:px-8">
        <div className="max-w-xl text-center sm:text-left mb-10">
          <Link 
            to='About'
            smooth={true}>
            <h1
              onMouseEnter={() => handleText(1)}
              className={` font-extrabold text-7xl sm:text-8xl text-neutral-600 sm:text-gray-50 delay-75 ${
                transition
                  ? "hover:translate-x-9 duration-300 delay-75 ease-linear cursor-pointer"
                  : null
              }`}
              onMouseLeave={() => handleText(1)}
            >
              {hello ? "Sobre mí" : "Hola,"}
            </h1>
          </Link>
          <Link 
            to='Proyects'
            smooth={true}>
            <h1
              onMouseEnter={() => handleText(2)}
              className={` font-extrabold text-5xl sm:text-8xl text-blue-dark-hover delay-75 ${
                transition
                  ? "hover:translate-x-9 duration-300 delay-75 ease-linear cursor-pointer"
                  : null
              }`}
              onMouseLeave={() => handleText(2)}
            >
              {iAm ? "Proyectos" : "Soy"}
            </h1>
          </Link>
          <Link 
            to='Contact'
            smooth={true}>
            <h1
              onMouseEnter={() => handleText(3)}
              className={` font-extrabold text-5xl sm:text-8xl text-blue-dark-hover delay-75 ${
                transition
                  ? "hover:translate-x-9 duration-300 delay-75 ease-linear cursor-pointer"
                  : null
              }`}
              onMouseLeave={() => handleText(3)}
            >
              {Santiago ? "Contacto" : "Santiago"}
            </h1>
          </Link>
        </div>
      </div>
      <section>
        
      </section>
    </section>
  );
};

export default Index;
