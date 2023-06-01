import { useState } from "react";
import { Link } from "react-router-dom";
import VideoProject from "../../components/VideoProject/VideoProject";

const Proyects = () => {
  const [numberText, setNumberText] = useState(true);
  const proyects = [
    {
      name: "Ecommerce",
      info: {
        info1:
          "Como desarrollador, uno de los problemas que podríamos abordar utilizando JavaScript vanilla es la necesidad de crear una solución de carrito de compras personalizado para un sitio web y asegurarnos de que los clientes tengan una experiencia de compra más fluida  y personalizada adaptandosé a las necesidades del cliente.",
        info2:
          "Se creó este sitio en el que se puede agregar productos a un carrito, filtrar entre los distintos tipos de productos y darle una finalización a la compra obteniendo el total y luego vaciando el carrito para futuras compras.",
        info3:
          'Fue un desafío implementar "local storaje" para que los productos del carrito no se borren si se recarga la página y el uso de nuevas librerías.',
        info4:
          "Este proyecto me sirvió para reforzar lógica con javascript y el uso de diferentes documentaciones.",
        info5:
          "Si bien no tiene pasarela de pagos ni autenticaciones, etc, se logró lo propuesto.",
      },
      image: "https://i.imgur.com/8e0X6rR.png",
      technologies: [
        {
          urlTech: "https://i.imgur.com/F9Up8KU.png",
          altImg: "html",
        },
        {
          urlTech: "https://i.imgur.com/1lPbeVN.png",
          altImg: "css",
        },
        {
          urlTech: "https://i.imgur.com/yEmOWLP.png",
          altImg: "javascript",
        },
        {
          urlTech: "https://i.imgur.com/vucmtIm.png",
          altImg: "bootstrap",
        },
      ],
      urlCode: "https://github.com/Santi1994r/ecommerce-dinamic.git",
      deployment: "https://ecommerce-tech-js.netlify.app/",
    },
    {
      name: "Du Chocolat",
      info: {
        info1:
          "Este sitio web estático fue creado en colaboración con dos diseñadores que crearon una interfaz personalizada para cumplir con las necesidades de nuestro cliente en el ámbito de la repostería",
        info2:
          "Utilizamos React para el desarrollo del sitio y realizamos el deploy a través de Netlify. Además, el sitio es responsivo y se adapta a dispositivos móviles para ofrecer una experiencia óptima de usuario.",
        info3:
          '',
        info4:
          '',
        info5:
          '',
      },
      image: "https://i.imgur.com/XL7X7Wf.png",
      technologies: [
        {
          urlTech: "https://i.imgur.com/F9Up8KU.png",
          altImg: "html",
        },
        {
          urlTech: "https://i.imgur.com/1lPbeVN.png",
          altImg: "css",
        },
        {
          urlTech: "https://i.imgur.com/KPEO1MF.png",
          altImg: "react bootstrap",
        },
      ],
      urlCode: "https://github.com/Santi1994r/du-chocolat.git",
      deployment: "https://du-chocolat.netlify.app/",
    },
    {
      name: "Urbanos clothing",
      info: {
        info1:
          "Se creó este proyecto para reforzar el uso de HTML, CSS y librerías, el sitio esta adaptado a dispositivos móbiles. El sitio fue diseñado para simular una tienda online de ropa y cuenta con un SEO básico para mejorar su visibilidad en buscadores.",
        info2:
          "",
        info3:
          "",
        info4:
          "",
        info5:
          "",
      },
      image: "https://i.imgur.com/mKLNxkZ.png",
      technologies: [
        {
          urlTech: "https://i.imgur.com/F9Up8KU.png",
          altImg: "html",
        },
        {
          urlTech: "https://i.imgur.com/1lPbeVN.png",
          altImg: "css",
        },
        {
          urlTech: "https://i.imgur.com/vucmtIm.png",
          altImg: "bootstrap",
        },
      ],
      urlCode: "https://github.com/Santi1994r/clothing-store-static.git",
      deployment: "https://urbanos-clothing.netlify.app",
    },
  ];

  const collaborativeProjects = [
    {
      name: "Aromaticas App",
      info: {
        info1:
          "Nuestro sitio web sobre plantas está diseñado con React y CSS puro, junto con diversas librerías para ofrecer a nuestros usuarios una experiencia amigable e intuitiva. Aquí podrás encontrar información esencial sobre plantas, sus fechas de cultivo y siembras, así como tips para mejorar la producción de tus cultivos.",
        info2:
          "También se ofrece la posibilidad de filtrar por diferentes épocas del año y niveles de cultivadores, para que puedas enfocarte en las plantas que mejor se ajusten a tus necesidades y objetivos. ",
        info3:
          "Con nuestro diseño amigable y fácil de usar, nos aseguramos de que puedas aprovechar al máximo tu tiempo en nuestro sitio mientras aprendes y mejoras tus habilidades como cultivador.",
        info4:
          "",
        info5:
          "",
      },
      image: "https://i.imgur.com/1fnRQvd.png",
      technologies: [
        {
          urlTech: "https://i.imgur.com/F9Up8KU.png",
          altImg: "html",
        },
        {
          urlTech: "https://i.imgur.com/1lPbeVN.png",
          altImg: "css",
        },
        {
          urlTech: "https://i.imgur.com/yEmOWLP.png",
          altImg: "javascript",
        },
        {
          urlTech: "https://i.imgur.com/KPEO1MF.png",
          altImg: "react bootstrap",
        },
        {
          urlTech: "https://i.imgur.com/4mSWRCz.png",
          altImg: "react",
        },
      ],
      urlCode: "https://github.com/ProjectsDevLatam/AromaticsApp",
      deployment: "https://aromatics.netlify.app/",
    },
    {
      name: "Aula Equis",
      info: {
        info1:
          "Nuestro sitio web de gestión educativa es una solución moderna y eficiente desarrollada utilizando las últimas tecnologías de desarrollo web, como React, Typescript, y Tailwind CSS para un diseño personalizado y amigable.",
        info2:
          "Nuestro backend está creado con NodeJS, Express, JWT, y MongoDB para ofrecer la escalabilidad y seguridad que nuestros usuarios necesitan.",
        info3:
          "Este sitio va a ofrecer herramientas intuitivas para administrar alumnos, cursos y recursos educativos.",
        info4:
          "Además, ofrecerá un panel de control fácil de usar para los administradores y los padres, y un portal para estudiantes donde pueden acceder a todo lo relacionado con sus cursos y progreso.",
        info5:
          "",
      },
      image: "https://i.imgur.com/FqslrJ4.png",
      technologies: [
        {
          urlTech: "https://i.imgur.com/F9Up8KU.png",
          altImg: "html",
        },
        {
          urlTech: "https://i.imgur.com/1lPbeVN.png",
          altImg: "css",
        },
        {
          urlTech: "https://i.imgur.com/yEmOWLP.png",
          altImg: "javascript",
        },
        {
          urlTech: "https://i.imgur.com/mS8701n.png",
          altImg: "tailwind",
        },
        {
          urlTech: "https://i.imgur.com/4mSWRCz.png",
          altImg: "react",
        },
      ],
      urlCode: "https://github.com/ProjectsDevLatam/Aula-Equis",
      deployment: "https://www.aulaequis.com/",
    },
  ];

  const proyectsWordpress = [
    {
      name: "Hilo y Fulgor",
      info: {
        info1:
          "Un sitio web de venta de lencería fue creado con WordPress para ofrecer a los clientes una experiencia de compra fácil y rápida . ",
        info2:
          "Ofrecemos una amplia selección de productos de alta calidad para satisfacer las necesidades de cualquier mujer. Se utiliza un diseño elegante y moderno para representar la calidad de los productos producidos por 'Hilo y Fulgor'. El carrito de compras está diseñado para ser intuitivo y fácil de usar.",
        info3:
          "Me encargo de la administración y actualización del sitio acorde a lo que valla necesitando el cliente.",
        info4:
          "",
        info5:
          "",
      },
      image: "https://i.imgur.com/G4YTT9c.png",
      deployment: "https://hiloyfulgor.cl/",
    },
    {
      name: "Cuatrom2",
      info: {
        info1:
          "El sitio web de inmobiliaria fue diseñado cuidadosamente en WordPress para ofrecer a nuestros clientes una experiencia fácil y confiable al buscar su nuevo hogar. Se utiliza un diseño profesional y moderno para mostrar las propiedades de forma atractiva, que sea fácil de navegar y nos aseguramos de que nuestros clientes tengan la mejor experiencia mientras buscan su nuevo hogar.",
        info2:
          "",
        info3:
          "",
        info4:
          "",
        info5:
          "",
      },
      image: "https://i.imgur.com/A8lKH66.png",
      deployment: "https://cuatrom2.cl/",
    }
  ];

  const handleScroll = (information) => {
    information.length > 30 ? setNumberText(true) : null;
  };

  /* handleScroll(collaborativeProjects[1].info) */
  return (
    <section id="Proyects" className=" bg-black">
      <h5 className=" text-center text-white pt-20 pb-10 text-4xl font-bold">
        Experiencia
      </h5>
      <div className="flex justify-center flex-wrap gap-6">
        {proyects.map((proyect) => (
          <div
            key={proyect.image}
            className="flex flex-col items-center bg-indigo-900 w-11/12 sm:w-5/12 rounded-xl"
          >
            <h6 className="text-center text-white p-2 text-4xl">
              {proyect.name}
            </h6>
            <article className="text-center text-white p-2 text-xl h-44 overflow-y-scroll">
              <p>{proyect.info.info1}</p>
              <p>{proyect.info.info2}</p>
              <p>{proyect.info.info3}</p>
              <p>{proyect.info.info4}</p>
              <p>{proyect.info.info5}</p>
            </article>
            <img
              className=" w-11/12 mt-3"
              src={proyect.image}
              alt="santiago ruiz"
            />
           {/*  <VideoProject src='https://youtu.be/yXMqRNmNMp0' /> */}
            {/* <iframe
      width="400"
      height="315"
      src='https://youtu.be/yXMqRNmNMp0'
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe> */}
            <div className="flex flex-col items-center justify-center mt-3">
              <h6 className=" text-white text-2xl">Tecnologías usadas</h6>
              <div className="flex">
                {proyect.technologies.map((logo) => (
                  <img
                    key={logo.urlTech}
                    className=" w-10"
                    src={logo.urlTech}
                    alt={logo.altImg}
                  />
                ))}
              </div>
            </div>
            <div className=" my-3 flex p-3">
              <Link to={proyect.urlCode} target="_blank">
                <button className="rounded bg-indigo-600 px-5 sm:px-8 sm:py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 mr-3 flex items-center h-12 sm:w-40">
                  <img
                    className=" w-10 sm:mr-2"
                    src="https://i.imgur.com/FuPrLd7.png"
                    alt="santiago ruiz"
                  />
                  <p>Ver código</p>
                </button>
              </Link>
              <Link to={proyect.deployment} target="_blank">
                <button className="rounded bg-indigo-600 px-5 sm:px-8 sm:py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 flex items-center h-12 sm:w-40">
                  <img
                    className=" w-10 rounded-xl sm:mr-2"
                    src="https://i.imgur.com/vKTfk5I.jpg"
                    alt="santiago ruiz"
                  />
                  <p>Ver proyecto</p>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h5 className=" text-center text-white pt-20 pb-10 text-4xl font-bold">
        Proyectos colaborativos
      </h5>
      <div className="flex justify-center flex-wrap gap-6">
        {collaborativeProjects.map((proyect) => (
          <div
            key={proyect.image}
            className="flex flex-col items-center bg-indigo-900 w-11/12 sm:w-5/12 rounded-xl"
          >
            <h6 className="text-center text-white p-2 text-4xl">
              {proyect.name}
            </h6>
            <article className="text-center text-white p-2 text-xl h-44 overflow-y-scroll">
              <p>{proyect.info.info1}</p>
              <p>{proyect.info.info2}</p>
              <p>{proyect.info.info3}</p>
              <p>{proyect.info.info4}</p>
              <p>{proyect.info.info5}</p>
            </article>
            <img
              className=" w-11/12 mt-3"
              src={proyect.image}
              alt="santiago ruiz"
            />
            <div className="flex justify-center mt-3">
              {proyect.technologies.map((logo) => (
                <img
                  key={logo.urlTech}
                  className=" w-10"
                  src={logo.urlTech}
                  alt={logo.altImg}
                />
              ))}
            </div>
            <div className=" my-3 flex p-3">
              <Link to={proyect.urlCode} target="_blank">
                <button className="rounded bg-indigo-600 px-5 sm:px-8 sm:py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 mr-3 flex items-center h-12 sm:w-40">
                  <img
                    className=" w-10 sm:mr-2"
                    src="https://i.imgur.com/FuPrLd7.png"
                    alt="santiago ruiz"
                  />
                  <p>Ver código</p>
                </button>
              </Link>
              <Link to={proyect.deployment} target="_blank">
                <button className="rounded bg-indigo-600 px-5 sm:px-8 sm:py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 flex items-center h-12 sm:w-40">
                  <img
                    className=" w-10 rounded-xl sm:mr-2"
                    src="https://i.imgur.com/vKTfk5I.jpg"
                    alt="santiago ruiz"
                  />
                  <p>Ver proyecto</p>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h6 className=" text-center text-white pt-20 pb-10 text-4xl font-bold">Proyectos en Wordpress</h6>
      <div className="flex justify-center flex-wrap gap-6">
        {proyectsWordpress.map((proyect) => (
          <div
            key={proyect.image}
            className="flex flex-col items-center bg-indigo-900 w-11/12 sm:w-5/12 rounded-xl"
          >
            <h6 className="text-center text-white p-2 text-4xl">
              {proyect.name}
            </h6>
            <article className="text-center text-white p-2 text-xl h-44 overflow-y-scroll">
              <p>{proyect.info.info1}</p>
              <p>{proyect.info.info2}</p>
              <p>{proyect.info.info3}</p>
              <p>{proyect.info.info4}</p>
              <p>{proyect.info.info5}</p>
            </article>
            <img
              className=" w-11/12 mt-3"
              src={proyect.image}
              alt="santiago ruiz"
            />
           {/*  <VideoProject src='https://youtu.be/yXMqRNmNMp0' /> */}
            {/* <iframe
      width="400"
      height="315"
      src='https://youtu.be/yXMqRNmNMp0'
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe> */}
            <div className=" my-3 flex p-3">
              <Link to={proyect.deployment} target="_blank">
                <button className="rounded bg-indigo-600 px-5 sm:px-8 sm:py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 flex items-center h-12 sm:w-40">
                  <img
                    className=" w-10 rounded-xl sm:mr-2"
                    src="https://i.imgur.com/vKTfk5I.jpg"
                    alt="santiago ruiz"
                  />
                  <p>Ver proyecto</p>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyects;

/*  <section id="Proyects" className=" bg-black">
      <h5 className=" text-center text-white pt-20 pb-10 text-4xl font-bold">
        Experiencia
      </h5>
      <div className="flex justify-center flex-wrap gap-6">
        {proyects.map((proyect) => (
          <div
            key={proyect.image}
            className="flex flex-col items-center bg-indigo-900 w-11/12 sm:w-96 rounded-xl hover:sm:scale-110 duration-150"
          >
            <h6 className="text-center text-white p-2 text-xl">
              {proyect.name}
            </h6>
            <p className="text-center text-white p-2 text-xl h-14">{proyect.info}</p>
            <img
              className=" w-11/12 mt-3"
              src={proyect.image}
              alt="santiago ruiz"
            />
            <div className="flex justify-center mt-3">
              {proyect.technologies.map((logo) => (
                <img
                  key={logo.urlTech}
                  className=" w-10"
                  src={logo.urlTech}
                  alt={logo.altImg}
                />
              ))}
            </div>
            <div className=" my-3 flex p-3">
              <Link to={proyect.urlCode} target="_blank">
                <button className="rounded bg-indigo-600 px-5 sm:px-8 sm:py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 mr-3 flex items-center h-12 sm:w-40">
                  <img
                    className=" w-10 sm:mr-2"
                    src="https://i.imgur.com/FuPrLd7.png"
                    alt="santiago ruiz"
                  />
                  <p>Ver código</p>
                </button>
              </Link>
              <Link to={proyect.deployment} target="_blank">
                <button className="rounded bg-indigo-600 px-5 sm:px-8 sm:py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 flex items-center h-12 sm:w-40">
                  <img
                    className=" w-10 rounded-xl sm:mr-2"
                    src="https://i.imgur.com/vKTfk5I.jpg"
                    alt="santiago ruiz"
                  />
                  <p>Ver proyecto</p>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h5 className=" text-center text-white pt-20 pb-10 text-4xl font-bold">
        Proyectos colaborativos
      </h5>
      <div className="flex justify-center flex-wrap gap-6">
        {collaborativeProjects.map((proyect) => (
          
          <div
            key={proyect.image}
            className="flex flex-col items-center bg-indigo-900 w-11/12 sm:w-96 rounded-xl hover:sm:scale-110 duration-150"
          >
            <h6 className="text-center text-white p-2 text-xl">
              {proyect.name}
            </h6>
            <p className={`text-center text-white p-2 text-xl h-20 ${numberText ? 'overflow-y-scroll' : null }`}>{proyect.info}</p>
            <img
              className=" w-11/12 mt-3"
              src={proyect.image}
              alt="santiago ruiz"
            />
            <div className="flex justify-center mt-3">
              {proyect.technologies.map((logo) => (
                <img
                  key={logo.urlTech}
                  className=" w-10"
                  src={logo.urlTech}
                  alt={logo.altImg}
                />
              ))}
            </div>
            <div className=" my-3 flex p-3">
              <Link to={proyect.urlCode} target="_blank">
                <button className="rounded bg-indigo-600 px-5 sm:px-8 sm:py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 mr-3 flex items-center h-12 sm:w-40">
                  <img
                    className=" w-10 sm:mr-2"
                    src="https://i.imgur.com/FuPrLd7.png"
                    alt="santiago ruiz"
                  />
                  <p>Ver código</p>
                </button>
              </Link>
              <Link to={proyect.deployment} target="_blank">
                <button className="rounded bg-indigo-600 px-5 sm:px-8 sm:py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 flex items-center h-12 sm:w-40">
                  <img
                    className=" w-10 rounded-xl sm:mr-2"
                    src="https://i.imgur.com/vKTfk5I.jpg"
                    alt="santiago ruiz"
                  />
                  <p>Ver proyecto</p>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section> */
