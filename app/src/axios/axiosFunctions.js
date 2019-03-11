import axios from 'axios';

export const url = '';

 
/* 
This function replaces the axios call below:
 axios({
    method: 'post',
    url: url,
    data: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })

*/
export const axiosPost = (method, url, data, headers) => {
  return axios({ method, url, data, headers });
}

/*
In actionCreator.js import axiosPost and then inside actionCreator function run:

axiosPost('post', url, JSON.stringify(data), {'Content-Type': 'application/json'})
  .then(res => dispatch(...))
  .catch(err => dispatch(...)
  .finally(() => dispatch(...);

*/

export default axiosPost;