import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Cv from '../../cv/resume.pdf';

export default function Contact() {
  const test = () => {
    window.open(Cv);
  };
  return (
    <div>
      <h1>This is the contact section</h1>
      <button onClick={test}>TEST</button>
      <h1>This is the contact section</h1>
      <br></br>
    </div>
  );
}
