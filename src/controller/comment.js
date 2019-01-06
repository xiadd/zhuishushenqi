import axios from 'axios'
import { comment } from '../api'

export default {
  /**
   * 讨论
   * query.book 书籍id 必须
   * @param {*} ctx 
   */
  async getBookComments (ctx) {
    const comments = await axios.get(comment.discussions, { params: ctx.query })
    ctx.body = comments.data
  },

  /**
   * 短评
   * query.book 书籍id 必须
   * @param {*} ctx 
   */
  async getBookShortReviews (ctx) {
    const discussions = await axios.get(comment.shortReviews, { params: ctx.query })
    ctx.body = discussions.data
  },

  /**
   * 长评
   * query.book 书籍id 必须
   * @param {*} ctx 
   */
  async getBookReviews (ctx) {
    const reviews = await axios.get(comment.bookReviews, { params: ctx.query })
    ctx.body = reviews.data
  }
}