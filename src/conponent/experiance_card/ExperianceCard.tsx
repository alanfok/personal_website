import React from 'react'
import { makeStyles } from '@mui/styles';
import { padding } from '@mui/system';

interface Props  {
    title: string,
    children: React.ReactNode;
}

const useStyles = makeStyles({
    root: {
      backgroundColor: 'red !important',
      marginBottom : '10px',
      width: '500px',
      borderRadius: '20px',
      paddingBottom: '2px'
    },
    header:{
      paddingTop: "3px"
    }
  });


const ExperianceCard = (props: Props)=>{
    const classes = useStyles();
    return (<div className={classes.root}> 
        <h3 className={classes.header}>{props.title}</h3>
        { props.children  }
    </div>)
}

export default ExperianceCard;
