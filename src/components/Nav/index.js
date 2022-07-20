import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="flex-row">
      <h2>
        <a
          className="home-name"
          href="/"
          style={{ color: "#3bc14a", marginLeft: "15px" }}
        ><Link to="/"></Link>
          <FaHome />
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a className="nav-text" href="/about" style={{ color: "#3bc14a" }}><Link to="/about">
             </Link> About Me
            </a>
          </li>
          <li className="mx-2">
            <a className="nav-text" href="/mywork" style={{ color: "#3bc14a" }}><Link to="/mywork"></Link>
              My Work
            </a>
          </li>
          <li className="mx-2">
            <a
              className="nav-text"
              href="/contactme"
              style={{ color: "#3bc14a" }}
            ><Link to="/contactme"></Link>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
