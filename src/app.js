import Koa from 'koa'
import path from 'path'
import views from 'koa-views'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import config from '../config/config.default'
import DB from './model'
import router from './router'
import setCorrectResponse from './middleware'

const app = new Koa()

app.context.config = config

//中间件
app.use(serve(__dirname + '/static'))

app.use(bodyParser())
app.use(setCorrectResponse())
app.use(router.routes()).use(router.allowedMethods())

export default app
