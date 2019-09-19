import axios from 'axios';

const URL = 'http://localhost:8080';

// export function userSignInRequest(userData) {
//   return dispatch => {
//      axios.post('http://localhost:8080/login', userData);
//   }
// }

export function userSignInRequest(userData) {
  // return async (dispatch) => {
  //   try {
  //     const res = await axios.post(`${URL}/login`, userData);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return async (dispatch) => {
    const settings = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    };
    try {
      const res = await fetch(`${URL}/login`, settings);

      if (res.ok) {
        for (let header of res.headers) {
          console.log(`Name: ${header[0]}, Value: ${header[1]}`);
        }
      }

    } catch (error) {
      console.log(error);
    }
  }
}