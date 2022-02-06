import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar ,Typography , Button, IconButton, Box} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GrLinkedinOption, GrGithub } from 'react-icons/gr';

enum Type {
  Linkedin,
  GitHub
}
//    background: #343a40;
const useStyles = makeStyles({
    root: {
      backgroundColor: '#343a40 !important'
    },
    leftBox: {
      marginLeft : 'auto',
      display : 'flex',
      justifyContent : 'end',
    }
  });

const NavBar = () =>{
    const classes = useStyles();
    return  (
        <AppBar position='sticky' className={classes.root}>
             <Toolbar>
             <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>
                 <Typography variant="h6" component="div" noWrap sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                    News
                </Typography>
                <Typography variant="h6" component="div" noWrap sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                    News2
                </Typography>
              <Box className= {classes.leftBox}>
                  <Button variant="contained" color="success" onClick={()=> handleClick(Type.GitHub)}><GrGithub  style={{fontSize:'x-large'}}/></Button>
                  <span>&nbsp;</span>
                  <Button variant="contained" color="success" onClick={()=> handleClick(Type.Linkedin)}><GrLinkedinOption style={{fontSize:'x-large' , color: 'skyblue'}}/></Button>
             </Box>
             </Toolbar>
        </AppBar>
    //<h1>This is a navBar </h1>);
    )
}
// style={{ fontSize : 'xx-large' }}
const handleClick = (type : Type) => {
  if( type === Type.Linkedin ){
    //alert("direct to linkedin");
    window.open('http://linkedin.com/in/fok-poon-kai-alan-850417151', '_blank');
  }
  else {
    alert("hellow, this is the first button")
  }
};


export default NavBar;