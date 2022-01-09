import React from 'react'
import { makeStyles } from '@mui/styles';

interface Props  {
    children: React.ReactNode;
}

const useStyles = makeStyles({
    root: {
      backgroundColor: 'red !important',
      marginBottom : '10px',
      width: '500px'
    }
  });


const ExperianceCard = (props: Props)=>{
    const classes = useStyles();
    return (<div className={classes.root}> 
        { props.children  }
    </div>)
}

export default ExperianceCard;
