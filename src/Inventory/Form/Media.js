import React from 'react';
import { makeStyles, Grid, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'ApercuMedium'
  },
  formControl: {
    minWidth: 120,
    marginTop: theme.spacing(2)
  },
}));

export default function Media() {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid} spacing={4}>
      <Grid item className={classes.box} xs={4}>
        <Box>
          <Typography variant="h5" className={classes.title} gutterBottom>Basics</Typography>
          <Typography variant="subtitle1">Name, brand, and description let shoppers quickly scan through each product.</Typography>
        </Box>
      </Grid>
      <Grid container item className={classes.box} xs={8}>
        <Grid item xs={12}>

        </Grid>
      </Grid>
    </Grid>
  )
}