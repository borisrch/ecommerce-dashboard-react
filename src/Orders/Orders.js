import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import SortIcon from "@material-ui/icons/Sort";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Box from "@material-ui/core/Box";

import Search from "./Search";
import SideBar from "./Sidebar";
import OrdersTable from "./OrdersTable";
import PageTitle from './../Common/PageTitle';

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

export default function Orders() {
  const classes = useStyles();

  const [lastUpdatedTime, setLastUpdatedTime] = React.useState("N/A");

  React.useEffect(() => {
    // props.dispatch(fetchProducts());
    setLastUpdatedTime(`${new Date().toLocaleString()}`);
  }, []);

  const history = useHistory();
  const changeRoute = () => {
    history.push("/dashboard/home");
  };

  return (
    <React.Fragment>
      <Container maxWidth="lg">
      <PageTitle title="Orders"/>
        <Paper className={classes.toolbar}>
          <div style={{ display: "flex" }}>
            <div>
              <IconButton className={classes.button} color="primary">
                <SortIcon />
              </IconButton>
              <IconButton className={classes.button}>
                <RefreshIcon />
              </IconButton>
            </div>
            <div className={classes.action}>
              <Button>Test</Button>
            </div>
          </div>
        </Paper>
        <OrdersTable />
        <Container className={classes.lastUpdated}>
          <Typography variant="overline">
            Orders up to date. Last retrieved at {lastUpdatedTime}
          </Typography>
        </Container>
      </Container>
    </React.Fragment>
  );
}
