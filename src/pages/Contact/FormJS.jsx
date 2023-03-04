import React from "react";
import './FormStyle.css'
const FormJS = () => {

  const sendEmail = (value) => {
    value.preventDefault()
    emailjs
      .sendForm("default_service", "template_1dkvk1w", this)
      .then((resp) => {
        /*  btn.value = 'Send Email'; */
        console.log(resp);
        alert("Sent!");
      })
      .catch((err) => {
        /*  btn.value = 'Send Email'; */
        alert(JSON.stringify(err));
      });
  };

  const handleEmailJS = (values) => {
    values.preventDefault();

/*    btn.value = 'Sending...'; */

   const serviceID = 'default_service';
   const templateID = 'template_1dkvk1w';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
/*       btn.value = 'Send Email'; */
      alert('Sent!');
    }, (err) => {
    /*   btn.value = 'Send Email'; */
      alert(JSON.stringify(err));
    });
  }
  return (
    <>
    <form id="form">
      <div className="field">
        <label htmlFor="from_name">from_name</label>
        <input type="text" name="from_name" id="from_name" />
      </div>
      <div className="field">
        <label htmlFor="message">message</label>
        <input type="text" name="message" id="message" />
      </div>
      <div className="field">
        <label htmlFor="user_email">user_email</label>
        <input type="text" name="user_email" id="user_email" />
      </div>
      <input onClick={sendEmail} type="submit" id="button" value="Send Email" />
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
