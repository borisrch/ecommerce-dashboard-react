import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import UnarchiveIcon from '@material-ui/icons/Unarchive';
import BlueGrey from '@material-ui/core/colors/blueGrey';

const useStyles = makeStyles(theme => ({
  button: {
    fontFamily: 'ApercuMedium',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function UpdateProductStock() {
  const classes = useStyles();

  return (
    <Button variant="outlined" color="primary" className={classes.button}>
      Update Product Stock
      <UnarchiveIcon className={classes.rightIcon}>Update Product Stock</UnarchiveIcon>
    </Button>
  )
}