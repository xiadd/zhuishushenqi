import dotenv from 'dotenv'
import app from './src/app'

dotenv.config()

app.listen(8080, console.log('server is running'))
