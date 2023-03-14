import React from "react";
import { VscError } from 'react-icons/vsc';
import { HiOutlineCheckCircle } from 'react-icons/hi';


const AlertEmail = ({icon, text1, text2}) => {
  return (
    <div role="alert" className={`rounded-xl border ${icon ? 'bg-green-900' : ' bg-red-700'}  border-gray-100 p-4 shadow-xl`}>
      <div className="flex items-start gap-4">
        <span className="text-green-600">
          {
            icon ? <HiOutlineCheckCircle className=' h-8 w-10 text-green-300' /> : <VscError className=" h-8 w-10 text-white" />
          }
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg> */}
          
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-white">
            {`${icon ? 'E-mail enviado con éxito' : 'Error'}`}
            
          </strong>

          <p className="mt-1 text-sm text-white">
          {`${icon ? 'Gracias por tu mensaje' : 'No se puede enviar el mail vacío ó incompleto'}`}
            
          </p>
        </div>

        <button className="text-white transition hover:text-gray-600">
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AlertEmail;
