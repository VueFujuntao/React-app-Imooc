/*
 * @Author: fujuntao
 * @Date: 2018-12-26 20:11:01
 * @Last Modified by: fujuntao
 * @Last Modified time: 2018-12-27 21:54:26
 */
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