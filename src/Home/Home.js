import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: '5em'
  },
  title: {
    fontFamily: 'ApercuMedium',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  }
}));

function Home(props) {  
  const [count, setCount] = useState(0);
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography variant="h4" className={classes.title} gutterBottom>Dashboards</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card
            title="Orders"
            button="Manage Orders"
            description="View and update orders. Find orders by email or order ID."
            route="/orders"
            image={process.env.PUBLIC_URL + 'img/orders.png'}
          />
        </Grid>
        <Grid item xs={4}>
          <Card
            title="Board"
            button="View Board"
            description="Add, manage, and share information to your team."
            route="/board"
            image={ process.env.PUBLIC_URL + 'img/board.png' }
          />
        </Grid>
        <Grid item xs={4}>

        </Grid>
      </Grid>
      <h3>Inventory Services</h3>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card
            title="New Product Listing"
            button="Add New Product"
            description="List a new product to your online store."
            route="/inventory"
            image={ process.env.PUBLIC_URL + 'img/new-product.png' }
          />
        </Grid>
        <Grid item xs={4}>
          <Card
            title="Product Stock"
            button="Update Stock"
            description="Increase or decrease product availability."
            route="/inventory"
            image={ process.env.PUBLIC_URL + 'img/product-stock.png' }
          />
        </Grid>
        <Grid item xs={4}>
          <Card
            title="Product Information"
            button="Update Product Information"
            description="Update products name, type, description, etc."
            route="/inventory"
            image={ process.env.PUBLIC_URL + 'img/product-information.png' }
          />
        </Grid>
      </Grid>

      <h3>Account Settings</h3>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card
            title="User Accounts"
            button="Manage User Accounts"
            description="Create or remove accounts that have access to this dashboard."
            route="/settings"
            image={ process.env.PUBLIC_URL + 'img/manage-accounts.png' }
          />
        </Grid>
        <Grid item xs={4}>
          <Card
            title="Change Password"
            button="Change Password"
            description="Change the password to your account."
            route="/settings"
            image={ process.env.PUBLIC_URL + 'img/change-password.png' }
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;