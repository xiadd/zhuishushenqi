import axois from 'axios'
import { bookSearch } from '../api'

export default {
  // 获取搜索热词
  async getHotwords(ctx) {
    const response = await axois.get(bookSearch.searchHotwords)
    ctx.body = response.data
  },

  // 热门搜索
  async getHotbooks(ctx) {
    const response = await axois.get(bookSearch.hotWord)
    ctx.body = response.data
  },

  // 搜索补全 ?query={keyword}
  async autoComplete(ctx) {
    const response = await axois.get(bookSearch.autoComplete, {
      params: { ...ctx.query }
    })
    ctx.body = response.data
  }

}