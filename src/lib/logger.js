import log4js from 'koa-log4'
import path from 'path'
import logConfig from '../../log4js.json'

log4js.configure(logConfig, { cwd: path.join(__dirname, '../../logs') })
