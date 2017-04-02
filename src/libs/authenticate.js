const jwt = require('jsonwebtoken')
import { JWTSecret } from '../../config/config.default'

/**
 * [生成json web token]
 * @param  {Object} data 需要加密的数据
 * @param  {[Object]} opts jwt 相关选项
 * @return {[type]}      [description]
 */
export default (data, opts) => {
  if (typeof data != 'object' || typeof opts !== 'object') {
    throw new TypeError('data or opts must be json object')
  }
  return jwt.sign(data, JWTSecret, opts)
}
