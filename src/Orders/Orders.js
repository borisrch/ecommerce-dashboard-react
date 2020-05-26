import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Typography, Paper, IconButton, Button } from "@material-ui/core/";
import { Refresh, Sort } from "@material-ui/icons";

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

  return (
    <React.Fragment>
      <Container maxWidth="lg">
      <PageTitle title="Orders"/>
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
