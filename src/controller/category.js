import axios from 'axios'
import { category } from '../api'

export default {
  //获取父分类以及书籍数量
  async getCategoriesWithBookCount (ctx) {
    const categories = await axios.get(category.categoryWithBookCount)
    ctx.body = categories.data
  },

  // 获取父分类以及子分类
  async getCategoriesWithSubCategories (ctx) {
    const subCategories = await axios.get(category.categoryWithSubCategories)
    ctx.body = subCategories.data
  },

  // 获取分类下的书籍信息
    async getCategoryInfo (ctx) {
    if (!Object.keys(ctx.query).length) {
      ctx.throw(400, new Error('you must pass some query string: { gender, type, major, minor, start, limit }'))
    }
    const categoriesInfo = await axios.get(category.categoryInfo, { params: ctx.query })
    ctx.body = categoriesInfo.data
  }
}
