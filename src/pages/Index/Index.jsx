import { useState } from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  const [hello, setHello] = useState(false)
  const [iAm, setIAm] = useState(false)
  const [Santiago, setSantiago] = useState(false)
  const [transition, setTransition] = useState(false)

  const handleText = (index) => {
    setTransition(true)
    index === 1 ? setHello(!hello) : index === 2 ? setIAm(!iAm) : index === 3 && setSantiago(!Santiago)
    /* textHi ? setHello(textHi) : setHello('Hola')
    textIam ? setIAm(textIam) : setIAm('Soy')
    textSantiago ? setSantiago(textSantiago) : setSantiago('Santiago') */
  }
/* pruevba   */
  return (  
    <section className="relative bg-[url(https://i.imgur.com/AgmtPpT.jpg)] bg-cover bg-center bg-no-repeat">
      {
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>
      }

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <Link to={"/sobre mí"}>
            <h1
              onMouseEnter={() => handleText(1)}
              className={` font-extrabold sm:text-8xl text-gray-50 delay-75 ${
                transition
                  ? "hover:translate-x-9 duration-300 delay-75 ease-linear cursor-pointer"
                  : null
              }`}
              onMouseLeave={() => handleText(1)}
            >
              {hello ? "Sobre mí" : "Hola"}
            </h1>
          </Link>
          <Link to={"/proyectos"}>
            <h1
              onMouseEnter={() => handleText(2)}
              className={` font-extrabold sm:text-8xl text-rose-700 delay-75 ${
                transition
                  ? "hover:translate-x-9 duration-300 delay-75 ease-linear cursor-pointer"
                  : null
              }`}
              onMouseLeave={() => handleText(2)}
            >
              {iAm ? "Proyectos" : "Soy"}
            </h1>
          </Link>    
          <Link to={"/contacto"}>
            <h1
              onMouseEnter={() => handleText(3)}
              className={` font-extrabold sm:text-8xl text-rose-700 delay-75 ${
                transition
                  ? "hover:translate-x-9 duration-300 delay-75 ease-linear cursor-pointer"
                  : null
              }`}
              onMouseLeave={() => handleText(3)}
            >
              {Santiago ? "Contacto" : "Santiago"}
            </h1>
          </Link>     
         {/*  <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Index;
