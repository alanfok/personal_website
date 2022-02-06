import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './component/navBar/NavBar';
import Experience from './component/experience/Experience';
import Skill from './component/skill/Skill';
import Contact from './component/contact/Contact';
import AboutMe from './component/aboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Experience></Experience>
      <Skill></Skill>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </div>
  );
}

export default App;
