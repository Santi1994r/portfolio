import React, { useRef } from "react";
import "./FormStyle.css";
import emailjs from '@emailjs/browser';

const FormJS = () => {
  const formRef = useRef();

  const sendEmail = (value) => {
    value.preventDefault();
    emailjs.send("service_ggg0048","template_omljmxt",{
      from_name: formRef.current.from_name.value,
      message: formRef.current.message.value,
      user_id: formRef.current.user_id.value,
      },
      'yNLc2Kbwkbsvics7M')
      .then((resp) => {
         btn.value = 'Send Email';
        console.log(resp);
        alert("Sent!");
      })
      .catch((err) => {
         btn.value = 'Send Email';
        alert("El error es: " + JSON.stringify(err));
      });
  };

  /*   const handleEmailJS = (values) => {
    values.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_1dkvk1w';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
  } */
  return (
    <>
      <form ref={formRef} id="form">
        <div className="field">
          <label htmlFor="from_name">from_name</label>
          <input type="text" name="from_name" id="from_name" />
        </div>
        <div className="field">
          <label htmlFor="message">message</label>
          <input type="text" name="message" id="message" />
        </div>
        <div className="field">
          <label htmlFor="user_id">user_email</label>
          <input type="text" name="user_id" id="user_id" />
        </div>
        <input
          onClick={sendEmail}
          type="submit"
          id="button"
          value="Send Email"
        />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></script>
        <script type="text/javascript">
          emailjs.init("yNLc2Kbwkbsvics7M");
        </script>
      </form>
    </>
  );
};

export default FormJS;
