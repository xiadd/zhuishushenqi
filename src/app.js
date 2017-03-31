import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import config from '../config/config.default'
import DB from './model'
import router from './router'

const app = new Koa()

app.context.config = config

//中间件
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    console.log(err.message)
    ctx.throw(400, err)
  }
})

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

export default app
