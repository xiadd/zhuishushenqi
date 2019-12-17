import Koa from 'koa'
import path from 'path'
import morgan from 'koa-morgan'
import fs from 'fs'
import config from 'config'
import router from './router'
import { setCors, countRequests } from './middleware'
import logger from './middleware/logger'

const accessLogStream = fs.createWriteStream(path.resolve(__dirname, '../logs/access.log'), { flags: 'a' })

const app = new Koa()

// 6 debug
app.context.debug = {
  request: 0,
  routes: []
}

app.use(countRequests())

app.use(morgan('combined', { stream: accessLogStream }))
app.context.config = config
app.use(setCors())

app.use(router.routes()).use(router.allowedMethods())

app.on('error', error => {
  logger.error(error)
})

export { app }