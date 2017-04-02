import { User } from '../model'
import authenticate from '../lib/authenticate'

export default {
  async userLogin (ctx) {
    const userData = ctx.request.body
    const token = authenticate(userData, { expiresIn: '1000 days' })
    ctx.body = token
  }
}
