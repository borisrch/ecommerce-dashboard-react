import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(4),
  },
}));

export default function Loading(props) {
  const classes = useStyles();

  if (props.visible) {
    return (
      <Grid container direction="row" justify="center" alignItems="center" className="container">
        <Grid item>
          <CircularProgress className={classes.progress} />
        </Grid>
      </Grid>
    )
  } else {
    return null;
  }
}