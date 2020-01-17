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

  async analysis () {
    const { ctx } = this
    await ctx.render('analysis.nj')
  }
}

module.exports = HomeController
