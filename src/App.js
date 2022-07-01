import './App.css';
import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {

  return (
    <Router>
      <Nav />
      <AnimatedRoutes />
      
    </Router>
  )
}

export default App;

