import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rightIcon: {
    fontSize: '1em',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  label: {
    letterSpacing: '.07272727em',
    fontSize: '.6875rem',
    fontWeight: 500,
    lineHeight: '1rem',
    textTransform: 'uppercase',
    color: '#5f6368',
    marginLeft: '10px',
  },
  row: {
    // margin: theme.spacing(1),
    paddingTop: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#f5f5f5',
      cursor: 'pointer'
    }
  }
}));

function a() {
  return alert('hi');
}

export default function Password() {
  const classes = useStyles();

  const date = new Date().toLocaleString('en-US');

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Password
      </Typography>

      <div className={classes.row}>
        <Grid container onClick={a}>
          <Grid item xs={3}>
            <Typography variant="overline" className={classes.label} gutterBottom>
              Password
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" gutterBottom>
              •••••••••
            </Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography variant="subtitle1" gutterBottom>
          Last changed {date}
          </Typography>
        </Grid>
          <Grid item xs={1}>
            <Edit></Edit>
          </Grid>
        </Grid>
        <Divider light={true} />
      </div>

      <div className={classes.row}>
        <Grid container onClick={a}>
          <Grid item xs={3}>
            <Typography variant="overline" className={classes.label} gutterBottom>
              2-Step Verification
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle1" gutterBottom>
              Disabled
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Edit></Edit>
          </Grid>
        </Grid>
        <Divider light={true} />
      </div>

    </div>
  )
}