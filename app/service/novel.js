const Service = require('egg').Service
const axios = require('axios')
const cheerio = require('cheerio')

const apiUrl = 'http://api.ixdzs.com'

class NovelService extends Service {
  /**
   *
   * @param {object} query 查询书籍列表
   * @param {string} query.start 开始数量
   * @param {string} query.limit 每页数量，默认为0
   * @param {string} query.type 排序类型 new｜hot｜over
   */
  async list({ start = 0, limit = 20, type = 'new' }) {
    const { data } = await axios.get(`${apiUrl}/book-sort`, {
      params: { start, limit, type },
    })
    data.books.forEach(book => {
      book.cover = book.cover ? 'https://img22.aixdzs.com/' + book.cover : 'https://img22.aixdzs.com/nopic2.jpg'
    })
    return data
  }

  /**
   * 获取书籍详情
   * @param {string} id 书籍id
   */
  async detail (id) {
    try {
      const { data } = await axios.get(`${apiUrl}/book/${id}`)
      data.cover = data.cover ? 'https://img22.aixdzs.com/' + data.cover : 'https://img22.aixdzs.com/nopic2.jpg'
      return data
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * 获取书籍章节列表
   * @param {string} id 书籍id
   */
  async getChapters (id) {
    try {
      const { data } = await axios.get(`${apiUrl}/content-ios/${id}`)
      data.chapters.forEach(c => {
        c.id = c.link.split('/')[1],
        delete c.link
      })
      return data
    } catch(err) {
      // do nothing
    }
  }

  /**
   * 获取章节详细内容
   * @param {string} id 书籍id
   * @param {string} cid 章节id
   */
  async getChapterContent (id, cid) {
    const { data } = await axios.get(`${apiUrl}/chapter/${id}/${cid}`)
    return data
  }

  /**
   * 通过书名或者作者名搜索小说
   * @param {string} params.query 搜索关键词
   */
  async searchBooksBytBookNameOrAuthorName (params) {
    const { data } = await axios.get(`${apiUrl}/book/search`, {
      params
    })
    data.books.forEach(book => {
      book.cover = book.cover ? 'https://img22.aixdzs.com/' + book.cover : 'https://img22.aixdzs.com/nopic2.jpg'
    })
    return data
  }
}

module.exports = NovelService;
