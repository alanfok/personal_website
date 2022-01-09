import React from 'react';
import ExperianceCard from '../experiance_card/ExperianceCard';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'center'
    }
  });


const Experiance = () => {
    const classes = useStyles();
    return (<div>
        <h1>This is the Experiance Section</h1>
        <div className={classes.root}>
          <div>
            <ExperianceCard>This is the first Experiance</ExperianceCard>
            <ExperianceCard>This is the second Experiance</ExperianceCard>
            <ExperianceCard>This is the third Experiance</ExperianceCard>
          </div>
        </div>
    </div>)
}

export default Experiance;