import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './component/navBar/NavBar';
import Experience from './component/experience/Experience';
import Skill from './component/skill/Skill';
import Contact from './component/contact/Contact';
import AboutMe from './component/aboutMe/AboutMe';
import Photo from './component/photo/Photo';
import { Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Grid } from '@mui/material';

function App() {
  AOS.init();
  return (
    <div className="App">
      <NavBar></NavBar>
      <Grid container spacing={0}>
        <Photo></Photo>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Experience></Experience>
          <Skill></Skill>
          <AboutMe></AboutMe>
          <Contact></Contact>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}

export default App;
