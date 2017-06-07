import Redis from 'ioredis'
import ratelimit from 'koa-ratelimit'

// 集中处理接口响应
function setCorrectResponse() {
  return async (ctx, next) => {
    try {
      await next()
      if (ctx.status === 404) {
        ctx.throw(404)
      }
      if (ctx.url.indexOf('/restc') !== -1) {
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
function setCors () {
  return async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    await next()
  }
}

// 限制频率
function setRateLimit () {
  return ratelimit({
    db: new Redis(),
    duration: 60000,
    errorMessage: 'Sometimes You Just Have to Slow Down.',
    id: (ctx) => ctx.ip,
    headers: {
      remaining: 'Rate-Limit-Remaining',
      reset: 'Rate-Limit-Reset',
      total: 'Rate-Limit-Total'
    },
    max: 100
  })
}

export default {
  setCorrectResponse,
  setCors,
  setRateLimit
}
