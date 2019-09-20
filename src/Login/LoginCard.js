import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, Typography, InputAdornment, CircularProgress } from '@material-ui/core';
import { LockOutlined, PersonOutline } from '@material-ui/icons'
import ErrorMessage from './ErrorMessage';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    // boxShadow: '0 0 1px 0 rgba(0,0,0,.22)',
    boxShadow: '0 0 11px #eaf0f6',
  },
  margin: {
    margin: theme.spacing(2)
  },
  title: {
    fontFamily: 'ApercuMedium',
    marginBottom: theme.spacing(6),
    paddingTop: '20vh'
  },
  textfield: {
    marginBottom: theme.spacing(4),
  },
  password: {
    marginBottom: theme.spacing(1),
  },
  inactive: {
    color: '#757575'
  },
  active: {
    color: '#2196F3'
  },
  button: {
    marginTop: theme.spacing(4),
  }
}));

const Login = (props) => {
  const classes = useStyles();


  // Misc UI indicators
  const [username, setUsername] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const [submit, setSubmit] = React.useState(false);

  // Values
  const [creds, setCreds] = React.useState({
    username: 'name@company.com',
    password: '',
  });
  const [errors, setErrors] = React.useState({
    username: false,
    password: false
  });

  const onSubmit = () => {
    setSubmit(true);

    if (!isEmpty(creds.username) && !isEmpty(creds.password)) {
      props.userSignInRequest(creds);

    } else {
      setSubmit(false);
      if (isEmpty(creds.username)) {
        setErrors({
          username: true
        });
      }
      if (isEmpty(creds.password)) {
        setErrors({
          ...errors,
          password: true
        })
      }
    }
  }

  const ShowErrorMessage = () => {
    setSubmit(false);
    return (
      <ErrorMessage variant={props.errorMessage.variant} message={props.errorMessage.message.message} />
    );
  }

  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <div className={classes.margin}>
          <Typography variant="h4" className={classes.title} gutterBottom>Welcome back!</Typography>
          <TextField
            className={classes.textfield}
            id="username"
            label="Username"
            type="email"
            variant="outlined"
            value={creds.username}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutline className={username ? classes.active : classes.inactive} />
                </InputAdornment>
              ),
            }}
            onFocus={() => setUsername(true)}
            onBlur={() => setUsername(false)}
            onChange={(e) => setCreds({ ...creds, username: e.target.value })}
            autoComplete="off"
            disabled={submit}
            error={errors.username}
            fullWidth
            autoFocus
            required
          />
          <TextField
            className={classes.password}
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            value={creds.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined className={password ? classes.active : classes.inactive} />
                </InputAdornment>
              ),
            }}
            onFocus={() => setPassword(true)}
            onBlur={() => setPassword(false)}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
            autoComplete="off"
            disabled={submit}
            error={errors.password}
            fullWidth
            required
          />
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <FormControlLabel control={
                <Checkbox
                  color="primary"
                  disabled={submit}
                />
              } label="Remember me" />
            </Grid>
            <Grid item>
              <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary" disabled={submit}>Forgot password</Button>
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.button}>
            <Button
              variant="contained"
              color="primary"
              style={{ boxShadow: "none", width: 100, marginBottom: '1rem' }}
              onClick={onSubmit}
              disabled={submit}>
              {
                submit ? <CircularProgress style={{ color: '#fff' }} size={24} /> : <Typography>Sign In</Typography>
              }
            </Button>
            <div style={{ width: 352, height: 112 }}>
              {
                props.errorMessage.message ? <ShowErrorMessage /> : null
              }
            </div>
          </Grid>
        </div>
      </Paper>
    </Container>
  )
}

Login.propTypes = {
  userSignInRequest: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  }
}

export default connect(mapStateToProps)(Login);