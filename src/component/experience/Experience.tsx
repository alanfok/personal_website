import React from 'react';
import AOS from 'aos';
import ExperienceCard from '../experienceCard/ExperienceCard';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
});

AOS.init();
const Experience = () => {
  const classes = useStyles();
  return (
    <>
      <h1>This is the Experiance Section</h1>
      <div className={classes.root}>
        <>
          <ExperienceCard title="CIM MAINTENANCE, Brossard, QC">
            This is the first Experiance
          </ExperienceCard>
          <ExperienceCard title="AHEEVA, Montreal, QC">
            This is the second Experiance
          </ExperienceCard>
          <ExperienceCard title="CAE Inc, Montreal, QC">
            This is the third Experiance
          </ExperienceCard>
        </>
      </div>
    </>
  );
};

export default Experience;
