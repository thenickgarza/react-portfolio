import './App.css';
import React from 'react';
// import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';
// import MyWork from './components/MyWork';
// import ContactMe from './components/ContactMe'
import Home from './components/Home';
// import Projects from './components/MyWork';
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function App() {

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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </nav>
    </header>
    
    
    
    
    
    
    
    
    // <>
    // <Router>
    //   <Nav />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="mywork" element={<MyWork />} />
    //       <Route path="contactme" element={<ContactMe/>} />
    //     </Routes>
    // </Router>
    // </>
   )
}

export default App;

