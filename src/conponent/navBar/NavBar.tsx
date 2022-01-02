import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar ,Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
      backgroundColor: 'black !important'
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
             </Toolbar>
        </AppBar>
    //<h1>This is a navBar </h1>);
    )
}

export default NavBar;