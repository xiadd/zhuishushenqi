import Koa from 'koa'
import fs from 'mz/fs'

const app = new Koa()

app.use(async ctx => {
  const files = await fs.readFile('./utils.js')
  ctx.body = files.toString();
});

export default app
