import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography, Grid } from '@material-ui/core';

import Column from './Column';
import PageTitle from './../Common/PageTitle';

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: 'ApercuMedium',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    color: '#525f7f'
  },
}));

export default function Board() {
  const classes = useStyles();

  return (
    <Container>
      <PageTitle title="Board"/>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Column name="Meetings"></Column>
        </Grid>
        <Grid item xs={4}>
          <Column name="Ideas"></Column>
        </Grid>
        <Grid item xs={4}>
          <Column name="Company"></Column>
        </Grid>
      </Grid>

    </Container>
  );
}