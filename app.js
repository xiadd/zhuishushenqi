const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const crypto = require('crypto')

const app = new Koa()
const router = new Router()

//中间件
app.use(bodyParser())

router.get('/wechat', async ctx => {
  const query = ctx.query
  const tmpStr = crypto.createHash('sha1').update([query.timestamp, '12345', query.nonce].sort().join('')).digest('hex')
  if (tmpStr === query.signature) {
    ctx.body = query.echostr
  } else {
    ctx.body = {
      code: 100,
      error: 'Invalid signature'
    }
  }
})

//message handle
router.post('/wechat', async ctx => {
  
})
app.use(router.routes()).use(router.allowedMethods())

app.listen(8080, () => console.log('server is running on port 8080'))
