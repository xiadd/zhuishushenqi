require = require("esm")(module/*, options*/)
const supertest = require('supertest')
const { app } = require('../src/app')
const request = supertest(app.callback())

test('服务器启动', async () => {
  const response = await request.get('/')
  expect(response.status).toBe(200)
})