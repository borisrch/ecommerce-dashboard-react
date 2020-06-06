import React from "react";
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import faker from "faker";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Typography, Paper, IconButton, Button } from "@material-ui/core/";
import { Refresh, Sort } from "@material-ui/icons";

import OrdersTable from "./OrdersTable";
import Manage from "./Manage/Manage";
import PageTitle from "./../Common/PageTitle";

const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    zIndex: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  paper: {
    boxShadow: "0 0 1px 0 rgba(0,0,0,.22)",
  },
  toolbar: {
    boxShadow: "0 0 11px #eaf0f6",
    display: "inline-block",
    marginBottom: theme.spacing(1),
    width: "100%",
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    marginLeft: "auto",
    marginTop: "0.8rem",
    marginRight: theme.spacing(2),
  },
  lastUpdated: {
    marginTop: theme.spacing(2),
    padding: 0,
    color: "rgb(112, 117, 122)",
  },
}));

// TODO: Organize scheme to its own repository.

function createData(
  orderId,
  created,
  firstName,
  lastName,
  email,
  address,
  city,
  country,
  zip,
  fulfillment,
  total,
  status,
  updated
) {
  return {
    orderId,
    created,
    firstName,
    lastName,
    email,
    address,
    city,
    country,
    zip,
    fulfillment,
    total,
    status,
    updated,
  };
}

// TODO: State should be retrieved from here.

const populate = (n) => {
  const data = [];
  const set = new Set();
  for (let i = 0; i < n; i++) {
    let random = faker.random.number(100);

    while (set.has(random)) {
      random = faker.random.number(100);
    }

    set.add(random);

    data.push(
      createData(
        random,
        faker.date.recent(7).toLocaleDateString(),
        faker.name.firstName(),
        faker.name.lastName(),
        faker.internet.email(),
        faker.address.streetAddress(),
        faker.address.city(),
        faker.address.country(),
        faker.address.zipCode(),
        "Processing",
        faker.commerce.price(),
        "Paid",
        "Today"
      )
    );
  }

  return data;
};

const ordersData = populate(8);

export default function Orders(props) {
  const classes = useStyles();

  const [pageControl, setPageControl] = React.useState({
    manage: false,
    orderDetails: null,
  });

  const [lastUpdatedTime, setLastUpdatedTime] = React.useState("N/A");

  React.useEffect(() => {
    // props.dispatch(fetchProducts());
    setLastUpdatedTime(`${new Date().toLocaleString()}`);
  }, []);

  const changeRoute = () => {
    // const route = "/dashboard/orders/manage";
    // history.push(route);
    setPageControl({
      manage: true,
    });
  };

  const OrdersMain = () => {
    return (
      <Container maxWidth="lg">
        <PageTitle title="Orders" />
        <Paper className={classes.toolbar}>
          <div style={{ display: "flex" }}>
            <div>
              <IconButton className={classes.button} color="primary">
                <Sort />
              </IconButton>
              <IconButton className={classes.button}>
                <Refresh />
              </IconButton>
            </div>
            <div className={classes.action}>
              <Button>Go</Button>
            </div>
          </div>
        </Paper>
        <Route />
        <OrdersTable orders={ordersData} pageControl={setPageControl} />
      </Container>
    );
  };

  // TODO: Need to refactor. This is a workaround for Router (since its connected to Tabs, its difficult to hack)

  return (
    <React.Fragment>
      {pageControl.manage ? (
        <Manage pageControl={pageControl} setPageControl={setPageControl} />
      ) : (
        <OrdersMain />
      )}
    </React.Fragment>
  );
}
