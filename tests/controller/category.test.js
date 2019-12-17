require = require("esm")(module/*, options*/)
const supertest = require('supertest')
const { app } = require('../../src/app')
const request = supertest(app.callback())

describe('分类信息', () => {
  it('获取父分类以及书籍数量 GET /categories', async () => {
    const response = await request.get('/categories')
    expect(response.status).toBe(200)
  })

  it('获取父分类以及子分类 GET /sub-categories', async () => {
    const response = await request.get('/sub-categories')
    expect(response.status).toBe(200)
  })

  it('获取分类下的书籍信息 GET /category-info', async () => {
    const response = await request.get('/category-info?gender=picture')
    expect(response.status).toBe(200)
  })
})