const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    const res = await ctx.service.novel.list({})
    await ctx.render('home.nj', { books: res.books || [] })
  }
}

module.exports = HomeController
