import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import FormJS from "./FormJS";

const Contact = () => {
  const form = useRef()
  console.log(form.current);
  const submitInfo = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };



  const validation = Yup.object({
    from_name: Yup.string().required(
      <p className="text-danger text-2xl">Campo requerido</p>
    ),
    user_email: Yup.string()
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
        responderé a la brevedad.
      </p>
      <Formik
        initialValues={{
          from_name: "",
          user_email: "",
          message: "",
        }}
        validationSchema={validation}
        onSubmit={submitInfo}
      >
        <Form
        ref={form}
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
            name="user_email"
            id="user_email"
            className=" w-10/12 md:w-96 p-3"
            placeholder="Ingresa tu e-mail"
          />
          <ErrorMessage name="user_email" />
          <Field
            name="message"
            id="message"
            className=" w-10/12 md:w-96 p-3"
            placeholder="Ingresa un mensaje"
          />
          <ErrorMessage name="message" />
          <button
           /*  onClick={sendEmail} */
            id="button"
            type="submit"
            className="text-white"
          >
            Enviar
          </button>
          {/*      <input onClick={handleBtn} type="submit" id="button" className="text-white text-xl bg-indigo-900 p-3 rounded-xl font-medium hover:bg-indigo-700 cursor-pointer" value="Enviar" /> */}
        </Form>
      </Formik>
      {/* <FormJS /> */}
    </div>
  );
};

export default Contact;
