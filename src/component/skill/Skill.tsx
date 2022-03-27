import React from 'react';
import { SiJava, SiJavascript, SiReact } from 'react-icons/si';
import { Grid } from '@mui/material';

const Skill = () => {
  return (
    <>
      <h1>This is Skill section</h1>

      <hr style={{ width: '80%' }}></hr>
      <h1>Skill</h1>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <SiJava style={{ fontSize: '75px' }}></SiJava>
        <SiJavascript style={{ fontSize: '75px' }}></SiJavascript>
        <SiReact style={{ fontSize: '75px' }}></SiReact>
      </div>
    </>
  );
};

export default Skill;
