import './App.css';
import Home from './components/Home';
// import Projects from './components/MyWork';
import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe'


function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="mywork" element={<MyWork />} />
        <Route path="contactme" element={<ContactMe/>} />
      </Routes>
      
    </Router>
  )
}

export default App;

