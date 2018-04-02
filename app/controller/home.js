'use strict';

const Controller = require('egg').Controller;

const exchange = require('./exchange')

class HomeController extends Controller {
  async index() {
    // this.ctx.body = 'hi, egg';
    // console.log(exchange.init())
    return exchange.init().then(res => {
      this.ctx.body = res
    })
  }
}

module.exports = HomeController;
