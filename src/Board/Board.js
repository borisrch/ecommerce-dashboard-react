import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

import Column from './Column';

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: 'ApercuMedium',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
}));

export default function Board() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" className={classes.title}>Board</Typography>
      <Column></Column>
    </Container>
  );
}