import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
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

const Nav = () => {
  return (
    <header className="flex-row">
      <h2>
        <a
          className="home-name"
          href="/"
          style={{ color: "#3bc14a", marginLeft: "15px" }}
        ><Link to="/" style={{ color: "#3bc14a" }}><FaHome /></Link>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a className="nav-text" href="/about" style={{ color: "#3bc14a" }}><Link to="/about" style={{ color: "#3bc14a" }}>
            About Me</Link>
            </a>
          </li>
          <li className="mx-2">
            <a className="nav-text" href="/mywork" style={{ color: "#3bc14a" }}><Link to="/mywork" style={{ color: "#3bc14a" }}>My Work</Link>
            </a>
          </li>
          <li className="mx-2">
            <a
              className="nav-text"
              href="/contactme"
              style={{ color: "#3bc14a" }}
            ><Link to="/contactme" style={{ color: "#3bc14a" }}>Contact Me</Link>
            </a>
          </li>
        </ul>
      </nav>
    
    
    
    </header>
    
  );
};

export default Nav;
