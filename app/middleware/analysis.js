module.exports = (options, app) => {
  return async function analysis (ctx, next) {
    await next()
    console.log(ctx.ip)
  }
}