import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import topphoto from '../../photo/1234.jpg';

const Photo = () => {
  return (
    <div>
      <img style={{ width: '100%' }} src={topphoto}></img>
    </div>
  );
};

export default Photo;
