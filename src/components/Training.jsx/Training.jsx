import React from "react";
import Modal from "../Modal/Modal";
import ModalJS from "../Modal/ModalJS";

const Training = () => {
  return (
    <section className="flex flex-col w-10/12 sm:w-8/12 m-auto">
      <h4 className="text-white text-center mt-28 mb-5 text-4xl font-bold">
        Formación
      </h4>
      <div className=" bg-indigo-900 rounded-xl w-full">
        <div className=" flex flex-col sm:flex-row items-center justify-evenly hover:bg-indigo-500 hover:rounded-xl p-5 h-1/2">
          <div className="flex flex-col sm:flex-row sm:justify-center items-center mb-3 w-6/12">
            <p className=" text-white sm:mr-5 text-2xl text-center">
              DESARROLLO WEB:
            </p>
            <ul className=" text-white">
              <li>Responsive(Grid, Flex box)</li>
              <li>Git y Github</li>
              <li>Frameworks(bootstrap)</li>
              <li>SASS</li>
              <li>SEO</li>
              <li>Deployment</li>
            </ul>
          </div>
          <div className=" w-6/12 flex justify-center">
          <Modal
            urlCertificate={"https://i.imgur.com/XAA2VAD.png"}
            altCertificate={"certificado desarrollo web"}
            nameModal={"modal1"}
          />
          </div>
        </div>
        <div className=" flex flex-col sm:flex-row items-center justify-evenly hover:bg-indigo-500 hover:rounded-xl p-5 h-1/2">
          <div className="flex flex-col sm:flex-row sm:justify-center items-center mb-3 w-6/12">
            <p className=" text-white sm:mr-5 text-2xl text-center">
              JAVASCRIPT:{" "}
            </p>
            <ul className=" text-white ml-3">
              <li>Local Storaje</li>
              <li>POO</li>
            </ul>
          </div>
          <div className=" w-6/12 flex justify-center">
            <ModalJS />
          </div>
          {/* <Modal urlCertificate={'https://i.imgur.com/SCnTZ7B.png'} altCertificate={'certificado javascript'} nameModal={'modal2'} /> */}
          
        </div>
        <div className=" flex flex-col sm:flex-row items-center justify-evenly hover:bg-indigo-500 hover:rounded-xl p-5 h-1/2">
          <div className="flex flex-col sm:flex-row sm:justify-center items-center mb-3 w-6/12">
            <p className=" text-white sm:mr-5 text-2xl text-center">
              WORDPRESS:
            </p>
            <ul className=" text-white">
              <li>Creación de plugins y temas</li>
              <li>Mantenimiento</li>
              <li>Actualizaciones</li>
            </ul>
          </div>
        </div>
        <div className=" flex sm:flex-row items-center justify-center hover:bg-indigo-500 hover:rounded-xl p-5 h-1/2 w-full">
          <p className=" text-white sm:mr-5 text-2xl text-center ">
            REACT:
          </p>
          <ul className=" text-white ml-3">
              <li>react-router-dom</li>
              <li>Custom Hooks</li>
              <li>Context</li>
              <li>APIs</li>
              <li>Firebase</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Training;
