import React from 'react';
import NavBar from './Navbar';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '5.125rem',
    ['@media (max-width: 600px)']: {
      marginTop: '4rem',
    },
    ['@media (max-width: 480px)']: {
      marginTop: '3.5rem',
    },
  },
});

const LayoutOne = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Box className={classes.root}>{children}</Box>
    </>
  );
};

export default LayoutOne;
