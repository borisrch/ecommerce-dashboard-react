import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './store/actions/auth';
import setAuthorizationToken from './utils/setAuthorizationToken';
import getTokenTimeRemaining from './utils/getTokenTimeRemaining';

import './index.css';
import App from './App';

// Redux dev-tools setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(thunk))
)

// Authorizes if user token is valid on page.
if (localStorage.token) {

  const decodedToken = jwtDecode(localStorage.token);
  if (decodedToken.exp < new Date().getTime() / 1000) {
    console.log("EXPIRED");
  } else {
    setAuthorizationToken(localStorage.token);
    store.dispatch(setCurrentUser(decodedToken));
    getTokenTimeRemaining(decodedToken);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
