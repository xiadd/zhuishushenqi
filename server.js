import next from 'next'
import { app as server, router } from './src/app'

const dev = process.env.NODE_ENV !== 'production' // 是否是生产环境
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare()
  .then(() => {
    router.get('/', async ctx => {
      console.log(ctx.originUrl)
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

    server.use(router.routes()).use(router.allowedMethods())
    server.listen(8080, '0.0.0.0', console.log(`server is running on http://localhost:${8080}`))
  })
