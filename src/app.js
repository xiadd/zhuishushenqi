import Koa from 'koa'
import path from 'path'
import views from 'koa-views'
import serve from 'koa-static'
import log4js from 'koa-log4'
import bodyParser from 'koa-bodyparser'
import config from '../config/config.default'
import DB from './model'
import router from './router'
import setCorrectResponse from './middleware'
import './lib/logger'

const app = new Koa()

app.context.config = config
//中间件
app.use(serve(path.resolve('./static')))

app.use(bodyParser())
app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }))
app.use(setCorrectResponse())
app.use(router.routes()).use(router.allowedMethods())


export default app
