import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

function About() {
    return (
      <section>
        <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
          <h2 style={{borderBottom: "solid", color: "#CFCFCF"}}>A Little About Me</h2>
        </div>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", marginTop: "50px"}}>
          <div>
            <h2 style={{display: "flex", justifyContent: "center", color: "#CFCFCF"}}>Stats</h2>
            <br/>
            <p style={{color: '#3bc14a'}}>Name: Nicholas Brooks Garza </p> 
            <p style={{color: '#3bc14a'}}>Age: 25 </p>
            <p style={{color: '#3bc14a'}}>Born: December 14th, 1996</p>
            <p style={{color: '#3bc14a'}}>Location: Austin, Tx</p>
            <p style={{color: '#3bc14a'}}>Education: UT Austin Full Stack Coding Bootcamp</p>
          </div>
          <div style={{marginTop: "70px"}}>
            <p style={{color: '#3bc14a'}}>
              Hello! I am Nicholas Garza. Web Developer Enthusiast!<br/> 
              <br/>
              A wise man once told me life is like a roll of toilet paper<br/>
              your either on a roll or taking shit. Contact me so we can <br/>
              work together to stay on a ROLL!
            </p>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center", marginTop: "50px", color: "#CFCFCF"}}>
          <h2 style={{borderBottom: "solid"}}>Skills
          </h2>
        </div>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", marginTop: "50px"}}>
            <div className="icon icon-html" style={{fontSize: "40px", color: "#f06529"}}>
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="icon icon-css" style={{fontSize: "40px", color: "#28A4D9"}}>
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="icon icon-react" style={{fontSize: "40px", color: "#5ED4F4"}}>
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="icon icon-js" style={{fontSize: "40px", color: "#EFD81D"}}>
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="icon icon-node" style={{fontSize: "40px", color: "#3C873A"}}>
              <FontAwesomeIcon icon={faNodeJs} />
            </div>
          </div>
      </section>
    )
}

export default About;

