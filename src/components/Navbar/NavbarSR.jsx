import { Link } from "react-scroll";

const NavbarSR = () => {
  const openNavMobile = () => {
    console.log("abierto");
  };

  return (
    <header aria-label="Site Header" className="bg-indigo-900 lg:hidden">
      <div className="mx-auto flex h-auto max-w-screen-xl items-center p-3 sm:px-6 lg:px-8">
        <img
          className="w-20 rounded-3xl"
          src="https://i.imgur.com/vKTfk5I.jpg"
          alt="santiago ruiz"
        />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="">
            <ul className="sm:flex sm:items-center gap-6 text-sm">
              <li>
                <Link
                  to="About"
                  smooth={true}
                  className="text-gray-500 transition hover:text-white cursor-pointer text-xl"
                >
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link
                  to="Proyects"
                  smooth={true}
                  className="text-gray-500 transition hover:text-white cursor-pointer text-xl"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  to="Contact"
                  smooth={true}
                  className="text-gray-500 transition hover:text-white cursor-pointer text-xl"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              target="_blank"
              href="https://github.com/Santi1994r?tab=repositories"
            >
              <img
                className="w-12 rounded-3xl cursor-pointer"
                src="https://i.imgur.com/FuPrLd7.png"
                alt="santiago ruiz"
              />
            </a>
            {
              <button
                onClick={openNavMobile}
                className="block rounded bg-indigo-500 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            }
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarSR;
