import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRef, React, useState, useEffect } from "react";
import * as Yup from "yup";
import AlertEmail from "../../components/AlertEmail/AlertEmail";

const Contact = () => {
  const [alertEmail, setAlertEmail] = useState(false);
  const formRef = useRef();
  const btnSubmit = useRef();

  const sendEmail = (value) => {
    value.preventDefault();
    if (
      formRef.current.from_name.value == "" ||
      formRef.current.message.value == "" ||
      formRef.current.user_id.value == ""
    ) {
      setAlertEmail("error");
      return;
    }
    btnSubmit.current.value = "Enviando";
    emailjs
      .send(
        "service_db9pnc5",
        "template_omljmxt",
        {
          from_name: formRef.current.from_name.value,
          message: formRef.current.message.value,
          user_id: formRef.current.user_id.value,
        },
        "yNLc2Kbwkbsvics7M"
      )
      .then((resp) => {
        btnSubmit.current.value = "Enviar e-mail";
        setAlertEmail(true);
      })
      .catch((err) => {
        btnSubmit.current.value = "Enviar e-mail";
        alert("El error es: " + JSON.stringify(err));
      });
  };

  const validation = Yup.object({
    from_name: Yup.string().required(
      <p className="text-danger text-2xl">Ingresa tu nombre</p>
    ),
    user_id: Yup.string()
      .email(<p className="text-danger text-2xl">Formato de E-mail invalido</p>)
      .required(<p className="text-danger text-2xl">Ingresa tu mail</p>),
    message: Yup.string().required(
      <p className="text-danger text-2xl">Ingresa un mensaje</p>
    ),
  });

  return (
    <div id="Contact" className=" bg-blue-dark">
      <h6 className="text-center text-white pt-20 pb-10 text-4xl font-bold">
        Contáctame
      </h6>
      <p className=" text-center text-white text-2xl px-4 w-full sm:w-6/12 m-auto">
        Si quieres ponerte en contacto conmigo para que trabajemos juntos,
        déjame un mensaje y me pondré en contacto contigo lo antes posible.
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
            placeholder="Ingrese su nombre"
          />
          <ErrorMessage name="from_name" />
          <Field
            type="text"
            name="user_id"
            id="user_id"
            className=" w-10/12 md:w-96 p-3"
            placeholder="Ingrese su correo electrónico"
          />
          <ErrorMessage name="user_id" />
          <Field
            name="message"
            id="message"
            className=" w-10/12 md:w-96 p-3"
            placeholder="Ingrese un mensaje"
          />
          <ErrorMessage name="message" />
          <input
            ref={btnSubmit}
            onClick={sendEmail}
            id="button"
            type="submit"
            className="text-white bg-light-blue hover:bg-blue-dark-hover p-3 rounded-lg cursor-pointer"
            value="Enviar e-mail"
          />

          <div className="absolute">
            {alertEmail == true ? (
              <AlertEmail
                icon={true}
                text1={"E-mail enviado con éxito"}
                text2={"Gracias por tu mensaje."}
              />
            ) : alertEmail == "error" ? (
              <AlertEmail icon={false} />
            ) : null}
          </div>

          {useEffect(() => {
            setTimeout(() => {
              setAlertEmail(false);
              formRef.current.from_name.value = "";
              formRef.current.message.value = "";
              formRef.current.user_id.value = "";
            }, 3000);
          }, [alertEmail])}
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
