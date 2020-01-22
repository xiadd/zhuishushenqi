const Controller = require('egg').Controller

class NovelController extends Controller {
  /**
   * 获取书籍列表
   */
  async list() {
    const { ctx } = this
    const novels = await ctx.service.novel.list({
      start: ctx.params.start || 0,
      limit: ctx.params.limit || 20,
      type: ctx.params.type || 'new'
    })
    ctx.body = novels
  }

  /**
   * 获取书籍详情
   */
  async detail() {
    const { ctx } = this
    const detail = await ctx.service.novel.detail(ctx.params.id)
    ctx.body = detail
  }

  /**
   * 获取章节详细内容
   */
  async chapterDetail () {
    const { ctx } = this
    const detail = await ctx.service.novel.getChapterContent(ctx.params.id, ctx.params.cid)
    ctx.body = detail
  }

  async searchBooks () {
    const { ctx } = this
    const books = await ctx.service.novel.searchBooksBytBookNameOrAuthorName({
      query: ctx.params.query,
      limit: ctx.params.limit || 20,
      start: ctx.params.start || 0
    })
    ctx.body = books
  }
}

module.exports = NovelController
