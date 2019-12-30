const Controller = require('egg').Controller;

class NovelController extends Controller {
  /**
   * 获取书籍列表
   */
  async list() {
    const { ctx } = this;
    const novels = await ctx.service.novel.list({ start: 0 });
    ctx.body = novels;
  }

  /**
   * 获取书籍详情
   */
  async detail() {
    const { ctx } = this
    const detail = await ctx.service.novel.detail(ctx.params.id)
    ctx.body = detail
  }
}

module.exports = NovelController;
