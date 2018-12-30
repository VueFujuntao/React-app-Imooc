import {
  Get
} from './../axios.js';

export function getData() {
  const result = Get('musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=jso');
  return result;
}