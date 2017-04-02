import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import config from '../config/config.default'
import DB from './model'
import router from './router'
import setCorrectResponse from './middleware'

const app = new Koa()

app.context.config = config

//中间件
app.use(setCorrectResponse())

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

export default app
