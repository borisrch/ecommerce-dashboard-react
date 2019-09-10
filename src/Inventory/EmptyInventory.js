import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InboxIcon from '@material-ui/icons/Inbox';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  emptyIcon: {
    fontSize: '10em'
  },
  emptyContainer: {
    marginTop: '25vh',
  }
}));


export default function EmptyInventory() {

  const classes = useStyles();

  return (
    <Container className={classes.emptyContainer}>
      <Box display="flex" justifyContent="center">
        <InboxIcon color="primary" className={classes.emptyIcon} />
      </Box>
      <Container>
      <Typography variant="h6" align="center" gutterBottom>
          Inventory is currently empty.
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Create New Product to add new items to Inventory.
        </Typography>
      </Container>
    </Container>
  )
}