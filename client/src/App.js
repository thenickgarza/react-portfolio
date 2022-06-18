import './App.css';
import Home from './components/Home';
// import Projects from './components/MyWork';
import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';
import contactMe from './components/Contact';
import MyWork from './components/MyWork';


function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="mywork" element={<MyWork />} />
        <Route path="conact" element={<contactMe/>} />
      </Routes>
    </Router>
  )
}

export default App;

