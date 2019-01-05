// 集中处理接口响应
export function setCorrectResponse() {
  return async (ctx, next) => {
    try {
      await next()
      if (ctx.status === 404) {
        ctx.throw(404)
      }
      if (ctx.url.indexOf('/') !== -1) {
        return
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

// 支持跨域
export function setCors () {
  return async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    await next()
  }
}

/**
 * 设置子路由
 * @param {string} path 
 * @param {object} routes 
 */
export function setSubdomains (path, routes) {
  return async (ctx, next) => {
    await next()
  }
}