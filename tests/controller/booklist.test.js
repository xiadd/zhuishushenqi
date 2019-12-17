require = require("esm")(module/*, options*/)
const supertest = require('supertest')
const { app } = require('../../src/app')
const request = supertest(app.callback())

describe('书单信息', () => {
  it('获取书单列表 GET /booklists', async () => {
    const response = await request.get('/booklists')
    expect(response.status).toBe(200)
  })

  it('获取书单列表详情 GET /booklists/:id', async () => {
    const response = await request.get('/booklists/5454ccfdbd7c68e31be5577e')
    expect(response.status).toBe(200)
  })
})