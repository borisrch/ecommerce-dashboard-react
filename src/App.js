import React, { Fragment } from "react";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { userSignOutRequest } from './store/actions/auth';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import Avatar from '@material-ui/core/Avatar';

import Orders from './Orders/Orders';
import Home from './Home/Home';
import Inventory from './Inventory/Inventory';
import Settings from './Settings/Settings';
import Board from './Board/Board';
import Login from './Login/Login';
import PrivateRoute from './Common/PrivateRoute';

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
  },
  avatar: {
    position: 'absolute',
    top: '0.3rem',
    left: 'calc(100% - 50px)',
    backgroundColor: green[500],
    '&:hover': {
      cursor: 'pointer'
    }
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
  overrides: {
    MuiOutlinedInput: {
      root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          border: "2px solid",
          borderColor: blue[200]
        }
      }
    }
  }
});

function App(props) {
  const classes = useStyles();

  const { isAuthenticated } = props.auth;

  const logout = (e) => {
    e.preventDefault();
    props.userSignOutRequest();
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" render={({ location }) => (
            <Fragment>
              <Paper className={classes.root}>
                <Tabs value={location.pathname} centered indicatorColor="primary" textColor="primary" >
                  <Tab label="Dashboards" value="/dashboard/home" component={Link} to="/dashboard/home" disableRipple className={classes.tab} />
                  <Tab label="Board" value="/dashboard/board" component={Link} to="/dashboard/board" disableRipple className={classes.tab} />
                  <Tab label="Orders" value="/dashboard/orders" component={Link} to="/dashboard/orders" disableRipple className={classes.tab} />
                  <Tab label="Inventory" value="/dashboard/inventory" component={Link} to="/dashboard/inventory" disableRipple className={classes.tab} />
                  <Tab label="Settings" value="/dashboard/settings" component={Link} to="/dashboard/settings" disableRipple className={classes.tab} />
                </Tabs>
              </Paper>
              <Switch>
                <Route path="/dashboard/settings" component={Settings} />
                <Route path="/inventory/wizard" exact render={() => <div>Inventory Wizard</div>} />
                <Route path="/dashboard/inventory" component={Inventory} />
                <Route path="/dashboard/board" component={Board} />
                <Route path="/dashboard/orders" component={Orders} />
                <PrivateRoute path="/dashboard/home" authed={isAuthenticated} component={Home} />
              </Switch>
            </Fragment>
          )}
          />
          {isAuthenticated ? <Avatar className={classes.avatar} onClick={logout}>BC</Avatar> : null}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
  userSignOutRequest: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { userSignOutRequest })(App);
