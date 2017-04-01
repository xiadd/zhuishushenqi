if (process.env.NODE_ENV === 'development') require('babel-register')
require('babel-polyfill')

//set app
const app = process.env.NODE_ENV === 'development'
? require('./src/app')
: require('./dist/app')

app.listen(3000, console.log('server is running'))
