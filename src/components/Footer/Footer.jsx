import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <footer className=" bg-black">
      <h6 className=" text-center text-white font-bold pt-10 pb-10 text-4xl">
        Seguíme en mis redes
      </h6>
      <div className=" flex justify-center gap-x-10 pb-5">
        <a href="https://www.linkedin.com/in/santiago-ruiz-developer/" target="_blanck">
          <AiFillLinkedin
            className=" text-white text-5xl hover:text-sky-600 hover:cursor-pointer"/>
        </a>
        <a href="https://github.com/Santi1994r" target="_blanck">
        <BsGithub className=" text-white text-5xl hover:text-sky-600 hover:cursor-pointer" />
        </a>        
      </div>
      <div className="flex justify-end">
        <Link
          to="index"
          smooth={true}>
          <FaArrowAltCircleUp className=" text-white text-5xl mr-5 mb-5 hover:text-sky-600 hover:cursor-pointer" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
