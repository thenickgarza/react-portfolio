import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export const ContactMe = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mo168ko",
        "template_6bdc3r5",
        form.current,
        "DFOiABrpiUi3Fy19x"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <motion.section 
    className="contactmecontainer"
    initial={{opacity:0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <div style={{ borderRight: "solid", paddingRight: "225px" }}>
        <h2>Contact me today!</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} id="contact-form">
        <div>
          <div>
            <input
              style={{ width: "-webkit-fill-available" }}
              type="text"
              placeholder="Name"
              name="name"
            />
          </div>
          <div>
            <input type="email" placeholder="Email Address" name="email" />
          </div>
          <div>
            <input type="text" placeholder="Subject" name="subject" />
          </div>
          <div>
            <textarea
              id=""
              cols="30"
              rows="8"
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
          <div>
            <input type="submit" value="Send Messsage"></input>
          </div>
        </div>
      </form>
    </motion.section>
  );
};

export default ContactMe;
