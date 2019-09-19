import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import LoginCard from './LoginCard';
import Welcome from '../Common/img/welcome.png';
import { userSignInRequest } from '../store/actions/auth';

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%'
  },
}));

function Login(props) {
  const classes = useStyles();

  const { userSignInRequest } = props;

  return (
    <Container style={{ height: '80vh' }}>
      <Grid container direction="row" justify="center" alignItems="center" style={{ height: '100%' }}>
        <Grid item xs={5}>
          <LoginCard userSignInRequest={userSignInRequest} />
        </Grid>
        <Grid item xs={7}>
          <img className={classes.image} src={Welcome} />
        </Grid>
      </Grid>
    </Container>
  )
}

Login.propTypes = {
  userSignInRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignInRequest })(Login);