require = require('esm')(module/*, options*/)
const dotenv = require('dotenv')
const { app } = require('./src/app')

dotenv.config()

app.listen(process.env.PORT || 8080, '0.0.0.0', console.log(`> server is running on http://localhost:${process.env.PORT || 8080}`))