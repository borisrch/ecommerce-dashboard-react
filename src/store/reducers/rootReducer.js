import { combineReducers } from 'redux';
import product from './product';
import auth from './auth';

export default combineReducers({
  product,
  auth
});