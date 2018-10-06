import { execSync } from 'child_process'
import os from 'os'

const startTime = Date.now()

export default {
  async getSystemInfo (ctx) {
    const gitHash = execSync('git rev-parse HEAD').toString().trim()
    const memory = process.memoryUsage().rss / 1024 /1024
    const runTime = (Date.now() - startTime) / 1000
    const systemMem = os.totalmem() / 1024 / 1024
    const systemFreeMem = os.freemem() / 1024 / 1024
    const systemPlatform = execSync('uname -a').toString().trim()
    const systemCpus = os.cpus().length
    const clientIp = ctx.ip
    ctx.body = {
      gitHash, memory, runTime, systemMem, systemFreeMem, systemPlatform, systemCpus, clientIp
    }
  }
}