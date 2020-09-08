const Controller = require('egg').Controller
const path = require('path')
const { promises: fs } = require('fs')

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    ctx.set('Content-Type', 'text/html')
    ctx.body = await fs.readFile(path.resolve('app/public/build/index.html'))
  }

  async docs() {
    const { ctx } = this
    ctx.set('Content-Type', 'text/plain')
    ctx.body = await fs.readFile(path.resolve('README.md'))
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
