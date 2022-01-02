import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './conponent/navBar/NavBar';
import Experiance from './conponent/experiance/Experiance';
import Skill from './conponent/skill/Skill';
import Contact from './conponent/contact/Contact';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Experiance></Experiance>
      <Skill></Skill>
      <Contact></Contact>
    </div>
  );
}

export default App;
