import mongoose from 'mongoose'
import config from '../../config/config.default'

mongoose.connect(config.DBURL)

//models

import User from './user'

export default {
  User
}
