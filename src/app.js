import Koa from 'koa'
import path from 'path'
import views from 'koa-views'
import serve from 'koa-static'
import morgan from 'koa-morgan'
import mount from 'koa-mount'
import fs from 'fs'
import bodyParser from 'koa-bodyparser'
import config from 'config'
import router from './router'
import { setCorrectResponse, setCors } from './middleware'

const accessLogStream = fs.createWriteStream(path.resolve(__dirname, '../logs/access.log'), { flags: 'a' })

const app = new Koa()

app.use(morgan('combined', { stream: accessLogStream }))

app.context.config = config
//中间件
app.proxy = true

app.use(views(__dirname + '/views', {
  map: {
    njk: 'nunjucks'
  }
}))
app.use(bodyParser())
app.use(setCorrectResponse())
app.use(setCors())
app.use(mount('/static', serve(path.resolve(__dirname, '../static'))))
// app.use(setRateLimit())
app.use(router.routes()).use(router.allowedMethods())

export default app
