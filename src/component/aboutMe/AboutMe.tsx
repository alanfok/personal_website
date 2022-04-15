import React from 'react';
import Description from './Description';
import { Grid } from '@mui/material';
import photo from '../../photo/p_photo.jpeg';

export default function AboutMe() {
  return (
    <>
      <hr style={{ width: '80%' }}></hr>
      <h1>About me</h1>

      <img src={photo} style={{ width: '10%', borderRadius: '90%' }}></img>

      <Description
        name={
          <>
            <b>Alan Fok</b>
          </>
        }
      >
        Hi, I'm the last year Concordia Computer Science student , and want to
        be a Full stack developer.
        <br />
        <br />
        I've always had a passion for technology since I was young, even before
        becoming a Computer Science student. To become a Full stack developer, I
        learnt React and Node.JS by myself. and I also learned Java and C# in
        school and internship.
      </Description>
    </>
  );
}
