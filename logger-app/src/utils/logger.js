const bunyan = require('bunyan')
const packageJson = require('../../package.json')

let obj
module.exports = {
  getLogger () {
    if (obj === undefined)
      obj = bunyan.createLogger({
        name: `${packageJson.name}-${packageJson.version}`,
        stream: process.stdout,
        level: process.env.LOG_LEVEL || bunyan.INFO,
        serializers: bunyan.stdSerializers
      })
    return obj
  }
}
