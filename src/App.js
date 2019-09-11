import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from "@material-ui/core/colors/blue";

import Orders from './Orders/Orders';
import Home from './Home/Home';
import Inventory from './Inventory/Inventory';
import Settings from './Settings/Settings';
import Board from './Board/Board';

function page404() {
  return <h1>404!</h1>
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    zIndex: 3000,
    boxShadow: '0 10px 20px rgba(0,0,0,0.025), 0 2px 2px rgba(0,0,0,0.05)',
    borderRadius: '0px',
  },
  tab: {
    fontFamily: 'ApercuMedium',
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    }
  },
  typography: {
    fontFamily: [
      'Apercu',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
            <Paper className={classes.root}>
              <Tabs value={location.pathname} centered indicatorColor="primary" textColor="primary" >
                <Tab label="Dashboards" value="/" component={Link} to="/" disableRipple className={classes.tab} />
                <Tab label="Orders" value="/orders" component={Link} to="/orders" disableRipple className={classes.tab} />
                <Tab label="Board" value="/board" component={Link} to="/board" disableRipple className={classes.tab} />
                <Tab label="Inventory" value="/inventory" component={Link} to="/inventory" disableRipple className={classes.tab} />
                <Tab label="Settings" value="/settings" component={Link} to="/settings" disableRipple className={classes.tab} />
              </Tabs>
            </Paper>
            <Switch>
                <Route path="/settings" component={ Settings } />
                <Route path="/inventory/wizard" exact render={() => <div>Inventory Wizard</div>} />
                <Route path="/inventory"  component={ Inventory } />
                <Route path="/board" component={ Board } />
                <Route path="/orders" component={ Orders } />
                <Route path="/" exact component={ Home }  />
            </Switch>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
