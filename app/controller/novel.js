const Controller = require('egg').Controller

class NovelController extends Controller {
  async list () {
    const { ctx, service } = this
    const novels = await service.novel.list({ start: 0 })
    ctx.body = novels
  }
}

module.exports = NovelController