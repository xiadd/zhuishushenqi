export default {
  async index (ctx) {
    await ctx.render('index.njk', { debug: ctx.debug })
  }
}
