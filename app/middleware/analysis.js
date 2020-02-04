module.exports = (options, app) => {
  return async function analysis (ctx, next) {
    await next()
    console.log(ctx.ip)
    const v = await app.redis.get(ctx.url)
    app.redis.set(ctx.url, v ? +v + 1 : 1)
  }
}