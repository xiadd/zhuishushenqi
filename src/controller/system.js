import { execSync } from 'child_process'
import os from 'os'

const startTime = Date.now()

export default {
  async getSystemInfo (ctx) {
    const gitHash = execSync('git rev-parse HEAD').toString().trim()
    const memory = process.memoryUsage().rss / 1024 /1024
    const runTime = process.uptime()
    const requestCount = ctx.debug.request
    const routes = Object.keys(ctx.debug.routes).sort((a, b) => ctx.debug.routes[b] - ctx.debug.routes[a]).filter(r => r.indexOf('_next') === -1)
    const hotRoutes = routes.slice(0, 50)
    let hotRoutesValue = ''
    hotRoutes.forEach((item) => {
        hotRoutesValue += `${ctx.debug.routes[item]}&nbsp;&nbsp;${item}<br>`
    })
    ctx.body = {
      gitHash, memory, runTime, requestCount, hotRoutesValue
    }
  }
}