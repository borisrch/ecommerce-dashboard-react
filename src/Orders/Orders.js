import React from "react";
import { Route } from "react-router-dom";
import faker from "faker";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { fetchProducts } from "../store/actions/products";

import {
  IconButton,
  Button,
  Container,
  Box,
  Tooltip,
} from "@material-ui/core/";
import RefreshIcon from "@material-ui/icons/Refresh";
import SortIcon from "@material-ui/icons/Sort";
import SearchIcon from "@material-ui/icons/Search";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import blue from "@material-ui/core/colors/blue";

import OrdersTable from "./OrdersTable";
import Manage from "./Manage/Manage";
import DraftOrder from "./DraftOrder";
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
  iconButton: {
    margin: theme.spacing(1),
  },
  button: {
    backgroundColor: blue[100],
    // margin: theme.spacing(1),
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& $icon": {
        color: "white",
      },
    },
  },
  icon: {
    color: theme.palette.primary.main,
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

const Orders = (props) => {
  const classes = useStyles();

  const [pageControl, setPageControl] = React.useState({
    manage: false,
    orderDetails: null,
    draftOrder: false,
    root: true,
  });

  const openDraftOrder = () => {
    setPageControl({
      manage: false,
      orderDetails: null,
      draftOrder: true,
      root: false,
    });
  };

  const [lastUpdatedTime, setLastUpdatedTime] = React.useState("N/A");

  React.useEffect(() => {
    props.dispatch(fetchProducts());
    setLastUpdatedTime(`${new Date().toLocaleString()}`);
  }, []);

  const OrdersMain = (props) => {
    return (
      <Container maxWidth="lg">
        <PageTitle title="Orders" />
        <Box display="flex" flexGrow={1}>
          <Tooltip title="Filter" placement="top">
            <IconButton className={classes.iconButton}>
              <SortIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Refresh" placement="top">
            <IconButton className={classes.iconButton}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Search" placement="top">
            <IconButton className={classes.iconButton}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <Box
            display="flex"
            flexGrow={1}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Tooltip title="Create Draft Order" placement="top">
              <Button
                className={classes.button}
                color="primary"
                onClick={openDraftOrder}
              >
                <PlaylistAddIcon className={classes.icon} />
              </Button>
            </Tooltip>
          </Box>
        </Box>
        <Route />
        <OrdersTable orders={ordersData} pageControl={setPageControl} />
      </Container>
    );
  };

  // TODO: Need to refactor. This is a workaround for Router (since its connected to Tabs, its difficult to hack)

  return (
    <React.Fragment>
      {pageControl.manage && (
        <Manage pageControl={pageControl} setPageControl={setPageControl} />
      )}
      {pageControl.root && <OrdersMain />}
      {pageControl.draftOrder && (
        <DraftOrder pageControl={pageControl} setPageControl={setPageControl} />
      )}
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    products: state.product.products,
  };
}

export default connect(mapStateToProps, null)(Orders);
