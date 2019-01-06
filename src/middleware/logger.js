import { createLogger, format, transports } from 'winston'
import path from 'path'

const { combine, timestamp, simple, prettyPrint, splat } = format

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    splat(),
    simple()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.File({ filename: path.resolve('logs/error.log'), level: 'error' }),
    new transports.File({ filename: path.resolve('logs/access.log') })
  ]
})

export default logger