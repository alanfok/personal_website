import React from 'react';
import ExperienceCard from '../experienceCard/ExperienceCard';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Experience = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>This is the Experiance Section</h1>
      <div className={classes.root}>
        <div>
          ß
          <ExperienceCard title="CompanyName">
            This is the first Experiance
          </ExperienceCard>
          <ExperienceCard title="CompanyName">
            This is the second Experiance
          </ExperienceCard>
          <ExperienceCard title="CompanyName">
            This is the third Experiance
          </ExperienceCard>
        </div>
      </div>
    </div>
  );
};

export default Experience;
