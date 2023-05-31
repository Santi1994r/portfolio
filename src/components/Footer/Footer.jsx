import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-black">
      <h6 className=" text-center text-white font-bold pt-10 pb-10 text-4xl">
        Seguíme en mis redes
      </h6>
      <div className=" flex justify-center gap-x-10 pb-20">
        <Link to='https://www.linkedin.com/in/santiago-ruiz-developer/' target="_blanck">
          <AiFillLinkedin
            className=" text-white text-5xl hover:text-sky-600 hover:cursor-pointer" /* href='https://www.linkedin.com/in/santiago-ruiz-developer/' */
          />
        </Link>
        <Link to='https://github.com/Santi1994r' target="_blanck">
          <BsGithub className=" text-white text-5xl hover:text-sky-600 hover:cursor-pointer" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
