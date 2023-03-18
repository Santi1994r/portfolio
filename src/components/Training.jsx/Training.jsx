import React from "react";
import Modal from "../Modal/Modal";

const Training = () => {
  return (
    <section className="flex flex-col w-8/12 m-auto">
      <h4 className="text-white text-center mt-28 mb-5 text-4xl font-bold">
        Training
      </h4>
      <div className=" bg-indigo-900 rounded-xl w-full">
        <div className=" flex flex-col sm:flex-row items-center justify-center hover:bg-indigo-500 hover:rounded-xl p-5 h-1/2">
          <p className=" text-white sm:mr-5 text-2xl text-center">Web development</p>
          <Modal urlCertificate={'https://i.imgur.com/XAA2VAD.png'} altCertificate={'certificado desarrollo web'} nameModal={'modal1'} />
        </div>
        <div className=" flex flex-col sm:flex-row items-center justify-center hover:bg-indigo-500 hover:rounded-xl p-5 h-1/2">
          <p className=" text-white sm:mr-5 text-2xl text-center">JavaScript</p>
          <Modal urlCertificate={'https://i.imgur.com/SCnTZ7B.png'} altCertificate={'certificado javascript'} nameModal={'modal2'} />
        </div>
        <div className=" flex flex-col sm:flex-row items-center justify-center hover:bg-indigo-500 hover:rounded-xl p-5 h-1/2">
          <p className=" text-white sm:mr-5 text-2xl text-center">React - Coderhouse</p>
        </div>
        <div className=" flex flex-col sm:flex-row items-center justify-center hover:bg-indigo-500 hover:rounded-xl p-5 h-1/2">
          <p className=" text-white sm:mr-5 text-2xl text-center">Python - Coderhouse</p>
        </div>
      </div>
    </section>
  );
};

export default Training;
