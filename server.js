require('babel-core/register')
require("babel-polyfill")
const app = require('./app')

app.listen(8080, console.log('server is running'))
