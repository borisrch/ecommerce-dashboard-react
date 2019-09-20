import React from 'react';
import clsx from 'clsx';

import { Grid, Typography, Divider, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Edit from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles(theme => ({
  label: {
    letterSpacing: '.07272727em',
    fontSize: '.6875rem',
    fontWeight: 500,
    lineHeight: '1rem',
    textTransform: 'uppercase',
    color: '#5f6368',
    marginLeft: '10px',
  },
  hover: {
    // margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#f5f5f5',
      cursor: 'pointer'
    }
  },
  row: {
    paddingTop: theme.spacing(1),
  },
  icon: {
    alignContent: 'flex-end',
    textAlign: 'right'
  }
}));

const FieldRow = (props) => {
  const classes = useStyles();

  return (
    <div className={clsx([classes.row, (props.onClick && classes.hover)])}>
      <Grid container onClick={props.onClick}>
        <Grid item xs={3}>
          <Typography variant="overline" className={classes.label} gutterBottom>
            {props.label}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle1" gutterBottom>
            {props.value}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Box display="flex" justifyContent="center">
            {props.onClick ? <Edit /> : null}
          </Box>
        </Grid>
      </Grid>
      <Divider light={true} />
    </div>
  )
}

export default FieldRow;