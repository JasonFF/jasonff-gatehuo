'use strict';
const fetch = require('isomorphic-fetch');

function init() {
  return fetchHuoData()
}

function fetchHuoData() {
  return fetch('https://yobit.net/api/3/depth/btc_usd').then(res => res.json())
}
module.exports = {
  init,
};
