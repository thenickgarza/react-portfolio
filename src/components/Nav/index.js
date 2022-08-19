// import React from "react";
// import { FaHome } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// const textArray1 = ["Hi!", "Welcome!", "Hola!"];
// const textArray2 = ["Full-Stack Web Developer", "Innovator Of Ideas", "Father"];

// const Home = () => {
//   const [index1, setIndex1] = useState(0);
//   const [index2, setIndex2] = useState(0);

//   useEffect(() => {
//     const timer = () => {
//       setIndex1((prevIndex) => {
//         if (prevIndex === textArray1.length - 1) {
//           return 0;
//         }
//         return prevIndex + 1;
//       });
//     };
//     setInterval(timer, 5000);

//     //cleanup function in order clear the interval timer
//     //when the component unmounts
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

  // useEffect(() => {
  //   const timer = () => {
  //     setIndex2((prevIndex) => {
  //       if (prevIndex === textArray2.length - 1) {
  //         return 0;
  //       }
  //       return prevIndex + 1;
  //     });
  //   };
  //   setInterval(timer, 7000);
  // })

// const Nav = () => {
//   return (
//     <header className="flex-row">
//       <h2>
//         <a
//           className="home-name"
//           href="/"
//           style={{ color: "#3bc14a", marginLeft: "15px" }}
//         ><Link to="/react-portfolio" style={{ color: "#3bc14a" }}><FaHome /></Link>
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a className="nav-text" href="/about" style={{ color: "#3bc14a" }}><Link to="/about" style={{ color: "#3bc14a" }}>
//             About Me</Link>
//             </a>
//           </li>
//           <li className="mx-2">
//             <a className="nav-text" href="/mywork" style={{ color: "#3bc14a" }}><Link to="/mywork" style={{ color: "#3bc14a" }}>My Work</Link>
//             </a>
//           </li>
//           <li className="mx-2">
//             <a
//               className="nav-text"
//               href="/contactme"
//               style={{ color: "#3bc14a" }}
//             ><Link to="/contactme" style={{ color: "#3bc14a" }}>Contact Me</Link>
//             </a>
//           </li>
//         </ul>
//       </nav>
    
    
    
//     </header>
    
//   );
// };

// export default Nav;


import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faFileCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const home = <FontAwesomeIcon icon={faHouse} size="2x" />;
const about = <FontAwesomeIcon icon={faUser} size="2x" />;
const projects = <FontAwesomeIcon icon={faFileCode} size="2x" />;
const contact = <FontAwesomeIcon icon={faEnvelope} size="2x" />;
const github = <FontAwesomeIcon icon={faGithub} size="2x" />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" />;

const Nav = () => {
  return (
    <div className="navbar2" style={{position: 'none'}}>
      <ul className="navbar-nav" style={{height: "inherit"}}>
        <li className="nav-item">
          <Link to="/react-portfolio">
            <span className="span_link">
              <i className="home nav-link" data-hover="home" style={{color: '#CFCFCF'}}>
                {home}
              </i>
              <span className="nav_text">Home</span>
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About">
            <span className="span_link">
              {" "}
              <i className="about nav-link" style={{color: '#CFCFCF'}}>{about}</i>{" "}
              <span className="nav_text">About</span>
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/mywork">
            <span className="span_link">
              {" "}
              <i className="projects nav-link" style={{color: '#CFCFCF'}}>{projects}</i>{" "}
              <span className="nav_text">Projects</span>
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contactme">
            <span className="span_link">
              {" "}
              <i className="contact nav-link" style={{color: '#CFCFCF'}}>{contact}</i>{" "}
              <span className="nav_text">Contact</span>
            </span>
          </Link>
        </li>
        {/* <li className="nav-item-2">
          <a href="https://github.com/cmd0160" className="github nav-link">
            {github}
          </a>
        </li>
        <li className="nav-item-3">
          <a
            href="https://www.linkedin.com/in/cory-davis-803b57224/"
            className="linkedin nav-link"
          >
            {linkedin}
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Nav;