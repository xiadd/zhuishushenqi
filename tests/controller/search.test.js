require = require("esm")(module/*, options*/)
const supertest = require('supertest')
const { app } = require('../../src/app')
const request = supertest(app.callback())

describe('搜索相关', () => {
  it('获取搜索热词 GET /search-hotwords', async () => {
    const response = await request.get('/search-hotwords')
    expect(response.status).toBe(200)
  })

  it('热门搜索 GET /hot-books', async () => {
    const response = await request.get('/hot-books')
    expect(response.status).toBe(200)
  })

  it('搜索补全 GET /auto-complete?query={keyword}', async () => {
    const keyword = encodeURIComponent('凡人')
    const response = await request.get('/auto-complete?query=' + keyword)
    expect(response.status).toBe(200)
  })
})