import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div style={{ borderRight: "solid", paddingRight: "225px", paddingTop: "100px", borderColor: "#3BC14A" }}>
        <h2 style={{color: "rgb(59, 193, 74)"}}>Other Ways To Reach Me!</h2>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", marginTop: "50px"}}>
        <a
          className="hover"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/thenickgarza"
          style={{fontSize: "40px", color: "rgb(207, 207, 207)"}}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nicholas-garza-2a2a44223/"
          style={{fontSize: "40px", color: "rgb(207, 207, 207)"}}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        </div>
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
            <input type="email" placeholder="Email Address" name="email" style={{width: "-webkit-fill-available"}}/>
          </div>
          <div style={{marginTop: "10px"}}>
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
          <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
            <input type="submit" value="Send Messsage" ></input>
          </div>
        </div>
      </form>
    </motion.section>
  );
};

export default ContactMe;
