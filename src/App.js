import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe'
import Home from './components/Home';
// import Projects from './components/MyWork';
function App() {

  return (
    <>
    <Nav />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="mywork" element={<MyWork />} />
        <Route path="contactme" element={<ContactMe/>} />
        </Routes>
        
      </>
    
  )
}

export default App;



