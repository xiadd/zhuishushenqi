const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    await ctx.render('home.nj')
  }

  async examples () {
    const { ctx } = this
    await ctx.render('examples.nj')
  }
}

module.exports = HomeController
