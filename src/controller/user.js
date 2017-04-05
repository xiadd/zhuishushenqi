import axios from 'axios'
import { User } from '../model'
import authenticate from '../lib/authenticate'
import config from '../../config/config.default'

export default {
  // 微信(小程序和公众号)用户登录
  async userLogin (ctx) {
    const userData = ctx.request.body
    const wxSessionUrl = `https://api.weixin.qq.com/sns/jscode2session?appid=${config.WXAppId}&secret=${config.WXSecret}&js_code=${ctx.query.code}&grant_type=authorization_code`
    const sessionData = await axios.get(wxSessionUrl)

    // 存储用户openid 这里不再解析获取用户信息直接通过openid标识用户唯一
    // 首先搜索数据库寻找用户是否已经存在
    const userExist = await User.findUserByOpenid(sessionData.data.openid)
    if (!userExist) {
      const loginUser = new User({
        openid: sessionData.data.openid,
        bookShelf: []
      })
      loginUser.save()
    }

    const token = authenticate({ openid: sessionData.data.openid }, { expiresIn: '1000 days' })
    ctx.body = token
  },

  // 获取书架
  async getBookShelf (ctx) {

  },

  // 获取用户信息
  async getUserInfo (ctx) {
    console.log(ctx.state.user)
    ctx.body = '123'
  },

  // 添加到书架
  async addToShelf (ctx) {

  },

  // 从书架删除
  async deleteFromShelf (ctx) {

  },

  //
}
