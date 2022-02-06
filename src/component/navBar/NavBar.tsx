import React, { useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GrLinkedinOption, GrGithub } from 'react-icons/gr';

//    background: #343a40;
const useStyles = makeStyles({
  root: {
    backgroundColor: '#343a40 !important',
  },
  leftBox: {
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'end',
  },
});

const NavBar = () => {
  const classes = useStyles();

  const handleClick = useCallback((type: 'LinkedIn' | 'GitHub') => {
    if (type === 'LinkedIn') {
      //alert("direct to linkedin");
      window.open(
        'http://linkedin.com/in/fok-poon-kai-alan-850417151',
        '_blank'
      );
    } else if (type === 'GitHub') {
      window.open('https://github.com/alanfok', '_blank');
    } else {
      alert('hellow, this is the first button');
    }
  }, []);

  // Read it yourself
  // useMemo
  // useCallback

  const handleGithubClick = useCallback(() => {
    handleClick('GitHub');
  }, [handleClick]);

  const handleLinkedInClick = useCallback(() => {
    handleClick('LinkedIn');
  }, [handleClick]);

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          LOGO
        </Typography>
        <Typography
          variant="h6"
          component="div"
          noWrap
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          News
        </Typography>
        <Typography
          variant="h6"
          component="div"
          noWrap
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          News2
        </Typography>
        <Box className={classes.leftBox}>
          <Button
            variant="contained"
            color="success"
            onClick={handleGithubClick}
          >
            <GrGithub style={{ fontSize: 'x-large' }} />
          </Button>
          <span>&nbsp;</span>
          <Button
            variant="contained"
            color="success"
            onClick={handleLinkedInClick}
          >
            <GrLinkedinOption
              style={{ fontSize: 'x-large', color: 'skyblue' }}
            />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    //<h1>This is a navBar </h1>);
  );
};

export default NavBar;
