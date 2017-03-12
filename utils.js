const axios = require('axios')

const instance = axios.create({
  headers: {
    'x-powered-by': 'xiadd'
  }
})
