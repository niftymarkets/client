import axios from 'axios';

export const url = '';

  // axios({
  //   method: 'post',
  //   url: url,
  //   data: JSON.stringify(smurf),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })

// This function replaces the commented axios call above
export const axiosPost = (method, url, data, headers) => {
  return axios({ method, url, data, headers });
}

/*
In actionCreator.js import axiosPost and then inside
actionCreator function run:

axiosPost('post', url, JSON.stringify(smurf), {'Content-Type': 'application/json'})
  .then(res => dispatch(...))
  .catch(err => dispatch(...)
  .finally(() => dispatch(...);

*/

export default axiosPost;