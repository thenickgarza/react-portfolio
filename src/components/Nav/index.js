import React from "react";
// import { FaHome } from "react-icons/fa";

const Nav = () => {
  return (
    <header className="flex-row">
      <h2>
        <a
          className="home-name"
          href="/"
          style={{ color: "#3bc14a", marginLeft: "15px" }}
        >
          {/* <FaHome /> */}
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a className="nav-text" href="/about" style={{ color: "#3bc14a" }}>
              About Me
            </a>
          </li>
          <li className="mx-2">
            <a className="nav-text" href="/mywork" style={{ color: "#3bc14a" }}>
              My Work
            </a>
          </li>
          <li className="mx-2">
            <a
              className="nav-text"
              href="/contactme"
              style={{ color: "#3bc14a" }}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
