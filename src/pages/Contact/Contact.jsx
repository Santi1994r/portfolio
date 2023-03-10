import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useRef, React, useState } from "react";
import * as Yup from "yup";
import AlertEmail from "../../components/AlertEmail/AlertEmail";
/* import FormJS from "./FormJS"; */


const Contact = () => {
  const [alertEmail, setAlertEmail] = useState(false);
  const formRef = useRef();
  const btnSubmit = useRef();

  const sendEmail = (value) => {
    btnSubmit.current.value = "Enviando";
    value.preventDefault();
    emailjs
      .send(
        "service_ggg0048",
        "template_omljmxt",
        {
          from_name: formRef.current.from_name.value,
          message: formRef.current.message.value,
          user_id: formRef.current.user_id.value,
        },
        "yNLc2Kbwkbsvics7M"
      )
      .then((resp) => {
        setTimeout(() => {
          btnSubmit.current.value = "Enviar e-mail";
          formRef.current.from_name.value = "";
          formRef.current.message.value = "";
          formRef.current.user_id.value = "";
        }, 3000);
        console.log(resp);
        
      })
      .catch((err) => {
        btnSubmit.current.value = "Enviar e-mail";
        alert("El error es: " + JSON.stringify(err));
      });
  };

  const validation = Yup.object({
    from_name: Yup.string().required(
      <p className="text-danger text-2xl">Campo requerido</p>
    ),
    user_id: Yup.string()
      .email(<p className="text-danger text-2xl">Formato de E-mail invalido</p>)
      .required(<p className="text-danger text-2xl">Campo requerido</p>),
    message: Yup.string().required(
      <p className="text-danger text-2xl">Campo requerido</p>
    ),
  });

  return (
    <div id="Contact" className=" bg-black">
      <h6 className="text-center text-white pt-20 pb-10 text-4xl font-bold">
        Contactame
      </h6>
      <p className=" text-center text-white text-2xl">
        Si quieres contactarme para que trabajemos juntos dejame un mensaje y te
        responder√© a la brevedad.
      </p>
      <Formik
        initialValues={{
          from_name: "",
          user_id: "",
          message: "",
        }}
        validationSchema={validation}
        onSubmit={sendEmail}
      >
        <Form
          ref={formRef}
          id="form"
          className="flex flex-col items-center gap-5 mt-10 pb-10 "
        >
          <Field
            type="text"
            name="from_name"
            id="from_name"
            className=" w-10/12 md:w-96 p-3"
            placeholder="Ingresa tu nombre"
          />
          <ErrorMessage name="from_name" />
          <Field
            type="text"
            name="user_id"
            id="user_id"
            className=" w-10/12 md:w-96 p-3"
            placeholder="Ingresa tu e-mail"
          />
          <ErrorMessage name="user_id" />
          <Field
            name="message"
            id="message"
            className=" w-10/12 md:w-96 p-3"
            placeholder="Ingresa un mensaje"
          />
          <ErrorMessage name="message" />
          <input
            ref={btnSubmit}
            onClick={sendEmail}
            id="button"
            type="submit"
            className="text-white bg-indigo-800 p-3 rounded-lg"
            value="Enviar e-mail"
          />
          <div className='absolute'>{alertEmail ? <AlertEmail icon={true} text1={'E-mail enviado con √©xito'} text2={'Gracias por tu mensaje.'} /> : null}</div>

          {setTimeout(() => {
            setAlertEmail(false);
          }, 4000)}
          {/*      <input onClick={handleBtn} type="submit" id="button" className="text-white text-xl bg-indigo-900 p-3 rounded-xl font-medium hover:bg-indigo-700 cursor-pointer" value="Enviar" /> */}
        </Form>
      </Formik>
      {/*  <FormJS /> */}
    </div>
  );
};

export default Contact;
