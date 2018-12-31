import axios from 'axios';
axios.defaults.baseURL = 'https://c.y.qq.com/';
export function Get(url) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'get',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      }
    }).then(response => {
      resolve(response);
    })
  })
}

export function Post(url, paramObj) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlecnoded'
      }
    }).then(response => {
      resolve(response);
    })
  })
}
