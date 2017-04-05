import mongoose from 'mongoose'
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const userSchema = new Schema({
  openid: { required: true, type: String },
  bookShelf: { required: true, type: Array }
})

// 通过openid获取用户
userSchema.method('findUserByOpenid', function (openid) {
  return this.findOne({ openid: openid })
})

export default mongoose.model('User', userSchema)
