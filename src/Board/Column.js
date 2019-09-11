import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';

import Post from './Post';

const useStyles = makeStyles(theme => ({
  paper: {
    boxShadow: '0 0 1px 0 rgba(0,0,0,.22)',
  }
}));

export default function Board() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Button fullWidth={true} variant="outlined" color="primary">
          <Add />
        </Button>
      </Paper>

      <Post />

    </React.Fragment>
  );
}