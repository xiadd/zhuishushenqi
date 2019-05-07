import next from 'next'
import dotenv from 'dotenv'
import { app as server, router } from './src/app'

dotenv.config()

const dev = process.env.NODE_ENV !== 'production' // 是否是生产环境
const app = next({ dev })
const handle = app.getRequestHandler()
const Sentry = require('@sentry/node')

Sentry.init({ dsn: 'https://9cbb493840624c8b953fa67ef26db7c3@sentry.io/1366430' })

app.prepare()
  .then(() => {
    router.get('/', async ctx => {
      ctx.res.statusCode = 200
      await app.render(ctx.req, ctx.res, '/', ctx.query)
      ctx.respond = false
    })

    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })

    server.listen(8080, '0.0.0.0', console.log(`> server is running on http://localhost:${8080}`))
  })
