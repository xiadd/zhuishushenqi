const Service = require('egg').Service
const axios = require('axios')

const pageUrl = 'http://www.aixdzs.com/'
const apiUrl = 'http://api.ixdzs.com'

class NovelService extends Service {
  /**
   * 
   * @param {object} query 查询书籍列表
   * @param {string} query.start 开始数量
   * @param {string} query.limit 每页数量，默认为0
   * @param {string} query.type 排序类型 new｜hot｜over
   */
  async list ({ start = 0, limit = 20, type = 'new' }) {
    const { data } = await axios.get(`${apiUrl}/book-sort`, {
      params: { start, limit, type }
    })
    return data
  }
}

module.exports = NovelService