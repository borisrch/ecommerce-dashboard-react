import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InboxIcon from '@material-ui/icons/Inbox';
import { Box } from '@material-ui/core';
import Construction from '../Common/img/construction.png';

const useStyles = makeStyles(theme => ({
  image: {
    width: 600
  },
  bold: {
    fontFamily: 'ApercuBold',
  }
}));


export default function EmptyInventory() {

  const classes = useStyles();

  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <img className={classes.image} src={ Construction } />
      </Box>
      <Container>
      <Typography variant="subtitle1" align="center" className={classes.bold} gutterBottom>
          Inventory is empty.
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Create New Product to add new items to Inventory.
        </Typography>
      </Container>
    </Container>
  )
}