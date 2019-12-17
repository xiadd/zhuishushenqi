require = require("esm")(module/*, options*/)
const supertest = require('supertest')
const { app } = require('../../src/app')
const request = supertest(app.callback())

describe('书籍评论相关', () => {
  it('获取书籍讨论 GET /book/discussions', async () => {
    const response = await request.get('/book/discussions?book=5953237a7d5497c2703972ac')
    expect(response.status).toBe(200)
  })

  it('获取书籍短评 GET /book/short-reviews', async () => {
    const response = await request.get('/book/short-reviews?book=5953237a7d5497c2703972ac')
    expect(response.status).toBe(200)
  })

  it('获取书籍长评 GET /book/reviews', async () => {
    const response = await request.get('/book/reviews?book=5953237a7d5497c2703972ac')
    expect(response.status).toBe(200)
  })
})