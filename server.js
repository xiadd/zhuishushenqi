if (process.env.NODE_ENV === 'development') {
  require('babel-register')
  require('babel-polyfill')
}

//set app
const app = process.env.NODE_ENV === 'development'
? require('./src/app')
: require('./dist/app')

// if (process.env.NODE_ENV === 'development') {
//   const https = require('https')
//
//   const opts = {
//     key: fs.readFileSync('./ssl/dev.key'),
//     cert: fs.readFileSync('./ssl/dev.pem')
//   }
//
//   https.createServer(opts, app.callback()).listen(443, () => console.log('https server is running'))
// }

app.listen(8080, console.log('server is running'))
