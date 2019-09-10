import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import DeleteForever from '@material-ui/icons/DeleteForever';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme => ({
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  dangerButton: {
    borderColor: red[500],
    color: red[500],
    '&:hover': {
      backgroundColor: red[50]
    },
    fontFamily: 'ApercuMedium',
  },
}));

export default function CreateProduct() {
  const classes = useStyles();

  return (
    <Button variant="outlined" className={classes.dangerButton}>
      Remove Product Listing
      <DeleteForever className={classes.rightIcon}>Remove Product Listing</DeleteForever>
    </Button>
  )
}