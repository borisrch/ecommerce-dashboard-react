import axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types/types';

const URL = 'http://localhost:8080';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function userSignInRequest(userData) {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/login`, userData);
      if (res.headers.authorization) {
        // Expect "Bearer "
        const token = res.headers.authorization.substring(7, res.headers.authorization.length);
        localStorage.setItem('token', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwtDecode(token)));
      }
    } catch (error) {
      console.log(error);
    }
  }
}