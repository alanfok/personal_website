import React from 'react';
import { SiJava, SiJavascript, SiReact, SiSpringboot } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { Grid } from '@mui/material';

const Skill = () => {
  return (
    <>
      <h1>This is Skill section</h1>

      <hr style={{ width: '80%' }}></hr>
      <h1>Skill</h1>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <SiJava style={{ fontSize: '75px' }}></SiJava>
          <p>java</p>
        </div>
        <div>
          <SiJavascript style={{ fontSize: '75px' }}></SiJavascript>
          <p>JavaScript</p>
        </div>
        <div>
          <SiReact style={{ fontSize: '75px' }}></SiReact>
          <p>react</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div>
          <FaDatabase style={{ fontSize: '75px' }}></FaDatabase>
          <p>SQL</p>
        </div>
        <div>
          <SiSpringboot style={{ fontSize: '75px' }}></SiSpringboot>
          <p>Spring Boot</p>
        </div>
      </div>
    </>
  );
};

export default Skill;
