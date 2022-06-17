import './App.css';
import Home from './components/Home';
// import Projects from './components/MyWork';
import React, { useState } from 'react';
import Nav from './components/Nav';
import Foot from './components/Footer';


function App() {
  const [navChoices] = useState([
    {
      name: "about me"
    },
    {
      name: "My Work"
    },
    {
      name: "Contact Me"
    }
  ]);

  const [currentScreen, setCurrentScreen] = useState(navChoices[0])

  return (
    <div>
      <Nav
      navChoices={navChoices}
      setCurrentScreen={setCurrentScreen}
      currentScreen={currentScreen}
      ></Nav>
      <main>
        <Home></Home>
      </main>
      <Foot></Foot>
    </div>
  )
 
 
 
  // return (
  //   <div>
  //   <Home></Home>
  //   <main>
  //     <div>
  //   <Projects></Projects>
  //   </div>
  //   </main>
  //   </div>
  // );
}

export default App;
