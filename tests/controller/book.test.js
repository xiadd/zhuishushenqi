require = require("esm")(module/*, options*/)
const supertest = require('supertest')
const { app } = require('../../src/app')
const request = supertest(app.callback())

describe('书籍信息', () => {
  
  it('获取书籍详情 GET /book-info/:id ', async () => {
    const response = await request.get('/book-info/5953237a7d5497c2703972ac')
    expect(response.status).toBe(200)
  })

  it('获取书籍相关推荐 GET /recommend/:id', async () => {
    const response = await request.get('/recommend/5953237a7d5497c2703972ac')
    expect(response.status).toBe(200)
    expect(response.body.ok).toBe(true)
  })

  it('获取作者名下的书籍 GET /author-books?author=忘语', async () => {
    const response = await request.get('/author-books?author=%E5%BF%98%E8%AF%AD')
    expect(response.status).toBe(200)
    expect(response.body.ok).toBe(true)
  })

  it('获取书籍源 GET /book-sources', async () => {
    const response = await request.get(`/book-sources?book=5953237a7d5497c2703972ac`)
    expect(response.status).toBe(200)
  })

  it('获取书籍章节列表 GET /book-chapters/:id', async () => {
    const response = await request.get('/book-chapters/5953237a7d5497c2703972ae')
    expect(response.status).toBe(200)
  })

  it('获取章节内容 GET /chapters/:link', async () => {
    const link = encodeURIComponent('http://picture.zhuishushenqi.com/chapter/5954813b2e554d6604a6178b?cv=1524213678477')
    const response = await request.get(`/chapters/${link}`)
    expect(response.status).toBe(200)
  })

  it('获取漫画章节内容 GET /picture/:link', async () => {
    const link = encodeURIComponent('http://picture.zhuishushenqi.com/chapter/5954813b2e554d6604a6178b?cv=1524213678477')
    const response = await request.get(`/picture/${link}`)
    expect(response.status).toBe(200)
  })

  it('获取搜索结果 GET /search', async () => {
    const keyword = encodeURIComponent('凡人')
    const response = await request.get(`/search?keyword=${keyword}`)
    expect(response.status).toBe(200)
  })

})