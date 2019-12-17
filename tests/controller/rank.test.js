require = require("esm")(module/*, options*/)
const supertest = require('supertest')
const { app } = require('../../src/app')
const request = supertest(app.callback())

describe('书籍排名相关', () => {
  it('获取排名分类 GET /rank-category', async () => {
    const response = await request.get('/rank-category')
    expect(response.status).toBe(200)
  })

  it('获取排名详情 GET /rank/:id', async () => {
    const response = await request.get('/rank/54d42d92321052167dfb75e3')
    expect(response.status).toBe(200)
  })
})