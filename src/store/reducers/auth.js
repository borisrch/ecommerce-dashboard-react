import { SET_CURRENT_USER, SET_INVALID_CREDENTIALS } from '../actions/types/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
        error: {}
      }

    case SET_INVALID_CREDENTIALS:
      return {
        isAuthenticated: false,
        user: {},
        error: action.error
      }

    default:
      return state;
  }
}