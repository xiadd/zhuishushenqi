import mongoose from 'mongoose'
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const userSchema = new Schema({
  username: {type: String, required: true},
  password: String
})

export default mongoose.model('User', userSchema)
