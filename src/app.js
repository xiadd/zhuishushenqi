import Koa from 'koa'
import path from 'path'
import serve from 'koa-static'
import morgan from 'koa-morgan'
import mount from 'koa-mount'
import fs from 'fs'
// import session from 'koa-generic-session'
import bodyParser from 'koa-bodyparser'
// import redisStore from 'koa-redis'
import config from 'config'
import router from './router'
import { setCors } from './middleware'
// const store = redisStore({
//   db: 0
// })

const accessLogStream = fs.createWriteStream(path.resolve(__dirname, '../logs/access.log'), { flags: 'a' })

const app = new Koa()
// app.keys = ['keys', 'keykeys']

app.use(morgan('combined', { stream: accessLogStream }))
// app.use(session({
//   store
// }))



app.context.config = config
//中间件
// app.use(async (ctx, next) => {
//   if (ctx.originalUrl.indexOf('_next') === -1) {
//     store.get[ctx.originalUrl] = store.get[ctx.originalUrl] || 0
//     await store.set(store.get[ctx.originalUrl], ++store.get[ctx.originalUrl])
//   }
//   console.log(store.get[ctx.originalUrl])
//   await next()
// })
app.use(bodyParser())
// app.use(setCorrectResponse())
app.use(setCors())
app.use(mount('/static', serve(path.resolve(__dirname, '../static'))))
// app.use(restc.koa2())
// app.use(setRateLimit())

export {  
  router, app
}
 