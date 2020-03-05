const packageJson = require('../../package.json');
const os = require('os');

function decorateEventData(eventData) {
  const logObj = {
    time: new Date().toISOString(),
    name: `${packageJson.name}-${packageJson.version}`,
    hostname: os.hostname(),
    pid: process.pid,
    platform: process.platform,
    event: eventData,
  };
  return JSON.stringify(logObj);
}

module.exports = decorateEventData;
