import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import profilePic from "../../assets/images/profilePic.png";
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <h1 style={{ borderBottom: "solid", color: "#3BC14A" }}>
          A Little About Me
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "50px",
          marginLeft: "40px",
        }}
      >
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          <div style={{display: "flex", justifyContent: "center"}}>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#3BC14A",
              borderBottom: "solid"
            }}
          >
            Stats
          </h1>
          </div>
          <div>
          <br />
          <p style={{ color: "#CFCFCF" }}>Name: Nicholas Brooks Garza </p>
          <p style={{ color: "#CFCFCF" }}>Age: 25 </p>
          <p style={{ color: "#CFCFCF" }}>Born: December 14th, 1996</p>
          <p style={{ color: "#CFCFCF" }}>Location: Austin, Tx</p>
          <p style={{ color: "#CFCFCF" }}>
            Education: UT Austin Full Stack Coding Bootcamp
          </p>
          </div>
        </div>
        <div>
          <img
            alt="profilepicture"
            src={profilePic}
            style={{ width: "225px", height: "auto", justifyContent: "center" }}
          />
        </div>
        <div style={{ marginTop: "70px", textAlign: "center", fontSize: "20px" }}>
          <p style={{ color: "#CFCFCF" }}>
            Hello! I am Nicholas Garza. Web Developer Enthusiast!
            <br />
            <br />
            A wise man once told me life is like a roll of toilet paper
            <br />
            your either on a roll or taking shit. Contact me so we can <br />
            work together to stay on a ROLL!
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          color: "#3BC14A",
        }}
      >
        <h1 style={{ borderBottom: "solid", }}>Skills</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "50px",
        }}
      >
        <div
          className="icon icon-html"
          style={{ fontSize: "40px", color: "#f06529" }}
        >
          <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div
          className="icon icon-css"
          style={{ fontSize: "40px", color: "#28A4D9" }}
        >
          <FontAwesomeIcon icon={faCss3} />
        </div>
        <div
          className="icon icon-react"
          style={{ fontSize: "40px", color: "#5ED4F4" }}
        >
          <FontAwesomeIcon icon={faReact} />
        </div>
        <div
          className="icon icon-js"
          style={{ fontSize: "40px", color: "#EFD81D" }}
        >
          <FontAwesomeIcon icon={faJsSquare} />
        </div>
        <div
          className="icon icon-node"
          style={{ fontSize: "40px", color: "#3C873A" }}
        >
          <FontAwesomeIcon icon={faNodeJs} />
        </div>
      </div>
    </motion.section>
  );
}

export default About;
