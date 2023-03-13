import { Link } from "react-router-dom";

const Proyects = () => {
  const proyects = [
    {
      name: "Ecommerce",
      info: "Simulación de ecommerce de productos de computación.",
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
      info: "Proyecto real",
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
      info: "Sitio estatico sobre local de ropa",
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
  ]

  return (
    <section id="Proyects" className=" bg-black">
      <h5 className=" text-center text-white pt-20 pb-10 text-4xl font-bold">
        Proyectos
      </h5>
      <div className="flex justify-center flex-wrap gap-6">
        {proyects.map((proyect) => (
          <div
            key={proyect.image}
            className="flex flex-col items-center bg-indigo-900 w-11/12 sm:w-96 rounded-xl hover:scale-110 duration-150"
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
    </section>
  );
};

export default Proyects;
