import axios from 'axios';

export function userSignInRequest(userData) {
  return dispatch => {
    return axios.post('http://localhost:8080/users/sign-up', userData);
  }
}