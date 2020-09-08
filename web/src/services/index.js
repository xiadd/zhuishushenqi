import request from './request'

export function getDocs () {
  return request({
    method: 'GET',
    url: '/docs'
  })
}