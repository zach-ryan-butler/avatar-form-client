import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center'
  }
}))

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense" className={classes.root}>
        <Typography variant="h5" color="inherit">
          Avatar
        </Typography>
      </Toolbar>
    </AppBar>
  )
}