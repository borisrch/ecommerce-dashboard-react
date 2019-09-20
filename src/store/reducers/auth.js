import { SET_CURRENT_USER, SET_INVALID_CREDENTIALS, SET_INTERNAL_SERVER_ERROR, SET_CONNECTION_REFUSED_ERROR } from '../actions/types/types';
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
        error: {
          message: action.error,
          variant: 'error'
        }
      }

    case SET_INTERNAL_SERVER_ERROR:
      return {
        isAuthenticated: false,
        user: {},
        error: {
          message: action.error,
          variant: 'warning'
        }
      }

    case SET_CONNECTION_REFUSED_ERROR:
      return {
        isAuthenticated: false,
        user: {},
        error: {
          message: action.error,
          variant: 'error'
        }
      }

    default:
      return state;
  }
}