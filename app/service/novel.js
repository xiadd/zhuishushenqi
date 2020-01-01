const Service = require('egg').Service
const axios = require('axios')
const cheerio = require('cheerio')

const apiUrl = 'http://api.aixdzs.com'

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
    const [{ data }, chapters] = await Promise.all([axios.get(`${apiUrl}/book/${id}`), this.getChapters(id)])
    data.chapters = chapters
    data.cover = data.cover ? 'https://img22.aixdzs.com/' + data.cover : 'https://img22.aixdzs.com/nopic2.jpg'
    return data
  }

  /**
   * 获取书籍章节列表
   * @param {string} id 书籍id
   */
  async getChapters (id) {
    const url = `http://read.aixdzs.com/1/${id}/`
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    const chapters = []
    $('li.chapter a').each((index, item) => {
      chapters.push({
        cid: $(item).attr('href'),
        wordCount: $(item).attr('title'),
        title: $(item).text()
      })
    })
    return chapters
  }

  /**
   * 获取章节详细内容
   * @param {string} id 书籍id
   * @param {string} cid 章节id
   */
  async getChapterContent (id, cid) {
    const url = `http://read.aixdzs.com/0/${id}/`
    const [{ data }, book] = await Promise.all([axios.get(url + cid), this.detail(id)])
    const $ = cheerio.load(data, { decodeEntities: false })
    const chapter = {
      title: $('h1').text(),
      content: $('.content').html(),
      book
    }
    return chapter
  }
}

module.exports = NovelService;
