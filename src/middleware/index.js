
// 集中处理接口响应
function setCorrectResponse() {
  return async (ctx, next) => {
    try {
      await next()
      if (ctx.status === 404) {
        ctx.throw(404)
      }
      ctx.body = {
        code: 1,
        message: 'ok',
        data: ctx.body
      }
    } catch (e) {
      ctx.status = e.status || 500
      ctx.body = {
        code: -1,
        message: e.message
      }
    }
  }
}

export default setCorrectResponse
