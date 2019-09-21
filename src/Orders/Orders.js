import React, { Fragment } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import OrdersTable from './OrdersTable';
import Search from './Search';
import SideBar from './Sidebar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 210;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    zIndex: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  title: {
    fontFamily: 'ApercuMedium',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  paper: {
    boxShadow: '0 0 1px 0 rgba(0,0,0,.22)',
  }
}));

export default function Orders() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={8}>
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
        <Typography variant="h6" className={classes.title} gutterBottom>Orders</Typography>
        <OrdersTable />
      </Container>
    </React.Fragment>
  );
};
