import { User } from '../model'

export default {
  async getUserInfo (ctx) {
    const uid = ctx.params.uid
    const user = await User.findById(uid)
    ctx.body = user
  },
  async registerNewUser (ctx) {
    const data = ctx.request.body
    const user = new User({
      username: data.username,
      password: data.password
    })
    try {
      const newUser = await user.save()
      ctx.body = ctx.request.body
    } catch (e) {
      ctx.body = e
    }
  }
}
